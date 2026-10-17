import type { ReactNode } from 'react';

export const ConceptContext = ({ children }: { children?: ReactNode }) => (
  <aside aria-label="Project context" className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
    <p className="mb-2 text-sm font-semibold text-white">Independent UX/UI concept project</p>
    <p className="text-sm leading-relaxed text-sub">
      I created all user flows, wireframes, interface designs, and prototypes manually in Figma.
      AI supported exploratory research and the development of hypothetical user scenarios.
      No real user interviews or usability tests were conducted.
    </p>
    {children && <p className="mt-3 text-sm leading-relaxed text-sub">{children}</p>}
  </aside>
);
