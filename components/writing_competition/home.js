'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WritingHero = () => {
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
        {/* Library / Writing / Focus Theme */}
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop"
          alt="Classic library with books and lamp"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlay - Deep Slate/Blue for Academic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-slate-900" />
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
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-200 text-sm font-bold tracking-widest mb-6 backdrop-blur-md uppercase">
              8-Week Intensive Writing Program
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 font-serif"
        >
          One Course. <br />
          Multiple Competitions <span className="text-orange-500">CRACKED.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Master the art of argument. Target the <strong>John Locke Institute, The Adroit Journal,</strong> and <strong>Columbia Law Review</strong>. 
          <br className="hidden md:block" />
          Create a competition-ready essay that signals depth to Ivy League admissions.
        </motion.p>
        
        {/* Info Badges (Orange/Blue/Slate Theme) */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {/* Deadline Badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-orange-500/30 text-orange-100 text-sm md:text-base shadow-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-300 text-sm">⏳</span>
            <span>Deadline: <span className="text-white font-bold tracking-wide">March 10th, 2026</span></span>
          </div>

          {/* Start Date Badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-blue-500/30 text-blue-100 text-sm md:text-base shadow-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 text-sm">📅</span>
            <span>Starts: <span className="text-white font-bold tracking-wide">March 25th, 2026</span></span>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-rose-500/30 text-rose-100 text-sm md:text-base shadow-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 text-sm">🔥</span>
            <span>Status: <span className="text-white font-bold tracking-wide">Fast Filling</span></span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href='/#register'>
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:-translate-y-1">
              Start Writing
            </button>
          </a>
          <a href='/#syllabus'>
            <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
              View Syllabus
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Floating Papers Animation (Decorative) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center gap-20 overflow-hidden pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [100, -50 - Math.random() * 50, 100],
              rotate: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
            className="w-16 h-20 border border-white/20 bg-white/5 backdrop-blur-sm rounded-sm"
          >
             {/* Lines representing text on the paper */}
             <div className="space-y-2 p-2 opacity-50">
                <div className="h-1 bg-white/40 w-full rounded-full"></div>
                <div className="h-1 bg-white/40 w-3/4 rounded-full"></div>
                <div className="h-1 bg-white/40 w-full rounded-full"></div>
             </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default WritingHero;