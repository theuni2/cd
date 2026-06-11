// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles, Send, Linkedin, Instagram, ArrowUp } from "lucide-react";

// export default function SolveFooterCTA() {
//   const styles = {
//     section: {
//       position: "relative" ,
//       width: "100%",
//       backgroundColor: "#050507",
//       color: "#ffffff",
//       padding: "120px 24px 40px 24px",
//       overflow: "hidden",
//       fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
//     },
//     container: {
//       maxWidth: "1140px",
//       margin: "0 auto",
//       position: "relative",
//       zIndex: 5,
//     },
//     /* Master Convergent CTA Card Frame */
//     ctaCard: {
//       position: "relative" ,
//       background: "linear-gradient(135deg, rgba(15, 12, 28, 0.6) 0%, rgba(10, 16, 26, 0.6) 100%)",
//       border: "1px solid rgba(255, 255, 255, 0.05)",
//       borderRadius: "32px",
//       padding: "80px 40px",
//       textAlign: "center" ,
//       overflow: "hidden",
//       marginBottom: "80px",
//       backdropFilter: "blur(20px)",
//       WebkitBackdropFilter: "blur(20px)",
//     },
//     ctaLabel: {
//       fontSize: "12px",
//       fontWeight: 700,
//       color: "#22d3ee",
//       letterSpacing: "0.3em",
//       textTransform: "uppercase" ,
//       marginBottom: "20px",
//       display: "inline-flex",
//       alignItems: "center",
//       gap: "8px",
//     },
//     ctaTitle: {
//       fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//       fontWeight: 900,
//       letterSpacing: "-0.03em",
//       lineHeight: 1.1,
//       margin: "0 0 24px 0",
//       color: "#ffffff",
//     },
//     ctaSubtitle: {
//       fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
//       color: "#a1a1aa",
//       maxWidth: "620px",
//       margin: "0 auto 40px auto",
//       lineHeight: 1.6,
//       textBalance: "balance" ,
//     },
//     primaryBtn: {
//       padding: "18px 40px",
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       fontWeight: 700,
//       fontSize: "16px",
//       borderRadius: "14px",
//       border: "none",
//       cursor: "pointer",
//       display: "inline-flex",
//       alignItems: "center",
//       gap: "10px",
//       boxShadow: "0 20px 40px rgba(255, 255, 255, 0.08)",
//     },
//     /* Footer Elements Split Navigation */
//     footerGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//       gap: "48px",
//       paddingTop: "48px",
//       borderTop: "1px solid rgba(255, 255, 255, 0.04)",
//       marginBottom: "64px",
//     },
//     brandColumn: {
//       display: "flex",
//       flexDirection: "column" ,
//       gap: "16px",
//       textAlign: "left" ,
//     },
//     brandLogo: {
//       fontSize: "24px",
//       fontWeight: 900,
//       letterSpacing: "0.15em",
//       color: "#ffffff",
//       margin: 0,
//     },
//     brandDesc: {
//       fontSize: "14px",
//       color: "#71717a",
//       lineHeight: 1.5,
//       margin: 0,
//       maxWidth: "280px",
//     },
//     linkHeader: {
//       fontSize: "12px",
//       fontWeight: 700,
//       color: "#52525b",
//       textTransform: "uppercase" ,
//       letterSpacing: "0.1em",
//       marginBottom: "20px",
//       textAlign: "left" ,
//     },
//     linkList: {
//       listStyle: "none",
//       padding: 0,
//       margin: 0,
//       display: "flex",
//       flexDirection: "column" ,
//       gap: "12px",
//       textAlign: "left" ,
//     },
//     footerLink: {
//       fontSize: "14px",
//       color: "#a1a1aa",
//       textDecoration: "none",
//       transition: "color 0.2s ease",
//     },
//     /* Lower Copyright Banner */
//     bottomBanner: {
//       display: "flex",
//       flexWrap: "wrap" ,
//       justifyContent: "space-between",
//       alignItems: "center",
//       gap: "20px",
//       fontSize: "13px",
//       color: "#52525b",
//       borderTop: "1px solid rgba(255, 255, 255, 0.02)",
//       paddingTop: "32px",
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section style={styles.section}>
//       {/* Immersive background lighting accents inside the canvas */}
//       <div style={{
//         position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
//         width: "800px", height: "400px", background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", pointerEvents: "none"
//       }} />

