import { ReviewSubmissionForm } from "@/components/admin/review-submission-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";

export default async function AdminSubmissionsPage() {
  const submissions = await db.submission.findMany({
    orderBy: { submittedAt: "desc" },
    include: {
      user: { select: { firstName: true, lastName: true, email: true } },
      assignment: {
        select: {
          title: true,
          maxScore: true,
          internship: { select: { title: true } },
        },
      },
    },
  });

  const statusVariant: Record<string, "success" | "warning" | "destructive" | "secondary"> = {
    APPROVED: "success",
    SUBMITTED: "warning",
    UNDER_REVIEW: "warning",
    REJECTED: "destructive",
    RESUBMIT: "destructive",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Review Submissions</h1>
        <p className="text-navy-500 mt-1">Review and score student assignment submissions.</p>
      </div>

      <div className="space-y-4">
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-navy-500">
              No submissions to review.
            </CardContent>
          </Card>
        ) : (
          submissions.map((sub) => (
            <Card key={sub.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-base">{sub.assignment.title}</CardTitle>
                    <p className="text-sm text-navy-500 mt-1">
                      {sub.user.firstName} {sub.user.lastName} · {sub.assignment.internship.title}
                    </p>
                  </div>
                  <Badge variant={statusVariant[sub.status] || "secondary"}>
                    {sub.status.replace("_", " ")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-navy-400 text-xs">File</p>
                    <a href={sub.fileUrl} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                      {sub.fileName}
                    </a>
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Type</p>
                    <p>{sub.fileType}</p>
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs">Submitted</p>
                    <p>{new Date(sub.submittedAt).toLocaleDateString()}</p>
                  </div>
                  {sub.score !== null && (
                    <div>
                      <p className="text-navy-400 text-xs">Score</p>
                      <p className="font-semibold">{sub.score}%</p>
                    </div>
                  )}
                </div>
                {(sub.status === "SUBMITTED" || sub.status === "UNDER_REVIEW") && (
                  <ReviewSubmissionForm
                    submissionId={sub.id}
                    maxScore={sub.assignment.maxScore}
                  />
                )}
                {sub.feedback && (
                  <p className="text-sm text-navy-500 bg-navy-50 rounded-lg p-3">
                    Feedback: {sub.feedback}
                  </p>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
