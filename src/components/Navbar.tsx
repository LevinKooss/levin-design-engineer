import { useState, useEffect, useRef } from 'react';
import { Home, User, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // useLocation für Active States

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation(); // Um zu wissen, auf welcher Seite wir sind

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
      <nav className="hidden lg:flex fixed top-0 w-full z-50 justify-center py-6 px-6 transition-all duration-500 ease-in-out">
        
        <div 
          className={`
            flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            w-full 
            ${isScrolled 
              ? "max-w-[600px] py-2 px-4 bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full" 
              : "max-w-[1280px] py-4 px-0 bg-transparent border-transparent"
            }
          `}
        >

          {/* LOGO */}
          <Link to="/" className={`flex flex-col transition-all duration-500 cursor-pointer group ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-white/80 transition-colors">Levin</span>
              <span 
                className={`
                  text-xs text-sub -mt-1 font-mono transition-all duration-300 origin-top
                  ${isScrolled ? 'opacity-0 h-0 overflow-hidden scale-y-0' : 'opacity-100 h-auto scale-y-100'}
                `}
              >
                Design Engineer
              </span>
          </Link>

          <div className="flex items-center gap-2">
              {/* BUTTON 1: OVERVIEW (HOME) */}
              <Link 
                to="/" 
                className={`
                  text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300
                  ${isActive('/') 
                    ? "text-white bg-white/10 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                    : "text-sub hover:text-white"
                  }
                `}
              >
                Overview
              </Link>

              {/* BUTTON 2: ABOUT (PAGE) */}
              <Link 
                to="/about" 
                className={`
                  text-sm px-4 py-1.5 rounded-full transition-all duration-300
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
                text-white text-sm font-semibold transition-all duration-400 rounded-[8px] whitespace-nowrap
                ${isScrolled 
                  ? "px-3 py-1.5 bg-transparent hover:text-blue-400" 
                  : "px-4 py-2 bg-[#3B82F6]/10 shadow-[0_4px_16px_rgba(59,130,246,0.25)] hover:bg-[#3B82F6]/20"
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
          lg:hidden fixed top-6 left-6 z-50
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'}
        `}
      >
        <Link to="/" className="flex flex-col items-start px-4 py-2 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-white/5">
            <span className="text-white font-bold text-lg tracking-tight">Levin</span>
            <span className="text-xs text-sub -mt-1 font-mono">Design Engineer</span>
        </Link>
      </div>

      {/* =======================
          MOBILE / TABLET DOCK
      ======================= */}
      <nav 
        className={`
          lg:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-50
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}
        `}
      >
        <div className="
          flex items-center gap-10 px-12 py-3
          bg-neutral-900/50 backdrop-blur-2xl 
          border border-white/10 
          rounded-full 
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
        ">

          {/* MOBILE HOME LINK */}
          <Link to="/" className="relative group flex flex-col items-center">
            {isActive('/') && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 blur-xl rounded-full opacity-100 transition-all duration-500" />
            )}
            
            <Home className={`w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 ${isActive('/') ? 'text-white' : 'text-sub'}`} />

            <span className={`absolute -bottom-2 w-1 h-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] ${isActive('/') ? 'bg-white' : 'bg-transparent'}`}></span>
          </Link>

          {/* MOBILE ABOUT LINK */}
          <Link to="/about" className="flex flex-col items-center group relative">
             {isActive('/about') && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 blur-xl rounded-full opacity-100 transition-all duration-500" />
            )}

            <User className={`w-6 h-6 relative z-10 transition-all duration-300 group-hover:-translate-y-1 ${isActive('/about') ? 'text-white' : 'text-sub'}`} />

            <span className={`absolute -bottom-2 w-1 h-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] ${isActive('/about') ? 'bg-white' : 'bg-transparent'}`}></span>
          </Link>

          <div className="w-[1px] h-8 bg-white/10"></div>

          <a 
            href="mailto:levinjpn@gmail.com" 
            className="
              flex items-center justify-center w-12 h-12 rounded-full 
              bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20
              shadow-[0_0_15px_rgba(59,130,246,0.1)]
              hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-110
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