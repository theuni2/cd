// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function SolveTracks() {
//   const tracks = [
//     {
//       id: "01",
//       title: "Tech Innovation",
//       tagline: "// Engineering the Future",
//       description: "For builders, coders, and visionaries leverage emerging technology to create scalable systems and interactive platforms.",
//       focusItems: ["Mobile & Web Applications", "Artificial Intelligence & ML", "STEM Frameworks", "Future-Tech Startups"],
//       gradient: "from-blue-600/20 to-cyan-500/5",
//       borderColor: "hover:border-blue-500/40",
//       accentText: "text-blue-400",
//       bulletBg: "bg-blue-500/10 text-blue-300"
//     },
//     {
//       id: "02",
//       title: "Social Impact",
//       tagline: "// Designing for Humanity",
//       description: "For community leaders, advocates, and changemakers developing grassroots movements, awareness blueprints, and sustainable solutions.",
//       focusItems: ["Community Action Projects", "Awareness & Media Campaigns", "NGO & Grassroots Frameworks", "Sustainability & Green Ideas"],
//       gradient: "from-emerald-600/20 to-teal-500/5",
//       borderColor: "hover:border-emerald-500/40",
//       accentText: "text-emerald-400",
//       bulletBg: "bg-emerald-500/10 text-emerald-300"
//     }
//   ];

//   return (
//     <section className="relative w-full bg-[#030712] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      
//       {/* Background Decorative Element */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none z-0 overflow-hidden">
//         <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-indigo-500/5 blur-[120px]" />
//       </div>

//       <div className="relative w-full max-w-6xl mx-auto z-10">
        
//         {/* Section Header */}
//         <div className="max-w-3xl mb-16 sm:mb-24">
//           <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
//             // Choose Your Core Focus
//           </p>
//           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-6">
//             Two Dual-Track Pathways
//           </h2>
//           <p className="text-base sm:text-lg font-light text-gray-400 leading-relaxed">
//             Year 1 keeps it beautifully focused. Submit your project under one of our two primary divisions. Beginners are welcome across both streams.
//           </p>
//         </div>

//         {/* Tracks Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//           {tracks.map((track, index) => (
//             <motion.div
//               key={track.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.7, delay: index * 0.2, ease: [0.215, 0.61, 0.355, 1] }}
//               className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-gradient-to-br ${track.gradient} border border-gray-800/80 backdrop-blur-sm transition-all duration-500 ${track.borderColor} group`}
//             >
//               <div>
//                 {/* ID & Tagline */}
//                 <div className="flex items-center justify-between mb-8">
//                   <span className="text-sm font-mono font-bold text-gray-600 tracking-wider">
//                     TRACK_{track.id}
//                   </span>
//                   <span className={`text-xs font-semibold tracking-wider uppercase ${track.accentText}`}>
//                     {track.tagline}
//                   </span>
//                 </div>

//                 {/* Track Title */}
//                 <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
//                   {track.title}
//                 </h3>

//                 {/* Track Description */}
//                 <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm sm:text-base">
//                   {track.description}
//                 </p>
//               </div>

