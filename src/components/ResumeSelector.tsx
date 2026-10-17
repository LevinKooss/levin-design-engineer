import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const resumeGroups = [
  { specialization: 'software', label: 'Software Development & Integration' },
  { specialization: 'design', label: 'UX/UI & Product Design' },
] as const;

export const ResumeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useLayoutEffect(() => {
    if (!isOpen) return;

    const positionPopover = () => {
      const container = containerRef.current;
      const popover = popoverRef.current;
      if (!container || !popover) return;

      const bounds = container.getBoundingClientRect();
      const gap = 8;
      const inset = 16;
      const above = bounds.top - gap - inset;
      const below = window.innerHeight - bounds.bottom - gap - inset;
      const openAbove = above >= popover.scrollHeight + 2 || above >= below;
      const width = popover.getBoundingClientRect().width;
      const preferredLeft = window.matchMedia('(min-width: 768px)').matches
        ? bounds.right - width
        : bounds.left;
      const left = Math.max(inset, Math.min(preferredLeft, window.innerWidth - width - inset));

      popover.style.left = `${left - bounds.left}px`;
      popover.style.bottom = openAbove ? `calc(100% + ${gap}px)` : 'auto';
      popover.style.top = openAbove ? 'auto' : `calc(100% + ${gap}px)`;
      popover.style.maxHeight = `${Math.max(0, openAbove ? above : below)}px`;
    };

    const handleViewportChange = () => {
      const bounds = containerRef.current?.getBoundingClientRect();
      if (bounds && (bounds.bottom <= 0 || bounds.top >= window.innerHeight)) {
        setIsOpen(false);
        return;
      }
      positionPopover();
    };

    positionPopover();
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('scroll', handleViewportChange, true);
    return () => {
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('scroll', handleViewportChange, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        id={`${id}-trigger`}
        type="button"
        aria-label="Resume specialization and language"
        aria-expanded={isOpen}
        aria-controls={isOpen ? `${id}-resumes` : undefined}
        onClick={() => setIsOpen((open) => !open)}
        className="group flex min-h-11 items-center gap-2 rounded-sm text-base text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
      >
        Resume
        <ChevronDown
          aria-hidden="true"
          className={`h-3 w-3 transition-transform motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          id={`${id}-resumes`}
          role="group"
          aria-labelledby={`${id}-trigger`}
          className="absolute left-0 z-20 w-72 max-w-[calc(100vw-2rem)] overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-neutral-900/90 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl"
        >
          {resumeGroups.map(({ specialization, label }) => (
            <div
              key={specialization}
              role="group"
              aria-labelledby={`${id}-${specialization}`}
              className="py-1 first:pt-0 last:pb-0 [&+div]:mt-1 [&+div]:border-t [&+div]:border-white/10 [&+div]:pt-2"
            >
              <h3
                id={`${id}-${specialization}`}
                className="px-3 py-2 text-xs font-medium leading-relaxed text-[#A1A1AA]"
              >
                {label}
              </h3>
              <ul>
                {([
                  ['de', 'German'],
                  ['en', 'English'],
                ] as const).map(([language, languageLabel]) => (
                  <li key={language}>
                    <a
                      href={`/resumes/${specialization}-${language}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label}, ${languageLabel} resume (PDF, opens in a new tab)`}
                      onClick={closeMenu}
                      onKeyDown={(event) => {
                        if (event.key === ' ') {
                          event.preventDefault();
                          event.currentTarget.click();
                        }
                      }}
                      className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm text-[#A1A1AA] transition-colors hover:bg-white/5 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                    >
                      {languageLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
