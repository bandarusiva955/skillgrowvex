import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PageImage } from "@/components/layout/page-image";
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
          <PageImage src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop" alt="Analytics team working on a technology project" className="mb-12" />
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(([title, category, technologies, description], index) => {
              const Icon = projectIcons[index % projectIcons.length];
              const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
              <div
                key={title}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg dark:border-navy-700 dark:bg-navy-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed