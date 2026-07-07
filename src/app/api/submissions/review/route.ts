import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { scoreSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const admin = await requireAdmin();
    const body = await req.json();
    const data = scoreSchema.parse(body);

    const submission = await db.submission.update({
      where: { id: data.submissionId },
      data: {
        score: data.score,
        feedback: data.feedback,
        status: data.status,
        reviewedAt: new Date(),
        reviewedBy: admin.id,
      },
      include: {
        assignment: { include: { internship: true } },
        user: true,
      },
    });

    if (data.status === "APPROVED") {
      const totalAssignments = await db.assignment.count({
        where: { internshipId: submission.assignment.internshipId },
      });

      const approvedSubmissions = await db.submission.count({
        where: {
          userId: submission.userId,
          status: "APPROVED",
          assignment: { internshipId: submission.assignment.internshipId },
        },
      });

      const progress = Math.round((approvedSubmissions / totalAssignments) * 100);

      await db.enrollment.update({
        where: {
          userId_internshipId: {
            userId: submission.userId,
            internshipId: submission.assignment.internshipId,
          },
        },
        data: {
          progress,
          status: progress >= 100 ? "COMPLETED" : "IN_PROGRESS",
          ...(progress >= 100 ? { completedAt: new Date() } : {}),
        },
      });

      const pointsToAdd = data.score >= 100 ? 50 : data.score >= 80 ? 25 : 10;
      await db.user.update({
        where: { id: submission.userId },
        data: {
          totalPoints: { increment: pointsToAdd },
          jobReadinessScore: { increment: Math.min(5, Math.floor(data.score / 20)) },
        },
      });
    }

    await db.notification.create({
      data: {
        userId: submission.userId,
        type: "SUBMISSION",
        title: `Submission ${data.status}`,
        message: `Your submission for "${submission.assignment.title}" has been ${data.status.toLowerCase()}.${data.score ? ` Score: ${data.score}%` : ""}`,
        link: "/student/assignments",
      },
    });

    return NextResponse.json({ submission });
  } catch (error) {
    if (error instanceof Error && error.message === "Forbidden") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return NextResponse.json({ error: "Review failed" }, { status: 500 });
  }
}
