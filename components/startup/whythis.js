// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Briefcase, 
//   Crown, 
//   Fingerprint, 
//   CheckCircle, 
//   ArrowRight 
// } from 'lucide-react';

// const CollegeValue = () => {
//   return (
//     // SAFE MODE: Hardcoded Midnight Slate Background (Matches AI Hero)
//     <section 
//       className="relative py-24 px-6 overflow-hidden font-sans"
//       style={{ backgroundColor: '#020617' }} 
//     >
      
//       {/* Background Decor: Grid & Glow */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none" 
//            style={{ 
//              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
//              backgroundSize: '40px 40px'
//            }} 
//       />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="mb-20 text-center max-w-3xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6"
//             style={{ 
//               backgroundColor: 'rgba(6, 182, 212, 0.1)', // Cyan tint
//               borderColor: 'rgba(6, 182, 212, 0.3)',
//               color: '#22d3ee'
//             }}
//           >
//             <Crown size={14} />
//             <span className="text-xs font-bold uppercase tracking-widest">Admissions Strategy</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//           >
//             Why Top Colleges <br />
//             <span 
//               className="text-transparent bg-clip-text filter drop-shadow-lg"
//               style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #818cf8)' }} // Cyan to Indigo
//             >
//               Prioritize Builders.
//             </span>
//           </motion.h2>
//           <p className="text-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
//             Admissions officers read thousands of essays about "ideas." They rarely see applicants who have actually <strong>shipped</strong> them.
//           </p>
//         </div>

//         {/* --- CARDS GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* CARD 1: Execution */}
//           <ValueCard 
//             icon={<Briefcase size={32} />}
//             title="Proof of Execution"
//             highlight="Start Real Things"
//             desc="It's not just ideas on paper. You show clients served, students taught, money raised, and content shipped. You prove you can execute."
//             delay={0.1}
//             color="#22d3ee" // Cyan
//           />

//           {/* CARD 2: Ownership */}
//             <ValueCard 
//             icon={<Crown size={32} />}
//             title="True Ownership"
//             highlight="Not Just a Member"
//             desc="You aren't just joining an adult-run NGO. The branding, curriculum, partnerships, and iteration sit with YOU, the student."
//             delay={0.2}
//             color="#818cf8" // Indigo
//           />

//           {/* CARD 3: Evidence */}
//           <ValueCard 
//             icon={<Fingerprint size={32} />}
//             title="Tangible Evidence"
//             highlight="Easy to Verify"
//             desc="You create easy-to-understand proof: websites, live posts, testimonials, and third-party validation that admissions officers can see."
//             delay={0.3}
//             color="#c084fc" // Purple
//           />

//         </div>

//         {/* --- BOTTOM INSIGHT BOX --- */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-16 p-8 rounded-2xl border relative overflow-hidden flex flex-col md:flex-row items-center gap-6"
//           style={{ 
//             background: 'linear-gradient(to right, rgba(2, 6, 23, 0.8), rgba(15, 23, 42, 0.8))',
//             borderColor: 'rgba(34, 211, 238, 0.2)'
//           }}
//         >
//           {/* Decorative Line */}
//           <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />

//           <div className="flex-1">
//             <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
//               <CheckCircle size={20} className="text-cyan-400" />
//               The "Spike" Factor
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Selective universities look for a "spike"—a deep, singular achievement that defines you. Launching a functioning startup or organization provides that spike better than a list of 10 generic clubs.
//             </p>
//           </div>

//           <button className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-white font-bold text-sm hover:bg-cyan-500/20 transition-colors flex items-center gap-2">
//             Build Your Spike <ArrowRight size={16} />
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// // --- SUB-COMPONENT ---
// const ValueCard = ({ icon, title, highlight, desc, delay, color }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay }}
//     className="group relative p-8 rounded-3xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
//     style={{ 
//       backgroundColor: 'rgba(15, 23, 42, 0.4)', // Slate-900 tint
//       borderColor: 'rgba(255, 255, 255, 0.05)'
//     }}
//   >
//     {/* Hover Glow */}
//     <div 
//       className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
//       style={{ backgroundColor: color }} 
//     />

