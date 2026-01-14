'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  CheckCircle 
} from 'lucide-react';

const WhyLiteracy = () => {
  return (
    // SAFE MODE: Hardcoded Deep Indigo Background
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#172554' }} 
    >
      
      {/* Background Decor: Abstract Books/Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6"
            style={{ 
              backgroundColor: 'rgba(251, 191, 36, 0.1)', 
              borderColor: 'rgba(251, 191, 36, 0.3)',
              color: '#fcd34d'
            }}
          >
            <Lightbulb size={14} />
            <span className="text-xs font-bold uppercase tracking-widest">The Mission</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Bridge the <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)' }} // Amber Gradient
            >
              Learning Gap.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{ color: '#e0e7ff' }} // Indigo-100
          >
            Millions of children are behind grade level. This is your chance to move beyond "volunteering" and build a structured, measurable teaching intervention.
          </motion.p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT: VISUAL CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border group"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="Teen mentoring child" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #172554, transparent)' }} />
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-amber-500/90 backdrop-blur-md px-4 py-2 rounded-lg inline-block mb-3">
                <span className="text-xs font-black text-white font-bold uppercase tracking-widest">
                  Grassroots Impact
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Early Leadership</h3>
              <p className="text-sm text-gray-200 max-w-sm">
                Step into a role similar to formal teaching fellowships. Learn stakeholder management, empathy, and classroom execution early.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: TEXT BLOCKS */}
          <div className="space-y-6">
            
            {/* Block 1 */}
            <FeatureBlock 
              icon={<TrendingUp size={24} />}
              title="Beyond Tokenism"
              desc="Most volunteering is passive. This project is about structured, measurable interventions where you track hours taught and levels improved."
              delay={0.1}
            />

            {/* Block 2 */}
            <FeatureBlock 
              icon={<Users size={24} />}
              title="Real Beneficiaries"
              desc="Work directly with students who need support. Partner with NGOs or schools to find learning gaps and fill them."
              delay={0.2}
            />

            {/* Block 3 */}
            <FeatureBlock 
              icon={<BookOpen size={24} />}
              title="Foundational Skills"
              desc="Focus on the basics: Literacy and Access. You are building the foundation for a younger student's entire academic future."
              delay={0.3}
            />

            {/* "Fellowship Style" Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl border flex items-start gap-4"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.3)', // Indigo-900 transparent
                borderColor: 'rgba(251, 191, 36, 0.3)' 
              }}
            >
               <div className="p-2 rounded-full bg-amber-500/10 text-amber-400">
                 <CheckCircle size={20} />
               </div>
               <div>
                 <h4 className="text-white font-bold text-lg">Teach For India Style</h4>
                 <p className="text-sm text-gray-200 mt-1">
                   Modeled after proven community teaching models. You aren't just a tutor; you are a <span className="text-amber-300 font-semibold">Change Agent</span>.
                 </p>
               </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT ---
const FeatureBlock = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex gap-5 p-4 rounded-xl transition-all hover:bg-white/5"
  >
    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
         style={{ backgroundColor: '#1e3a8a', color: '#fbbf24' }}>
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: '#c7d2fe' }}>
        {desc}
      </p>
    </div>
  </motion.div>
);

export default WhyLiteracy;