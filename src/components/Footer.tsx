import React, { useState, useEffect, useRef } from 'react';

// Reveal Component
const RevealOnScroll = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('levinjpn@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative w-full text-white pt-24 pb-8 px-4 flex justify-center mt-24">
      
      <div className="w-full max-w-[1280px]">
        
        <RevealOnScroll>
          {/* --- MAIN CONTENT --- */}
          <div className="mb-24">
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-left">
              Ready to build?
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              
              {/* LEFT: Email Button */}
              <button 
                onClick={handleCopy}
                className="group flex items-center gap-3 text-[#A1A1AA] hover:text-white transition-colors text-lg"
              >
                <span>levinjpn@gmail.com</span>
                
                <div className="relative">
                  {copied ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg className="opacity-50 group-hover:opacity-100 transition-opacity" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </div>
              </button>

              {/* RIGHT: Social Links */}
              <div className="flex flex-col gap-4 items-start md:items-end">
                 <FooterLink href="https://github.com/LevinKooss" label="GitHub" />
                 <FooterLink href="https://www.linkedin.com/in/levin-kooss/" label="LinkedIn" />
                 <FooterLink href="/resume.pdf" label="Resume" />
              </div>

            </div>
          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#525252]">
            <span>© 2025 Levin Kooss</span>
            <div className="flex gap-4">
               <span className="hover:text-[#A1A1AA] cursor-pointer transition-colors">Legal Notice</span>
               <span className="hover:text-[#A1A1AA] cursor-pointer transition-colors">Privacy</span>
            </div>
            <span className="text-right">Built with React, Vite</span>
          </div>
        </RevealOnScroll>

      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="group flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors text-base"
  >
    {label}
    <svg 
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </a>
);