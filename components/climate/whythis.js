'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Fingerprint, TrendingUp } from 'lucide-react';

const CollegeImpact = () => {
  return (
    // SAFE MODE: Hardcoded Dark Green Background (Same as Hero)
    <section 
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: '#022c22' }} 
    >
      
      {/* Background Decor: Abstract Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black" style={{ backgroundColor: '#a3e635' }}>
              Admissions Strategy
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Don't Just Volunteer. <br />
            <span style={{ color: '#bef264' }}>Build a "Spike".</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: '#d1d5db' }}
          >
            Selective colleges are tired of generic volunteering hours. They want to see 
            <span className="font-bold text-white"> sustained impact</span>, 
            <span className="font-bold text-white"> original leadership</span>, and 
            <span className="font-bold text-white"> systems thinking</span>.
          </motion.p>
        </div>

        {/* --- STRATEGY CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1: The "Spike" Factor */}
          <StrategyCard 
            icon={<GraduationCap size={32} color="#bef264" />}
            title="The 'Spike' Factor"
            delay={0.1}
          >
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>
              Move beyond participation. Demonstrate the ability to mobilize others by designing your own brand, curriculum, and fundraising strategy.
            </p>
            <div className="mt-auto pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/70">
                Outcome: Standout Personal Statement
              </span>
            </div>
          </StrategyCard>

          {/* CARD 2: Public Proof */}
          <StrategyCard 
            icon={<TrendingUp size={32} color="#34d399" />}
            title="Visible Public Proof"
            delay={0.2}
          >
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>
              Admissions officers love evidence. We help you generate undeniable proof of impact:
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">✅ Live Website & Socials</li>
              <li className="flex items-center gap-2">✅ Verified Money Raised</li>
              <li className="flex items-center gap-2">✅ Documented Workshops</li>
            </ul>
          </StrategyCard>

          {/* CARD 3: Owned IP */}
          <StrategyCard 
            icon={<Fingerprint size={32} color="#60a5fa" />}
            title="Owned IP & Assets"
            delay={0.3}
          >
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>
              You aren't just joining a club; you are building an organization. You own the IP:
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
               <Tag text="Your Logo" />
               <Tag text="Teacher Playbook" />
               <Tag text="Curriculum" />
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
               <span className="text-xs font-mono text-white/70">
                 Signal: High Authenticity
               </span>
            </div>
          </StrategyCard>

          {/* CARD 4: External Validation */}
          <StrategyCard 
            icon={<Trophy size={32} color="#fbbf24" />}
            title="Awards & Recs"
            delay={0.4}
          >
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>
              This project is designed to map cleanly onto top-tier award applications.
            </p>
            <div className="p-3 rounded-lg mb-2" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)' }}>
              <span className="block text-xs font-bold text-amber-300 uppercase tracking-wide mb-1">Target Awards</span>
              <span className="text-sm text-white font-semibold">The Diana Award, Ashoka Youth Venture</span>
            </div>
            <p className="text-xs text-white/60 mt-2">
              + Compelling basis for NGO letters of recommendation.
            </p>
          </StrategyCard>

        </div>

        {/* --- BOTTOM VISUAL (Context) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Image representing Leadership/Strategy */}
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
            alt="Student leadership team planning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">High-Signal Leadership</h3>
            <p className="text-white/80 text-lg">
              "The ability to identify a problem, build a system to solve it, and mobilize a team is the #1 trait we look for."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- Sub-Components ---

const StrategyCard = ({ icon, title, children, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col h-full p-6 rounded-2xl border shadow-lg hover:-translate-y-1 transition-transform duration-300"
    style={{ 
      backgroundColor: 'rgba(6, 78, 59, 0.4)', // Dark Green Transparent
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    }}
  >
    <div className="mb-4 p-3 rounded-xl inline-flex w-fit" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    {children}
  </motion.div>
);

const Tag = ({ text }) => (
  <span 
    className="text-xs font-semibold px-2 py-1 rounded border"
    style={{ 
      borderColor: 'rgba(255,255,255,0.2)', 
      color: '#d1d5db',
      backgroundColor: 'rgba(0,0,0,0.2)'
    }}
  >
    {text}
  </span>
);

export default CollegeImpact;