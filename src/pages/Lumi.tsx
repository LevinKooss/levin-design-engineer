import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import LumiImg from '../assets/LumiImg.avif'; 
import ManImg from '../assets/man.webp';
import WomanImg from '../assets/woman.webp';
import LumiMock from '../assets/Lumi.png'
import LumiSend from '../assets/lumimore.avif';
import LumiMoodSmall from '../assets/lumimood.avif';
import LumiWishSmall from '../assets/lumiwishsmall.webp';
import LumiUserFlow from '../assets/lumiuserflow.webp';
import LumiLoFiOnBoard from '../assets/lumionboardlofi.avif';
import LumiLoFiSend from '../assets/lumilofisend.avif';
import LumiLoFiMood from '../assets/lumilofimood.avif';
import LumiLoFiWish from '../assets/lumilofiwish.avif';
import LumiPair from '../assets/LumiPair.png';
import LumiPhone from '../assets/LumiPhone.png';
import LumiWish from '../assets/LumiWish.png';
import LumiMood from '../assets/LumiMood.png';


// Icons
import { Clock, User, Sparkles, Zap, MessageCircle, Heart } from 'lucide-react';

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
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

// --- SHIMA COMPONENT ---
const ShimaQuote = ({ text, title = "" }: { text: string, title?: string }) => (
  <div className="bg-[#111] border border-white/5 rounded-3xl p-8 relative overflow-hidden my-16 group hover:border-fuchsia-500/30 transition-colors">
     {/* Glow Effect */}
     <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-fuchsia-500/20 transition-colors"></div>
     
     <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">

        <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] transform group-hover:scale-110 transition-transform duration-500">
          <img src={LumiImg} alt="Shima Mascot" className="w-full h-full object-cover" />
        </div>
        <div>
           {title && <h3 className="text-white font-bold mb-1">{title}</h3>}
           <p className="text-[#A1A1AA] italic text-lg leading-relaxed">
             "{text}"
           </p>
        </div>
     </div>
  </div>
);

