'use client';

import React from 'react';
import { motion } from 'framer-motion';

// // Icons (SVG components for "no-dependency" usage)
// const Icons = {
//   Idea: () => (
//     <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//     </svg>
//   ),
//   Script: () => (
//     <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//     </svg>
//   ),
//   Visuals: () => (
//     <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//     </svg>
//   ),
//   Mic: () => (
//     <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//     </svg>
//   ),
//   Mind: () => (
//     <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
//   ),
//   Star: () => (
//     <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//     </svg>
//   ),
// };

// const features = [
//   {
//     title: "Big Idea Development",
//     desc: "We help you find a unique, memorable, and actionable 'big idea' through refinement, research, and story selection.",
//     icon: Icons.Idea,
//   },
//   {
//     title: "Structure & Scripting",
//     desc: "Master signature TEDx formats. We guide you from a powerful hook to evidence-based storytelling and a strong resolution.",
//     icon: Icons.Script,
//   },
//   {
//     title: "Visual Storytelling",
//     desc: "Workshops on using visuals, slides, and props effectively to enhance your message rather than distract from it.",
//     icon: Icons.Visuals,
//   },
//   {
//     title: "Delivery Coaching",
//     desc: "Build vocal control, stage confidence, and emotional connection through rehearsal-based coaching and video feedback.",
//     icon: Icons.Mic,
//   },
//   {
//     title: "Nerves & Presence",
//     desc: "Activities focusing on emotional intelligence and fear management to turn anxiety into stage presence.",
//     icon: Icons.Mind,
//   },
//   {
//     title: "Final Rehearsals",
//     desc: "Simulated stage rehearsals for timing, polish, and tech checks ensuring you are ready for the red dot.",
//     icon: Icons.Star,
//   },
// ];

// const ProgramEssentials = () => {
//   return (
//     <section className="py-20 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8">
        
//         {/* 1. Intro Section: What & Who */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          
//           {/* Left: What is TEDx? */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               What is a <span className="text-red-600">TEDx Talk</span>?
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed mb-6">
//               A TEDx Talk is a short, carefully prepared speech delivered at independently organized events. It focuses on spreading innovative ideas, shifting perspectives, and sparking meaningful conversations in local communities.
//             </p>
//             <div className="flex gap-4 text-sm text-gray-500 font-medium">
//               <span className="flex items-center gap-1">
//                 <span className="w-2 h-2 rounded-full bg-red-600"></span> 3-18 Minutes
//               </span>
//               <span className="flex items-center gap-1">
//                 <span className="w-2 h-2 rounded-full bg-red-600"></span> Innovative Ideas
//               </span>
//               <span className="flex items-center gap-1">
//                 <span className="w-2 h-2 rounded-full bg-red-600"></span> Local Impact
//               </span>
//             </div>
//           </motion.div>

//           {/* Right: Who is it for? */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-50 p-8 rounded-2xl border-l-4 border-red-600 shadow-sm"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Should Apply?</h3>
//             <p className="text-gray-600 mb-4">
//               Anyone with a compelling idea worth sharing—artists, scientists, educators, business leaders, and students.
//             </p>
//             <p className="text-gray-600">
//               We particularly encourage diverse voices with unique experiences or solutions relevant to society. <span className="font-semibold text-gray-900">If you have an idea, we have the platform.</span>
//             </p>
//           </motion.div>
//         </div>

//         {/* 2. Core Program Components Grid */}
//         <div className="mb-20">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Program Components</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our coaching process spans 8–12 weeks of dedicated mentorship, guiding you from a rough concept to a polished performance.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group p-6 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
//                   <feature.icon />
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* 3. Important Disclaimer / Guarantee Box */}
       




//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden"
//         >
//           {/* Decorative Background Element */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

//           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//             <div className="max-w-2xl">
//               <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
//                 <span className="bg-red-600 text-xs px-2 py-1 rounded uppercase tracking-wider">Guarantee</span>
//                 The Official Stage
//               </h3>
//               <p className="text-gray-300 leading-relaxed mb-6">
//                 We guarantee our students an official platform to give a TEDx talk. However, please note that the 
//                 <span className="text-white font-semibold"> timeline and location</span> depend on event availability across India.
//               </p>
              
//               {/* Added Cohort & Seats Info */}
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm font-medium">
//                 <div className="flex items-center gap-2 text-blue-200">
//                   <span className="p-1 bg-blue-500/20 rounded">📅</span>
//                   Next Cohort: <span className="text-white">January 15th, 2026</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-orange-200">
//                   <span className="p-1 bg-orange-500/20 rounded">⚠️</span>
//                   Status: <span className="text-white">Limited Seats Available</span>
//                 </div>
//               </div>

