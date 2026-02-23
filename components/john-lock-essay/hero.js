// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CompetitionHero = () => {
//   // 1. STATE for Dynamic Dates
//   const [dates, setDates] = useState({
//     deadline: "Loading...",
//     start: "Loading...",
//     submission: "Loading..."
//   });

//   // 2. LOGIC to Calculate Dates (8-10 Weeks timeline)
//   useEffect(() => {
//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); 
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       // Rule: If today > 15th, roll over to the next month cycle
//       if (currentDay > 15) {
//         targetMonth = currentMonth + 1;
//       }

//       // A. Deadline: 15th of the target month
//       const deadlineDate = new Date(targetYear, targetMonth, 15);

//       // B. Start Date: 1st of the NEXT month
//       const startDate = new Date(targetYear, targetMonth + 1, 1);

//       // C. Submission Date: 10 weeks (70 days) after Start Date
//       const submissionDate = new Date(startDate);
//       submissionDate.setDate(startDate.getDate() + 70); 

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate),
//         submission: formatDateWithSuffix(submissionDate)
//       });
//     };

//     calculateDates();
//   }, []);

//   // Helper Function
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
//     // SAFE MODE: Hardcoded Slate-950 Background (Academic/Premium Theme)
//     <section 
//       className="relative h-screen w-full flex items-center justify-center overflow-hidden"
//       style={{ backgroundColor: '#0f172a' }} 
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop"
//           alt="Library and writing"
//           className="w-full h-full object-cover opacity-30"
//         />
//         {/* Gradient Overlay - Slate to Black */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.95), #0f172a)' }}
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
//                 color: '#fbbf24' // Amber-400 text
//               }}
//             >
//             ESSAY 
//             COMPETITION
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           Turn Your Curiosity Into <br />
//           <span 
//             className="text-transparent bg-clip-text filter drop-shadow-lg"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)', // Amber to Orange
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             A Gold Medal.
//           </span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#cbd5e1' }}
//         >
//           COMPETITION PREP + SUBMISSION SUPPORT (8-10 WEEKS)
//           <br />
//           <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
//             Master academic writing. We guide you from thesis to final submission for prestigious contests like the <strong>John Locke Institute</strong>, Marshall Society, and Concord Review.
//           </span>
//         </motion.p>
        
//         {/* DYNAMIC DATE BADGES */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
//         >
//           {/* Deadline Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>⏳</span>
//             <span style={{ color: '#fca5a5' }}>Apply By: <span className="font-bold text-white">{dates.deadline}</span></span>
//           </div>

//           {/* Start Date Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(251, 191, 36, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}>✍️</span>
//             <span style={{ color: '#fde68a' }}>Cohort Starts: <span className="font-bold text-white">{dates.start}</span></span>
//           </div>

//           {/* Submission Date Badge */}
//           <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg"
//             style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}>🏆</span>
//             <span style={{ color: '#6ee7b7' }}>Submit Final Draft: <span className="font-bold text-white">{dates.submission}</span></span>
//           </div>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#contact'>
//             <button 
//               className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
//               style={{ 
//                 background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to 700
//                 border: 'none',
//                 boxShadow: '0 0 20px rgba(217, 119, 6, 0.4)'
//               }}
//             >
//               Start Your Draft
//             </button>
//           </a>
//           <a href='#Roadmap'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(251, 191, 36, 0.5)', // Visible Gold Border
//                 color: '#fbbf24' // Gold text
//               }}
//             >
//               See The Roadmap
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: "Gold Dust" Particles */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, scale: 0.5 }}
//             animate={{
//               y: "-10vh",
//               x: (Math.random() - 0.5) * 50 + "vw",
//               opacity: [0, 0.8, 0],
//               scale: [0.5, 1, 0.5],
//               rotate: Math.random() * 360
//             }}
//             transition={{
//               duration: 8 + Math.random() * 10,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 5,
//             }}
//             className="absolute bottom-0 w-1 h-1 md:w-2 md:h-2 rounded-full"
//             style={{ 
//                 backgroundColor: '#fbbf24',
//                 boxShadow: '0 0 10px #fbbf24'
//             }}
//           />
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

