import { Users, GraduationCap, FileText, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";

export default async function AdminDashboard() {
  const [studentCount, programCount, pendingSubmissions, certificateCount] =
    await Promise.all([
      db.user.count({ where: { role: "STUDENT" } }),
      db.internship.count({ where: { isActive: true } }),
      db.submission.count({ where: { status: { in: ["SUBMITTED", "UNDER_REVIEW"] } } }),
      db.certificate.count(),
    ]);

  const [recentSubmissions, recentSignups] = await Promise.all([
    db.submission.findMany({
      take: 5,
      orderBy: { submittedAt: "desc" },
      include: {
        user: { select: { firstName: true, lastName: true } },
        assignment: { select: { title: true } },
      },
    }),
    db.user.findMany({
      where: { role: "STUDENT" },
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
        clerkId: true,
      },
    }),
  ]);

  const stats = [
    { label: "Total Students", value: studentCount, icon: Users, color: "text-blue-600" },
    { label: "Active Programs", value: programCount, icon: GraduationCap, color: "text-brand-gold" },
    { label: "Pending Reviews", value: pendingSubmissions, icon: FileText, color: "text-amber-600" },
    { label: "Certificates Issued", value: certificateCount, icon: Award, color: "text-green-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Admin Dashboard</h1>
        <p className="text-navy-500 mt-1">Overview of platform activity and metrics.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-navy-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-brand-navy mt-1">{stat.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color} opacity-80`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sign-ups</CardTitle>
        </CardHeader>
        <CardContent>
          {recentSignups.length === 0 ? (
            <p className="text-sm text-navy-500">No students registered yet.</p>
          ) : (
            <div className="space-y-3">
              {recentSignups.map((student) => (
                <div
                  key={student.clerkId}
                  className="flex items-center justify-between rounded-lg border border-navy-100 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-brand-navy">
                      {student.firstName} {student.lastName}
                    </p>
                    <p className="text-xs text-navy-500">{student.email}</p>
                  </div>
                  <p className="text-xs text-navy-400">
                    {new Date(student.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {recentSubmissions.length === 0 ? (
            <p className="text-sm text-navy-500">No submissions yet.</p>
          ) : (
            <div className="space-y-3">
              {recentSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-center justify-between rounded-lg border border-navy-100 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-brand-navy">
                      {sub.user.firstName} {sub.user.lastName}
                    </p>
                    <p className="text-xs text-navy-500">{sub.assignment.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-amber-600">{sub.status}</p>
                    <p className="text-xs text-navy-400">
                      {new Date(sub.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
