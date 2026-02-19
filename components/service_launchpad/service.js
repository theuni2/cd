// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, AlertCircle, ArrowRight, Users } from 'lucide-react';

// const projects = [
//   {
//     id: 1,
//     title: "Climate Action Project",
//     category: "Environmental Science",
//     image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop", // Mountains/Nature
//     description: "Work with real environmental data to propose sustainable solutions for local communities.",
//     color: "from-emerald-500 to-teal-500",
//     shadow: "shadow-emerald-500/20",
//     slots: 4
//   },
//   {
//     id: 2,
//     title: "Sports Education Launch",
//     category: "Management & Athletics",
// image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop",   
//  description: "Design and execute a sports curriculum for underprivileged youth, focusing on leadership.",
//     color: "from-orange-500 to-amber-500",
//     shadow: "shadow-orange-500/20",
//     slots: 3
//   },
//   {
//     id: 3,
//     title: "Literacy Impact Project",
//     category: "Social Impact",
//     image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop", // Education/Reading
//     description: "Create and distribute learning materials to bridge the literacy gap in rural areas.",
//     color: "from-blue-500 to-indigo-500",
//     shadow: "shadow-blue-500/20",
//     slots: 5
//   }
// ];

// const ServiceCards = () => {
//   return (
//     <section className="py-24 bg-slate-950 font-sans text-white relative overflow-hidden">
      
//       {/* Background Ambience */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

//       <div className="container mx-auto px-6 max-w-7xl">
        
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-slate-200 to-blue-900">
//             Select Your Impact Project
//           </h2>
//           <p className="text-gray-800 max-w-xl mx-auto">
//             Choose a track to build your portfolio. Applications are rolling, but spots are strictly limited.
//           </p>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// const ProjectCard = ({ project, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.2, duration: 0.6 }}
//       whileHover={{ y: -10 }}
//       className={`group relative flex flex-col h-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:${project.shadow} transition-all duration-500`}
//     >
      
//       {/* Image Section */}
//       <div className="relative h-56 overflow-hidden">
//         <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
//         <motion.img 
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.7 }}
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-full object-cover"
//         />
        
//         {/* Category Badge */}
//         <div className="absolute top-4 left-4 z-20">
//           <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white">
//             {project.category}
//           </span>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col flex-grow p-6">
        
//         {/* Header */}
//         <div className="mb-4">
//           <div className="flex justify-between items-start mb-2">
//             <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
//               {project.title}
//             </h3>
//           </div>
//           <p className="text-slate-400 text-sm leading-relaxed">
//             {project.description}
//           </p>
//         </div>

//         {/* Timeline & Stats Box */}
//         <div className="mt-auto bg-slate-950/50 rounded-xl p-4 border border-white/5 space-y-3">
          
//           {/* Urgency Row */}
//           <div className="flex items-center justify-between pb-3 border-b border-white/5">
//             <div className="flex items-center gap-2 text-amber-400">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
//               </span>
//               <span className="text-xs font-bold uppercase tracking-wide">Limited Slots</span>
//             </div>
//             <span className="text-xs text-slate-500 font-mono">
//               {project.slots} spots left
//             </span>
//           </div>

//           {/* Dates Row */}
//           <div className="grid grid-cols-2 gap-2 text-xs">
//             <div>
//               <p className="text-slate-500 mb-1">Registration Ends</p>
//               <div className="flex items-center gap-1.5 text-rose-400 font-semibold">
//                 <AlertCircle size={14} />
//                 <span>15 Jan '26</span>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-slate-500 mb-1">Program Starts</p>
//               <div className="flex items-center justify-end gap-1.5 text-emerald-400 font-semibold">
//                 <Calendar size={14} />
//                 <span>01 Feb '26</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button (appears on hover) */}
        
//         <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
//            <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${project.color} text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2`}>
//              Apply Now <ArrowRight size={16} />
//            </button>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCards;


