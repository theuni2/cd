// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const LiteracyHero = () => {
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
//     // SAFE MODE: Hardcoded Deep Indigo Background (Academic Theme)
//     <section 
//       className="relative h-screen w-full flex items-center justify-center overflow-hidden"
//       style={{ backgroundColor: '#172554' }} // Deep Blue-950
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
//           alt="Mentoring and reading to students"
//           className="w-full h-full object-cover opacity-40"
//         />
//         {/* Gradient Overlay - Indigo to Black */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(23, 37, 84, 0.6), rgba(23, 37, 84, 0.9), #172554)' }}
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
//                 backgroundColor: 'rgba(251, 191, 36, 0.1)', // Amber tint
//                 borderColor: 'rgba(251, 191, 36, 0.5)',   // Amber border
//                 borderWidth: '1px',
//                 color: '#fcd34d' // Light Amber text
//               }}
//             >
//             YOUTH LITERACY INCUBATOR
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           Don't Just Read Books. <br />
//           <span 
//             className="text-transparent bg-clip-text filter drop-shadow-lg"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #fbbf24, #f59e0b)', // Amber-400 to Amber-600
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             Rewrite a Future.
//           </span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#e0e7ff' }} // Indigo-100
//         >
//           LAUNCH YOUR OWN TEACHING INITIATIVE IN ~10 WEEKS.
//           <br />
//           <span className="text-base mt-3 block" style={{ color: '#a5b4fc' }}> // Indigo-300
//             Identify learning gaps, mentor younger students, and build a "Teaching Organization" with real curriculum and impact.
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
//             style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(248, 113, 113, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(248, 113, 113, 0.2)' }}>⏳</span>
//             <span style={{ color: '#fca5a5' }}>Deadline: <span className="font-bold text-white">January 15th</span></span>
//           </div>

//           {/* Start Date Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(129, 140, 248, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(129, 140, 248, 0.2)' }}>📅</span>
//             <span style={{ color: '#c7d2fe' }}>Starts: <span className="font-bold text-white">February 1st</span></span>
//           </div>

//           {/* Impact Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(251, 191, 36, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}>🎓</span>
//             <span style={{ color: '#fcd34d' }}>Role: <span className="font-bold text-white">Student Leader</span></span>
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
//                 background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to Amber-700
//                 border: 'none',
//                 boxShadow: '0 0 20px rgba(217, 119, 6, 0.4)'
//               }}
//             >
//               Start Teaching
//             </button>
//           </a>
//           <a href='/#curriculum'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(252, 211, 77, 0.5)', // Visible Gold Border
//                 color: '#fcd34d' // Light Gold text
//               }}
//             >
//               View Syllabus
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: Floating "Knowledge" Particles */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.4 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {/* Abstract Book/Page shapes rising */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, scale: 0.5 }}
//             animate={{
//               y: "-10vh",
//               x: (Math.random() - 0.5) * 50 + "px",
//               opacity: [0, 0.5, 0],
//               scale: [0.5, 1, 0.5],
//               rotate: Math.random() * 20 - 10
//             }}
//             transition={{
//               duration: 12 + Math.random() * 10,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 5,
//             }}
//             className="absolute bottom-0 w-8 h-10 rounded-sm bg-amber-100/10 border border-amber-200/20"
//           />
//         ))}
//       </motion.div>

//       {/* Bottom Gradient Fade */}
//       <div 
//         className="absolute bottom-0 left-0 right-0 h-24 z-10" 
//         style={{ background: 'linear-gradient(to top, #172554, transparent)' }}
//       />

//     </section>
//   );
// };

// export default LiteracyHero;


'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LiteracyHero = () => {
  // 1. STATE for Dynamic Dates
  const [dates, setDates] = useState({
    deadline: "Loading...",
    start: "Loading...",
    launch: "Loading..."
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

      // C. Launch Date: 10 weeks (70 days) after Start Date
      const launchDate = new Date(startDate);
      launchDate.setDate(startDate.getDate() + 70); 

      setDates({
        deadline: formatDateWithSuffix(deadlineDate),
        start: formatDateWithSuffix(startDate),
        launch: formatDateWithSuffix(launchDate)
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
    // SAFE MODE: Hardcoded Deep Indigo Background (Academic Theme)
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#172554' }} // Deep Blue-950
    >
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
          alt="Mentoring and reading to students"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay - Indigo to Black */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(23, 37, 84, 0.6), rgba(23, 37, 84, 0.9), #172554)' }}
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
                backgroundColor: 'rgba(251, 191, 36, 0.1)', // Amber tint
                borderColor: 'rgba(251, 191, 36, 0.5)',   // Amber border
                borderWidth: '1px',
                color: '#fcd34d' // Light Amber text
              }}
            >
            YOUTH LITERACY INCUBATOR
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
        >
          Don't Just Read Books. <br />
          <span 
            className="text-transparent bg-clip-text filter drop-shadow-lg"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #fbbf24, #f59e0b)', // Amber-400 to Amber-600
              WebkitBackgroundClip: 'text'
            }}
          >
            Rewrite a Future.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: '#e0e7ff' }} // Indigo-100
        >
          LAUNCH YOUR OWN TEACHING INITIATIVE IN ~10 WEEKS.
          <br />
          <span className="text-base mt-3 block" style={{ color: '#a5b4fc' }}>
            Identify learning gaps, mentor younger students, and build a "Teaching Organization" with real curriculum and impact.
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
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(248, 113, 113, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(248, 113, 113, 0.2)' }}>⏳</span>
            <span style={{ color: '#fca5a5' }}>Deadline: <span className="font-bold text-white">{dates.deadline}</span></span>
          </div>

          {/* Start Date Badge */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(129, 140, 248, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(129, 140, 248, 0.2)' }}>📅</span>
            <span style={{ color: '#c7d2fe' }}>Starts: <span className="font-bold text-white">{dates.start}</span></span>
          </div>

          {/* Impact/Launch Badge (Dynamic) */}
          <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(251, 191, 36, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}>🎓</span>
            <span style={{ color: '#fcd34d' }}>Launch by: <span className="font-bold text-white">{dates.launch}</span></span>
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
                background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to Amber-700
                border: 'none',
                boxShadow: '0 0 20px rgba(217, 119, 6, 0.4)'
              }}
            >
              Start Teaching
            </button>
          </a>
          <a href='#curriculum'>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid rgba(252, 211, 77, 0.5)', // Visible Gold Border
                color: '#fcd34d' // Light Gold text
              }}
            >
              View Syllabus
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Animation: Floating "Knowledge" Particles */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Abstract Book/Page shapes rising */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, scale: 0.5 }}
            animate={{
              y: "-10vh",
              x: (Math.random() - 0.5) * 50 + "px",
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5],
              rotate: Math.random() * 20 - 10
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute bottom-0 w-8 h-10 rounded-sm bg-amber-100/10 border border-amber-200/20"
          />
        ))}
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 z-10" 
        style={{ background: 'linear-gradient(to top, #172554, transparent)' }}
      />

    </section>
  );
};

export default LiteracyHero;