import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ConceptContext } from '../components/design/ConceptContext';
import { FlowDiagram } from '../components/design/FlowDiagram';
import { PageTitle } from '../components/design/PageTitle';

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
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <div
      ref={ref}
      className={`design-reveal transition-all duration-1000 ease-out transform ${
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
    <div className="design-case-study min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">


      <main className="pt-36 pb-12 px-4 md:px-8 max-w-[1000px] mx-auto">
        <PageTitle title="Lexi — UX/UI Concept" />
        
        {/* --- 1. HERO SECTION --- */}
        <RevealOnScroll>
          <div className="mb-24">
            <Link to="/design#projects" className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm uppercase tracking-wider">Back to projects</span>
            </Link>

            <h1 className="text-5xl md:text-8xl font-bold mb-6">
              Lexi<span className="text-blue-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-8">
              Exploring AI-assisted text simplification as a reading concept. <br />
              Designed with the objective of reducing interface complexity for ADHD and older readers.
            </p>
            
            <ConceptContext>AI-powered simplification and text-to-speech are proposed product features. These mockups and prototype recordings do not demonstrate a working AI integration.</ConceptContext>
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">Concept Project</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">Interaction Design</span>
              <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono text-blue-400">Accessibility</span>
            </div>

            {/* HERO IMAGE */}
            <div className="w-full aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/5 relative group shadow-2xl shadow-blue-900/10">
               <img width={1024} height={722} loading="eager" decoding="async"
                 src={HeroImg} 
                 alt="Lexi App Hero" 
                 className="w-full h-full object-contain opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
               />
            </div>
          </div>
        </RevealOnScroll>


        {/* --- 2. STATS GRID --- */}
        <RevealOnScroll delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-8 mb-24 font-mono text-xs md:text-sm">
             <div>
               <div className="text-[#A1A1AA] mb-2 uppercase tracking-wider flex items-center gap-2"><User size={14}/> Role</div>
               <span className="text-white">UX/UI Designer</span>
             </div>
             <div>
               <div className="text-[#A1A1AA] mb-2 uppercase tracking-wider flex items-center gap-2"><Clock size={14}/> Duration</div>
               <span className="text-white">4 Weeks</span>
             </div>
             <div>
               <div className="text-[#A1A1AA] mb-2 uppercase tracking-wider flex items-center gap-2"><Zap size={14}/> Design Tool</div>
               <span className="text-white">Figma</span>
             </div>
             <div>
               <div className="text-[#A1A1AA] mb-2 uppercase tracking-wider flex items-center gap-2"><Sparkles size={14}/> Focus</div>
               <span className="text-white">Accessible Reading</span>
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
                   The concept uses AI-assisted scenarios to explore reading tasks for people with ADHD and older adults. Dense text, small type, and competing controls are design assumptions to investigate.
                </p>
             </div>
             
             {/* Pain Points Grid */}
             <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Zap className="text-blue-500" size={20}/> Cognitive Overload</div>
                   <p className="text-[#A1A1AA] text-sm">Scenario assumption: long, unstructured passages may make it harder to keep track of the text.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Eye className="text-blue-500" size={20}/> Visual Strain</div>
                   <p className="text-[#A1A1AA] text-sm">Scenario assumption: small type and low contrast may create barriers for some older readers.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Sliders className="text-blue-500" size={20}/> Loss of Context</div>
                   <p className="text-[#A1A1AA] text-sm">Design question: how could clearer grouping help readers locate key information?</p>
                </div>
             </div>
          </div>
        </RevealOnScroll>


      {/* --- 4. THE SOLUTION --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Concept</h2>

             {/* MAIN GRID */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="flex flex-col gap-6">

                   {/* CARD 1: AI Simplification */}
                   <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">

                      <div className="p-6">
                         <h4 className="text-xl font-bold mb-2 text-white">AI Simplification</h4>
                         <p className="text-[#A1A1AA] text-sm leading-relaxed">
                           A proposed AI-powered feature would restructure dense paragraphs into shorter, scannable text.
                         </p>
                      </div>
                   </div>

                   {/* CARD 2: Customizable Text */}
                   <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                      <div className="p-6">
                         <h4 className="text-xl font-bold mb-2 text-white">Customizable Size</h4>
                         <p className="text-[#A1A1AA] text-sm leading-relaxed">
                           The interface concept includes adjustable font sizes for different reading preferences.
                         </p>
                      </div>
                   </div>

                   {/* CARD 3: High Contrast */}
                   <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                      <div className="p-6">
                         <h4 className="text-xl font-bold mb-2 text-white">High Contrast</h4>
                         <p className="text-[#A1A1AA] text-sm leading-relaxed">
                           The visual direction uses a dark reading surface and clear text hierarchy; accessibility remains a design objective.
                         </p>
                      </div>
                   </div>

                </div> 

                <div className="lg:sticky lg:top-32 h-full min-h-[500px] bg-[#111] border border-white/5 rounded-3xl p-4 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                   <img width={1022} height={2048} loading="lazy" decoding="async"
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
                  <span className="text-blue-500">📜</span> Accessibility Objectives
                </h3>
                <ul className="space-y-4 text-[#A1A1AA]">
                   <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-blue-500 shrink-0 mt-1"/> <span><span className="text-white font-semibold">Plain Language:</span> Aim for short sentences and scannable wording.</span></li>
                   <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-blue-500 shrink-0 mt-1"/> <span><span className="text-white font-semibold">Reading Controls:</span> Explore scalable text and sufficient contrast.</span></li>
                   <li className="flex gap-3 items-start"><CheckCircle size={18} className="text-blue-500 shrink-0 mt-1"/> <span>Clear hierarchy & predictable navigation patterns.</span></li>
                </ul>
             </div>

             {/* Rechts: Concept Assumptions */}
             <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🧠</span> Concept Assumptions
                </h3>
                <ul className="space-y-4 text-[#A1A1AA]">
                   <li className="flex gap-3 items-start"><span className="text-blue-500 shrink-0 mt-1">•</span> <span>Explore shorter text blocks as an alternative to dense paragraphs.</span></li>
                   <li className="flex gap-3 items-start"><span className="text-blue-500 shrink-0 mt-1">•</span> <span>Explore adjustable type and a focused reading surface.</span></li>
                   <li className="flex gap-3 items-start"><span className="text-blue-500 shrink-0 mt-1">•</span> <span><span className="text-white font-semibold">Reducing distractions</span> is a design objective, not a measured result.</span></li>
                </ul>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 6. USER PERSONAS --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/10 flex-grow"></div>
                <span className="text-[#A1A1AA] font-mono text-xs uppercase tracking-widest">Conceptual personas</span>
                <div className="h-px bg-white/10 flex-grow"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Persona 1: Anna */}
                <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                         <img width={512} height={512} loading="lazy" decoding="async" src={AnnaImg} alt="Anna" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Anna, 29</h4>
                         <span className="text-[#A1A1AA] text-xs uppercase">Conceptual ADHD reader</span>
                      </div>
                   </div>
                   <ul className="space-y-3 text-sm text-[#A1A1AA]">
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Overwhelmed by long, dense paragraphs.</span></li>
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Scenario: wants fewer competing elements while reading.</span></li>
                      <li className="flex items-start gap-3"><span className="text-blue-500 shrink-0 mt-[2px]">•</span> <span>Needs short, clear wording and visual breaks.</span></li>
                   </ul>
                </div>

                {/* Persona 2: Peter */}
                <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                         <img width={512} height={512} loading="lazy" decoding="async" src={PeterImg} alt="Peter" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Peter, 65</h4>
                         <span className="text-[#A1A1AA] text-xs uppercase">Conceptual older reader</span>
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
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-blue-500 font-mono text-xs block mb-2">DESIGN AIM #1</span>
                   <h5 className="text-white font-bold mb-2">Keep secondary controls out of the reading area.</h5>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-blue-500 font-mono text-xs block mb-2">DESIGN AIM #2</span>
                   <h5 className="text-white font-bold mb-2">Make text-size controls easy to access.</h5>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-blue-500 font-mono text-xs block mb-2">DESIGN AIM #3</span>
                   <h5 className="text-white font-bold mb-2">Explore audio as an alternative reading mode.</h5>
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 8. USER FLOW --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <span className="text-[#A1A1AA] font-mono text-xs uppercase tracking-widest">Logic & Architecture</span>
                <div className="h-px bg-white/10 flex-grow"></div>
             </div>
             
             <div className="flex flex-col gap-8">
               <div className="max-w-2xl">
                 <h3 className="text-3xl font-bold mb-4">Proposed reading flows</h3>
                 <p className="text-[#A1A1AA]">
                   To address the challenges, I mapped out the key flows that guide users from uploading text to simplifying and listening to it.
                 </p>
               </div>
               <div className="w-full bg-[#111] border border-white/5 p-4 md:p-8 rounded-3xl">
                   <FlowDiagram src={UserFlowImg} alt="Lexi reading flows" width={1024} height={763} summary="The proposed sequence moves from onboarding to pasting or uploading text, a processing state, and a reading view with summary, tasks, and audio controls. A separate history flow opens or deletes a saved entry." />
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 9. WIREFRAMES --- */}
        <RevealOnScroll>
          <div className="mb-32">
            <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 block">Early Concepts</span>
            <h2 className="text-3xl font-bold mb-12">Wireframes</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center">
                  <img width={804} height={1748} loading="lazy" decoding="async" src={Wire1Img} alt="Onboarding Wireframe" className="h-[450px] w-auto object-contain opacity-80 mb-4" />
                  <span className="text-white font-bold text-sm">Onboarding</span>
                  <p className="text-[#A1A1AA] text-xs mt-1 text-center">A short introduction with a primary start action.</p>
               </div>
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center">
                  <img width={804} height={1748} loading="lazy" decoding="async" src={Wire2Img} alt="Input Wireframe" className="h-[450px] w-auto object-contain opacity-80 mb-4" />
                  <span className="text-white font-bold text-sm">Input</span>
                  <p className="text-[#A1A1AA] text-xs mt-1 text-center">Paste and upload are presented as input choices.</p>
               </div>
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center">
                  <img width={804} height={1748} loading="lazy" decoding="async" src={Wire3Img} alt="Output Wireframe" className="h-[450px] w-auto object-contain opacity-80 mb-4" />
                  <span className="text-white font-bold text-sm">Output</span>
                  <p className="text-[#A1A1AA] text-xs mt-1 text-center">Text-size and proposed audio controls.</p>
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
                    <h4 className="text-[#A1A1AA] font-mono text-xs uppercase mb-2">The Problem</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">
                       The output wireframe places text-size, playback, and summary controls directly on the reading screen. Those controls compete for space with the text.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-blue-500 font-mono text-xs uppercase mb-2">Visible Change</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">
                       The final mobile UI groups secondary reading controls under <span className="text-white font-semibold">“More Options”</span>, while Summary and To-Dos remain visible. The change in hierarchy is visible in the mockups; its effect on reading would need real user testing.
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
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                
                {/* 1. Onboarding */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Onboarding</h4>
                      <p className="text-[#A1A1AA] text-sm">A short introduction with a primary start action.</p>
                   </div>
                   <div className="flex-grow flex items-center justify-center">
                      <img width={948} height={1920} loading="lazy" decoding="async" src={UI1Img} alt="Onboarding UI" className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[400px]" />
                   </div>
                </div>
                
                {/* 2. Input */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col md:translate-y-12">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Input</h4>
                      <p className="text-[#A1A1AA] text-sm">Input concept with paste and upload actions.</p>
                   </div>
                   <div className="flex-grow flex items-center justify-center">
                      <img width={948} height={1920} loading="lazy" decoding="async" src={UI2Img} alt="Input UI" className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[400px]" />
                   </div>
                </div>

                {/* 3. Output */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 flex flex-col">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Output</h4>
                      <p className="text-[#A1A1AA] text-sm">Simplified view with adjustable font size.</p>
                   </div>
                   <div className="flex-grow flex items-center justify-center">
                      <img width={948} height={1920} loading="lazy" decoding="async" src={UI3Img} alt="Output UI" className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[400px]" />
                   </div>
                </div>

             </div>

             {/* PART 2: DESKTOP SCREEN (Full Width) */}
             <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5 mt-12 md:mt-24">
                <div className="mb-8 max-w-2xl">
                   <h4 className="text-2xl font-bold text-white mb-2">Desktop View</h4>
                   <p className="text-[#A1A1AA] text-sm leading-relaxed">
                     The desktop concept separates history, reading content, and controls across a wider layout. It explores how the same reading task could be presented on a larger screen.
                   </p>
                </div>
                
                <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                   <img width={1024} height={728} loading="lazy" decoding="async"
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
                    <h4 className="text-xl font-bold text-white mb-4">Text Size Control</h4>
                    <p className="text-[#A1A1AA] text-sm mb-6">Prototype recording illustrating the text-size control.</p>
                    <div className="bg-[#151515] rounded-xl overflow-hidden h-[450px] flex items-center justify-center p-4">
                       <video 
                         src={Micro1Video}
                        controls
                        preload="none"
                        muted
                        playsInline
                        poster={UI3Img}
                        width={720}
                        height={1520}
                        aria-label="Lexi prototype recording: changing text size"
                         className="w-full h-full object-contain opacity-90"
                       />
                    </div>
                 </div>

                 {/* 2. Toggle Video */}
                 <div className="bg-[#111] p-8 rounded-3xl border border-white/5">
                    <h4 className="text-xl font-bold text-white mb-4">Text View Toggle</h4>
                    <p className="text-[#A1A1AA] text-sm mb-6">Prototype recording illustrating a change between text views. The sample text does not demonstrate a working AI integration.</p>
                    <div className="bg-[#151515] rounded-xl overflow-hidden h-[450px] flex items-center justify-center p-4">
                       <video 
                         src={Micro2Video}
                        controls
                        preload="none"
                        muted
                        playsInline
                        poster={UI3Img}
                        width={720}
                        height={1520}
                        aria-label="Lexi prototype recording: changing text views"
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
                <h3 className="text-3xl font-bold mb-6 text-white">Design Reflection</h3>
                <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
                   <p>
                      The clearest visible iteration is the move from controls spread across the output wireframe to a grouped More Options area in the final mobile UI. Whether that grouping improves comprehension or makes controls harder to discover remains open.
                   </p>
                   <p>
                      The design principle: <span className="text-white font-semibold">Simplicity isn't about fewer features</span>, but about removing distractions to create inclusive, human-centered design.
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
                      A future study with <span className="text-white font-semibold">real readers from the intended audiences</span> could explore comprehension, control discovery, and preferences. No such study has been conducted.
                   </p>
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 14. NEXT PROJECT (FitHub) --- */}
        <RevealOnScroll>
          <Link to="/lumi" className="group block border-t border-white/10 pt-24 pb-12">
             <div className="flex justify-between items-center">
                <div>
                  <span className="text-[#A1A1AA] font-mono text-xs uppercase tracking-widest mb-2 block">Next Case Study</span>
                  <h4 className="text-3xl md:text-5xl font-bold group-hover:text-fuchsia-400 transition-colors">Lumi</h4>
                </div>
                <ArrowRight size={48} className="text-[#A1A1AA] group-hover:text-fuchsia-400 group-hover:translate-x-4 transition-all" />
             </div>
          </Link>
        </RevealOnScroll>

      </main>
    </div>
  );
};
