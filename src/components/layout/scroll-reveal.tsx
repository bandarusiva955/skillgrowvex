"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Elements that fade/slide up the first time they scroll into view.
// Matching is selector-based so every page picks this up without
// per-component changes.
const REVEAL_SELECTORS = [
  ".academy-section-heading",
  ".academy-value-strip > div",
  ".academy-journey-grid > article",
  ".academy-why-grid > article",
  ".playing-card",
  ".academy-course-card",
  ".academy-price-card",
  ".academy-internship-grid > article",
  ".academy-project-grid > article",
  ".academy-chain > div",
  ".academy-career-list > div",
  ".academy-testimonial-layout article",
  ".academy-faq-list details",
  ".academy-dashboard-card",
  ".academy-detail-panel",
  ".academy-contact-links",
  ".academy-workshop-layout > div",
  ".academy-contact-cta .academy-container > *",
].join(", ");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS));
    if (elements.length === 0) return;

    // Without IntersectionObserver there is nothing to trigger the reveal,
    // so leave everything visible.
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el, index) => {
      // Stagger siblings that appear together, capped so late items never lag.
      el.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
      el.classList.add("academy-reveal");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        el.classList.remove("academy-reveal", "is-visible");
        el.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
