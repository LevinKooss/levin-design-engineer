import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import LexiAnna from '../assets/lexi-anna.avif'
import LexiDesktop from '../assets/lexi-desktop.avif'
import LexiInputLofi from '../assets/lexi-input-lofi.avif'
import LexiInputSm from '../assets/lexi-input-sm.avif'
import LexiInput from '../assets/lexi-input.avif'
import LexiOnboardLofi from '../assets/lexi-onboard-lofi.avif'
import LexiOnboard from '../assets/lexi-onboard.avif'
import LexiOutputLofi from '../assets/lexi-output-lofi.avif'
import LexiOutput from '../assets/lexi-output.avif'
import LexiPeter from '../assets/lexi-peter.avif'
import LexiUserFlow from '../assets/lexi-user-flow.avif'
import LexiHero from '../assets/lexi.avif'
import LexiSchrift from '../assets/lexi-schrift.mp4'
import LexiSummary from '../assets/lexi-summary.mp4'

const HeroImg = LexiHero;          
const SolutionCompareImg = LexiInputSm;
const AnnaImg = LexiAnna;         
const PeterImg = LexiPeter;         
const UserFlowImg = LexiUserFlow;    
const Wire1Img = LexiOnboardLofi;        
const Wire2Img = LexiInputLofi;      
const Wire3Img = LexiOutputLofi;      
const UI1Img = LexiOnboard;          
const UI2Img = LexiInput;          
const UI3Img = LexiOutput;           
const UI4Img = LexiDesktop;          
const Micro1Video = LexiSchrift;        
const Micro2Video = LexiSummary;    

// Icons
import { Clock, User, Sparkles, Zap, Eye, Sliders, CheckCircle } from 'lucide-react';

