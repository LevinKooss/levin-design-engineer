import type { ReactNode } from 'react';
import { PageTitle } from '../design/PageTitle';

export const LegalPage = ({ title, children }: { title: string; children: ReactNode }) => (
  <main lang="de" className="mx-auto w-full max-w-[900px] px-4 pt-36 md:pt-44">
    <PageTitle title={title} />
    <header className="mb-10">
      <p className="mb-4 font-mono text-xs text-sub">Rechtliche Informationen</p>
      <h1 className="break-words text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
    </header>
    <article className="legal-copy space-y-8 rounded-3xl border border-white/10 bg-card p-6 text-sm leading-relaxed text-sub sm:p-8 md:p-10 md:text-base">
      {children}
    </article>
  </main>
);

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-lg font-semibold tracking-tight text-white md:text-xl">{title}</h2>
    {children}
  </section>
);

export const ControllerDetails = () => (
  <address className="not-italic">
    Levin Kooss<br />
    Bürgerstraße 10<br />
    31275 Lehrte<br />
    Deutschland<br />
    <span className="mt-3 block">E-Mail: <a href="mailto:levinkooss.work@gmail.com">levinkooss.work@gmail.com</a></span>
  </address>
);
