import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createCertificate } from "@/lib/certificate";
import { db } from "@/lib/db";
import { z } from "zod";

const issueSchema = z.object({
  userId: z.string(),
  internshipId: z.string(),
  studentName: z.string(),
  programName: z.string(),
  duration: z.string(),
  skillsCovered: z.array(z.string()),
  score: z.number().min(0).max(100),
});

export async function POST(req: NextRequest) {
  try {
    const admin = await requireAdmin();
    const body = await req.json();
    const data = issueSchema.parse(body);

    const existing = await db.certificate.findFirst({
      where: {
        userId: data.userId,
        internshipId: data.internshipId,
      },
    });

    if (existing) {
      return NextResponse.json({ error: "Certificate already issued" }, { status: 409 });
    }

    const { certificate } = await createCertificate({
      ...data,
      issuedBy: admin.id,
    });

    await db.user.update({
      where: { id: data.userId },
      data: {
        totalPoints: { increment: 100 },
        jobReadinessScore: { increment: 10 },
      },
    });

    const certifiedBadge = await db.badge.findUnique({
      where: { name: "Certified Pro" },
    });

    if (certifiedBadge) {
      await db.userBadge.upsert({
        where: {
          userId_badgeId: {
            userId: data.userId,
            badgeId: certifiedBadge.id,
          },
        },
        update: {},
        create: {
          userId: data.userId,
          badgeId: certifiedBadge.id,
        },
      });
    }

    await db.notification.create({
      data: {
        userId: data.userId,
        type: "CERTIFICATE",
        title: "Certificate Issued!",
        message: `Congratulations! Your certificate for "${data.programName}" has been issued.`,
        link: "/student/certificates",
      },
    });

    return NextResponse.json({ certificate });
  } catch (error) {
    if (error instanceof Error && error.message === "Forbidden") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return NextResponse.json({ error: "Failed to issue certificate" }, { status: 500 });
  }
}
