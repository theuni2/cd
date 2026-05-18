// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Download, Sparkles, ArrowRight } from 'lucide-react';

// const HeroSection = () => {
//   // Animation variants for staggered text entrance
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.8,
//         ease: [0.215, 0.61, 0.355, 1],
//       },
//     }),
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303] text-white px-6">
      
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3] 
//           }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
//         />
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.4, 0.2] 
//           }}
//           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//           className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"
//         />
//       </div>

//       {/* Top Badge */}
//       <motion.div
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={0}
//         className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
//       >
//         <Sparkles className="w-4 h-4 text-yellow-400" />
//         <span className="text-xs font-medium tracking-widest uppercase">
//           Weekend Workshop Series • Grades 6–12
//         </span>
//       </motion.div>

//       {/* Main Headline */}
//       <motion.h1
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={1}
//         className="max-w-4xl text-center text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
//       >
//         Argue a Case. <br />
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
//           Build a Future.
//         </span>
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={2}
//         className="max-w-xl text-center text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
//       >
//         Move beyond textbooks. Spend 48 hours with industry experts to build startups, 
//         draft policies, or diagnose cases. Real tools, real outcomes.
//       </motion.p>

//       {/* Action Buttons */}
//       <motion.div
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={3}
//         className="flex flex-col sm:flex-row gap-4 items-center"
//       >
//         {/* Curiousity-Building CTA */}
//         <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
//           <span className="relative z-10 flex items-center gap-2">
//             Explore 12 Workshops <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </span>
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
//         </button>

//         {/* Download Brochure Button */}
//         <button className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 font-medium rounded-xl transition-all hover:bg-white/5 active:scale-95">
//           <Download className="w-4 h-4" />
//           Download Brochure
//         </button>
//       </motion.div>

//       {/* Floating Outcome Previews (Curiosity Builder) */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
//       >
//         {[
//           { label: "Live Prototypes", val: "100%" },
//           { label: "Expert Mentors", val: "Industry-Led" },
//           { label: "Portfolio Pieces", val: "Tangible" },
//           { label: "Timeframe", val: "2 Days" }
//         ].map((stat, idx) => (
//           <div key={idx} className="space-y-1">
//             <div className="text-xl font-bold text-white/90">{stat.val}</div>
//             <div className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
//           </div>
//         ))}
//       </motion.div>
      
//     </section>
//   );
// };

// export default HeroSection;

// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Download, Sparkles, ArrowRight } from 'lucide-react';

// const HeroSection = () => {
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.15,
//         duration: 0.8,
//         ease: [0.215, 0.61, 0.355, 1],
//       },
//     }),
//   };

