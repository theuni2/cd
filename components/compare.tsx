// 'use client';

// import { motion } from 'framer-motion';

// const features = [
//   {
//     title: 'Program Format & Duration',
//     launchpad: '1:1 entrepreneurship program: Short: 6-15 weeks | Long: 25 weeks to 1 year',
//     whyUs: 'Emphasis on real-world, long-lasting impact: funding, scaling, measurable outcomes, prototypes, 1:1 flexibility',
//   },
// //  {
// //     title: 'Execution & Outcomes',
// //     launchpad: 'From idea to prototype develop your MVP, refine your business model, and gain clarity on funding and growth strategies.',
// //     whyUs: 'Every session drives tangible outcomes: progress you can measure, pitch you can present, and impact you can showcase.',
// //   },
//   {
//     title: 'Mentorship',
//     launchpad: 'Personalized mentorship from CEOs, founders, domain experts, and nonprofit leaders; regular check-ins',
//     whyUs: 'Strong network with top professionals + hands-on entrepreneurial experience',
//   },
//   {
//     title: 'Media Presence',
//     launchpad: 'Media & PR support: featured in magazines, video scripts, Instagram, websites, interviews',
//     whyUs: 'Documenting journey from ideation to execution to showcase real impact',
//   },{
    
// title:"Outcome",
// launchpad:"Launch a startup, nonprofit, or idea with real-world impact and measurable outcomes.",
// whyUs:"Focus on execution and tangible results, not just learning."


//   }

// ];

// export default function LaunchpadFeatures() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
//         >
//           Why LaunchPad Stands Out
//         </motion.h2>

//         <div className="grid gap-8 md:grid-cols-2">
//           {features.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: idx * 0.1 }}
//               className="rounded-2xl border border-gray-200 shadow-md p-6 bg-gray-50"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700 mb-2">
//                 <span className="font-medium text-gray-900">LaunchPad: </span>
//                 {item.launchpad}
//               </p>
//               <p className="text-sm text-gray-600 italic">
//                 {item.whyUs}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Clock, 
//   Users, 
//   Mic, 
//   Rocket,
//   Zap 
// } from 'lucide-react';

// // --- DATA CONFIGURATION ---
// // REPLACE 'gif' URLs with your actual .gif or .mp4 links
// const features = [
//   {
//     id: 1,
//     category: "Format & Duration",
//     title: "Flexible & Intensive",
//     icon: <Clock size={24} />,
//     launchpad: "1:1 entrepreneurship program. Choose your pace: Short (6-15 weeks) or Long (25 weeks - 1 year).",
//     whyUs: "Emphasis on real-world scaling, funding, and tangible prototypes—not just theory.",
//     // Placeholder GIF - Replace with: "/images/timeline-animation.gif"
//     gif: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop", 
//     color: "#22d3ee" // Cyan
//   },
//   {
//     id: 2,
//     category: "Mentorship",
//     title: "Elite Network Access",
//     icon: <Users size={24} />,
//     launchpad: "Personalized guidance from CEOs, founders, and domain experts with regular check-ins.",
//     whyUs: "We don't just teach; we connect you directly to top professionals for hands-on experience.",
//     // Placeholder GIF
//     gif: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
//     color: "#818cf8" // Indigo
//   },
//   {
//     id: 3,
//     category: "Media Presence",
//     title: "Build Your Brand",
//     icon: <Mic size={24} />,
//     launchpad: "Full PR support: Magazine features, video scripts, social media strategy, and interviews.",
//     whyUs: "We document your entire journey from ideation to execution to showcase your real impact.",
//     // Placeholder GIF
//     gif: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
//     color: "#c084fc" // Purple
//   },
//   {
//     id: 4,
//     category: "Outcome",
//     title: "Launch Real Startups",
//     icon: <Rocket size={24} />,
//     launchpad: "Launch a startup, nonprofit, or product with measurable real-world outcomes.",
//     whyUs: "Focus on execution and results. Walk away with a company, not just a certificate.",
//     // Placeholder GIF
//     gif: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     color: "#fbbf24" // Amber
//   }
// ];

// const LaunchpadSlideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Auto-play functionality (Optional - currently set to 8 seconds)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 50 : -50,
//       opacity: 0,
//       filter: "blur(10px)"
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -50 : 50,
//       opacity: 0,
//       filter: "blur(10px)",
//       transition: { duration: 0.3, ease: "easeIn" }
//     })
//   };

