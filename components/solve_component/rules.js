// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function SolveParticipation() {
//   const rules = [
//     {
//       metric: "14—18",
//       label: "Age Group Eligibility",
//       description: "Open to high school students globally. Designed to be accessible for sharp beginners pitching their very first innovation framework."
//     },
//     {
//       metric: "1—5",
//       label: "Students Per Entry",
//       description: "Submit as an individual founder or collaborate in a team of up to 5 members. Cross-school collaborations are fully permitted."
//     },
//     {
//       metric: "00",
//       label: "Cost to Register",
//       description: "SOLVE is entirely free to enter for Year 1. Our core focus is expanding global reach, student participation, and discoverability."
//     }
//   ];

//   return (
//     <section className="relative w-full bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      
//       {/* Subtle Background Glow */}
//       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
//         <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
//       </div>

//       <div className="relative w-full max-w-6xl mx-auto z-10">
        
//         {/* Asymmetric Header Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 sm:mb-28 items-start">
//           <div className="lg:col-span-5">
//             <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
//               // Structure & Framework
//             </p>
//             <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
//               Participation Rules
//             </h2>
//           </div>
//           <div className="lg:col-span-7 lg:pt-4">
//             <p className="text-base sm:text-lg font-light text-gray-400 leading-relaxed">
//               We have completely stripped away hackathon logistics, complex code deployment hurdles, and technical prerequisites. SOLVE is built to elevate great ideas directly into tangible frameworks.
//             </p>
//           </div>
//         </div>

//         {/* Flat Structural Metric Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-800">
//           {rules.map((rule, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.6, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
//               className="py-12 px-6 sm:px-8 flex flex-col justify-between group transition-colors duration-300 hover:bg-gray-900/10"
//             >
//               <div>
//                 {/* Big Metric Display */}
//                 <div className="text-5xl sm:text-6xl font-black font-mono text-white tracking-tighter mb-6 transition-transform duration-300 group-hover:translate-x-1">
//                   {rule.metric}
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-sm font-bold tracking-wider uppercase text-gray-200 mb-3">
//                   {rule.label}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
//                   {rule.description}
//                 </p>
//               </div>