//               {/* Scope & Focus Bullets */}
//               <div className="border-t border-gray-800/60 pt-6 mt-4">
//                 <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
//                   Acceptable Core Deliverables:
//                 </p>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {track.focusItems.map((item, idx) => (
//                     <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 font-medium">
//                       <span className={`flex h-1.5 w-1.5 shrink-0 rounded-full ${track.bulletBg}`} />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function SolveTracks() {
//   const tracks = [
//     {
//       id: "01",
//       title: "Tech Innovation",
//       tagline: "Engineering the Future",
//       description: "For builders, coders, and visionaries leveraging emerging technology to create scalable systems and interactive platforms.",
//       focusItems: ["Mobile & Web Applications", "Artificial Intelligence & ML", "STEM Frameworks", "Future-Tech Startups"],
//       cardBg: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(6, 182, 212, 0.03) 100%)',
//       borderColor: 'rgba(59, 130, 246, 0.3)',
//       accentColor: '#60a5fa',
//       bulletColor: '#3b82f6'
//     },
//     {
//       id: "02",
//       title: "Social Impact",
//       tagline: "Designing for Humanity",
//       description: "For community leaders, advocates, and changemakers developing grassroots movements, awareness blueprints, and sustainable solutions.",
//       focusItems: ["Community Action Projects", "Awareness & Media Campaigns", "NGO & Grassroots Frameworks", "Sustainability & Green Ideas"],
//       cardBg: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(20, 184, 166, 0.03) 100%)',
//       borderColor: 'rgba(16, 185, 129, 0.3)',
//       accentColor: '#34d399',
//       bulletColor: '#10b981'
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
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: '800px',
//       height: '350px',
//       borderRadius: '50%',
//       backgroundColor: 'rgba(99, 102, 241, 0.03)',
//       filter: 'blur(120px)',
//       pointerEvents: 'none'
//     },
//     container: {
//       width: '100%',
//       maxWidth: '1152px',
//       margin: '0 auto',
//       position: 'relative',
//       zIndex: 10
//     },
//     headerArea: {
//       maxWidth: '768px',
//       marginBottom: '64px',
//       textAlign: 'left'
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
//       margin: '0 0 24px 0',
//       lineHeight: '1.1'
//     },
//     description: {
//       fontSize: '16px',
//       fontWeight: '300',
//       color: '#9ca3af',
//       lineHeight: '1.6',
//       margin: 0
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//       gap: '32px',
//       width: '100%'
//     },
//     card: (track) => ({
//       background: track.cardBg,
//       border: `1px solid ${track.borderColor}`,
//       borderRadius: '24px',
//       padding: '40px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       backdropFilter: 'blur(12px)',
//       boxSizing: 'border-box',
//       textAlign: 'left'
//     }),
//     metaRow: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       marginBottom: '32px'
//     },
//     trackId: {
//       fontSize: '12px',
//       fontFamily: 'monospace',
//       fontWeight: '700',
//       color: '#4b5563',
//       letterSpacing: '0.1em'
//     },
//     tagline: (track) => ({
//       fontSize: '12px',
//       fontWeight: '600',
//       fontFamily: 'monospace',
//       letterSpacing: '0.05em',
//       textTransform: 'uppercase',
//       color: track.accentColor
//     }),
//     trackTitle: {
//       fontSize: 'clamp(1.5rem, 3vw, 2rem)',
//       fontWeight: '800',
//       color: '#ffffff',
//       letterSpacing: '-0.01em',
//       margin: '0 0 16px 0'
//     },
//     trackText: {
//       fontSize: '15px',
//       fontWeight: '300',
//       color: '#9ca3af',
//       lineHeight: '1.6',
//       margin: '0 0 32px 0'
//     },
//     bulletSection: {
//       borderTop: '1px solid rgba(55, 65, 81, 0.4)',
//       paddingTop: '24px',
//       marginTop: '16px'
//     },
//     bulletHeader: {
//       fontSize: '11px',
//       fontWeight: '700',
//       textTransform: 'uppercase',
//       letterSpacing: '0.1em',
//       color: '#6b7280',
//       margin: '0 0 16px 0'
//     },
//     bulletGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '12px',
//       padding: 0,
//       margin: 0,
//       listStyleType: 'none'
//     },
//     bulletItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '10px',
//       fontSize: '13px',
//       fontWeight: '500',
//       color: '#d1d5db'
//     },
//     dot: (track) => ({
//       width: '6px',
//       height: '6px',
//       borderRadius: '50%',
//       backgroundColor: track.bulletColor,
//       boxShadow: `0 0 6px ${track.bulletColor}`,
//       flexShrink: 0
//     })
//   };

//   return (
//     <section style={styles.section}>
//       {/* Structural Minimal Background Blends */}
//       <div style={styles.ambientGlow} />

//       <div style={styles.container}>
        
//         {/* Section Header */}
//         <div style={styles.headerArea}>
//           <p style={styles.preTitle}>Choose Your Core Focus</p>
//           <h2 style={styles.mainTitle}>Two Dual-Track Pathways</h2>
//           <p style={styles.description}>
//             Year 1 keeps it beautifully focused. Submit your project under one of our two primary divisions. Beginners are welcome across both streams.
//           </p>
//         </div>

//         {/* Tracks Grid Layout */}
//         <div style={styles.grid}>
//           {tracks.map((track, index) => (
//             <motion.div
//               key={track.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
//               style={styles.card(track)}
//             >
//               <div>
//                 {/* ID & Tagline Panel */}
//                 <div style={styles.metaRow}>
//                   <span style={styles.trackId}>TRACK_{track.id}</span>
//                   <span style={styles.tagline(track)}>{track.tagline}</span>
//                 </div>

//                 {/* Main Track Heading */}
//                 <h3 style={styles.trackTitle}>{track.title}</h3>

//                 {/* Main Track Body Text */}
//                 <p style={styles.trackText}>{track.description}</p>
//               </div>

