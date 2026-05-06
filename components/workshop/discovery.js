// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Rocket, Brain, Gavel, TrendingUp, Palette, PenTool, Stethoscope } from 'lucide-react';

// const workshops = [
//   {
//     title: "Startup Launch",
//     tagline: "Build a business in 2 days",
//     icon: <Rocket className="w-6 h-6" />,
//     color: "from-orange-500 to-red-500",
//     outcomes: ["6-slide pitch deck", "Live landing page", "Brand kit"],
//     grades: "7–12",
//     price: "₹10,000"
//   },
//   {
//     title: "AI & The Future",
//     tagline: "Use AI to build something real",
//     icon: <Brain className="w-6 h-6" />,
//     color: "from-blue-500 to-cyan-500",
//     outcomes: ["AI prototype (live)", "5-slide deck", "Demo recording"],
//     grades: "7–12",
//     price: "₹10,000"
//   },
//   {
//     title: "Law & Justice",
//     tagline: "Argue a real case in 2 days",
//     icon: <Gavel className="w-6 h-6" />,
//     color: "from-emerald-500 to-teal-500",
//     outcomes: ["Case brief", "Courtroom recording", "Certificate"],
//     grades: "8–12",
//     price: "₹9,000"
//   },
//   {
//     title: "Investment Banking",
//     tagline: "Value a company. Pitch a deal.",
//     icon: <TrendingUp className="w-6 h-6" />,
//     color: "from-purple-500 to-indigo-500",
//     outcomes: ["Valuation model", "Deal memo", "Pitch deck"],
//     grades: "9–12",
//     price: "₹10,000"
//   }
// ];

// const WorkshopGrid = () => {
//   return (
//     <section className="py-24 bg-[#030303] text-white px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="mb-16">
//           <motion.span 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-blue-400 font-medium tracking-widest uppercase text-sm"
//           >
//             Phase 1: Now Boarding
//           </motion.span>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-bold mt-4"
//           >
//             Choose Your Mastery.
//           </motion.h2>
//         </div>

//         {/* Interactive Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {workshops.map((workshop, idx) => (
//             <WorkshopCard key={idx} workshop={workshop} index={idx} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const WorkshopCard = ({ workshop, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative group h-[420px] rounded-3xl bg-[#111] border border-white/5 overflow-hidden cursor-pointer"
//     >
//       {/* Background Gradient Glow */}
//       <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${workshop.color}`} />
      
//       <div className="relative h-full p-8 flex flex-col">
//         {/* Icon & Grade Tag */}
//         <div className="flex justify-between items-start mb-6">
//           <div className={`p-3 rounded-2xl bg-gradient-to-br ${workshop.color} text-white`}>
//             {workshop.icon}
//           </div>
//           <span className="text-xs font-medium text-gray-500 border border-white/10 px-3 py-1 rounded-full">
//             Grades {workshop.grades}
//           </span>
//         </div>

//         {/* Title & Tagline */}
//         <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 bg-white">
//           {workshop.title}
//         </h3>
//         <p className="text-gray-400 text-sm mb-6">{workshop.tagline}</p>

//         {/* Animated Outcomes List */}
//         <div className="mt-auto">
//           <AnimatePresence>
//             {isHovered ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 className="space-y-3"
//               >
//                 <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Key Outcomes</p>
//                 {workshop.outcomes.map((outcome, i) => (
//                   <div key={i} className="flex items-center gap-2 text-sm text-gray-200">
//                     <div className="w-1 h-1 rounded-full bg-blue-400" />
//                     {outcome}
//                   </div>
//                 ))}
//                 <div className="pt-4 text-xl font-bold text-white">{workshop.price}</div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-sm text-blue-400 font-medium flex items-center gap-2"
//               >
//                 View Details →
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default WorkshopGrid;


"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Brain, Gavel, TrendingUp, Palette, PenTool, Stethoscope, ChevronRight } from 'lucide-react';

