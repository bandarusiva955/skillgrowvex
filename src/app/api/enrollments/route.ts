import { NextRequest, NextResponse } from "next/server";
import { syncUserFromClerk } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const user = await syncUserFromClerk();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { internshipId } = await req.json();

    if (!internshipId) {
      return NextResponse.json({ error: "Internship ID required" }, { status: 400 });
    }

    const internship = await db.internship.findUnique({
      where: { id: internshipId, isActive: true },
    });

    if (!internship) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    const existing = await db.enrollment.findUnique({
      where: {
        userId_internshipId: { userId: user.id, internshipId },
      },
    });

    if (existing) {
      return NextResponse.json({ error: "Already enrolled" }, { status: 409 });
    }

    const enrollment = await db.enrollment.create({
      data: {
        userId: user.id,
        internshipId,
        status: "ENROLLED",
      },
    });

    await db.notification.create({
      data: {
        userId: user.id,
        type: "ENROLLMENT",
        title: "Enrollment Confirmed",
        message: `You have been enrolled in "${internship.title}".`,
        link: "/student/programs",
      },
    });

    return NextResponse.json({ enrollment });
  } catch {
    return NextResponse.json({ error: "Enrollment failed" }, { status: 500 });
  }
}
