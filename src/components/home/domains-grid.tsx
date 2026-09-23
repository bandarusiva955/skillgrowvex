"use client";

import Image from "next/image";
import { COURSES } from "@/lib/academy-data";

function PlayingCard({ image, title, category, index }: { image: string; title: string; category: string; index: number }) {
  const tilt = index % 2 === 0 ? -6 : 6;
  return (
    <div className="playing-card" style={{ "--tilt": `${tilt}deg` } as React.CSSProperties}>
      <div className="playing-card-inner">
        <div className="playing-card-front">
          <Image src={image} alt={title} fill sizes="220px" style={{ objectFit: "cover" }} />
          <div className="playing-card-front-overlay">
            <span>{category}</span>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="playing-card-back">
          <span className="playing-card-back-letter">{title.charAt(0)}</span>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export function DomainsGrid() {
  const featured = COURSES.slice(0, 8);
  return (
    <section className="academy-section">
      <div className="academy-container">
        <div className="academy-section-heading">
          <span className="academy-kicker">AREA OF EXPERTISE</span>
          <h2>
            Every domain.<br /><em>One learning path.</em>
          </h2>
        </div>
        <div className="playing-cards-grid">
          {featured.map((c, i) => (
            <PlayingCard key={c.slug} image={c.image} title={c.title} category={c.category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}