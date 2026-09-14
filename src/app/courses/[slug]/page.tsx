import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import { COURSES } from "@/lib/academy-data";

type CoursePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);
  return course ? { title: course.title, description: course.description } : { title: "Course not found" };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);
  if (!course) notFound();

  return <main className="academy-course-detail"><section className="academy-course-detail-hero"><div className="academy-container"><span className="academy-kicker">{course.category} · {course.level}</span><h1>{course.title}</h1><p>{course.description}</p><div className="academy-course-detail-meta"><span><Clock3 size={14} /> {course.duration}</span><span><Layers3 size={14} /> Structured online learning</span><span>{course.price}</span></div><Link href={`/payment/${course.slug}`} className="academy-primary-button">Enroll now <ArrowRight size={16} /></Link></div></section><section className="academy-section"><div className="academy-container academy-course-detail-grid"><div><span className="academy-kicker">WHAT YOU&apos;LL LEARN</span><h2>Build a useful<br /><em>working foundation.</em></h2><ul className="academy-detail-checks"><li><CheckCircle2 size={17} /> Core concepts and practical workflows</li><li><CheckCircle2 size={17} /> Guided assignments and project practice</li><li><CheckCircle2 size={17} /> Technology-specific portfolio direction</li><li><CheckCircle2 size={17} /> Career guidance based on your next step</li></ul></div><div className="academy-detail-panel"><span className="academy-kicker">TECHNOLOGIES</span><div className="academy-tech-list">{course.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><h3>Learning experience</h3><p>Confirm the current schedule, mentor availability, resources, and credential details with the academy before enrolling.</p></div></div></section></main>;
}