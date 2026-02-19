'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Trophy, Quote, Star, ArrowUpRight } from 'lucide-react';

const SuccessShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#020617' }}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Real Students. <span style={{ color: '#fbbf24' }}>Real Wins.</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From John Locke shortlists to global finalists. See what our students are writing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN: WINNING ESSAY SNIPPETS */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="text-amber-400" />
              Winning Essays
            </h3>

            {/* Essay 1: Political Science */}
            <EssayCard 
              category="Political Science"
              title="Diversity is Fashionable, but is it Valuable?"
              excerpt="In today's world, few words get thrown around as often or as vaguely as 'diversity.' It's plastered across corporate reports... But amid all the celebration, a tougher question lurks underneath: has diversity become more of a buzzword than a meaningful goal?"
              award="John Locke Institute"
            />

            {/* Essay 2: Economics */}
            <EssayCard 
              category="Economics"
              title="Profit and Purpose: What Drives Our Behaviour?"
              excerpt="Human behaviour is never purely mechanical. It is shaped by hopes, fears, and the structures we live in. One of the most powerful of these structures is the pursuit of profit... but is it the signal to grow, the reward for risk, or something else entirely?"
              award="John Locke Institute"
            />
          </div>


          {/* RIGHT COLUMN: COMPETITION RESULTS (Testimonials) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="text-amber-400" />
              Competition Results
            </h3>

            {/* Result 1: Northeastern */}
            <ResultCard 
              institution="Northeastern University London"
              competition="Year 12 Essay Competition"
              badge="STEM"
              status="FINALIST"
              desc="Selected as a Finalist from 5,770 entries. Top 20% awarded status."
            />

            {/* Result 2: Oxford Scholastica */}
            <ResultCard 
              institution="Oxford Scholastica"
              competition="Psychology Essay Competition"
              badge="Psychology"
              status="SHORTLISTED"
              desc="Shortlisted in subject category. Recognized for exceptional depth of argument."
            />

          </div>

        </div>

      </div>
    </section>
  );
};

// --- Sub-Component: Essay Excerpt Card ---
const EssayCard = ({ category, title, excerpt, award }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300"
  >
    {/* Category Tag */}
    <div className="absolute top-6 right-6 text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 uppercase tracking-wider">
      {category}
    </div>

    {/* Content */}
    <div className="mb-4 pr-16">
      <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
        "{title}"
      </h4>
      <div className="relative pl-4 border-l-2 border-slate-700">
        <p className="text-slate-400 text-sm italic leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center gap-2 pt-4 border-t border-slate-800/50">
      {/* <img 
        src="" 
        alt="Logo" 
        className="w-6 h-6 rounded-full grayscale opacity-70"
      />  */}
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{award}</span>
    </div>
  </motion.div>
);

// --- Sub-Component: Result Card ---
const ResultCard = ({ institution, competition, badge, status, desc }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex gap-5 p-6 rounded-xl border relative overflow-hidden"
    style={{ 
      backgroundColor: 'rgba(30, 41, 59, 0.3)', 
      borderColor: 'rgba(251, 191, 36, 0.1)' 
    }}
  >
    {/* Decoration */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-3xl" />

    {/* Left Icon Block */}
    <div className="shrink-0 flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
        <Star className="text-amber-400 fill-amber-400/20" size={24} />
      </div>
      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase">
        {badge}
      </span>
    </div>

    {/* Content */}
    <div>
      <div className="flex items-center gap-3 mb-1">
        <h4 className="text-white font-bold text-lg">{institution}</h4>
        {status === "FINALIST" && (
            <span className="text-[10px] font-bold bg-amber-500 text-black px-2 py-0.5 rounded-full animate-pulse">
                TOP 20%
            </span>
        )}
      </div>
      <p className="text-slate-400 text-sm mb-3">{competition}</p>
      
      <div className="inline-block px-3 py-1.5 rounded border border-amber-500/30 bg-amber-500/5">
        <span className="text-amber-400 text-xs font-bold tracking-wider flex items-center gap-1">
          <Trophy size={12} />
          STATUS: {status}
        </span>
      </div>
      
      <p className="text-slate-500 text-xs mt-3 leading-snug">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default SuccessShowcase;