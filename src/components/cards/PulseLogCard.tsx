import pulselogDesktop from '../../assets/pulselog-desktop.png';
import pulselogPhone from '../../assets/pulselog-phone.png';

// Icons
import ReactIcon from '../../assets/icons/react.svg';
import TSIcon from '../../assets/icons/typescript.svg';
import ViteIcon from '../../assets/icons/vite.svg';

export const PulseLogCard = () => {
  return (
    <div className="relative w-full lg:w-[800px] h-[500px] group cursor-pointer transition-transform duration-200 transform-gpu group-hover:scale-[1.01]">

      {/* Surface & Border Container */}
      <div className="
        absolute inset-0 
        bg-[#0A0A0A] 
        border border-white/10 
        rounded-[32px] 
        overflow-hidden 
        transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:border-white/20
        group-hover:shadow-[0_20px_80px_-20px_rgba(59,130,246,0.15)]
      ">
      
        {/* 1. Background Glow */}
        <div className="
          absolute 
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 /* Mobile: Zentriert */
          lg:left-[150px] lg:top-[50px] lg:translate-x-0 lg:translate-y-0 /* Desktop: Original */
          w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 
          bg-[#3B82F6]/10 
          blur-[150px] lg:blur-[250px] rounded-full 
          pointer-events-none z-0
          transition-opacity duration-700
          group-hover:opacity-100 opacity-60
        "></div>

        {/* 2. Live App Badge */}
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
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
          </div>
          <span className="font-mono font-bold text-[12px] 
            leading-[12px] tracking-[0.06em] 
            text-[#3B82F6] uppercase">
            Live App
          </span>
        </div>

        {/* --- IMAGES --- */}
        
        {/* Desktop Image */}
        <div className="
            absolute z-10 
            /* Mobile Styles */
            inset-0 w-full h-full opacity-30 blur-xl pointer-events-none
            /* Desktop Styles Reset */
            lg:opacity-100 lg:blur-0 lg:pointer-events-auto lg:inset-auto
            lg:-left-[87px] lg:top-[73px] lg:w-[550px] lg:h-[325px] 
            lg:overflow-hidden lg:rounded-lg lg:shadow-2xl
        ">
            <img 
            src={pulselogDesktop} 
            alt="PulseLog Desktop" 
            className="
              w-full h-full 
              object-cover lg:object-left-top 
              transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            "
          />
        </div>

        <img
          src={pulselogPhone}
          alt="PulseLog Mobile"
          className="
            absolute z-20 pointer-events-none
            drop-shadow-[-20px_10px_40px_rgba(0,0,0,0.8)]
            transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            group-hover:scale-105

            /* Mobile: Deutlich größer (war 180px) */
            w-[230px] top-[60px] left-1/2 -translate-x-1/2
            
            /* Tablet (md): Noch etwas größer */
            md:w-[280px] md:top-[40px]

            /* Desktop (lg): Original Specs */
            lg:w-[300px] lg:h-[750px] 
            lg:left-[270px] lg:top-[-100px] lg:translate-x-0
            lg:object-contain lg:max-w-none
          "
        />

        {/* --- FOOTER FRAME --- */}
        <div className="
          absolute left-0 bottom-0 
          w-full z-30
          /* Mobile: Frame ist höher für mehr Text-Platz */
          h-[220px] lg:h-[180px]
          bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent
          flex items-end pb-8 px-6 lg:pb-10 lg:px-8
        ">
          <div className="
            flex w-full 
            /* Mobile: Spalte (Text oben, Icons unten) */
            flex-col gap-6 items-start
            /* Desktop: Reihe (Text links, Icons rechts) */
            lg:flex-row lg:justify-between lg:items-end lg:gap-0
          ">
            
            {/* Text Group */}
            <div className="flex flex-col gap-2">
              <h3 className="
                font-sans font-bold text-white tracking-tight
                text-2xl lg:text-3xl /* Schriftgröße angepasst */
              ">
                PulseLog
              </h3>
              <p className="
                font-sans text-neutral-400 max-w-sm
                text-sm lg:text-base
              ">
                Offline-first tracker built with complex React state.
              </p>
            </div>

            {/* Icons Group */}
            <div className="
              flex gap-4 pb-1 
              transition-all duration-500 group-hover:opacity-100 opacity-70
            ">
              <img src={ReactIcon} alt="React" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={TSIcon} alt="TypeScript" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={ViteIcon} alt="Vite" className="w-6 h-6 hover:scale-110 transition-transform" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};