//       <style dangerouslySetInnerHTML={{__html: `
//         .footer-interactive-link:hover { color: #ffffff !important; }
//         .social-icon-btn:hover { color: #ffffff !important; background-color: rgba(255,255,255,0.05) !important; }
//       `}} />

//       <div style={styles.container}>
        
//         {/* CLOSING HERO CTA BOX */}
//         <div style={styles.ctaCard}>
//           {/* Subtle grid accent inside the card layout */}
//           <div style={{
//             position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
//             backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
//             backgroundSize: "3rem 3rem", maskImage: "radial-gradient(circle, #000, transparent)"
//           }} />

//           <div style={styles.ctaLabel}>
//             <Sparkles size={14} />
//             <span>Year 1 Applications are Live</span>
//           </div>

//           <h2 style={styles.ctaTitle}>Got an Idea?<br />Let’s SOLVE It.</h2>
          
//           <p style={styles.ctaSubtitle}>
//             Bring your pitch deck and your 3-minute video to our global evaluation arena. No mentorship clutter. No logistical complications. Just absolute impact.
//           </p>

//           <motion.button 
//             whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.25)" }}
//             whileTap={{ scale: 0.98 }}
//             style={styles.primaryBtn}
//           >
//             Submit Your Pitch
//             <ArrowRight size={18} />
//           </motion.button>
//         </div>

//         {/* CORE PLATFORM FOOTER */}
//         <footer style={styles.footerGrid}>
          
//           {/* Column 1: Brand Ecosystem */}
//           <div style={styles.brandColumn}>
//             <h3 style={styles.brandLogo}>SOLVE</h3>
//             <p style={styles.brandDesc}>
//               A global youth competition where students pitch innovative tech and social impact ideas to address real-world challenges.
//             </p>
            
//             {/* Social Interplay Matrix */}
//             <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
//               <a href="#" className="social-icon-btn" style={{ padding: "10px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.02)", color: "#a1a1aa", display: "inline-flex", transition: "all 0.2s" }}>
//                 <Linkedin size={18} />
//               </a>
//               <a href="#" className="social-icon-btn" style={{ padding: "10px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.02)", color: "#a1a1aa", display: "inline-flex", transition: "all 0.2s" }}>
//                 <Instagram size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Structural Verticals */}
//           <div>
//             <h4 style={styles.linkHeader}>Competition Tracks</h4>
//             <ul style={styles.linkList}>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Tech Innovation</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Social Impact Vertical</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Eligibility Metrics</a></li>
//             </ul>
//           </div>

//           {/* Column 3: Submission Resources */}
//           <div>
//             <h4 style={styles.linkHeader}>Deliverables</h4>
//             <ul style={styles.linkList}>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Pitch Deck Blueprint</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Video Guidelines</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Judging Criteria</a></li>
//             </ul>
//           </div>

//           {/* Column 4: Long Term Vision */}
//           <div>
//             <h4 style={styles.linkHeader}>Future Vision</h4>
//             <ul style={styles.linkList}>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Year 2 Incubator</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Startup Fellowships</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>School Partnerships</a></li>
//             </ul>
//           </div>

//         </footer>

//         {/* BOTTOM COPYRIGHT BANNER */}
//         <div style={styles.bottomBanner}>
//           <span>&copy; 2026 SOLVE Challenge. All rights reserved.</span>
          
//           <button 
//             onClick={scrollToTop}
//             style={{
//               backgroundColor: "transparent", border: "none", color: "#71717a", cursor: "pointer",
//               display: "flex", alignItems: "center", gap: "6px", fontSize: "13px"
//             }}
//             className="footer-interactive-link"
//           >
//             Back to Top <ArrowUp size={14} />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles, Send, Linkedin, Instagram, ArrowUp } from "lucide-react";

