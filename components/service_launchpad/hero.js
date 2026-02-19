// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const SocialProjectHero = () => {
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
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 ">
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         {/* Community/Social Impact themed background */}
//         <img
//           src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
//           alt="Group of people connecting hands"
//           className="w-full h-full object-cover opacity-40"
//         />
//         {/* Gradient Overlay - Shifted to slight teal/green tint */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/60 to-slate-900/95" />
//       </div>

//       {/* 2. Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.div variants={itemVariants} className="flex justify-center mt-20 md:pt-40">
//             <span className="inline-block py-1 px-3 rounded-full bg-emerald-600/30 border border-emerald-400 text-emerald-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
//             SOCIAL IMPACT INCUBATOR
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//         >
//           Don't Just Watch Change Happen. <br />
//           <span className="text-emerald-400">Lead It.</span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//         >
//           LAUNCH YOUR OWN SOCIAL SERVICE PROJECT IN ~10 WEEKS!
//           <br />
//           <span className="text-gray-400 text-base mt-2 block">
//             Build a sustainable initiative, gain executive leadership experience, and make a tangible impact on your community.
//           </span>
//         </motion.p>
        
//         {/* Info Badges (Green/Teal/Blue Theme) */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
//         >
//           {/* Deadline Badge */}
//           <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-amber-500/30 text-amber-100 text-sm md:text-base shadow-lg">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-sm">⏳</span>
//             <span>Deadline: <span className="text-white font-bold tracking-wide">January 15th, 2026</span></span>
//           </div>

//           {/* Start Date Badge */}
//           <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-emerald-500/30 text-emerald-100 text-sm md:text-base shadow-lg">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">📅</span>
//             <span>Starts: <span className="text-white font-bold tracking-wide">February 1st, 2026</span></span>
//           </div>

//           {/* Status Badge */}
//           <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-blue-500/30 text-blue-100 text-sm md:text-base shadow-lg">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 text-sm">🚀</span>
//             <span>Cohort: <span className="text-white font-bold tracking-wide">Limited Spots</span></span>
//           </div>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#register'>
//             <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:-translate-y-1">
//               Launch Your Project
//             </button>
//           </a>
//           <a href='/#examples'>
//             <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
//               View Past Impact
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Community/Connection Animation (Floating Nodes) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center gap-8 md:gap-16 pb-12 pointer-events-none"
//       >
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -20 - Math.random() * 20, 0],
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.7, 0.3]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.5,
//             }}
//             className="flex flex-col items-center gap-2"
//           >
//             {/* The Node/Person */}
//             <div className="w-3 h-3 md:w-4 md:h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
//             {/* The Connection Line (fading) */}
//             <div className="w-px h-12 bg-gradient-to-t from-transparent to-emerald-500/50" />
//           </motion.div>
//         ))}
//       </motion.div>

//     </section>
//   );
// };

// export default SocialProjectHero;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const SocialProjectHero = () => {
//   // 1. State for Dynamic Dates
//   const [dates, setDates] = useState({
//     deadline: "Loading...",
//     start: "Loading..."
//   });

//   // 2. Logic to Calculate Dates
//   useEffect(() => {
//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); // 0 = Jan
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       // Rule: If today > 15th, roll over to next month cycle
//       if (currentDay > 15) {
//         targetMonth = currentMonth + 1;
//       }

//       // Calculate Deadline (15th of target month)
//       const deadlineDate = new Date(targetYear, targetMonth, 15);

//       // Calculate Start Date (1st of month after deadline)
//       const startDate = new Date(targetYear, targetMonth + 1, 1);

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate)
//       });
//     };

//     calculateDates();
//   }, []);

//   // Helper function for "January 15th" format
//   const formatDateWithSuffix = (date) => {
//     const day = date.getDate();
//     const month = date.toLocaleString('default', { month: 'long' });
    
//     let suffix = 'th';
//     if (day === 1 || day === 21 || day === 31) suffix = 'st';
//     else if (day === 2 || day === 22) suffix = 'nd';
//     else if (day === 3 || day === 23) suffix = 'rd';

//     return `${month} ${day}${suffix}`;
//   };

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
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 ">
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         {/* Community/Social Impact themed background */}
//         <img
//           src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
//           alt="Group of people connecting hands"
//           className="w-full h-full object-cover opacity-40"
//         />
//         {/* Gradient Overlay - Shifted to slight teal/green tint */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/60 to-slate-900/95" />
//       </div>

