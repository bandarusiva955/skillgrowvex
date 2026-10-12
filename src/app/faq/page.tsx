import type { Metadata } from "next";
import { PageImage } from "@/components/layout/page-image";
import { PageHero } from "@/components/layout/page-hero";
import { FAQSection } from "@/components/home/faq-section";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about SkillGrow Vex Academy internships, pricing, certificates, and career support — everything before you apply or enroll.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
