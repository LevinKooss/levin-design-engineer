import { PulseLogCard } from './cards/PulseLogCard';
import { CaptuneCard } from './cards/CaptuneCard';
import { LumiCard } from './cards/LumiCard';
import { LexiCard } from './cards/LexiCard';
import { FitHubCard } from './cards/FitHubCard';

export const Projects = () => {
  return (
    // FIX 1: "w-screen" zwingt die Section auf Bildschirmbreite
    <section className="relative z-10 w-screen flex flex-col items-center px-4 pt-10 lg:pt-64 pb-32 overflow-hidden">
      
      {/* FIX 2: "w-[90vw]" -> Das ist das Brecheisen. 
          Statt "w-full" sagen wir: "Nimm dir 90% vom Fenster, egal was passiert." 
          Damit KANN er nicht mehr kollabieren. 
      */}
      <div id="projects" className="w-[90vw] max-w-[1280px] grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Header */}
        <div className="lg:col-span-3 w-full flex justify-center mb-2">
           <h2 className="text-[#A1A1AA]/60 font-mono text-xs tracking-[0.2em] uppercase">
             Selected Work
           </h2>
        </div>

        {/* --- ROW 1 --- */}
        <a 
          href="https://pulselog-gray.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full lg:col-span-2 h-[500px]"
        >
          <PulseLogCard />
        </a>

        <a 
          href="https://captune.vercel.app"
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full lg:col-span-1 h-[500px]"
        >
          <CaptuneCard />
        </a>

        {/* --- ROW 2 --- */}
        {/* Hier geben wir zur Sicherheit auch eine feste Höhe mit, damit nichts springt */}
        <div className="w-full h-[450px]">
           <LumiCard />
        </div>

        <div className="w-full h-[450px]">
           <LexiCard />
        </div>

        <div className="w-full h-[450px]">
           <FitHubCard />
        </div>

      </div>
    </section>
  );
};