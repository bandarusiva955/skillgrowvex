import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import { PageImage } from "@/components/layout/page-image";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SkillGrowVex Academy support team.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-hero-pattern py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-navy-300 max-w-xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* TODO: swap with official SkillGrowVex branded image */}
          <PageImage src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop" alt="Professional team discussion for learner support" className="mb-12" />
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-gold shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-navy-500 hover:text-brand-gold transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-gold shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">Response Time</h3>
                  <p className="text-sm text-navy-500">Within 24 hours on business days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-gold shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">Location</h3>
                  <p className="text-sm text-navy-500">India (Remote Programs Worldwide)</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
