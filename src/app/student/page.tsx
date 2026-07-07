import Link from "next/link";
import {
  BookOpen,
  FileText,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { syncUserFromClerk } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function StudentDashboard() {
  const user = await syncUserFromClerk();
  if (!user) return null;

  const enrollments = await db.enrollment.findMany({
    where: { userId: user.id },
    include: { internship: true },
    orderBy: { enrolledAt: "desc" },
    take: 3,
  });

  const pendingAssignments = await db.submission.count({
    where: {
      userId: user.id,
      status: { in: ["SUBMITTED", "UNDER_REVIEW"] },
    },
  });

  const certificates = await db.certificate.count({
    where: { userId: user.id },
  });

  const stats = [
    { label: "Enrolled Programs", value: enrollments.length, icon: BookOpen, color: "text-blue-600" },
    { label: "Pending Reviews", value: pendingAssignments, icon: FileText, color: "text-amber-600" },
    { label: "Certificates", value: certificates, icon: Award, color: "text-brand-gold" },
    { label: "Job Readiness", value: `${user.jobReadinessScore}%`, icon: TrendingUp, color: "text-green-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">
          Welcome back, {user.firstName}!
        </h1>
        <p className="text-navy-500 mt-1">Track your progress and continue learning.</p>
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

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-brand-navy">My Programs</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/student/programs">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        {enrollments.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-navy-300 mb-4" />
              <p className="text-navy-500 mb-4">You haven&apos;t enrolled in any programs yet.</p>
              <Button variant="gold" asChild>
                <Link href="/programs">Browse Programs</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enrollments.map((enrollment) => (
              <Card key={enrollment.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{enrollment.internship.title}</CardTitle>
                    <Badge variant={enrollment.status === "COMPLETED" ? "success" : "secondary"}>
                      {enrollment.status.replace("_", " ")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-500">Progress</span>
                      <span className="font-medium">{enrollment.progress}%</span>
                    </div>
                    <Progress value={enrollment.progress} />
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                    <Link href={`/programs/${enrollment.internship.slug}`}>Continue</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
