import { NextRequest, NextResponse } from "next/server";
import { syncUserFromClerk } from "@/lib/auth";
import { generateCertificatePDF } from "@/lib/certificate";
import { db } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await syncUserFromClerk();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const certificate = await db.certificate.findUnique({ where: { id } });

    if (!certificate) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (certificate.userId !== user.id && user.role === "STUDENT") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const pdfBytes = await generateCertificatePDF({
      studentName: certificate.studentName,
      programName: certificate.programName,
      duration: certificate.duration,
      skillsCovered: certificate.skillsCovered,
      score: certificate.score,
      certificateId: certificate.certificateId,
      issueDate: new Date(certificate.issuedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      verificationUrl: certificate.verificationUrl,
    });

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${certificate.certificateId}.pdf"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Download failed" }, { status: 500 });
  }
}
