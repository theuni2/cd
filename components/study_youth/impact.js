'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BarChart2, 
  Users, 
  BookOpen, 
  Award, 
  ArrowUpRight 
} from 'lucide-react';

const LiteracyCollegeImpact = () => {
  return (
    // SAFE MODE: Hardcoded Deep Indigo Background
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#172554' }} 
    >
      
      {/* Background Decor: University Grid */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 bg-indigo-900/50 backdrop-blur-md"
            style={{ borderColor: 'rgba(251, 191, 36, 0.3)' }}
          >
            <GraduationCap size={16} style={{ color: '#fbbf24' }} />
  <span 
    className="text-xs font-bold uppercase tracking-widest"
    style={{ color: '#fde68a' }}
  >
    Admissions Strategy
  </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            A Narrative That <br />
            <span style={{ color: '#fbbf24' }}>Admissions Officers Value.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed"
            style={{ color: '#c7d2fe' }}
          >
            Selective colleges look beyond grades. They want evidence of <span className="text-white font-semibold">sustained leadership</span>, <span className="text-white font-semibold">social impact</span>, and <span className="text-white font-semibold">systems thinking</span>. This project delivers exactly that.
          </motion.p>
        </div>

        {/* --- SIGNALS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1: Commitment */}
          <SignalCard 
            icon={<Award size={28} />}
            title="Sustained Leadership"
            desc="Not a one-off volunteering day. This shows long-term commitment to a cause and a community."
            delay={0.1}
          />

          {/* CARD 2: Systems Thinking */}
          <SignalCard 
            icon={<BookOpen size={28} />}
            title="Curriculum Design"
            desc="Demonstrates intellectual depth by creating frameworks, not just following instructions."
            delay={0.2}
          />

          {/* CARD 3: Data Driven */}
          <SignalCard 
            icon={<BarChart2 size={28} />}
            title="Data Tracking"
            desc="Shows analytical maturity. You measure learning outcomes, not just 'hours spent'."
            delay={0.3}
          />

          {/* CARD 4: Collaboration */}
          <SignalCard 
            icon={<Users size={28} />}
            title="Educator Collab"
            desc="Proves you can work with adults, NGOs, and stakeholders to solve real-world problems."
            delay={0.4}
          />

        </div>

        {/* --- THE NARRATIVE BOX --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 relative p-8 md:p-12 rounded-3xl border overflow-hidden"
          style={{ 
            background: 'linear-gradient(to right, #1e3a8a, #172554)',
            borderColor: 'rgba(251, 191, 36, 0.2)'
          }}
        >
          {/* Quote Icon Background */}
          <div className="absolute top-4 left-6 text-9xl font-serif text-white/5 pointer-events-none leading-none">
            “
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-3">
                Your Future Application Story
              </h3>
              <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
                "Founded a student-led teaching initiative reaching <span className="text-amber-300 not-italic border-b border-amber-300/30">X learners</span>, directly improving literacy rates by <span className="text-amber-300 not-italic border-b border-amber-300/30">Y%</span>, and training <span className="text-amber-300 not-italic border-b border-amber-300/30">Z peer tutors</span>."
              </p>
            </div>

            {/* Visual CTA */}
            <div className="shrink-0">
               <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse">
                 <ArrowUpRight size={32} className="text-indigo-950" />
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT ---
const SignalCard = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-6 rounded-2xl border flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 group"
    style={{ 
      backgroundColor: 'rgba(30, 58, 138, 0.2)', // Indigo Tint
      borderColor: 'rgba(255, 255, 255, 0.1)'
    }}
  >
    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-indigo-900 transition-colors">
      {icon}
    </div>
    
    <div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: '#a5b4fc' }}>
        {desc}
      </p>
    </div>
  </motion.div>
);

export default LiteracyCollegeImpact;