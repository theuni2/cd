'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Award, 
  Monitor, 
  FileText, 
  Megaphone, 
  GraduationCap 
} from 'lucide-react';

const CoreOutcomes = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    // SAFE MODE: Hardcoded Dark Green Background
    <section 
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: '#022c22' }} 
    >
      
      {/* Background Decor: Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
           style={{ backgroundColor: 'rgba(52, 211, 153, 0.05)' }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(163, 230, 53, 0.1)', 
              borderColor: 'rgba(163, 230, 53, 0.3)',
              color: '#bef264'
            }}
          >
            <span className="text-xs font-bold tracking-widest uppercase">The Deliverables</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What You Will <br />
            <span style={{ color: '#34d399' }}>Build & Own.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#d1d5db' }}
          >
            By the end of this track, you won't just have "experience." You will have tangible assets to show colleges, investors, and the world.
          </motion.p>
        </div>

        {/* --- OUTCOMES GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          <OutcomeCard 
            icon={<Rocket size={28} color="#bef264" />}
            title="Launched Project"
            desc="A live climate initiative with real beneficiaries, measurable outcomes, and verified impact."
            highlight="Real-World Impact"
          />

          <OutcomeCard 
            icon={<Award size={28} color="#34d399" />}
            title="NGO Certificate"
            desc="Official certification from partner NGOs or community organizations validating your work."
            highlight="Signed & Verified"
          />

          <OutcomeCard 
            icon={<Monitor size={28} color="#60a5fa" />}
            title="Digital Platform"
            desc="A professional project website plus a live fundraiser page to accept donations."
            highlight="Tech Asset"
          />

          <OutcomeCard 
            icon={<FileText size={28} color="#facc15" />}
            title="Award Pitch Deck"
            desc="A strategy deck ready for awards (Diana Award) and incubator applications."
            highlight="Competition Ready"
          />

          <OutcomeCard 
            icon={<Megaphone size={28} color="#fb7185" />}
            title="Media Feature"
            desc="A featured article in a youth magazine or blog to showcase your thought leadership."
            highlight="Public Recognition"
          />

          <OutcomeCard 
            icon={<GraduationCap size={28} color="#a78bfa" />}
            title="College Narrative"
            desc="A strong, 'spike' project that translates directly into a compelling Personal Statement."
            highlight="Admissions Gold"
          />

        </motion.div>

      </div>
    </section>
  );
};

// --- Sub-Component: Outcome Card ---
const OutcomeCard = ({ icon, title, desc, highlight }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5 }}
    className="relative p-8 rounded-2xl border shadow-lg group overflow-hidden"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.03)', // Very subtle transparency
      borderColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)'
    }}
  >
    {/* Hover Gradient Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
         style={{ background: 'linear-gradient(to bottom right, rgba(163, 230, 53, 0.1), transparent)' }} />

    {/* Header */}
    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className="p-3 rounded-xl bg-black/20 border border-white/5 group-hover:bg-black/40 transition-colors">
        {icon}
      </div>
      {/* Small Badge */}
      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              borderColor: 'rgba(255,255,255,0.1)',
              color: '#9ca3af'
            }}>
        {highlight}
      </span>
    </div>

    {/* Text */}
    <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-emerald-300 transition-colors">
      {title}
    </h3>
    <p className="text-sm leading-relaxed relative z-10" style={{ color: '#d1d5db' }}>
      {desc}
    </p>

    {/* Bottom Border Accent */}
    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
         style={{ backgroundColor: '#34d399' }} />
  </motion.div>
);

export default CoreOutcomes;