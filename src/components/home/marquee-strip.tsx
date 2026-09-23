"use client";

export function TextMarquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee({ logos }: { logos: { name: string; src?: string }[] }) {
  const loop = [...logos, ...logos];
  return (
    <div className="marquee-strip marquee-strip-light">
      <div className="marquee-track marquee-track-slow">
        {loop.map((logo, i) => (
          <span key={i} className="marquee-logo">
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}