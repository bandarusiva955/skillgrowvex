import { Award, Download, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { syncUserFromClerk } from "@/lib/auth";
import { formatDate } from "@/lib/utils";
import { db } from "@/lib/db";

export default async function StudentCertificatesPage() {
  const user = await syncUserFromClerk();
  if (!user) return null;

  const certificates = await db.certificate.findMany({
    where: { userId: user.id },
    orderBy: { issuedAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">My Certificates</h1>
        <p className="text-navy-500 mt-1">Download and share your verified credentials.</p>
      </div>

      {certificates.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Award className="mx-auto h-16 w-16 text-navy-300 mb-4" />
            <h3 className="text-lg font-semibold text-brand-navy">No Certificates Yet</h3>
            <p className="text-navy-500 mt-2">Complete a program to earn your first certificate.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden">
              <div className="h-2 bg-gold-gradient" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{cert.programName}</CardTitle>
                  <Badge variant={cert.status === "ACTIVE" ? "success" : "destructive"}>
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-navy-400 text-xs">Certificate ID</p>
                    <p className="font-mono font-medium">{cert.certificateId}</p>
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Score</p>
                    <p className="font-semibold">{cert.score}%</p>
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Duration</p>
                    <p>{cert.duration}</p>
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Issued</p>
                    <p>{formatDate(cert.issuedAt)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cert.skillsCovered.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="gold" size="sm" asChild>
                    <a href={`/api/certificates/${cert.id}/download`}>
                      <Download className="mr-1 h-3 w-3" /> Download PDF
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(cert.verificationUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Share2 className="mr-1 h-3 w-3" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