//     <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl" style={{ color: color }}>
//       {icon}
//     </div>

//     <div className="mb-4">
//       <span className="text-xs font-bold uppercase tracking-widest opacity-60 block mb-1" style={{ color: color }}>
//         {highlight}
//       </span>
//       <h3 className="text-2xl font-bold text-white">
//         {title}
//       </h3>
//     </div>

//     <p className="text-gray-300 leading-relaxed text-sm">
//       {desc}
//     </p>
//   </motion.div>
// );

// export default CollegeValue;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Briefcase, 
//   Crown, 
//   Fingerprint, 
//   CheckCircle, 
//   ArrowRight,
//   Zap,
//   Star
// } from 'lucide-react';

// const CollegeValue = () => {
//   return (
//     <section 
//       className="relative py-24 px-6 overflow-hidden font-sans"
//       style={{ backgroundColor: '#020617' }} 
//     >
//       {/* (Previous background code remains the same...) */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
//       />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* ... (Header and Grid code remains the same as before) ... */}

//         {/* --- THE UPGRADED SPIKE SECTION --- */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 rounded-2xl border relative overflow-hidden"
//           style={{ 
//             backgroundColor: 'rgba(15, 23, 42, 0.6)', 
//             borderColor: 'rgba(34, 211, 238, 0.3)',
//             backdropFilter: 'blur(10px)'
//           }}
//         >
//           {/* 1. ANIMATED GRAPHIC LAYER */}
//           <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//             {/* The SVG Line Graph */}
//             <svg className="absolute bottom-0 right-0 w-full md:w-2/3 h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
//               <defs>
//                 <linearGradient id="spikeGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
//                   <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
//                 </linearGradient>
//               </defs>
//               {/* Fill under the line */}
//               <motion.path 
//                 d="M0,200 L100,180 L200,150 L300,50 L400,20 L400,200 Z" 
//                 fill="url(#spikeGradient)"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.5 }}
//               />
//               {/* The Line Itself */}
//               <motion.path 
//                 d="M0,200 L100,180 L200,150 L300,50 L400,20" 
//                 fill="none"
//                 stroke="#22d3ee"
//                 strokeWidth="3"
//                 initial={{ pathLength: 0 }}
//                 whileInView={{ pathLength: 1 }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//               />
//             </svg>

//             {/* Floating "Top 1%" Badge at the peak */}
//             <motion.div 
//               className="absolute right-[10%] top-[15%] bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center gap-1"
//               initial={{ scale: 0, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 1.2, type: "spring" }}
//             >
//               <Star size={10} fill="currentColor" /> Top 1%
//             </motion.div>

//             {/* Pulsing Dot at the inflection point */}
//             <motion.div 
//                className="absolute right-[25%] top-[25%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#22d3ee]"
//                initial={{ scale: 0 }}
//                whileInView={{ scale: 1 }}
//                transition={{ delay: 1 }}
//             >
//                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
//             </motion.div>
//           </div>

//           {/* 2. TEXT CONTENT */}
//           <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4">
//                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
//                     <Zap size={24} fill="currentColor" />
//                  </div>
//                  <h3 className="text-3xl font-bold text-white tracking-tight">
//                    The "Spike" Factor
//                  </h3>
//               </div>
              
//               <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
//                 Selective universities look for a <strong>"spike"</strong>—a deep, singular achievement that separates you from the crowd. Launching a functioning startup creates that vertical trajectory.
//               </p>
//             </div>

