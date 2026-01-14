// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const StartupHero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
//     // SAFE MODE: Hardcoded Midnight Slate Background (Tech Theme)
//     // FIX APPLIED: Changed 'h-screen' to 'min-h-screen' to prevent cutoff
//     // FIX APPLIED: Added 'pt-32 md:pt-40' to force content down from the Navbar
//     // FIX APPLIED: Removed 'items-center' so content doesn't float up
//     <section 
//       className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40" 
//       style={{ backgroundColor: '#020617' }} // Slate-950
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
//           alt="Startup team working on code"
//           className="w-full h-full object-cover opacity-30"
//         />
//         {/* Gradient Overlay - Deep Slate to Black */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.95), #020617)' }}
//         />
        
//         {/* Grid Overlay for "Tech" feel */}
//         <div 
//             className="absolute inset-0 opacity-10"
//             style={{ 
//                 backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
//                 backgroundSize: '50px 50px'
//             }}
//         />
//       </div>

//       {/* 2. Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.div variants={itemVariants} className="flex justify-center">
//             <span 
//               className="inline-block py-1 px-4 rounded-full text-sm font-bold tracking-widest mb-6 backdrop-blur-md"
//               style={{ 
//                 backgroundColor: 'rgba(6, 182, 212, 0.1)', // Cyan tint
//                 borderColor: 'rgba(6, 182, 212, 0.5)',   // Cyan border
//                 borderWidth: '1px',
//                 color: '#22d3ee' // Bright Cyan text
//               }}
//             >
//             AI FOUNDERS INCUBATOR
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           Launch Your <br />
//           <span 
//             className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #22d3ee, #818cf8)', // Cyan to Indigo
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             AI-Backed Startup
//           </span>
//           <br /> in 10 Weeks.
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#cbd5e1' }} // Slate-300
//         >
//           FROM IDEA TO MVP. 
//           <br />
//           <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
//             Build your own SaaS, automation agency, or AI tool. Validate your market, write the code, and pitch to real investors.
//           </span>
//         </motion.p>
        
//         {/* Info Badges */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
//         >
//           {/* Deadline Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
//             style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>⏳</span>
//             <span style={{ color: '#fca5a5' }}>Deadline: <span className="font-bold text-white">January 15th</span></span>
//           </div>

//           {/* Start Date Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
//             style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(6, 182, 212, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)' }}>🚀</span>
//             <span style={{ color: '#67e8f9' }}>Starts: <span className="font-bold text-white">February 1st</span></span>
//           </div>

//           {/* Outcome Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
//             style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(139, 92, 246, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}>💎</span>
//             <span style={{ color: '#c4b5fd' }}>Outcome: <span className="font-bold text-white">Launch MVP</span></span>
//           </div>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#contact'>
//             <button 
//               className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
//               style={{ 
//                 background: 'linear-gradient(to right, #0891b2, #4f46e5)', // Cyan to Indigo
//                 border: 'none',
//               }}
//             >
//               Build Your Startup
//             </button>
//           </a>
//           <a href='/#curriculum'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-cyan-900/20"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(103, 232, 249, 0.5)', // Visible Cyan Border
//                 color: '#67e8f9' // Light Cyan text
//               }}
//             >
//               View Curriculum
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: "Digital Circuit" Particles */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {/* Floating Code Nodes */}
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, scale: 0.5 }}
//             animate={{
//               y: "-10vh",
//               x: (Math.random() - 0.5) * 20 + "vw", // Subtle horizontal drift
//               opacity: [0, 0.8, 0],
//               scale: [0.5, 1.2, 0.5],
//             }}
//             transition={{
//               duration: 10 + Math.random() * 8,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 5,
//             }}
//             className="absolute bottom-0 w-2 h-2 rounded-full shadow-[0_0_10px_#22d3ee]"
//             style={{ backgroundColor: '#22d3ee' }} // Cyan dots
//           />
//         ))}
        
//         {/* Vertical Data Lines */}
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={`line-${i}`}
//             initial={{ height: "0%", top: "100%", left: `${20 + (i * 15)}%`, opacity: 0 }}
//             animate={{
//               height: ["0%", "30%", "0%"],
//               top: ["100%", "40%", "20%"],
//               opacity: [0, 0.3, 0]
//             }}
//             transition={{
//               duration: 4 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//             }}
//             className="absolute w-px bg-gradient-to-t from-transparent via-cyan-500 to-transparent"
//           />
//         ))}
//       </motion.div>

//       {/* Bottom Gradient Fade */}
//       <div 
//         className="absolute bottom-0 left-0 right-0 h-32 z-10" 
//         style={{ background: 'linear-gradient(to top, #020617, transparent)' }}
//       />

//     </section>
//   );
// };

// export default StartupHero;