// export default function SolveFooterCTA({ onOpenRegister }) {
//   const styles = {
//     section: {
//       position: "relative" ,
//       width: "100%",
//       backgroundColor: "#050507",
//       color: "#ffffff",
//       padding: "120px 24px 40px 24px",
//       overflow: "hidden",
//       fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
//     },
//     container: {
//       maxWidth: "1140px",
//       margin: "0 auto",
//       position: "relative",
//       zIndex: 5,
//     },
//     /* Master Convergent CTA Card Frame */
//     ctaCard: {
//       position: "relative" ,
//       background: "linear-gradient(135deg, rgba(15, 12, 28, 0.6) 0%, rgba(10, 16, 26, 0.6) 100%)",
//       border: "1px solid rgba(255, 255, 255, 0.05)",
//       borderRadius: "32px",
//       padding: "80px 40px",
//       textAlign: "center" ,
//       overflow: "hidden",
//       marginBottom: "80px",
//       backdropFilter: "blur(20px)",
//       WebkitBackdropFilter: "blur(20px)",
//     },
//     ctaLabel: {
//       fontSize: "12px",
//       fontWeight: 700,
//       color: "#22d3ee",
//       letterSpacing: "0.3em",
//       textTransform: "uppercase" ,
//       marginBottom: "20px",
//       display: "inline-flex",
//       alignItems: "center",
//       gap: "8px",
//     },
//     ctaTitle: {
//       fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//       fontWeight: 900,
//       letterSpacing: "-0.03em",
//       lineHeight: 1.1,
//       margin: "0 0 24px 0",
//       color: "#ffffff",
//     },
//     ctaSubtitle: {
//       fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
//       color: "#a1a1aa",
//       maxWidth: "620px",
//       margin: "0 auto 40px auto",
//       lineHeight: 1.6,
//       textBalance: "balance" ,
//     },
//     primaryBtn: {
//       padding: "18px 40px",
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       fontWeight: 700,
//       fontSize: "16px",
//       borderRadius: "14px",
//       border: "none",
//       cursor: "pointer",
//       display: "inline-flex",
//       alignItems: "center",
//       gap: "10px",
//       boxShadow: "0 20px 40px rgba(255, 255, 255, 0.08)",
//     },
//     /* Footer Elements Split Navigation */
//     footerGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//       gap: "48px",
//       paddingTop: "48px",
//       borderTop: "1px solid rgba(255, 255, 255, 0.04)",
//       marginBottom: "64px",
//     },
//     brandColumn: {
//       display: "flex",
//       flexDirection: "column" ,
//       gap: "16px",
//       textAlign: "left" ,
//     },
//     brandLogo: {
//       fontSize: "24px",
//       fontWeight: 900,
//       letterSpacing: "0.15em",
//       color: "#ffffff",
//       margin: 0,
//     },
//     brandDesc: {
//       fontSize: "14px",
//       color: "#71717a",
//       lineHeight: 1.5,
//       margin: 0,
//       maxWidth: "280px",
//     },
//     linkHeader: {
//       fontSize: "12px",
//       fontWeight: 700,
//       color: "#52525b",
//       textTransform: "uppercase" ,
//       letterSpacing: "0.1em",
//       marginBottom: "20px",
//       textAlign: "left" ,
//     },
//     linkList: {
//       listStyle: "none",
//       padding: 0,
//       margin: 0,
//       display: "flex",
//       flexDirection: "column" ,
//       gap: "12px",
//       textAlign: "left" ,
//     },
//     footerLink: {
//       fontSize: "14px",
//       color: "#a1a1aa",
//       textDecoration: "none",
//       transition: "color 0.2s ease",
//     },
//     /* Lower Copyright Banner */
//     bottomBanner: {
//       display: "flex",
//       flexWrap: "wrap" ,
//       justifyContent: "space-between",
//       alignItems: "center",
//       gap: "20px",
//       fontSize: "13px",
//       color: "#52525b",
//       borderTop: "1px solid rgba(255, 255, 255, 0.02)",
//       paddingTop: "32px",
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section style={styles.section}>
//       {/* Immersive background lighting accents inside the canvas */}
//       <div style={{
//         position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
//         width: "800px", height: "400px", background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", pointerEvents: "none"
//       }} />

//       <style dangerouslySetInnerHTML={{__html: `
//         .footer-interactive-link:hover { color: #ffffff !important; }
//         .social-icon-btn:hover { color: #ffffff !important; background-color: rgba(255,255,255,0.05) !important; }
//       `}} />

//       <div style={styles.container}>
        
//         {/* CLOSING HERO CTA BOX */}
//         <div style={styles.ctaCard}>
//           {/* Subtle grid accent inside the card layout */}
//           <div style={{
//             position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
//             backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
//             backgroundSize: "3rem 3rem", maskImage: "radial-gradient(circle, #000, transparent)"
//           }} />

