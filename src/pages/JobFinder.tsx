import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JobFinderArchitecture } from '../components/job-finder/JobFinderArchitecture';
import { ExecutionResults } from '../components/job-finder/ExecutionResults';
import workflowPreview from '../assets/projects/ai-job-finder/workflow-preview.png';
import workflow from '../assets/projects/ai-job-finder/workflow.png';
import executionSuccess from '../assets/projects/ai-job-finder/execution-success.png';
import notionResults from '../assets/projects/ai-job-finder/notion-results.png';
import './JobFinder.css';

function CaseStudySection({ number, title, id, children }: { number: string; title: string; id: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} aria-labelledby={`${id}-heading`} className="case-section case-reveal" data-visible={visible}>
      <header className="mb-8 flex items-baseline gap-4 border-t border-white/10 pt-8">
        <span className="font-mono text-xs text-blue-400" aria-hidden="true">{number}</span>
        <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      </header>
      {children}
    </section>
  );
}

function OriginalImageLink({ src, children }: { src: string; children: ReactNode }) {
  return (
    <a href={src} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-200">
      {children}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (full size, opens in a new tab)</span>
    </a>
  );
}

const engineeringDecisions = [
  {
    title: 'Working with inconsistent API data',
    paragraphs: [
      'Each provider returns different fields, formats, and pagination structures.',
      'The workflow uses source-specific normalization and a shared downstream schema so listings can be processed consistently.',
    ],
  },
  {
    title: 'Reducing irrelevant results before AI evaluation',
    paragraphs: [
      'Rule-based filters remove clearly unsuitable offers before the scoring stage. These include senior and management roles, apprenticeship or dual-study offers, and advertisements for training courses.',
      'Ambiguous opportunities can be held for review rather than automatically accepted.',
    ],
  },
  {
    title: 'Detecting duplicates and changes',
    paragraphs: [
      'The workflow combines source identifiers, canonicalized URLs, normalized job attributes, and content hashes to identify possible duplicates and changed listings.',
      'Within-source duplicate removal has been demonstrated. Cross-source matching and repeat-run duplicate prevention still require further runtime validation.',
    ],
  },
  {
    title: 'Validating AI responses',
    paragraphs: [
      'AI-generated structured output can fail validation, even when the underlying task is straightforward. The workflow checks response structure and job identity, then retries invalid scoring results within defined limits.',
      'During a verified execution, one scoring response failed validation and succeeded on its second attempt.',
    ],
  },
  {
    title: 'Controlling database writes',
    paragraphs: [
      'A dry-run setting prevents Notion create and update operations during testing. Additional sampling and write limits are available in test mode; these limits do not apply universally to production-mode executions.',
      'The update payload deliberately excludes the manually maintained application status. The update path is implemented, although successful updates have not yet been independently demonstrated in retained execution records.',
    ],
  },
];