//   const currentFeature = features[currentIndex];

//   return (
//     <section className="py-24 bg-gradient-to-br from-[#90CAF9] via-[#C5CAE9] to-white  relative overflow-hidden font-sans">
//     {/* <section className="py-24 bg-slate-950 relative overflow-hidden font-sans"> */}
      
//       {/* Background Ambience */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-5xl font-bold text-white mb-4"
//           >
//             Why LaunchPad <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Stands Out</span>
//           </motion.h2>
//         </div>

//         {/* --- SLIDESHOW CONTAINER --- */}
//         <div className="relative bg-slate-900/40 border border-slate-800 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl min-h-[500px] md:min-h-[450px]">
          
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="grid md:grid-cols-2 h-full"
//             >
              
//               {/* LEFT SIDE: TEXT CONTENT */}
//               <div className="p-8 md:p-12 flex flex-col justify-center relative">
                
//                 {/* Decorative Index Number */}
//                 <div className="absolute top-6 right-8 text-6xl font-bold text-slate-800/50 select-none">
//                   0{currentFeature.id}
//                 </div>

//                 {/* Category Badge */}
//                 <div className="inline-flex items-center gap-2 mb-6">
//                   <div className="p-2 rounded-lg bg-slate-800 text-white border border-slate-700">
//                     {currentFeature.icon}
//                   </div>
//                   <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
//                     {currentFeature.category}
//                   </span>
//                 </div>

//                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
//                   {currentFeature.title}
//                 </h3>

//                 <div className="space-y-6">
//                   {/* Launchpad Feature */}
//                   <div className="pl-4 border-l-2 border-slate-700">
//                     <p className="text-sm text-slate-400 uppercase font-bold mb-1">The Program</p>
//                     <p className="text-slate-200 leading-relaxed">
//                       {currentFeature.launchpad}
//                     </p>
//                   </div>

//                   {/* Why Us Advantage */}
//                   <div 
//                     className="pl-4 border-l-2"
//                     style={{ borderColor: currentFeature.color }}
//                   >
//                     <p className="text-sm uppercase font-bold mb-1" style={{ color: currentFeature.color }}>The Advantage</p>
//                     <p className="text-white font-medium leading-relaxed">
//                       {currentFeature.whyUs}
//                     </p>
//                   </div>
//                 </div>

//               </div>

//               {/* RIGHT SIDE: VISUAL / GIF */}
//               <div className="relative h-64 md:h-auto overflow-hidden bg-slate-950">
//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
//                 <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10" />

//                 {/* The Image/GIF */}
//                 <img 
//                   src={currentFeature.gif} 
//                   alt={currentFeature.title}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
//                 />

//                 {/* Floating 'Live' Tag (Aesthetic touch) */}
//                 <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-xs font-bold text-white">Live Impact</span>
//                 </div>
//               </div>

//             </motion.div>
//           </AnimatePresence>

//           {/* --- NAVIGATION CONTROLS --- */}
//           <div className="absolute bottom-6 left-8 md:left-12 z-30 flex items-center gap-4">
//             {/* Arrows */}
//             <div className="flex gap-2">
//               <button 
//                 onClick={prevSlide}
//                 className="p-3 rounded-full bg-slate-800/80 text-white hover:bg-cyan-500 hover:text-black transition-all border border-slate-700 backdrop-blur-md"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button 
//                 onClick={nextSlide}
//                 className="p-3 rounded-full bg-slate-800/80 text-white hover:bg-cyan-500 hover:text-black transition-all border border-slate-700 backdrop-blur-md"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
            
//             {/* Dots */}
//             <div className="flex gap-2 ml-4">
//               {features.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     setDirection(idx > currentIndex ? 1 : -1);
//                     setCurrentIndex(idx);
//                   }}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default LaunchpadSlideshow;
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Clock, 
//   Users, 
//   Mic, 
//   Rocket 
// } from 'lucide-react';

