import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import HeroDesktop from '../assets/fithubhero.avif'
import HeroPhone from '../assets/fithubherophone.avif'
import DashBoardSm from '../assets/dashboardsm.avif'
import CommuSm from '../assets/commusm.avif'
import ProgressSm from '../assets/progresssm.avif'
import CoachFlow from '../assets/coachflow.avif'
import ClientFlow from '../assets/clientflow.avif'
import ClientWire from '../assets/clientwire.avif'
import DetailWire from '../assets/detailwire.avif'
import WorkoutWire from '../assets/workoutwire.avif'
import NutriWire from '../assets/nutriwire.avif'
import ClientLofi from '../assets/clientlofi.avif'
import DetailLofi from '../assets/detaillofi.avif'
import WorkoutLofi from '../assets/workoutlofi.avif'
import NutriLofi from '../assets/nutrilofi.avif'
import FinalCoachVideo from '../assets/detailhifi.mp4'
import WorkoutHiFi from '../assets/workouthifi.png'
import NutriHiFi from '../assets/nutrihifi.png'


const HeroDesktopImg = HeroDesktop; 
const HeroMobileImg = HeroPhone;
const SolDashboardImg = DashBoardSm;  
const SolChatImg = CommuSm;        
const SolProgressImg = ProgressSm;  
const CoachFlowImg = CoachFlow;  
const ClientFlowImg = ClientFlow;       
const WireCoachOverviewImg = ClientWire; 
const WireCoachDetailImg = DetailWire;   
const WireClientWorkoutImg = WorkoutWire; 
const WireClientNutritionImg = NutriWire; 
const LofiCoachOverviewImg = ClientLofi; 
const LofiCoachDetailImg = DetailLofi;  
const LofiClientWorkoutImg = WorkoutLofi; 
const LofiClientNutritionImg = NutriLofi;
const FinalClientWorkoutImg = WorkoutHiFi;  
const FinalClientNutritionImg = NutriHiFi; 

// Icons
import { Layers, Users, MessageSquare, Activity, Cpu, Database, LayoutTemplate, Settings, Target, Share2, Dumbbell, UserCheck, Smile,  ArrowDown } from 'lucide-react';

// --- SCROLL ANIMATION HELPER ---
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

