// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   // Animation variants for staggered entrance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Stagger effect for children
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" } 
//     },
//   };

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         {/* Replace the URL below with your actual image path */}
//         <img
//           src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
//           alt="Students collaborating"
//           className="w-full h-full object-cover opacity-60"
//         />
//         {/* Gradient Overlay for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
//       </div>

//       {/* 2. Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge / Tagline (Optional small text above title) */}
//         <motion.span 
//           variants={itemVariants}
//           className="inline-block py-1 px-3 rounded-full bg-blue-600/30 border border-blue-400 text-blue-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm"
//         >
//           CAREER DISCOVERY PROGRAM
//         </motion.span>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//         >
//           Find Your Voice. <br />
//           <span className="text-blue-400">Design Your Future.</span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
//         >
//           Unlock your potential with our expert-led career discovery path. 
//           Move from confusion to clarity and build a roadmap that sets you apart.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           {/* Primary Button */}
//           <a href='/#contact'>
//             <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-1">
//               Book a Slot 
//             </button>
//           </a>
//           {/* Secondary Button */}
//           <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
//             Download Program Guide
//           </button>
//         </motion.div>

//       </motion.div>

//       {/* 3. Decorative Scroll Indicator (Optional) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
//       >
//         {/* <span className="text-xs uppercase tracking-widest">Scroll to Explore</span> */}
//         <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
//       </motion.div>

//     </section>
//   );
// };

// export default HeroSection;



'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect for children
        delayChildren: 0.3,
      },
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
        {/* Replace the URL below with your actual image path */}
        <img
          src="/launchpad/tedxhero.png"
          // src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
      </div>

      {/* 2. Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Badge / Tagline */}
        <motion.span 
          variants={itemVariants}
          className="inline-block py-1 px-3 rounded-full bg-blue-600/30 border border-blue-400 text-blue-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm"
        >
          CAREER DISCOVERY PROGRAM
        </motion.span>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Find Your Voice. <br />
          <span className="text-blue-400">Design Your Future.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Unlock your potential with our expert-led career discovery path. 
          Move from confusion to clarity and build a roadmap that sets you apart.
        </motion.p>

        {/* NEW: Cohort & Status Info */}
    <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {/* Start Date Badge */}
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-purple-500/30 text-purple-100 text-base md:text-lg shadow-lg">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 text-xl">📅</span>
            <span>Start Date: <span className="text-white font-bold tracking-wide">January 15th, 2026</span></span>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-pink-500/30 text-pink-100 text-base md:text-lg shadow-lg">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 text-xl">⚠️</span>
            <span>Status: <span className="text-white font-bold tracking-wide">Limited Slots Available</span></span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <a href='/#contact'>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-1">
              Book a Slot 
            </button>
          </a>
          {/* Secondary Button */}
          <a href='#timeline'>
          <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
           See Timelines
          </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Decorative Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default HeroSection;