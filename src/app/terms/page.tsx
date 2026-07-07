import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8 max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-brand-navy mb-8">Terms of Service</h1>
      <div className="prose prose-navy max-w-none space-y-6 text-navy-600">
        <p>Last updated: June 2026</p>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">Acceptance of Terms</h2>
          <p>By accessing SkillGrowVex Academy, you agree to these terms and our privacy policy.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">Program Enrollment</h2>
          <p>Students must complete all required assignments and maintain academic integrity. Plagiarism or fraudulent submissions may result in certificate revocation.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">Certificates</h2>
          <p>Certificates are issued upon successful program completion. SkillGrowVex Academy reserves the right to revoke certificates in cases of misconduct.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-brand-navy">Contact</h2>
          <p>Questions about these terms? Email support@skillgrowvex.com.</p>
        </section>
      </div>
    </div>
  );
}
