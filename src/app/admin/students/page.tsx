import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInitials } from "@/lib/utils";
import { db } from "@/lib/db";

export default async function AdminStudentsPage() {
  const students = await db.user.findMany({
    where: { role: "STUDENT" },
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { enrollments: true, certificates: true, submissions: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Manage Students</h1>
        <p className="text-navy-500 mt-1">{students.length} students registered.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-100 text-left">
                  <th className="pb-3 font-medium text-navy-500">Student</th>
                  <th className="pb-3 font-medium text-navy-500">Email</th>
                  <th className="pb-3 font-medium text-navy-500">Programs</th>
                  <th className="pb-3 font-medium text-navy-500">Certificates</th>
                  <th className="pb-3 font-medium text-navy-500">Points</th>
                  <th className="pb-3 font-medium text-navy-500">Joined</th>
                  <th className="pb-3 font-medium text-navy-500">Readiness</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-navy-50">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={student.avatarUrl || undefined} />
                          <AvatarFallback className="text-xs">
                            {getInitials(student.firstName, student.lastName)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">
                          {student.firstName} {student.lastName}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 text-navy-500">{student.email}</td>
                    <td className="py-3">{student._count.enrollments}</td>
                    <td className="py-3">{student._count.certificates}</td>
                    <td className="py-3">
                      <Badge variant="gold">{student.totalPoints}</Badge>
                    </td>
                    <td className="py-3 text-navy-500 text-xs">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3">{student.jobReadinessScore}%</td>
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
