export default function Loading() {
  return <main className="academy-loading-page" aria-label="Loading programs"><div className="academy-loading-mark">SV</div><div className="academy-loading-grid">{Array.from({ length: 6 }, (_, index) => <div key={index} className="academy-loading-card" />)}</div></main>;
}
