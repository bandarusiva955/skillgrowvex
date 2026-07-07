import Link from "next/link";
import { GraduationCap, Mail, Linkedin, Twitter, Instagram, BadgeCheck } from "lucide-react";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <GraduationCap className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <span className="font-display text-lg font-bold">SkillGrowVex</span>
                <span className="ml-1 text-xs text-brand-gold">Academy</span>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-navy-400">
              {SITE_CONFIG.description}
            </p>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-navy-300">
              <BadgeCheck className="h-3.5 w-3.5 text-brand-gold" />
              MSME Registered &middot; {SITE_CONFIG.udyamNumber}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-brand-gold">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-brand-gold">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-brand-gold">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-navy-300">
              <Mail className="h-4 w-4 text-brand-gold" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-navy-400">
            &copy; {new Date().getFullYear()} SkillGrowVex Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.social.linkedin} className="text-navy-400 hover:text-brand-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.twitter} className="text-navy-400 hover:text-brand-gold transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.instagram} className="text-navy-400 hover:text-brand-gold transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
