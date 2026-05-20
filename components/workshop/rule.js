

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const rules = [
  {
    id: "01",
    title: "Producable Outcomes",
    desc: "We don't do 'theory.' Every workshop is designed to produce a tangible result—like a 6-slide pitch deck or a working AI prototype—within 8–9 hours.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    icon: <Target size={22} />,
    color: "#3b82f6"
  },
  {
    id: "02",
    title: "The 'Stage' Moment",
    desc: "Every student ends Day 2 with a presentation. This 'brand moment' builds immense confidence and storytelling skills.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    icon: <Zap size={22} />,
    color: "#fbbf24"
  },
  {
    id: "03",
    title: "Industry Credibility",
    desc: "Mentors are practicing advocates, founders, and industry pros with legible real-world credentials.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    icon: <ShieldCheck size={22} />,
    color: "#10b981"
  },
  {
    id: "04",
    title: "Zero Friction Tools",
    desc: "We use professional, near-free tools like Canva and ChatGPT. No expensive software barriers—just pure creation.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <CheckCircle2 size={22} />,
    color: "#f472b6"
  }
];

const ImprovedPhilosophy = () => {
  const outerWrapper = {
    width: '100%',
    backgroundColor: '#050505',
    display: 'flex',
    justifyContent: 'center',
    padding: '120px 0',
  };

  const innerContainer = {
    width: '90%',
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
  };

  const gridStyle = {
    display: 'grid',
    // Ensures a responsive grid that fills the space correctly
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '64px',
    width: '100%'
  };

  return (
    <section style={outerWrapper}>
      <div style={innerContainer}>
        <div style={{ textAlign: 'left', maxWidth: '800px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ 
              color: '#3b82f6', 
              fontWeight: '800', 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase', 
              fontSize: '11px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div style={{ width: '32px', height: '1px', backgroundColor: '#3b82f6' }} />
            The Workshop DNA
          </motion.div>
          
          <h2 style={{ 
            color: '#fff',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: '900', 
            lineHeight: '1.1', 
            letterSpacing: '-0.04em',
            margin: 0
          }}>
            What Makes <br /> 
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>This Work?</span>
          </h2>
        </div>

        <div style={gridStyle}>
          {rules.map((rule, idx) => (
            <RuleCard key={idx} rule={rule} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RuleCard = ({ rule, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        height: '480px',
        borderRadius: '28px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a0a0a',
        border: `1px solid ${isHovered ? rule.color : 'rgba(255,255,255,0.1)'}`,
        transition: 'all 0.4s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 20px 40px -15px ${rule.color}44` : 'none',
      }}
    >
      {/* Background with Darker Gradient for Readability */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img 
          src={rule.img} 
          alt={rule.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: isHovered ? 0.35 : 0.15,
            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'all 0.6s ease'
          }} 
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, transparent 30%, #050505 95%)' 
        }} />
      </div>

      {/* Content */}
      <div style={{ 
        position: 'relative', 
        height: '100%', 
        padding: '36px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end',
        zIndex: 2
      }}>
        <div style={{ 
          width: '44px', 
          height: '44px', 
          borderRadius: '12px', 
          backgroundColor: rule.color, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '20px',
          color: '#000'
        }}>
          {rule.icon}
        </div>

        <h3 style={{ 
          fontSize: '26px', 
          fontWeight: '800', 
          color: '#fff',
          marginBottom: '12px', 
          letterSpacing: '-0.02em',
          margin: '0 0 12px 0'
        }}>
          {rule.title}
        </h3>

        <p style={{ 
          fontSize: '14px', 
          color: '#9ca3af', 
          lineHeight: '1.6', 
          margin: 0,
          opacity: isHovered ? 1 : 0.8,
        }}>
          {rule.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default ImprovedPhilosophy;

// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Target, Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

// const rules = [
//   {
//     id: "01",
//     title: "Produceable Outcomes",
//     desc: "We don't do 'theory.' Every workshop is designed to produce a tangible result—like a 6-slide pitch deck or a working AI prototype—within 8–9 hours.",
//     img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
//     icon: <Target className="w-5 h-5" />,
//     color: "from-blue-500 to-cyan-400",
//     glow: "rgba(59, 130, 246, 0.15)"
//   },
//   {
//     id: "02",
//     title: "The 'Stage' Moment",
//     desc: "Every student ends Day 2 with a presentation. This 'brand moment' builds immense confidence and storytelling skills.",
//     img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
//     icon: <Zap className="w-5 h-5" />,
//     color: "from-amber-500 to-orange-400",
//     glow: "rgba(251, 191, 36, 0.15)"
//   },
//   {
//     id: "03",
//     title: "Industry Credibility",
//     desc: "Mentors are practicing advocates, founders, and industry pros with legible real-world credentials.",
//     img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
//     icon: <ShieldCheck className="w-5 h-5" />,
//     color: "from-emerald-500 to-teal-400",
//     glow: "rgba(16, 185, 129, 0.15)"
//   },
//   {
//     id: "04",
//     title: "Zero Friction Tools",
//     desc: "We use professional, near-free tools like Canva and ChatGPT. No expensive software barriers—just pure creation.",
//     img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
//     icon: <CheckCircle2 className="w-5 h-5" />,
//     color: "from-pink-500 to-rose-400",
//     glow: "rgba(244, 114, 182, 0.15)"
//   }
// ];

// const WorkshopDNA = () => {
//   return (
//     <section className="w-full bg-[#050505] text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden flex flex-col items-center">
//       <div className="w-full max-w-7xl">
        
//         {/* Header Section */}
//         <div className="max-w-3xl mb-16 md:mb-24">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="text-blue-500 font-extrabold tracking-[0.25em] uppercase text-xs mb-4 flex items-center gap-3"
//           >
//             <div className="w-8 h-[1px] bg-blue-500" />
//             The Workshop DNA
//           </motion.div>
          
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
//             What Makes <br /> 
//             <span className="text-neutral-800">This Work?</span>
//           </h2>
//         </div>

//         {/* Dynamic Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20">
//           {rules.map((rule, idx) => (
//             <RuleCard key={rule.id} rule={rule} index={idx} />
//           ))}
//         </div>

//         {/* Built-in Premium CTA Unit */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative w-full rounded-3xl p-8 md:p-12 border border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden group"
//         >
//           {/* Subtle Ambient Radial Glow */}
//           <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/15 transition-all duration-700" />
          
//           <div className="max-w-2xl relative z-10">
//             <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
//               Ready to bring this experience to your campus?
//             </h3>
//             <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
//               Skip the theoretical lectures. Let’s co-create a high-impact, sprint-style workshop that leaves your students with tangible builds and unmatched brand confidence.
//             </p>
//           </div>

//           <a 
//             href="https://www.thecareerdiscovery.com/#contact"
//             className="relative z-10 shrink-0 inline-flex items-center gap-3 bg-white text-black font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto justify-center"
//           >
//             Initiate Collaboration
//             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// const RuleCard = ({ rule, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.6 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative h-[440px] rounded-2xl overflow-hidden bg-neutral-950 border transition-all duration-500 ease-out flex flex-col justify-end p-8"
//       style={{
//         borderColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
//         boxShadow: isHovered ? `0 20px 40px -15px ${rule.glow}` : 'none',
//         transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
//       }}
//     >
//       {/* Background Image handling */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={rule.img} 
//           alt={rule.title} 
//           className="w-full h-full object-cover transition-all duration-700 ease-out"
//           style={{ 
//             opacity: isHovered ? 0.25 : 0.08,
//             filter: isHovered ? 'grayscale(0%) scale(1.05)' : 'grayscale(100%) scale(1)'
//           }} 
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
//       </div>

//       {/* Card Content Layout */}
//       <div className="relative z-10 w-full">
//         {/* Floating Accent ID Badge */}
//         <span className="absolute top-[-210px] right-0 font-mono text-xs font-bold text-neutral-700 tracking-widest">
//           {rule.id}
//         </span>

//         {/* Dynamic Multi-Color Icon Wrapper */}
//         <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${rule.color} p-[1px] flex items-center justify-center mb-5 shadow-lg`}>
//           <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center text-white">
//             {rule.icon}
//           </div>
//         </div>

//         <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
//           {rule.title}
//         </h3>

//         <p className="text-xs md:text-[13px] text-neutral-400 leading-relaxed min-h-[64px]">
//           {rule.desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default WorkshopDNA;