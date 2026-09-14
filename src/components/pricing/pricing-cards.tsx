"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { INTERNSHIP_PLANS } from "@/lib/constants";

export function PricingCards() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {INTERNSHIP_PLANS.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg dark:bg-navy-900 ${
            plan.popular
              ? "border-primary-500 ring-2 ring-primary-500/20"
              : "border-navy-100 dark:border-navy-700"
          }`}
        >
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gradient text-white border-0">
              <Star className="mr-1 h-3 w-3" /> Most Popular
            </Badge>
          )}

          <h3 className="font-display text-xl font-bold text-brand-navy dark:text-white">
            {plan.name}
          </h3>
          <p className="mt-1 text-sm text-navy-500">Suitable for: {plan.suitableFor}</p>

          <div className="mt-6">
            <span className="font-display text-4xl font-bold text-primary-500">
              {plan.currency}{plan.price}
            </span>
            <span className="ml-2 text-navy-500">/ {plan.duration}</span>
          </div>

          <ul className="mt-8 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
                {feature}
              </li>
            ))}
          </ul>

          <Button
            variant={plan.popular ? "gradient" : "outline"}
            className="mt-8 w-full"
            size="lg"
            asChild
          >
            <Link href={`/apply?plan=${plan.id}`}>Enroll Now</Link>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