//           <div style={styles.ctaLabel}>
//             <Sparkles size={14} />
//             <span>Applications are Live</span>
//           </div>

//           <h2 style={styles.ctaTitle}>Got an Idea?<br />Let’s SOLVE It.</h2>
          
//           <p style={styles.ctaSubtitle}>
//             Bring your pitch deck and your 1-minute video to our global evaluation arena. No mentorship clutter. No logistical complications. Just absolute impact.
//           </p>

//           {/* 🚀 Connected onOpenRegister trigger to card action button */}
//           <motion.button 
//             whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.25)" }}
//             whileTap={{ scale: 0.98 }}
//             onClick={onOpenRegister}
//             style={styles.primaryBtn}
//           >
//             Submit Your Pitch
//             <ArrowRight size={18} />
//           </motion.button>
//         </div>

//         {/* CORE PLATFORM FOOTER */}
//         <footer style={styles.footerGrid}>
          
//           {/* Column 1: Brand Ecosystem */}
//           <div style={styles.brandColumn}>
//             <h3 style={styles.brandLogo}>SOLVE</h3>
//             <p style={styles.brandDesc}>
//               A global youth competition where students pitch innovative tech and social impact ideas to address real-world challenges.
//             </p>
            
//             {/* Social Interplay Matrix */}
//             {/* <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
//               <a href="#" className="social-icon-btn" style={{ padding: "10px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.02)", color: "#a1a1aa", display: "inline-flex", transition: "all 0.2s" }}>
//                 <Linkedin size={18} />
//               </a>
//               <a href="#" className="social-icon-btn" style={{ padding: "10px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.02)", color: "#a1a1aa", display: "inline-flex", transition: "all 0.2s" }}>
//                 <Instagram size={18} />
//               </a>
//             </div> */}
//           </div>

//           {/* Column 2: Structural Verticals */}
//           {/* <div>
//             <h4 style={styles.linkHeader}>Competition Tracks</h4>
//             <ul style={styles.linkList}>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Tech Innovation</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Social Impact Vertical</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Eligibility Metrics</a></li>
//             </ul>
//           </div> */}

//           {/* Column 3: Submission Resources */}
//           {/* <div>
//             <h4 style={styles.linkHeader}>Deliverables</h4>
//             <ul style={styles.linkList}>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Pitch Deck Blueprint</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Video Guidelines</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Judging Criteria</a></li>
//             </ul>
//           </div> */}

//           {/* Column 4: Long Term Vision */}
//           {/* <div>
//             <h4 style={styles.linkHeader}>Future Vision</h4>
//             <ul style={styles.linkList}>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Year 2 Incubator</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>Startup Fellowships</a></li>
//               <li><a href="#" className="footer-interactive-link" style={styles.footerLink}>School Partnerships</a></li>
//             </ul>
//           </div> */}

//         </footer>

//         {/* BOTTOM COPYRIGHT BANNER */}
//         <div style={styles.bottomBanner}>
//           <span>&copy; 2026 SOLVE Challenge. All rights reserved.</span>
          
//           <button 
//             onClick={scrollToTop}
//             style={{
//               backgroundColor: "transparent", border: "none", color: "#71717a", cursor: "pointer",
//               display: "flex", alignItems: "center", gap: "6px", fontSize: "13px"
//             }}
//             className="footer-interactive-link"
//           >
//             Back to Top <ArrowUp size={14} />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, ArrowUp } from "lucide-react";

