import Link from "next/link";
import { ArrowRight, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white">
            Featured Programs
          </h2>
          <p className="mt-4 text-navy-500">Explore our internship plans while programs are being added.</p>
          <Button variant="gradient" className="mt-6" asChild>
            <Link href="/pricing">View Internship Plans</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white lg:text-4xl">
              Featured Programs
            </h2>
            <p className="mt-4 max-w-xl text-navy-500 dark:text-navy-400">
              Explore our most popular internship programs designed to accelerate your career.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/programs">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg dark:border-navy-700 dark:bg-navy-900"
            >
              <div className="mb-3 flex items-center justify-between">
                <Badge variant="gold">{formatCategory(program.category)}</Badge>
                <span className="flex items-center gap-1 text-xs text-navy-500">
                  <Clock className="h-3 w-3" /> {program.duration}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-brand-navy dark:text-white line-clamp-2">
                {program.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-navy-500 line-clamp-3 dark:text-navy-400">
                {program.shortDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {program.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs text-navy-500">
                <Award className="h-3 w-3 text-brand-gold" /> Certificate included
              </div>
              <Button variant="gradient" className="mt-4 w-full" asChild>
                <Link href={`/programs/${program.slug}`}>Enroll Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
