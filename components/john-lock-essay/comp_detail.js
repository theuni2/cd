'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Trophy, Lightbulb, Target, FileCheck, ArrowRight } from 'lucide-react';

const CompetitionDetails = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND IMAGE & OVERLAY (The "Img over text" base) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop" 
          alt="Library/Academic Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Heavy dark overlay to ensure text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        {/* subtle amber glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full" />
      </div>


      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
             style={{ borderColor: 'rgba(251, 191, 36, 0.3)', backgroundColor: 'rgba(251, 191, 36, 0.05)' }}
           >
              <Trophy size={16} color="#fbbf24" />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#fbbf24' }}>The Strategy Engine</span>
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-bold text-white">
             The 100-Hour <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Blueprint</span>
           </h2>
        </div>


        {/* --- THE GRAPHIC CONTAINER --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* LEFT: THE STRATEGY CORE (Donut Chart) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="h-full p-8 rounded-3xl border border-amber-500/20 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_0_40px_-10px_rgba(251,191,36,0.2)]">
              
              {/* Glowing Connector Line showing flow to the right */}
              <div className="hidden lg:block absolute top-1/2 -right-12 w-24 h-1 bg-gradient-to-r from-amber-500 to-transparent z-20" />

              <h3 className="text-2xl font-bold text-white mb-8">The "Golden Ratio"</h3>
              
              {/* The Chart */}
              <div className="relative w-64 h-64 mb-8">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Background Circle */}
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="transparent" />
                  {/* Writing Path (40%) - Slate */}
                  <circle cx="50" cy="50" r="40" stroke="#475569" strokeWidth="6" fill="transparent" strokeDasharray="251.2" strokeDashoffset="0" />
                  {/* Research Path (60%) - Amber Animated */}
                  <motion.circle 
                    cx="50" cy="50" r="40" 
                    stroke="#fbbf24" strokeWidth="8" fill="transparent" strokeLinecap="round"
                    strokeDasharray="251.2" // 2 * pi * r (r=40)
                    initial={{ strokeDashoffset: 251.2 }} // Start empty
                    whileInView={{ strokeDashoffset: 100.48 }} // End at 60% (251.2 * 0.4 remaining)
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                    style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.8))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-white">60<span className="text-2xl">%</span></span>
                  <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">Input Heavy</span>
                </div>
              </div>

              {/* Legend */}
              <div className="w-full space-y-3">
                <div className="flex justify-between px-4 py-3 rounded-xl bg-slate-950/50 border border-amber-500/30">
                  <span className="flex items-center gap-2 text-white font-bold"><Search size={16} className="text-amber-400"/> Deep Research</span>
                  <span className="text-amber-400">60 Hrs</span>
                </div>
                <div className="flex justify-between px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700">
                  <span className="flex items-center gap-2 text-white font-bold"><PenTool size={16} className="text-slate-400"/> Drafting & Polish</span>
                  <span className="text-slate-400">40 Hrs</span>
                </div>
              </div>

            </div>
          </motion.div>


          {/* RIGHT: THE EXECUTION PATH (Milestone Cards) */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* Connecting vertical line for mobile */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-500/20 hidden md:block lg:hidden" />

            <MilestoneCard 
              num="01" icon={<Lightbulb />} title="Deconstruction"
              desc="Breaking down prompts. Testing 3 hypotheses to find the strongest angle."
              delay={0.5}
            />
            <MilestoneCard 
              num="02" icon={<Search />} title="Deep Dive"
              desc="Analyzing 5-7 academic papers (JSTOR level). Building the evidence base."
              delay={0.7}
              highlight={true} // Highlights this card as the main research phase
            />
             <MilestoneCard 
              num="03" icon={<Target />} title="The Defense"
              desc="'Shark Tank' style session to defend your thesis outline against mentors."
              delay={0.9}
            />
             <MilestoneCard 
              num="04" icon={<FileCheck />} title="Final Polish"
              desc="Citation formatting (Chicago/APA), academic tone check, and submission."
              delay={1.1}
              isLast={true}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

// --- Sub-Component: Milestone Card ---
const MilestoneCard = ({ num, icon, title, desc, delay, highlight, isLast }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className={`relative p-6 rounded-2xl border backdrop-blur-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
      ${highlight ? 'bg-amber-900/20 border-amber-500/40 shadow-[0_0_30px_-10px_rgba(251,191,36,0.3)]' : 'bg-slate-900/60 border-white/10 hover:border-amber-500/30'}
    `}
  >
    {/* subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:to-amber-500/10 transition-all duration-500" />

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${highlight ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-amber-400'}`}>
          {React.cloneElement(icon, { size: 24 })}
        </div>
        <span className={`text-3xl font-black ${highlight ? 'text-amber-500' : 'text-slate-700'}`}>
          {num}
        </span>
      </div>
      
      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        {title}
        {isLast && <ArrowRight className="text-amber-500" size={18} />}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default CompetitionDetails;