
import codeIcon from '../assets/icons/code.svg';
import { Workflow } from 'lucide-react';
import sparkleIcon from '../assets/icons/aiicon.svg';

const services = [
  {
    title: "Software Development",
    description: "Building web applications with modern frontend technologies, combining functional interfaces with a foundation in UX design.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    icon: codeIcon
  },
  {
    title: "Automation & Integration",
    description: "Connecting APIs and services to automate workflows, process data, and reduce repetitive manual tasks.",
    tags: ["n8n", "REST APIs", "Docker"],
    icon: null
  },
  {
    title: "Applied AI",
    description: "Exploring practical AI integration in software and automation, with a focus on useful applications rather than technology for its own sake.",
    tags: ["OpenAI API", "AI-assisted Development", "Workflow Automation"],
    icon: sparkleIcon
  }
];

export const Services = () => {
  return (
    <section aria-labelledby="focus-heading" className="relative z-10 w-full bg-transparent flex flex-col items-center px-4 pt-12 pb-24 md:pt-16">
      <div className="w-full max-w-[1280px]">
        <h2 id="focus-heading" className="text-center text-[#A1A1AA]/60 font-mono text-xs tracking-[0.2em] uppercase mb-8">
          Areas of Focus
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {services.map((service, index) => (
          <div 
            key={index}
            className="
              group relative 
              bg-[#0A0A0A] 
              border border-white/5 
              hover:border-white/10
              rounded-3xl p-8 
              flex flex-col justify-between
              min-h-[300px] h-full gap-8 min-w-0
              transition-all duration-300 hover:-translate-y-1
            "
          >
            {/* Top Part: Icon & Text */}
            <div>
              {/* Icon Bubble */}
              <div className="
                w-10 h-10 mb-6 
                bg-white/5 rounded-full 
                flex items-center justify-center 
                group-hover:bg-white/10 transition-colors
              ">
                {service.icon ? <img
                  src={service.icon} 
                  alt=""
                  className="w-5 h-5 invert opacity-80 group-hover:opacity-100" 
                /> : <Workflow aria-hidden="true" className="w-5 h-5 text-white opacity-80 group-hover:opacity-100" />}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom Part: Tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-3 mt-auto">
              {service.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 shrink-0 rounded-full bg-[#525252]"></div>
                  <span className="text-[12px] font-mono font-medium uppercase tracking-wide text-[#A1A1AA]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
