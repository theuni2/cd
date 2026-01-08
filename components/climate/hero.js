'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ClimateProjectHero = () => {
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
    // FIX 1: Hardcoded Dark Green Background to prevent "White on White" issues
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#022c22' }} // Dark Green (Green-950)
    >
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
          alt="Sunlight breaking through forest canopy"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay - Hardcoded gradient colors */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(2,44,34,0.5), rgba(2,44,34,0.9))' }}
        />
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
            {/* FIX 2: Explicit colors for the badge */}
            <span 
              className="inline-block py-1 px-4 rounded-full text-sm font-bold tracking-widest mb-6 backdrop-blur-md"
              style={{ 
                backgroundColor: 'rgba(132, 204, 22, 0.2)', // Lime background
                borderColor: 'rgba(163, 230, 53, 0.5)',   // Lime border
                borderWidth: '1px',
                color: '#bef264' // Lime text
              }}
            >
            YOUTH CLIMATE ACTION FUND
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
        >
          Turn Your Eco-Anxiety <br />
          <span 
            className="text-transparent bg-clip-text filter drop-shadow-lg"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #a3e635, #34d399)', // Lime to Emerald
              WebkitBackgroundClip: 'text'
            }}
          >
            Into Real Action.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          // FIX 3: Forced white/gray colors to ensure visibility
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: '#e5e7eb' }} 
        >
          LAUNCH YOUR OWN SUSTAINABILITY PROJECT IN ~10 WEEKS.
          <br />
          <span className="text-base mt-3 block" style={{ color: '#d1d5db' }}>
            Receive mentorship, micro-grants, and the tools to build a greener future for your community.
          </span>
        </motion.p>
        
        {/* Info Badges */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {/* Deadline Badge - Safe Mode */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(249, 115, 22, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)' }}>🔥</span>
            <span style={{ color: '#ffedd5' }}>Deadline: <span className="font-bold text-white">January 15th</span></span>
          </div>

          {/* Start Date Badge - Safe Mode */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(132, 204, 22, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(132, 204, 22, 0.2)' }}>🌱</span>
            <span style={{ color: '#ecfccb' }}>Starts: <span className="font-bold text-white">February 1st</span></span>
          </div>

          {/* Funding Badge - Safe Mode */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(20, 184, 166, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(20, 184, 166, 0.2)' }}>💵</span>
            <span style={{ color: '#ccfbf1' }}>Perks: <span className="font-bold text-white">Micro-Grants Available</span></span>
          </div>
        </motion.div>

        {/* CTA Buttons - FIX 4: Explicit Borders */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href='/#apply'>
            <button 
              className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
              style={{ 
                background: 'linear-gradient(to right, #65a30d, #047857)', // Lime-600 to Emerald-700
                border: 'none'
              }}
            >
              Apply for Funding
            </button>
          </a>
          <a href='/#syllabus'>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid rgba(190, 242, 100, 0.5)', // Visible Lime Border
                color: '#ecfccb' // Light Lime text
              }}
            >
              Explore Projects
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. "Fireflies" Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0 }}
            animate={{
              y: "-10vh",
              x: (Math.random() - 0.5) * 200 + "px",
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            className="absolute bottom-0"
          >
            <div 
              className="rounded-full shadow-lg"
              style={{ 
                width: i % 2 === 0 ? '4px' : '8px',
                height: i % 2 === 0 ? '4px' : '8px',
                backgroundColor: i % 2 === 0 ? '#a3e635' : '#6ee7b7', // Lime/Emerald
                boxShadow: '0 0 10px rgba(132,204,22,0.8)'
              }}
             />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 z-10" 
        style={{ background: 'linear-gradient(to top, #022c22, transparent)' }}
      />

    </section>
  );
};

export default ClimateProjectHero;


// Pre-teens and teens learn how to design, launch, and scale their own Youth Climate Action Fund or climate initiative in about 2.5–3 months. 
// The project runs like a mini social enterprise: website, logo, clear climate focus, partnerships, workshops, fundraising, and PR.