// // --- DATA CONFIGURATION ---
// const features = [
//   {
//     id: 1,
//     category: "Format & Duration",
//     title: "Flexible & Intensive",
//     icon: <Clock size={24} />,
//     launchpad: "1:1 entrepreneurship program. Choose your pace: Short (6-15 weeks) or Long (25 weeks - 1 year).",
//     whyUs: "Emphasis on real-world scaling, funding, and tangible prototypes—not just theory.",
//     gif: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop", 
//     color: "#0891b2" // Darker Cyan for Light Mode Contrast
//   },
//   {
//     id: 2,
//     category: "Mentorship",
//     title: "Elite Network Access",
//     icon: <Users size={24} />,
//     launchpad: "Personalized guidance from CEOs, founders, and domain experts with regular check-ins.",
//     whyUs: "We don't just teach; we connect you directly to top professionals for hands-on experience.",
//     gif: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
//     color: "#4f46e5" // Indigo-600
//   },
//   {
//     id: 3,
//     category: "Media Presence",
//     title: "Build Your Brand",
//     icon: <Mic size={24} />,
//     launchpad: "Full PR support: Magazine features, video scripts, social media strategy, and interviews.",
//     whyUs: "We document your entire journey from ideation to execution to showcase your real impact.",
//     gif: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
//     color: "#9333ea" // Purple-600
//   },
//   {
//     id: 4,
//     category: "Outcome",
//     title: "Launch Real Startups",
//     icon: <Rocket size={24} />,
//     launchpad: "Launch a startup, nonprofit, or product with measurable real-world outcomes.",
//     whyUs: "Focus on execution and results. Walk away with a company, not just a certificate.",
//     gif: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     color: "#d97706" // Amber-600
//   }
// ];

// const LaunchpadSlideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // Auto-play timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 50 : -50,
//       opacity: 0,
//       filter: "blur(10px)"
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -50 : 50,
//       opacity: 0,
//       filter: "blur(10px)",
//       transition: { duration: 0.3, ease: "easeIn" }
//     })
//   };

//   const currentFeature = features[currentIndex];

//   return (
//     // REQUESTED GRADIENT APPLIED HERE
//     <section className="py-24 bg-gradient-to-br from-[#90CAF9] via-[#C5CAE9] to-white relative overflow-hidden font-sans">
      
//       {/* Background Shapes for Depth */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[80px]" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[80px]" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
//           >
//             Why LaunchPad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stands Out</span>
//           </motion.h2>
//         </div>

//         {/* --- SLIDESHOW CONTAINER (Light Glassmorphism) --- */}
//         <div className="relative bg-white/40 border border-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] min-h-[550px] md:min-h-[450px]">
          
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="grid md:grid-cols-2 h-full"
//             >
              
//               {/* LEFT SIDE: TEXT CONTENT */}
//               <div className="p-8 md:p-12 flex flex-col justify-center relative">
                
//                 {/* Decorative Index Number */}
//                 <div className="absolute top-4 right-6 text-8xl font-bold text-white/50 select-none pointer-events-none">
//                   0{currentFeature.id}
//                 </div>

//                 {/* Category Badge */}
//                 <div className="inline-flex items-center gap-2 mb-6 relative z-10">
//                   <div className="p-2 rounded-lg bg-white shadow-sm text-slate-700 border border-white/50">
//                     {currentFeature.icon}
//                   </div>
//                   <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
//                     {currentFeature.category}
//                   </span>
//                 </div>

//                 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight relative z-10">
//                   {currentFeature.title}
//                 </h3>

//                 <div className="space-y-6 relative z-10">
//                   {/* Launchpad Feature */}
//                   <div className="pl-4 border-l-2 border-slate-300">
//                     <p className="text-xs text-slate-500 uppercase font-bold mb-1">The Program</p>
//                     <p className="text-slate-700 leading-relaxed font-medium">
//                       {currentFeature.launchpad}
//                     </p>
//                   </div>

//                   {/* Why Us Advantage */}
//                   <div 
//                     className="pl-4 border-l-4"
//                     style={{ borderColor: currentFeature.color }}
//                   >
//                     <p className="text-xs uppercase font-bold mb-1" style={{ color: currentFeature.color }}>The Advantage</p>
//                     <p className="text-slate-800 font-bold leading-relaxed">
//                       {currentFeature.whyUs}
//                     </p>
//                   </div>
//                 </div>

//               </div>

//               {/* RIGHT SIDE: VISUAL / GIF */}
//               <div className="relative h-64 md:h-auto overflow-hidden">
//                 {/* Overlay to blend image slightly */}
//                 <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10 pointer-events-none" />

