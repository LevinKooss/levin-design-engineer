import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type FeaturedProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePresentation?: 'default' | 'workflow';
  detailPath?: string;
};

export const FeaturedProjectCard = ({
  title,
  category,
  description,
  technologies,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imagePresentation = 'default',
  detailPath,
}: FeaturedProjectCardProps) => (
  <article className="group relative min-w-0 w-full lg:only:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_80px_-20px_rgba(59,130,246,0.15)]">
    <div className={`bg-[#151515] ${imagePresentation === 'workflow' ? 'workflow-preview' : ''}`}>
      <img
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        className="block w-full h-auto"
      />
    </div>

    <div className="relative border-t border-white/5 p-6 md:p-8 lg:p-10">
      <p className="font-mono text-xs leading-relaxed uppercase tracking-wider text-blue-400 mb-3">
        {category}
      </p>
      <h3 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-white mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-sub leading-relaxed max-w-3xl mb-6">
        {description}
      </p>
      <ul aria-label="Project technologies" className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li key={technology} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-sub">
            {technology}
          </li>
        ))}
      </ul>
      {detailPath && (
        <Link to={detailPath} aria-label={`Read the ${title} case study`} className="inline-flex min-h-11 items-center gap-2 mt-6 rounded-sm text-sm text-white hover:text-blue-400 transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
          Read case study <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  </article>
);
