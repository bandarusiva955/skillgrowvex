import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { SkillsCategorySection } from "@/components/home/skills-category-section";
import { EnhancedProgramsSection } from "@/components/home/enhanced-programs-section";
import { RoadmapSection } from "@/components/home/roadmap-section";
import { InternshipSection } from "@/components/home/internship-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { LearningPathSection } from "@/components/home/learning-path-section";
import { CareerSupportSection } from "@/components/home/career-support-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <SkillsCategorySection />
      <EnhancedProgramsSection />
      <RoadmapSection />
      <InternshipSection />
      <TestimonialsSection />
      <LearningPathSection />
      <CareerSupportSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
