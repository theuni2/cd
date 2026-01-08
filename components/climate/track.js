'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Droplets, 
  Wind, 
  Zap, 
  Globe, 
  BookOpen, 
  Recycle, 
  Shirt, 
  Sprout 
} from 'lucide-react';

const WhatThisTrackIs = () => {
  return (
    // SAFE MODE: Hardcoded Dark Green Background
    <section 
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: '#022c22' }} 
    >
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT COLUMN: The Concept --- */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-900/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Globe size={14} /> The Mission
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Choose Your <br />
              <span style={{ color: '#bef264' }}>Climate Battle.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed mb-8"
              style={{ color: '#d1d5db' }}
            >
              You don't just learn about climate change; you build a full-fledged community service project around a specific problem.
            </motion.p>

            {/* Problem Areas Chips */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['Waste', 'Water', 'Air', 'Energy', 'Biodiversity', 'Education'].map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-lg text-sm font-semibold border transition-colors hover:bg-emerald-900/50"
                  style={{ 
                    borderColor: 'rgba(255,255,255,0.1)', 
                    color: '#a3e635',
                    backgroundColor: 'rgba(255,255,255,0.03)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* SDG Focus Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border flex items-center gap-6"
              style={{ 
                backgroundColor: 'rgba(0,0,0,0.2)', 
                borderColor: 'rgba(52, 211, 153, 0.2)' 
              }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold text-white shadow-lg"
                   style={{ background: 'linear-gradient(135deg, #15803d, #14532d)' }}>
                13
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Primary Focus: SDG 13</h4>
                <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>
                  Climate Action + Related Goals (SDG 6, 7, 11, 12)
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: Project Archetypes --- */}
          <div className="grid gap-4">
            <h3 className="text-white/50 text-sm uppercase tracking-widest font-semibold mb-2">
              Popular Project Examples
            </h3>
            
            <ProjectCard 
              icon={<Zap size={24} color="#facc15" />}
              title="Youth Climate Action Fund"
              desc="Create a micro-grant body for rural/urban schools."
              delay={0.1}
            />
            
            <ProjectCard 
              icon={<Recycle size={24} color="#34d399" />}
              title="Plastic-Free Campaign"
              desc="Community drive for a neighborhood or market."
              delay={0.2}
            />
            
            <ProjectCard 
              icon={<BookOpen size={24} color="#60a5fa" />}
              title="Climate Education Hub"
              desc="Design curriculum & workshops for students."
              delay={0.3}
            />
            
            <ProjectCard 
              icon={<Sprout size={24} color="#bef264" />}
              title="Restoration Program"
              desc="Youth-led tree planting or water conservation."
              delay={0.4}
            />

            <ProjectCard 
              icon={<Shirt size={24} color="#fb7185" />}
              title="Sustainable Fashion"
              desc="Upcycling awareness & circular economy project."
              delay={0.5}
            />
            
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Project Card ---
const ProjectCard = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ x: 10 }}
    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group cursor-pointer"
    style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
      borderColor: 'rgba(255, 255, 255, 0.05)' 
    }}
  >
    {/* Icon Box */}
    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/20 border border-white/5 group-hover:bg-black/40 transition-colors">
      {icon}
    </div>
    
    {/* Text */}
    <div>
      <h4 className="text-white font-bold text-base group-hover:text-emerald-300 transition-colors">
        {title}
      </h4>
      <p className="text-sm" style={{ color: '#9ca3af' }}>
        {desc}
      </p>
    </div>
  </motion.div>
);

export default WhatThisTrackIs;