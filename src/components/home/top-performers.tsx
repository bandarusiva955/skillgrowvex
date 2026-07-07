import { Trophy, Medal, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/utils";
import { db } from "@/lib/db";

type TopStudent = Awaited<
  ReturnType<
    typeof db.user.findMany<{
      include: {
        badges: { include: { badge: true } };
        certificates: true;
      };
    }>
  >
>[number];

export async function TopPerformers() {
  let topStudents: TopStudent[] = [];
  try {
    topStudents = await db.user.findMany({
      where: { role: "STUDENT" },
      orderBy: { totalPoints: "desc" },
      take: 5,
      include: {
        badges: { include: { badge: true }, take: 3 },
        certificates: { take: 1 },
      },
    });
  } catch {
    // Database not connected yet
  }

  if (topStudents.length === 0) return null;

  const rankIcons = [Trophy, Medal, Award];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-navy lg:text-4xl">
            Top Performers
          </h2>
          <p className="mt-4 text-navy-500">
            Celebrating our highest-achieving students on the leaderboard.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          {topStudents.map((student, index) => {
            const RankIcon = rankIcons[index] || Award;
            return (
              <div
                key={student.id}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-premium"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-brand-gold">
                  <RankIcon className="h-5 w-5" />
                </div>
                <Avatar>
                  <AvatarImage src={student.avatarUrl || undefined} />
                  <AvatarFallback>
                    {getInitials(student.firstName, student.lastName)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-brand-navy">
                    {student.firstName} {student.lastName}
                  </p>
                  <p className="text-xs text-navy-500">
                    {student.totalPoints} points · Job Readiness: {student.jobReadinessScore}%
                  </p>
                </div>
                <div className="flex gap-1">
                  {student.badges.map((ub) => (
                    <Badge key={ub.id} variant="gold" className="text-xs">
                      {ub.badge.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