'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StartupHero = () => {
  // 1. STATE for Dynamic Dates
  const [dates, setDates] = useState({
    deadline: "Loading...",
    start: "Loading...",
    outcome: "Loading..."
  });

  // 2. LOGIC to Calculate Dates
  useEffect(() => {
    const calculateDates = () => {
      const today = new Date();
      const currentDay = today.getDate();
      const currentMonth = today.getMonth(); // 0 = Jan
      const currentYear = today.getFullYear();

      let targetMonth = currentMonth;
      let targetYear = currentYear;

      // Rule: If today > 15th, everything shifts to the next cycle
      if (currentDay > 15) {
        targetMonth = currentMonth + 1;
      }

      // A. Deadline: 15th of the target month
      const deadlineDate = new Date(targetYear, targetMonth, 15);

      // B. Start Date: 1st of the NEXT month
      const startDate = new Date(targetYear, targetMonth + 1, 1);

      // C. Outcome Date: 10 weeks (70 days) after Start Date
      const outcomeDate = new Date(startDate);
      outcomeDate.setDate(startDate.getDate() + 70); 

      setDates({
        deadline: formatDateWithSuffix(deadlineDate),
        start: formatDateWithSuffix(startDate),
        outcome: formatDateWithSuffix(outcomeDate) // e.g. "April 10th"
      });
    };

    calculateDates();
  }, []);

  // Helper Function for "January 15th" format
  const formatDateWithSuffix = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    
    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) suffix = 'st';
    else if (day === 2 || day === 22) suffix = 'nd';
    else if (day === 3 || day === 23) suffix = 'rd';

    return `${month} ${day}${suffix}`;
  };

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
    // SAFE MODE: Hardcoded Midnight Slate Background (Tech Theme)
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40" 
      style={{ backgroundColor: '#020617' }} // Slate-950
    >
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
          alt="Startup team working on code"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlay - Deep Slate to Black */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.95), #020617)' }}
        />
        
        {/* Grid Overlay for "Tech" feel */}
        <div 
            className="absolute inset-0 opacity-10"
            style={{ 
                backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}
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
            <span 
              className="inline-block py-1 px-4 rounded-full text-sm font-bold tracking-widest mb-6 backdrop-blur-md"
              style={{ 
                backgroundColor: 'rgba(6, 182, 212, 0.1)', // Cyan tint
                borderColor: 'rgba(6, 182, 212, 0.5)',   // Cyan border
                borderWidth: '1px',
                color: '#22d3ee' // Bright Cyan text
              }}
            >
            AI FOUNDERS INCUBATOR
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
        >
          Launch Your <br />
          <span 
            className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #22d3ee, #818cf8)', // Cyan to Indigo
              WebkitBackgroundClip: 'text'
            }}
          >
            AI-Backed Startup
          </span>
          <br /> in 10 Weeks.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: '#cbd5e1' }} // Slate-300
        >
          FROM IDEA TO MVP. 
          <br />
          <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
            Build your own SaaS, automation agency, or AI tool. Validate your market, write the code, and pitch to real investors.
          </span>
        </motion.p>
        
        {/* DYNAMIC INFO BADGES */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {/* Deadline Badge */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
            style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>⏳</span>
            <span style={{ color: '#fca5a5' }}>Deadline: <span className="font-bold text-white">{dates.deadline}</span></span>
          </div>

          {/* Start Date Badge */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
            style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(6, 182, 212, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)' }}>🚀</span>
            <span style={{ color: '#67e8f9' }}>Starts: <span className="font-bold text-white">{dates.start}</span></span>
          </div>

          {/* Outcome Badge (Dynamic!) */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
            style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(139, 92, 246, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}>💎</span>
            <span style={{ color: '#c4b5fd' }}>Launch MVP: <span className="font-bold text-white">{dates.outcome}</span></span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href='/#contact'>
            <button 
              className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              style={{ 
                background: 'linear-gradient(to right, #0891b2, #4f46e5)', // Cyan to Indigo
                border: 'none',
              }}
            >
              Build Your Startup
            </button>
          </a>
          <a href='#curriculum'>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-cyan-900/20"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid rgba(103, 232, 249, 0.5)', // Visible Cyan Border
                color: '#67e8f9' // Light Cyan text
              }}
            >
              View Curriculum
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Animation: "Digital Circuit" Particles */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Floating Code Nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, scale: 0.5 }}
            animate={{
              y: "-10vh",
              x: (Math.random() - 0.5) * 20 + "vw", // Subtle horizontal drift
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute bottom-0 w-2 h-2 rounded-full shadow-[0_0_10px_#22d3ee]"
            style={{ backgroundColor: '#22d3ee' }} // Cyan dots
          />
        ))}
        
        {/* Vertical Data Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ height: "0%", top: "100%", left: `${20 + (i * 15)}%`, opacity: 0 }}
            animate={{
              height: ["0%", "30%", "0%"],
              top: ["100%", "40%", "20%"],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-px bg-gradient-to-t from-transparent via-cyan-500 to-transparent"
          />
        ))}
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-10" 
        style={{ background: 'linear-gradient(to top, #020617, transparent)' }}
      />

    </section>
  );
};

export default StartupHero;