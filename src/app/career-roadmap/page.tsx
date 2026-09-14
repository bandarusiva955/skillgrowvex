import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { CAREER_ROADMAP } from "@/lib/constants";
import { ArrowDown, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Roadmap",
  description: "Your step-by-step journey from registration to career readiness at SkillGrow Vex Academy.",
};

export default function CareerRoadmapPage() {
  return (
    <div>
      <PageHero
        title="Career Roadmap"
        subtitle="A structured path from registration to becoming career ready — with mentorship at every step."
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <div className="space-y-2">
            {CAREER_ROADMAP.map((step, index) => (
              <div key={step}>
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-5 ${
                    index === CAREER_ROADMAP.length - 1
                      ? "border-success-500/30 bg-success-50 dark:bg-success-500/10"
                      : "border-navy-100 bg-white dark:border-navy-700 dark:bg-navy-900"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${
                      index === CAREER_ROADMAP.length - 1
                        ? "bg-success-500 text-white"
                        : "bg-brand-gradient text-white"
                    }`}
                  >
                    {index === CAREER_ROADMAP.length - 1 ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div>
                    <h3
                      className={`font-display text-lg font-semibold ${
                        index === CAREER_ROADMAP.length - 1
                          ? "text-success-600"
                          : "text-brand-navy dark:text-white"
                      }`}
                    >
                      {step}
                    </h3>
                    {index === 0 && (
                      <p className="text-sm text-navy-500">Start your journey with our application form</p>
                    )}
                    {index === CAREER_ROADMAP.length - 1 && (
                      <p className="text-sm text-success-600">You&apos;re ready for internships and entry-level roles</p>
                    )}
                  </div>
                </div>
                {index < CAREER_ROADMAP.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-5 w-5 text-primary-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
