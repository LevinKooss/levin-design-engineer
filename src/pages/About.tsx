import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

// Icons Import
import HandshakeIcon from '../assets/icons/handshake.svg';
import CodeIcon from '../assets/icons/codeIcon.svg';
import SportsIcon from '../assets/icons/sports.svg';
import JapanIcon from '../assets/icons/japan.svg';
import EarthIcon from '../assets/icons/earth.svg';

// Reveal Component (Langsam: 1.0s)
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

export const About = () => {
  return (
    <section className="relative min-h-screen pt-48 pb-24 px-4 flex justify-center">
      
      <div 
        className="
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[642px] h-[541px]    
          bg-[magenta]/30      
          rounded-full       
          blur-[400px]     
          pointer-events-none
        "
      ></div>

      {/* GRID CONTAINER */}
      <RevealOnScroll>
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">

          {/* --- TILE 1: INTRO --- */}
          <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:border-white/20 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <img src={CodeIcon} alt="Code" className="w-24 h-24 object-contain" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider">
                  About Me
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-sans text-white mb-6 leading-tight">
                Design Engineer with a <br/>
                <span className="text-[#525252]">creative past.</span>
              </h1>
              <p className="text-[#A1A1AA] text-lg font-sans leading-relaxed max-w-lg">
                I shape digital products. Currently based in New Zealand, combining German structure with the adaptability I learned while traveling the world.
              </p>
            </div>
          </div>

          {/* --- TILE 2: PHOTO --- */}
          <div className="md:row-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-all duration-300 h-[400px] md:h-auto">
            <img 
              src="/levin.jpg" 
              alt="Levin" 
              className="
                absolute inset-0 w-full h-full object-cover
                object-[center_15%]
                transition-all duration-700 
                grayscale-0 opacity-100
                md:grayscale md:opacity-80 
                md:group-hover:grayscale-0 md:group-hover:opacity-100
              "
            />
            <div className="absolute bottom-0 left-0 w-full p-8 pt-32 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent">
              <p className="text-white font-mono text-xs uppercase tracking-widest mb-1">Explorer</p>
              <p className="text-[#A1A1AA] font-mono text-xs">Understanding people {'>'} pixels.</p>
            </div>
          </div>

          {/* --- TILE 3: JAPAN --- */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-80 group-hover:scale-110 transition-transform duration-500">
                <img src={JapanIcon} alt="Japan" className="w-16 h-16 object-contain" />
              </div>
              <div className="relative z-10 mt-8">
                <span className="text-[#BC002D] font-mono text-xs uppercase tracking-wider mb-2 block">Influence</span>
                <h3 className="text-white font-bold font-sans text-xl mb-2">Tokyo Core</h3>
                <p className="text-[#A1A1AA] text-xs font-sans leading-relaxed">
                  2.5 years in Japan taught me that context is everything.
                </p>
              </div>
          </div>

          {/* --- TILE 4: STATS --- */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col justify-center gap-1 group hover:border-white/20 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
              <img src={EarthIcon} alt="World" className="w-16 h-16 object-contain" />
            </div>
            <span className="text-5xl font-bold font-sans text-white group-hover:text-blue-400 transition-colors relative z-10">40+</span>
            <span className="text-[#525252] text-xs uppercase tracking-wider font-mono relative z-10">Countries Visited</span>
            <p className="text-[#A1A1AA] text-xs font-sans mt-3 leading-relaxed relative z-10">
                Adaptability is my biggest skill. I fit into any team, anywhere.
            </p>
          </div>

          {/* --- TILE 5: DISCIPLINE --- */}
          <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity hidden md:block">
              <img src={SportsIcon} alt="Gym" className="w-32 h-32 object-contain" />
            </div>
            <div className="relative z-10 max-w-xl">
                <div className="flex items-center gap-2 mb-4 text-[#525252]">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-xs font-mono uppercase tracking-wider">Mindset</span>
                </div>
                <blockquote className="text-xl md:text-2xl font-medium font-sans text-white leading-relaxed">
                  "Discipline gives me freedom; consistency makes space for inspiration."
                </blockquote>
            </div>
          </div>

          {/* --- TILE 6: CONNECT --- */}
          <a 
            href="mailto:levinjpn@gmail.com" 
            className="
              group bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 
              flex flex-col justify-between 
              hover:bg-[#111] hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden
            "
          >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="opacity-50 group-hover:opacity-100 transition-opacity mb-4">
                <img src={HandshakeIcon} alt="Connect" className="w-16 h-16 object-contain invert" />
              </div>
              <div className="absolute top-6 right-6">
                <ArrowUpRight className="text-[#525252] group-hover:text-white transition-colors" size={24}/>
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-white font-bold font-sans text-lg mb-1">Let's work</h3>
                <p className="text-[#A1A1AA] font-mono text-xs">
                  Open for projects.
                </p>
              </div>
          </a>

        </div>
      </RevealOnScroll>
    </section>
  );
};