import { ArrowDown, Database, Filter, GitCompareArrows, Sparkles } from 'lucide-react';

const stages = [
  {
    number: '02',
    title: 'Normalize & Filter',
    icon: Filter,
    description: 'Convert API responses into a shared schema, remove unsuitable offers, and consolidate overlapping results.',
    detail: 'Ambiguous offers can be held for review.',
  },
  {
    number: '03',
    title: 'Duplicate & Notion History Check',
    icon: GitCompareArrows,
    description: 'Compare source identifiers, normalized URLs, job attributes, and content hashes with existing Notion records.',
    detail: 'Identify new listings and changes to existing records.',
  },
  {
    number: '04',
    title: 'AI Relevance Scoring',
    icon: Sparkles,
    description: 'Use OpenAI for a relevance score, classification, and explanation. Validate structure and job identity.',
    detail: 'Invalid responses enter a bounded retry path.',
  },
  {
    number: '05',
    title: 'Notion Persistence',
    icon: Database,
    description: 'Create selected records or route changed records through update logic for manual review in Notion.',
    detail: 'Manually maintained application statuses stay outside the update payload.',
  },
];

export function JobFinderArchitecture() {
  return (
    <figure className="architecture rounded-[28px] border border-white/10 bg-card p-5 sm:p-8" aria-labelledby="architecture-caption">
      <figcaption id="architecture-caption" className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-wider text-blue-400">Simplified overview</span>
        <span className="text-xs text-sub">n8n orchestration · 5 main stages</span>
      </figcaption>

      <div className="relative pb-12">
        <div className="mb-4 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-center">
          <h3 className="text-sm font-semibold"><span className="mr-2 font-mono text-blue-400">01</span>Collect job listings</h3>
          <p className="text-xs text-sub">Local and remote search profiles</p>
        </div>
        <ul aria-label="Job listing sources" className="architecture-sources grid grid-cols-1 gap-3 sm:grid-cols-3">
          {['Adzuna', 'Arbeitnow', 'Startup Jobs'].map((source) => (
            <li key={source} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-center text-sm font-medium">
              {source}<span className="ml-2 font-mono text-xs text-sub">API</span>
            </li>
          ))}
        </ul>
        <ArrowDown className="architecture-source-arrow absolute bottom-2 left-1/2 size-6 -translate-x-1/2 text-blue-400/80" aria-hidden="true" />
      </div>

      <ol aria-label="Shared processing stages" className="architecture-stages grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
        {stages.map(({ number, title, icon: Icon, description, detail }, index) => (
          <li key={number} className="relative flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="mb-4 flex items-center justify-between text-blue-400">
              <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              <span className="font-mono text-xs">{number}</span>
            </div>
            <h3 className="mb-3 text-base font-semibold leading-snug">{title}</h3>
            <p className="mb-5 text-sm leading-relaxed text-sub">{description}</p>
            <p className="mt-auto border-t border-white/10 pt-4 text-xs leading-relaxed text-blue-200/90">{detail}</p>
            {index < stages.length - 1 && <ArrowDown className="architecture-stage-arrow text-blue-400/80" size={20} aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-sub">
        The three source integrations feed a shared pipeline. Eligibility gates, retry loops, and create/update branches are condensed here; this overview does not show the complete node execution order.
      </p>
    </figure>
  );
}