const RevealOnScroll = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Lexi = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-12 px-4 md:px-8 max-w-[1000px] mx-auto">
        
        {/* --- 1. HERO SECTION --- */}
        <RevealOnScroll>
          <div className="mb-24">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-[#525252] hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm uppercase tracking-wider">Back to projects</span>
            </Link>

            <h1 className="text-5xl md:text-8xl font-bold mb-6">
              Lexi<span className="text-blue-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-8">
              Simplifying text with AI for accessible reading. <br />
              Lexi reduces cognitive load for ADHD and older readers.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">UX Research</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">AI Integration</span>
              <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono text-blue-400">Accessibility</span>
            </div>

            {/* HERO IMAGE */}
            <div className="w-full aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/5 relative group shadow-2xl shadow-blue-900/10">
               <img 
                 src={HeroImg} 
                 alt="Lexi App Hero" 
                 className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
               />
            </div>
          </div>
        </RevealOnScroll>


        {/* --- 2. STATS GRID --- */}
        <RevealOnScroll delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-8 mb-24 font-mono text-xs md:text-sm">
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><User size={14}/> Role</div>
               <span className="text-white">UX Designer & Researcher</span>
             </div>
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><Clock size={14}/> Duration</div>
               <span className="text-white">4 Weeks</span>
             </div>
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><Zap size={14}/> Tools</div>
               <span className="text-white">Figma, AI</span>
             </div>
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><Sparkles size={14}/> Focus</div>
               <span className="text-white">AI for Accessibility</span>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 3. THE PROBLEM --- */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
             <div className="sticky top-32">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 block">The Challenge</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Reading complex text creates barriers.</h2>
                <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
                   Through conversations with ADHD readers and older adults, I identified that dense formatting makes comprehension difficult and tiring.
                </p>
             </div>
             
             {/* Pain Points Grid */}
             <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Zap className="text-blue-500" size={20}/> Cognitive Overload</div>
                   <p className="text-[#A1A1AA] text-sm">Readers with ADHD struggle to maintain focus when faced with long, unstructured text.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Eye className="text-blue-500" size={20}/> Visual Strain</div>
                   <p className="text-[#A1A1AA] text-sm">Older adults find small font sizes and low-contrast layouts tiring and inaccessible.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Sliders className="text-blue-500" size={20}/> Loss of Context</div>
                   <p className="text-[#A1A1AA] text-sm">Dense formatting makes it hard to scan quickly, causing readers to lose track of key points.</p>
                </div>
             </div>
          </div>
        </RevealOnScroll>


      {/* --- 4. THE SOLUTION --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Solution</h2>

             {/* MAIN GRID */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="flex flex-col gap-6">

                   {/* CARD 1: AI Simplification */}
                   <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">

                      <div className="p-6">
                         <h4 className="text-xl font-bold mb-2 text-white">AI Simplification</h4>
                         <p className="text-[#A1A1AA] text-sm leading-relaxed">
                           Transforms dense paragraphs into easy-to-scan chunks to reduce mental load.
                         </p>
                      </div>
                   </div>

                   {/* CARD 2: Customizable Text */}
                   <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                      <div className="p-6">
                         <h4 className="text-xl font-bold mb-2 text-white">Customizable Size</h4>
                         <p className="text-[#A1A1AA] text-sm leading-relaxed">
                           Supports older adults with larger, adjustable fonts that adapt instantly.
                         </p>
                      </div>
                   </div>

                   {/* CARD 3: High Contrast */}
                   <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                      <div className="p-6">
                         <h4 className="text-xl font-bold mb-2 text-white">High Contrast</h4>
                         <p className="text-[#A1A1AA] text-sm leading-relaxed">
                           Improves legibility for low-vision readers with a dedicated reading mode.
                         </p>
                      </div>
                   </div>

                </div> 

                <div className="lg:sticky lg:top-32 h-full min-h-[500px] bg-[#111] border border-white/5 rounded-3xl p-4 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                   <img
                    src={SolutionCompareImg}
                    alt="Lexi Input vs Output Comparison"
                    className="w-full h-full object-contain rounded-2xl relative z-10"
                   />
                </div>

             </div>
          </div>
        </RevealOnScroll>


        {/* --- 5. STANDARDS & RESEARCH --- */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
             <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-blue-500">📜</span> Accessibility Standards
                </h3>
                <ul className="space-y-4 text-[#A1A1AA]">
                   <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-blue-500 shrink-0 mt-1"/> <span><span className="text-white font-semibold">Plain Language:</span> Short sentences (max 20 words).</span></li>
                   <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-blue-500 shrink-0 mt-1"/> <span><span className="text-white font-semibold">WCAG Compliance:</span> Scalable text & sufficient contrast.</span></li>
                   <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-blue-500 shrink-0 mt-1"/> <span>Clear hierarchy & predictable navigation patterns.</span></li>
                </ul>
             </div>

             {/* Rechts: User Research */}
             <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🧠</span> User Research
                </h3>
                <ul className="space-y-4 text-[#A1A1AA]">
                   <li className="flex gap-3 items-start"><span className="text-blue-500 shrink-0 mt-1">•</span> <span>ADHD readers lose focus in long paragraphs.</span></li>
                   <li className="flex gap-3 items-start"><span className="text-blue-500 shrink-0 mt-1">•</span> <span>Older adults struggle with small fonts & clutter.</span></li>
                   <li className="flex gap-3 items-start"><span className="text-blue-500 shrink-0 mt-1">•</span> <span><span className="text-white font-semibold">Cognitive overload</span> is the biggest barrier to engagement.</span></li>
                </ul>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 6. USER PERSONAS --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/10 flex-grow"></div>
                <span className="text-[#525252] font-mono text-xs uppercase tracking-widest">Who we design for</span>
                <div className="h-px bg-white/10 flex-grow"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Persona 1: Anna */}
                <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                         <img src={AnnaImg} alt="Anna" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Anna, 29</h4>
                         <span className="text-[#525252] text-xs uppercase">ADHD Reader</span>
                      </div>
                   </div>
                   <ul className="space-y-3 text-sm text-[#A1A1AA]">
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Overwhelmed by long, dense paragraphs.</span></li>
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Focus drops after just a few sentences.</span></li>
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Needs short, clear wording and visual breaks.</span></li>
                   </ul>
                </div>

                {/* Persona 2: Peter */}
                <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                         <img src={PeterImg} alt="Peter" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Peter, 65</h4>
                         <span className="text-[#525252] text-xs uppercase">Older Reader</span>
                      </div>
                   </div>
                   <ul className="space-y-3 text-sm text-[#A1A1AA]">
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Struggles with small fonts and low contrast.</span></li>
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Loses track in cluttered layouts.</span></li>
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Needs larger text, clear hierarchy, predictable patterns.</span></li>
                   </ul>
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 7. INSIGHTS --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <h3 className="text-2xl font-bold mb-8 text-white">What shaped Lexi</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-blue-500 font-mono text-xs block mb-2">INSIGHT #1</span>
                   <h5 className="text-white font-bold mb-2">Too many options cause overload.</h5>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-blue-500 font-mono text-xs block mb-2">INSIGHT #2</span>
                   <h5 className="text-white font-bold mb-2">Font size must be immediate.</h5>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-blue-500 font-mono text-xs block mb-2">INSIGHT #3</span>
                   <h5 className="text-white font-bold mb-2">Audio support reduces barriers.</h5>
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 8. USER FLOW --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <span className="text-[#525252] font-mono text-xs uppercase tracking-widest">Logic & Architecture</span>
                <div className="h-px bg-white/10 flex-grow"></div>
             </div>
             
             <div className="flex flex-col gap-8">
               <div className="max-w-2xl">
                 <h3 className="text-3xl font-bold mb-4">How users interact with Lexi</h3>
                 <p className="text-[#A1A1AA]">
                   To address the challenges, I mapped out the key flows that guide users from uploading text to simplifying and listening to it.
                 </p>
               </div>
               <div className="w-full bg-[#111] border border-white/5 p-4 md:p-8 rounded-3xl">
                   <img 
                     src={UserFlowImg} 
                     alt="Lexi User Flow" 
                     className="w-full h-auto object-contain rounded-xl opacity-90" 
                   />
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 9. WIREFRAMES --- */}
        <RevealOnScroll>
          <div className="mb-32">
            <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 block">Early Concepts</span>
            <h2 className="text-3xl font-bold mb-12">Wireframes</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center">
                  <img src={Wire1Img} alt="Onboarding Wireframe" className="h-[450px] w-auto object-contain opacity-80 mb-4" />
                  <span className="text-white font-bold text-sm">Onboarding</span>
                  <p className="text-[#525252] text-xs mt-1 text-center">Minimal intro to avoid overload.</p>
               </div>
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center">
                  <img src={Wire2Img} alt="Input Wireframe" className="h-[450px] w-auto object-contain opacity-80 mb-4" />
                  <span className="text-white font-bold text-sm">Input</span>
                  <p className="text-[#525252] text-xs mt-1 text-center">Paste and upload kept as lowest effort.</p>
               </div>
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center">
                  <img src={Wire3Img} alt="Output Wireframe" className="h-[450px] w-auto object-contain opacity-80 mb-4" />
                  <span className="text-white font-bold text-sm">Output</span>
                  <p className="text-[#525252] text-xs mt-1 text-center">Font size and TTS added.</p>
               </div>
            </div>
          </div>
        </RevealOnScroll>


        {/* --- 10. ITERATIONS --- */}
        <RevealOnScroll>
           <div className="mb-32 bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">From Overload to Focus (Iteration)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                    <h4 className="text-[#525252] font-mono text-xs uppercase mb-2">The Problem</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">
                       In the first version, all controls sat directly on the output screen. This caused visual clutter and broke the reading flow for ADHD users.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-blue-500 font-mono text-xs uppercase mb-2">The Fix</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">
                       I solved this by moving secondary actions into a <span className="text-white font-semibold">“More Options” menu</span>. This reduced overload while keeping advanced controls accessible.
                    </p>
                 </div>
              </div>
           </div>
        </RevealOnScroll>


        {/* --- 11. FINAL UI --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 block text-center">High Fidelity</span>
             <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Refined Interface</h2>

             {/* PART 1: PHONE SCREENS (3 Columns) */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                
                {/* 1. Onboarding */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Onboarding</h4>
                      <p className="text-[#A1A1AA] text-sm">Minimal intro to avoid overload.</p>
                   </div>
                   <div className="flex-grow flex items-center justify-center">
                      <img src={UI1Img} alt="Onboarding UI" className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[400px]" />
                   </div>
                </div>
                
                {/* 2. Input */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col md:translate-y-12">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Input</h4>
                      <p className="text-[#A1A1AA] text-sm">Clean input with instant paste/upload.</p>
                   </div>
                   <div className="flex-grow flex items-center justify-center">
                      <img src={UI2Img} alt="Input UI" className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[400px]" />
                   </div>
                </div>

                {/* 3. Output */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Output</h4>
                      <p className="text-[#A1A1AA] text-sm">Simplified view with adjustable font size.</p>
                   </div>
                   <div className="flex-grow flex items-center justify-center">
                      <img src={UI3Img} alt="Output UI" className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[400px]" />
                   </div>
                </div>

             </div>

             {/* PART 2: DESKTOP SCREEN (Full Width) */}
             <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5 mt-12 md:mt-24">
                <div className="mb-8 max-w-2xl">
                   <h4 className="text-2xl font-bold text-white mb-2">Desktop View</h4>
                   <p className="text-[#A1A1AA] text-sm leading-relaxed">
                     Responsive layout optimized for longer reading sessions. The navigation remains simple, while the text area utilizes the wider screen for better readability without losing focus.
                   </p>
                </div>
                
                <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                   <img 
                     src={UI4Img} 
                     alt="Desktop UI" 
                     className="w-full h-auto object-cover" 
                   />
                </div>
             </div>

          </div>
        </RevealOnScroll>


        {/* --- 12. MICRO-INTERACTIONS --- */}
        <RevealOnScroll>
           <div className="mb-32">
              <h3 className="text-3xl font-bold text-white mb-12">Micro-interactions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                 {/* 1. Font Scaling Video */}
                 <div className="bg-[#111] p-8 rounded-3xl border border-white/5">
                    <h4 className="text-xl font-bold text-white mb-4">Instant Font Scaling</h4>
                    <p className="text-[#A1A1AA] text-sm mb-6">Keeps readers in flow and supports individual accessibility needs.</p>
                    <div className="bg-[#151515] rounded-xl overflow-hidden h-[450px] flex items-center justify-center p-4">
                       <video 
                         src={Micro1Video} 
                         autoPlay 
                         loop 
                         muted 
                         playsInline 
                         className="w-full h-full object-contain opacity-90"
                       />
                    </div>
                 </div>

                 {/* 2. Toggle Video */}
                 <div className="bg-[#111] p-8 rounded-3xl border border-white/5">
                    <h4 className="text-xl font-bold text-white mb-4">One-tap Toggle</h4>
                    <p className="text-[#A1A1AA] text-sm mb-6">Switch between original and simplified text without adding friction.</p>
                    <div className="bg-[#151515] rounded-xl overflow-hidden h-[450px] flex items-center justify-center p-4">
                       <video 
                         src={Micro2Video} 
                         autoPlay 
                         loop 
                         muted 
                         playsInline 
                         className="w-full h-full object-contain opacity-90"
                       />
                    </div>
                 </div>

              </div>
           </div>
        </RevealOnScroll>

        {/* --- 13. LEARNINGS & NEXT STEPS --- */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-t border-white/10 pt-16">
             
             {/* Learnings */}
             <div>
                <h3 className="text-3xl font-bold mb-6 text-white">What I Learned</h3>
                <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
                   <p>
                      User research was crucial for this project. Testing revealed that the first design caused cognitive overload. After simplifying the interface, <span className="text-white font-semibold">7 out of 10 participants</span> said it felt calmer and easier to read.
                   </p>
                   <p>
                      The core lesson: <span className="text-white font-semibold">Simplicity isn't about fewer features</span>, but about removing distractions to create inclusive, human-centered design.
                   </p>
                </div>
             </div>
             
             {/* Next Steps */}
             <div className="bg-[#111] p-8 rounded-3xl border border-white/5 h-fit">
                <div className="flex items-center gap-3 mb-6">
                   <span className="text-blue-500 text-xl">🚀</span>
                   <h3 className="text-xl font-bold text-white">Looking Ahead</h3>
                </div>
                <div className="space-y-6 text-[#A1A1AA] leading-relaxed">
                   <p>
                      The next step for Lexi is <span className="text-white font-semibold">personalization</span>: allowing users to save preferred font size and reading speed.
                   </p>
                   <p>
                      I would also run usability tests with a <span className="text-white font-semibold">broader and more diverse group</span> to validate assumptions and uncover new accessibility needs.
                   </p>
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 14. NEXT PROJECT (FitHub) --- */}
        <RevealOnScroll>
          <Link to="/fithub" className="group block border-t border-white/10 pt-24 pb-12">
             <div className="flex justify-between items-center">
                <div>
                  <span className="text-[#525252] font-mono text-xs uppercase tracking-widest mb-2 block">Next Case Study</span>
                  <h4 className="text-3xl md:text-5xl font-bold group-hover:text-emerald-500 transition-colors">FitHub</h4>
                </div>
                <ArrowRight size={48} className="text-[#525252] group-hover:text-emerald-500 group-hover:translate-x-4 transition-all" />
             </div>
          </Link>
        </RevealOnScroll>

      </main>
    </div>
  );
};