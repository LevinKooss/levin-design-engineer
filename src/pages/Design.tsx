import { ArrowDown, Layers, MousePointer2, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FitHubCard } from '../components/cards/FitHubCard';
import { LexiCard } from '../components/cards/LexiCard';
import { LumiCard } from '../components/cards/LumiCard';
import { PageTitle } from '../components/design/PageTitle';
import { RevealOnScroll } from '../components/design/RevealOnScroll';

const approach = [
  { title: 'Problem Framing', description: 'Exploring product challenges, user needs, and design assumptions.', icon: PenTool },
  { title: 'Interaction & Structure', description: 'Mapping user flows, organizing information, and developing wireframes.', icon: Layers },
  { title: 'Interface & Prototyping', description: 'Creating visual interfaces and interactive concepts to communicate product ideas.', icon: MousePointer2 },
];

export const Design = () => (
  <main className="design-portfolio mx-auto w-full max-w-[1280px] px-4 pb-16 pt-40 sm:px-6 md:px-8 lg:pt-48">
    <PageTitle title="UX/UI & Product Design" />
    <RevealOnScroll>
      <section aria-labelledby="design-heading" className="mb-24 max-w-4xl md:mb-32">
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-blue-400">UX/UI &amp; PRODUCT DESIGN</p>
        <h1 id="design-heading" className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">Designing thoughtful digital experiences.</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-sub md:text-xl">
          I design user interfaces and explore product ideas through interaction design, wireframing, and prototyping. With a background in UX design and a growing foundation in software development, I approach digital products from both a visual and technical perspective.
        </p>
        <Link to="/design#projects" state={{ scrollToProjects: true }} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
          See Work <ArrowDown size={18} aria-hidden="true" />
        </Link>
      </section>
    </RevealOnScroll>

    <section id="projects" aria-labelledby="design-projects-heading" className="scroll-mt-32">
      <RevealOnScroll>
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sub">Selected Design Work</p>
          <h2 id="design-projects-heading" className="mb-4 text-3xl font-bold md:text-4xl">Three ideas, explored through design.</h2>
          <p className="text-base leading-relaxed text-sub">Independent UX/UI concept projects. I created all user flows, wireframes, interface designs, and prototypes manually in Figma. AI supported exploratory research and hypothetical user scenarios. No real user interviews or usability tests were conducted.</p>
        </div>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="md:col-span-2"><RevealOnScroll><FitHubCard /></RevealOnScroll></div>
        <RevealOnScroll delay={100}><LexiCard /></RevealOnScroll>
        <RevealOnScroll delay={200}><LumiCard /></RevealOnScroll>
      </div>
    </section>

    <section aria-labelledby="design-approach-heading" className="mt-24 border-t border-white/10 pt-16 md:mt-32">
      <RevealOnScroll>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sub">Design Approach</p>
        <h2 id="design-approach-heading" className="mb-8 text-3xl font-bold md:text-4xl">From a question to an interface.</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {approach.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-card p-6 md:p-8">
              <Icon className="mb-6 text-blue-400" size={24} aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-base leading-relaxed text-sub">{description}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  </main>
);
