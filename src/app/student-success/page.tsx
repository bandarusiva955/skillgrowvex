import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Star, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Success",
  description: "Success stories, testimonials, and achievements from SkillGrow Vex Academy students.",
};

const SUCCESS_HIGHLIGHTS = [
  import { PageImage } from "@/components/layout/page-image";
  {
    icon: Star,
    title: "Student Reviews",
            {/* TODO: swap with official SkillGrowVex branded image */}
            <PageImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop" alt="Students collaborating on a technology learning project" className="mb-12" />
    description: "Real feedback from students who completed our internship programs.",
  },
  {
    icon: Github,
    title: "GitHub Showcase",
    description: "Students build and publish projects with mentor-guided GitHub portfolios.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Achievements",
    description: "Optimized profiles and certifications that attract recruiter attention.",
  },
  {
    icon: Trophy,
    title: "Success Stories",
    description: "Career journeys from learning to interview readiness and portfolio development.",
  },
];

export default function StudentSuccessPage() {
  return (
    <div>
      <PageHero
        title="Student Success"
        subtitle="Celebrating our students' growth — from first project to career-ready portfolios."
      />

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SUCCESS_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-premium dark:border-navy-700 dark:bg-navy-900"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-brand-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-500 dark:text-navy-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="pb-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-navy dark:text-white">
            Ready to Write Your Success Story?
          </h2>
          <Button variant="gradient" size="lg" className="mt-6" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