const workshops = [
  {
    title: "Startup Launch",
    tagline: "Build a business in 2 days",
    icon: <Rocket size={24} />,
    color: "#f97316", // Orange
    grades: "7–12",
    price: "₹10,000",
    outcomes: ["6-slide pitch deck", "Live landing page", "Brand kit"],
    cite: ""
  },
  {
    title: "AI & The Future",
    tagline: "Use AI to build something real",
    icon: <Brain size={24} />,
    color: "#3b82f6", // Blue
    grades: "7–12",
    price: "₹10,000",
    outcomes: ["AI prototype (live)", "5-slide deck", "Demo recording"],
    cite: ""
  },
  {
    title: "Law & Justice",
    tagline: "Argue a real case in 2 days",
    icon: <Gavel size={24} />,
    color: "#10b981", // Emerald
    grades: "8–12",
    price: "₹9,000",
    outcomes: ["Case brief", "Courtroom recording", "Certificate"],
    cite: ""
  },
  {
    title: "Investment Banking",
    tagline: "Value a company. Pitch a deal.",
    icon: <TrendingUp size={24} />,
    color: "#8b5cf6", // Purple
    grades: "9–12",
    price: "₹10,000",
    outcomes: ["Valuation model", "Deal memo", "Pitch deck"],
    cite: ""
  }
];

const WorkshopGrid = () => {
  const sectionStyle = {
    width: '100%',
    backgroundColor: '#050505',
    padding: '100px 0',
    display: 'flex',
    justifyContent: 'center',
  };

  const containerStyle = {
    width: '90%',
    maxWidth: '1400px',
    fontFamily: 'sans-serif',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '60px',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Section Header */}
        <div style={{ textAlign: 'left' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ color: '#3b82f6', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '12px' }}
          >
            Phase 1: Launching Now
          </motion.span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', marginTop: '12px', letterSpacing: '-0.02em' }}>
            Choose Your <span style={{ color: '#444' }}>Mastery.</span>
          </h2>
        </div>

        {/* The Grid */}
        <div style={gridStyle}>
          {workshops.map((workshop, idx) => (
            <MasteryCard key={idx} workshop={workshop} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MasteryCard = ({ workshop, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    position: 'relative',
    height: '440px',
    backgroundColor: '#0d0d0d',
    borderRadius: '32px',
    border: `1px solid ${isHovered ? workshop.color : 'rgba(255,255,255,0.08)'}`,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.2, 1, 0.3, 1)',
    overflow: 'hidden',
    boxShadow: isHovered ? `0 20px 40px -15px ${workshop.color}44` : 'none',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      {/* Grade Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div style={{ 
          backgroundColor: `${workshop.color}22`, 
          padding: '12px', 
          borderRadius: '16px', 
          color: workshop.color 
        }}>
          {workshop.icon}
        </div>
        <span style={{ 
          fontSize: '11px', 
          fontWeight: '800', 
          color: '#9ca3af', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '6px 14px', 
          borderRadius: '99px',
          letterSpacing: '0.05em'
        }}>
          GRADES {workshop.grades}
        </span>
      </div>

      {/* Title Area */}
      <h3 style={{ color: '#fff', fontSize: '26px', fontWeight: '800', marginBottom: '10px' }}>{workshop.title}</h3>
      <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>{workshop.tagline}</p>

      {/* Hover Reveal Content */}
      <div style={{ marginTop: 'auto' }}>
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="outcomes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div style={{ fontSize: '10px', fontWeight: '900', color: workshop.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Tangible Outcomes
              </div>
              {workshop.outcomes.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e7eb', fontSize: '13px' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: workshop.color }} />
                  {item}
                </div>
              ))}
              <div style={{ fontSize: '22px', fontWeight: '900', color: '#fff', marginTop: '12px' }}>{workshop.price}</div>
            </motion.div>
          ) : (
            <motion.div
              key="cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: workshop.color, fontSize: '14px', fontWeight: '700' }}
            >
              See Project Details <ChevronRight size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Gradient Glow (Invisible until hover) */}
      <div style={{ 
        position: 'absolute', 
        bottom: '-20%', 
        right: '-20%', 
        width: '200px', 
        height: '200px', 
        background: `radial-gradient(circle, ${workshop.color}22 0%, transparent 70%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease'
      }} />
    </motion.div>
  );
};

export default WorkshopGrid;