//             <button className="shrink-0 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 flex items-center gap-2">
//               Build Your Spike <ArrowRight size={20} />
//             </button>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// // (ValueCard sub-component remains the same as before)
// const ValueCard = ({ icon, title, highlight, desc, delay, color }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay }}
//     className="group relative p-8 rounded-3xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
//     style={{ 
//       backgroundColor: 'rgba(15, 23, 42, 0.4)', 
//       borderColor: 'rgba(255, 255, 255, 0.05)'
//     }}
//   >
//     <div 
//       className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
//       style={{ backgroundColor: color }} 
//     />
//     <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl" style={{ color: color }}>
//       {icon}
//     </div>
//     <div className="mb-4">
//       <span className="text-xs font-bold uppercase tracking-widest opacity-60 block mb-1" style={{ color: color }}>
//         {highlight}
//       </span>
//       <h3 className="text-2xl font-bold text-white">
//         {title}
//       </h3>
//     </div>
//     <p className="text-gray-300 leading-relaxed text-sm">
//       {desc}
//     </p>
//   </motion.div>
// );

// export default CollegeValue;

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Briefcase, 
//   Crown, 
//   Fingerprint, 
//   CheckCircle, 
//   ArrowRight,
//   Zap,
//   Star,
//   TrendingUp
// } from 'lucide-react';

// const CollegeValue = () => {
//   return (
//     // SAFE MODE: Hardcoded Midnight Slate Background (Matches AI Hero)
//     <section 
//       className="relative py-24 px-6 overflow-hidden font-sans"
//       style={{ backgroundColor: '#020617' }} 
//     >
      
//       {/* Background Decor: Grid & Glow */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none" 
//            style={{ 
//              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
//              backgroundSize: '40px 40px'
//            }} 
//       />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="mb-20 text-center max-w-3xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6"
//             style={{ 
//               backgroundColor: 'rgba(6, 182, 212, 0.1)', // Cyan tint
//               borderColor: 'rgba(6, 182, 212, 0.3)',
//               color: '#22d3ee'
//             }}
//           >
//             <Crown size={14} />
//             <span className="text-xs font-bold uppercase tracking-widest">Admissions Strategy</span>
//           </motion.div>

//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//           >
//             Why Top Colleges <br />
//             <span 
//               className="text-transparent bg-clip-text filter drop-shadow-lg"
//               style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #818cf8)' }} // Cyan to Indigo
//             >
//               Prioritize Builders.
//             </span>
//           </motion.h2>
//           <p className="text-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
//             Admissions officers read thousands of essays about "ideas." They rarely see applicants who have actually <strong>shipped</strong> them.
//           </p>
//         </div>

//         {/* --- CARDS GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* CARD 1: Execution */}
//           <ValueCard 
//             icon={<Briefcase size={32} />}
//             title="Proof of Execution"
//             highlight="Start Real Things"
//             desc="It's not just ideas on paper. You show clients served, students taught, money raised, and content shipped. You prove you can execute."
//             delay={0.1}
//             color="#22d3ee" // Cyan
//           />

//           {/* CARD 2: Ownership */}
//             <ValueCard 
//             icon={<Crown size={32} />}
//             title="True Ownership"
//             highlight="Not Just a Member"
//             desc="You aren't just joining an adult-run NGO. The branding, curriculum, partnerships, and iteration sit with YOU, the student."
//             delay={0.2}
//             color="#818cf8" // Indigo
//           />

//           {/* CARD 3: Evidence */}
//           <ValueCard 
//             icon={<Fingerprint size={32} />}
//             title="Tangible Evidence"
//             highlight="Easy to Verify"
//             desc="You create easy-to-understand proof: websites, live posts, testimonials, and third-party validation that admissions officers can see."
//             delay={0.3}
//             color="#c084fc" // Purple
//           />

//         </div>

//         {/* --- BOTTOM INSIGHT BOX (The Animated Spike) --- */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 rounded-2xl border relative overflow-hidden"
//           style={{ 
//             backgroundColor: 'rgba(15, 23, 42, 0.6)', // Semi-transparent slate
//             borderColor: 'rgba(34, 211, 238, 0.3)',
//             backdropFilter: 'blur(10px)'
//           }}
//         >
//           {/* 1. ANIMATED GRAPHIC LAYER */}
//           <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//             {/* The SVG Line Graph */}
//             <svg className="absolute bottom-0 right-0 w-full md:w-2/3 h-full opacity-50 md:opacity-100" viewBox="0 0 400 200" preserveAspectRatio="none">
//               <defs>
//                 <linearGradient id="spikeGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
//                   <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
//                 </linearGradient>
//               </defs>
              