//                 {/* The Image/GIF */}
//                 <img 
//                   src={currentFeature.gif} 
//                   alt={currentFeature.title}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
//                 />

//                 {/* Floating 'Live' Tag */}
//                 <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-white/80 border border-white backdrop-blur-md flex items-center gap-2 shadow-lg">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-xs font-bold text-slate-800">Live Impact</span>
//                 </div>
//               </div>

//             </motion.div>
//           </AnimatePresence>

//           {/* --- NAVIGATION CONTROLS --- */}
//           <div className="absolute bottom-6 left-8 md:left-12 z-30 flex items-center gap-4">
//             {/* Arrows */}
//             <div className="flex gap-2">
//               <button 
//                 onClick={prevSlide}
//                 className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button 
//                 onClick={nextSlide}
//                 className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
            
//             {/* Dots */}
//             <div className="flex gap-2 ml-4 items-center">
//               {features.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     setDirection(idx > currentIndex ? 1 : -1);
//                     setCurrentIndex(idx);
//                   }}
//                   className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
//                     idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-white/80'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default LaunchpadSlideshow;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Clock, 
//   Users, 
//   Mic, 
//   Rocket,
//   ArrowRight
// } from 'lucide-react';

// // --- DATA CONFIGURATION ---
// const features = [
//   {
//     id: 1,
//     category: "Format & Duration",
//     title: "Flexible & Intensive",
//     icon: <Clock size={24} />,
//     launchpad: "1:1 entrepreneurship program. Choose your pace: Short (6-15 weeks) or Long (25 weeks - 1 year).",
//     whyUs: "Emphasis on real-world scaling, funding, and tangible prototypes—not just theory.",
//     gif: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop", 
//     color: "#0891b2", // Cyan-700
//     cta: "View Syllabus"
//   },
//   {
//     id: 2,
//     category: "Mentorship",
//     title: "Elite Network Access",
//     icon: <Users size={24} />,
//     launchpad: "Personalized guidance from CEOs, founders, and domain experts with regular check-ins.",
//     whyUs: "We don't just teach; we connect you directly to top professionals for hands-on experience.",
//     gif: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
//     color: "#4f46e5", // Indigo-600
//     cta: "Meet Mentors"
//   },
//   {
//     id: 3,
//     category: "Media Presence",
//     title: "Build Your Brand",
//     icon: <Mic size={24} />,
//     launchpad: "Full PR support: Magazine features, video scripts, social media strategy, and interviews.",
//     whyUs: "We document your entire journey from ideation to execution to showcase your real impact.",
//     gif: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
//     color: "#9333ea", // Purple-600
//     cta: "See Press Kits"
//   },
//   {
//     id: 4,
//     category: "Outcome",
//     title: "Launch Real Startups",
//     icon: <Rocket size={24} />,
//     launchpad: "Launch a startup, nonprofit, or product with measurable real-world outcomes.",
//     whyUs: "Focus on execution and results. Walk away with a company, not just a certificate.",
//     gif: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     color: "#d97706", // Amber-600
//     cta: "Start Building"
//   }
// ];

// const LaunchpadSlideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 50 : -50,
//       opacity: 0,
//       filter: "blur(10px)"
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -50 : 50,
//       opacity: 0,
//       filter: "blur(10px)",
//       transition: { duration: 0.3, ease: "easeIn" }
//     })
//   };

//   const currentFeature = features[currentIndex];

//   return (
//     <section className="py-24 bg-gradient-to-br from-[#90CAF9] via-[#C5CAE9] to-white relative overflow-hidden font-sans">
      
//       {/* Background Shapes */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[80px]" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[80px]" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
//           >
//             Why LaunchPad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stands Out</span>
//           </motion.h2>
//         </div>

//         {/* --- SLIDESHOW CONTAINER --- */}
//         <div className="relative bg-white/40 border border-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] min-h-[600px] md:min-h-[500px]">
          
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="grid md:grid-cols-2 h-full"
//             >
              
//               {/* LEFT SIDE: CONTENT */}
//               <div className="p-8 md:p-12 flex flex-col justify-center relative">
                
//                 {/* Decorative Index */}
//                 <div className="absolute top-4 right-6 text-8xl font-bold text-white/50 select-none pointer-events-none">
//                   0{currentFeature.id}
//                 </div>