//       {/* 2. Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.div variants={itemVariants} className="flex justify-center mt-20 md:pt-40">
//             <span className="inline-block py-1 px-3 rounded-full bg-emerald-600/30 border border-emerald-400 text-emerald-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
//             SOCIAL IMPACT INCUBATOR
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//         >
//           Don't Just Watch Change Happen. <br />
//           <span className="text-emerald-400">Lead It.</span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//         >
//           LAUNCH YOUR OWN SOCIAL SERVICE PROJECT IN ~10 WEEKS!
//           <br />
//           <span className="text-gray-400 text-base mt-2 block">
//             Build a sustainable initiative, gain executive leadership experience, and make a tangible impact on your community.
//           </span>
//         </motion.p>
        
//         {/* Info Badges (Green/Teal/Blue Theme) */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
//         >
//           {/* Deadline Badge */}
//           <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-amber-500/30 text-amber-100 text-sm md:text-base shadow-lg">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-sm">⏳</span>
//             <span>Deadline: <span className="text-white font-bold tracking-wide">{dates.deadline}</span></span>
//           </div>

//           {/* Start Date Badge */}
//           <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-emerald-500/30 text-emerald-100 text-sm md:text-base shadow-lg">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">📅</span>
//             <span>Starts: <span className="text-white font-bold tracking-wide">{dates.start}</span></span>
//           </div>

//           {/* Status Badge */}
//           <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-blue-500/30 text-blue-100 text-sm md:text-base shadow-lg">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 text-sm">🚀</span>
//             <span>Cohort: <span className="text-white font-bold tracking-wide">Limited Spots</span></span>
//           </div>
//         </motion.div>

//         {/* CTA Buttons */}
//         {/* <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#register'>
//             <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:-translate-y-1">
//               Launch Your Project
//             </button>
//           </a>
//           <a href='/#examples'>
//             <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
//               View Past Impact
//             </button>
//           </a>
//         </motion.div> */}

//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
          
//           {/* BUTTON 1: Emerald Green (Solid) */}
//           <a href='/#contact'>
//             <motion.button 
//               whileHover={{ scale: 1.05, backgroundColor: '#047857' }} // Darker Green on Hover
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all"
//               style={{ 
//                 backgroundColor: '#059669', // Hardcoded Emerald Green
//                 boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)', // Green Glow
//                 border: 'none'
//               }}
//             >
//               Launch Your Project
//             </motion.button>
//           </a>

//           {/* BUTTON 2: Transparent (Outline) */}
//           <a href='#projects'>
//             <motion.button 
//               whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} // Slight white tint on Hover
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all backdrop-blur-sm"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(255, 255, 255, 0.3)', // Hardcoded White Border
//               }}
//             >
//               Select Impact Project
//             </motion.button>
//           </a>

//         </motion.div>

//       </motion.div>

//       {/* 3. Community/Connection Animation (Floating Nodes) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center gap-8 md:gap-16 pb-12 pointer-events-none"
//       >
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -20 - Math.random() * 20, 0],
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.7, 0.3]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.5,
//             }}
//             className="flex flex-col items-center gap-2"
//           >
//             {/* The Node/Person */}
//             <div className="w-3 h-3 md:w-4 md:h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
//             {/* The Connection Line (fading) */}
//             <div className="w-px h-12 bg-gradient-to-t from-transparent to-emerald-500/50" />
//           </motion.div>
//         ))}
//       </motion.div>

//     </section>
//   );
// };

// export default SocialProjectHero;




// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const SocialProjectHero = () => {
//   // 1. State
//   const [dates, setDates] = useState({ deadline: "Loading...", start: "Loading..." });

//   // 2. Logic
//   useEffect(() => {
//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); 
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       if (currentDay > 15) { targetMonth = currentMonth + 1; }

//       const deadlineDate = new Date(targetYear, targetMonth, 15);
//       const startDate = new Date(targetYear, targetMonth + 1, 1);

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate)
//       });
//     };
//     calculateDates();
//   }, []);

