// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Hourglass, Cpu, Megaphone, Trophy } from "lucide-react";

// export default function SolveTimelineSection() {
//   // Ordered milestone data for the competition roadmap
//   const milestones = [
//     {
//       step: "01",
//       title: "Applications Open",
//       description: "Registration portal officially unlocks globally. Individual entrants and teams can secure their slots and select their core track.",
//       icon: <Calendar size={18} />,
//       accent: "#c084fc", // Tech purple
//     },
//     {
//       step: "02",
//       title: "Submission Deadline",
//       description: "Final cutoff window to submit your 8–10 slide Pitch Deck and your 2–3 minute YouTube video pitch via the dashboard portal.",
//       icon: <Hourglass size={18} />,
//       accent: "#f472b6", // Vibrant pink
//     },
//     {
//       step: "03",
//       title: "Judging Round",
//       description: "Our panel of expert judges evaluates submissions across the balanced 30/30/20/20 criteria metrics.",
//       icon: <Cpu size={18} />,
//       accent: "#3b82f6", // Electric blue
//     },
//     {
//       step: "04",
//       title: "Finalists Announcement",
//       description: "The top-tier scoring entries are announced publicly. High-impact winner portfolios are published across social channels.",
//       icon: <Megaphone size={18} />,
//       accent: "#22d3ee", // Cyan
//     },
//     {
//       step: "05",
//       title: "Virtual Finale & Awards",
//       description: "The global ecosystem converges for the online showcase. Winning teams secure their titles, credentials, and Year 1 network recognition.",
//       icon: <Trophy size={18} />,
//       accent: "#f59e0b", // Gold
//     },
//   ];

//   const styles = {
//     section: {
//       position: "relative" ,
//       width: "100%",
//       backgroundColor: "#050507",
//       color: "#ffffff",
//       padding: "120px 24px",
//       overflow: "hidden",
//       fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
//     },
//     container: {
//       maxWidth: "840px", // Snug container for a clean central timeline flow
//       margin: "0 auto",
//       position: "relative" ,
//       zIndex: 5,
//     },
//     headerBox: {
//       textAlign: "center" ,
//       marginBottom: "80px",
//     },
//     labelTag: {
//       fontSize: "11px",
//       fontWeight: 700,
//       color: "#a78bfa",
//       letterSpacing: "0.25em",
//       textTransform: "uppercase" ,
//       marginBottom: "12px",
//       display: "block",
//     },
//     mainTitle: {
//       fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
//       fontWeight: 800,
//       letterSpacing: "-0.02em",
//       margin: "0 0 16px 0",
//     },
//     subtitle: {
//       fontSize: "clamp(1rem, 2vw, 1.15rem)",
//       color: "#71717a",
//       maxWidth: "540px",
//       margin: "0 auto",
//       lineHeight: 1.6,
//     },
//     timelineWrapper: {
//       position: "relative" ,
//       paddingLeft: "48px", // Space allocated for the structural left track line
//     },
//     // The vertical line connecting all events
//     leftVerticalLine: {
//       position: "absolute" ,
//       top: "16px",
//       bottom: "16px",
//       left: "18px",
//       width: "2px",
//       background: "linear-gradient(to bottom, rgba(167, 139, 250, 0.4), rgba(34, 211, 238, 0.4), rgba(245, 158, 11, 0.1))",
//     },
//     eventNode: {
//       position: "relative" ,
//       marginBottom: "48px",
//       cursor: "pointer",
//     },
//     // The visual anchor icon dot on the line
//     bulletDot: {
//       position: "absolute" ,
//       left: "-48px",
//       top: "4px",
//       width: "38px",
//       height: "38px",
//       borderRadius: "50%",
//       backgroundColor: "#0c0c11",
//       border: "1px solid rgba(255,255,255,0.08)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       zIndex: 3,
//       transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
//     },
//     cardContent: {
//       backgroundColor: "rgba(12, 12, 17, 0.4)",
//       border: "1px solid rgba(255, 255, 255, 0.03)",
//       borderRadius: "20px",
//       padding: "28px 32px",
//       backdropFilter: "blur(12px)",
//       WebkitBackdropFilter: "blur(12px)",
//       transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
//     },
//     metaHeader: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "10px",
//     },
//     stepNumber: {
//       fontSize: "12px",
//       fontWeight: 800,
//       letterSpacing: "0.1em",
//       color: "#52525b",
//       transition: "color 0.3s ease, transform 0.3s ease",
//     },
//     nodeTitle: {
//       fontSize: "20px",
//       fontWeight: 700,
//       margin: 0,
//       color: "#ffffff",
//       transition: "color 0.3s ease",
//     },
//     nodeDescription: {
//       fontSize: "14.5px",
//       color: "#a1a1aa",
//       lineHeight: 1.6,
//       margin: 0,
//     },
//   };

