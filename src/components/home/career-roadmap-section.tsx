"use client";

import { motion } from "framer-motion";
import { CAREER_ROADMAP } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export function CareerRoadmapSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white lg:text-4xl">
            Your Career Roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-500 dark:text-navy-400">
            A structured journey from registration to career readiness — step by step.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2">
          {CAREER_ROADMAP.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full"
            >
              <div
                className={`flex items-center gap-4 rounded-xl border p-4 transition-all hover:shadow-premium ${
                  index === CAREER_ROADMAP.length - 1
                    ? "border-success-500/30 bg-success-50 dark:bg-success-500/10"
                    : "border-navy-100 bg-white dark:border-navy-700 dark:bg-navy-900"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    index === CAREER_ROADMAP.length - 1
                      ? "bg-success-500 text-white"
                      : "bg-brand-gradient text-white"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`font-medium ${
                    index === CAREER_ROADMAP.length - 1
                      ? "text-success-600 dark:text-success-500"
                      : "text-brand-navy dark:text-white"
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < CAREER_ROADMAP.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="h-4 w-4 text-navy-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
