"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CompetitionsSection = () => {
  const competitions = [
    {
      title: "Google Science Fair",
      description: "Master the 8-step scientific method to solve real-world problems through data and experimentation.",
      tag: "Innovation",
      icon: "🧪"
    },
    {
      title: "Regeneron ISEF",
      description: "Advanced research coaching for the world's largest pre-college science competition.",
      tag: "Research",
      icon: "🧬"
    },
    {
      title: "3M Young Scientist",
      description: "Turn your everyday observations into a breakthrough invention with expert video-pitch mentoring.",
      tag: "Invention",
      icon: "💡"
    }
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm"
          >
            Specialized Tracks
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mt-4 leading-tight"
          >
            Win the World’s Biggest <br /> 
            <span className="text-slate-400">Science & Tech Stages.</span>
          </motion.h2>
        </div>

        {/* Competition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitions.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-[#fbfcfd] hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-slate-50">
                {comp.icon}
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase mb-4">
                {comp.tag}
              </span>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{comp.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                {comp.description}
              </p>
              <div className="h-1 w-12 bg-blue-600 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[40px] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h4 className="text-2xl font-bold italic">"The next great discovery is yours."</h4>
            <p className="text-slate-400 mt-2">Get matched with a PhD mentor who has judged these fairs.</p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            View All Programs
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CompetitionsSection;

// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';

// const ScienceRoadmap = () => {
//   const steps = [
//     {
//       number: "01",
//       title: "Ideation & Hypothesis",
//       desc: "We help you identify a gap in current research that aligns with Google Science Fair criteria.",
//       color: "bg-blue-600"
//     },
//     {
//       number: "02",
//       title: "Data & Experimentation",
//       desc: "Conduct rigorous testing using university-level methodologies and statistical analysis.",
//       color: "bg-indigo-600"
//     },
//     {
//       number: "03",
//       title: "The Winning Pitch",
//       desc: "Translate complex data into a compelling story that wows judges and global audiences.",
//       color: "bg-slate-900"
//     }
//   ];

//   return (
//     <section className="py-24 bg-slate-50 px-6 lg:px-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
//               Our Formula for <br /> 
//               <span className="text-blue-600 underline decoration-indigo-200">First Place.</span>
//             </h2>
//           </div>
//           <p className="text-slate-500 max-w-sm pb-2">
//             Winning isn't luck. It's a systematic approach to the scientific method tailored for elite youth competitions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
//           {/* Connector Line for Desktop */}
//           <div className="hidden lg:block absolute top-1/4 left-0 w-full h-[2px] bg-slate-200 z-0" />

//           {steps.map((step, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="relative z-10 group"
//             >
//               <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
//                 {step.number}
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
//               <p className="text-slate-600 leading-relaxed italic">
//                 "{step.desc}"
//               </p>
              
//               {/* Decorative circle on the line */}
//               <div className="hidden lg:block absolute top-[calc(25%-4px)] left-8 w-2 h-2 bg-white border-2 border-slate-400 rounded-full" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Technical Detail Card */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-20 bg-white border border-slate-200 p-8 lg:p-12 rounded-[32px] shadow-sm flex flex-wrap gap-12 items-center justify-around"
//         >
//           <div className="text-center">
//             <span className="block text-4xl font-black text-slate-900">8+</span>
//             <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Scientific Phases</span>
//           </div>
//           <div className="h-12 w-[1px] bg-slate-200 hidden md:block" />
//           <div className="text-center">
//             <span className="block text-4xl font-black text-slate-900">PhD</span>
//             <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Level Mentorship</span>
//           </div>
//           <div className="h-12 w-[1px] bg-slate-200 hidden md:block" />
//           <div className="text-center">
//             <span className="block text-4xl font-black text-slate-900">Gold</span>
//             <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Standard Portfolios</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ScienceRoadmap;