export function JobFinder() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'AI Job Finder — Technical Case Study | Levin Kooss';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main id="job-finder-content" className="job-finder mx-auto w-full max-w-[1184px] px-5 pb-12 pt-32 sm:px-8 sm:pt-40 lg:pt-44">
      <header>
        <Link to="/#projects" className="mb-12 inline-flex min-h-11 items-center gap-2 text-sm text-sub transition-colors hover:text-white">
          <ArrowLeft size={16} aria-hidden="true" />Back to Selected Work
        </Link>
        <p className="mb-5 font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-blue-400">Automation &amp; Software Integration</p>
        <h1 className="text-5xl font-bold leading-[1.08] tracking-tighter sm:text-7xl lg:text-8xl">AI Job Finder</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">An AI-assisted job search workflow built with n8n, REST APIs, OpenAI, and Notion.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <p className="case-prose max-w-2xl text-base sm:text-lg">A personal automation project that brings job listings from multiple sources into one workflow, filters unsuitable opportunities, evaluates relevance with AI, and organizes the results for manual review.</p>
          <dl className="space-y-4 border-l border-white/10 pl-6 text-sm">
            {[
              ['Project', 'Personal Automation & Integration'],
              ['Stack', 'n8n, REST APIs, OpenAI API, Notion, Docker'],
              ['Development approach', 'AI-assisted implementation with Codex'],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="mb-1 text-xs text-sub">{label}</dt>
                <dd className="leading-relaxed text-white/90">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <dl className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            ['3', 'Job APIs Integrated'],
            ['53', 'AI Evaluations Validated'],
            ['6', 'Distinct Notion Records Created'],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-card px-6 py-5 sm:flex-col sm:items-start sm:gap-3 sm:p-6">
              <dt className="order-2 text-sm leading-relaxed text-sub">{label}</dt>
              <dd className="order-1 min-w-12 text-4xl font-semibold tracking-tight text-blue-400">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-sub">Verified during a manually triggered execution on October 13, 2026. The latest saved workflow revision has not yet been revalidated.</p>
      </header>

      <CaseStudySection number="01" id="problem" title="The Problem">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.65fr] lg:gap-16">
          <p className="max-w-sm text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">One search, scattered across multiple platforms.</p>
          <div className="case-prose max-w-2xl">
            <p>Searching across multiple job platforms meant repeatedly checking the same sources, comparing listings, filtering unsuitable positions, and tracking interesting opportunities manually.</p>
            <p>The information was scattered across different platforms, and each provider structured its job data differently.</p>
            <p>I wanted to reduce that repetitive work without giving up control over which opportunities were worth pursuing.</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="02" id="solution" title="The Solution">
        <div className="case-prose max-w-3xl">
          <p>I built a workflow in n8n that connects three job APIs to a shared processing pipeline.</p>
          <p>It collects and normalizes listings, applies eligibility filters, checks for duplicate records, and uses OpenAI to evaluate potential matches against my job-search criteria.</p>
          <p>Selected opportunities are saved to Notion, where I can review them and manage application progress myself.</p>
        </div>
        <p className="mt-6 max-w-3xl border-l-2 border-blue-400/50 pl-5 text-sm leading-relaxed text-blue-100/90">The workflow supports job discovery and evaluation. It does not submit applications or make final career decisions.</p>
        <figure className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-card">
          <div className="workflow-preview bg-[#151515]">
            <img src={workflowPreview} width={1799} height={744} loading="lazy" alt="Collapsed n8n workflow groups: fetch job listings, clean results, check Notion history, score relevance, and save to Notion." />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-white/10 px-5 py-4 sm:px-7">
            <p className="max-w-2xl text-xs leading-relaxed text-sub">The workflow in n8n, shown with collapsed groups. The responsive diagram below explains the main stages.</p>
            <OriginalImageLink src={workflowPreview}>Open workflow preview</OriginalImageLink>
          </figcaption>
        </figure>
      </CaseStudySection>

      <CaseStudySection number="03" id="architecture" title="System Architecture">
        <p className="case-prose mb-6 max-w-3xl">The workflow consists of five main stages.</p>
        <JobFinderArchitecture />
        <details className="technical-details mt-5 rounded-2xl border border-white/10 bg-card">
          <summary className="min-h-16 cursor-pointer px-5 py-5 text-sm font-medium sm:px-7">
            <span className="ml-2">Technical details · Full n8n workflow</span>
            <ChevronDown className="details-chevron float-right mt-0.5 text-sub transition-transform motion-reduce:transition-none" size={16} aria-hidden="true" />
          </summary>
          <div className="border-t border-white/10 p-5 sm:p-7">
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-sub">The workflow contains 62 nodes and is currently inactive. Its latest saved revision is from October 15, 2026, and has not been revalidated end to end. This editor capture provides implementation context; it is not evidence of a successful execution of that revision.</p>
            <figure>
              <img src={workflow} width={1621} height={851} loading="lazy" alt="Expanded n8n editor showing source-specific fetching, data cleaning, Notion history checks, AI scoring and retry branches, and create/update logic." className="block h-auto max-h-[560px] w-full rounded-xl border border-white/10 object-contain" />
              <figcaption className="mt-3 text-xs leading-relaxed text-sub">The full workflow is dense. Open the original to inspect individual nodes and branches.</figcaption>
            </figure>
            <OriginalImageLink src={workflow}>Open original full workflow</OriginalImageLink>
          </div>
        </details>
      </CaseStudySection>

      <CaseStudySection number="04" id="engineering" title="Engineering Decisions">
        <div className="grid gap-4 md:grid-cols-2">
          {engineeringDecisions.map(({ title, paragraphs }, index) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-card p-6 sm:p-7 md:last:col-span-2">
              <p className="mb-4 font-mono text-xs text-blue-400" aria-hidden="true">{String.fromCharCode(65 + index)}</p>
              <h3 className="mb-4 max-w-2xl text-lg font-semibold leading-snug">{title}</h3>
              <div className="case-prose max-w-4xl text-sm">
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection number="05" id="validation" title="Results & Validation">
        <p className="case-prose mb-6 max-w-3xl">A manually triggered execution on October 13, 2026, processed live data from all three sources.</p>
        <ExecutionResults />
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="case-prose text-sm">
            <p>53 eligible listings received valid AI evaluations. One invalid AI response was successfully recovered through retry.</p>
            <p>The six selected jobs included two classified as relevant and four classified as uncertain.</p>
          </div>
          <p className="case-prose text-sm">The six created records had distinct page IDs, listing URLs, and stored match keys, with no overlap against the four existing records returned by that execution&apos;s Notion lookup.</p>
        </div>

        <aside aria-labelledby="validation-limitation" className="my-8 rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-6">
          <h3 id="validation-limitation" className="mb-2 text-sm font-semibold text-blue-200">Important limitation</h3>
          <p className="max-w-4xl text-sm leading-relaxed text-sub">These results demonstrate a successful end-to-end execution. They do not establish long-term reliability, scoring accuracy, or guaranteed duplicate prevention across repeated runs. AI scoring accuracy has not been independently benchmarked.</p>
        </aside>

        <div className="grid gap-5 md:grid-cols-2">
          <figure className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-card">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-4">
              <h3 className="text-sm font-semibold">n8n execution</h3>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400"><CheckCircle2 size={14} aria-hidden="true" />Succeeded · October 13</span>
            </div>
            <img src={executionSuccess} width={1548} height={800} loading="lazy" alt="n8n execution ID 19 from October 13 at 19:38:01, with Succeeded status and green completed workflow groups." className="block h-auto w-full" />
            <figcaption className="flex flex-1 flex-col border-t border-white/10 p-5">
              <p className="mb-3 text-sm leading-relaxed text-sub">Retained execution #19, manually triggered on October 13, 2026. The original capture shows the success status, timestamp, and completed processing groups.</p>
              <div className="mt-auto"><OriginalImageLink src={executionSuccess}>Open execution evidence</OriginalImageLink></div>
            </figcaption>
          </figure>
          <figure className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-card">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-4">
              <h3 className="text-sm font-semibold">Notion records</h3>
              <span className="text-xs text-sub">Database view</span>
            </div>
            <div className="flex flex-1 items-center bg-[#191919]">
              <img src={notionResults} width={1907} height={609} loading="lazy" alt="Notion job tracker showing job titles, AI decisions, explanations, application statuses, listing URLs, and first-seen dates. Records from October 13 and October 10 are both visible." className="block h-auto w-full" />
            </div>
            <figcaption className="flex flex-1 flex-col border-t border-white/10 p-5">
              <p className="mb-3 text-sm leading-relaxed text-sub">Stored opportunities ready for manual review. This view includes six records first seen on October 13 and four earlier records; not every visible row was created in the verified run.</p>
              <div className="mt-auto"><OriginalImageLink src={notionResults}>Open Notion evidence</OriginalImageLink></div>
            </figcaption>
          </figure>
        </div>
      </CaseStudySection>

      <CaseStudySection number="06" id="learnings" title="Development Process & Learnings">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <div className="case-prose max-w-3xl">
            <p>I developed this project through an AI-assisted workflow using OpenAI Codex for implementation and n8n as the integration platform.</p>
            <p>My role centered on defining the problem, shaping the requirements, directing development, and reviewing workflow behavior and results.</p>
            <p>The project gave me practical exposure to API integration, data normalization, structured AI responses, workflow testing, and controlled database operations.</p>
          </div>
          <div className="h-fit rounded-2xl border border-white/10 bg-card p-6 sm:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-blue-400">Key learning</p>
            <p className="text-lg leading-relaxed text-white/90">Connecting services is only part of the challenge. Handling inconsistent data, invalid outputs, and unintended writes is equally important.</p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="07" id="next-steps" title="Next Steps">
        <p className="case-prose max-w-3xl">The workflow has demonstrated its core functionality in manual tests, but several areas remain open for improvement.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {['Validate repeat-run duplicate handling', 'Test Notion update behavior', 'Improve monitoring', 'Evaluate reliability across repeated executions'].map((step) => (
            <li key={step} className="flex items-start gap-3 rounded-xl border border-white/10 bg-card px-5 py-4 text-sm leading-relaxed text-sub"><span className="text-blue-400" aria-hidden="true">→</span>{step}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sub">The latest saved revision also requires a new end-to-end validation before it can be described as fully tested.</p>
      </CaseStudySection>

      <div className="mt-16 border-t border-white/10 pt-8 sm:mt-24">
        <Link to="/#projects" className="inline-flex min-h-12 items-center gap-3 text-sm font-medium text-white transition-colors hover:text-blue-400">
          <ArrowLeft size={18} aria-hidden="true" />Back to Selected Work
        </Link>
      </div>
    </main>
  );
}
