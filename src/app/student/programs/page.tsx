import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { syncUserFromClerk } from "@/lib/auth";
import { formatCategory } from "@/lib/utils";
import { db } from "@/lib/db";

export default async function StudentProgramsPage() {
  const user = await syncUserFromClerk();
  if (!user) return null;

  const enrollments = await db.enrollment.findMany({
    where: { userId: user.id },
    include: { internship: true },
    orderBy: { enrolledAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">My Programs</h1>
          <p className="text-navy-500 mt-1">Manage your enrolled internship programs.</p>
        </div>
        <Button variant="gold" asChild>
          <Link href="/programs"><Plus className="mr-2 h-4 w-4" /> Enroll in Program</Link>
        </Button>
      </div>

      {enrollments.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <BookOpen className="mx-auto h-16 w-16 text-navy-300 mb-4" />
            <h3 className="text-lg font-semibold text-brand-navy">No Programs Yet</h3>
            <p className="text-navy-500 mt-2 mb-6">Start your learning journey by enrolling in a program.</p>
            <Button variant="gold" asChild>
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {enrollments.map((enrollment) => (
            <Card key={enrollment.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <CardTitle>{enrollment.internship.title}</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="gold">{formatCategory(enrollment.internship.category)}</Badge>
                      <Badge variant={enrollment.status === "COMPLETED" ? "success" : "secondary"}>
                        {enrollment.status.replace("_", " ")}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/programs/${enrollment.internship.slug}`}>View Program</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Overall Progress</span>
                    <span className="font-semibold">{enrollment.progress}%</span>
                  </div>
                  <Progress value={enrollment.progress} />
                </div>
                <p className="text-xs text-navy-400 mt-3">
                  Enrolled: {new Date(enrollment.enrolledAt).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
