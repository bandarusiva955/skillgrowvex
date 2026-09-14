"use client";



import Link from "next/link";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from "lucide-react";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/layout/theme-toggle";

import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";



const PRIMARY_NAV = NAV_LINKS.filter(
  (link) => !["Certificates", "FAQ"].includes(link.label)
);



function AuthButtons({ className = "", onNavigate }: { className?: string; onNavigate?: () => void }) {

  return (

    <div className={className}>

      <SignedOut>

        <Button variant="ghost" className="text-[#aeb3a2] hover:bg-transparent hover:text-[#d6f85b]" asChild>

          <Link href="/sign-in" onClick={onNavigate}>Login</Link>

        </Button>

        <Button variant="gradient" className="bg-[#d6f85b] text-[#10110d] shadow-none hover:bg-[#efffa7]" asChild>

          <Link href="/apply" onClick={onNavigate}>Register</Link>

        </Button>

      </SignedOut>

      <SignedIn>

        <Button variant="outline" size="sm" asChild>

          <Link href="/student" onClick={onNavigate}>Dashboard</Link>

        </Button>

        <UserButton afterSignOutUrl="/" />

      </SignedIn>

    </div>

  );

}



export function Header() {

  const [mobileOpen, setMobileOpen] = useState(false);



  return (

    <header className="sticky top-0 z-50 w-full border-b border-[#383b31] bg-[#10110d]/95 text-[#f1f2e8] backdrop-blur-md">

      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">

        <Link href="/" className="group flex items-center gap-2">

          <div className="academy-monogram" aria-hidden="true">SV</div>

          <div className="hidden sm:block">

            <span className="font-display text-lg font-bold text-white">

                SkillGrow Vex

            </span>

            <span className="ml-1 text-xs font-medium text-[#D4A017]">Academy</span>

          </div>

        </Link>



        <nav className="hidden items-center gap-0.5 lg:flex">

          {PRIMARY_NAV.map((link) => (

            <Link

              key={link.href + link.label}

              href={link.href}

              className="rounded-lg px-3 py-2 text-xs font-medium text-[#d6dce5] transition-colors hover:text-[#D4A017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"

            >

              {link.label}

            </Link>

          ))}

        </nav>



        <div className="hidden items-center gap-2 md:flex">

          <ThemeToggle />

          <Button variant="gradient" className="academy-gold-button" asChild>
            <Link href="/courses">Explore Courses</Link>
          </Button>

          <AuthButtons className="flex items-center gap-2" />

        </div>



        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle />

          <button

            className="rounded-lg p-2 hover:bg-navy-50 dark:hover:bg-navy-800"

            onClick={() => setMobileOpen(!mobileOpen)}

            aria-label="Toggle menu"

          >

            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}

          </button>

        </div>

      </div>



      <AnimatePresence>

        {mobileOpen && (

          <motion.div

            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: "auto" }}

            exit={{ opacity: 0, height: 0 }}

            className="border-t border-navy-100 bg-white dark:border-navy-800 dark:bg-navy-950 md:hidden"

          >

            <nav className="container mx-auto flex max-h-[70vh] flex-col gap-1 overflow-y-auto p-4">

              {NAV_LINKS.map((link) => (

                <Link

                  key={link.href + link.label}

                  href={link.href}

                  onClick={() => setMobileOpen(false)}

                  className="rounded-lg px-4 py-3 text-sm font-medium text-navy-600 hover:bg-navy-50 dark:text-navy-300 dark:hover:bg-navy-800"

                >

                  {link.label}

                </Link>

              ))}

              <AuthButtons

                className="mt-4 flex flex-col gap-2 border-t border-navy-100 pt-4 dark:border-navy-800"

                onNavigate={() => setMobileOpen(false)}

              />

            </nav>

          </motion.div>

        )}

      </AnimatePresence>



      <div className="hidden border-t border-[#383b31] bg-[#1c2017] py-1.5 text-center text-xs text-[#d6f85b] lg:block">

        <span className="font-medium">{SITE_CONFIG.tagline}</span>

        <span className="mx-2 text-[#777d6e]">|</span>

        <span className="text-[#969c8b]">Powered by {SITE_CONFIG.poweredBy}</span>

      </div>

    </header>

  );

}

