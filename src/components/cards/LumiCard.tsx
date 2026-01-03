import { Link } from 'react-router-dom';

import lumiImg from '../../assets/Lumi.png';
import lumiPhone from '../../assets/LumiPhone.png';

export const LumiCard = () => {
  return (
    // Grid-Cell: Nimmt 100% Breite der Zelle, fixe Höhe
    <Link to="/lumi" className="block relative w-full h-[450px] group cursor-pointer">
      <div className="
        absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-[32px] overflow-hidden 
        transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:shadow-[0_20px_80px_-20px_rgba(255,183,178,0.15)]
      ">
        {/* BG Circle */}
        <div className="
          absolute 
          /* FIX: Immer zentriert bleiben. Keine festen left-[56px] Werte mehr. */
          left-1/2 -translate-x-1/2 
          top-[-20px] lg:-top-[48px]
          w-[300px] h-[300px] 
          bg-[#FFB7B2]/20 blur-[200px] rounded-full pointer-events-none z-0
        "></div>

        {/* Abstract Image */}
        <img 
          src={lumiImg} 
          alt="Lumi Abstract" 
          className="
            absolute 
            left-0 top-[50px] 
            /* FIX: Responsive Breite statt feste Pixel */
            w-full h-full lg:h-auto lg:top-[70px]
            opacity-30 blur-[10px] z-10 object-cover
            transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105
          " 
        />

        {/* Badge */}
        <div className="absolute left-6 top-6 z-30 flex items-center gap-[6px] px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
          <div className="w-[6px] h-[6px] rounded-full border border-[#A1A1AA] bg-transparent"></div>
          <span className="font-mono font-medium text-[12px] leading-[18px] text-[#EDEDED]">UX CASE STUDY</span>
        </div>

        {/* Phone Mockup */}
        <img 
          src={lumiPhone} 
          alt="Lumi App Mockup" 
          className="
            absolute
            /* FIX: Zentriert für alle Screens. */
            left-1/2 -translate-x-1/2 
            top-[40px] w-[240px]
            
            /* Desktop Anpassung nur für Größe/Höhe, aber Position bleibt mittig */
            lg:top-[20px] lg:w-[250px] lg:h-[500px]
            
            object-contain max-w-none z-20 pointer-events-none 
            drop-shadow-[-20px_10px_50px_rgba(0,0,0,0.6)] 
            transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105
          " 
        />

        {/* Footer */}
        <div className="
          absolute left-0 bottom-0 w-full z-30 
          h-[200px] lg:h-[250px] 
          bg-[linear-gradient(to_bottom,rgba(10,10,10,0)_0%,rgba(10,10,10,0.8)_60%,#0A0A0A_100%)]
        ">
          <div className="
            absolute 
            left-[26px] right-[26px] /* Rechts auch Abstand halten */
            bottom-[30px] lg:top-[169px] lg:bottom-auto
            flex 
            flex-col gap-6 items-start
            /* FIX: justify-between statt gap-[81px]. Verhindert Überlappung bei schmalen Cards. */
            lg:flex-row lg:items-end lg:justify-between lg:gap-0
          ">
            <div className="flex flex-col gap-1 items-start">
              <h3 className="font-sans font-bold text-[20px] leading-[24px] text-[#FFFFFF]">Lumi</h3>
              <p className="font-sans font-normal text-[14px] leading-[20px] text-[#A1A1AA]">Emotional Connection</p>
            </div>
            
            <div className="flex flex-col items-start justify-center px-2 py-1 bg-white/[0.02] border border-white/[0.15] rounded-[4px]">
              <span className="font-mono font-normal text-[11px] leading-[11px] text-[#D4D4D4]">User Research</span>
              <span className="font-mono font-normal text-[11px] leading-[11px] text-[#D4D4D4] mt-1">UX/UI Design</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};