//   return (
//     <section style={styles.section}>
//       {/* Structural ambient subtle top border glow */}
//       <div style={{
//         position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
//         background: "linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)"
//       }} />

//       {/* Inject custom global hover classes directly to avoid Tailwind requirements */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .timeline-block:hover .timeline-card {
//           border-color: rgba(255, 255, 255, 0.08) !important;
//           background-color: rgba(20, 20, 25, 0.6) !important;
//           transform: translateX(4px);
//         }
//         .timeline-block:hover .timeline-dot {
//           background-color: #ffffff !important;
//           color: #000000 !important;
//           box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
//         }
//         .timeline-block:hover .timeline-step {
//           transform: scale(1.1);
//         }
//       `}} />

//       <div style={styles.container}>
        
//         {/* Section Heading */}
//         <div style={styles.headerBox}>
//           <span style={styles.labelTag}>The Roadmap</span>
//           <h2 style={styles.mainTitle}>The Journey to Impact</h2>
//           <p style={styles.subtitle}>
//             A straightforward, no-nonsense schedule designed to keep execution sharp without logistical bloat.
//           </p>
//         </div>

//         {/* Timeline Component Layout */}
//         <div style={styles.timelineWrapper}>
          
//           {/* Static Background Connecting Line */}
//           <div style={styles.leftVerticalLine} />

//           {/* Map Sequence through milestones */}
//           {milestones.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//               className="timeline-block"
//               style={styles.eventNode}
//             >
//               {/* Left Indicator Bullet Dot */}
//               <div 
//                 className="timeline-dot" 
//                 style={{ ...styles.bulletDot, color: item.accent }}
//               >
//                 {item.icon}
//               </div>

//               {/* Core Information Card */}
//               <div className="timeline-card" style={styles.cardContent}>
//                 <div style={styles.metaHeader}>
//                   <h3 className="timeline-title" style={styles.nodeTitle}>
//                     {item.title}
//                   </h3>
//                   <span 
//                     className="timeline-step" 
//                     style={{ ...styles.stepNumber, color: item.accent }}
//                   >
//                     STAGE {item.step}
//                   </span>
//                 </div>
//                 <p style={styles.nodeDescription}>
//                   {item.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Hourglass, Cpu, Trophy, UserCheck } from "lucide-react";