//                 {/* Badge */}
//                 <div className="inline-flex items-center gap-2 mb-6 relative z-10">
//                   <div className="p-2 rounded-lg bg-white shadow-sm text-slate-700 border border-white/50">
//                     {currentFeature.icon}
//                   </div>
//                   <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
//                     {currentFeature.category}
//                   </span>
//                 </div>

//                 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight relative z-10">
//                   {currentFeature.title}
//                 </h3>

//                 <div className="space-y-6 relative z-10 mb-8">
//                   {/* Launchpad Feature */}
//                   <div className="pl-4 border-l-2 border-slate-300">
//                     <p className="text-xs text-slate-500 uppercase font-bold mb-1">The Program</p>
//                     <p className="text-slate-700 leading-relaxed font-medium">
//                       {currentFeature.launchpad}
//                     </p>
//                   </div>

//                   {/* Why Us Advantage */}
//                   <div 
//                     className="pl-4 border-l-4"
//                     style={{ borderColor: currentFeature.color }}
//                   >
//                     <p className="text-xs uppercase font-bold mb-1" style={{ color: currentFeature.color }}>The Advantage</p>
//                     <p className="text-slate-800 font-bold leading-relaxed">
//                       {currentFeature.whyUs}
//                     </p>
//                   </div>
//                 </div>

//                 {/* --- ADDED CTA BUTTON --- */}
//                 <div className="relative z-10">
//                   <a href="#apply">
//                     <button 
//                       className="px-8 py-3 rounded-full text-white font-bold shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:brightness-110 flex items-center gap-2"
//                       style={{ backgroundColor: currentFeature.color }}
//                     >
//                       {currentFeature.cta} <ArrowRight size={18} />
//                     </button>
//                   </a>
//                 </div>

//               </div>

//               {/* RIGHT SIDE: VISUAL */}
//               <div className="relative h-64 md:h-auto overflow-hidden">
//                 <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10 pointer-events-none" />
//                 <img 
//                   src={currentFeature.gif} 
//                   alt={currentFeature.title}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
//                 />
//                 <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-white/80 border border-white backdrop-blur-md flex items-center gap-2 shadow-lg">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-xs font-bold text-slate-800">Live Impact</span>
//                 </div>
//               </div>

//             </motion.div>
//           </AnimatePresence>

//           {/* --- NAVIGATION --- */}
//           <div className="absolute bottom-6 left-8 md:left-12 z-30 flex items-center gap-4">
//             <div className="flex gap-2">
//               <button 
//                 onClick={prevSlide}
//                 className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button 
//                 onClick={nextSlide}
//                 className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
            
//             <div className="flex gap-2 ml-4 items-center">
//               {features.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     setDirection(idx > currentIndex ? 1 : -1);
//                     setCurrentIndex(idx);
//                   }}
//                   className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
//                     idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-white/80'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default LaunchpadSlideshow;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Clock, 
//   Users, 
//   Mic, 
//   Rocket,
//   ArrowRight
// } from 'lucide-react';

// // --- DATA CONFIGURATION ---
// const features = [
//   {
//     id: 1,
//     category: "Format & Duration",
//     title: "Flexible & Intensive",
//     icon: <Clock size={24} />,
//     launchpad: "1:1 entrepreneurship program. 10 Weeks Long.",
//     whyUs: "Emphasis on real-world scaling, funding, and tangible prototypes—not just theory.",
//     gif: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop", 
//     color: "#0891b2", // Cyan-700
//     cta: "View Syllabus"
//   },
//   {
//     id: 2,
//     category: "Mentorship",
//     title: "Elite Network Access",
//     icon: <Users size={24} />,
//     launchpad: "Personalized guidance from CEOs, founders, and domain experts with regular check-ins.",
//     whyUs: "We don't just teach; we connect you directly to top professionals for hands-on experience.",
//     gif: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
//     color: "#4f46e5", // Indigo-600
//     cta: "Meet Mentors"
//   },
//   {
//     id: 3,
//     category: "Media Presence",
//     title: "Build Your Brand",
//     icon: <Mic size={24} />,
//     launchpad: "Full PR support: Magazine features, video scripts, social media strategy, and interviews.",
//     whyUs: "We document your entire journey from ideation to execution to showcase your real impact.",
//     gif: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
//     color: "#9333ea", // Purple-600
//     cta: "See Press Kits"
//   },
//   {
//     id: 4,
//     category: "Outcome",
//     title: "Launch Real Startups",
//     icon: <Rocket size={24} />,
//     launchpad: "Launch a startup, nonprofit, or product with measurable real-world outcomes.",
//     whyUs: "Focus on execution and results. Walk away with a company, not just a certificate.",
//     gif: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//     color: "#d97706", // Amber-600
//     cta: "Start Building"
//   }
// ];