//               {/* Minimal Accent Line */}
//               <div className="h-[2px] w-8 bg-gray-800 mt-8 group-hover:bg-blue-500 group-hover:w-16 transition-all duration-300" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Callout Block */}
//         <div className="mt-16 text-center sm:text-left bg-gradient-to-r from-gray-950 to-gray-900/50 border border-gray-800/80 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="max-w-xl">
//             <h4 className="text-white font-semibold text-base mb-1">First time entering a global innovation pitch?</h4>
//             <p className="text-gray-400 text-sm font-light leading-relaxed">Don't sweat it. No mockups or operational architectures are required. If your core logic solves a real problem, you are perfectly positioned to compete.</p>
//           </div>
//           <div className="shrink-0 text-xs font-mono text-gray-500 border border-gray-800/80 px-3 py-1.5 rounded-md">
//             // STATUS: OPEN_TO_BEGINNERS
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function SolveParticipationInline() {
//   const rules = [
//     {
//       metric: "14—18",
//       label: "Age Group Eligibility",
//       description: "Open to high school students globally. Designed to be accessible for sharp beginners pitching their very first innovation framework.",
//       // Animated radar component for target age
//       icon: (
//         <div style={{ width: '44px', height: '44px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <motion.div 
//             animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0.1, 0.5] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//             style={{ position: 'absolute', inset: 0, border: '2px solid rgba(59, 130, 246, 0.4)', borderRadius: '50%' }}
//           />
//           <motion.div 
//             animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.3, 0.8] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
//             style={{ position: 'absolute', inset: '6px', border: '1px dashed rgba(59, 130, 246, 0.6)', borderRadius: '50%' }}
//           />
//           <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 10px #3b82f6' }} />
//         </div>
//       )
//     },
//     {
//       metric: "1—5",
//       label: "Students Per Entry",
//       description: "Submit as an individual founder or collaborate in a team of up to 5 members. Cross-school collaborations are fully permitted.",
//       // Animated cluster node component for team sizes
//       icon: (
//         <div style={{ width: '44px', height: '44px', position: 'relative' }}>
//           <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', backgroundColor: '#34d399', borderRadius: '50%', zIndex: 2, boxShadow: '0 0 8px #34d399' }} />
//           {[
//             { top: 4, left: 4 }, { top: 4, right: 4 }, 
//             { bottom: 4, left: 4 }, { bottom: 4, right: 4 }
//           ].map((pos, i) => (
//             <motion.div
//               key={i}
//               animate={{ y: [0, i % 2 === 0 ? 4 : -4, 0], x: [0, i > 1 ? 4 : -4, 0] }}
//               transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: i * 0.2 }}
//               style={{ position: 'absolute', ...pos, width: '6px', height: '6px', backgroundColor: 'rgba(52, 211, 153, 0.4)', borderRadius: '50%' }}
//             />
//           ))}
//           <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', stroke: 'rgba(52, 211, 153, 0.15)', strokeWidth: 1 }}>
//             <line x1="22" y1="22" x2="7" y2="7" />
//             <line x1="22" y1="22" x2="37" y2="7" />
//             <line x1="22" y1="22" x2="7" y2="37" />
//             <line x1="22" y1="22" x2="37" y2="37" />
//           </svg>
//         </div>
//       )
//     },
//     {
//       metric: "00",
//       label: "Cost to Register",
//       description: "SOLVE is entirely free to enter for Year 1. Our core focus is expanding global reach, student participation, and discoverability.",
//       // Animated cyber dollar counter icon
//       icon: (
//         <div style={{ width: '44px', height: '44px', border: '1px solid #374151', borderRadius: '8px', backgroundColor: 'rgba(17, 24, 39, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold', color: '#9ca3af', overflow: 'hidden', relative: 'true' }}>
//           <span style={{ color: '#6366f1', marginRight: '1px' }}>$</span>
//           <motion.div
//             animate={{ y: [0, -20, -40, 0] }}
//             transition={{ repeat: Infinity, duration: 4, times: [0, 0.33, 0.66, 1], ease: "easeInOut" }}
//             style={{ display: 'flex', flexDirection: 'column', lineHeight: '20px', height: '20px' }}
//           >
//             <span>0</span>
//             <span>9</span>
//             <span>4</span>
//           </motion.div>
//           <motion.div
//             animate={{ y: [0, -20, -40, 0] }}
//             transition={{ repeat: Infinity, duration: 4, times: [0, 0.2, 0.5, 1], ease: "easeInOut", delay: 0.1 }}
//             style={{ display: 'flex', flexDirection: 'column', lineHeight: '20px', height: '20px' }}
//           >
//             <span>0</span>
//             <span>7</span>
//             <span>2</span>
//           </motion.div>
//         </div>
//       )
//     }
//   ];

//   const styles = {
//     section: {
//       width: '100%',
//       backgroundColor: '#030712',
//       color: '#ffffff',
//       padding: '96px 24px',
//       position: 'relative',
//       overflow: 'hidden',
//       borderTop: '1px solid #1f2937',
//       fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       boxSizing: 'border-box'
//     },
//     ambientGlow: {
//       position: 'absolute',
//       top: '50%',
//       left: '10%',
//       transform: 'translateY(-50%)',
//       width: '400px',
//       height: '400px',
//       borderRadius: '50%',
//       backgroundColor: 'rgba(59, 130, 246, 0.03)',
//       filter: 'blur(100px)',
//       pointerEvents: 'none'
//     },
//     container: {
//       width: '100%',
//       maxWidth: '1152px',
//       margin: '0 auto',
//       position: 'relative',
//       zIndex: 10
//     },
//     headerGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       gap: '32px',
//       marginBottom: '80px',
//       textAlign: 'left',
//       alignItems: 'start'
//     },
//     preTitle: {
//       fontSize: '11px',
//       fontFamily: 'monospace',
//       fontWeight: '700',
//       color: '#6b7280',
//       letterSpacing: '0.15em',
//       textTransform: 'uppercase',
//       margin: '0 0 12px 0'
//     },
//     mainTitle: {
//       fontSize: 'clamp(2rem, 5vw, 3rem)',
//       fontWeight: '900',
//       color: '#ffffff',
//       textTransform: 'uppercase',
//       letterSpacing: '-0.02em',
//       margin: 0,
//       lineHeight: '1.1'
//     },
//     headerDesc: {
//       fontSize: '16px',
//       fontWeight: '300',
//       color: '#9ca3af',
//       lineHeight: '1.6',
//       margin: 0
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       borderTop: '1px solid #1f2937',
//       borderBottom: '1px solid #1f2937',
//       width: '100%',
//       backgroundColor: 'rgba(255,255,255,0.01)'
//     },
//     card: {
//       padding: '48px 32px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       borderRight: '1px solid #1f2937',
//       borderBottom: '1px solid #1f2937',
//       boxSizing: 'border-box',
//       textAlign: 'left'
//     },
//     metricText: {
//       fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
//       fontWeight: '900',
//       fontFamily: 'monospace',
//       color: '#ffffff',
//       letterSpacing: '-0.03em',
//       margin: '16px 0 12px 0',
//       lineHeight: 1
//     },
//     label: {
//       fontSize: '13px',
//       fontWeight: '700',
//       textTransform: 'uppercase',
//       letterSpacing: '0.05em',
//       color: '#e5e7eb',
//       margin: '0 0 12px 0'
//     },
//     description: {
//       fontSize: '14px',
//       fontWeight: '300',
//       color: '#9ca3af',
//       lineHeight: '1.6',
//       margin: 0
//     },
//     accentLine: {
//       height: '2px',
//       width: '32px',
//       backgroundColor: '#374151',
//       marginTop: '32px',
//       borderRadius: '2px'
//     },
//     calloutBox: {
//       marginTop: '64px',
//       background: 'linear-gradient(to right, #090d16, rgba(17, 24, 39, 0.3))',
//       border: '1px solid #1f2937',
//       padding: '32px',
//       borderRadius: '16px',
//       display: 'flex',
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       gap: '24px',
//       textAlign: 'left'
//     }
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.ambientGlow} />

