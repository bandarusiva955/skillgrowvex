import { NextRequest, NextResponse } from "next/server";
import { syncUserFromClerk } from "@/lib/auth";
import { uploadFile } from "@/lib/cloudinary";
import { db } from "@/lib/db";
import { MAX_FILE_SIZE } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const user = await syncUserFromClerk();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const assignmentId = formData.get("assignmentId") as string;

    if (!file || !assignmentId) {
      return NextResponse.json({ error: "File and assignment ID required" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
    }

    const assignment = await db.assignment.findUnique({
      where: { id: assignmentId },
      include: { internship: true },
    });

    if (!assignment) {
      return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
    }

    const enrollment = await db.enrollment.findUnique({
      where: {
        userId_internshipId: {
          userId: user.id,
          internshipId: assignment.internshipId,
        },
      },
    });

    if (!enrollment) {
      return NextResponse.json({ error: "Not enrolled in this program" }, { status: 403 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${user.id}-${assignmentId}-${Date.now()}`;

    let fileUrl: string;
    try {
      const result = await uploadFile(buffer, "submissions", fileName);
      fileUrl = result.url;
    } catch {
      fileUrl = `local://${fileName}`;
    }

    const submission = await db.submission.create({
      data: {
        userId: user.id,
        assignmentId,
        fileUrl,
        fileName: file.name,
        fileType: file.type || "application/octet-stream",
        fileSize: file.size,
        status: "SUBMITTED",
      },
    });

    await db.notification.create({
      data: {
        userId: user.id,
        type: "SUBMISSION",
        title: "Submission Received",
        message: `Your submission for "${assignment.title}" has been received.`,
        link: "/student/assignments",
      },
    });

    return NextResponse.json({ submission });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
