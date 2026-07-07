import { NextRequest, NextResponse } from "next/server";
import { syncUserFromClerk } from "@/lib/auth";
import { uploadFile } from "@/lib/cloudinary";
import { db } from "@/lib/db";

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_RESUME_SIZE = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const user = await syncUserFromClerk();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Resume file required" }, { status: 400 });
    }

    if (file.size > MAX_RESUME_SIZE) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
    }

    const ext = file.name.split(".").pop()?.toLowerCase();
    const allowedExt = ["pdf", "doc", "docx"];
    if (!ext || !allowedExt.includes(ext)) {
      return NextResponse.json(
        { error: "Only PDF, DOC, and DOCX files are allowed" },
        { status: 400 }
      );
    }

    if (file.type && !ALLOWED_RESUME_TYPES.includes(file.type) && file.type !== "application/octet-stream") {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${user.id}-resume-${Date.now()}`;

    let fileUrl: string;
    try {
      const result = await uploadFile(buffer, "resumes", fileName);
      fileUrl = result.url;
    } catch {
      fileUrl = `local://${fileName}`;
    }

    const resume = await db.resume.upsert({
      where: { userId: user.id },
      update: {
        fileUrl,
        fileName: file.name,
        fileType: file.type || `application/${ext}`,
        fileSize: file.size,
      },
      create: {
        userId: user.id,
        skills: [],
        fileUrl,
        fileName: file.name,
        fileType: file.type || `application/${ext}`,
        fileSize: file.size,
      },
    });

    return NextResponse.json({ resume });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await syncUserFromClerk();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const resume = await db.resume.upsert({
      where: { userId: user.id },
      update: {
        summary: body.summary,
        skills: body.skills || [],
        experience: body.experience,
        education: body.education,
        projects: body.projects,
      },
      create: {
        userId: user.id,
        summary: body.summary,
        skills: body.skills || [],
        experience: body.experience,
        education: body.education,
        projects: body.projects,
      },
    });

    return NextResponse.json({ resume });
  } catch {
    return NextResponse.json({ error: "Save failed" }, { status: 500 });
  }
}
