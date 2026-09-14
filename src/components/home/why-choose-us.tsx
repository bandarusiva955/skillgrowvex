"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  BadgeCheck,
  Users,
  Rocket,
  Clock,
  Target,
  FileText,
  ScanSearch,
  Linkedin,
  Github,
  MessageSquare,
  ClipboardCheck,
  LucideIcon,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  FolderKanban,
  BadgeCheck,
  Users,
  Rocket,
  Clock,
  Target,
  FileText,
  ScanSearch,
  Linkedin,
  Github,
  MessageSquare,
  ClipboardCheck,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-cream dark:bg-navy-900/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white lg:text-4xl">
            Why Choose SkillGrow Vex?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-500 dark:text-navy-400">
            Career preparation, interview readiness, portfolio development, and
            professional mentorship — not empty placement promises.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-2xl bg-white p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg dark:bg-navy-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