'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, AlertCircle, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Climate Action Project",
    category: "Environmental Science",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop", // Mountains/Nature
    description: "Work with real environmental data to propose sustainable solutions for local communities.",
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
    slots: 4,
    slug:"/climate_project"
  },
  {
    id: 2,
    title: "Sports Education Launch",
    category: "Management & Athletics",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop",   
    description: "Design and execute a sports curriculum for underprivileged youth, focusing on leadership.",
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/20",
    slots: 3,
    slug:"/sports_launchpad"
  },
  {
    id: 3,
    title: "Literacy Impact Project",
    category: "Social Impact",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop", // Education/Reading
    description: "Create and distribute learning materials to bridge the literacy gap in rural areas.",
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/20",
    slots: 5,
    slug:"/youth_edu"
  }
];

const ServiceCards = () => {
  // 1. STATE for Dynamic Dates
  const [dynamicDates, setDynamicDates] = useState({
    deadline: "Loading...",
    start: "Loading..."
  });

  // 2. LOGIC to Calculate Dates
  useEffect(() => {
    const calculateDates = () => {
      const today = new Date();
      const currentDay = today.getDate();
      const currentMonth = today.getMonth(); 
      const currentYear = today.getFullYear();

      let targetMonth = currentMonth;
      let targetYear = currentYear;

      // Rule: If today > 15th, move to next cycle
      if (currentDay > 15) {
        targetMonth = currentMonth + 1;
      }

      // Calculate Dates
      const deadlineDate = new Date(targetYear, targetMonth, 15);
      const startDate = new Date(targetYear, targetMonth + 1, 1);

      // Formatter function: "15 Jan '26"
      const format = (date) => {
        const d = date.getDate().toString().padStart(2, '0');
        const m = date.toLocaleString('default', { month: 'short' });
        const y = date.getFullYear().toString().slice(2);
        return `${d} ${m} '${y}`;
      };

      setDynamicDates({
        deadline: format(deadlineDate),
        start: format(startDate)
      });
    };

    calculateDates();
  }, []);

  return (
    <section className="py-24 bg-slate-950 font-sans text-white relative overflow-hidden" id ="projects">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-slate-200 to-blue-900">
            Select Your Impact Project
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto">
            Choose a track to build your portfolio. Applications are rolling, but spots are strictly limited.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              dates={dynamicDates} 
              // PASS DATES PROP HERE

            />
          ))}
        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, dates }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`group relative flex flex-col h-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:${project.shadow} transition-all duration-500`}
    >
      
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
              {project.title}
            </h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Timeline & Stats Box */}
        <div className="mt-auto bg-slate-950/50 rounded-xl p-4 border border-white/5 space-y-3">
          
          {/* Urgency Row */}
          <div className="flex items-center justify-between pb-3  border-white/5">
            <div className="flex items-center gap-2 text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wide">Limited Slots</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              {project.slots} spots left
            </span>
          </div>

          {/* Dates Row - DYNAMICALLY RENDERED */}
          {/* <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-slate-500 mb-1">Registration Ends</p>
              <div className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <AlertCircle size={14} />
                <span>{dates.deadline}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-500 mb-1">Program Starts</p>
              <div className="flex items-center justify-end gap-1.5 text-emerald-400 font-semibold">
                <Calendar size={14} />
                <span>{dates.start}</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* CTA Button (appears on hover) */}
        <a href="/#contact">
        <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
           <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${project.color} text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2`}>
             Apply Now <ArrowRight size={16} />
           </button>
        </div>
      </a>
<a href={project.slug} target="_blank" rel="noopener noreferrer">
      <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
  <button 
    className="w-full py-2 rounded-lg font-semibold text-sm shadow-lg flex items-center justify-center gap-2"
    style={{ 
      backgroundColor: '#e5e7eb', // Hardcoded Gray-200
      color: '#000000'            // Hardcoded Black
    }}
  >
    Learn More <ArrowRight size={16} />
  </button>
</div>
</a>

      </div>
    </motion.div>
  );
};

export default ServiceCards;