// const LaunchpadSlideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 50 : -50,
//       opacity: 0,
//       filter: "blur(10px)"
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -50 : 50,
//       opacity: 0,
//       filter: "blur(10px)",
//       transition: { duration: 0.3, ease: "easeIn" }
//     })
//   };

//   const currentFeature = features[currentIndex];

//   return (
//     <section className="py-24 bg-gradient-to-br from-[#90CAF9] via-[#C5CAE9] to-white relative overflow-hidden font-sans">
      
//       {/* Background Shapes */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[80px]" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[80px]" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
//           >
//             Why LaunchPad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stands Out</span>
//           </motion.h2>
//         </div>

//         {/* --- SLIDESHOW CONTAINER --- */}
//         <div className="relative bg-white/40 border border-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] min-h-[600px] md:min-h-[500px]">
          
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="grid md:grid-cols-2 h-full"
//             >
              
//               {/* LEFT SIDE: CONTENT */}
//               <div className="p-8 md:p-12 flex flex-col justify-center relative">
                
//                 {/* Decorative Index */}
//                 <div className="absolute top-4 right-6 text-8xl font-bold text-white/50 select-none pointer-events-none">
//                   0{currentFeature.id}
//                 </div>

//                 {/* Badge */}
//                 <div className="inline-flex items-center gap-2 mb-6 relative z-10">
//                   <div className="p-2 rounded-lg bg-white shadow-sm text-slate-700 border border-white/50">
//                     {currentFeature.icon}
//                   </div>
//                   <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
//                     {currentFeature.category}
//                   </span>
//                 </div>

//                 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight relative z-10">
//                   {currentFeature.title}
//                 </h3>

//                 <div className="space-y-6 relative z-10 mb-8">
//                   {/* Launchpad Feature */}
//                   <div className="pl-4 border-l-2 border-slate-300">
//                     <p className="text-xs text-slate-500 uppercase font-bold mb-1">The Program</p>
//                     <p className="text-slate-700 leading-relaxed font-medium">
//                       {currentFeature.launchpad}
//                     </p>
//                   </div>

//                   {/* Why Us Advantage */}
//                   <div 
//                     className="pl-4 border-l-4"
//                     style={{ borderColor: currentFeature.color }}
//                   >
//                     <p className="text-xs uppercase font-bold mb-1" style={{ color: currentFeature.color }}>The Advantage</p>
//                     <p className="text-slate-800 font-bold leading-relaxed">
//                       {currentFeature.whyUs}
//                     </p>
//                   </div>
//                 </div>

//                 {/* --- ADDED CTA BUTTON --- */}
//                 <div className="relative z-10">
//                   <a href="/#contact">
//                     <button 
//                       className="px-8 py-3 rounded-full text-white font-bold shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:brightness-110 flex items-center gap-2"
//                       style={{ backgroundColor: currentFeature.color }}
//                     >
//                       {currentFeature.cta} <ArrowRight size={18} />
//                     </button>
//                   </a>
//                 </div>

//               </div>

//               {/* RIGHT SIDE: VISUAL */}
//               <div className="relative h-64 md:h-auto overflow-hidden">
//                 <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10 pointer-events-none" />
//                 <img 
//                   src={currentFeature.gif} 
//                   alt={currentFeature.title}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
//                 />
//                 <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-white/80 border border-white backdrop-blur-md flex items-center gap-2 shadow-lg">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-xs font-bold text-slate-800">Live Impact</span>
//                 </div>
//               </div>

//             </motion.div>
//           </AnimatePresence>

//           {/* --- NAVIGATION --- */}
//           <div className="absolute bottom-6 left-8 md:left-12 z-30 flex items-center gap-4">
//             <div className="flex gap-2">
//               <button 
//                 onClick={prevSlide}
//                 className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button 
//                 onClick={nextSlide}
//                 className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
            