//   const formatDateWithSuffix = (date) => {
//     const day = date.getDate();
//     const month = date.toLocaleString('default', { month: 'long' });
//     let suffix = 'th';
//     if (day === 1 || day === 21 || day === 31) suffix = 'st';
//     else if (day === 2 || day === 22) suffix = 'nd';
//     else if (day === 3 || day === 23) suffix = 'rd';
//     return `${month} ${day}${suffix}`;
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   return (
//     // FIX: min-h-screen & flex-col for mobile responsiveness
//     <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 py-24 md:py-0">
      
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
//           alt="Community"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/60 to-slate-900/95" />
//       </div>

//       {/* Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-6 text-center text-white max-w-5xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.div variants={itemVariants} className="flex justify-center">
//             <span className="inline-block py-1 px-3 rounded-full bg-emerald-600/30 border border-emerald-400 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
//             SOCIAL IMPACT INCUBATOR
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//         >
//           Don't Just Watch Change Happen. <br />
//           <span className="text-emerald-400">Lead It.</span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//         >
//           LAUNCH YOUR OWN SOCIAL SERVICE PROJECT IN ~10 WEEKS!
//           <br />
//           <span className="text-gray-400 text-sm md:text-base mt-2 block">
//             Build a sustainable initiative, gain executive leadership experience, and make a tangible impact on your community.
//           </span>
//         </motion.p>
        
//         {/* Badges - Flex Wrap */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 mb-12"
//         >
//           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md border border-amber-500/30 text-amber-100 text-sm shadow-lg">
//             <span>Deadline: <span className="text-white font-bold tracking-wide">{dates.deadline}</span></span>
//           </div>

//           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md border border-emerald-500/30 text-emerald-100 text-sm shadow-lg">
//             <span>Starts: <span className="text-white font-bold tracking-wide">{dates.start}</span></span>
//           </div>
//         </motion.div>

//         {/* Buttons - Mobile Stack */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
//         >
//           <a href='/#contact' className="w-full sm:w-auto">
//             <motion.button 
//               whileHover={{ scale: 1.05, backgroundColor: '#047857' }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.5)]"
//               style={{ backgroundColor: '#059669', border: 'none' }}
//             >
//               Launch Your Project
//             </motion.button>
//           </a>

//           <a href='#projects' className="w-full sm:w-auto">
//             <motion.button 
//               whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold text-white transition-all backdrop-blur-sm"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(255, 255, 255, 0.3)',
//               }}
//             >
//               Select Impact Project
//             </motion.button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* Animation (Hidden on very small screens to save space if needed, or kept at bottom) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center gap-8 md:gap-16 pb-12 pointer-events-none"
//       >
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -20 - Math.random() * 20, 0],
//               opacity: [0.3, 0.7, 0.3]
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.5,
//             }}
//             className="flex flex-col items-center gap-2"
//           >
//             <div className="w-2 h-2 md:w-4 md:h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
//             <div className="w-px h-8 md:h-12 bg-gradient-to-t from-transparent to-emerald-500/50" />
//           </motion.div>
//         ))}
//       </motion.div>

//     </section>
//   );
// };

// export default SocialProjectHero;


