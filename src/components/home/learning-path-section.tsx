"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Hammer,
  Target,
  Rocket,
  LucideIcon,
} from "lucide-react";
import { LEARNING_PATH } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  BookOpen,
  Hammer,
  Target,
  Rocket,
};

export function LearningPathSection() {
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
            From Zero to Job-Ready
          </h2>
          <p className="mt-4 text-navy-500 max-w-3xl mx-auto text-lg">
            A structured, mentor-guided journey designed to take you from complete beginner to a
            confident, employable professional — step by step, no gaps.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-navy to-brand-gold transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-8 lg:space-y-0">
              {LEARNING_PATH.map((item, index) => {
                const Icon = iconMap[item.icon] || Target;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex gap-8 items-start lg:items-center mb-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-brand-cream rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy text-brand-gold">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-bold text-brand-gold uppercase">
                                Phase {item.phase}
                              </span>
                              <span className="text-xs text-navy-400 font-medium">{item.week}</span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-navy-500 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center circle */}
                    <div className="hidden lg:flex flex-shrink-0">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-brand-gold rounded-full opacity-20" />
                        <div className="relative h-6 w-6 bg-brand-gold rounded-full border-4 border-white shadow-lg" />
                      </div>
                    </div>

                    {/* Empty space for odd items on desktop */}
                    <div className="hidden lg:flex-1 lg:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-brand-gold bg-opacity-10 rounded-lg px-6 py-3">
              <p className="text-sm font-semibold text-brand-navy">
                ✓ Live Classes &nbsp;✓ Real Projects &nbsp;✓ Career Support &nbsp;✓ Until Placed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
