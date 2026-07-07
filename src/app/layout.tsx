import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ClerkProviderWrapper } from "@/components/layout/clerk-provider-wrapper";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "internship",
    "certification",
    "data analytics",
    "power bi",
    "python",
    "machine learning",
    "career development",
    "edtech",
    "skillgrowvex",
  ],
  authors: [{ name: SITE_CONFIG.founder.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <ClerkProviderWrapper>{content}</ClerkProviderWrapper>
      </body>
    </html>
  );
}
