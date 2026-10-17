import { FeaturedProjectCard } from './cards/FeaturedProjectCard';
import workflowImage from '../assets/projects/ai-job-finder/workflow-preview.png';

export const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative z-10 w-full scroll-mt-32 flex flex-col items-center px-4 pt-10 md:pt-16 lg:pt-24 pb-16 md:pb-20 bg-[radial-gradient(ellipse_at_50%_40%,rgba(59,130,246,0.035),transparent_70%)]">
      <div className="w-full max-w-[1280px]">
        <h2 id="projects-heading" className="text-center text-[#A1A1AA]/60 font-mono text-xs tracking-[0.2em] uppercase mb-8">
          Selected Work
        </h2>
        {/* A single card spans both columns; a second card will share the row. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeaturedProjectCard
            title="AI Job Finder"
            category="Automation & Integration"
            description="A personal job search automation that collects listings from three APIs, filters duplicates, evaluates relevance with AI, and organizes results in Notion."
            technologies={['n8n', 'REST APIs', 'OpenAI', 'Notion', 'Docker']}
            image={workflowImage}
            imageWidth={1799}
            imageHeight={744}
            imagePresentation="workflow"
            imageAlt="AI Job Finder n8n workflow showing connected steps for collecting, filtering, evaluating, and organizing job listings."
            detailPath="/job-finder"
          />
        </div>
      </div>
    </section>
  );
};
