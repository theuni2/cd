'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ListOrdered, Target, Trophy, Check, ArrowRight } from 'lucide-react';

const ProgramSnapshot = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: THE VISUAL --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1770&auto=format&fit=crop" 
              alt="Student writing essay" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-xl"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Floating 'Who is this for' Card on Image */}
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-emerald-500/20 text-gray-100">
                        <Target size={20} />
                    </div>
                    <span className="text-white font-bold text-lg">Who is this for?</span>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Check size={16} className="text-gray-100 shrink-0" />
                        <span className="text-slate-200 text-sm">Targeting Ivy League & Top Global Unis</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Check size={16} className="text-gray-200 shrink-0" />
                        <span className="text-slate-200 text-sm">Interests in Law, Econ, Politics, STEM</span>
                    </div>
                </div>
            </div>
          </motion.div>


          {/* --- RIGHT COLUMN: STRUCTURE & OUTCOMES --- */}
          <div className="space-y-8">
            
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Structured for <span style={{ color: '#fbbf24' }}>Success.</span>
                </h2>
                <p className="text-slate-400 text-lg">
                    A clear path from blank page to winning submission.
                </p>
            </div>

            {/* BLOCK 1: The Structure (Timeline Style) */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border bg-slate-900/50 border-slate-800"
            >
                <div className="flex items-center gap-3 mb-6">
                    <ListOrdered className="text-blue-400" size={24} />
                    <h3 className="text-xl font-bold text-white">The 6-Step Structure</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        "Prompt Strategy", "Argument Construction", "Deep Research",
                        "Comp-Grade Writing", "Ruthless Editing", "Final Polish"
                    ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <span className="text-slate-500 text-xs font-bold">0{i+1}</span>
                            <span className="text-gray-200 text-sm font-medium">{step}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* BLOCK 2: The Outcomes (Premium Card) */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{ 
                    backgroundColor: 'rgba(251, 191, 36, 0.05)', 
                    borderColor: 'rgba(251, 191, 36, 0.2)' 
                }}
            >
                <div className="flex items-center gap-3 mb-6">
                    <Trophy className="text-amber-400" size={24} />
                    <h3 className="text-xl font-bold text-white">The Outcome</h3>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-400 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold text-sm">Expert Feedback</h4>
                            <p className="text-slate-400 text-xs mt-0.5">1-on-1 communication via email/WhatsApp.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-400 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold text-sm">Competition Asset</h4>
                            <p className="text-slate-400 text-xs mt-0.5">A polished, submission-ready essay.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-400 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold text-sm">Lifetime Skill</h4>
                            <p className="text-slate-400 text-xs mt-0.5">A thinking framework you can reuse forever.</p>
                        </div>
                    </div>
                </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramSnapshot;