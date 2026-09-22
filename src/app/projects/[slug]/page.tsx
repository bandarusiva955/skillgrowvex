import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/academy-data";
import { PageImage } from "@/components/layout/page-image";

type ProjectPageProps = { params: Promise<{ slug: string }> };

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(([title]) => slugify(title) === slug);
  return project ? { title: project[0], description: project[3] } : { title: "Project not found" };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find(([title]) => slugify(title) === slug);
  if (!project) notFound();
  const [title, category, technologies, description] = project;

  return (
    <main className="academy-case-study">
      <section className="academy-case-hero">
        <div className="academy-container">
          <Link href="/projects" className="academy-case-back">
            <ArrowLeft size={16} /> Back to projects
          </Link>
          <span className="academy-kicker">{category}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="academy-case-actions">
            <Link href="/contact" className="academy-primary-button">
              Discuss this project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="academy-container py-10">
        <PageImage
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop"
          alt={`${title} project technology case study`}
        />
      </div>

      <section className="academy-case-body">
        <div className="academy-container academy-case-grid">
          <div>
            <span className="academy-kicker">CASE STUDY FRAMEWORK</span>
            <h2>
              Build it like a
              <br />
              <em>real product.</em>
            </h2>
            <p>
              Each project case study is structured around a clear problem, a thoughtful solution,
              an understandable architecture, and evidence of the decisions made along the way.
            </p>
          </div>
          <div className="academy-case-details">
            <article>
              <span>Problem</span>
              <h3>What needs to be improved?</h3>
              <p>
                Define the user, business context, constraints, and success criteria before writing
                the first line of code.
              </p>
            </article>
            <article>
              <span>Solution</span>
              <h3>How does the product help?</h3>
              <p>
                Translate the problem into a focused workflow, useful interface, and maintainable
                implementation.
              </p>
            </article>
            <article>
              <span>Technology stack</span>
              <h3>{technologies}</h3>
              <div className="academy-case-checks">
                <span>
                  <CheckCircle2 size={15} /> Architecture notes
                </span>
                <span>
                  <CheckCircle2 size={15} /> Project walkthrough
                </span>
                <span>
                  <CheckCircle2 size={15} /> Portfolio documentation
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="academy-case-final">
        <div className="academy-container">
          <h2>
            Ready to build
            <br />
            <em>your own proof?</em>
          </h2>
          <Link href="/courses" className="academy-primary-button">
            Explore learning paths <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
