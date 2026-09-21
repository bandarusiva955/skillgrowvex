import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Award, ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCategory } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";
import { db } from "@/lib/db";
import { PageImage } from "@/components/layout/page-image";

export const metadata: Metadata = {
  title: "Internship Programs",
  description: "Explore project-based internship programs in data analytics, Power BI, Python, ML, and more.",
};

interface ProgramsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProgramsPage({ searchParams }: ProgramsPageProps) {
  const { category } = await searchParams;

  let programs: Awaited<ReturnType<typeof db.internship.findMany>> = [];
  try {
    programs = await db.internship.findMany({
      where: {
        isActive: true,
        ...(category ? { category: category as never } : {}),
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    });
  } catch {
    // Database not connected yet
  }

  return (
    <div>
      <section className="bg-hero-pattern py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white">
            Internship Programs
          </h1>
          <p className="mt-4 text-navy-300 max-w-xl mx-auto">
            Choose from our industry-oriented programs and start building real-world skills today.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* TODO: swap with official SkillGrowVex branded image */}
          <PageImage src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop" alt="Developer learning from a laptop in a technology workspace" className="mb-10" />
          <div className="flex flex-wrap gap-2 mb-8">
            <Link href="/programs">
              <Badge
                variant={!category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm"
              >
                All Programs
              </Badge>
            </Link>
            {CATEGORIES.map((cat) => (
              <Link key={cat.value} href={`/programs?category=${cat.value}`}>
                <Badge
                  variant={category === cat.value ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm"
                >
                  {cat.label}
                </Badge>
              </Link>
            ))}
          </div>

          {programs.length === 0 ? (
            <div className="text-center py-20">
              <Search className="mx-auto h-12 w-12 text-navy-300 mb-4" />
              <h3 className="text-lg font-semibold text-brand-navy">No programs found</h3>
              <p className="text-navy-500 mt-2">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <Card key={program.id} className="flex flex-col hover:shadow-premium-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="gold">{formatCategory(program.category)}</Badge>
                      {program.isFeatured && (
                        <Badge variant="success">Featured</Badge>
                      )}
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-navy-500 mb-4">{program.shortDescription}</p>
                    <div className="flex items-center gap-4 text-xs text-navy-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-brand-gold" /> Certificate
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {program.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="gold" className="w-full" asChild>
                      <Link href={`/programs/${program.slug}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
