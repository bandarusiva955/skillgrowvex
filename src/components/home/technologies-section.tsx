"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";

export function TechnologiesSection() {
  return (
    <section className="section-padding bg-brand-cream dark:bg-navy-900/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white lg:text-4xl">
            Technologies Covered
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-500 dark:text-navy-400">
            Master in-demand tools and frameworks used across data, AI, and software development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {TECHNOLOGIES.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-primary-500/20 bg-white px-4 py-2 text-sm font-medium text-brand-navy shadow-premium transition-shadow hover:shadow-glow dark:border-primary-500/30 dark:bg-navy-900 dark:text-white"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
