import type { Metadata } from "next";
import { DM_Mono, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ClerkProviderWrapper } from "@/components/layout/clerk-provider-wrapper";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { BackToTop } from "@/components/layout/back-to-top";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import "./globals.css";

const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const monoFont = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const dynamic = "force-dynamic";

const HOME_DESCRIPTION =
  "Practical IT internships, courses, and real-world projects for students and freshers in India. Build skills in Python, data, and AI with mentor guidance.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: HOME_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
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
    description: HOME_DESCRIPTION,
    url: "/",
    images: [{ url: "/icon.svg", width: 64, height: 64, alt: "Skill Grow Vex Academy SV monogram" }],
  },
  twitter: {
    card: "summary",
    title: "Skill Grow Vex Academy | Learn. Build. Experience. Grow.",
    description: HOME_DESCRIPTION,
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: SITE_CONFIG.founder.name,
  },
  sameAs: Object.values(SITE_CONFIG.social),
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${displayFont.variable} ${monoFont.variable} min-h-screen flex flex-col font-sans`}>
        <ClerkProviderWrapper>{content}</ClerkProviderWrapper>
      </body>
    </html>
  );
}