//             </div>
            
//             <a href='/#contact'>
//               <button className="whitespace-nowrap px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-colors mt-4 md:mt-0">
//                 Get Started
//               </button>
//             </a>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default ProgramEssentials;





// Icons (SVG components for "no-dependency" usage)

const Icons = {
  Idea: () => (
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Script: () => (
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  Visuals: () => (
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Mic: () => (
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  Mind: () => (
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

const features = [
  {
    title: "Big Idea Development",
    desc: "We help you find a unique, memorable, and actionable 'big idea' through refinement, research, and story selection.",
    icon: Icons.Idea,
  },
  {
    title: "Structure & Scripting",
    desc: "Master signature TEDx formats. We guide you from a powerful hook to evidence-based storytelling and a strong resolution.",
    icon: Icons.Script,
  },
  {
    title: "Visual Storytelling",
    desc: "Workshops on using visuals, slides, and props effectively to enhance your message rather than distract from it.",
    icon: Icons.Visuals,
  },
  {
    title: "Delivery Coaching",
    desc: "Build vocal control, stage confidence, and emotional connection through rehearsal-based coaching and video feedback.",
    icon: Icons.Mic,
  },
  {
    title: "Nerves & Presence",
    desc: "Activities focusing on emotional intelligence and fear management to turn anxiety into stage presence.",
    icon: Icons.Mind,
  },
  {
    title: "Final Rehearsals",
    desc: "Simulated stage rehearsals for timing, polish, and tech checks ensuring you are ready for the red dot.",
    icon: Icons.Star,
  },
];

const ProgramEssentials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* 1. Intro Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What is a <br/><span className="text-red-600">TEDx Talk</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A TEDx Talk is a short, carefully prepared speech delivered at independently organized events. It focuses on spreading innovative ideas, shifting perspectives, and sparking meaningful conversations in local communities.
            </p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-red-600">3-18 Min</span>
                <span className="text-sm text-gray-500 font-medium">Talk Duration</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-red-600">Global</span>
                <span className="text-sm text-gray-500 font-medium">Impact</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-red-600">Local</span>
                <span className="text-sm text-gray-500 font-medium">Community</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image & Who is it for Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image - REPLACED WITH WORKING LINK */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
                    alt="Speaker on stage" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlapping "Who is it for" Box */}
            <div className="absolute -bottom-10 -left-10 md:-left-12 z-20 bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-600 max-w-md hidden md:block">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who Should Apply?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Anyone with a compelling idea—artists, scientists, educators, and students. <span className="font-semibold text-gray-900">If you have an idea, we have the platform.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* 2. Core Program Components Grid with Alternate Layout */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Program Components</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our coaching process spans 8–12 weeks of dedicated mentorship, guiding you from a rough concept to a polished performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 items-center">
            
            {/* Left Column: Feature Images */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative hidden md:block"
            >
                <div className="grid grid-cols-2 gap-4">
                    {/* Writing / Planning Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop" 
                      alt="Writing script" 
                      className="rounded-2xl shadow-lg object-cover h-64 w-full"
                    />
                    {/* Stage / Mic Image - REPLACED WITH RELEVANT WORKING LINK */}
              <img 
                      src="/launchpad/tedx.png" 
                      alt="Stage with spotlights" 
                      className="rounded-2xl shadow-lg object-cover h-64 w-full mt-12"
                    />
                </div>
                {/* Decorative Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-100/50 blur-3xl rounded-full -z-10"></div>
            </motion.div>

            {/* Right Column: Feature List */}
            <div className="grid grid-cols-1 gap-8">
                {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-5 group"
                >
                    <div className="flex-shrink-0 w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                        <feature.icon />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                </motion.div>
                ))}
            </div>

          </div>
        </div>

        {/* 3. Important Disclaimer / Guarantee Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-10 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="bg-red-600 text-sm px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">Guarantee</span>
                The Official Stage
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-medium mb-6">
                We guarantee our students an official platform to give a TEDx talk. However, please note that the 
                <span className="text-white font-bold border-b-2 border-red-400 mx-1">timeline and location</span> depend on event availability across India.
              </p>

              {/* Added Cohort & Seats Info */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-blue-200">
                  <span className="text-lg">📅</span>
                  Next Cohort: <span className="text-white font-bold">January 15th, 2026</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-orange-200">
                  <span className="text-lg">⚠️</span>
                  Status: <span className="text-white font-bold">Limited Seats Available</span>
                </div>
              </div>
            </div>
            
            <a href='/#contact' className="flex-shrink-0 mt-6 md:mt-0">
              <button className="whitespace-nowrap px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Started
              </button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProgramEssentials;