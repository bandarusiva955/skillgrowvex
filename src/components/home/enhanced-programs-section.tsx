"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  Server,
  Layers,
  Globe,
  Brain,
  Zap,
  Sparkles,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import { PROGRAMS_DETAILED } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BarChart3,
  Server,
  Layers,
  Globe,
  Brain,
  Zap,
  Sparkles,
};

export function EnhancedProgramsSection() {
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
            Ten Paths. One Destination.
          </h2>
          <p className="mt-4 text-navy-500 max-w-3xl mx-auto text-lg">
Every course is built backwards from real job descriptions — no filler, no theory for
            theory&apos;s sake. Just skills that get you hired.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS_DETAILED.map((program, index) => {
            const Icon = iconMap[program.icon] || Code2;

            // Badge styling
            const badgeStyles: Record<string, string> = {
              FOUNDATION: "bg-blue-100 text-blue-800",
              "HIGH ROI": "bg-green-100 text-green-800",
              ENTERPRISE: "bg-purple-100 text-purple-800",
              "MOST POPULAR": "bg-red-100 text-red-800",
              "IN DEMAND": "bg-yellow-100 text-yellow-800",
              ADVANCED: "bg-indigo-100 text-indigo-800",
              "INTERVIEW PREP": "bg-pink-100 text-pink-800",
              EMERGING: "bg-cyan-100 text-cyan-800",
            };

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-xl bg-white overflow-hidden shadow-premium transition-all hover:shadow-premium-lg hover:-translate-y-1 flex flex-col"
              >
                {/* Header with badge */}
                <div className="bg-gradient-to-r from-brand-navy to-brand-navy/80 p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold text-brand-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        badgeStyles[program.badge] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {program.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{program.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-navy-500 mb-4 leading-relaxed flex-1">
                    {program.description}
                  </p>

                  {/* Duration and Perfect For */}
                  <div className="space-y-3 mb-4 py-4 border-y border-gray-200">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-navy-400">Duration</span>
                      <span className="font-semibold text-brand-navy">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-start text-sm">
                      <span className="text-navy-400">Perfect For</span>
                      <span className="font-semibold text-brand-navy text-right">{program.perfectFor}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-xs text-navy-400 font-semibold uppercase mb-2">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block bg-brand-cream text-brand-navy text-xs font-semibold px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-auto bg-brand-navy hover:bg-brand-navy/90 text-brand-gold font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                    Enroll Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-navy-600 mb-4">Not sure which course is right for you?</p>
          <p className="text-sm text-navy-500 mb-6">
Talk to us — we&apos;ll understand your background and recommend the best starting point for your journey.
          </p>
          <button className="bg-brand-navy hover:bg-brand-navy/90 text-brand-gold font-semibold py-3 px-8 rounded-lg transition-colors">
            Talk to Us →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
