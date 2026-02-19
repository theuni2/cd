'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Lightbulb, Award, Quote } from 'lucide-react'; // Using Lucide icons

const WhyUniversitiesLove = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const features = [
    {
      icon: <Scale className="w-6 h-6 text-amber-400" />,
      title: "Proof of Academic Rigor",
      desc: "It demonstrates you can read beyond the high school textbook. You are engaging with undergraduate-level philosophy, politics, or economics."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: "Intellectual Vitality",
      desc: "Admissions officers look for 'curiosity.' Writing 2,000 words on a complex topic voluntarily is the ultimate proof of intellectual hunger."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Third-Party Validation",
      desc: "School grades are subjective. A shortlist from Oxford/Princeton judges is an objective, globally recognized stamp of quality."
    }
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0f172a' }} // Matches Hero Slate-950
    >
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Why Universities <br />
              <span className="text-amber-400">Love This.</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mb-12 leading-relaxed"
            >
              In a sea of 4.0 GPAs, a Essay is a <span className="text-white font-semibold">"signal" mechanism</span>. It proves you can handle the Oxford/Ivy tutorial style before you even arrive.
            </motion.p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex gap-5 group"
                >
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/50 flex items-center justify-center transition-colors duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* RIGHT COLUMN: The "Admissions Note" Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            
            {/* The Card */}
            <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              
              {/* "Confidential" Stamp Effect */}
              <div className="absolute -top-6 -right-6 rotate-12 border-4 border-slate-700/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-white font-black tracking-[0.2em] text-sm uppercase opacity-50">
                  CONFIDENTIAL
                </span>
              </div>

              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                <Quote className="text-slate-500 w-8 h-8 opacity-50" />
                <div>
                  <h4 className="text-white font-bold text-lg">Admissions Committee Note</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">Evaluation Snippet</p>
                </div>
              </div>

              {/* The "Handwritten" Review Content */}
              <p className="text-white text-lg leading-relaxed font-serif italic mb-8">
                "Candidate distinguishes themselves through the John Locke submission. Unlike peers who list passive activities, this student demonstrates <span className="text-amber-400 bg-amber-400/10 px-1 rounded">independent research capability</span> and the ability to construct a sustained, original argument."
              </p>

              {/* Bottom Badge */}
              <div className="flex justify-end">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">High Priority Candidate</span>
                </div>
              </div>

            </div>

            {/* Decorative Element Behind */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-slate-800/20 rounded-2xl border border-white/5 rotate-6 scale-95" />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUniversitiesLove;