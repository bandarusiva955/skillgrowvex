"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Video,
  Network,
  LucideIcon,
} from "lucide-react";
import { CAREER_SUPPORT } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Briefcase,
  Video,
  Network,
};

export function CareerSupportSection() {
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
            Skills Get You In. Support Keeps You There.
          </h2>
          <p className="mt-4 text-navy-500 max-w-3xl mx-auto text-lg">
            Technical training is only half the story. We walk with you through every step of
            landing the role — and growing in it.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {CAREER_SUPPORT.map((item, index) => {
            const Icon = iconMap[item.icon] || Briefcase;
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
                <h3 className="font-display text-lg font-semibold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-premium"
        >
          <h3 className="font-display text-2xl font-bold text-brand-navy mb-8">
            We Build Readiness
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Left side - Benefits */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-brand-gold font-bold text-lg">✓</span>
                <span className="text-navy-600">One-on-one career counseling sessions</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-brand-gold font-bold text-lg">✓</span>
                <span className="text-navy-600">Access to our alumni network</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-brand-gold font-bold text-lg">✓</span>
                <span className="text-navy-600">Job search strategies and tips</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-brand-gold font-bold text-lg">✓</span>
                <span className="text-navy-600">Continuous mentorship support</span>
              </div>
            </div>

            {/* Right side - Message */}
            <div className="flex items-center">
              <p className="text-navy-600 text-lg leading-relaxed">
                We don't promise placements — just the skills, confidence, and network you need to
                walk into interviews and succeed on your own terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
