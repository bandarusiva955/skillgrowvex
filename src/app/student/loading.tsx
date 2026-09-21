export default function Loading() {
  return <main className="academy-loading-page" aria-label="Loading student portal"><div className="academy-loading-mark">SV</div><div className="academy-loading-line" /><div className="academy-loading-grid">{Array.from({ length: 4 }, (_, index) => <div key={index} className="academy-loading-card" />)}</div></main>;
}