//   // Standard CSS Objects
//   const styles = {
//     section: {
//       position: 'relative',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       overflow: 'hidden',
//       backgroundColor: '#050505', // Deep black for maximum contrast
//       color: '#ffffff',
//       padding: '0 24px',
//       fontFamily: 'sans-serif',
//     },
//     backgroundGlow1: {
//       position: 'absolute',
//       top: '-10%',
//       left: '-10%',
//       width: '50%',
//       height: '50%',
//       backgroundColor: 'rgba(59, 130, 246, 0.15)', // Blue glow
//       borderRadius: '50%',
//       filter: 'blur(120px)',
//       pointerEvents: 'none',
//     },
//     backgroundGlow2: {
//       position: 'absolute',
//       bottom: '-10%',
//       right: '-10%',
//       width: '50%',
//       height: '50%',
//       backgroundColor: 'rgba(147, 51, 234, 0.15)', // Purple glow
//       borderRadius: '50%',
//       filter: 'blur(120px)',
//       pointerEvents: 'none',
//     },
//     badge: {
//       marginBottom: '32px',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px',
//       padding: '6px 16px',
//       borderRadius: '9999px',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//       backgroundColor: 'rgba(255, 255, 255, 0.05)',
//       backdropFilter: 'blur(10px)',
//     },
//     badgeText: {
//       fontSize: '11px',
//       fontWeight: '700',
//       letterSpacing: '0.2em',
//       textTransform: 'uppercase',
//       color: '#e5e7eb',
//     },
//     headline: {
//       maxWidth: '1000px',
//       textAlign: 'center',
//       fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
//       fontWeight: '900',
//       letterSpacing: '-0.02em',
//       marginBottom: '32px',
//       lineHeight: '1.1',
//     },
//     gradientText: {
//       background: 'linear-gradient(to right, #60a5fa, #818cf8, #a855f7)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       display: 'inline-block',
//       filter: 'drop-shadow(0px 2px 10px rgba(129, 140, 248, 0.3))',
//     },
//     subtext: {
//       maxWidth: '650px',
//       textAlign: 'center',
//       color: '#d1d5db',
//       fontSize: '1.125rem',
//       marginBottom: '48px',
//       lineHeight: '1.6',
//       fontWeight: '500',
//     },
//     buttonContainer: {
//       display: 'flex',
//       flexDirection: 'row',
//       gap: '20px',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//     },
//     primaryBtn: {
//       padding: '16px 40px',
//       backgroundColor: '#ffffff',
//       color: '#000000',
//       fontWeight: '700',
//       borderRadius: '9999px',
//       border: 'none',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px',
//       fontSize: '1rem',
//       transition: 'all 0.2s ease',
//     },
//     outlineBtn: {
//       padding: '16px 40px',
//       backgroundColor: 'transparent',
//       color: '#ffffff',
//       fontWeight: '700',
//       borderRadius: '9999px',
//       border: '2px solid rgba(255, 255, 255, 0.2)',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px',
//       fontSize: '1rem',
//       transition: 'all 0.2s ease',
//     },
//     statsGrid: {
//       marginTop: '80px',
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//       gap: '40px',
//       width: '100%',
//       maxWidth: '1100px',
//       borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//       paddingTop: '40px',
//     }
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.backgroundGlow1} />
//       <div style={styles.backgroundGlow2} />

//       <motion.div
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={0}
//         style={styles.badge}
//       >
//         <Sparkles size={16} color="#fbbf24" />
//         <span style={styles.badgeText}>Weekend Workshop Series • Grades 6–12</span>
//       </motion.div>

//       <motion.h1
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={1}
//         style={styles.headline}
//       >
//         Argue a Case. <br />
//         <span style={styles.gradientText}>Build a Future.</span>
//       </motion.h1>

//       <motion.p
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={2}
//         style={styles.subtext}
//       >
//         Ditch the textbooks. Spend 48 hours with industry experts to build startups, 
//         draft policies, or diagnose cases. <span style={{color: '#fff', fontWeight: 700}}>Real tools, real outcomes.</span>
//       </motion.p>

//       <motion.div
//         variants={fadeInUp}
//         initial="hidden"
//         animate="visible"
//         custom={3}
//         style={styles.buttonContainer}
//       >
//         <button 
//           style={styles.primaryBtn}
//           onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//           onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//         >
//           Explore 12 Workshops <ArrowRight size={20} />
//         </button>

//         <button 
//           style={styles.outlineBtn}
//           onMouseOver={(e) => {
//             e.currentTarget.style.borderColor = '#fff';
//             e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
//           }}
//           onMouseOut={(e) => {
//             e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
//             e.currentTarget.style.backgroundColor = 'transparent';
//           }}
//         >
//           <Download size={20} />
//           Download Brochure
//         </button>
//       </motion.div>

//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={styles.statsGrid}
//       >
//         {[
//           { label: "Total Workshops", val: "12" },
//           { label: "Hands-on Work", val: "2 Days" },
//           { label: "Output", val: "Portfolio Piece" },
//           { label: "Phase 1", val: "7 Live" }
//         ].map((stat, idx) => (
//           <div key={idx} style={{ textAlign: 'center' }}>
//             <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>{stat.val}</div>
//             <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6b7280', marginTop: '4px', fontWeight: 700 }}>
//               {stat.label}
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;



