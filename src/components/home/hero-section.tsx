"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FLOATING_TECH_ICONS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-secondary-500/20 blur-3xl" />

      {FLOATING_TECH_ICONS.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15, y: [0, -12, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          className="absolute hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm lg:block"
          style={{
            top: `${15 + (i % 3) * 25}%`,
            left: `${5 + (i % 4) * 22}%`,
          }}
        >
          {tech}
        </motion.span>
      ))}

      <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary-300" />
              Industry-Ready Internships & Career Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Launch Your Career with{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Industry-Ready Internships
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-navy-200"
          >
            Learn through practical projects, mentorship, and career guidance while building
            skills that prepare you for internships and entry-level technology roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="gradient" size="xl" asChild>
              <Link href="/apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
              asChild
            >
              <Link href="/pricing">Explore Programs</Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link href="/resume-review">
                <Upload className="mr-2 h-5 w-5" />
                Upload Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-navy-300"
          >
            <ShieldCheck className="h-4 w-4 text-success-500" />
            MSME (Udyam) Registered • Verified Certificates
          </motion.div>
        </div>
      </div>
    </section>
  );
}
