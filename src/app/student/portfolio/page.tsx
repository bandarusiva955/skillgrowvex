import { PortfolioBuilder } from "@/components/student/portfolio-builder";
import { syncUserFromClerk } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function PortfolioPage() {
  const user = await syncUserFromClerk();
  if (!user) return null;

  const portfolio = await db.portfolio.findUnique({ where: { userId: user.id } });
  const certificates = await db.certificate.findMany({
    where: { userId: user.id },
    select: { programName: true, score: true, certificateId: true },
  });

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Portfolio Builder</h1>
        <p className="text-navy-500 mt-1">
          Showcase your projects and achievements to potential employers.
        </p>
      </div>
      <PortfolioBuilder
        user={user}
        portfolio={portfolio}
        certificates={certificates}
      />
    </div>
  );
}
