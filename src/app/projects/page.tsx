import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PROJECTS } from "@/lib/academy-data";
import { ArrowUpRight, BrainCircuit, Database, FolderOpen, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore practical AI, data, and full-stack project directions at Skill Grow Vex Academy.",
};

const projectIcons = [BrainCircuit, Database, Globe2, FolderOpen];

export default function ProjectsPage() {
  return (
    <div>
      <PageHero
        title="Build a portfolio that speaks for you"
        subtitle="Explore high-value project directions designed around AI, analytics, and modern product development."
      />

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(([title, category, technologies, description], index) => {
              const Icon = projectIcons[index % projectIcons.length];
              const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
              <div
                key={title}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg dark:border-navy-700 dark:bg-navy-900"
              import { PageImage } from "@/components/layout/page-image";
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                        {/* TODO: swap with official SkillGrowVex branded image */}
                        <PageImage src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop" alt="Analytics team working on a technology project" className="mb-12" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">
                  {description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary-600">{category}</p>
                <p className="mt-2 text-xs text-navy-500">{technologies}</p>
                <Link href={`/projects/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700">View case study <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-brand-cream p-8 dark:bg-navy-900/50"><p className="text-xs font-semibold uppercase tracking-wide text-primary-600">Coming soon</p><h3 className="mt-2 font-display text-xl font-bold text-brand-navy dark:text-white">RAG Knowledge Assistant · AI Interview Coach · Multi-Agent Research Assistant</h3><p className="mt-3 text-sm text-navy-500">These are future project directions, clearly separated from the current project catalogue.</p></div>
        </div>
      </section>
    </div>
  );
}
