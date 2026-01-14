'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Activity, 
  TrendingUp, 
  Target, 
  Heart 
} from 'lucide-react';

const WhySportsEducation = () => {
  return (
    // SAFE MODE: Hardcoded Dark Blue Background (Stadium Theme)
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#0f172a' }} 
    >
      
      {/* Background Decor: Tactical Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            More Than Just a Game. <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #f97316, #fbbf24)' }} // Orange to Amber
            >
              It's a Leadership Pathway.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{ color: '#cbd5e1' }} // Slate-300
          >
            Access to structured sports guidance is limited. We give you the playbook to move from being a spectator to becoming a leader who builds the ecosystem behind the court.
          </motion.p>
        </div>

        {/* --- STRATEGY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1: The Shift (Large Image Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative h-[450px] rounded-3xl overflow-hidden group shadow-2xl border"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2058&auto=format&fit=crop" 
              alt="Coach instructing team" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)' }} />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-2 mb-4">
                 <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#f97316' }}>
                   The Transformation
                 </span>
              </div>
              
              <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-2">
                <div>
                   <span className="block text-sm text-gray-400 mb-1">From</span>
                   <h3 className="text-xl md:text-2xl font-bold text-white/60">Player / Spectator</h3>
                </div>
                <div className="text-2xl text-orange-500">➜</div>
                <div className="text-right">
                   <span className="block text-sm text-gray-400 mb-1">To</span>
                   <h3 className="text-xl md:text-2xl font-bold text-white">Manager & Leader</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: The Impact (Dark Stats Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[450px] rounded-3xl p-8 flex flex-col justify-between border shadow-2xl"
            style={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.5)', // Slate-800 transparent
              borderColor: 'rgba(249, 115, 22, 0.2)', // Orange border
              backdropFilter: 'blur(10px)'
            }}
          >
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg" 
                   style={{ backgroundColor: 'rgba(234, 88, 12, 0.2)', color: '#fdba74' }}>
                <Activity />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Beyond the Scoreboard</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
                Sports is a vehicle for physical health, mental well-being, and social inclusion. Your project expands access to these critical life skills.
              </p>
            </div>
            
            <div className="space-y-3">
               <ImpactRow icon={<Heart size={16} />} text="Mental Well-being" />
               <ImpactRow icon={<Users size={16} />} text="Social Inclusion" />
               <ImpactRow icon={<Target size={16} />} text="Life Skills" />
            </div>
          </motion.div>

          {/* CARD 3: The 10-Week Model (Dark Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 relative rounded-3xl p-8 border shadow-2xl flex flex-col md:flex-row items-center gap-8"
            style={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.8)', 
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
             <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 mb-3">
                   <Trophy size={20} className="text-orange-500" />
                   <h3 className="text-xl font-bold text-white">The 10-Week Engine</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
                  Balances depth and feasibility. Learn the basics of partnerships and fundraising, then immediately apply them.
                </p>
             </div>

             {/* Visual Process Flow */}
             <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <ProcessStep number="01" title="Build" desc="Create the brand, logo, & curriculum." />
                <ProcessStep number="02" title="Partner" desc="Secure schools, clubs, & academies." />
                <ProcessStep number="03" title="Launch" desc="Run tournaments & equipment drives." />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

const ImpactRow = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl border transition-colors hover:bg-white/5"
       style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
    <div className="text-orange-400">{icon}</div>
    <span className="text-sm font-semibold text-gray-300">{text}</span>
  </div>
);

const ProcessStep = ({ number, title, desc }) => (
  <div className="p-4 rounded-xl border relative overflow-hidden group"
       style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
    <div className="text-4xl font-black absolute -right-2 -top-4 opacity-10 text-white group-hover:opacity-20 transition-opacity">
      {number}
    </div>
    <h4 className="text-orange-400 font-bold mb-1">{title}</h4>
    <p className="text-xs text-gray-400 leading-snug">{desc}</p>
  </div>
);

export default WhySportsEducation;