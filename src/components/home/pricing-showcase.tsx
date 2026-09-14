import Link from "next/link";
import { Check, Star } from "lucide-react";

const plans = [
  { name: "Starter", price: "699", description: "For students who want to start learning.", features: ["Course access", "Learning resources", "Basic assignments", "Applicable completion credential"], cta: "Start learning" },
  { name: "Career", price: "1,999", description: "For students who want practical skills.", features: ["Everything in Starter", "Practical projects", "Portfolio project", "Resume and GitHub guidance", "Career guidance"], cta: "Build my career" },
  { name: "Professional", price: "2,599", description: "The guided experience for building work and confidence.", features: ["Everything in Career", "Internship experience", "Live mentorship", "Project reviews", "Interview preparation", "Career roadmap"], cta: "Join professional", popular: true },
  { name: "Career Pro", price: "3,999", description: "For learners ready to invest in a complete preparation path.", features: ["Everything in Professional", "Advanced portfolio projects", "AI/ML project options", "Resume optimization", "Mock interviews", "LinkedIn and GitHub guidance", "Extended career support"], cta: "Become career ready" },
];

export function PricingShowcase() {
  return <section className="academy-section academy-pricing" id="pricing"><div className="academy-container"><div className="academy-section-heading split"><div><span className="academy-kicker">LEARNING OPTIONS</span><h2>Choose your<br /><em>learning path.</em></h2></div><p>Start with the level of support that fits your goals. Features and credentials are subject to the selected program and current availability.</p></div><div className="academy-pricing-grid">{plans.map((plan) => <article key={plan.name} className={plan.popular ? "academy-price-card popular" : "academy-price-card"}>{plan.popular && <span className="academy-popular"><Star size={13} /> Most popular</span>}<span className="academy-price-name">{plan.name}</span><h3><small>₹</small>{plan.price}</h3><p>{plan.description}</p><ul>{plan.features.map((feature) => <li key={feature}><Check size={15} /> {feature}</li>)}</ul><Link href={`/apply?plan=${plan.name.toLowerCase().replaceAll(" ", "-")}`} className={plan.popular ? "academy-primary-button" : "academy-outline-button"}>{plan.cta}</Link></article>)}</div><p className="academy-pricing-note">No payment processing is represented here. The enrolment flow is used to collect interest and confirm current program details.</p></div></section>;
}
