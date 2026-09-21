import Link from "next/link";

export default function NotFound() {
  return <main className="academy-status-page"><div className="academy-status-card"><div className="academy-monogram">SV</div><span className="academy-kicker">404 · PAGE NOT FOUND</span><h1>This page took a<br /><em>different route.</em></h1><p>The page you requested is unavailable, but the next useful step is close by.</p><div><Link href="/" className="academy-primary-button">Back home</Link><Link href="/courses" className="academy-outline-button">Explore courses</Link></div></div></main>;
}