// --- MAIN PAGE ---
export const Lumi = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-fuchsia-500/30 font-sans overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-12 px-4 md:px-8 max-w-[1000px] mx-auto">
        
        {/* --- 1. HEADER & HERO --- */}
        <RevealOnScroll>
          <div className="mb-24">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-[#525252] hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm uppercase tracking-wider">Back to projects</span>
            </Link>

            <h1 className="text-5xl md:text-8xl font-bold mb-6">
              Lumi<span className="text-fuchsia-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-8">
              Bringing closeness to distance. <br />
              A lightweight app for couples and friends to share instant signals.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">UX Research</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">Interaction Design</span>
              <span className="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-xs font-mono text-fuchsia-400">Emotional UX</span>
            </div>

            {/* HERO IMAGE */}
            <div className="w-full aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/5 relative group shadow-2xl shadow-fuchsia-900/20">
               <img 
                 src={LumiMock} 
                 alt="Lumi App Mockup" 
                 className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-30 pointer-events-none"></div>
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
               <span className="text-white">Emotional UX</span>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- SHIMA 1: INTRO --- */}
        <RevealOnScroll>
          <ShimaQuote 
            title="Hi, I'm Shima." 
            text="I’m the little mascot of Lumi. I’ll guide you through how this app was born. Starting with the problem we solved." 
          />
        </RevealOnScroll>


        {/* --- 3. THE PROBLEM --- */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
             <div className="sticky top-32">
                <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-widest mb-4 block">The Problem</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Staying close feels heavy.</h2>
                <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
                   Through conversations with couples and friends in long-distance situations, I identified that staying emotionally close across distance is difficult.
                </p>
                <p className="text-[#A1A1AA] text-lg leading-relaxed">
                   Messages and calls take time and effort, so small moments of connection often get lost.
                </p>
             </div>
             
             {/* Pain Points Grid */}
             <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Clock className="text-fuchsia-500" size={20}/> Lack of Immediacy</div>
                   <p className="text-[#A1A1AA] text-sm">Messaged or calls take time, so spontaneous moments are lost.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Heart className="text-fuchsia-500" size={20}/> Emotional Gap</div>
                   <p className="text-[#A1A1AA] text-sm">Irregular communication leads to feeling less present in each other's lives.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><MessageCircle className="text-fuchsia-500" size={20}/> Overloaded Channels</div>
                   <p className="text-[#A1A1AA] text-sm">Chats carry expectations, making it hard to share light, playful interactions.</p>
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- SHIMA 2: SOLUTION INTRO --- */}
        <RevealOnScroll>
          <ShimaQuote 
            text="We needed something lighter. Less text, more feeling. That's where I come in!" 
          />
        </RevealOnScroll>


        {/* --- 4. THE SOLUTION --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Solution</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* CARD 1: SIGNALS */}
                <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-500 flex flex-col">
                   <div className="h-72 bg-[#151515] overflow-hidden relative flex items-center justify-center p-6">
                      <img 
                        src={LumiSend} 
                        alt="Playful Signals" 
                        className="w-full h-full object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-500" 
                      />
                   </div>
                   
                   <div className="p-8 mt-auto">
                      <h4 className="text-xl font-bold mb-3 text-white">Playful Signals</h4>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed">
                        Send a Lumi with one tap to instantly show presence and care. No text needed.
                      </p>
                   </div>
                </div>

                {/* CARD 2: MOODS */}
                <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-500 flex flex-col">
                   <div className="h-72 bg-[#151515] overflow-hidden relative flex items-center justify-center p-6">
                      <img 
                        src={LumiMoodSmall} 
                        alt="Mood Check-in" 
                        className="w-full h-full object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-500" 
                      />
                   </div>
                   <div className="p-8 mt-auto">
                      <h4 className="text-xl font-bold mb-3 text-white">Mood Check-ins</h4>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed">
                        Share how you feel with a visual reaction from Shima, creating empathy at a glance.
                      </p>
                   </div>
                </div>

                {/* CARD 3: MOMENTS */}
                <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-500 flex flex-col">
                   <div className="h-72 bg-[#151515] overflow-hidden relative flex items-center justify-center p-6">
                      <img 
                        src={LumiWishSmall} 
                        alt="Shared Moments" 
                        className="w-full h-full object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-500" 
                      />
                   </div>
                   <div className="p-8 mt-auto">
                      <h4 className="text-xl font-bold mb-3 text-white">Shared Moments</h4>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed">
                        Keep a simple counter of highlights, making small interactions feel meaningful.
                      </p>
                   </div>
                </div>

             </div>
          </div>
        </RevealOnScroll>

       {/* --- 5. USER GROUPS --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/10 flex-grow"></div>
                <span className="text-[#525252] font-mono text-xs uppercase tracking-widest">Who we design for</span>
                <div className="h-px bg-white/10 flex-grow"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* PERSONA 1 */}
                <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                        <img src={ManImg} alt="Levin" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Levin, 31</h4>
                         <span className="text-[#525252] text-xs uppercase">Partner in LDR</span>
                      </div>
                   </div>
                   <blockquote className="text-[#A1A1AA] italic mb-6">"Even a tiny signal helps me feel close when I’m busy."</blockquote>
                   <ul className="space-y-3 text-sm text-[#A1A1AA]">
                      <li className="flex items-start gap-3">
                        <span className="text-fuchsia-500 shrink-0 mt-[2px]">•</span> 
                        <span>Needs <span className="text-white font-semibold">quick gestures</span> during work</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-fuchsia-500 shrink-0 mt-[2px]">•</span> 
                        <span>Wants to <span className="text-white font-semibold">share moods</span> without starting a chat</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-fuchsia-500 shrink-0 mt-[2px]">•</span> 
                        <span>Values <span className="text-white font-semibold">rituals</span> that strengthen bonds</span>
                      </li>
                   </ul>
                </div>

                {/* PERSONA 2 */}
                <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                        <img src={WomanImg} alt="Maria" className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold">Maria, 52</h4>
                         <span className="text-[#525252] text-xs uppercase">Mother</span>
                      </div>
                   </div>
                   <blockquote className="text-[#A1A1AA] italic mb-6">"I just want to feel included in my daughter’s life without long calls."</blockquote>
                   <ul className="space-y-3 text-sm text-[#A1A1AA]">
                      <li className="flex items-start gap-3">
                        <span className="text-fuchsia-500 shrink-0 mt-[2px]">•</span> 
                        <span>Needs <span className="text-white font-semibold">simple signals</span> of presence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-fuchsia-500 shrink-0 mt-[2px]">•</span> 
                        <span>Wants a <span className="text-white font-semibold">shared calendar</span> for important dates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-fuchsia-500 shrink-0 mt-[2px]">•</span> 
                        <span>Feels <span className="text-white font-semibold">pressure</span> when calls or texts take too much time</span>
                      </li>
                   </ul>
                </div>

             </div>
          </div>
        </RevealOnScroll>


        {/* --- SHIMA 3: INSIGHTS --- */}
        <RevealOnScroll>
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 mb-32 relative overflow-hidden">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  <img src={LumiImg} alt="Shima" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white">Hi, I am back.</h3>
             </div>
             <p className="text-[#A1A1AA] mb-8 max-w-2xl">
                Based on what we learned from users, let’s pin down the core principles that keep Lumi simple, playful, and focused on emotions.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-fuchsia-500 font-mono text-xs block mb-2">INSIGHT #1</span>
                   <h5 className="text-white font-bold mb-2">Lightweight signals keep bonds alive.</h5>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-fuchsia-500 font-mono text-xs block mb-2">INSIGHT #2</span>
                   <h5 className="text-white font-bold mb-2">Playfulness creates empathy.</h5>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                   <span className="text-fuchsia-500 font-mono text-xs block mb-2">INSIGHT #3</span>
                   <h5 className="text-white font-bold mb-2">Boundaries protect simplicity.</h5>
                </div>
             </div>
          </div>
        </RevealOnScroll>

        {/* --- USER FLOW --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <span className="text-[#525252] font-mono text-xs uppercase tracking-widest">Logic & Architecture</span>
                <div className="h-px bg-white/10 flex-grow"></div>
             </div>

             <div className="flex flex-col gap-12">
                <div className="max-w-3xl">
                   <h3 className="text-3xl font-bold mb-6 text-white">How users interact with Lumi</h3>
                   <p className="text-[#A1A1AA] text-lg leading-relaxed mb-4">
                      To address the challenge of overloaded communication, I mapped out the key flows to be as linear as possible.
                   </p>
                   <p className="text-[#A1A1AA] text-lg leading-relaxed">
                      The diagram shows the <span className="text-white font-semibold">three core loops</span> (Sending, Mood, Wish). 
                      The goal was to guide users from opening the app to sharing a moment without getting lost in nested menus.
                   </p>
                </div>
                
                {/* Flow Image Container */}
                <div className="w-full bg-[#111] border border-white/5 p-4 md:p-8 rounded-3xl group hover:border-fuchsia-500/30 transition-colors">
                   <img 
                     src={LumiUserFlow} 
                     alt="Lumi User Flow Architecture" 
                     className="w-full h-auto object-contain rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" 
                   />
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- SHIMA 4: WIREFRAMES INTRO --- */}
        <RevealOnScroll>
           <ShimaQuote text="Here are the first sketches of my home! Not pretty yet, but the structure is there." />
        </RevealOnScroll>


        {/* --- 6. WIREFRAMES --- */}
        <RevealOnScroll>
          <div className="mb-32">
            <div className="flex items-end justify-between mb-12">
               <div>
                 <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-widest mb-4 block">Early Concepts</span>
                 <h2 className="text-3xl font-bold">Rough Sketches</h2>
                 <p className="text-[#A1A1AA] mt-4 max-w-xl">
                   With the flows defined, I translated Lumi’s interactions into lo-fi wireframes to explore structure.
                 </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* CONTAINER 1: Onboarding & Pairing + Send Lumi */}
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center gap-8">
                  <img src={LumiLoFiOnBoard} alt="Wireframe Onboarding" className="h-[400px] w-auto object-contain opacity-80" />
                  <img src={LumiLoFiSend} alt="Wireframe Sending" className="h-[400px] w-auto object-contain opacity-80" />
                  
                  <span className="text-[#A1A1AA] font-mono text-xs mt-4 uppercase tracking-wider">
                    Onboarding & Sending Cycle
                  </span>
               </div>

               {/* CONTAINER 2: Mood Check + Make a Wish */}
               <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 flex flex-col items-center gap-8">
                  <img src={LumiLoFiMood} alt="Wireframe Mood" className="h-[400px] w-auto object-contain opacity-80" />
                  <img src={LumiLoFiWish} alt="Wireframe Wish" className="h-[400px] w-auto object-contain opacity-80" />
                  
                  <span className="text-[#A1A1AA] font-mono text-xs mt-4 uppercase tracking-wider">
                    Mood Check & Make a Wish
                  </span>
               </div>

            </div>
          </div>
        </RevealOnScroll>


        {/* --- SHIMA 5: FINAL UI INTRO --- */}
        <RevealOnScroll>
           <ShimaQuote text="Look how colorful it got! I love the pink. It feels warm and friendly now." />
        </RevealOnScroll>


        {/* --- 7. FINAL UI --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-widest mb-4 block text-center">Refined Design</span>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Where Lumi Shines</h2>
             <p className="text-[#A1A1AA] text-center max-w-2xl mx-auto mb-16">
               Each screen was polished for clarity, accessibility, and emotional impact.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* 1. Home Screen */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Home Screen</h4>
                      <p className="text-[#A1A1AA] text-sm">Lumi’s emotional hub. One tap to send a signal.</p>
                   </div>
                   <img src={LumiPhone} alt="Home Screen" className="w-full h-auto rounded-lg shadow-2xl" />
                </div>
                
                {/* 2. Mood Screen */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 md:translate-y-12">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Mood Screen</h4>
                      <p className="text-[#A1A1AA] text-sm">Shima’s playful reactions add warmth.</p>
                   </div>
                   
                   <div className="flex justify-center">
                     <img 
                       src={LumiMood} 
                       alt="Mood Screen" 
                       className="w-[70%] h-auto rounded-lg shadow-2xl object-contain" 
                     />
                   </div>
                </div>

                {/* 3. Wish List */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Wish List</h4>
                      <p className="text-[#A1A1AA] text-sm">Light planning tool for shared activities.</p>
                   </div>
                   <img src={LumiWish} alt="Wish List Screen" className="w-full h-auto rounded-lg shadow-2xl" />
                </div> 

                {/* 4. Pairing */}
                <div className="bg-[#111] rounded-3xl p-8 border border-white/5 md:translate-y-12">
                   <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Pairing</h4>
                      <p className="text-[#A1A1AA] text-sm">A short code connects two users within seconds.</p>
                   </div>
                   <img src={LumiPair} alt="Pairing Screen" className="w-full h-auto rounded-lg shadow-2xl" />
                </div>

             </div>
          </div>
        </RevealOnScroll>


        {/* --- 8. LEARNINGS, NEXT STEPS & CLOSING --- */}
        <RevealOnScroll>
          <div className="mb-32 border-t border-white/10 pt-24">

            {/* GRID: Learnings & Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
               
               {/* COLUMN 1: What I Learned */}
               <div>
                  <h3 className="text-3xl font-bold mb-6 text-white">What I Learned</h3>
                  <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
                     <p>
                        Designing Lumi showed me how emotions translate into interactions design. Quick feedback sessions revealed that users felt more connected through Shima’s playful reactions than through long chat-like exchanges.
                     </p>
                     <p>
                        The insight was clear: <span className="text-white font-semibold">Simplicity is not about cutting features</span>, but about removing friction so gestures feel effortless.
                     </p>
                     <p>
                        I also learned that <span className="text-white font-semibold">accessibility isn’t optional</span> - people of different ages and tech levels need clarity and intuitive flows to feel included.
                     </p>
                  </div>
               </div>

               {/* COLUMN 2: Next Steps */}
               <div className="bg-[#111] p-8 rounded-3xl border border-white/5 h-fit">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="text-fuchsia-500 text-xl">🚀</span>
                     <h3 className="text-xl font-bold text-white">Next Steps</h3>
                  </div>
                  <ul className="space-y-4 text-[#A1A1AA]">
                     <li className="flex gap-3">
                        <span className="text-fuchsia-500 mt-1">→</span>
                        <span>Prototype animations to amplify Shima’s emotional responses and add subtle button feedback.</span>
                     </li>
                     <li className="flex gap-3">
                        <span className="text-fuchsia-500 mt-1">→</span>
                        <span>Extend accessibility with full screen reader support.</span>
                     </li>
                     <li className="flex gap-3">
                        <span className="text-fuchsia-500 mt-1">→</span>
                        <span>Cross-platform testing on iOS & Android, followed by structured usability sessions.</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* FULL WIDTH: Closing Thoughts */}
            <div className="bg-[#151515] p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                   <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0 shadow-lg">
                      <img src={LumiImg} alt="Shima Mascot" className="w-full h-full object-cover" />
                   </div>

                   <div>
                     <h3 className="text-xl font-bold text-white mb-4">Closing Thoughts</h3>
                     <p className="text-[#A1A1AA] italic leading-relaxed text-lg">
                        "Lumi became more than a prototype - it turned into a daily ritual of closeness. 
                        Testing confirmed that even minimal gestures, when designed with empathy, can make distance feel smaller. 
                        For me, this project was both a UX lesson in clarity and a personal reflection on staying connected to loved ones."
                     </p>
                   </div>
                </div>
            </div>

          </div>
        </RevealOnScroll>


        {/* --- 9. NEXT PROJECT (LEXI) --- */}
        <RevealOnScroll>
          <Link to="/lexi" className="group block border-t border-white/10 pt-24 pb-24">
             <div className="flex justify-between items-center">
                <div>
                  <span className="text-[#525252] font-mono text-xs uppercase tracking-widest mb-2 block">Next Case Study</span>
                  <h4 className="text-3xl md:text-5xl font-bold group-hover:text-blue-500 transition-colors">Lexi</h4>
                </div>
                <ArrowRight size={48} className="text-[#525252] group-hover:text-blue-500 group-hover:translate-x-4 transition-all" />
             </div>
          </Link>
        </RevealOnScroll>

      </main>
    </div>
  );
};