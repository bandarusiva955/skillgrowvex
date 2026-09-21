import type { Metadata } from "next";
import { PageImage } from "@/components/layout/page-image";
import { PageHero } from "@/components/layout/page-hero";
import { FAQSection } from "@/components/home/faq-section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about SkillGrow Vex Academy internships and programs.",
};

export default function FAQPage() {
  return (
    <div>
      {/* TODO: swap with official SkillGrowVex branded image */}
      <div className="container mx-auto px-4 pt-12 lg:px-8"><PageImage src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&fit=crop" alt="Students and mentors discussing learning questions" /></div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our internships, certificates, and career programs."
      />
      <FAQSection />
    </div>
  );
}
