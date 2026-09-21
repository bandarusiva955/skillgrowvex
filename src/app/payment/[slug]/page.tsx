import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { COURSES } from "@/lib/academy-data";
import { PageImage } from "@/components/layout/page-image";

type PaymentPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PaymentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);
  return course ? { title: `Enroll in ${course.title}`, description: `Review your ${course.title} enrollment before payment.` } : { title: "Course payment" };
}

export default async function PaymentPage({ params }: PaymentPageProps) {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);
  if (!course) notFound();

  return <main className="academy-payment-page"><div className="academy-container"><Link href={`/courses/${course.slug}`} className="academy-case-back"><ArrowLeft size={16} /> Back to course</Link><div className="academy-payment-layout"><section><span className="academy-kicker">ENROLLMENT SUMMARY</span><h1>Start learning<br /><em>{course.title}.</em></h1><p>Review the course details below. This page is UI-only while the payment gateway is being prepared.</p><div className="academy-payment-points"><span><CheckCircle2 size={16} /> {course.duration} of structured learning</span><span><CheckCircle2 size={16} /> Projects and guided assignments</span><span><CheckCircle2 size={16} /> Career-focused learning path</span></div></section><section className="academy-payment-card"><PageImage src={course.image} alt={`${course.title} course thumbnail`} className="academy-payment-thumb" /><div><span className="academy-kicker">SELECTED COURSE</span><h2>{course.title}</h2><p>{course.description}</p></div><div className="academy-payment-price"><span>Total</span><strong>{course.price}</strong></div><button type="button" className="academy-primary-button w-full">Pay now</button><p className="academy-payment-note"><ShieldCheck size={15} /> Secure payment integration will be added later.</p><p className="academy-payment-todo">TODO: Integrate payment gateway (Razorpay/Stripe) — will be added later</p></section></div></div></main>;
}