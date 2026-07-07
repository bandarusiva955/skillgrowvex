"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="border-b border-navy-100 bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold text-brand-navy lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-navy-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
