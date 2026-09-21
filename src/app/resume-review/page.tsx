import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { FileText, ScanSearch, Upload, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume Review",
  description: "Get professional ATS resume review and career presentation feedback at SkillGrow Vex Academy.",
import { PageImage } from "@/components/layout/page-image";
};

const REVIEW_AREAS = [
  "Resume Formatting",
      {/* TODO: swap with official SkillGrowVex branded image */}
      <div className="container mx-auto px-4 pt-12 lg:px-8"><PageImage src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop" alt="Professional resume review workspace" /></div>
  "ATS Compatibility",
  "Skills Presentation",
  "Projects & Achievements",
  "Professional Presentation",
];

const UPLOAD_TYPES = [
  "Resume PDF",
  "GitHub Profile",
  "LinkedIn Profile",
  "Portfolio Website",
];

export default function ResumeReviewPage() {
  return (
    <div>
      <PageHero
        title="Resume Review Portal"
        subtitle="Get expert mentor feedback on your resume, ATS compatibility, and professional presentation."
      />

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-premium dark:border-navy-700 dark:bg-navy-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white">
                What You Can Upload
              </h3>
              <ul className="mt-4 space-y-3">
                {UPLOAD_TYPES.map((type) => (
                  <li key={type} className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-300">
                    <CheckCircle className="h-4 w-4 text-success-500" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-premium dark:border-navy-700 dark:bg-navy-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-500/10 text-secondary-500">
                <ScanSearch className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white">
                What Mentors Review
              </h3>
              <ul className="mt-4 space-y-3">
                {REVIEW_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-300">
                    <CheckCircle className="h-4 w-4 text-success-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-hero-gradient p-8 text-center text-white">
            <FileText className="mx-auto h-12 w-12 text-primary-300" />
            <h3 className="mt-4 font-display text-2xl font-bold">
              Upload Your Resume for Review
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-navy-200">
              Outstanding resumes may be featured as Top Student Resume with your permission.
              Available in Professional and Career Launch programs.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="gold" size="lg" asChild>
                <Link href="/apply">Upload Resume & Apply</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
                asChild
              >
                <Link href="/student/resume">Student Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
