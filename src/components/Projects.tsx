import { PulseLogCard } from './cards/PulseLogCard';
import { CaptuneCard } from './cards/CaptuneCard';
import { LumiCard } from './cards/LumiCard';
import { LexiCard } from './cards/LexiCard';
import { FitHubCard } from './cards/FitHubCard';

export const Projects = () => {
  return (
    <section className="
      relative z-10 w-full
      flex justify-center 
      px-4         
      pt-10       
      lg:pt-64   
      pb-32 
    ">
      
      <div id="projects" className="flex flex-col gap-6 w-full max-w-[1280px]">
        
        <div className="w-full flex justify-center mb-2">
           <h2 className="text-[#A1A1AA]/60 font-mono text-xs tracking-[0.2em] uppercase">
             Selected Work
           </h2>
        </div>

        {/* ROW 1: DEV PROJECTS (NOW CLICKABLE) */}
        <div className="relative flex flex-col md:flex-row lg:flex-row gap-6">
          
          {/* Link to PulseLog Code */}
          <a 
            href="https://pulselog-gray.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 block"
          >
            <PulseLogCard />
          </a>

          {/* Link to Captune Code */}
          <a 
            href="https://captune.vercel.app"
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 block"
          >
            <CaptuneCard />
          </a>

        </div>
        
        {/* ROW 2: CASE STUDIES (INTERNAL) */}
        <div className="relative flex flex-col lg:flex-row gap-6 justify-between">
          <LumiCard />
          <LexiCard />
          <FitHubCard />
        </div>

      </div>
    </section>
  );
};