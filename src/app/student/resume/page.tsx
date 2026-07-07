import { ResumeBuilder } from "@/components/student/resume-builder";
import { syncUserFromClerk } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function ResumePage() {
  const user = await syncUserFromClerk();
  if (!user) return null;

  const resume = await db.resume.findUnique({ where: { userId: user.id } });
  const certificates = await db.certificate.findMany({
    where: { userId: user.id },
    select: { programName: true, skillsCovered: true, score: true, issuedAt: true },
  });

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Resume Builder</h1>
        <p className="text-navy-500 mt-1">
          Build a professional resume with your internship experience and certifications.
        </p>
      </div>
      <ResumeBuilder
        user={user}
        resume={resume}
        certificates={certificates.map((c) => ({
          ...c,
          issuedAt: c.issuedAt.toISOString(),
        }))}
      />
    </div>
  );
}
