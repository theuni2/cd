// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const SportsProjectHero = () => {
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
//     // SAFE MODE: Hardcoded Dark Blue Background (Stadium Night Theme)
//     <section 
//       className="relative h-screen w-full flex items-center justify-center overflow-hidden"
//       style={{ backgroundColor: '#0f172a' }} // Slate-900/Dark Blue
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop"
//           alt="Sports team huddle"
//           className="w-full h-full object-cover opacity-40"
//         />
//         {/* Gradient Overlay - Deep Blue to Black */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.9), #0f172a)' }}
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
//                 backgroundColor: 'rgba(249, 115, 22, 0.1)', // Orange tint
//                 borderColor: 'rgba(249, 115, 22, 0.5)',   // Orange border
//                 borderWidth: '1px',
//                 color: '#fdba74' // Light Orange text
//               }}
//             >
//             SPORTS IMPACT INCUBATOR
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           Turn Your Passion for Sports <br />
//           <span 
//             className="text-transparent bg-clip-text filter drop-shadow-lg"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #f97316, #fbbf24)', // Orange to Amber
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             Into a Social Enterprise.
//           </span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#cbd5e1' }} // Slate-300
//         >
//           LAUNCH YOUR OWN SPORTS EDUCATION INITIATIVE IN ~10 WEEKS.
//           <br />
//           <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
//             Build a website, secure partnerships, run tournaments, and raise funds for equipment.
//           </span>
//         </motion.p>
        
//         {/* Info Badges */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
//         >
//           {/* Deadline Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>⏳</span>
//             <span style={{ color: '#fca5a5' }}>Deadline: <span className="font-bold text-white">January 15th</span></span>
//           </div>

//           {/* Start Date Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(59, 130, 246, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>🏆</span>
//             <span style={{ color: '#93c5fd' }}>Starts: <span className="font-bold text-white">February 1st</span></span>
//           </div>

//           {/* Outcome Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(249, 115, 22, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)' }}>👟</span>
//             <span style={{ color: '#fdba74' }}>Outcome: <span className="font-bold text-white">Launch Tournaments</span></span>
//           </div>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#apply'>
//             <button 
//               className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
//               style={{ 
//                 background: 'linear-gradient(to right, #ea580c, #d97706)', // Orange-600 to Amber-600
//                 border: 'none',
//                 boxShadow: '0 0 20px rgba(234, 88, 12, 0.4)'
//               }}
//             >
//               Start Your Team
//             </button>
//           </a>
//           <a href='/#details'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(253, 186, 116, 0.5)', // Visible Orange Border
//                 color: '#fdba74' // Light Orange text
//               }}
//             >
//               View Game Plan
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: "Playbook" Abstract Elements */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {/* Floating X's and O's (Tactics) */}
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, rotate: 0 }}
//             animate={{
//               y: "-10vh",
//               x: (Math.random() - 0.5) * 100 + "px",
//               opacity: [0, 0.4, 0],
//               rotate: 360
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 5,
//             }}
//             className="absolute bottom-0 text-4xl font-bold text-white/5"
//             style={{ fontSize: Math.random() * 40 + 20 + 'px' }}
//           >
//             {i % 2 === 0 ? '✕' : '○'}
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Bottom Gradient Fade */}
//       <div 
//         className="absolute bottom-0 left-0 right-0 h-24 z-10" 
//         style={{ background: 'linear-gradient(to top, #0f172a, transparent)' }}
//       />

//     </section>
//   );
// };

// export default SportsProjectHero;


'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SportsProjectHero = () => {
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

      // Rule: If today > 15th, roll over to the next month cycle
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
        outcome: formatDateWithSuffix(outcomeDate)
      });
    };

    calculateDates();
  }, []);

  // Helper Function
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
    // SAFE MODE: Hardcoded Dark Blue Background (Stadium Night Theme)
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0f172a' }} // Slate-900/Dark Blue
    >
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop"
          alt="Sports team huddle"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay - Deep Blue to Black */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.9), #0f172a)' }}
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
                backgroundColor: 'rgba(249, 115, 22, 0.1)', // Orange tint
                borderColor: 'rgba(249, 115, 22, 0.5)',   // Orange border
                borderWidth: '1px',
                color: '#fdba74' // Light Orange text
              }}
            >
            SPORTS IMPACT INCUBATOR
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
        >
          Turn Your Passion for Sports <br />
          <span 
            className="text-transparent bg-clip-text filter drop-shadow-lg"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #f97316, #fbbf24)', // Orange to Amber
              WebkitBackgroundClip: 'text'
            }}
          >
            Into a Social Enterprise.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: '#cbd5e1' }} // Slate-300
        >
          LAUNCH YOUR OWN SPORTS EDUCATION INITIATIVE IN ~10 WEEKS.
          <br />
          <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
            Build a website, secure partnerships, run tournaments, and raise funds for equipment.
          </span>
        </motion.p>
        
        {/* DYNAMIC DATE BADGES */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {/* Deadline Badge */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>⏳</span>
            <span style={{ color: '#fca5a5' }}>Deadline: <span className="font-bold text-white">{dates.deadline}</span></span>
          </div>

          {/* Start Date Badge */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(59, 130, 246, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>🏆</span>
            <span style={{ color: '#93c5fd' }}>Starts: <span className="font-bold text-white">{dates.start}</span></span>
          </div>

          {/* Outcome Badge (Dynamic) */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(249, 115, 22, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)' }}>👟</span>
            <span style={{ color: '#fdba74' }}>Launch by: <span className="font-bold text-white">{dates.outcome}</span></span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href='/#contact'>
            <button 
              className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
              style={{ 
                background: 'linear-gradient(to right, #ea580c, #d97706)', // Orange-600 to Amber-600
                border: 'none',
                boxShadow: '0 0 20px rgba(234, 88, 12, 0.4)'
              }}
            >
              Start Your Team
            </button>
          </a>
          <a href='#details'>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid rgba(253, 186, 116, 0.5)', // Visible Orange Border
                color: '#fdba74' // Light Orange text
              }}
            >
              View Game Plan
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Animation: "Playbook" Abstract Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Floating X's and O's (Tactics) */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, rotate: 0 }}
            animate={{
              y: "-10vh",
              x: (Math.random() - 0.5) * 100 + "px",
              opacity: [0, 0.4, 0],
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute bottom-0 text-4xl font-bold text-white/5"
            style={{ fontSize: Math.random() * 40 + 20 + 'px' }}
          >
            {i % 2 === 0 ? '✕' : '○'}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 z-10" 
        style={{ background: 'linear-gradient(to top, #0f172a, transparent)' }}
      />

    </section>
  );
};

export default SportsProjectHero;