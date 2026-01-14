// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const PodcastHero = () => {
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
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         {/* Podcast/Studio themed background */}
//         <img
//           src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
//           alt="Microphone in studio"
//           className="w-full h-full object-cover opacity-50"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/95" />
//       </div>

//       {/* 2. Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.span 
//           variants={itemVariants}
//           className="inline-block py-1 px-3 rounded-full bg-purple-600/30 border border-purple-400 text-purple-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm"
//         >
//           STUDENT PODCAST INCUBATOR
//         </motion.span>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//         >
//           Don't Just Be Heard. <br />
//           <span className="text-purple-400">Be Followed.</span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
//         >
//           Launch your own professional podcast in 8 weeks. 
//           Build your network, interview industry leaders, and create a digital asset that sets your career apart.
//         </motion.p>
        

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#contact'>
//           <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] hover:-translate-y-1">
//             Start Your Podcast
//           </button>
//           </a>
// <a href='https://www.youtube.com/@YoungVoicesBigIssues'>
//           <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
//             View Sample Episodes
//           </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Audio Wave Animation (Decorative) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 pb-10"
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               height: [20, Math.random() * 60 + 20, 20],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: i * 0.1,
//             }}
//             className="w-1 md:w-2 bg-purple-500/30 rounded-t-full"
//           />
//         ))}
//       </motion.div>

//     </section>
//   );
// };

// export default PodcastHero;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const PodcastHero = () => {
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
//         {/* Podcast/Studio themed background */}
//         <img
//           src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
//           alt="Microphone in studio"
//           className="w-full h-full object-cover opacity-50"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/95" />
//       </div>

//       {/* 2. Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.span 
//           variants={itemVariants}
//           className="inline-block mt-20  py-1 px-3 rounded-full bg-purple-600/30 border border-purple-400 text-purple-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm"
//         >
//           STUDENT PODCAST INCUBATOR
//         </motion.span>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//         >
//           Don't Just Be Heard. <br />
//           <span className="text-purple-400">Be Followed.</span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
//         >
//           Launch Your Own Podcast in ~10 Weeks. Build your network, interview industry leaders, and create a digital asset that sets your career apart.
//           {/* Launch your own professional podcast in 8 weeks.  */}
      
//         </motion.p>
        
//         {/* NEW: Cohort & Status Info (Purple Theme) */}
//     {/* <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
//         > */}
//           {/* Start Date Badge */}
//           {/* <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-purple-500/30 text-purple-100 text-base md:text-lg shadow-lg">
//             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 text-xl">📅</span>
//             <span>Start Date: <span className="text-white font-bold tracking-wide">January 15th, 2026</span></span>
//           </div> */}

//           {/* Status Badge */}
//           {/* <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-pink-500/30 text-pink-100 text-base md:text-lg shadow-lg">
//             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 text-xl">⚠️</span>
//             <span>Status: <span className="text-white font-bold tracking-wide">Limited Slots Available</span></span>
//           </div> */}
//         {/* </motion.div> */}

//         <motion.div 
//   variants={itemVariants}
//   className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
// >
//   {/* Deadline Badge */}
//   <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-amber-500/30 text-amber-100 text-base md:text-lg shadow-lg">
//     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 text-xl">⏳</span>
//     <span>Deadline: <span className="text-white font-bold tracking-wide">January 15th, 2026</span></span>
//   </div>

//   {/* Start Date Badge */}
//   <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-purple-500/30 text-purple-100 text-base md:text-lg shadow-lg">
//     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 text-xl">📅</span>
//     <span>Start Date: <span className="text-white font-bold tracking-wide">February 1st, 2026</span></span>
//   </div>

//   {/* Status Badge */}
//   <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-pink-500/30 text-pink-100 text-base md:text-lg shadow-lg">
//     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 text-xl">⚠️</span>
//     <span>Status: <span className="text-white font-bold tracking-wide">Limited Slots Available</span></span>
//   </div>
// </motion.div>

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#contact'>
//           <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] hover:-translate-y-1">
//             Start Your Podcast
//           </button>
//           </a>
//           <a href='https://www.youtube.com/@YoungVoicesBigIssues' target="_blank" rel="noopener noreferrer">
//           <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
//             View Sample Episodes
//           </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Audio Wave Animation (Decorative) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 pb-10"
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               height: [20, Math.random() * 60 + 20, 20],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: i * 0.1,
//             }}
//             className="w-1 md:w-2 bg-purple-500/30 rounded-t-full"
//           />
//         ))}
//       </motion.div>

//     </section>
//   );
// };

// export default PodcastHero;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   // 1. State to hold the dynamic dates
//   const [dates, setDates] = useState({
//     deadline: "Loading...",
//     start: "Loading..."
//   });

//   // 2. Logic to calculate dates based on current day
//   useEffect(() => {
//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); // 0 = Jan, 11 = Dec
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       // RULE: If today is past the 15th, roll over to the next month cycle
//       if (currentDay > 15) {
//         targetMonth = currentMonth + 1;
//       }

//       // Calculate Deadline (Always the 15th of the target month)
//       const deadlineDate = new Date(targetYear, targetMonth, 15);