//               {/* Acceptable Deliverables Sub-Section */}
//               <div style={styles.bulletSection}>
//                 <p style={styles.bulletHeader}>Acceptable Core Deliverables:</p>
//                 <ul style={styles.bulletGrid}>
//                   {track.focusItems.map((item, idx) => (
//                     <li key={idx} style={styles.bulletItem}>
//                       <span style={styles.dot(track)} />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SolveTracks() {
  const tracks = [
    {
      id: "01",
      title: "Tech Innovation",
      tagline: "ENGINEERING THE FUTURE",
      description: "For the coders, builders, and deep-tech architects leveraging artificial intelligence, scalable software engineering, and hardware frameworks to build tomorrow's startups.",
      focusItems: ["Mobile & Web Ecosystems", "Artificial Intelligence & ML", "STEM & Future-Tech Frameworks"],
      // High-end dark tech conceptual image
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=cover",
      glowColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "rgba(59, 130, 246, 0.3)",
      accentText: "#60a5fa"
    },
    {
      id: "02",
      title: "Social Impact",
      tagline: "DESIGNING FOR HUMANITY",
      description: "For the community leaders, advocates, and sustainable pioneers engineering grassroots movements, awareness blueprints, and eco-centric action frameworks.",
      focusItems: ["Grassroots Community Projects", "Sustainability & Green Systems", "NGO Framework Blueprints"],
      // High-end nature/humanitarian abstract structural image
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=cover",
      glowColor: "rgba(16, 185, 129, 0.12)",
      borderColor: "rgba(16, 185, 129, 0.3)",
      accentText: "#34d399"
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
    headerArea: {
      maxWidth: '700px',
      marginBottom: '80px',
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
      margin: '0 0 24px 0',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '40px',
      width: '100%'
    },
    /* Card Frame containing Image Assets */
    card: (track) => ({
      position: 'relative',
      height: '560px',
      borderRadius: '28px',
      border: `1px solid ${track.borderColor}`,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
      padding: '48px',
      cursor: 'pointer',
      boxSizing: 'border-box',
      backgroundColor: '#040814',
      boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8)'
    }),
    imageBackground: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
      opacity: 0.4
    },
    gradientOverlay: (track) => ({
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(to top, #02040a 0%, rgba(2, 4, 10, 0.8) 50%, ${track.glowColor} 100%)`,
      zIndex: 2
    }),
    contentArea: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'left',
      width: '100%'
    },
    tagline: (track) => ({
      fontSize: '11px',
      fontFamily: 'monospace',
      fontWeight: '700',
      letterSpacing: '0.1em',
      color: track.accentText,
      marginBottom: '16px',
      display: 'block'
    }),
    trackTitle: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#ffffff',
      margin: '0 0 16px 0',
      letterSpacing: '-0.01em'
    },
    trackDesc: {
      fontSize: '14px',
      fontWeight: '300',
      color: '#9ca3af',
      lineHeight: '1.6',
      margin: '0 0 32px 0'
    },
    bulletList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: 0,
      margin: 0,
      listStyleType: 'none',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: '24px'
    },
    bulletItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '13px',
      color: '#d1d5db',
      fontWeight: '500'
    },
    dot: (track) => ({
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: track.accentText,
      boxShadow: `0 0 8px ${track.accentText}`
    })
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerArea}>
          <p style={styles.preTitle}>CATEGORY SELECTOR</p>
          <h2 style={styles.mainTitle}>Choose Your Core Pathway</h2>
          <p style={styles.p}>
            Year 1 keeping focus tight. Select a primary lane designed to scale either digital system logic or human sustainability kampaign blueprints.
          </p>
        </div>

        {/* Asymmetrical Rich Image Grid */}
        <div style={styles.grid}>
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hovered"
              style={styles.card(track)}
            >
              {/* Cinematic Background Image Element */}
              <motion.img 
                src={track.imageUrl} 
                alt={track.title} 
                style={styles.imageBackground}
                variants={{
                  hovered: { scale: 1.06, opacity: 0.55 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Colored Glow Isolation Overlay */}
              <div style={styles.gradientOverlay(track)} />

              {/* Text Context Layer */}
              <div style={styles.contentArea}>
                <span style={styles.tagline(track)}>{track.tagline}</span>
                <h3 style={styles.trackTitle}>{track.title}</h3>
                <p style={styles.trackDesc}>{track.description}</p>

                {/* Scope requirements */}
                <ul style={styles.bulletList}>
                  {track.focusItems.map((item, idx) => (
                    <li key={idx} style={styles.bulletItem}>
                      <span style={styles.dot(track)} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}