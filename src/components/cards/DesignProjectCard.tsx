import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type DesignProjectCardProps = {
  title: string;
  path: string;
  description: string;
  labels: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  background?: string;
  accent: 'fit' | 'lexi' | 'lumi';
};

const accents = { fit: 'bg-fit/10', lexi: 'bg-lexi/10', lumi: 'bg-lumi/10' };

export const DesignProjectCard = ({ title, path, description, labels, image, imageAlt, imageWidth, imageHeight, background, accent }: DesignProjectCardProps) => (
  <Link to={path} aria-label={`View ${title} concept case study`} className="group block h-full min-w-0 rounded-[32px] border border-white/10 bg-card transition-all duration-500 hover:border-white/25 hover:shadow-[0_20px_80px_-20px_rgba(59,130,246,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
    <article className="flex h-full flex-col overflow-hidden rounded-[31px]">
      <div className={`relative flex h-[320px] items-center justify-center overflow-hidden border-b border-white/5 p-8 sm:h-[360px] ${accents[accent]}`}>
        {background && <img src={background} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-20 blur-[10px]" />}
        <span className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-card/90 px-3 py-1.5 font-mono text-xs text-zinc-200">CONCEPT PROJECT</span>
        <img src={image} alt={imageAlt} width={imageWidth} height={imageHeight} loading="lazy" decoding="async" className={`relative h-full w-full object-contain drop-shadow-2xl transition-transform duration-700 motion-safe:group-hover:scale-[1.03] ${accent === 'fit' ? 'max-w-[740px] pt-6' : 'max-w-[240px]'}`} />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
          <ArrowUpRight size={20} className="shrink-0 text-sub transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
        <p className="mb-6 max-w-3xl text-base leading-relaxed text-sub">{description}</p>
        <ul aria-label="Design disciplines" className="mt-auto flex flex-wrap gap-2">
          {labels.map(label => <li key={label} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-zinc-300">{label}</li>)}
        </ul>
      </div>
    </article>
  </Link>
);
