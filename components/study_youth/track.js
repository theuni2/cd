'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  School, 
  Wifi, 
  MapPin, 
  BookA, 
  Calculator, 
  Microscope, 
  Brain, 
  Focus 
} from 'lucide-react';

const LiteracyModels = () => {
  return (
    // SAFE MODE: Hardcoded Deep Indigo Background
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#172554' }} 
    >
      
      {/* Background Decor: Circle Patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 border rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
           style={{ borderColor: '#fbbf24' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 border rounded-full opacity-5 translate-x-1/3 translate-y-1/3 pointer-events-none" 
           style={{ borderColor: '#fbbf24' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Design Your <br />
            <span style={{ color: '#fbbf24' }}>Teaching Model.</span>
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#c7d2fe' }}>
            Inspired by <em>Teach For India</em>, but led by you. Choose how you will deliver impact from your school or home.
          </p>
        </div>

        {/* --- PART 1: DELIVERY MODELS (Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <ModelCard 
            icon={<School size={32} />}
            title="Peer-to-Peer"
            subtitle="In-School Model"
            desc="Run after-school or weekend support classes for younger students within your own school campus."
            delay={0.1}
          />

          <ModelCard 
            icon={<Wifi size={32} />}
            title="Digital Outreach"
            subtitle="Online Model"
            desc="Connect with government schools or low-fee private schools via Zoom/GMeet to bridge the digital divide."
            delay={0.2}
          />

          <ModelCard 
            icon={<MapPin size={32} />}
            title="Community Hub"
            subtitle="Hyper-Local Model"
            desc="Set up a micro-learning centre in your RWA, a local tuition centre, or with a neighborhood NGO partner."
            delay={0.3}
          />

        </div>

        {/* --- PART 2: THE FOCUS STRATEGY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Focus Areas List */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-amber-400" />
              Potential Focus Areas
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SubjectItem icon={<BookA size={20} />} text="Foundational Literacy" />
              <SubjectItem icon={<Calculator size={20} />} text="Numeracy & Math" />
              <SubjectItem icon={<Brain size={20} />} text="English Communication" />
              <SubjectItem icon={<Microscope size={20} />} text="Science Boosters" />
            </div>
          </div>

          {/* Right: The "Depth" Card (Key Strategy) */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(145deg, rgba(251, 191, 36, 0.1), rgba(23, 37, 84, 0.4))',
                borderColor: '#fbbf24'
              }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Focus size={64} className="text-amber-400" />
              </div>

              <h4 className="text-xl font-bold text-amber-300 mb-3">
                The "Depth" Rule
              </h4>
              <p className="text-white leading-relaxed mb-4">
                To make your project stronger, we will choose <span className="font-bold text-amber-200 border-b border-amber-200/50">only ONE subject</span> to focus on.
              </p>
              <p className="text-sm text-gray-200">
                Specialization creates measurable impact. Be the best at teaching <em>one thing</em> rather than average at teaching everything.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

const ModelCard = ({ icon, title, subtitle, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-2xl border group hover:-translate-y-2 transition-transform duration-300"
    style={{ 
      backgroundColor: 'rgba(30, 58, 138, 0.3)', // Indigo-900 tint
      borderColor: 'rgba(255, 255, 255, 0.1)'
    }}
  >
    <div className="mb-6 p-4 rounded-xl bg-white/5 inline-flex text-amber-400 group-hover:bg-amber-500 group-hover:text-indigo-900 transition-colors">
      {icon}
    </div>
    <div className="mb-3">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-300">{subtitle}</span>
      <h3 className="text-2xl font-bold text-white mt-1">{title}</h3>
    </div>
    <p className="text-gray-200 leading-relaxed text-sm">
      {desc}
    </p>
  </motion.div>
);

const SubjectItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-4 rounded-xl border transition-colors hover:bg-white/5"
       style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
    <div className="text-amber-400 shrink-0">{icon}</div>
    <span className="text-white font-medium">{text}</span>
  </div>
);

export default LiteracyModels;