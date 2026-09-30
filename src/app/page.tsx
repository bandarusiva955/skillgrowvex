import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CourseGrid } from "@/components/home/course-grid";
import { AIEraSection, DashboardPreview, FAQSectionNew, HomepageContact, InternshipSection, JourneySection, MentorshipSection, ProjectsSection, ValueChainSection, ValueStrip, WhySection } from "@/components/home/academy-sections";
import { PricingShowcase } from "@/components/home/pricing-showcase";
import { TextMarquee } from "@/components/home/marquee-strip";

export default function HomePage() {
  return (
    <div className="academy-site">
      <section className="academy-hero">
        <div className="academy-hero-orb academy-hero-orb-one" />
        <div className="academy-hero-orb academy-hero-orb-two" />
        <div className="academy-container academy-hero-layout">
          <div className="academy-hero-copy"><span className="academy-eyebrow"><Sparkles size={15} /> LEARN &middot; BUILD &middot; EXPERIENCE &middot; GROW</span><h1>Build skills.<br /><em>Gain experience.</em><br />Grow your career.</h1><p>Practical IT courses, real-world projects, internships, and mentorship designed to help students and freshers become industry-ready.</p><div className="academy-hero-actions"><Link href="/programs" className="academy-primary-button">Explore courses <ArrowRight size={17} /></Link><Link href="/apply" className="academy-secondary-button">Explore internships</Link></div><div className="academy-hero-notes"><span><ShieldCheck size={16} /> Practical learning</span><span><Users size={16} /> Mentor guidance</span><span><Code2 size={16} /> Portfolio projects</span></div></div>
          <div className="academy-hero-dashboard hero-float-anim" aria-label="AI powered learning visual"><div className="academy-hero-photo"><Image src="/hero-ai-small.svg" alt="AI chip powering modern education" fill priority sizes="250px" /></div><div className="hero-main-image"><Image src="/hero-ai-main.svg" alt="AI neural network connecting learning, building and career growth" fill priority sizes="(max-width: 900px) 90vw, 520px" /></div><p className="academy-dashboard-caption">A clearer path from first lesson to career-ready work.</p></div>
        </div>
      </section>
      <TextMarquee items={["PRACTICAL LEARNING", "REAL PROJECTS", "MENTOR GUIDANCE", "CAREER-READY SKILLS"]} />
      <ValueStrip />
      <JourneySection />
      <WhySection />
      <section className="academy-section academy-courses" id="courses"><div className="academy-container"><div className="academy-section-heading split"><div><span className="academy-kicker">LEARNING PATHS</span><h2>Learn skills<br /><em>that matter.</em></h2></div><p>Choose a career path and build practical skills through structured learning, guided practice, and meaningful projects.</p></div><CourseGrid /></div></section>
      <AIEraSection />
      <PricingShowcase />
      <ValueChainSection />
      <InternshipSection />
      <MentorshipSection />
      <ProjectsSection />
      <DashboardPreview />
      <section className="academy-section academy-career"><div className="academy-container academy-career-layout"><div className="academy-section-heading"><span className="academy-kicker">CAREER SUPPORT</span><h2>Skills get you in.<br /><em>Support keeps you moving.</em></h2><p>Build the professional layer around your technical skills with practical guidance that you can use immediately.</p><Link href="/career-roadmap" className="academy-primary-button">Explore career roadmap <ArrowRight size={17} /></Link></div><div className="academy-career-list"><div><strong>01</strong><span><b>Resume building</b><small>Present projects and skills clearly.</small></span></div><div><strong>02</strong><span><b>GitHub portfolio</b><small>Show your work with context and consistency.</small></span></div><div><strong>03</strong><span><b>Interview preparation</b><small>Practice technical and HR conversations.</small></span></div><div><strong>04</strong><span><b>Career guidance</b><small>Choose the next step with more confidence.</small></span></div></div></div></section>
      <section className="academy-section academy-testimonials"><div className="academy-container academy-testimonial-layout"><div><span className="academy-kicker">LEARNER VOICES</span><h2>Built around<br /><em>practical learning.</em></h2><p>Verified learner stories will appear here as they are collected and approved.</p></div><article><span className="academy-placeholder-tag">COMING SOON</span><blockquote>Approved learner feedback will be published here.</blockquote><footer>We are collecting real stories from learners who build with Skill Grow Vex.</footer></article></div></section>
      <section className="academy-workshop"><div className="academy-container academy-workshop-layout"><div><span className="academy-eyebrow"><Sparkles size={15} /> FREE CAREER GUIDANCE</span><h2>Not sure which path is right for you?</h2><p>Join a guidance conversation to understand the skills, projects, and experience that can help you move forward.</p></div><Link href="/contact" className="academy-primary-button">Join free workshop <ArrowRight size={17} /></Link></div></section>
      <FAQSectionNew />
      <HomepageContact />
      <section className="academy-contact-cta"><div className="academy-container"><span className="academy-kicker">READY WHEN YOU ARE</span><h2>Start with one<br /><em>practical step.</em></h2><div><Link href="/programs" className="academy-primary-button">Explore courses <ArrowRight size={17} /></Link><Link href="/contact" className="academy-secondary-button">Send an enquiry</Link></div></div></section>
    </div>
  );
}