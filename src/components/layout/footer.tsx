import Link from "next/link";
import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Github,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white dark:bg-navy-950">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="academy-monogram" aria-hidden="true">SV</div>
              <div>
                <span className="font-display text-lg font-bold">SkillGrow Vex</span>
                <span className="ml-1 text-xs text-[#D4A017]">Academy</span>
              </div>
            </div>
            <p className="text-sm text-navy-300">{SITE_CONFIG.tagline}</p>
            <p className="text-sm text-navy-400">
              Powered by <span className="text-white">{SITE_CONFIG.poweredBy}</span>
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <ShieldCheck className="h-4 w-4" />
                Practical learning, honest expectations
              </div>
              <p className="mt-2 text-xs text-navy-400">Courses, projects, internships, mentorship, and career preparation.</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-primary-400">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-navy-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-primary-400">Company</h4>
            <ul className="space-y-3">
              {[...FOOTER_LINKS.company, ...FOOTER_LINKS.resources].map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-navy-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-primary-400">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-navy-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-navy-300">
              <Mail className="h-4 w-4 text-primary-400" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="transition-colors hover:text-white">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-navy-400">
            &copy; 2026 {SITE_CONFIG.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.social.linkedin} className="text-navy-400 transition-colors hover:text-primary-400" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.twitter} className="text-navy-400 transition-colors hover:text-primary-400" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.instagram} className="text-navy-400 transition-colors hover:text-primary-400" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.youtube} className="text-navy-400 transition-colors hover:text-primary-400" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.github} className="text-navy-400 transition-colors hover:text-primary-400" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.whatsapp} className="text-navy-400 transition-colors hover:text-[#25D366]" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.social.telegram} className="text-navy-400 transition-colors hover:text-primary-400" aria-label="Telegram">
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
