'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Globe, 
  FileText, 
  Megaphone, 
  GraduationCap, 
  ShieldCheck 
} from 'lucide-react';

const SportsOutcomes = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    // SAFE MODE: Hardcoded Dark Blue Background (Stadium Theme)
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#0f172a' }} 
    >
      
      {/* Background Decor: Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle at top, #f97316 0%, transparent 70%)' }} 
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
              backgroundColor: 'rgba(249, 115, 22, 0.1)', 
              borderColor: 'rgba(249, 115, 22, 0.3)',
              color: '#fdba74'
            }}
          >
            <span className="text-xs font-bold tracking-widest uppercase">The Trophy Cabinet</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What You Will <br />
            <span style={{ color: '#f97316' }}>Build & Own.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#cbd5e1' }}
          >
            By the end of this track, you won't just have played the game. You'll have built the league. Here are your concrete takeaways.
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
            icon={<Trophy size={28} color="#f97316" />}
            title="Launched Project"
            desc="A live sports initiative with real beneficiaries (players, schools, academies) and verified impact metrics."
            highlight="Real Ecosystem"
          />

          <OutcomeCard 
            icon={<ShieldCheck size={28} color="#fbbf24" />}
            title="Official Certification"
            desc="Signed certificates from partner NGOs, clubs, or community organizations validating your leadership."
            highlight="Verified"
          />

          <OutcomeCard 
            icon={<Globe size={28} color="#60a5fa" />}
            title="Digital Platform"
            desc="A professional project website plus a live fundraiser page for equipment, ground fees, and costs."
            highlight="Tech Asset"
          />

          <OutcomeCard 
            icon={<FileText size={28} color="#a78bfa" />}
            title="Award Pitch Deck"
            desc="A strategy deck ready for youth leadership, sports, and social impact award applications."
            highlight="Competition Ready"
          />

          <OutcomeCard 
            icon={<Megaphone size={28} color="#f472b6" />}
            title="Media Feature"
            desc="A featured article in a youth magazine, school gazette, or sports blog showcasing your work."
            highlight="Public PR"
          />

          <OutcomeCard 
            icon={<GraduationCap size={28} color="#34d399" />}
            title="College Narrative"
            desc="A strong, quantifiable project that demonstrates leadership, initiative, and management skills."
            highlight="Admissions Gold"
          />

        </motion.div>

        {/* --- AUDIENCE NOTE --- */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-12 text-center"
        >
           <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
             Target Audience: Middle Schoolers + High Schoolers (Flexible Scale)
           </p>
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
      backgroundColor: 'rgba(30, 41, 59, 0.4)', // Slate-800 transparent
      borderColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)'
    }}
  >
    {/* Hover Gradient Effect - Orange Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
         style={{ background: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.1), transparent)' }} />

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
              color: '#94a3b8'
            }}>
        {highlight}
      </span>
    </div>

    {/* Text */}
    <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-orange-300 transition-colors">
      {title}
    </h3>
    <p className="text-sm leading-relaxed relative z-10" style={{ color: '#cbd5e1' }}>
      {desc}
    </p>

    {/* Bottom Border Accent */}
    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
         style={{ backgroundColor: '#f97316' }} />
  </motion.div>
);

export default SportsOutcomes;