import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { FAQSection } from "@/components/home/faq-section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about SkillGrow Vex Academy internships and programs.",
};

export default function FAQPage() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our internships, certificates, and career programs."
      />
      <FAQSection />
    </div>
  );
}
