"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  GraduationCap,
  BadgeCheck,
  Lock,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TRUST_BADGES, SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  ShieldCheck,
  GraduationCap,
  BadgeCheck,
  Lock,
};

export function TrustSection() {
  return (
    <section className="border-b border-navy-100 bg-slate-50 py-16 dark:border-navy-800 dark:bg-navy-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white">
            Registered & Trusted
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-500 dark:text-navy-400">
            SkillGrow Vex Academy operates under Udyam Registered MSME — committed to
            industry-oriented learning and verified certifications.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TRUST_BADGES.map((badge, index) => {
            const Icon = iconMap[badge.icon] || ShieldCheck;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-premium transition-shadow hover:shadow-premium-lg dark:bg-navy-900"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-brand-navy dark:text-white">
                  {badge.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border border-primary-500/20 bg-white p-8 text-center shadow-glow dark:bg-navy-900"
        >
          <p className="text-sm font-medium text-navy-500 dark:text-navy-400">Enterprise Name</p>
          <p className="mt-1 font-display text-xl font-bold text-brand-navy dark:text-white">
            {SITE_CONFIG.udyam.enterpriseName}
          </p>
          <p className="mt-4 text-sm font-medium text-navy-500 dark:text-navy-400">
            Udyam Registration Number
          </p>
          <p className="mt-1 font-mono text-lg font-bold text-primary-500">
            {SITE_CONFIG.udyam.registrationNumber}
          </p>
          <Button variant="outline" size="sm" className="mt-6" asChild>
            <Link href={SITE_CONFIG.udyam.certificateUrl} target="_blank" rel="noopener noreferrer">
              View Udyam Registration
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