export default function SolveFooterCTA({ onOpenRegister }) {
  const styles = {
    section: {
      position: "relative" ,
      width: "100%",
      backgroundColor: "#050507",
      color: "#ffffff",
      padding: "120px 24px 40px 24px",
      overflow: "hidden",
      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    },
    container: {
      maxWidth: "1140px",
      margin: "0 auto",
      position: "relative",
      zIndex: 5,
    },
    /* Master Convergent CTA Card Frame */
    ctaCard: {
      position: "relative" ,
      background: "linear-gradient(135deg, rgba(15, 12, 28, 0.6) 0%, rgba(10, 16, 26, 0.6) 100%)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: "32px",
      padding: "80px 40px",
      textAlign: "center" ,
      overflow: "hidden",
      marginBottom: "80px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    },
    ctaLabel: {
      fontSize: "12px",
      fontWeight: 700,
      color: "#c5a059", // Gold secondary brand accent
      letterSpacing: "0.3em",
      textTransform: "uppercase" ,
      marginBottom: "20px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    },
    ctaTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
      margin: "0 0 24px 0",
      color: "#ffffff",
    },
    ctaSubtitle: {
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
      color: "#a1a1aa",
      maxWidth: "620px",
      margin: "0 auto 40px auto",
      lineHeight: 1.6,
      textBalance: "balance" ,
    },
    primaryBtn: {
      padding: "18px 40px",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontWeight: 700,
      fontSize: "16px",
      borderRadius: "14px",
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.08)",
    },
    /* Clean Footer Grid Layout */
    footerGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      paddingTop: "48px",
      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      marginBottom: "64px",
    },
    footerFlexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      alignItems: "flex-start",
      textAlign: "left",
    },
    brandHeadline: {
      fontSize: "20px",
      fontWeight: 800,
      letterSpacing: "0.02em",
      color: "#ffffff",
      margin: 0,
    },
    brandPartner: {
      color: "#c5a059", // Subtle gold highlights for the platform owner
      fontWeight: 600,
    },
    brandDesc: {
      fontSize: "14px",
      color: "#71717a",
      lineHeight: 1.6,
      margin: 0,
      maxWidth: "520px",
    },
    contactWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "8px",
    },
    contactLabel: {
      fontSize: "13px",
      fontWeight: 700,
      color: "#52525b",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    contactLink: {
      fontSize: "14.5px",
      fontWeight: 600,
      color: "#e4e4e7",
      textDecoration: "none",
      transition: "color 0.2s ease",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    /* Lower Copyright Banner */
    bottomBanner: {
      display: "flex",
      flexWrap: "wrap" ,
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      fontSize: "13px",
      color: "#52525b",
      borderTop: "1px solid rgba(255, 255, 255, 0.02)",
      paddingTop: "32px",
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section style={styles.section}>
      {/* Immersive background lighting accents inside the canvas */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "400px", background: "radial-gradient(circle, rgba(197,160,89,0.04) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      <style dangerouslySetInnerHTML={{__html: `
        .footer-mail-trigger:hover { color: #c5a059 !important; }
        .footer-top-trigger:hover { color: #ffffff !important; }
      `}} />

      <div style={styles.container}>
        
        {/* CLOSING HERO CTA BOX */}
        <div style={styles.ctaCard}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "3rem 3rem", maskImage: "radial-gradient(circle, #000, transparent)"
          }} />

          <div style={styles.ctaLabel}>
            <Sparkles size={14} />
            <span>Applications are Live</span>
          </div>

          <h2 style={styles.ctaTitle}>Got an Idea?<br />Let’s SOLVE It.</h2>
          
          <p style={styles.ctaSubtitle}>
            Bring your pitch deck and your 3-minute video to our global evaluation arena. No mentorship clutter. No logistical complications. Just absolute impact.
          </p>

          <motion.button 
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(197, 160, 89, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            style={styles.primaryBtn}
          >
            Submit Your Pitch
            <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* CORE PLATFORM FOOTER */}
        <footer style={styles.footerGrid}>
          <div style={styles.footerFlexWrapper}>
            {/* Branded Identity Statement */}
            <h3 style={styles.brandHeadline}>
              SOLVE Competition <span style={styles.brandPartner}>by Career Discovery</span>
            </h3>
            
            <p style={styles.brandDesc}>
              A global youth initiative empowering students to pitch innovative technology and social impact ideas to address real-world global challenges.
            </p>

            {/* Official Support Desk Contact Node */}
            <div style={styles.contactWrapper}>
              <span style={styles.contactLabel}>Contact Us:</span>
              <a 
                href="mailto:thecareerdiscovery@gmail.com" 
                className="footer-mail-trigger" 
                style={styles.contactLink}
              >
                <Mail size={15} style={{ marginTop: "1px" }} />
                thecareerdiscovery@gmail.com
              </a>
            </div>
          </div>
        </footer>

        {/* BOTTOM COPYRIGHT BANNER */}
        <div style={styles.bottomBanner}>
          <span>&copy; 2026 The Career Discovery. All rights reserved.</span>
          
          <button 
            onClick={scrollToTop}
            style={{
              backgroundColor: "transparent", border: "none", color: "#71717a", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "6px", fontSize: "13px"
            }}
            className="footer-top-trigger"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}