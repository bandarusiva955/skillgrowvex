import Link from "next/link";
import { ArrowRight, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCategory } from "@/lib/utils";
import { db } from "@/lib/db";

export async function FeaturedPrograms() {
  let programs: Awaited<ReturnType<typeof db.internship.findMany>> = [];
  try {
    programs = await db.internship.findMany({
      where: { isFeatured: true, isActive: true },
      take: 6,
      orderBy: { createdAt: "desc" },
    });
  } catch {
    // Database not connected yet
  }

  if (programs.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Featured Programs
          </h2>
          <p className="mt-4 text-navy-500">Programs coming soon. Check back shortly!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-navy lg:text-4xl">
              Featured Programs
            </h2>
            <p className="mt-4 text-navy-500 max-w-xl">
              Explore our most popular internship programs designed to accelerate your career.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/programs">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="gold">{formatCategory(program.category)}</Badge>
                  <div className="flex items-center gap-1 text-xs text-navy-500">
                    <Clock className="h-3 w-3" />
                    {program.duration}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-navy-500 line-clamp-3">
                  {program.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {program.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {program.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{program.skills.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-navy-500">
                  <Award className="h-3 w-3 text-brand-gold" />
                  Certificate included
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/programs/${program.slug}`}>
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
