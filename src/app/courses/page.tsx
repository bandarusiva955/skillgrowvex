import type { Metadata } from "next";
import { CourseGrid } from "@/components/home/course-grid";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore practical Python, data, AI, development, and career courses at SkillGrow Vex Academy.",
};

export default function CoursesPage() {
  return <main className="academy-site"><section className="academy-hero academy-course-list-hero"><div className="academy-container"><span className="academy-eyebrow">PRACTICAL IT LEARNING</span><h1>Choose the skill<br /><em>you want to build.</em></h1><p>Explore structured courses with real projects, clear outcomes, and a path to the next step.</p></div></section><section className="academy-section academy-courses"><div className="academy-container"><CourseGrid /></div></section></main>;
}