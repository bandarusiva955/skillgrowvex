"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

function AuthButtons({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <SignedOut>
        <Button variant="ghost" asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
        <Button variant="gold" asChild>
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <Button variant="outline" size="sm" asChild>
          <Link href="/student">Dashboard</Link>
        </Button>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5 text-brand-gold" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-brand-navy">
              SkillGrowVex
            </span>
            <span className="ml-1 text-xs text-brand-gold font-medium">Academy</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-navy-600 transition-colors hover:text-brand-navy rounded-lg hover:bg-navy-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <AuthButtons className="hidden md:flex items-center gap-3" />

        <button
          className="md:hidden p-2 rounded-lg hover:bg-navy-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-navy-100 bg-white"
          >
            <nav className="container mx-auto flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-navy-600 rounded-lg hover:bg-navy-50"
                >
                  {link.label}
                </Link>
              ))}
              <AuthButtons className="mt-4 flex flex-col gap-2 border-t border-navy-100 pt-4" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