"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#050505',
      color: '#ffffff',
      padding: '120px 24px 60px 24px', // Increased top padding for the Nav
      fontFamily: 'sans-serif',
    },
    bgImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // Replace the URL below with your actual image path
      backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.95)), url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJpZzRnd3p6Znd6Znd6Znd6Znd6Znd6Znd6Znd6Znd6Znd6Znd6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/26tn33aiTi1jkl6H6/giphy.gif')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0,
      opacity: 0.6, // Adjust for subtle look
    },
    backgroundGlow1: {
      position: 'absolute',
      top: '10%',
      left: '-10%',
      width: '50%',
      height: '50%',
      backgroundColor: 'rgba(59, 130, 246, 0.12)',
      borderRadius: '50%',
      filter: 'blur(120px)',
      pointerEvents: 'none',
      zIndex: 1,
    },
    backgroundGlow2: {
      position: 'absolute',
      bottom: '10%',
      right: '-10%',
      width: '50%',
      height: '50%',
      backgroundColor: 'rgba(147, 51, 234, 0.12)',
      borderRadius: '50%',
      filter: 'blur(120px)',
      pointerEvents: 'none',
      zIndex: 1,
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 10, // Ensures text is above glows and bg image
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    badge: {
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 16px',
      borderRadius: '9999px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
    },
    badgeText: {
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#e5e7eb',
    },
    headline: {
      maxWidth: '1000px',
      textAlign: 'center',
      fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
      fontWeight: '900',
      letterSpacing: '-0.02em',
      marginBottom: '32px',
      lineHeight: '1.1',
    },
    gradientText: {
      background: 'linear-gradient(to right, #60a5fa, #818cf8, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    },
    subtext: {
      maxWidth: '650px',
      textAlign: 'center',
      color: '#d1d5db',
      fontSize: '1.125rem',
      marginBottom: '48px',
      lineHeight: '1.6',
      fontWeight: '500',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    primaryBtn: {
      padding: '16px 40px',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontWeight: '700',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
    },
    outlineBtn: {
      padding: '16px 40px',
      backgroundColor: 'transparent',
      color: '#ffffff',
      fontWeight: '700',
      borderRadius: '9999px',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
    },
    statsGrid: {
      marginTop: '80px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '40px',
      width: '100%',
      maxWidth: '1100px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '40px',
    }
  };

  return (
    <section style={styles.section}>
      {/* Background Layer */}
      <div style={styles.bgImage} />
      
      {/* Decorative Glows */}
      <div style={styles.backgroundGlow1} />
      <div style={styles.backgroundGlow2} />

      {/* Content Layer */}
      <div style={styles.contentWrapper}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={styles.badge}
        >
          <Sparkles size={16} color="#fbbf24" />
          <span style={styles.badgeText}>Weekend Workshop Series • Grades 6–12</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={styles.headline}
        >
          Workshop <br />
          <span style={styles.gradientText}>Build a Future.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={styles.subtext}
        >
          Ditch the textbooks. Spend 48 hours with industry experts to build startups, 
          draft policies, or diagnose cases. <span style={{color: '#fff', fontWeight: 700}}>Real tools, real outcomes.</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={styles.buttonContainer}
        >
          <a href="#pro">
          <button 
            style={styles.primaryBtn}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Explore Workshops <ArrowRight size={20} />
          </button>
</a>
         <button
  style={styles.outlineBtn}
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/brochure/CD Workshop Brochure.pdf'; // path to your brochure file
    link.download = 'Brochure.pdf';
    link.click();
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = '#fff';
    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
    e.currentTarget.style.backgroundColor = 'transparent';
  }}
>
  <Download size={20} />
  Download Upcoming Workshop Brochure
</button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          style={styles.statsGrid}
        >
          {[
            { label: "Total Workshops", val: "12" },
            { label: "Hands-on Work", val: "2 Days" },
            { label: "Output", val: "Portfolio Piece" },
            { label: "Phase 1", val: "4 Live" }
          ].map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>{stat.val}</div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6b7280', marginTop: '4px', fontWeight: 700 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;