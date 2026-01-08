'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SocialProjectHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Community/Social Impact themed background */}
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
          alt="Group of people connecting hands"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay - Shifted to slight teal/green tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-900/60 to-slate-900/95" />
      </div>

      {/* 2. Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-600/30 border border-emerald-400 text-emerald-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
            SOCIAL IMPACT INCUBATOR
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Don't Just Watch Change Happen. <br />
          <span className="text-emerald-400">Lead It.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          LAUNCH YOUR OWN SOCIAL SERVICE PROJECT IN ~10 WEEKS!
          <br />
          <span className="text-gray-400 text-base mt-2 block">
            Build a sustainable initiative, gain executive leadership experience, and make a tangible impact on your community.
          </span>
        </motion.p>
        
        {/* Info Badges (Green/Teal/Blue Theme) */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {/* Deadline Badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-amber-500/30 text-amber-100 text-sm md:text-base shadow-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-sm">⏳</span>
            <span>Deadline: <span className="text-white font-bold tracking-wide">January 15th, 2026</span></span>
          </div>

          {/* Start Date Badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-emerald-500/30 text-emerald-100 text-sm md:text-base shadow-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">📅</span>
            <span>Starts: <span className="text-white font-bold tracking-wide">February 1st, 2026</span></span>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-blue-500/30 text-blue-100 text-sm md:text-base shadow-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 text-sm">🚀</span>
            <span>Cohort: <span className="text-white font-bold tracking-wide">Limited Spots</span></span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href='/#register'>
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:-translate-y-1">
              Launch Your Project
            </button>
          </a>
          <a href='/#examples'>
            <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
              View Past Impact
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Community/Connection Animation (Floating Nodes) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center gap-8 md:gap-16 pb-12 pointer-events-none"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20 - Math.random() * 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="flex flex-col items-center gap-2"
          >
            {/* The Node/Person */}
            <div className="w-3 h-3 md:w-4 md:h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
            {/* The Connection Line (fading) */}
            <div className="w-px h-12 bg-gradient-to-t from-transparent to-emerald-500/50" />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default SocialProjectHero;