//               {/* Fill under the line (Fade In) */}
//               <motion.path 
//                 d="M0,200 L100,180 L200,150 L300,50 L400,20 L400,200 Z" 
//                 fill="url(#spikeGradient)"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.5 }}
//               />
              
//               {/* The Line Itself (Draws) */}
//               <motion.path 
//                 d="M0,200 L100,180 L200,150 L300,50 L400,20" 
//                 fill="none"
//                 stroke="#22d3ee"
//                 strokeWidth="3"
//                 initial={{ pathLength: 0 }}
//                 whileInView={{ pathLength: 1 }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//               />
//             </svg>

//             {/* Floating "Top 1%" Badge at the peak */}
//             <motion.div 
//               className="absolute right-[5%] top-[10%] bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center gap-1 z-20"
//               initial={{ scale: 0, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 1.2, type: "spring" }}
//             >
//               <Star size={10} fill="currentColor" /> Top 1%
//             </motion.div>

//             {/* Pulsing Dot at the inflection point (approximate visual location) */}
//             <motion.div 
//                className="absolute right-[25%] top-[25%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#22d3ee] z-10"
//                initial={{ scale: 0 }}
//                whileInView={{ scale: 1 }}
//                transition={{ delay: 1 }}
//             >
//                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
//             </motion.div>
//           </div>

//           {/* 2. TEXT CONTENT */}
//           <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4">
//                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
//                     <Zap size={24} fill="currentColor" />
//                  </div>
//                  <h3 className="text-3xl font-bold text-white tracking-tight">
//                    The "Spike" Factor
//                  </h3>
//               </div>
              
//               <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
//                 Selective universities look for a <strong>"spike"</strong>—a deep, singular achievement that defines you. Launching a functioning startup creates that vertical trajectory better than any club membership.
//               </p>
//             </div>

//             <button className="shrink-0 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-gray-100 font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 flex items-center gap-2">
//               Build Your Spike <ArrowRight size={20} />
//             </button>
            
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// // --- SUB-COMPONENT: Value Card ---
// const ValueCard = ({ icon, title, highlight, desc, delay, color }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay }}
//     className="group relative p-8 rounded-3xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
//     style={{ 
//       backgroundColor: 'rgba(15, 23, 42, 0.4)', // Slate-900 tint
//       borderColor: 'rgba(255, 255, 255, 0.05)'
//     }}
//   >
//     {/* Hover Glow */}
//     <div 
//       className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
//       style={{ backgroundColor: color }} 
//     />

//     <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl" style={{ color: color }}>
//       {icon}
//     </div>

//     <div className="mb-4">
//       <span className="text-xs font-bold uppercase tracking-widest opacity-60 block mb-1" style={{ color: color }}>
//         {highlight}
//       </span>
//       <h3 className="text-2xl font-bold text-white">
//         {title}
//       </h3>
//     </div>

//     <p className="text-gray-300 leading-relaxed text-sm">
//       {desc}
//     </p>
//   </motion.div>
// );

// export default CollegeValue;



'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Crown, 
  Fingerprint, 
  ArrowRight,
  Zap,
  Star
} from 'lucide-react';