export default function SolveTimelineSection() {
  // Ordered milestone data for the competition roadmap
  const milestones = [
    {
      step: "01",
      date: "Oct 1 – Nov 15, 2026",
      title: "Online Registration Portal",
      description: "Secure your spot online. Open globally to individual participants and collaborative team setups of 2–5 members aged 13–18 to select an industry vertical.",
      icon: <Calendar size={18} />,
      accent: "#c084fc", // Radiant Purple
    },
    {
      step: "02",
      date: "Prior to Dec 1, 2026",
      title: "Academic Teacher Endorsement",
      description: "Connect with an academic teacher or school coordinator. Provide their official school credentials to validate your project's authenticity and authorize your submission.",
      icon: <UserCheck size={18} />,
      accent: "#f472b6", // Bright Rose
    },
    {
      step: "03",
      date: "Dec 15, 2026 (Cutoff)",
      title: "Dossier Online Submission",
      description: "Submit your final 10-page Pitch Deck (PPT/PDF format) alongside a high-conviction 1-minute video pitch targeting your selected industry gap.",
      icon: <Hourglass size={18} />,
      accent: "#3b82f6", // Electric Blue
    },
    {
      step: "04",
      date: "Jan 15, 2027",
      title: "Triple-'I' Evaluation Review",
      description: "An expert panel of judges evaluates submissions against the core alliterative metrics: Innovation, Impact, and Implementation.",
      icon: <Cpu size={18} />,
      accent: "#22d3ee", // Vivid Cyan
    },
    {
      step: "05",
      date: "Feb 20, 2027",
      title: "Global Finale & Prize Awards",
      description: "The global ecosystem converges for the online virtual showcase. Top-tier innovators secure awards, funding incentives, and school network honors.",
      icon: <Trophy size={18} />,
      accent: "#f59e0b", // Warm Gold
    },
  ];

  const styles = {
    section: {
      position: "relative" ,
      width: "100%",
      backgroundColor: "#050507",
      color: "#ffffff",
      padding: "120px 24px",
      overflow: "hidden",
      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    },
    container: {
      maxWidth: "840px", // Snug container for a clean central timeline flow
      margin: "0 auto",
      position: "relative" ,
      zIndex: 5,
    },
    headerBox: {
      textAlign: "center" ,
      marginBottom: "80px",
    },
    labelTag: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#22d3ee",
      letterSpacing: "0.25em",
      textTransform: "uppercase" ,
      marginBottom: "12px",
      display: "block",
    },
    mainTitle: {
      fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      margin: "0 0 16px 0",
    },
    subtitle: {
      fontSize: "clamp(1rem, 2vw, 1.15rem)",
      color: "#71717a",
      maxWidth: "540px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    timelineWrapper: {
      position: "relative" ,
      paddingLeft: "48px", // Space allocated for the structural left track line
    },
    // The vertical line connecting all events
    leftVerticalLine: {
      position: "absolute" ,
      top: "16px",
      bottom: "16px",
      left: "18px",
      width: "2px",
      background: "linear-gradient(to bottom, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.4), rgba(245, 158, 11, 0.1))",
    },
    eventNode: {
      position: "relative" ,
      marginBottom: "48px",
      cursor: "pointer",
    },
    // The visual anchor icon dot on the line
    bulletDot: {
      position: "absolute" ,
      left: "-48px",
      top: "4px",
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      backgroundColor: "#0c0c11",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
    },
    cardContent: {
      backgroundColor: "rgba(12, 12, 17, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.03)",
      borderRadius: "20px",
      padding: "28px 32px",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
    },
    metaHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    stepNumber: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.1em",
      color: "#52525b",
      transition: "color 0.3s ease, transform 0.3s ease",
    },
    nodeTitle: {
      fontSize: "20px",
      fontWeight: 700,
      margin: 0,
      color: "#ffffff",
      transition: "color 0.3s ease",
    },
    dateTag: {
      fontSize: "13px",
      fontWeight: 600,
      color: "#a1a1aa",
      marginBottom: "8px",
      display: "block",
    },
    nodeDescription: {
      fontSize: "14.5px",
      color: "#71717a",
      lineHeight: 1.6,
      margin: 0,
    },
  };

  return (
    <section style={styles.section}>
      {/* Structural ambient subtle top border glow */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)"
      }} />

      {/* Inject custom global class tags to avoid Tailwind compilation delays */}
      <style dangerouslySetInnerHTML={{__html: `
        .timeline-block:hover .timeline-card {
          border-color: rgba(34, 211, 238, 0.2) !important;
          background-color: rgba(20, 20, 25, 0.6) !important;
          transform: translateX(4px);
        }
        .timeline-block:hover .timeline-dot {
          background-color: #ffffff !important;
          color: #000000 !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
        }
        .timeline-block:hover .timeline-step {
          transform: scale(1.1);
        }
        .timeline-block:hover .timeline-title {
          color: #22d3ee !important;
        }
      `}} />

      <div style={styles.container}>
        
        {/* Section Heading */}
        <div style={styles.headerBox}>
          <span style={styles.labelTag}>The Roadmap</span>
          <h2 style={styles.mainTitle}>The Journey to Impact</h2>
          <p style={styles.subtitle}>
            A structured operational schedule designed to optimize team alignment, academic validation, and milestone submission.
          </p>
        </div>

        {/* Timeline Component Layout */}
        <div style={styles.timelineWrapper}>
          
          {/* Static Background Connecting Line */}
          <div style={styles.leftVerticalLine} />

          {/* Map Sequence through milestones */}
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="timeline-block"
              style={styles.eventNode}
            >
              {/* Left Indicator Bullet Dot */}
              <div 
                className="timeline-dot" 
                style={{ ...styles.bulletDot, color: item.accent }}
              >
                {item.icon}
              </div>

              {/* Core Information Card */}
              <div className="timeline-card" style={styles.cardContent}>
                <div style={styles.metaHeader}>
                  <h3 className="timeline-title" style={styles.nodeTitle}>
                    {item.title}
                  </h3>
                  <span 
                    className="timeline-step" 
                    style={{ ...styles.stepNumber, color: item.accent }}
                  >
                    STAGE {item.step}
                  </span>
                </div>
                
                {/* Specific Phase Date Indicator */}
                <span style={{ ...styles.dateTag, color: item.accent }}>
                  {item.date}
                </span>

                <p style={styles.nodeDescription}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}