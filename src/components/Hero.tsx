import { Link } from 'react-router-dom';

export const Hero = () => {

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 pt-28 pb-16 md:pt-44">
      
      <div 
        className="
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[642px] h-[541px]    
          bg-[#3B82F6]/30      
          rounded-full       
          blur-[400px]     
          pointer-events-none
        "
      ></div>

      <div className="relative z-10 flex w-full flex-col items-center text-center max-w-6xl mx-auto mt-[32px]">

        <p className="text-sub font-mono text-xs tracking-[0.2em] uppercase leading-relaxed mb-6">
          Software Development &amp; Integration
        </p>

        <h1 className="
          text-5xl md:text-7xl lg:text-[clamp(4.5rem,6.7vw,6rem)] font-bold text-center text-balance
          tracking-tighter leading-[1.1] mb-6
          bg-gradient-to-b from-[#FFFFFF] to-[#A1A1AA] 
          bg-clip-text text-transparent
          ">
          Turning real problems into <span className="text-sub">working software.</span>
        </h1>

        <p className="text-sub text-center max-w-[812px] text-lg md:text-xl leading-relaxed mb-8 md:mb-12">
          I build software and automation solutions that connect systems, simplify processes, and solve practical problems. My work combines APIs, AI integration, and a background in UX design.
        </p>
        <Link
          to="/#projects"
          state={{ scrollToProjects: true }}
          className="cta-halo inline-flex min-h-12 items-center justify-center rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-6 py-3 text-sm font-semibold text-white"
        >
          Explore My Work
        </Link>
      </div>

    </section>
  );
};
