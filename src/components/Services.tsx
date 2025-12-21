
import codeIcon from '../assets/icons/code.svg';
import penIcon from '../assets/icons/pen-tool.svg';
import sparkleIcon from '../assets/icons/aiicon.svg';

const services = [
  {
    title: "Product Design",
    description: "Focusing on scalable systems. I dig deep into user needs before moving a single pixel.",
    tags: ["Figma", "Research", "Systems"],
    icon: penIcon
  },
  {
    title: "Modern Frontend",
    description: "Bridging the gap between design and code. I build interfaces that feel as fluid as they look.",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: codeIcon
  },
  {
    title: "AI Workflows",
    description: "Using LLMs to accelerate prototyping and creativity. Not replacing the craft, but amplifying it.",
    tags: ["Prompting", "Automation", "Speed"],
    icon: sparkleIcon
  }
];

export const Services = () => {
  return (
    <section className="relative z-10 w-full bg-transparent flex justify-center px-4 py-24">
      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-3 gap-6">
        
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
              h-[300px] 
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
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-5 h-5 invert opacity-80 group-hover:opacity-100" 
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom Part: Tags */}
            <div className="flex flex-wrap gap-4 mt-auto">
              {service.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#525252]"></div>
                  <span className="text-[12px] font-mono font-medium uppercase tracking-wide text-[#A1A1AA]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};