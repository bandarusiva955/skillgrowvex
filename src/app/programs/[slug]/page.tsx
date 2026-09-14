import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Award,
  CheckCircle,
  BookOpen,
  FileText,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnrollButton } from "@/components/programs/enroll-button";
import { formatCategory } from "@/lib/utils";
import { db } from "@/lib/db";
import { COURSES } from "@/lib/academy-data";

interface ProgramDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProgramDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const staticCourse = COURSES.find((item) => item.slug === slug);
  if (staticCourse) return { title: staticCourse.title, description: staticCourse.description };
  let program = null;
  try {
    program = await db.internship.findUnique({ where: { slug } });
  } catch {
    program = null;
  }
  if (!program) {
    const course = COURSES.find((item) => item.slug === slug);
    return course ? { title: course.title, description: course.description } : { title: "Program Not Found" };
  }
  return {
    title: program.title,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({ params }: ProgramDetailProps) {
  const { slug } = await params;
  const staticCourse = COURSES.find((item) => item.slug === slug);
  if (staticCourse) {
    return (
      <main className="academy-course-detail">
        <section className="academy-course-detail-hero"><div className="academy-container"><span className="academy-kicker">{staticCourse.category} · {staticCourse.level}</span><h1>{staticCourse.title}</h1><p>{staticCourse.description}</p><div className="academy-course-detail-meta"><span>{staticCourse.duration}</span><span>Structured online learning</span><span>Projects and assignments</span></div><Link href={`/apply?course=${staticCourse.slug}`} className="academy-primary-button">Enquire about this course <ArrowRight size={16} /></Link></div></section>
        <section className="academy-section"><div className="academy-container academy-course-detail-grid"><div><span className="academy-kicker">WHAT YOU&apos;LL LEARN</span><h2>Build a useful<br /><em>working foundation.</em></h2><ul className="academy-detail-checks"><li><CheckCircle size={17} /> Core concepts and practical workflows</li><li><CheckCircle size={17} /> Guided assignments and project practice</li><li><CheckCircle size={17} /> Technology-specific portfolio direction</li><li><CheckCircle size={17} /> Career guidance based on your next step</li></ul></div><div className="academy-detail-panel"><span className="academy-kicker">TECHNOLOGIES</span><div className="academy-tech-list">{staticCourse.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><h3>Learning experience</h3><p>Confirm the current schedule, mentor availability, resources, and credential details with the academy before enrolling.</p><Link href="/contact" className="academy-card-link">Ask a question <ArrowRight size={16} /></Link></div></div></section>
        <section className="academy-course-detail-final"><div className="academy-container"><h2>Ready to start<br /><em>learning?</em></h2><Link href="/apply" className="academy-primary-button">Enquire now <ArrowRight size={16} /></Link></div></section>
      </main>
    );
  }
  let program = null;
  try {
    program = await db.internship.findUnique({
      where: { slug },
      include: {
        assignments: { orderBy: { weekNumber: "asc" } },
      },
    });
  } catch {
    program = null;
  }

  if (!program) notFound();

  const curriculum = program.curriculum as { week: number; title: string; topics: string[] }[];

  return (
    <div>
      <section className="bg-hero-pattern py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Badge variant="gold" className="mb-4">
            {formatCategory(program.category)}
          </Badge>
          <h1 className="font-display text-4xl font-bold text-white lg:text-5xl">
            {program.title}
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl">
            {program.shortDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-navy-300">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-gold" /> {program.duration}
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-gold" /> Verified Certificate
            </span>
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-brand-gold" /> {program.assignments.length} Assignments
            </span>
          </div>
          <div className="mt-8">
            <EnrollButton internshipId={program.id} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
                  Overview
                </h2>
                <p className="text-navy-600 leading-relaxed whitespace-pre-line">
                  {program.description}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
                  Learning Outcomes
                </h2>
                <ul className="space-y-3">
                  {program.learningOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-navy-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-6">
                  Weekly Curriculum
                </h2>
                <div className="space-y-4">
                  {curriculum.map((week) => (
                    <Card key={week.week}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-brand-gold" />
                          Week {week.week}: {week.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {week.topics.map((topic, i) => (
                            <li key={i} className="text-sm text-navy-500 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">
                  Assignments
                </h2>
                <div className="space-y-3">
                  {program.assignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex items-center justify-between rounded-lg border border-navy-100 p-4"
                    >
                      <div>
                        <p className="font-medium text-brand-navy">
                          Week {assignment.weekNumber}: {assignment.title}
                        </p>
                        <p className="text-xs text-navy-500 mt-1">
                          Max Score: {assignment.maxScore}
                          {assignment.isFinal && " · Final Project"}
                        </p>
                      </div>
                      <Badge variant={assignment.isFinal ? "gold" : "secondary"}>
                        {assignment.isFinal ? "Capstone" : `Week ${assignment.weekNumber}`}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills You&apos;ll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.projects.map((project, i) => (
                      <li key={i} className="text-sm text-navy-600 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-brand-gold shrink-0" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-navy-500 mb-4">
                    Access learning materials after enrollment.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    <Download className="mr-2 h-4 w-4" />
                    Enroll to Access
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
