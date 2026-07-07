"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  BadgeCheck,
  Users,
  Rocket,
  Clock,
  Target,
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
};

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-brand-navy lg:text-4xl">
            Why Choose SkillGrowVex?
          </h2>
          <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
            We combine project-based learning with industry expertise to deliver
            career-ready skills and verified credentials.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl bg-white p-8 shadow-premium transition-all hover:shadow-premium-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-brand-gold transition-colors group-hover:bg-gold-gradient group-hover:text-brand-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">
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
