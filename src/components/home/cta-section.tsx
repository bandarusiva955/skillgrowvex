"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-hero-pattern px-8 py-16 text-center lg:px-16"
        >
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
              Ready to Build Your Future?
            </h2>
            <p className="mt-4 text-navy-300 max-w-xl mx-auto">
              Join thousands of students who are gaining real-world skills and
              earning verified credentials through SkillGrowVex Academy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/sign-up">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
                asChild
              >
                <Link href="/programs">Browse Programs</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
