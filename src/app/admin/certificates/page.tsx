import { IssueCertificateForm } from "@/components/admin/issue-certificate-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { db } from "@/lib/db";

export default async function AdminCertificatesPage() {
  const certificates = await db.certificate.findMany({
    orderBy: { issuedAt: "desc" },
    include: {
      user: { select: { firstName: true, lastName: true, email: true } },
    },
  });

  const completedEnrollments = await db.enrollment.findMany({
    where: { status: "COMPLETED" },
    include: {
      user: { select: { id: true, firstName: true, lastName: true } },
      internship: { select: { id: true, title: true, duration: true, skills: true } },
    },
  });

  const issuedPairs = new Set(
    certificates.map((c) => `${c.userId}-${c.internshipId}`)
  );

  const eligibleForCertificate = completedEnrollments.filter(
    (e) => !issuedPairs.has(`${e.userId}-${e.internshipId}`)
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Issue Certificates</h1>
        <p className="text-navy-500 mt-1">Manage and issue verified certificates to students.</p>
      </div>

      {eligibleForCertificate.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Ready to Issue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {eligibleForCertificate.map((enrollment) => (
              <IssueCertificateForm
                key={enrollment.id}
                userId={enrollment.userId}
                internshipId={enrollment.internship.id}
                studentName={`${enrollment.user.firstName} ${enrollment.user.lastName}`}
                programName={enrollment.internship.title}
                duration={enrollment.internship.duration}
                skills={enrollment.internship.skills}
              />
            ))}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Issued Certificates ({certificates.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-100 text-left">
                  <th className="pb-3 font-medium text-navy-500">Certificate ID</th>
                  <th className="pb-3 font-medium text-navy-500">Student</th>
                  <th className="pb-3 font-medium text-navy-500">Program</th>
                  <th className="pb-3 font-medium text-navy-500">Score</th>
                  <th className="pb-3 font-medium text-navy-500">Status</th>
                  <th className="pb-3 font-medium text-navy-500">Issued</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert) => (
                  <tr key={cert.id} className="border-b border-navy-50">
                    <td className="py-3 font-mono text-xs">{cert.certificateId}</td>
                    <td className="py-3">{cert.studentName}</td>
                    <td className="py-3">{cert.programName}</td>
                    <td className="py-3 font-semibold">{cert.score}%</td>
                    <td className="py-3">
                      <Badge variant={cert.status === "ACTIVE" ? "success" : "destructive"}>
                        {cert.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-navy-500">{formatDate(cert.issuedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
