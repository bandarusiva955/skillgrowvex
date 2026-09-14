import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { ApplicationForm } from "@/components/apply/application-form";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Apply for internship programs at SkillGrow Vex Academy.",
};

export default function ApplyPage() {
  return (
    <div>
      <PageHero
        title="Apply Now"
        subtitle="Complete the registration form to start your career development journey with SkillGrow Vex Academy."
      />
      <section className="py-16">
        <div className="container mx-auto max-w-2xl px-4 lg:px-8">
          <Suspense fallback={<div className="text-center py-12">Loading form...</div>}>
            <ApplicationForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
