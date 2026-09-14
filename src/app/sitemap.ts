import type { MetadataRoute } from "next";
import { COURSES, PROJECTS } from "@/lib/academy-data";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/courses", "/programs", "/projects", "/pricing", "/career-roadmap", "/contact", "/faq", "/verify", "/apply", ...COURSES.map((course) => `/courses/${course.slug}`), ...PROJECTS.map(([title]) => `/projects/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`)];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
