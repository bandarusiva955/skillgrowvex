import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Certificate ID required" }, { status: 400 });
  }

  const certificate = await db.certificate.findUnique({
    where: { certificateId: id },
  });

  if (!certificate) {
    return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
  }

  return NextResponse.json({
    certificate: {
      studentName: certificate.studentName,
      programName: certificate.programName,
      score: certificate.score,
      issuedAt: certificate.issuedAt,
      status: certificate.status,
      certificateId: certificate.certificateId,
      duration: certificate.duration,
      skillsCovered: certificate.skillsCovered,
    },
  });
}
