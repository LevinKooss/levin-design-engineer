import { useState, useEffect, useRef } from 'react';
import { Home, User, MessageSquare, PenTool } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // useLocation für Active States

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation(); // Um zu wissen, auf welcher Seite wir sind
  const isHome = location.pathname === '/';
  const isDesign = ['/design', '/fithub', '/lexi', '/lumi'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* =======================
          DESKTOP NAVBAR
          ======================= */}
      <nav aria-label="Main navigation" className="desktop-nav hidden lg:flex fixed inset-x-0 top-0 z-50 justify-center py-6 px-6">
        
        <div 
          data-scrolled={isScrolled}
          className={`
            desktop-nav-surface grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6
            w-full 
            ${isScrolled 
              ? "max-w-[720px] py-2 px-4 rounded-full"
              : "max-w-[1280px] py-4 px-0"
            }
          `}
        >

          {/* LOGO */}
          <Link to="/" className={`flex min-w-0 flex-col justify-self-start transition-all duration-500 cursor-pointer group ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-white/80 transition-colors">Levin</span>
              <span 
                className={`
                  text-xs text-sub -mt-1 font-mono whitespace-nowrap transition-all duration-300 origin-top
                  ${isScrolled ? 'opacity-0 h-0 max-w-0 overflow-hidden scale-y-0' : 'opacity-100 h-auto max-w-[360px] scale-y-100'}
                `}
              >
                {isDesign ? 'UX/UI & Product Design' : 'Software Development & Integration'}
              </span>
          </Link>

          <div className="flex items-center gap-2">
              {/* BUTTON 1: OVERVIEW (HOME) */}
              <Link 
                to="/" 
                aria-label="Software Development & Integration"
                aria-current={isActive('/') ? 'page' : undefined}
                className={`
                  inline-flex min-h-11 items-center text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300
                  ${isActive('/') 
                    ? "text-white bg-white/10 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                    : "text-sub hover:text-white"
                  }
                `}
              >
                Development
              </Link>

              <Link to="/design" aria-label="UX/UI & Product Design" aria-current={isActive('/design') ? 'page' : undefined} className={`inline-flex min-h-11 items-center rounded-full px-4 py-1.5 text-sm transition-colors ${isDesign ? 'border border-white/5 bg-white/10 font-medium text-white' : 'text-sub hover:text-white'}`}>
                Design
              </Link>

              {/* BUTTON 2: ABOUT (PAGE) */}
              <Link 
                to="/about" 
                className={`
                  inline-flex min-h-11 items-center text-sm px-4 py-1.5 rounded-full transition-all duration-300
                  ${isActive('/about') 
                    ? "text-white bg-white/10 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)] font-medium" 
                    : "text-sub hover:text-white"
                  }
                `}
              >
                About
              </Link>
          </div>

          <a 
              href="mailto:levinjpn@gmail.com" 
              className={`
                ${isHome ? 'cta-halo' : ''}
                inline-flex min-h-11 items-center justify-self-end text-white text-sm font-semibold transition-all duration-400 rounded-[8px] whitespace-nowrap
                ${isScrolled 
                  ? `px-3 py-1.5 bg-transparent ${isHome ? '' : 'hover:text-blue-400'}`
                  : `px-4 py-2 bg-[#3B82F6]/10 ${isHome ? '' : 'hover:bg-[#3B82F6]/15 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] motion-safe:hover:-translate-y-0.5'}`
                }
              `}
          >
              Let's talk
          </a>
        </div>
      </nav>


      {/* =======================
          MOBILE HEADER
      ======================= */}
      <div 
        className={`
          mobile-header lg:hidden fixed top-6 left-4 right-4 sm:left-6 sm:right-auto z-50
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'}
        `}
      >
        <Link to="/" className="inline-flex max-w-full flex-col items-start px-4 py-2 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-white/5">
            <span className="text-white font-bold text-lg tracking-tight">Levin</span>
            <span className="text-[10px] sm:text-xs leading-relaxed text-sub font-mono">{isDesign ? 'UX/UI & Product Design' : 'Software Development & Integration'}</span>
        </Link>
      </div>

      {/* =======================
          MOBILE / TABLET DOCK
      ======================= */}
      <nav 
        aria-label="Mobile navigation"
        className={`
          mobile-nav lg:hidden fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}
        `}
      >
        <div className="
          flex items-center gap-3 px-4 py-3
          bg-neutral-900/50 backdrop-blur-2xl 
          border border-white/10 
          rounded-full 
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
        ">

          {/* MOBILE HOME LINK */}
          <Link to="/" aria-label="Software Development & Integration" aria-current={isActive('/') ? 'page' : undefined} className="relative group flex h-12 w-12 flex-col items-center justify-center gap-1">
            {isActive('/') && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 blur-xl rounded-full opacity-100 transition-all duration-500" />
            )}
            
            <Home className={`w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 ${isActive('/') ? 'text-white' : 'text-sub'}`} />

            <span className="text-[10px] leading-none text-sub">Dev</span>
          </Link>

          <Link to="/design" aria-label="UX/UI & Product Design" aria-current={isActive('/design') ? 'page' : undefined} className={`flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-xl ${isDesign ? 'bg-white/10 text-white' : 'text-sub hover:text-white'}`}>
            <PenTool className="h-6 w-6" aria-hidden="true" />
            <span className="text-[10px] leading-none">Design</span>
          </Link>

          {/* MOBILE ABOUT LINK */}
          <Link to="/about" aria-label="About" aria-current={isActive('/about') ? 'page' : undefined} className="flex h-12 w-12 flex-col items-center justify-center gap-1 group relative">
             {isActive('/about') && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 blur-xl rounded-full opacity-100 transition-all duration-500" />
            )}

            <User className={`w-6 h-6 relative z-10 transition-all duration-300 group-hover:-translate-y-1 ${isActive('/about') ? 'text-white' : 'text-sub'}`} />

            <span className="text-[10px] leading-none text-sub">About</span>
          </Link>

          <div className="w-[1px] h-8 bg-white/10"></div>

          <a 
            href="mailto:levinjpn@gmail.com" 
            aria-label="Contact Levin by email"
            className="
              flex items-center justify-center w-12 h-12 rounded-full 
              bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20
              hover:bg-[#3B82F6]/15 hover:text-blue-300 hover:border-[#3B82F6]/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] motion-safe:hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <MessageSquare className="w-5 h-5" />
          </a>

        </div>
      </nav>
    </>
  );
}