//             <div className="flex gap-2 ml-4 items-center">
//               {features.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     setDirection(idx > currentIndex ? 1 : -1);
//                     setCurrentIndex(idx);
//                   }}
//                   className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
//                     idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-white/80'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default LaunchpadSlideshow;

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Users, 
  Mic, 
  Rocket,
  ArrowRight
} from 'lucide-react';

interface FeatureItem {
  id: number;
  category: string;
  title: string;
  icon: React.ReactNode;
  launchpad: string;
  whyUs: string;
  gif: string;
  color: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    category: "Format & Duration",
    title: "Flexible & Intensive",
    icon: <Clock size={24} />,
    launchpad: "1:1 entrepreneurship program. 10 Weeks Long.",
    whyUs: "Emphasis on real-world scaling, funding, and tangible prototypes—not just theory.",
    gif: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop", 
    color: "#0891b2"
  },
  {
    id: 2,
    category: "Mentorship",
    title: "Elite Network Access",
    icon: <Users size={24} />,
    launchpad: "Personalized guidance from CEOs, founders, and domain experts with regular check-ins.",
    whyUs: "We don't just teach; we connect you directly to top professionals for hands-on experience.",
    gif: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    color: "#4f46e5"
  },
  {
    id: 3,
    category: "Media Presence",
    title: "Build Your Brand",
    icon: <Mic size={24} />,
    launchpad: "Full PR support: Magazine features, video scripts, social media strategy, and interviews.",
    whyUs: "We document your entire journey from ideation to execution to showcase your real impact.",
    gif: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    color: "#9333ea"
  },
  {
    id: 4,
    category: "Outcome",
    title: "Launch Real Startups",
    icon: <Rocket size={24} />,
    launchpad: "Launch a startup, nonprofit, or product with measurable real-world outcomes.",
    whyUs: "Focus on execution and results. Walk away with a company, not just a certificate.",
    gif: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    color: "#d97706"
  }
];

const LaunchpadSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = (): void => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  // Fixed the syntax parenthesis typo below:
  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  const currentFeature = features[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-[#90CAF9] via-[#C5CAE9] to-white relative overflow-hidden font-sans">
      
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Why LaunchPad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stands Out</span>
          </motion.h2>
        </div>

        {/* --- SLIDESHOW CONTAINER --- */}
        <div className="relative bg-white/40 border border-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] min-h-[600px] md:min-h-[550px] pb-24 md:pb-28">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-2 h-full"
            >
              
              {/* LEFT SIDE: CONTENT */}
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                
                {/* Decorative Index */}
                <div className="absolute top-4 right-6 text-8xl font-bold text-white/50 select-none pointer-events-none">
                  0{currentFeature.id}
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-6 relative z-10">
                  <div className="p-2 rounded-lg bg-white shadow-sm text-slate-700 border border-white/50">
                    {currentFeature.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    {currentFeature.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight relative z-10">
                  {currentFeature.title}
                </h3>

                <div className="space-y-6 relative z-10">
                  {/* Launchpad Feature */}
                  <div className="pl-4 border-l-2 border-slate-300">
                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">The Program</p>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {currentFeature.launchpad}
                    </p>
                  </div>

                  {/* Why Us Advantage */}
                  <div 
                    className="pl-4 border-l-4"
                    style={{ borderColor: currentFeature.color }}
                  >
                    <p className="text-xs uppercase font-bold mb-1" style={{ color: currentFeature.color }}>The Advantage</p>
                    <p className="text-slate-800 font-bold leading-relaxed">
                      {currentFeature.whyUs}
                    </p>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE: VISUAL */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10 pointer-events-none" />
                <img 
                  src={currentFeature.gif} 
                  alt={currentFeature.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full bg-white/80 border border-white backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">Live Impact</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* --- BOTTOM CONTROLS & CONTACT PANEL --- */}
          <div className="absolute bottom-6 left-0 right-0 z-30 px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/20 pt-4 bg-white/10 backdrop-blur-md">
            
            {/* Slider Navigation Dots & Arrows */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white/60 text-slate-800 hover:bg-white transition-all border border-white shadow-sm backdrop-blur-md hover:scale-105"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <div className="flex gap-2 items-center">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                      idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* --- SINGLE UNIFIED CONTACT BUTTON --- */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <a href="/#contact" className="w-full sm:w-auto">
                <button 
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:brightness-110 flex items-center justify-center gap-2"
                >
                  Get In Touch <ArrowRight size={18} />
                </button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LaunchpadSlideshow;