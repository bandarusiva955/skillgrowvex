import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8 max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-brand-navy mb-8">Privacy Policy</h1>
      <div className="prose prose-navy max-w-none space-y-6 text-navy-600">
        <p>Last updated: June 2026</p>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">Information We Collect</h2>
          <p>We collect information you provide directly, including name, email, profile data, assignment submissions, and certificate records when you use SkillGrowVex Academy.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">How We Use Your Information</h2>
          <p>Your information is used to provide internship programs, track progress, issue certificates, send notifications, and improve our services.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">Data Security</h2>
          <p>We implement industry-standard security measures including encrypted connections, secure file storage via Cloudinary, and role-based access controls.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">Contact</h2>
          <p>For privacy-related inquiries, contact us at support@skillgrowvex.com.</p>
        </section>
      </div>
    </div>
  );
}
