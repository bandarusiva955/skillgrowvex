"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DOMAIN_ROADMAP } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export function RoadmapSection() {
  const [expandedDomain, setExpandedDomain] = useState<string | null>("Data Analytics");

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-navy to-brand-navy/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Your Learning Roadmap
          </h2>
          <p className="text-brand-cream text-lg max-w-2xl mx-auto">
            Pick a domain and follow a structured path from beginner to expert. Each level builds
            on the previous one, ensuring you master the skills in the right order.
          </p>
        </motion.div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DOMAIN_ROADMAP.map((domain, index) => {
            const IconComponent =
              LucideIcons[domain.icon as keyof typeof LucideIcons] || LucideIcons.Code2;
            const isExpanded = expandedDomain === domain.domain;

            return (
              <motion.div
                key={domain.domain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => setExpandedDomain(isExpanded ? null : domain.domain)}
              >
                <div
                  className={`
                    relative h-full rounded-lg border-2 transition-all duration-300
                    ${
                      isExpanded
                        ? "border-brand-gold bg-brand-cream/10 ring-2 ring-brand-gold/50"
                        : "border-brand-gold/30 bg-white/5 hover:border-brand-gold/60"
                    }
                    overflow-hidden group
                  `}
                >
                  {/* Background gradient */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 
                      group-hover:opacity-5 transition-opacity duration-300
                    `}
                  />

                  <div className="relative p-6">
                    {/* Domain Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-3 bg-brand-navy rounded-lg">
                          <IconComponent className="w-6 h-6 text-brand-gold" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{domain.domain}</h3>
                          <p className="text-brand-cream text-sm">{domain.description}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 16 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 border-t border-brand-gold/20 pt-4">
                        {domain.stages.map((stage, stageIndex) => (
                          <motion.div
                            key={stage.level}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: stageIndex * 0.05 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-brand-gold rounded-full" />
                              <span className="font-semibold text-white">{stage.level}</span>
                            </div>
                            <div className="ml-4 flex flex-wrap gap-2">
                              {stage.topics.map((topic) => (
                                <span
                                  key={topic}
                                  className="inline-block px-2 py-1 bg-brand-navy/50 text-brand-cream text-xs rounded border border-brand-gold/30"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300 inline-flex items-center gap-2 group">
            Start Learning
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
