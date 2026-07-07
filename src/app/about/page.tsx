import type { Metadata } from "next";
import { Target, Eye, Heart, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SkillGrowVex Academy, our mission, vision, and founder Bandaru Siva.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in curriculum design and student outcomes.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "Every student deserves access to quality education and career opportunities.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Our verified certificates and transparent processes build lasting trust.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We continuously evolve our programs to match industry demands.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-hero-pattern py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white lg:text-5xl">
            About SkillGrowVex Academy
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
            {SITE_CONFIG.tagline}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-brand-navy to-navy-700 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-display font-bold text-brand-gold mb-2">BS</div>
                  <p className="text-xl font-semibold">{SITE_CONFIG.founder.name}</p>
                  <p className="text-sm text-navy-300">{SITE_CONFIG.founder.title}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">
                Founder&apos;s Story
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                {SITE_CONFIG.founder.bio}
              </p>
              <p className="text-navy-600 leading-relaxed">
                Under his leadership, SkillGrowVex Academy has trained thousands of students
                across data analytics, programming, and business intelligence, with a 98%
                program completion rate and industry-recognized certification system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-premium">
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
              <p className="text-navy-600 leading-relaxed">
                To empower students with practical, industry-relevant skills through
                project-based internships and verified certifications, bridging the gap
                between academic learning and professional success.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-premium">
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
              <p className="text-navy-600 leading-relaxed">
                To become the leading EdTech platform for career development, serving
                millions of students worldwide with accessible, high-quality internship
                programs and placement assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-navy text-center mb-12">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy text-brand-gold">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
