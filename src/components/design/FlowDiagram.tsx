type FlowDiagramProps = {
  src: string;
  alt: string;
  summary: string;
  width: number;
  height: number;
};

export const FlowDiagram = ({ src, alt, summary, width, height }: FlowDiagramProps) => (
  <figure>
    <a href={src} target="_blank" rel="noreferrer" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400" aria-label={`Open ${alt} at full size in a new tab`}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className="w-full h-auto rounded-xl" />
    </a>
    <figcaption className="mt-4 text-sm leading-relaxed text-sub">
      <p>{summary}</p>
      <a href={src} target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-sm text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
        Open full-size diagram <span className="text-sub">(new tab)</span>
      </a>
    </figcaption>
  </figure>
);
