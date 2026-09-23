"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="academy-status-page"><div className="academy-status-card"><div className="academy-monogram">SV</div><span className="academy-kicker">TEMPORARY ERROR</span><h1>Something needs<br /><em>another try.</em></h1><p>We could not load this view. Please retry, or return to the academy homepage.</p><div><button type="button" onClick={() => reset()} className="academy-primary-button">Try again</button><Link href="/" className="academy-outline-button">Back home</Link></div></div></main>;
}