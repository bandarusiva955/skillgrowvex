import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, Award, Rocket, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { PageImage } from "@/components/layout/page-image";
import { CORE_VALUES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SkillGrow Vex Academy — an initiative by Grow Vex Technologies.",
};

const values = [
  { icon: Target, title: "Innovation", description: "We evolve our programs to match industry demands." },
  { icon: Heart, title: "Integrity", description: "Transparent processes and verified certificates build trust." },
  { icon: Award, title: "Professionalism", description: "Industry-standard mentorship and career guidance." },
  { icon: Rocket, title: "Growth", description: "Continuous learning support for every student." },
  { icon: Eye, title: "Learning", description: "Hands-on projects that build real skills." },
  { icon: ShieldCheck, title: "Student Success", description: "Your career readiness is our primary focus." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About SkillGrow Vex Academy"
        subtitle={SITE_CONFIG.tagline}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-navy-600 dark:text-navy-300">
              SkillGrow Vex Academy is an initiative by{" "}
              <strong>{SITE_CONFIG.poweredBy}</strong> — a growing startup committed to
              helping students gain practical experience through internships, real-world projects,
              mentorship, and career preparation.
            </p>
            <p className="mt-4 text-navy-500 dark:text-navy-400">
              We are not a large corporation. We are a passionate, MSME (Udyam) registered team
              focused on quality learning and student success.
            </p>
          </div>
        </div>
      </section>
      {/* TODO: swap with official SkillGrowVex branded image */}
      <section className="container mx-auto px-4 pb-20 lg:px-8"><PageImage src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop" alt="Technology learners collaborating in a workshop" /></section>

      <section className="bg-brand-cream py-20 dark:bg-navy-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-premium dark:bg-navy-900">
              <h3 className="font-display text-2xl font-bold text-brand-navy dark:text-white">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-navy-600 dark:text-navy-300">{SITE_CONFIG.mission}</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-premium dark:bg-navy-900">
              <h3 className="font-display text-2xl font-bold text-brand-navy dark:text-white">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-navy-600 dark:text-navy-300">{SITE_CONFIG.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-4 text-center font-display text-3xl font-bold text-brand-navy dark:text-white">
            Core Values
          </h2>
          <p className="mb-12 text-center text-navy-500">{CORE_VALUES.join(" • ")}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-2xl border border-navy-100 p-6 text-center dark:border-navy-700">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy dark:text-white">{value.title}</h3>
                  <p className="mt-2 text-sm text-navy-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-hero-gradient py-16 text-center text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold">Ready to Start?</h2>
          <Button variant="gold" size="lg" className="mt-6" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
