// Icons Import
import ReactIcon from '../../assets/icons/react.svg';
import ViteIcon from '../../assets/icons/vite.svg';
import OpenAIIcon from '../../assets/icons/openai.svg';

export const CaptuneCard = () => {
  return (
    // FIX: w-full h-full für das Grid
    <div className="relative w-full h-full min-h-[500px] group cursor-pointer">

      {/* Surface & Border Container */}
      <div className="
        absolute inset-0 
        bg-[#0A0A0A] 
        border border-white/10 
        rounded-[32px] 
        overflow-hidden 
        transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:border-white/20
        group-hover:shadow-[0_20px_80px_-20px_rgba(139,92,246,0.15)]
      ">

        {/* 1. Background Blur Circle */}
        <div className="
          absolute 
          /* FIX: Wir lassen es auf Desktop auch zentriert (left-1/2) statt fest (left-[78px]) */
          left-1/2 top-[100px] -translate-x-1/2
          lg:top-[37px] 
          
          w-[300px] h-[300px] 
          bg-[#8B5CF6]/15 
          blur-[250px] rounded-full 
          pointer-events-none z-0
          transition-opacity duration-500
          group-hover:opacity-100 opacity-60
        "></div>

        {/* 2. Badge */}
        <div className="
          absolute left-6 top-6 z-30 
          flex items-center gap-[6px] 
          px-3 py-1.5 
          bg-[#0A0A0A]/50 backdrop-blur-md 
          border border-white/10 
          rounded-full
          shadow-lg
        ">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </div>
          <span className="
            font-mono font-bold text-[12px] 
            leading-[12px] tracking-[0.06em] 
            text-[#8B5CF6] uppercase
          ">
            Generative AI
          </span>
        </div>

        {/* --- VISUALS GROUP (Parallax Wrapper) --- */}
        <div className="
          absolute inset-0 z-10
          transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          group-hover:scale-105
        ">

          {/* --- A. TOP SECTION (Circles & Input) --- */}
          <div className="
            absolute 
            /* FIX: Zentriert für Mobile UND Desktop. 
               Feste Pixel (left-[118px]) würden bei schmalen Cards abschneiden. */
            left-1/2 -translate-x-1/2 
            top-[70px] lg:top-[80px]
            
            flex flex-col items-center
          ">
            
            {/* Circles Row */}
            <div className="relative flex items-center gap-6">
              {/* Background Glow Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] bg-[#8B5CF6] rounded-full "></div>

              {/* Left: LinkedIn Blue */}
              <div className="w-8 h-8 rounded-full bg-[#0077B5] border border-white/5 shadow-lg"></div>

              {/* Middle: Instagram Gradient + Icon */}
              <div className="
                relative w-12 h-12 
                rounded-full 
                bg-gradient-to-bl from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] 
                flex items-center justify-center
                shadow-xl z-10
              ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>

              {/* Right: Dark */}
              <div className="w-8 h-8 rounded-full bg-[#333333] border border-white/5 shadow-lg"></div>
            </div>

            {/* Input Field Rect */}
            <div className="
              mt-6 
              w-[220px] h-[36px] 
              bg-[#171717] rounded-[8px] border border-white/10 
              flex items-center px-3 gap-1
            ">
              <span className="font-sans text-[12px] tracking-[0.06em] text-white/50">Topic: Gym Progress</span>
              <span className="w-[1px] h-3 bg-[#8B5CF6] animate-pulse"></span>
            </div>

          </div>

          {/* --- B. SPARKLE ICON --- */}
          <div className="absolute left-0 right-0 top-[210px] lg:top-[217px] flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="url(#sparkle-gradient)"/>
                <defs>
                  <linearGradient id="sparkle-gradient" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B97EFC"/>
                    <stop offset="0.5" stopColor="#984DE9"/>
                    <stop offset="1" stopColor="#2A88BC"/>
                  </linearGradient>
                </defs>
              </svg>
          </div>

          {/* --- C. CHAT BUBBLES GROUP --- */}
          <div className="
            absolute
            /* FIX: Auch hier zentriert bleiben! */
            left-1/2 -translate-x-1/2 
            top-[260px] lg:top-[268px]
          ">
            {/* 1. Main Bubble */}
            <div className="
              relative 
              w-[239px] h-[77px]
              bg-[#171717] rounded-xl border border-white/5
              p-4 flex flex-col justify-center gap-1 shadow-2xl z-40
              border-[#8B5CF6]/50
            ">
                <p className="font-sans text-[14px] leading-[18px] text-[#EDEDED]">
                  Crushing goals today! 💪 <br/>
                  <span className="text-white/40 text-xs">The grind never stops. #fitness</span>
                </p>
            </div>

            {/* 2. Loading Bar 1 */}
            <div className="
              absolute left-[8px] top-[70px]
              w-[220px] h-[40px]
              bg-[#262626] rounded-xl border border-white/5 z-30
            "></div>

            {/* 3. Loading Bar 2 */}
            <div className="
              absolute left-[18px] top-[100px]
              w-[200px] h-[40px]
              bg-[#1F1F1F] rounded-xl border border-white/5
            "></div>
          </div>

        </div>

        {/* --- FOOTER FRAME --- */}
        <div className="
          absolute left-0 bottom-0 
          w-full z-30
          h-[200px] lg:h-[150px]
          bg-gradient-to-b from-[#0A0A0A]/0 to-[#0A0A0A]
        ">
          
          <div className="
            absolute bottom-8 w-full px-8
            flex flex-col gap-6 items-start
            lg:flex-row lg:justify-between lg:items-end lg:gap-0
          ">
            
            {/* Text Group */}
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-[20px] leading-[20px] text-white">
                Captune
              </h3>
              <p className="font-sans text-[14px] leading-[14px] text-[#A1A1AA]">
                Multi-Platform Caption AI
              </p>
            </div>

            {/* Icons Group */}
            <div className="
              flex flex-row gap-4 
              transition-all duration-500 group-hover:opacity-100 opacity-70
            ">
              <img src={OpenAIIcon} alt="OpenAI" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={ReactIcon} alt="React" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={ViteIcon} alt="Vite" className="w-6 h-6 hover:scale-110 transition-transform" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};