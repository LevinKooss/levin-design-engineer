const results = [
  { label: 'Normalized', count: 120 },
  { label: 'After filtering', count: 80 },
  { label: 'After deduplication', count: 76 },
  { label: 'AI evaluated', count: 53 },
  { label: 'Saved to Notion', count: 6 },
];

export function ExecutionResults() {
  return (
    <figure className="rounded-[28px] border border-white/10 bg-card p-5 sm:p-8" aria-labelledby="execution-results-caption">
      <figcaption id="execution-results-caption" className="mb-7">
        <h3 className="text-lg font-semibold">One observed execution</h3>
        <p className="mt-2 text-sm leading-relaxed text-sub">Manual trigger · October 13, 2026 · Live data from all three sources</p>
      </figcaption>
      <ol aria-label="Observed processing stage counts" className="space-y-5">
        {results.map(({ label, count }) => (
          <li key={label} className="results-row">
            <span className="text-sm text-sub">{label}</span>
            <span className="results-count font-mono text-lg font-medium tabular-nums text-white">{count}</span>
            <div className="results-bar h-2 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
              <div className="h-full rounded-full bg-blue-400/80" style={{ width: `${count / 120 * 100}%` }} />
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-relaxed text-sub">
        Counts at successive processing stages. These are not conversion rates or a measure of AI accuracy.
      </p>
    </figure>
  );
}
