import type { MetadataRoute } from "next";
import { COURSES, PROJECTS } from "@/lib/academy-data";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, freq: "weekly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/courses", priority: 0.9, freq: "weekly" as const },
    { path: "/programs", priority: 0.8, freq: "monthly" as const },
    { path: "/projects", priority: 0.7, freq: "monthly" as const },
    { path: "/pricing", priority: 0.9, freq: "monthly" as const },
    { path: "/career-roadmap", priority: 0.6, freq: "monthly" as const },
    { path: "/student-success", priority: 0.6, freq: "monthly" as const },
    { path: "/resume-review", priority: 0.6, freq: "monthly" as const },
    { path: "/contact", priority: 0.6, freq: "monthly" as const },
    { path: "/faq", priority: 0.6, freq: "monthly" as const },
    { path: "/verify", priority: 0.5, freq: "monthly" as const },
    { path: "/apply", priority: 0.9, freq: "monthly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
  ];

  const courseRoutes = COURSES.map((course) => ({
    path: `/courses/${course.slug}`,
    priority: 0.7,
    freq: "monthly" as const,
  }));

  const projectRoutes = PROJECTS.map(([title]) => ({
    path: `/projects/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    priority: 0.5,
    freq: "monthly" as const,
  }));

  return [...staticRoutes, ...courseRoutes, ...projectRoutes].map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