const CollegeValue = () => {
  return (
    <section 
      className="relative py-24 px-6 overflow-hidden font-sans"
      style={{ backgroundColor: '#020617' }} // Hardcoded Deep Slate Background
    >
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', filter: 'blur(100px)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6"
            style={{ 
              backgroundColor: 'rgba(34, 211, 238, 0.1)', 
              borderColor: 'rgba(34, 211, 238, 0.3)',
              color: '#22d3ee' // Bright Cyan
            }}
          >
            <Crown size={14} />
            <span className="text-xs font-bold uppercase tracking-widest">Admissions Strategy</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Top Colleges <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #818cf8)' }}
            >
              Prioritize Builders.
            </span>
          </motion.h2>
          <p className="text-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
            Admissions officers read thousands of essays about "ideas." They rarely see applicants who have actually <strong>shipped</strong> them.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <ValueCard 
            icon={<Briefcase size={32} />}
            title="Proof of Execution"
            highlight="Start Real Things"
            desc="It's not just ideas on paper. You show clients served, students taught, money raised, and content shipped."
            delay={0.1}
            color="#22d3ee" // Cyan
          />

          <ValueCard 
            icon={<Crown size={32} />}
            title="True Ownership"
            highlight="Not Just a Member"
            desc="You aren't just joining an adult-run NGO. The branding, curriculum, and partnerships sit with YOU."
            delay={0.2}
            color="#818cf8" // Indigo
          />

          <ValueCard 
            icon={<Fingerprint size={32} />}
            title="Tangible Evidence"
            highlight="Easy to Verify"
            desc="You create easy-to-understand proof: websites, live posts, and testimonials that admissions officers can see."
            delay={0.3}
            color="#c084fc" // Purple
          />

        </div>

        {/* --- THE SPIKE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border relative overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.6)', 
            borderColor: 'rgba(34, 211, 238, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Animated Graphic Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute bottom-0 right-0 w-full md:w-2/3 h-full opacity-50 md:opacity-100" viewBox="0 0 400 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="spikeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
                  <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M0,200 L100,180 L200,150 L300,50 L400,20 L400,200 Z" 
                fill="url(#spikeGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path 
                d="M0,200 L100,180 L200,150 L300,50 L400,20" 
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>

            {/* Floating Badge */}
            <motion.div 
              className="absolute right-[5%] top-[10%] text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center gap-1 z-20"
              style={{ backgroundColor: '#06b6d4', color: '#020617' }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <Star size={10} fill="currentColor" /> Top 1%
            </motion.div>

            {/* Pulsing Dot */}
            <motion.div 
               className="absolute right-[25%] top-[25%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#22d3ee] z-10"
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               transition={{ delay: 1 }}
            >
               <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: '#22d3ee' }} />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 rounded-lg border" style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)', borderColor: 'rgba(34, 211, 238, 0.2)', color: '#22d3ee' }}>
                    <Zap size={24} fill="currentColor" />
                 </div>
                 <h3 className="text-3xl font-bold text-white tracking-tight">
                   The "Spike" Factor
                 </h3>
              </div>
              
              <p className="text-lg leading-relaxed max-w-xl" style={{ color: '#cbd5e1' }}>
                Selective universities look for a <strong>"spike"</strong>—a deep, singular achievement that separates you from the crowd. Launching a functioning startup creates that vertical trajectory better than any club membership.
              </p>
            </div>

<a href='/#contact'>
            <button 
              className="shrink-0 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 flex items-center gap-2"
              style={{ backgroundColor: '#22d3ee', color: '#020617' }}
            >
              Contact <ArrowRight size={20} />
            </button>
            </a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

// --- Sub-Component with Hardcoded Styles ---
const ValueCard = ({ icon, title, highlight, desc, delay, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative p-8 rounded-3xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
    style={{ 
      backgroundColor: 'rgba(15, 23, 42, 0.4)', 
      borderColor: 'rgba(255, 255, 255, 0.05)'
    }}
  >
    {/* Hover Glow */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
      style={{ backgroundColor: color }} 
    />

    <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl" style={{ color: color, borderColor: '#1e293b', backgroundColor: '#020617' }}>
      {icon}
    </div>

    <div className="mb-4">
      <span className="text-xs font-bold uppercase tracking-widest opacity-60 block mb-1" style={{ color: color }}>
        {highlight}
      </span>
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>
    </div>

    <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
      {desc}
    </p>
  </motion.div>
);

export default CollegeValue;