'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SocialProjectHero = () => {
  // 1. STATE for Dynamic Dates
  const [dates, setDates] = useState({
    deadline: "Loading...",
    start: "Loading...",
    outcome: "Loading..."
  });

  // State for particles (Hydration fix)
  const [particles, setParticles] = useState([]);

  // 2. LOGIC
  useEffect(() => {
    // --- Date Logic ---
    const formatDateWithSuffix = (date) => {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      let suffix = 'th';
      if (day === 1 || day === 21 || day === 31) suffix = 'st';
      else if (day === 2 || day === 22) suffix = 'nd';
      else if (day === 3 || day === 23) suffix = 'rd';
      return `${month} ${day}${suffix}`;
    };

    const calculateDates = () => {
      const today = new Date();
      const currentDay = today.getDate();
      const currentMonth = today.getMonth(); 
      const currentYear = today.getFullYear();

      let targetMonth = currentMonth;
      let targetYear = currentYear;

      if (currentDay > 15) {
        targetMonth = currentMonth + 1;
      }

      const deadlineDate = new Date(targetYear, targetMonth, 15);
      const startDate = new Date(targetYear, targetMonth + 1, 1);
      
      // Outcome: 10 weeks later
      const outcomeDate = new Date(startDate);
      outcomeDate.setDate(startDate.getDate() + 70); 

      setDates({
        deadline: formatDateWithSuffix(deadlineDate),
        start: formatDateWithSuffix(startDate),
        outcome: formatDateWithSuffix(outcomeDate)
      });
    };

    calculateDates();

    // --- Particle Logic (Client Side) ---
    const generatedParticles = [...Array(15)].map((_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100 + 10, // Start slightly lower
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
        scale: Math.random() * 0.5 + 0.5,
        drift: (Math.random() - 0.5) * 15 // Gentle horizontal drift
    }));
    setParticles(generatedParticles);

  }, []);

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
    // SAFE MODE: Hardcoded Dark Emerald/Slate Background
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40" 
      style={{ backgroundColor: '#022c22' }} // Deep Emerald/Slate
    >
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
          alt="Volunteers working together"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlay - Deep Green to Black */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(2, 44, 34, 0.7), rgba(2, 44, 34, 0.95), #022c22)' }}
        />
        
        {/* Subtle Organic Texture Overlay */}
        <div 
            className="absolute inset-0 opacity-10"
            style={{ 
                backgroundImage: 'radial-gradient(rgba(52, 211, 153, 0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />
      </div>

      {/* 2. Main Content (Exact Alignment from StartupHero) */}
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
                backgroundColor: 'rgba(52, 211, 153, 0.1)', // Emerald tint
                borderColor: 'rgba(52, 211, 153, 0.5)',   // Emerald border
                borderWidth: '1px',
                color: '#6ee7b7' // Light Emerald text
              }}
            >
            SOCIAL IMPACT INCUBATOR
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
        >
          Don't Just Watch <br />
          Change Happen. <br />
          <span 
            className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #34d399, #2dd4bf)', // Emerald to Teal
              WebkitBackgroundClip: 'text'
            }}
          >
            Lead It.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: '#cbd5e1' }} // Slate-300
        >
          LAUNCH YOUR OWN SOCIAL SERVICE PROJECT IN 10 WEEKS.
          <br />
          <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
            Build a sustainable initiative, gain executive leadership experience, and make a real-world impact.
          </span>
        </motion.p>
        
        {/* DYNAMIC INFO BADGES */}
        {/* <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        > */}
          {/* Deadline Badge */}
          {/* <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
            style={{ backgroundColor: 'rgba(2, 44, 34, 0.6)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>⏳</span>
            <span style={{ color: '#fca5a5' }}>Deadline: <span className="font-bold text-white">{dates.deadline}</span></span>
          </div> */}

          {/* Start Date Badge */}
          {/* <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
            style={{ backgroundColor: 'rgba(2, 44, 34, 0.6)', border: '1px solid rgba(52, 211, 153, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(52, 211, 153, 0.2)' }}>🌱</span>
            <span style={{ color: '#6ee7b7' }}>Starts: <span className="font-bold text-white">{dates.start}</span></span>
          </div> */}

          {/* Outcome Badge */}
          {/* <div 
            className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
            style={{ backgroundColor: 'rgba(2, 44, 34, 0.6)', border: '1px solid rgba(251, 191, 36, 0.4)' }}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}>🤝</span>
            <span style={{ color: '#fcd34d' }}>Impact By: <span className="font-bold text-white">{dates.outcome}</span></span>
          </div> */}

        {/* </motion.div> */}

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href='/#contact'>
            <button 
              className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]"
              style={{ 
                background: 'linear-gradient(to right, #059669, #0d9488)', // Green to Teal
                border: 'none',
              }}
            >
              Launch Your Project
            </button>
          </a>
          <a href='#projects'>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-emerald-900/20"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid rgba(110, 231, 183, 0.5)', // Visible Emerald Border
                color: '#6ee7b7' // Light Emerald text
              }}
            >
              See Project Ideas
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Animation: "Nature/Growth" Particles (Replaces Circuit) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Floating "Fireflies" / Spores */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "110vh", x: `${p.initialX}vw`, opacity: 0, scale: 0 }}
            animate={{
              y: "-10vh",
              x: `${p.initialX + p.drift}vw`,
              opacity: [0, 0.6, 0],
              scale: [0, p.scale, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            className="absolute bottom-0 w-2 h-2 rounded-full shadow-[0_0_15px_#34d399]"
            style={{ backgroundColor: '#34d399' }} // Emerald dots
          />
        ))}
        
        {/* Subtle rising gentle lines (Growth) */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ height: "0%", bottom: "0%", left: `${15 + (i * 25)}%`, opacity: 0 }}
            animate={{
              height: ["0%", "40%", "50%"],
              bottom: ["0%", "20%", "100%"],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-px bg-gradient-to-t from-emerald-600/0 via-emerald-400/30 to-emerald-600/0"
          />
        ))}
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-10" 
        style={{ background: 'linear-gradient(to top, #022c22, transparent)' }}
      />

    </section>
  );
};

export default SocialProjectHero;