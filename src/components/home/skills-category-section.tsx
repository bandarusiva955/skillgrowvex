"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Wrench,
  BarChart3,
  Brain,
  Users,
  FolderKanban,
  LucideIcon,
} from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Wrench,
  BarChart3,
  Brain,
  Users,
  FolderKanban,
};

export function SkillsCategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-brand-navy lg:text-4xl">
            Skills That Employers Actually Hire For
          </h2>
          <p className="mt-4 text-navy-500 max-w-3xl mx-auto text-lg">
            Every category below maps directly to what companies look for in job listings. We built
            our curriculum backwards — starting from the job description, working back to the lesson plan.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {SKILLS_CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl bg-brand-cream p-8 transition-all hover:shadow-premium hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-brand-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-navy-500 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-white border border-brand-navy bg-opacity-50 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="font-display text-2xl font-bold text-brand-gold mb-4">
            Learn By Doing, Not Just Watching
          </h3>
          <p className="text-brand-cream max-w-2xl mx-auto mb-6">
            Every skill is taught through practical application. You'll write code, analyze data,
            and build projects from day one — so you truly understand what you're learning.
          </p>

          <div className="grid gap-4 md:grid-cols-3 max-w-2xl mx-auto">
            <div>
              <p className="text-brand-gold font-bold mb-2">◈ Real Code</p>
              <p className="text-brand-cream text-sm">Not toy examples — things you can put in your portfolio</p>
            </div>
            <div>
              <p className="text-brand-gold font-bold mb-2">◎ Mentor-Reviewed</p>
              <p className="text-brand-cream text-sm">Every project gets direct feedback from an expert</p>
            </div>
            <div>
              <p className="text-brand-gold font-bold mb-2">◆ Job-Ready</p>
              <p className="text-brand-cream text-sm">Skills matched to current job descriptions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
