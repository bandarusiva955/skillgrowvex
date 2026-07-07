import type { Metadata } from "next";
import { VerifyForm } from "@/components/verify/verify-form";

export const metadata: Metadata = {
  title: "Verify Certificate",
  description: "Verify the authenticity of SkillGrowVex Academy certificates using certificate ID or QR code.",
};

interface VerifyPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
  const { id } = await searchParams;

  return (
    <div>
      <section className="bg-hero-pattern py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-white">
            Certificate Verification
          </h1>
          <p className="mt-4 text-navy-300 max-w-xl mx-auto">
            Enter a certificate ID to verify its authenticity. All SkillGrowVex
            certificates include a unique ID format: SGV-YYYY-XXXXXX
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-lg">
          <VerifyForm initialId={id} />
        </div>
      </section>
    </div>
  );
}
