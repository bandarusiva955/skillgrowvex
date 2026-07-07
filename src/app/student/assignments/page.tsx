import { FileText } from "lucide-react";
import { SubmissionForm } from "@/components/assignments/submission-form";
import { syncUserFromClerk } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function StudentAssignmentsPage() {
  const user = await syncUserFromClerk();
  if (!user) return null;

  const enrollments = await db.enrollment.findMany({
    where: { userId: user.id, status: { not: "DROPPED" } },
    include: {
      internship: {
        include: {
          assignments: { orderBy: { weekNumber: "asc" } },
        },
      },
    },
  });

  const submissions = await db.submission.findMany({
    where: { userId: user.id },
  });

  const submissionMap = new Map(submissions.map((s) => [s.assignmentId, s]));

  const allAssignments = enrollments.flatMap((e) =>
    e.internship.assignments.map((a) => ({
      ...a,
      programTitle: e.internship.title,
      existingSubmission: submissionMap.get(a.id) || null,
    }))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Assignments</h1>
        <p className="text-navy-500 mt-1">Submit your weekly assignments and final projects.</p>
      </div>

      {allAssignments.length === 0 ? (
        <div className="text-center py-16">
          <FileText className="mx-auto h-16 w-16 text-navy-300 mb-4" />
          <h3 className="text-lg font-semibold text-brand-navy">No Assignments</h3>
          <p className="text-navy-500 mt-2">Enroll in a program to access assignments.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {allAssignments.map((assignment) => (
            <SubmissionForm
              key={assignment.id}
              assignment={assignment}
              existingSubmission={
                assignment.existingSubmission
                  ? {
                      ...assignment.existingSubmission,
                      submittedAt: assignment.existingSubmission.submittedAt.toISOString(),
                    }
                  : null
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
