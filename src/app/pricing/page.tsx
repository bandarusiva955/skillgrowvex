import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PricingShowcase } from "@/components/home/pricing-showcase";
import { PageImage } from "@/components/layout/page-image";

export const metadata: Metadata = {
  title: "Learning Paths & Pricing",
  description: "Compare Skill Grow Vex Academy learning paths for practical IT skills, projects, mentorship, and career preparation.",
};

export default function PricingPage() {
  return <main className="academy-site"><section className="academy-hero academy-pricing-hero"><div className="academy-container"><span className="academy-eyebrow"><ShieldCheck size={15} /> CLEAR OPTIONS · HONEST EXPECTATIONS</span><h1>Choose a path<br /><em>that fits your goal.</em></h1><p>Start with focused learning or choose a more guided path that connects practice, projects, mentorship, and career preparation.</p><Link href="/contact" className="academy-secondary-button">Talk through your options <ArrowRight size={17} /></Link></div></section>{/* TODO: swap with official SkillGrowVex branded image */}<div className="academy-container py-10"><PageImage src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&auto=format&fit=crop" alt="Mentor guiding learners through a professional workshop" /></div><PricingShowcase /></main>;
}
