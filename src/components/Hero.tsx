export const Hero = () => {

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4">
      
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

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-[32px]">

        <h1 className="
          text-5xl md:text-7xl lg:text-8xl font-bold text-center 
          tracking-tighter leading-[1.1] mb-6
          bg-gradient-to-b from-[#FFFFFF] to-[#A1A1AA] 
          bg-clip-text text-transparent
          ">
          Stop mocking up.<br />
          <span className="text-sub">Start shipping.</span>
        </h1>

        <p className="text-sub text-center max-w-[812px] text-lg md:text-xl leading-relaxed mb-12">
          Specialized in <span className="text-white">Human-AI interaction</span> and robust frontend engineering. 
          <br className="hidden md:block" /> 
          Bridging the gap between Figma perfection and production-ready React code.
        </p>
      </div>

    </section>
  );
};