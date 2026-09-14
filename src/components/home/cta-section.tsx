"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-hero-gradient px-8 py-16 text-center lg:px-16"
        >
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
              Ready to Become Career Ready?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Join SkillGrow Vex Academy and build practical skills, professional portfolios,
              and interview readiness through industry-oriented learning.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="gold" size="lg" asChild>
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