//       <div style={styles.container}>
        
//         {/* Asymmetric Header */}
//         <div style={styles.headerGrid}>
//           <div>
//             <p style={styles.preTitle}>// Structure & Framework</p>
//             <h2 style={styles.mainTitle}>Participation Rules</h2>
//           </div>
//           <div style={{ lgPt: '16px' }}>
//             <p style={styles.headerDesc}>
//               We have completely stripped away hackathon logistics, complex code deployment hurdles, and technical prerequisites. SOLVE is built to elevate great ideas directly into tangible frameworks.
//             </p>
//           </div>
//         </div>

//         {/* Metric Grid Area */}
//         <div style={styles.grid}>
//           {rules.map((rule, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
//               whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
//               style={styles.card}
//             >
//               <div>
//                 {/* Embedded High-End Animated Visual Graphic */}
//                 {rule.icon}

//                 {/* Main Parameter Numeric Metric */}
//                 <div style={styles.metricText}>{rule.metric}</div>
                
//                 {/* Metric Label */}
//                 <h3 style={styles.label}>{rule.label}</h3>
                
//                 {/* Detail Description */}
//                 <p style={styles.description}>{rule.description}</p>
//               </div>

//               {/* Decorative Accent Anchor */}
//               <motion.div 
//                 className="accent-bar"
//                 variants={{ hover: { width: 64, backgroundColor: '#3b82f6' } }}
//                 style={styles.accentLine} 
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Verification Callout Banner */}
//         <div style={styles.calloutBox}>
//           <div style={{ maxWidth: '576px' }}>
//             <h4 style={{ color: '#ffffff', fontWeight: '600', fontSize: '16px', margin: '0 0 4px 0' }}>First time entering a global innovation pitch?</h4>
//             <p style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '300', lineHeight: '1.5', margin: 0 }}>Don't sweat it. No mockups or operational architectures are required. If your core logic solves a real problem, you are perfectly positioned to compete.</p>
//           </div>
//           <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#6b7280', border: '1px solid #1f2937', padding: '6px 12px', borderRadius: '6px', backgroundColor: '#090d16' }}>
//             // STATUS: OPEN_TO_BEGINNERS
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SolveParticipationUltraPremium() {
  const rules = [
    {
      metric: "14—18",
      label: "Age Group Eligibility",
      description: "Open to high school students globally. Designed to be accessible for sharp beginners pitching their very first innovation framework.",
      // Creative imagery representing focused youth innovation
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=cover"
    },
    {
      metric: "1—5",
      label: "Students Per Entry",
      description: "Submit as an individual founder or collaborate in a team of up to 5 members. Cross-school collaborations are fully permitted.",
      // Creative imagery representing high-tier student team alignment
      imageUrl: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=cover"
    },
    {
      metric: "00.00",
      label: "Cost to Register",
      description: "SOLVE is entirely free to enter for Year 1. Our core focus is expanding global reach, student participation, and discoverability.",
      // Abstract global network conceptual background image
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=cover"
    }
  ];

  const styles = {
    section: {
      width: '100%',
      backgroundColor: '#02040a',
      color: '#ffffff',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #111827',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box'
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    },
    headerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginBottom: '80px',
      alignItems: 'start',
      textAlign: 'left'
    },
    preTitle: {
      fontSize: '11px',
      fontFamily: 'monospace',
      fontWeight: '700',
      color: '#4b5563',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      margin: '0 0 16px 0'
    },
    mainTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: '900',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: 0,
      lineHeight: '1.1'
    },
    p: {
      fontSize: '16px',
      fontWeight: '300',
      color: '#9ca3af',
      lineHeight: '1.6',
      margin: 0
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      width: '100%'
    },
    /* Card Container with Image Asset layer */
    card: {
      position: 'relative',
      height: '380px',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '36px',
      cursor: 'pointer',
      boxSizing: 'border-box',
      backgroundColor: '#040814'
    },
    cardImage: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
      opacity: 0.12,
      transition: 'opacity 0.5s ease, scale 0.5s ease'
    },
    cardGradient: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #02040a 15%, rgba(2, 4, 10, 0.7) 70%, transparent 100%)',
      zIndex: 2
    },
    cardContent: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between'
    },
    metric: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: '900',
      fontFamily: 'monospace',
      color: '#ffffff',
      letterSpacing: '-0.04em',
      lineHeight: 1
    },
    label: {
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#ffffff',
      margin: '0 0 8px 0'
    },
    descText: {
      fontSize: '13px',
      fontWeight: '300',
      color: '#9ca3af',
      lineHeight: '1.5',
      margin: 0
    },
    bottomCallout: {
      marginTop: '56px',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      background: 'linear-gradient(90deg, #040814 0%, rgba(2, 4, 10, 0.4) 100%)',
      padding: '32px 40px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px',
      textAlign: 'left',
      position: 'relative',
      overflow: 'hidden'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Asymmetric Structural Header */}
        <div style={styles.headerGrid}>
          <div>
            <p style={styles.preTitle}>// SYSTEM CONSTANTS</p>
            <h2 style={styles.mainTitle}>Participation Framework</h2>
          </div>
          <div>
            <p style={styles.p}>
              We have completely stripped away backend deployment constraints, complex staging dependencies, and operational prerequisites. SOLVE prioritizes core strategy metrics.
            </p>
          </div>
        </div>

        {/* 3-Column Rich Image Parametric Grid */}
        <div style={styles.grid}>
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hoverState"
              style={styles.card}
            >
              {/* Asset Background Imagery */}
              <motion.img 
                src={rule.imageUrl} 
                alt={rule.label} 
                style={styles.cardImage}
                variants={{
                  hoverState: { scale: 1.05, opacity: 0.35 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Masking Layer */}
              <div style={styles.cardGradient} />

              {/* Dynamic Content Layers */}
              <div style={styles.cardContent}>
                <div>
                  <div style={styles.metric}>{rule.metric}</div>
                </div>
                
                <div>
                  <h3 style={styles.label}>{rule.label}</h3>
                  <p style={styles.descText}>{rule.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom Verification Callout */}
        <div style={styles.bottomCallout}>
          <div style={{ maxWidth: '600px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>First time entering a global competition?</h4>
            <p style={{ fontSize: '14px', fontWeight: '300', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
              Don't sweat it. No mockups or built code prototypes are required. If your core logic tracks and fixes a real problem, your project is optimized for submission.
            </p>
          </div>
          <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.2)', padding: '8px 16px', borderRadius: '8px', backgroundColor: 'rgba(52, 211, 153, 0.02)' }}>
            // STATUS: OPEN_TO_ALL_BEGINNERS
          </div>
        </div>

      </div>
    </section>
  );
}