// export default CompetitionHero;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CompetitionHero = () => {
//   // 1. STATE for Dynamic Dates
//   const [dates, setDates] = useState({
//     deadline: "Loading...",
//     start: "Loading...",
//     submission: "Loading..."
//   });

//   // State for particles (Hydration fix)
//   const [particles, setParticles] = useState([]);

//   // 2. LOGIC
//   useEffect(() => {
//     // --- Date Logic ---
//     const formatDateWithSuffix = (date) => {
//       const day = date.getDate();
//       const month = date.toLocaleString('default', { month: 'long' });
//       let suffix = 'th';
//       if (day === 1 || day === 21 || day === 31) suffix = 'st';
//       else if (day === 2 || day === 22) suffix = 'nd';
//       else if (day === 3 || day === 23) suffix = 'rd';
//       return `${month} ${day}${suffix}`;
//     };

//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); 
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       // Rule: If today > 15th, roll over to the next month cycle
//       if (currentDay > 15) {
//         targetMonth = currentMonth + 1;
//       }

//       const deadlineDate = new Date(targetYear, targetMonth, 15);
//       const startDate = new Date(targetYear, targetMonth + 1, 1);
      
//       // Submission: 10 weeks (70 days) after Start
//       const submissionDate = new Date(startDate);
//       submissionDate.setDate(startDate.getDate() + 70); 

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate),
//         submission: formatDateWithSuffix(submissionDate)
//       });
//     };

//     calculateDates();

//     // --- Particle Logic (Client Side - Gold Dust) ---
//     const generatedParticles = [...Array(15)].map((_, i) => ({
//       id: i,
//       initialX: Math.random() * 100,
//       initialY: Math.random() * 100,
//       duration: 8 + Math.random() * 10,
//       delay: Math.random() * 5,
//       scale: Math.random() * 0.5 + 0.5,
//       drift: (Math.random() - 0.5) * 50, // Horizontal drift
//       rotation: Math.random() * 360
//     }));
//     setParticles(generatedParticles);

//   }, []);

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
//     // SAFE MODE: Hardcoded Slate-950 Background (Academic/Premium Theme)
//     // Structure: Updated to min-h-screen/flex-col for perfect alignment
//     <section 
//       className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40"
//       style={{ backgroundColor: '#0f172a' }} 
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop"
//           alt="Library and writing"
//           className="w-full h-full object-cover opacity-30"
//         />
//         {/* Gradient Overlay - Slate to Black */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.95), #0f172a)' }}
//         />
//       </div>

//       {/* 2. Main Content (Updated Alignment) */}
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
//                 color: '#fbbf24' // Amber-400 text
//               }}
//             >
//             ESSAY COMPETITION
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           Turn Your Curiosity Into <br />
//           <span 
//             className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)', // Amber to Orange
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             A Gold Medal.
//           </span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#cbd5e1' }}
//         >
//           COMPETITION PREP + SUBMISSION SUPPORT (8-10 WEEKS)
//           <br />
//           <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
//             Master academic writing. We guide you from thesis to final submission for prestigious contests like the <strong>John Locke Institute</strong>, Marshall Society, and Concord Review.
//           </span>
//         </motion.p>
        
//         {/* DYNAMIC DATE BADGES */}
//         {/* <motion.div 
//           variants={itemVariants}
//           className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
//         > */}
//           {/* Deadline Badge */}
//           {/* <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
//             style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>⏳</span>
//             <span style={{ color: '#fca5a5' }}>Apply By: <span className="font-bold text-white">{dates.deadline}</span></span>
//           </div> */}

//           {/* Start Date Badge */}
//           {/* <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
//             style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(251, 191, 36, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}>✍️</span>
//             <span style={{ color: '#fde68a' }}>Cohort Starts: <span className="font-bold text-white">{dates.start}</span></span>
//           </div> */}

