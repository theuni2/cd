'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  School, 
  TrendingUp, 
  Globe, 
  Presentation, 
  Award, 
  GraduationCap 
} from 'lucide-react';

const LiteracyOutcomes = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    // SAFE MODE: Hardcoded Deep Indigo Background
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#172554' }} 
    >
      
      {/* Background Decor: Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none rounded-full"
           style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)' }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(251, 191, 36, 0.1)', 
              borderColor: 'rgba(251, 191, 36, 0.3)',
              color: '#fcd34d'
            }}
          >
            <span className="text-xs font-bold tracking-widest uppercase">Your Impact Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What You Will <br />
            <span style={{ color: '#fbbf24' }}>Achieve & Own.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#c7d2fe' }}
          >
            By the end of this track, you won't just have a certificate. You will have a running organization and the data to prove its success.
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
          
          <CredentialCard 
            icon={<School size={28} />}
            title="Launched Program"
            desc="A fully operational teaching project with clear lesson plans, curriculum, and a roster of real learners."
            color="#fbbf24"
          />

          <CredentialCard 
            icon={<TrendingUp size={28} />}
            title="Measurable Metrics"
            desc="Concrete data: Students taught, hours logged, and pre/post-assessment improvements."
            color="#fbbf24"
          />

          <CredentialCard 
            icon={<Globe size={28} />}
            title="Web Portfolio"
            desc="A professional website describing your program's mission, curriculum, and instructions on how to join."
            color="#fbbf24"
          />

          <CredentialCard 
            icon={<Presentation size={28} />}
            title="Impact Deck"
            desc="A strategic summary deck covering your teaching model and impact—perfect for awards and essays."
            color="#fbbf24"
          />

          <CredentialCard 
            icon={<Award size={28} />}
            title="Partner Letters"
            desc="Official letters or certificates from partner schools/NGOs validating your contribution."
            color="#fbbf24"
          />

          <CredentialCard 
            icon={<GraduationCap size={28} />}
            title="The Narrative"
            desc="A powerful, college-ready story centered on educational equity, grassroots leadership, and empathy."
            color="#fbbf24"
          />

        </motion.div>

      </div>
    </section>
  );
};

// --- Sub-Component: Credential Card ---
const CredentialCard = ({ icon, title, desc, color }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5 }}
    className="relative p-8 rounded-2xl border group overflow-hidden"
    style={{ 
      backgroundColor: 'rgba(30, 58, 138, 0.3)', // Indigo-900 transparent
      borderColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)'
    }}
  >
    {/* Hover Effect: Bottom Line Expanding */}
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />

    {/* Header */}
    <div className="flex items-start justify-between mb-6">
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-indigo-950 transition-colors duration-300">
        {icon}
      </div>
    </div>

    {/* Text */}
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
      {title}
    </h3>
    <p className="text-sm leading-relaxed" style={{ color: '#c7d2fe' }}>
      {desc}
    </p>

  </motion.div>
);

export default LiteracyOutcomes;