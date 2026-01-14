'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Cpu, 
  Check, 
  BarChart3 
} from 'lucide-react';

const WhyWeHelp = () => {
  return (
    // SAFE MODE: Hardcoded Midnight Slate Background (Matches AI Hero)
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#020617' }} 
    >
      
      {/* Background Decor: Radial Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 60%)' }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Unfair <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #818cf8)' }}
            >
              Advantage.
            </span>
          </motion.h2>
          <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
            Most student projects are vague. Yours will be quantified, rapid, and tech-enabled. Here is why we are the best launchpad for you.
          </p>
        </div>

        {/* --- ADVANTAGE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1: Clear Outcomes */}
          <AdvantageCard 
            icon={<Target size={32} />}
            title="Clear Outcomes"
            subtitle="Quantified Success"
            color="#22d3ee" // Cyan
            delay={0.1}
          >
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Every startup is designed with numbers baked in from day one: learners reached, revenue generated, or matches made.
            </p>
            <div className="space-y-3">
              <CheckItem text="Concrete bullet points for applications" color="#22d3ee" />
              <CheckItem text="No vague 'I volunteered' narratives" color="#22d3ee" />
              <CheckItem text="Data-backed impact stories" color="#22d3ee" />
            </div>
          </AdvantageCard>

          {/* CARD 2: Speed */}
          <AdvantageCard 
            icon={<Zap size={32} />}
            title="Accelerator Speed"
            subtitle="10–12 Weeks to Launch"
            color="#818cf8" // Indigo
            delay={0.2}
          >
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              A structured arc that proves you can move from zero to launch under pressure. It fits a semester but can grow into a multi-year spike.
            </p>
            <div className="space-y-3">
              <CheckItem text="Real accelerator-style sprints" color="#818cf8" />
              <CheckItem text="Launch an MVP in one term" color="#818cf8" />
              <CheckItem text="Designed to scale over years" color="#818cf8" />
            </div>
          </AdvantageCard>

          {/* CARD 3: AI Integration */}
          <AdvantageCard 
            icon={<Cpu size={32} />}
            title="AI-Native Workflow"
            subtitle="Modern Tool Mastery"
            color="#c084fc" // Purple
            delay={0.3}
          >
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              AI isn't just the product—it's your co-pilot. Use it for strategy, code, and content to show colleges you understand modern efficiency.
            </p>
            <div className="space-y-3">
              <CheckItem text="AI for brainstorming & workflows" color="#c084fc" />
              <CheckItem text="Responsible, efficient usage" color="#c084fc" />
              <CheckItem text="Differentiates from simple users" color="#c084fc" />
            </div>
          </AdvantageCard>

        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

const AdvantageCard = ({ icon, title, subtitle, children, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative p-8 rounded-3xl border h-full flex flex-col group overflow-hidden"
    style={{ 
      backgroundColor: 'rgba(15, 23, 42, 0.6)', // Slate-900 tint
      borderColor: 'rgba(255, 255, 255, 0.05)'
    }}
  >
    {/* Top Border Highlight */}
    <div className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
         style={{ backgroundColor: color }} />

    {/* Icon Header */}
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-xl text-white group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon, { color })}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white leading-none">{title}</h3>
        <span className="text-xs font-bold uppercase tracking-wider mt-1 block opacity-70 " style={{ color: color }}>
          {subtitle}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="flex-1">
      {children}
    </div>
  </motion.div>
);

const CheckItem = ({ text, color }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 shrink-0">
      <Check size={14} color={color} strokeWidth={3} />
    </div>
    <span className="text-gray-200 text-sm font-medium">{text}</span>
  </div>
);

export default WhyWeHelp;