import ReactIconO from '../assets/icons/react-o.svg';
import ViteIconO from '../assets/icons/vite-o.svg';
import OpenAIIconO from '../assets/icons/openai-o.svg';
import TSIconO from '../assets/icons/typescript-o.svg';
import TailwindIconO from '../assets/icons/tailwind-o.svg';
import FigmaIconO from '../assets/icons/figma-o.svg';
import GitHubIconO from '../assets/icons/github-o.svg';
import VercelIconO from '../assets/icons/vercel-o.svg';

const baseIcons = [
  { name: 'React', src: ReactIconO, dark: false },
  { name: 'TypeScript', src: TSIconO, dark: false },
  { name: 'Tailwind', src: TailwindIconO, dark: false },
  { name: 'Vite', src: ViteIconO, dark: false },
  { name: 'OpenAI', src: OpenAIIconO, dark: true },
  { name: 'Figma', src: FigmaIconO, dark: false },
  { name: 'GitHub', src: GitHubIconO, dark: true },
  { name: 'Vercel', src: VercelIconO, dark: true },
];

const iconsDoubled = [...baseIcons, ...baseIcons];

export const TechStack = () => {
  return (
    <section className="w-full bg-transparent py-10 flex flex-col items-center justify-center overflow-hidden relative z-10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[60%] h-[100px] bg-white/[0.02] blur-[60px] rounded-full"></div>
      </div>

      <p className="text-[#A1A1AA]/60 text-xs font-mono tracking-[0.2em] mb-8 uppercase">
        Technologies
      </p>

      {/* Slider Container */}
      <div className="
        w-full max-w-[1280px] 
        flex flex-nowrap justify-start
        overflow-hidden 
        [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
        py-4
      ">
        
        <ul className="
          flex items-center 
          gap-12 md:gap-16 
          pr-12 md:pr-16
          animate-infinite-scroll 
          shrink-0 w-max
        ">
          {iconsDoubled.map((icon, index) => (
            <li key={index}>
              <img 
                src={icon.src} 
                alt={icon.name} 
                className={`
                  h-10 md:h-12 w-auto 
                  transition-all duration-300 ease-out 
                  cursor-pointer hover:scale-110
                  ${icon.dark 
                    ? 'invert opacity-50 hover:opacity-100' 
                    : 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100'
                  }
                `} 
              />
            </li>
          ))}
        </ul>

        <ul className="
          flex items-center 
          gap-12 md:gap-16 
          pr-12 md:pr-16
          animate-infinite-scroll 
          shrink-0 w-max
        " aria-hidden="true">
          {iconsDoubled.map((icon, index) => (
            <li key={`dup-${index}`}>
              <img 
                src={icon.src} 
                alt={icon.name} 
                className={`
                  h-10 md:h-12 w-auto 
                  transition-all duration-300 ease-out 
                  cursor-pointer hover:scale-110
                  ${icon.dark 
                    ? 'invert opacity-50 hover:opacity-100' 
                    : 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100'
                  }
                `} 
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};