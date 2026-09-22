import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PageImage } from "@/components/layout/page-image";
import { Button } from "@/components/ui/button";
import { FileText, ScanSearch, Upload, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume Review",
  description: "Get professional ATS resume review and career presentation feedback at SkillGrow Vex Academy.",
};

const REVIEW_AREAS = [
  "Resume Formatting",
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

      <div className="container mx-auto px-4 pt-12 lg:px-8">
        <PageImage src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop" alt="Professional resume review workspace" />
      </div>

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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                <ScanSearch className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white">
                What We Review
              </h3>
              <ul className="mt-4 space-y-3">
                {REVIEW_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-navy-600 dark:text-navy-300">
                    <FileText className="h-4 w-4 text-primary-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>