import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash, key, state } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const frame = requestAnimationFrame(() => {
          // Only explicit CTA clicks animate; history and route navigation stay instant.
          const smooth = hash === '#projects'
            && state?.scrollToProjects === true
            && navigationType !== 'POP'
            && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' });
        });
        return () => cancelAnimationFrame(frame);
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, key, state, navigationType]);

  return null;
};