//           {/* Submission Date Badge */}
//           {/* <div 
//             className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default"
//             style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.4)' }}
//           >
//             <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}>🏆</span>
//             <span style={{ color: '#6ee7b7' }}>Submit Final: <span className="font-bold text-white">{dates.submission}</span></span>
//           </div> */}
//         {/* </motion.div> */}

//         {/* CTA Buttons (Updated Alignment) */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#contact'>
//             <button 
//               className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]"
//               style={{ 
//                 background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to 700
//                 border: 'none',
//               }}
//             >
//               Start Your Draft
//             </button>
//           </a>
//           <a href='#Roadmap'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-amber-900/20"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(251, 191, 36, 0.5)', // Visible Gold Border
//                 color: '#fbbf24' // Gold text
//               }}
//             >
//               See The Roadmap
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: "Gold Dust" Particles (Fixed Hydration) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {particles.map((p) => (
//           <motion.div
//             key={p.id}
//             initial={{ y: "110vh", x: `${p.initialX}vw`, opacity: 0, scale: 0.5 }}
//             animate={{
//               y: "-10vh",
//               x: `${p.drift}px`,
//               opacity: [0, 0.8, 0],
//               scale: [0.5, 1, 0.5],
//               rotate: p.rotation
//             }}
//             transition={{
//               duration: p.duration,
//               repeat: Infinity,
//               ease: "linear",
//               delay: p.delay,
//             }}
//             className="absolute bottom-0 w-1 h-1 md:w-2 md:h-2 rounded-full"
//             style={{ 
//                 backgroundColor: '#fbbf24',
//                 boxShadow: '0 0 10px #fbbf24'
//             }}
//           />
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

// export default CompetitionHero;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CompetitionHero = () => {
//   // 1. STATE for Dynamic Dates
//   const [dates, setDates] = useState({
//     deadline: "Loading...",
//     start: "Loading...",
//     submission: "Loading..."
//   });

//   // State for particles (Hydration fix)
//   const [particles, setParticles] = useState([]);

//   // 2. LOGIC
//   useEffect(() => {
//     // --- Date Logic ---
//     const formatDateWithSuffix = (date) => {
//       const day = date.getDate();
//       const month = date.toLocaleString('default', { month: 'long' });
//       let suffix = 'th';
//       if (day === 1 || day === 21 || day === 31) suffix = 'st';
//       else if (day === 2 || day === 22) suffix = 'nd';
//       else if (day === 3 || day === 23) suffix = 'rd';
//       return `${month} ${day}${suffix}`;
//     };

//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); 
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       // Rule: If today > 15th, roll over to the next month cycle
//       if (currentDay > 15) {
//         targetMonth = currentMonth + 1;
//       }

//       const deadlineDate = new Date(targetYear, targetMonth, 15);
//       const startDate = new Date(targetYear, targetMonth + 1, 1);
      
//       // Submission: 10 weeks (70 days) after Start
//       const submissionDate = new Date(startDate);
//       submissionDate.setDate(startDate.getDate() + 70); 

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate),
//         submission: formatDateWithSuffix(submissionDate)
//       });
//     };

//     calculateDates();

//     // --- Particle Logic (Client Side - Gold Dust) ---
//     const generatedParticles = [...Array(15)].map((_, i) => ({
//       id: i,
//       initialX: Math.random() * 100,
//       initialY: Math.random() * 100,
//       duration: 8 + Math.random() * 10,
//       delay: Math.random() * 5,
//       scale: Math.random() * 0.5 + 0.5,
//       drift: (Math.random() - 0.5) * 50, // Horizontal drift
//       rotation: Math.random() * 360
//     }));
//     setParticles(generatedParticles);

//   }, []);

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
//     // SAFE MODE: Hardcoded Slate-950 Background (Academic/Premium Theme)
//     // Structure: Updated to min-h-screen/flex-col for perfect alignment
//     <section 
//       className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40"
//       style={{ backgroundColor: '#0f172a' }} 
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop"
//           alt="Library and writing"
//           className="w-full h-full object-cover opacity-30"
//         />
//         {/* Gradient Overlay - Slate to Black */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.95), #0f172a)' }}
//         />
//       </div>

//       {/* 2. Main Content (Updated Alignment) */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge - Updated to "8-Week Intensive" from Flyer */}
//         <motion.div variants={itemVariants} className="flex justify-center">
//             <span 
//               className="inline-block py-1 px-4 rounded-full text-sm font-bold tracking-widest mb-6 backdrop-blur-md uppercase"
//               style={{ 
//                 backgroundColor: 'rgba(251, 191, 36, 0.1)', // Amber tint
//                 borderColor: 'rgba(251, 191, 36, 0.5)',   // Amber border
//                 borderWidth: '1px',
//                 color: '#fbbf24' // Amber-400 text
//               }}
//             >
//              8-Week Intensive
//             </span>
//         </motion.div>

//         {/* Headline - Updated to "Essay Writing Program" */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           Essay Writing Program
//         </motion.h1>

//         {/* Sub-headline - Updated to "Multiple Competitions CRACKED" */}
//         <motion.h2
//           variants={itemVariants} 
//           className="text-3xl md:text-4xl font-bold mb-6"
//         >
//           One Course, Multiple Competitions <br className="hidden md:block"/>
//           <span 
//             className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)', // Amber to Orange
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             CRACKED!
//           </span>
//         </motion.h2>

//         {/* Sub-headline/Description - Updated with Specific Competitions from Flyer */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#cbd5e1' }}
//         >
//           Master the art of argument. Target the <strong>John Locke Institute</strong>, <strong>The Adroit Journal</strong>, <strong>Columbia Undergraduate Law Review</strong>, and <strong>Oxford Scholastica Academy</strong>.
//           <br className="hidden md:block" />
//           <span className="text-base mt-2 block" style={{ color: '#94a3b8' }}>
//             Create a competition-ready essay that signals depth to Ivy League admissions.
//           </span>
//         </motion.p>
        
//         {/* CTA Buttons */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
//         >
//           <a href='/#contact'>
//             <button 
//               className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]"
//               style={{ 
//                 background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to 700
//                 border: 'none',
//               }}
//             >
//               Start Writing
//             </button>
//           </a>
//           <a href='#Roadmap'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-amber-900/20"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(251, 191, 36, 0.5)', // Visible Gold Border
//                 color: '#fbbf24' // Gold text
//               }}
//             >
//               View Syllabus
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: "Gold Dust" Particles */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {particles.map((p) => (
//           <motion.div
//             key={p.id}
//             initial={{ y: "110vh", x: `${p.initialX}vw`, opacity: 0, scale: 0.5 }}
//             animate={{
//               y: "-10vh",
//               x: `${p.drift}px`,
//               opacity: [0, 0.8, 0],
//               scale: [0.5, 1, 0.5],
//               rotate: p.rotation
//             }}
//             transition={{
//               duration: p.duration,
//               repeat: Infinity,
//               ease: "linear",
//               delay: p.delay,
//             }}
//             className="absolute bottom-0 w-1 h-1 md:w-2 md:h-2 rounded-full"
//             style={{ 
//                 backgroundColor: '#fbbf24',
//                 boxShadow: '0 0 10px #fbbf24'
//             }}
//           />
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

// export default CompetitionHero;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CompetitionHero = () => {
//   // 1. STATE for Dynamic Dates
//   const [dates, setDates] = useState({
//     deadline: "Loading...",
//     start: "Loading...",
//     submission: "Loading..."
//   });

//   // State for particles (Hydration fix)
//   const [particles, setParticles] = useState([]);

//   // 2. LOGIC
//   useEffect(() => {
//     // --- Date Logic ---
//     const formatDateWithSuffix = (date) => {
//       const day = date.getDate();
//       const month = date.toLocaleString('default', { month: 'long' });
//       let suffix = 'th';
//       if (day === 1 || day === 21 || day === 31) suffix = 'st';
//       else if (day === 2 || day === 22) suffix = 'nd';
//       else if (day === 3 || day === 23) suffix = 'rd';
//       return `${month} ${day}${suffix}`;
//     };

//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); 
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       // Rule: If today > 15th, roll over to the next month cycle
//       if (currentDay > 15) {
//         targetMonth = currentMonth + 1;
//       }

//       const deadlineDate = new Date(targetYear, targetMonth, 15);
//       const startDate = new Date(targetYear, targetMonth + 1, 1);
      
//       // Submission: 10 weeks (70 days) after Start
//       const submissionDate = new Date(startDate);
//       submissionDate.setDate(startDate.getDate() + 70); 

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate),
//         submission: formatDateWithSuffix(submissionDate)
//       });
//     };

//     calculateDates();

//     // --- Particle Logic (Client Side - Gold Dust) ---
//     const generatedParticles = [...Array(15)].map((_, i) => ({
//       id: i,
//       initialX: Math.random() * 100,
//       initialY: Math.random() * 100,
//       duration: 8 + Math.random() * 10,
//       delay: Math.random() * 5,
//       scale: Math.random() * 0.5 + 0.5,
//       drift: (Math.random() - 0.5) * 50, // Horizontal drift
//       rotation: Math.random() * 360
//     }));
//     setParticles(generatedParticles);

//   }, []);

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
//     // SAFE MODE: Hardcoded Slate-950 Background (Academic/Premium Theme)
//     // Structure: Updated to min-h-screen/flex-col for perfect alignment
//     <section 
//       className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40"
//       style={{ backgroundColor: '#0f172a' }} 
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop"
//           alt="Library and writing"
//           className="w-full h-full object-cover opacity-30"
//         />
//         {/* Gradient Overlay - Slate to Black */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.95), #0f172a)' }}
//         />
//       </div>

//       {/* 2. Main Content (Updated Alignment) */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.div variants={itemVariants} className="flex justify-center">
//             <span 
//               className="inline-block py-1 px-4 rounded-full text-sm font-bold tracking-widest mb-6 backdrop-blur-md uppercase"
//               style={{ 
//                 backgroundColor: 'rgba(251, 191, 36, 0.1)', // Amber tint
//                 borderColor: 'rgba(251, 191, 36, 0.5)',   // Amber border
//                 borderWidth: '1px',
//                 color: '#fbbf24' // Amber-400 text
//               }}
//             >
//             8-WEEK INTENSIVE PROGRAM
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           One Course, <br />
//           Multiple Competitions <span 
//             className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)', // Amber to Orange
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             CRACKED!
//           </span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#cbd5e1' }}
//         >
//           Master the art of argument. Target the <strong>John Locke Institute, The Adroit Journal, Columbia Undergraduate Law Review,</strong> and <strong>Oxford Scholastica Academy</strong>.
//           <br />
//           <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
//             Create a competition-ready essay that signals depth to Ivy League admissions.
//           </span>
//         </motion.p>
        
//         {/* CTA Buttons (Updated Alignment) */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#register'>
//             <button 
//               className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]"
//               style={{ 
//                 background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to 700
//                 border: 'none',
//               }}
//             >
//               Start Writing
//             </button>
//           </a>
//           <a href='/#syllabus'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-amber-900/20"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(251, 191, 36, 0.5)', // Visible Gold Border
//                 color: '#fbbf24' // Gold text
//               }}
//             >
//               View Syllabus
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: "Gold Dust" Particles (Fixed Hydration) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {particles.map((p) => (
//           <motion.div
//             key={p.id}
//             initial={{ y: "110vh", x: `${p.initialX}vw`, opacity: 0, scale: 0.5 }}
//             animate={{
//               y: "-10vh",
//               x: `${p.drift}px`,
//               opacity: [0, 0.8, 0],
//               scale: [0.5, 1, 0.5],
//               rotate: p.rotation
//             }}
//             transition={{
//               duration: p.duration,
//               repeat: Infinity,
//               ease: "linear",
//               delay: p.delay,
//             }}
//             className="absolute bottom-0 w-1 h-1 md:w-2 md:h-2 rounded-full"
//             style={{ 
//                 backgroundColor: '#fbbf24',
//                 boxShadow: '0 0 10px #fbbf24'
//             }}
//           />
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

// export default CompetitionHero;




// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CompetitionHero = () => {
//   // 1. STATE for Dynamic Dates
//   const [dates, setDates] = useState({
//     deadline: "Loading...",
//     start: "Loading...",
//     submission: "Loading..."
//   });

//   // State for particles (Hydration fix)
//   const [particles, setParticles] = useState([]);

//   // 2. LOGIC
//   useEffect(() => {
//     // --- Date Logic ---
//     const formatDateWithSuffix = (date) => {
//       const day = date.getDate();
//       const month = date.toLocaleString('default', { month: 'long' });
//       let suffix = 'th';
//       if (day === 1 || day === 21 || day === 31) suffix = 'st';
//       else if (day === 2 || day === 22) suffix = 'nd';
//       else if (day === 3 || day === 23) suffix = 'rd';
//       return `${month} ${day}${suffix}`;
//     };

//     const calculateDates = () => {
//       const today = new Date();
//       const currentDay = today.getDate();
//       const currentMonth = today.getMonth(); 
//       const currentYear = today.getFullYear();

//       let targetMonth = currentMonth;
//       let targetYear = currentYear;

//       // Rule: If today > 15th, roll over to the next month cycle
//       if (currentDay > 15) {
//         targetMonth = currentMonth + 1;
//       }

//       const deadlineDate = new Date(targetYear, targetMonth, 15);
//       const startDate = new Date(targetYear, targetMonth + 1, 1);
      
//       // Submission: 10 weeks (70 days) after Start
//       const submissionDate = new Date(startDate);
//       submissionDate.setDate(startDate.getDate() + 70); 

//       setDates({
//         deadline: formatDateWithSuffix(deadlineDate),
//         start: formatDateWithSuffix(startDate),
//         submission: formatDateWithSuffix(submissionDate)
//       });
//     };

//     calculateDates();

//     // --- Particle Logic (Client Side - Gold Dust) ---
//     const generatedParticles = [...Array(15)].map((_, i) => ({
//       id: i,
//       initialX: Math.random() * 100,
//       initialY: Math.random() * 100,
//       duration: 8 + Math.random() * 10,
//       delay: Math.random() * 5,
//       scale: Math.random() * 0.5 + 0.5,
//       drift: (Math.random() - 0.5) * 50, // Horizontal drift
//       rotation: Math.random() * 360
//     }));
//     setParticles(generatedParticles);

//   }, []);

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
//     // SAFE MODE: Hardcoded Slate-950 Background (Academic/Premium Theme)
//     // Structure: Updated to min-h-screen/flex-col for perfect alignment
//     <section 
//       className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40"
//       style={{ backgroundColor: '#0f172a' }} 
//     >
      
//       {/* 1. Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           // UPDATED IMAGE URL
//           src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop"
//           alt="Classic library with books and lamp"
//           // UPDATED OPACITY to 0.5 for more visibility
//           className="w-full h-full object-cover opacity-99"
//         />
//         {/* Gradient Overlay - Slightly more transparent so image pops */}
//         <div 
//           className="absolute inset-0"
//           style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.9), #0f172a)' }}
//         />
//       </div>

//       {/* 2. Main Content (Updated Alignment) */}
//       <motion.div 
//         className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Badge */}
//         <motion.div variants={itemVariants} className="flex justify-center">
//             <span 
//               className="inline-block py-1 px-4 rounded-full text-sm font-bold tracking-widest mb-6 backdrop-blur-md uppercase"
//               style={{ 
//                 backgroundColor: 'rgba(251, 191, 36, 0.1)', // Amber tint
//                 borderColor: 'rgba(251, 191, 36, 0.5)',   // Amber border
//                 borderWidth: '1px',
//                 color: '#fbbf24' // Amber-400 text
//               }}
//             >
//             8-WEEK INTENSIVE PROGRAM
//             </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
//         >
//           One Course, <br />
//           Multiple Competitions <span 
//             className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)', // Amber to Orange
//               WebkitBackgroundClip: 'text'
//             }}
//           >
//             CRACKED!
//           </span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p 
//           variants={itemVariants}
//           className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
//           style={{ color: '#cbd5e1' }}
//         >
//           Master the art of argument. Target the <strong>John Locke Institute, The Adroit Journal, Columbia Undergraduate Law Review,</strong> and <strong>Oxford Scholastica Academy</strong>.
//           <br />
//           <span className="text-base mt-3 block" style={{ color: '#94a3b8' }}>
//             Create a competition-ready essay that signals depth to Ivy League admissions.
//           </span>
//         </motion.p>
        
//         {/* CTA Buttons (Updated Alignment) */}
//         <motion.div 
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <a href='/#register'>
//             <button 
//               className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]"
//               style={{ 
//                 background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to 700
//                 border: 'none',
//               }}
//             >
//               Start Writing
//             </button>
//           </a>
//           <a href='/#syllabus'>
//             <button 
//               className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-amber-900/20"
//               style={{ 
//                 backgroundColor: 'transparent',
//                 border: '1px solid rgba(251, 191, 36, 0.5)', // Visible Gold Border
//                 color: '#fbbf24' // Gold text
//               }}
//             >
//               View Syllabus
//             </button>
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* 3. Animation: "Gold Dust" Particles (Fixed Hydration) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 1, duration: 2 }}
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//       >
//         {particles.map((p) => (
//           <motion.div
//             key={p.id}
//             initial={{ y: "110vh", x: `${p.initialX}vw`, opacity: 0, scale: 0.5 }}
//             animate={{
//               y: "-10vh",
//               x: `${p.drift}px`,
//               opacity: [0, 0.8, 0],
//               scale: [0.5, 1, 0.5],
//               rotate: p.rotation
//             }}
//             transition={{
//               duration: p.duration,
//               repeat: Infinity,
//               ease: "linear",
//               delay: p.delay,
//             }}
//             className="absolute bottom-0 w-1 h-1 md:w-2 md:h-2 rounded-full"
//             style={{ 
//                 backgroundColor: '#fbbf24',
//                 boxShadow: '0 0 10px #fbbf24'
//             }}
//           />
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

// export default CompetitionHero;




'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CompetitionHero = () => {
  // 1. STATE for Dynamic Dates
  const [dates, setDates] = useState({
    deadline: "Loading...",
    start: "Loading...",
    submission: "Loading..."
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

      // Rule: If today > 15th, roll over to the next month cycle
      if (currentDay > 15) {
        targetMonth = currentMonth + 1;
      }

      const deadlineDate = new Date(targetYear, targetMonth, 15);
      const startDate = new Date(targetYear, targetMonth + 1, 1);
      
      // Submission: 10 weeks (70 days) after Start
      const submissionDate = new Date(startDate);
      submissionDate.setDate(startDate.getDate() + 70); 

      setDates({
        deadline: formatDateWithSuffix(deadlineDate),
        start: formatDateWithSuffix(startDate),
        submission: formatDateWithSuffix(submissionDate)
      });
    };

    calculateDates();

    // --- Particle Logic (Client Side - Gold Dust) ---
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 0.5,
      drift: (Math.random() - 0.5) * 50, // Horizontal drift
      rotation: Math.random() * 360
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
    // SAFE MODE: Hardcoded Slate-950 Background (Academic/Premium Theme)
    // Structure: Updated to min-h-screen/flex-col for perfect alignment
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-32 md:pt-40"
      style={{ backgroundColor: '#0f172a' }} 
    >
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop"
          alt="Classic library with books and lamp"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay - Slightly more transparent so image pops */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.9), #0f172a)' }}
        />
      </div>

      {/* 2. Main Content (Updated Alignment) */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
            <span 
              className="inline-block py-1 px-4 rounded-full text-sm font-bold tracking-widest mb-6 backdrop-blur-md uppercase"
              style={{ 
                backgroundColor: 'rgba(251, 191, 36, 0.1)', // Amber tint
                borderColor: 'rgba(251, 191, 36, 0.5)',   // Amber border
                borderWidth: '1px',
                color: '#fbbf24' // Amber-400 text
              }}
            >
            8-WEEK INTENSIVE PROGRAM
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans text-white"
        >
          One Course, <br />
          Multiple Competitions <span 
            className="text-transparent bg-clip-text filter drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #fbbf24, #d97706)', // Amber to Orange
              WebkitBackgroundClip: 'text'
            }}
          >
            CRACKED!
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ color: '#cbd5e1' }}
        >
          Master the art of argument. Create a competition-ready essay that signals depth to Ivy League admissions.
        </motion.p>
        
        {/* --- LOGO STRIP (Added Here) --- */}
 <motion.div 
  variants={itemVariants}
  className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 opacity-80"
>
  {/* 1. John Locke Institute */}
  <div className="h-12 w-auto flex items-center justify-center bg-white/10 px-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
    <div className="flex flex-col items-start">
      <span className="text-white font-serif font-bold tracking-wide leading-none">John Locke</span>
      <span className="text-[9px] text-gray-400 tracking-[0.2em] mt-1">INSTITUTE</span>
    </div>
  </div>

  {/* 2. The Concord Review */}
  <div className="h-12 w-auto flex items-center justify-center bg-white/10 px-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
    <span className="text-white font-serif italic text-lg border-b border-white/30">The Concord Review</span>
  </div>

  {/* 3. Marshall Society (Cambridge) */}
  <div className="h-12 w-auto flex items-center justify-center bg-white/10 px-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
    <div className="flex flex-col items-center">
      <span className="text-white font-bold tracking-widest text-sm uppercase">Marshall Society</span>
      <span className="text-[8px] text-gray-400 uppercase tracking-tighter">University of Cambridge</span>
    </div>
  </div>

  {/* 4. Harvard International Review (HIR) */}
  <div className="h-12 w-auto flex items-center justify-center bg-white/10 px-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
    <div className="flex items-center gap-2">
      <div className="h-6 w-[2px] bg-red-600"></div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm leading-none">HARVARD</span>
        <span className="text-gray-300 text-[9px] tracking-widest leading-none mt-1">INTERNATIONAL REVIEW</span>
      </div>
    </div>
  </div>
</motion.div>

        {/* CTA Buttons (Updated Alignment) */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href='/#contact'>
            <button 
              className="px-8 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]"
              style={{ 
                background: 'linear-gradient(to right, #d97706, #b45309)', // Amber-600 to 700
                border: 'none',
              }}
            >
              Start Writing
            </button>
          </a>
          <a href='#Roadmap'>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:bg-amber-900/20"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid rgba(251, 191, 36, 0.5)', // Visible Gold Border
                color: '#fbbf24' // Gold text
              }}
            >
              View Timeline
            </button>
          </a>
        </motion.div>

      </motion.div>

      {/* 3. Animation: "Gold Dust" Particles (Fixed Hydration) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "110vh", x: `${p.initialX}vw`, opacity: 0, scale: 0.5 }}
            animate={{
              y: "-10vh",
              x: `${p.drift}px`,
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
              rotate: p.rotation
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
            className="absolute bottom-0 w-1 h-1 md:w-2 md:h-2 rounded-full"
            style={{ 
                backgroundColor: '#fbbf24',
                boxShadow: '0 0 10px #fbbf24'
            }}
          />
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

export default CompetitionHero;