export const FitHub = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 font-sans overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-12 px-4 md:px-8 max-w-[1000px] mx-auto">
        
        {/* --- 1. HERO SECTION --- */}
        <RevealOnScroll>
          <div className="mb-32"> 
            <Link to="/#projects" className="inline-flex items-center gap-2 text-[#525252] hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-sm uppercase tracking-wider">Back to projects</span>
            </Link>

            <h1 className="text-5xl md:text-8xl font-bold mb-6">
              FitHub<span className="text-emerald-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-8">
              Designing a unified workspace for modern fitness coaching. <br />
              Centralizing clients, workouts, and meals into one clean system.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">UX / UI Design</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA]">SaaS</span>
              <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">Client Structure</span>
            </div>

            {/* HERO COMPOSITE - Breakout Layout */}
            <div className="relative w-full">
               
               {/* 1. DESKTOP BACKGROUND (Container) */}
               <div className="w-full h-[500px] md:h-[700px] bg-[#111] rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative z-0">

                  <img 
                    src={HeroDesktopImg} 
                    alt="FitHub Desktop Dashboard" 
                    className="w-full h-full object-cover object-top opacity-90" 
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none"></div>
               </div>

               {/* 2. PHONE OVERLAY (Breakout) */}
               <div className="absolute -bottom-12 -right-4 md:-bottom-16 md:-right-12 w-[40%] md:w-[35%] z-10 drop-shadow-2xl">

                  <img 
                    src={HeroMobileImg} 
                    alt="FitHub Mobile App" 
                    className="w-full h-auto rotate-[-2deg]" 
                  />
               </div>

            </div>
          </div>
        </RevealOnScroll>


        {/* --- 2. STATS GRID --- */}
        <RevealOnScroll delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-8 mb-24 font-mono text-xs md:text-sm">
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><Users size={14}/> Role</div>
               <span className="text-white">UX Designer - Researcher</span>
             </div>
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><Activity size={14}/> Duration</div>
               <span className="text-white">4 Weeks</span>
             </div>
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><Cpu size={14}/> AI Tools</div>
               <span className="text-white">ChatGPT, Leonardo, Perplexity</span>
             </div>
             <div>
               <div className="text-[#525252] mb-2 uppercase tracking-wider flex items-center gap-2"><Layers size={14}/> Focus</div>
               <span className="text-white">Client Structure & Flow</span>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 3. THE PROBLEM --- */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
             <div className="sticky top-32">
                <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4 block">The Challenge</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Managing clients shouldn’t feel like managing spreadsheets.</h2>
                <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
                   Too many tools. Scattered data. Disconnected clients. Modern coaching deserves a system that reduces friction, not adds to it.
                </p>
             </div>
             
             {/* Pain Points Grid */}
             <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><LayoutTemplate className="text-emerald-500" size={20}/> Fragmented Workflows</div>
                   <p className="text-[#A1A1AA] text-sm">Coaches switch between apps and spreadsheets instead of focusing on clients.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Database className="text-emerald-500" size={20}/> No Unified Tracking</div>
                   <p className="text-[#A1A1AA] text-sm">Data is scattered. Workouts, meals and notes never live in one place.</p>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                   <div className="flex items-center gap-3 mb-3 text-white font-bold"><Activity className="text-emerald-500" size={20}/> Low Engagement</div>
                   <p className="text-[#A1A1AA] text-sm">Without visibility and feedback, clients lose motivation fast.</p>
                </div>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 4. THE SOLUTION --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">The Solution</h2>
             
             <div className="flex flex-col gap-12">
                
                {/* CARD 1 */}
                <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 grid grid-cols-1 md:grid-cols-2">
                   {/* Text Side */}
                   <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                      <div className="mb-6">
                         <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                            <LayoutTemplate className="text-emerald-500" size={24} />
                         </div>
                         <h4 className="text-2xl font-bold mb-4 text-white">Unified Dashboard</h4>
                         <p className="text-[#A1A1AA] text-lg leading-relaxed">
                           Coaches operate from a single, structured view. Sessions, payments, and client status are aligned for absolute clarity, reducing admin time significantly.
                         </p>
                      </div>
                   </div>
                   {/* Image Side */}
                   <div className="bg-[#151515] relative flex items-center justify-center p-8 order-1 md:order-2 min-h-[300px] md:min-h-[400px]">

                      <img 
                        src={SolDashboardImg} 
                        alt="Unified Dashboard" 
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-500 max-h-[350px]" 
                      />
                   </div>
                </div>


                {/* CARD 2 */}
                <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 grid grid-cols-1 md:grid-cols-2">
                   <div className="bg-[#151515] relative flex items-center justify-center p-8 min-h-[300px] md:min-h-[400px]">
                      <img 
                        src={SolChatImg} 
                        alt="Human Communication" 
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-500 max-h-[350px]" 
                      />
                   </div>
                   {/* Text Side */}
                   <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                         <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                            <MessageSquare className="text-emerald-500" size={24} />
                         </div>
                         <h4 className="text-2xl font-bold mb-4 text-white">Human Communication</h4>
                         <p className="text-[#A1A1AA] text-lg leading-relaxed">
                           Built-in messaging replaces scattered WhatsApp chats and keeps motivation within context. Feedback happens exactly where the progress is tracked.
                         </p>
                      </div>
                   </div>
                </div>


                {/* CARD 3*/}
                <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 grid grid-cols-1 md:grid-cols-2">
                   {/* Text Side */}
                   <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                      <div className="mb-6">
                         <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                            <Activity className="text-emerald-500" size={24} />
                         </div>
                         <h4 className="text-2xl font-bold mb-4 text-white">Visible Progress</h4>
                         <p className="text-[#A1A1AA] text-lg leading-relaxed">
                           Programs, streaks and weekly goals translate effort into measurable growth. Visualizing consistency helps clients stay engaged longer.
                         </p>
                      </div>
                   </div>
                   {/* Image Side */}
                   <div className="bg-[#151515] relative flex items-center justify-center p-8 order-1 md:order-2 min-h-[300px] md:min-h-[400px]">
                      <img 
                        src={SolProgressImg} 
                        alt="Visible Progress" 
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-500 max-h-[350px]" 
                      />
                   </div>
                </div>

             </div>
          </div>
        </RevealOnScroll>

        {/* --- 5. COACHING ECOSYSTEM --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex flex-col items-center text-center mb-20">
                <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#A1A1AA] mb-8">
                   Understanding the Coaching Ecosystem
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight">
                   FitHub was designed around the real workflows of modern coaching.
                </h2>
                <p className="text-[#A1A1AA] text-lg md:text-xl leading-relaxed max-w-3xl">
                   Balancing the needs of independent trainers, small gyms and their clients in one connected system.
                </p>
             </div>

             {/* The 3 Points List */}
             <div className="flex flex-col gap-16 max-w-3xl mx-auto">
                
                {/* POINT 1: Independent Coach */}
                <div className="group">
                   <div className="flex items-center gap-6 mb-6">
                      <Settings className="text-emerald-500" size={32} />
                      <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent w-32 md:w-64"></div>
                   </div>
                   
                   {/* Content Block */}
                   <div>
                      <h4 className="text-2xl font-bold text-white mb-4">Independent Coach</h4>
                      <div className="space-y-2 text-[#A1A1AA] text-lg leading-relaxed">
                         <p>Handles up to 20 clients across multiple tools.</p>
                         <p>Needs one reliable workspace to manage sessions, payments and client progress.</p>
                      </div>
                   </div>
                </div>

                {/* POINT 2: Clients */}
                <div className="group">
                   <div className="flex items-center gap-6 mb-6">
                      <Target className="text-emerald-500" size={32} />
                      <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent w-32 md:w-64"></div>
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold text-white mb-4">Clients</h4>
                      <div className="space-y-2 text-[#A1A1AA] text-lg leading-relaxed">
                         <p>Seeks visible progress, quick feedback, and accountability.</p>
                         <p>Loses motivation when updates are delayed or scattered.</p>
                      </div>
                   </div>
                </div>

                {/* POINT 3: FitHub System View */}
                <div className="group">
                   <div className="flex items-center gap-6 mb-6">
                      <Share2 className="text-emerald-500" size={32} />
                      <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent w-32 md:w-64"></div>
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold text-white mb-4">FitHub System View</h4>
                      <div className="space-y-2 text-[#A1A1AA] text-lg leading-relaxed">
                         <p>Connects both sides in one shared environment.</p>
                         <p>Reducing friction, surfaces insights and automating routine work.</p>
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </RevealOnScroll>


        {/* --- 6. RESEARCH & AI --- */}
        <RevealOnScroll>
          <div className="mb-32 max-w-4xl mx-auto">
             
             {/* Intro Header */}
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                   From fragmented workflows to a unified coaching system.
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
                   Turning research insights into structure. Every decision focused on reducing friction, strengthening engagement and scaling effortlessly.
                </p>
             </div>

             <div className="space-y-12">
                 
                 {/* Text Block & Insight Quote */}
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Research & Core Insights</h3>
                    <p className="text-[#A1A1AA] leading-relaxed mb-8">
                       AI-assisted analysis and coach interviews revealed three recurring pain points: tool overload, fragmented data and weak motivation loops. The goal shifted from control to clarity.
                    </p>

                    {/* INSIGHT BOX */}
                    <div className="bg-white/5 border-l-4 border-emerald-500 p-8 rounded-r-xl">
                       <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-3 block">INSIGHT</span>
                       <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                          "Coaches don’t need complexity. <br className="hidden md:block"/>
                          They need one dependable system that stays out of the way."
                       </p>
                    </div>
                 </div>

                 {/* AI BOX */}
                 <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 blur-[80px] rounded-full pointer-events-none"></div>
                    
                    <div className="relative z-10">
                       <div className="flex items-center gap-3 mb-6">
                          <span className="text-emerald-400 text-2xl">✨</span>
                          <h4 className="text-xl font-bold text-white">AI in the Research Process</h4>
                       </div>
                       <p className="text-[#A1A1AA] leading-relaxed max-w-2xl">
                          <span className="text-white">ChatGPT</span> was used to draft principle prompts and structure research questions. 
                          Insights were collected from online coach communities, fitness case studies, and behavioral reports accelerating synthesis and reducing noise.
                       </p>
                    </div>
                 </div>

             </div>
          </div>
        </RevealOnScroll>


        {/* --- 7. ARCHITECTURE & PRINCIPLES --- */}
        <RevealOnScroll>
          <div className="mb-32">
             {/* Header Title */}
             <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">
                From Principles to Design
             </h3>

             {/* The 3-Card Flow Stack */}
             <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
                
                {/* CARD 1: Gym Layer */}
                <div className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full text-center">
                   <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                      <Dumbbell className="text-emerald-500" size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-4">Gym</h4>
                   <p className="text-[#A1A1AA] text-lg leading-relaxed">
                      Subscribe to FitHub Packages and manages coach access.
                   </p>
                </div>

                {/* Arrow Down */}
                <ArrowDown className="text-emerald-500/50" size={32} />

                {/* CARD 2: Coach Layer */}
                <div className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full text-center">
                   <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                      <UserCheck className="text-emerald-500" size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-4">Coach</h4>
                   <p className="text-[#A1A1AA] text-lg leading-relaxed">
                      Organizes clients, tracks progress and provides personalized feedback.
                   </p>
                </div>

                {/* Arrow Down */}
                <ArrowDown className="text-emerald-500/50" size={32} />

                {/* CARD 3: Client Layer */}
                <div className="bg-[#111] border border-white/10 p-8 rounded-3xl w-full text-center">
                   <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                      <Smile className="text-emerald-500" size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-4">Client</h4>
                   <p className="text-[#A1A1AA] text-lg leading-relaxed">
                      Follows plans, logs progress and stays connected through feedback loops.
                   </p>
                </div>

             </div>
             
             {/* Principle Quote */}
             <div className="text-center py-12 mt-16 border-t border-b border-white/10">
                <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4 block">PRINCIPLE</span>
                <p className="text-xl md:text-2xl text-white font-serif italic max-w-2xl mx-auto leading-relaxed">
                   "Each role sees only what’s relevant → minimal context-switching, maximum focus."
                </p>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 8. SYSTEM IN MOTION (FLOWS) --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <span className="text-[#525252] font-mono text-xs uppercase tracking-widest">Logic & Architecture</span>
                <div className="h-px bg-white/10 flex-grow"></div>
             </div>
             
             <div className="max-w-3xl mb-16">
               <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">System in Motion</h3>
               <p className="text-[#A1A1AA] text-lg leading-relaxed">
                 Beyond static roles, FitHub’s architecture shows how data, feedback and motivation flow through every interaction.
               </p>
             </div>

             {/* FLOWS CONTAINER*/}
             <div className="flex flex-col gap-24">
               
               {/* 1. COACH FLOW */}
               <div>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                     <h4 className="text-xl font-bold text-white">Coach Flow</h4>
                  </div>
                  <div className="w-full bg-[#111] border border-white/5 p-4 md:p-12 rounded-3xl">
                     <img 
                       src={CoachFlowImg} 
                       alt="Coach User Flow" 
                       className="w-full h-auto object-contain rounded-lg opacity-90" 
                     />
                  </div>
               </div>

               {/* 2. CLIENT FLOW */}
               <div>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                     <h4 className="text-xl font-bold text-white">Client Flow</h4>
                  </div>
                  <div className="w-full bg-[#111] border border-white/5 p-4 md:p-12 rounded-3xl">
                     <img 
                       src={ClientFlowImg} 
                       alt="Client User Flow" 
                       className="w-full h-auto object-contain rounded-lg opacity-90" 
                     />
                  </div>
               </div>

             </div>
          </div>
        </RevealOnScroll>


       {/* --- 9. WIREFRAMES (Structure to Flow) --- */}
        <RevealOnScroll>
          <div className="mb-32">
            
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  From Structure to Flow
               </h2>
               <div className="space-y-4 text-[#A1A1AA] text-lg leading-relaxed">
                  <p>
                     After mapping the ecosystem, I created wireframes to define key layouts and interactions.
                  </p>
                  <p>
                     Once the core flow was validated, I translated them into Lo-Fi prototypes. Focused purely on movement and logic, not visuals.
                  </p>
               </div>
            </div>

            {/* 2. COACH WIREFRAMES BLOCK */}
            <div className="flex flex-col items-center mb-24">
               <span className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-12 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Coach Wireframes
               </span>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Client Overview</span>
                     <div className="w-full bg-[#111] p-4 rounded-2xl border border-white/5">
                        <img src={WireCoachOverviewImg} alt="Coach Client Overview" className="w-full h-auto object-contain opacity-90" />
                     </div>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Client Detail</span>
                     <div className="w-full bg-[#111] p-4 rounded-2xl border border-white/5">
                        <img src={WireCoachDetailImg} alt="Coach Client Detail" className="w-full h-auto object-contain opacity-90" />
                     </div>
                  </div>
               </div>
            </div>

            {/* 3. CLIENT WIREFRAMES BLOCK */}
            <div className="flex flex-col items-center mb-16">
               <span className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-12 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Client Wireframes
               </span>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Workout Screen</span>
                     <div className="w-full bg-[#111] p-4 rounded-2xl border border-white/5">
                        <img src={WireClientWorkoutImg} alt="Client Workout Screen" className="w-full h-auto object-contain opacity-90" />
                     </div>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Nutrition</span>
                     <div className="w-full bg-[#111] p-4 rounded-2xl border border-white/5">
                        <img src={WireClientNutritionImg} alt="Client Nutrition Screen" className="w-full h-auto object-contain opacity-90" />
                     </div>
                  </div>
               </div>
            </div>

            {/* 4. Footer Text */}
            <div className="text-center max-w-2xl mx-auto border-t border-white/10 pt-12">
               <p className="text-[#A1A1AA] font-medium leading-relaxed">
                  Moving from wireframes to Lo-Fi, my goal was to keep interactions lean and intentional. Refining layout logic before adding visual personality.
               </p>
            </div>

          </div>
        </RevealOnScroll>

        {/* --- 10. LO-FI PROTOTYPES --- */}
        <RevealOnScroll>
          <div className="mb-32">
            
            {/* 1. COACH LO-FI BLOCK */}
            <div className="flex flex-col items-center mb-24">
               <span className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-12 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Coach Lo-Fi
               </span>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Client Overview</span>
                     <div className="w-full bg-[#111] p-4 rounded-2xl border border-white/5">
                        <img src={LofiCoachOverviewImg} alt="Lo-Fi Coach Overview" className="w-full h-auto object-contain" />
                     </div>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Client Detail</span>
                     <div className="w-full bg-[#111] p-4 rounded-2xl border border-white/5">
                        <img src={LofiCoachDetailImg} alt="Lo-Fi Coach Detail" className="w-full h-auto object-contain" />
                     </div>
                  </div>
               </div>
            </div>

            {/* 2. CLIENT LO-FI BLOCK */}
            <div className="flex flex-col items-center mb-24">
               <span className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-12 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Client Lo-Fi
               </span>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl px-4">
                  
                  {/* Screen 1 */}
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Workout Screen</span>
                     <div className="w-full bg-[#111] p-4 rounded-3xl border border-white/5 h-[450px] flex items-center justify-center">
                        <img 
                          src={LofiClientWorkoutImg} 
                          alt="Lo-Fi Client Workout" 
                          className="w-full h-full object-contain" 
                        />
                     </div>
                  </div>

                  {/* Screen 2 */}
                  <div className="flex flex-col items-center">
                     <span className="text-white font-bold text-sm mb-6">Nutrition</span>
                     <div className="w-full bg-[#111] p-4 rounded-3xl border border-white/5 h-[450px] flex items-center justify-center">
                        <img 
                          src={LofiClientNutritionImg} 
                          alt="Lo-Fi Client Nutrition" 
                          className="w-full h-full object-contain" 
                        />
                     </div>
                  </div>

               </div>
            </div>

            {/* 3. PRINCIPLES BOX */}
            <div className="max-w-3xl mx-auto px-2">
               <div className="bg-white text-black rounded-3xl p-12 text-center shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <span className="font-bold text-sm uppercase tracking-widest mb-4 block text-black/60">
                     PRINCIPLES
                  </span>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed">
                     Good structure disappears in the final design but it's the reason everything feels effortless.
                  </p>
               </div>
            </div>

          </div>
        </RevealOnScroll>


        {/* --- 10. ITERATION (Visual Fatigue) --- */}
        <RevealOnScroll>
           <div className="mb-32 bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">From Complexity to Clarity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                    <h4 className="text-[#525252] font-mono text-xs uppercase mb-2">The Problem</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">
                       Early wireframe feedback showed a pattern of <span className="text-white font-semibold">visual fatigue</span>. Especially among coaches managing multiple clients, the density of data was overwhelming.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-emerald-500 font-mono text-xs uppercase mb-2">The Fix</h4>
                    <p className="text-[#A1A1AA] leading-relaxed">
                       By simplifying the layout and refining information hierarchy, interactions became easier to scan. <span className="text-white font-semibold">Good structure disappears</span> in the final design.
                    </p>
                 </div>
              </div>
           </div>
        </RevealOnScroll>


        {/* --- 11. FINAL UI --- */}
        <RevealOnScroll>
          <div className="mb-32">
             <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4 block text-center">Final Interface</span>
             <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Calm, Connected Coaching</h2>

             {/* COACH VIEW (Desktop + Video Stack) */}
             <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5 mb-16">
                <div className="mb-12 max-w-2xl">
                   <h4 className="text-2xl font-bold text-white mb-2">Coach View</h4>
                   <p className="text-[#A1A1AA] text-sm leading-relaxed">
                     Client overview simplifies progress tracking at scale → giving coaches clarity across all clients in one glance.
                   </p>
                </div>
                
                {/* STACK: Image & Video */}
                <div className="flex flex-col gap-8">
                   
                   {/* 1. Static Desktop Image */}
                   <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                      <img 
                        src={HeroDesktopImg} 
                        alt="Coach UI Desktop Overview" 
                        className="w-full h-auto object-cover" 
                      />
                   </div>

                   {/* 2. Interaction Video */}
                   <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                      <video 
                        src={FinalCoachVideo} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto object-cover" 
                      />
                   </div>

                </div>
             </div>

             <div className="h-32"></div>

             {/* CLIENT FINAL UI BLOCK */}
             <div className="flex flex-col items-center">
                
                {/* Pill Label */}
                <span className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-16 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                   Client Final Interface
                </span>

                {/* 2 Phones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full max-w-5xl px-4">
                   
                   {/* Phone 1: Workout */}
                   <div className="flex flex-col items-center">
                      <h4 className="text-xl font-bold text-white mb-8">Workout Screen</h4>
                      <div className="relative w-full max-w-[350px]">
                         <img 
                           src={FinalClientWorkoutImg} 
                           alt="Final Client Workout UI" 
                           className="w-full h-auto drop-shadow-2xl" 
                         />
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-emerald-500/20 blur-[80px] -z-10 rounded-full"></div>
                      </div>
                   </div>

                   {/* Phone 2: Nutrition */}
                   <div className="flex flex-col items-center">
                      <h4 className="text-xl font-bold text-white mb-8">Nutrition</h4>
                      <div className="relative w-full max-w-[350px]">
                         <img 
                           src={FinalClientNutritionImg} 
                           alt="Final Client Nutrition UI" 
                           className="w-full h-auto drop-shadow-2xl" 
                         />
                         {/* Optional: Glow Effekt */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-500/20 blur-[80px] -z-10 rounded-full"></div>
                      </div>
                   </div>

                </div>
             </div>

          </div>
        </RevealOnScroll>

        {/* --- 12. LEARNINGS & NEXT STEPS --- */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-t border-white/10 pt-16">
             
             {/* Learnings */}
             <div>
                <h3 className="text-3xl font-bold mb-6 text-white">What I Learned</h3>
                <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
                   <p>
                      The biggest insight was that <span className="text-white font-semibold">efficiency doesn’t come from adding tools</span> but from reducing friction. 
                   </p>
                   <p>
                      When the interface gave each role (coach and client) a focused view, confidence increased and actions felt more intentional. This reinforced how <span className="text-white font-semibold">structure and clarity</span> are the real foundation of engagement in SaaS products.
                   </p>
                </div>
             </div>
             
             {/* Next Steps */}
             <div className="bg-[#111] p-8 rounded-3xl border border-white/5 h-fit">
                <div className="flex items-center gap-3 mb-6">
                   <span className="text-emerald-500 text-xl">🚀</span>
                   <h3 className="text-xl font-bold text-white">Looking Ahead</h3>
                </div>
                <ul className="space-y-4 text-[#A1A1AA]">
                   <li className="flex gap-3">
                      <span className="text-emerald-500 mt-1">→</span>
                      <span>Explore <span className="text-white font-semibold">adaptive dashboards</span> that adjust to user behavior (time of day, training frequency).</span>
                   </li>
                   <li className="flex gap-3">
                      <span className="text-emerald-500 mt-1">→</span>
                      <span>Real-world validation with small gyms to refine emotional tone.</span>
                   </li>
                </ul>
             </div>
          </div>
        </RevealOnScroll>


        {/* --- 13. FOOTER / NEXT --- */}
        <RevealOnScroll>
          <Link to="/#projects" className="group block border-t border-white/10 pt-24 pb-12">
             <div className="flex justify-between items-center">
                <div>
                  <span className="text-[#525252] font-mono text-xs uppercase tracking-widest mb-2 block">Back to Home</span>
                  <h4 className="text-3xl md:text-5xl font-bold group-hover:text-white transition-colors">See all Projects</h4>
                </div>
                <ArrowRight size={48} className="text-[#525252] group-hover:text-white group-hover:translate-x-4 transition-all" />
             </div>
          </Link>
        </RevealOnScroll>

      </main>
    </div>
  );
};