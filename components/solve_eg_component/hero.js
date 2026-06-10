// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles, Globe, Users, Code, Heart } from "lucide-react";

// export default function SolveHeroAnimated() {
//   // Animation presets for sequential fade-in elements
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const styles = {
//     section: {
//       position: "relative" ,
//       minHeight: "95vh",
//       width: "100%",
//       backgroundColor: "#050507",
//       color: "#ffffff",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       overflow: "hidden",
//       padding: "80px 24px",
//       fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
//     },
//     // Left-side background image container (Tech Track)
//     techBg: {
//       position: "absolute" ,
//       top: 0,
//       left: 0,
//       width: "50%",
//       height: "100%",
//       backgroundImage: `url('https://img.magnific.com/free-vector/abstract-wavy-background-digital-technology-futuristic-vector-line-design_314614-1624.jpg?semt=ais_hybrid&w=740&q=80')`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       opacity: 0.12,
//       mixBlendMode: "screen" ,
//       pointerEvents: "none" ,
//     },
//     // Right-side background image container (Social Impact Track)
//     impactBg: {
//       position: "absolute" ,
//       top: 0,
//       right: 0,
//       width: "50%",
//       height: "100%",
//       backgroundImage: `url('https://media.istockphoto.com/id/2208901213/vector/group-of-diverse-people-talking-chatting-bonding.jpg?s=612x612&w=0&k=20&c=syhPCQmGhtqlGWrxfDRQDeX7fzT4qoa_gkZStCdQEQk=')`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       opacity: 0.08,
//       mixBlendMode: "color-dodge" ,
//       pointerEvents: "none" ,
//     },
//     gridOverlay: {
//       position: "absolute" ,
//       inset: 0,
//       backgroundImage: "linear-gradient(to right, #121217 1px, transparent 1px), linear-gradient(to bottom, #121217 1px, transparent 1px)",
//       backgroundSize: "5rem 5rem",
//       maskImage: "radial-gradient(circle at 50% 50%, #000 60%, transparent 100%)",
//       WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 60%, transparent 100%)",
//       opacity: 0.4,
//       pointerEvents: "none" ,
//     },
//     container: {
//       position: "relative" ,
//       maxWidth: "1000px",
//       width: "100%",
//       margin: "0 auto",
//       textAlign: "center" ,
//       zIndex: 10,
//       display: "flex",
//       flexDirection: "column" ,
//       alignItems: "center",
//     },
//     badge: {
//       display: "inline-flex",
//       alignItems: "center",
//       gap: "8px",
//       padding: "8px 20px",
//       borderRadius: "9999px",
//       backgroundColor: "rgba(15, 15, 20, 0.7)",
//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       fontSize: "11px",
//       fontWeight: 600,
//       letterSpacing: "0.08em",
//       color: "#e4e4e7",
//       marginBottom: "40px",
//       backdropFilter: "blur(12px)",
//       WebkitBackdropFilter: "blur(12px)",
//     },
//     mainTitle: {
//       fontSize: "clamp(4rem, 10vw, 8rem)",
//       fontWeight: 900,
//       letterSpacing: "0.25em",
//       lineHeight: 0.9,
//       margin: "0 0 16px 0",
//       color: "#ffffff",
//     },
//     gradientSubtitle: {
//       fontSize: "clamp(1.5rem, 4vw, 3rem)",
//       fontWeight: 800,
//       lineHeight: 1.2,
//       margin: "0 0 28px 0",
//       animation: "shimmerGradient 8s ease infinite",
//       backgroundSize: "200% auto",
//     },
//     description: {
//       maxWidth: "680px",
//       color: "#a1a1aa",
//       fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
//       lineHeight: 1.6,
//       margin: "0 0 48px 0",
//       textBalance: "balance" ,
//     },
//     ctaGroup: {
//       display: "flex",
//       flexWrap: "wrap" ,
//       gap: "20px",
//       justifyContent: "center",
//       width: "100%",
//       marginBottom: "80px",
//     },
//     primaryCta: {
//       padding: "16px 36px",
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       fontWeight: 700,
//       fontSize: "15px",
//       borderRadius: "14px",
//       border: "none",
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       gap: "10px",
//       boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
//     },
//     secondaryCta: {
//       padding: "16px 36px",
//       backgroundColor: "rgba(20, 20, 25, 0.6)",
//       color: "#f4f4f5",
//       fontWeight: 600,
//       fontSize: "15px",
//       borderRadius: "14px",
//       border: "1px solid rgba(255, 255, 255, 0.1)",
//       cursor: "pointer",
//       backdropFilter: "blur(8px)",
//       WebkitBackdropFilter: "blur(8px)",
//     },
//     // Decorative floating tags mimicking premium platform dashboards
//     floatingTagLeft: {
//       position: "absolute" ,
//       left: "-60px",
//       top: "35%",
//       backgroundColor: "rgba(124, 58, 237, 0.1)",
//       border: "1px solid rgba(124, 58, 237, 0.2)",
//       padding: "10px 16px",
//       borderRadius: "12px",
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//       fontSize: "13px",
//       fontWeight: 600,
//       color: "#c084fc",
//       backdropFilter: "blur(6px)",
//       WebkitBackdropFilter: "blur(6px)",
//       animation: "floatSlow 6s ease-in-out infinite",
//     },
//     floatingTagRight: {
//       position: "absolute" ,
//       right: "-60px",
//       top: "45%",
//       backgroundColor: "rgba(6, 182, 212, 0.1)",
//       border: "1px solid rgba(6, 182, 212, 0.2)",
//       padding: "10px 16px",
//       borderRadius: "12px",
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//       fontSize: "13px",
//       fontWeight: 600,
//       color: "#22d3ee",
//       backdropFilter: "blur(6px)",
//       WebkitBackdropFilter: "blur(6px)",
//       animation: "floatSlow 6s ease-in-out infinite 3s", // staggered delay
//     },
//     footerGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
//       gap: "32px",
//       borderTop: "1px solid rgba(255, 255, 255, 0.05)",
//       paddingTop: "40px",
//       width: "100%",
//     },
//     footerLabel: {
//       fontSize: "11px",
//       color: "#52525b",
//       textTransform: "uppercase" ,
//       letterSpacing: "0.15em",
//       margin: "0 0 8px 0",
//     },
//     footerValue: {
//       fontSize: "15px",
//       fontWeight: 600,
//       color: "#e4e4e7",
//       margin: 0,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "8px",
//     },
//   };

//   return (
//     <section style={styles.section}>
//       {/* Vanilla CSS Keyframe Animations Injection */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes shimmerGradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes floatSlow {
//           0% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-12px) rotate(1deg); }
//           100% { transform: translateY(0px) rotate(0deg); }
//         }
//         @keyframes pulseSoft {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.7; }
//         }
//       `}} />

//       {/* Track Background Images splitting the canvas layout */}
//       <div style={styles.techBg} />
//       <div style={styles.impactBg} />
      
//       {/* Dynamic Structural Grid lines */}
//       <div style={styles.gridOverlay} />

//       {/* Radial ambient background glows */}
//       <div style={{
//         position: "absolute", top: "20%", left: "25%", width: "400px", height: "400px",
//         background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none"
//       }} />
//       <div style={{
//         position: "absolute", bottom: "20%", right: "25%", width: "450px", height: "450px",
//         background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", pointerEvents: "none"
//       }} />

//       <div style={styles.container}>
        
//         {/* Dynamic Context Floating Tags (Hidden on narrow viewports via standard layouts) */}
//         <div className="hidden lg:flex" style={styles.floatingTagLeft}>
//           <Code size={16} />
//           <span>Tech Innovation</span>
//         </div>
//         <div className="hidden lg:flex" style={styles.floatingTagRight}>
//           <Heart size={16} />
//           <span>Social Impact</span>
//         </div>

//         {/* Global Pill Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           style={styles.badge}
//         >
//           <Sparkles size={13} color="#22d3ee" />
//           <span>YOUTH INNOVATION & SOCIAL IMPACT CHALLENGE</span>
//         </motion.div>

//         {/* Brand Master Title */}
//         <motion.h1
//           variants={fadeInUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
//           style={styles.mainTitle}
//         >
//           SOLVE
//         </motion.h1>

//         {/* Custom Animated Gradient Subtitle */}
//         <motion.h2
//           variants={fadeInUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           style={{
//             ...styles.gradientSubtitle,
//             background: "linear-gradient(to right, #c084fc, #e879f9, #22d3ee, #6366f1)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Shape the future. From Day One.
//         </motion.h2>

//         {/* Mission Positioning Statement */}
//         <motion.p
//           variants={fadeInUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//           style={styles.description}
//         >
//           A global youth platform for students aged <span style={{ color: "#ffffff", fontWeight: 600 }}>14–18</span> to pitch innovative technology and social impact ideas addressing real-world challenges.
//         </motion.p>

//         {/* CTA Buttons with Framer Motion hover mechanics */}
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//           style={styles.ctaGroup}
//         >
//           <motion.button 
//             whileHover={{ scale: 1.03, boxShadow: "0 15px 35px rgba(168, 85, 247, 0.3)" }}
//             whileTap={{ scale: 0.98 }}
//             style={styles.primaryCta}
//           >
//             Submit Your Pitch
//             <ArrowRight size={16} />
//           </motion.button>

//           <motion.button 
//             whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}
//             whileTap={{ scale: 0.98 }}
//             style={styles.secondaryCta}
//           >
//             Explore Tracks
//           </motion.button>
//         </motion.div>

//         {/* Core Metadata Grid */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           style={styles.footerGrid}
//         >
//           <div>
//             <p style={styles.footerLabel}>Eligibility</p>
//             <p style={styles.footerValue}>
//               <Users size={16} color="#c084fc" /> Age 14–18
//             </p>
//           </div>
//           <div>
//             <p style={styles.footerLabel}>Initial Focus</p>
//             <p style={{ ...styles.footerValue, color: "#22d3ee" }}>
//               2 Core Tracks
//             </p>
//           </div>
//           <div>
//             <p style={styles.footerLabel}>Format</p>
//             <p style={styles.footerValue}>Slides + 3 Min Video</p>
//           </div>
//           <div>
//             <p style={styles.footerLabel}>Global Scope</p>
//             <p style={styles.footerValue}>
//               <Globe size={16} color="#a78bfa" /> Digital Intake
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Users, Lightbulb, Trophy, Layers } from "lucide-react";

