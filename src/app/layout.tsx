import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ClerkProviderWrapper } from "@/components/layout/clerk-provider-wrapper";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { BackToTop } from "@/components/layout/back-to-top";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: "Practical IT courses, projects, internships, mentorship, and career guidance for future-ready technology professionals.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  keywords: [
    "Skill Grow Vex Academy",
    "IT training",
    "internship",
    "career development",
    "Python training",
    "Data Science",
    "Generative AI",
    "Full Stack Development",
    "data analytics",
    "power bi",
    "python",
    "machine learning",
    "resume review",
    "edtech",
    "skillgrowvex",
    "career development",
  ],
  authors: [{ name: SITE_CONFIG.founder.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: "Practical IT courses, projects, internships, mentorship, and career guidance for future-ready technology professionals.",
    url: "/",
    images: [{ url: "/icon.svg", width: 64, height: 64, alt: "Skill Grow Vex Academy SV monogram" }],
  },
  twitter: {
    card: "summary",
    title: "Skill Grow Vex Academy | Learn. Build. Experience. Grow.",
    description: "Practical IT courses, projects, internships, mentorship, and career guidance.",
    images: ["/icon.svg"],
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
    <ThemeProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CursorGlow />
      <WhatsAppButton />
      <BackToTop />
    </ThemeProvider>
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <ClerkProviderWrapper>{content}</ClerkProviderWrapper>
      </body>
    </html>
  );
}
