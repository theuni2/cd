'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WritingProgramDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // Data from your flyer
  const structureSteps = [
    { title: "Prompt Selection Strategy", desc: "Choose the winning angle." },
    { title: "Argument Construction", desc: "Build a logical, unbreakable thesis." },
    { title: "Research that Signals Depth", desc: "Go beyond Wikipedia. Cite like a scholar." },
    { title: "Competition-Grade Writing", desc: "Style, voice, and academic tone." },
    { title: "Editing like a Judge", desc: "Ruthless refinement for clarity." },
    { title: "Competition-Specific Refinement", desc: "Tailoring for John Locke, Adroit, etc." },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Audience & Outcomes (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-serif">
                Not Templates. <br/>
                <span className="text-orange-500">Pure Intellect.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                This isn't just a writing class. It's a thinking class. We don't give you a mold; we teach you how to break it.
              </p>
            </motion.div>

            {/* "Who this is for" Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-orange-500/20 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] -mr-10 -mt-10" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 text-lg">🎓</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                    Who is this for?
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    <span className="text-gray-300 text-sm md:text-base">Students targeting <strong>Ivy League & Top Global Universities</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    <span className="text-gray-300 text-sm md:text-base">Interests in <strong>Law, Philosophy, Politics, Econ, or STEM</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    <span className="text-gray-300 text-sm md:text-base">Writers who want <strong>real outcomes</strong>, not just practice.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

             {/* Outcomes Mini-Grid */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900 border border-white/5">
                    <h4 className="text-orange-400 font-bold text-2xl mb-1">1-on-1</h4>
                    <p className="text-gray-500 text-xs">Expert Feedback via Email/WhatsApp</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-white/5">
                    <h4 className="text-orange-400 font-bold text-2xl mb-1">Reusable</h4>
                    <p className="text-gray-500 text-xs">Thinking Framework for Life</p>
                </div>
             </div>

          </div>


          {/* RIGHT COLUMN: The Structure (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="relative pl-8 border-l border-white/10 ml-4 md:ml-0">
                
                <h3 className="text-2xl font-bold text-white mb-10 -ml-8 flex items-center gap-4">
                   <span className="w-16 h-[1px] bg-orange-500"></span> 
                   The 6-Step Structure
                </h3>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {structureSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="relative group"
                    >
                      {/* Number Bubble */}
                      <div className="absolute -left-[45px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-orange-500/30 text-orange-500 text-sm font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
                        {index + 1}
                      </div>

                      {/* Content Card */}
                      <div className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WritingProgramDetails;