export default function SolveHeroAnimated({ onOpenRegister }) {
  // Animation presets for sequential fade-in elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const styles = {
    section: {
      position: "relative" ,
      minHeight: "95vh",
      width: "100%",
      backgroundColor: "#050507",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "80px 24px",
      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    },
    // Unified high-energy innovation canvas background
    innovationBg: {
      position: "absolute" ,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url('https://img.magnific.com/free-vector/abstract-wavy-background-digital-technology-futuristic-vector-line-design_314614-1624.jpg?semt=ais_hybrid&w=740&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.08,
      mixBlendMode: "screen" ,
      pointerEvents: "none" ,
    },
    gridOverlay: {
      position: "absolute" ,
      inset: 0,
      backgroundImage: "linear-gradient(to right, #121217 1px, transparent 1px), linear-gradient(to bottom, #121217 1px, transparent 1px)",
      backgroundSize: "5rem 5rem",
      maskImage: "radial-gradient(circle at 50% 50%, #000 60%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 60%, transparent 100%)",
      opacity: 0.4,
      pointerEvents: "none" ,
    },
    container: {
      position: "relative" ,
      maxWidth: "1000px",
      width: "100%",
      margin: "0 auto",
      textAlign: "center" ,
      zIndex: 10,
      display: "flex",
      flexDirection: "column" ,
      alignItems: "center",
    },
    badgeGroup: {
      display: "flex",
      flexDirection: "column" ,
      alignItems: "center",
      gap: "12px",
      marginBottom: "32px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 20px",
      borderRadius: "9999px",
      backgroundColor: "rgba(15, 15, 20, 0.7)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      color: "#e4e4e7",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    },
    teamPill: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 16px",
      borderRadius: "9999px",
      backgroundColor: "rgba(34, 211, 238, 0.1)",
      border: "1px solid rgba(34, 211, 238, 0.2)",
      fontSize: "12px",
      fontWeight: 600,
      color: "#22d3ee",
    },
    mainTitle: {
      fontSize: "clamp(4rem, 10vw, 8rem)",
      fontWeight: 900,
      letterSpacing: "0.25em",
      lineHeight: 0.9,
      margin: "0 0 16px 0",
      color: "#ffffff",
    },
    gradientSubtitle: {
      fontSize: "clamp(1.5rem, 4vw, 3rem)",
      fontWeight: 800,
      lineHeight: 1.2,
      margin: "0 0 28px 0",
      animation: "shimmerGradient 8s ease infinite",
      backgroundSize: "200% auto",
    },
    description: {
      maxWidth: "720px",
      color: "#a1a1aa",
      fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
      lineHeight: 1.6,
      margin: "0 0 40px 0",
      textBalance: "balance" ,
    },
    ctaGroup: {
      display: "flex",
      flexWrap: "wrap" ,
      gap: "20px",
      justifyContent: "center",
      width: "100%",
      marginBottom: "64px",
    },
    primaryCta: {
      padding: "16px 36px",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontWeight: 700,
      fontSize: "15px",
      borderRadius: "14px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
    },
    secondaryCta: {
      padding: "16px 36px",
      backgroundColor: "rgba(20, 20, 25, 0.6)",
      color: "#f4f4f5",
      fontWeight: 600,
      fontSize: "15px",
      borderRadius: "14px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      cursor: "pointer",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
    floatingTagLeft: {
      position: "absolute" ,
      left: "-60px",
      top: "35%",
      backgroundColor: "rgba(168, 85, 247, 0.1)",
      border: "1px solid rgba(168, 85, 247, 0.2)",
      padding: "10px 16px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      fontWeight: 600,
      color: "#c084fc",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      animation: "floatSlow 6s ease-in-out infinite",
    },
    floatingTagRight: {
      position: "absolute" ,
      right: "-60px",
      top: "45%",
      backgroundColor: "rgba(34, 211, 238, 0.1)",
      border: "1px solid rgba(34, 211, 238, 0.2)",
      padding: "10px 16px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      fontWeight: 600,
      color: "#22d3ee",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      animation: "floatSlow 6s ease-in-out infinite 3s",
    },
    footerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "32px",
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      paddingTop: "40px",
      width: "100%",
    },
    footerLabel: {
      fontSize: "11px",
      color: "#52525b",
      textTransform: "uppercase" ,
      letterSpacing: "0.15em",
      margin: "0 0 8px 0",
    },
    footerValue: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#e4e4e7",
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    },
  };

  return (
    <section style={styles.section}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmerGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatSlow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}} />

      <div style={styles.innovationBg} />
      <div style={styles.gridOverlay} />

      {/* Ambient glows */}
      <div style={{
        position: "absolute", top: "20%", left: "25%", width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "25%", width: "450px", height: "450px",
        background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      <div style={styles.container}>
        
        {/* Context Floating Tags */}
        <div className="hidden lg:flex" style={styles.floatingTagLeft}>
          <Lightbulb size={16} />
          <span>Innovation </span>
        </div>
        <div className="hidden lg:flex" style={styles.floatingTagRight}>
          <Trophy size={16} />
          <span>Impact</span>
        </div>

        {/* Global Pill Badge + Participation Alert */}
        <div style={styles.badgeGroup}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={styles.badge}
          >
            <Sparkles size={13} color="#22d3ee" />
            <span>YOUTH INNOVATION CHALLENGE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={styles.teamPill}
          >
            <Users size={14} />
            <span>Open to Individuals & Teams (2-5 members)</span>
          </motion.div>
        </div>

        {/* Brand Master Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={styles.mainTitle}
        >
          SOLVE
        </motion.h1>

        {/* Custom Animated Gradient Subtitle */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            ...styles.gradientSubtitle,
            background: "linear-gradient(to right, #a855f7, #e879f9, #22d3ee, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          One Track. Infinite Solutions.
        </motion.h2>

        {/* Mission Positioning Statement */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={styles.description}
        >
          A global youth platform for students aged <span style={{ color: "#ffffff", fontWeight: 600 }}>13–18</span> to pitch breakthroughs under a single, unified <span style={{ color: "#22d3ee", fontWeight: 600 }}>Innovation Track</span>. Solve critical real-world barriers either through direct social design or systemic technology frameworks across industries like <span style={{ color: "#ffffff", fontWeight: 500 }}>Education, Finance, DeepTech, HealthTech, and ClimateTech</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={styles.ctaGroup}
        >
          <motion.button 
            whileHover={{ scale: 1.03, boxShadow: "0 15px 35px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            style={styles.primaryCta}
          >
            Submit Your Innovation
            <ArrowRight size={16} />
          </motion.button>

          {/* <motion.button 
            whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}
            whileTap={{ scale: 0.98 }}
            style={styles.secondaryCta}
          >
            View Industries
          </motion.button> */}
        </motion.div>

        {/* Core Metadata Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={styles.footerGrid}
        >
          <div>
            <p style={styles.footerLabel}>Eligibility</p>
            <p style={styles.footerValue}>
              <Users size={16} color="#c084fc" /> Age 13–18
            </p>
          </div>
          <div>
            <p style={styles.footerLabel}>Focus Track</p>
            <p style={{ ...styles.footerValue, color: "#22d3ee" }}>
              <Layers size={16} color="#22d3ee" /> Unified Innovation
            </p>
          </div>
          <div>
            <p style={styles.footerLabel}>Required Deliverables</p>
            <p style={styles.footerValue}>10-Page Deck + 1-Min Video</p>
          </div>
          <div>
            <p style={styles.footerLabel}>Scope</p>
            <p style={styles.footerValue}>
              <Globe size={16} color="#a78bfa" /> Online Submission
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}