//       // Calculate Start Date (Always the 1st of the month AFTER the deadline)
//       const startDate = new Date(targetYear, targetMonth + 1, 1);

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate)
//       });
//     };

//     calculateDates();
//   }, []);

//   // Helper function to format date like "January 15th, 2026"
//   const formatDateWithSuffix = (date) => {
//     const day = date.getDate();
//     const month = date.toLocaleString('default', { month: 'long' });
//     const year = date.getFullYear();

//     // Add suffix (st, nd, rd, th)
//     let suffix = 'th';
//     if (day === 1 || day === 21 || day === 31) suffix = 'st';
//     else if (day === 2 || day === 22) suffix = 'nd';
//     else if (day === 3 || day === 23) suffix = 'rd';

//     return `${month} ${day}${suffix}, ${year}`;
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
//         <img
//           src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
//           alt="Microphone in studio"
//           className="w-full h-full object-cover opacity-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/95" />
//       </div>

//       {/* 2. Main Content */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.span 
//           variants={itemVariants}
//           className="inline-block mt-20 py-1 px-3 rounded-full bg-purple-600/30 border border-purple-400 text-purple-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm"
//         >
//           STUDENT PODCAST INCUBATOR
//         </motion.span>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//         >
//           Don't Just Be Heard. <br />
//           <span className="text-purple-400">Be Followed.</span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
//         >
//           Launch Your Own Podcast in ~10 Weeks. Build your network, interview industry leaders, and create a digital asset that sets your career apart.
//         </motion.p>
        
//         {/* DYNAMIC DATE BADGES */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
//         >
//           {/* Dynamic Deadline Badge */}
//           <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-amber-500/30 text-amber-100 text-base md:text-lg shadow-lg">
//             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 text-xl">⏳</span>
//             <span>Deadline: <span className="text-white font-bold tracking-wide">{dates.deadline}</span></span>
//           </div>

//           {/* Dynamic Start Date Badge */}
//           <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-purple-500/30 text-purple-100 text-base md:text-lg shadow-lg">
//             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 text-xl">📅</span>
//             <span>Start Date: <span className="text-white font-bold tracking-wide">{dates.start}</span></span>
//           </div>

//           {/* Status Badge */}
//           <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-pink-500/30 text-pink-100 text-base md:text-lg shadow-lg">
//             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 text-xl">⚠️</span>
//             <span>Status: <span className="text-white font-bold tracking-wide">Limited Slots Available</span></span>
//           </div>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#contact'>
//             <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] hover:-translate-y-1">
//               Start Your Podcast
//             </button>
//           </a>
//           <a href='https://www.youtube.com/@YoungVoicesBigIssues' target="_blank" rel="noopener noreferrer">
//             <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
//               View Sample Episodes
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Audio Wave Animation (Decorative) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 pb-10"
//       >
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               height: [20, Math.random() * 60 + 20, 20],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: i * 0.1,
//             }}
//             className="w-1 md:w-2 bg-purple-500/30 rounded-t-full"
//           />
//         ))}
//       </motion.div>

//     </section>
//   );
// };

// export default Hero;


'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // 1. State for Dynamic Dates
  const [dates, setDates] = useState({
    deadline: "Loading...",
    start: "Loading..."
  });

  // 2. Logic to calculate dates
  useEffect(() => {
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

      setDates({
        deadline: formatDateWithSuffix(deadlineDate),
        start: formatDateWithSuffix(startDate)
      });
    };

    calculateDates();
  }, []);

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
    // FIX: min-h-screen ensures full height on mobile, flex-col stacks content
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 py-24 md:py-0"
    >
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
          alt="Microphone in studio"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900/95" />
      </div>

      {/* 2. Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
            <span 
            className="inline-block py-1 px-3 rounded-full bg-purple-600/30 border border-purple-400 text-purple-200 text-xs md:text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm"
            >
            STUDENT PODCAST INCUBATOR
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Don't Just Be Heard. <br />
          <span className="text-purple-400">Be Followed.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Launch Your Own Podcast in ~10 Weeks. Build your network, interview industry leaders, and create a digital asset that sets your career apart.
        </motion.p>
        
        {/* DYNAMIC DATE BADGES - Flex Wrap */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md border border-amber-500/30 text-amber-100 text-sm shadow-lg">
            <span>Deadline: <span className="text-white font-bold tracking-wide">{dates.deadline}</span></span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md border border-purple-500/30 text-purple-100 text-sm shadow-lg">
            <span>Start Date: <span className="text-white font-bold tracking-wide">{dates.start}</span></span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md border border-pink-500/30 text-pink-100 text-sm shadow-lg">
            <span>Status: <span className="text-white font-bold tracking-wide">Limited Slots</span></span>
          </div>
        </motion.div>

        {/* CTA Buttons - Mobile Stack */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a href='/#contact' className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] hover:-translate-y-1">
              Start Your Podcast
            </button>
          </a>
          <a href='https://www.youtube.com/@YoungVoicesBigIssues' target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
              View Sample Episodes
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Audio Wave Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 pb-10 pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: [20, Math.random() * 60 + 20, 20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1,
            }}
            className="w-1 md:w-2 bg-purple-500/30 rounded-t-full"
          />
        ))}
      </motion.div>

    </section>
  );
};

export default Hero;