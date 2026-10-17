import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const ResumeSelector = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  const isDesign = ['/design', '/fithub', '/lexi', '/lumi'].some(
    (route) => pathname.toLowerCase() === route || pathname.toLowerCase().startsWith(`${route}/`)
  );
  const resume = isDesign ? 'design' : 'software';

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
        aria-label="Resume language"
        aria-expanded={isOpen}
        aria-controls={isOpen ? `${id}-languages` : undefined}
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
        <ul
          id={`${id}-languages`}
          aria-labelledby={`${id}-trigger`}
          className="absolute bottom-full left-0 z-20 mb-2 w-36 rounded-xl border border-white/10 bg-neutral-900/90 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl md:left-auto md:right-0"
        >
          {([
            ['de', 'German'],
            ['en', 'English'],
          ] as const).map(([language, label]) => (
            <li key={language}>
              <a
                href={`/resumes/${resume}-${language}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} resume (PDF, opens in a new tab)`}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm text-[#A1A1AA] transition-colors hover:bg-white/5 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
