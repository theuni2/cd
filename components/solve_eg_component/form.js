// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { User, Users, Code, Heart, Link, Layers, Send, CheckCircle } from "lucide-react";

// export default function SolveRegistrationForm() {
//   // Form step management: 1 = General & Team Info, 2 = Pitch Submission, 3 = Success Screen
//   const [step, setStep] = useState(1);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Form State Data
//   // Form State Data (Fixed for pure JavaScript)
// const [teamType, setTeamType] = useState("individual");
// const [fullName, setFullName] = useState("");
// const [email, setEmail] = useState("");
// const [teamSize, setTeamSize] = useState("2");
// const [selectedTrack, setSelectedTrack] = useState("");
// const [projectTitle, setProjectTitle] = useState("");
// const [deckLink, setDeckLink] = useState("");
// const [videoLink, setVideoLink] = useState("");

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (step === 1) {
//       setStep(2);
//     } else {
//       // 🚀 Connect to your Next.js Pages Router API
//       try {
//         const response = await fetch('/api/submit-pitch', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             teamType,
//             fullName,
//             email,
//             teamSize: teamType === "team" ? teamSize : "1",
//             selectedTrack,
//             projectTitle,
//             deckLink,
//             videoLink
//           }), 
//         });

//         if (response.ok) {
//           setIsSubmitted(true);
//           setStep(3);
//         } else {
//           console.error("Server failed to send the email.");
//           alert("Something went wrong on our end. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         alert("An error occurred. Please check your connection and try again.");
//       }
//     }
//   };
//   const styles = {
//     section: {
//       position: "relative" ,
//       width: "100%",
//       backgroundColor: "#050507",
//       color: "#ffffff",
//       padding: "80px 24px",
//       overflow: "hidden",
//       fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
//     },
//     container: {
//       maxWidth: "580px", // Form focused container width
//       margin: "0 auto",
//       position: "relative" ,
//       zIndex: 10,
//     },
//     formCard: {
//       backgroundColor: "rgba(12, 12, 17, 0.6)",
//       border: "1px solid rgba(255, 255, 255, 0.05)",
//       borderRadius: "28px",
//       padding: "40px",
//       backdropFilter: "blur(24px)",
//       WebkitBackdropFilter: "blur(24px)",
//       boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
//     },
//     stepIndicator: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "32px",
//     },
//     stepPill: {
//       fontSize: "11px",
//       fontWeight: 700,
//       textTransform: "uppercase" ,
//       letterSpacing: "0.15em",
//       color: "#71717a",
//     },
//     label: {
//       display: "block",
//       fontSize: "14px",
//       fontWeight: 600,
//       color: "#e4e4e7",
//       marginBottom: "10px",
//     },
//     inputGroup: {
//       marginBottom: "24px",
//     },
//     textInput: {
//       width: "100%",
//       backgroundColor: "rgba(255, 255, 255, 0.02)",
//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       borderRadius: "12px",
//       padding: "14px 16px",
//       color: "#ffffff",
//       fontSize: "15px",
//       outline: "none",
//       transition: "all 0.3s ease",
//       boxSizing: "border-box" ,
//     },
//     toggleGrid: {
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       gap: "16px",
//       marginBottom: "24px",
//     },
//     toggleBox: {
//       padding: "16px",
//       borderRadius: "14px",
//       border: "1px solid rgba(255, 255, 255, 0.05)",
//       backgroundColor: "rgba(255, 255, 255, 0.01)",
//       cursor: "pointer",
//       display: "flex",
//       flexDirection: "column" ,
//       alignItems: "center",
//       gap: "8px",
//       transition: "all 0.3s ease",
//     },
//     primaryBtn: {
//       width: "100%",
//       padding: "16px",
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       fontWeight: 700,
//       fontSize: "15px",
//       borderRadius: "12px",
//       border: "none",
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "8px",
//       boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
//       marginTop: "12px",
//     },
//     secondaryBtn: {
//       backgroundColor: "transparent",
//       border: "none",
//       color: "#a1a1aa",
//       fontSize: "14px",
//       cursor: "pointer",
//       marginTop: "16px",
//       display: "block",
//       width: "100%",
//       textAlign: "center" ,
//     }
//   };

//   return (
//     <section style={styles.section} id="register">
//       {/* Background radial ambient glow spots */}
//       <div style={{
//         position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
//         width: "500px", height: "500px", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none"
//       }} />

//       {/* Global CSS Injectors for pseudo focus states */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .solve-input:focus {
//           border-color: rgba(255,255,255,0.2) !important;
//           background-color: rgba(255,255,255,0.04) !important;
//           box-shadow: 0 0 15px rgba(255,255,255,0.03);
//         }
//       `}} />

//       <div style={styles.container}>
//         <div style={styles.formCard}>
          
//           <AnimatePresence mode="wait">
//             {/* STEP 1: GENERAL & TEAM CONFIGURATION */}
//             {step === 1 && (
//               <motion.form
//                 key="step1"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 onSubmit={handleSubmit}
//               >
//                 <div style={styles.stepIndicator}>
//                   <span style={styles.stepPill}>01 / Profile Setup</span>
//                   <span style={{ ...styles.stepPill, color: "#a78bfa" }}>Next: Submission</span>
//                 </div>

//                 <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 8px 0" }}>Register for SOLVE</h3>
//                 <p style={{ fontSize: "14px", color: "#a1a1aa", margin: "0 0 32px 0", lineHeight: 1.5 }}>
//                   Secure your entry path. Set up your tracking profile as an individual builder or as a collaborative team.
//                 </p>

//                 {/* Team Type Toggle Selector */}
//                 <div style={styles.inputGroup}>
//                   <label style={styles.label}>Participation Dynamic</label>
//                   <div style={styles.toggleGrid}>
//                     <div 
//                       style={{
//                         ...styles.toggleBox,
//                         borderColor: teamType === "individual" ? "#ffffff" : "rgba(255,255,255,0.05)",
//                         backgroundColor: teamType === "individual" ? "rgba(255,255,255,0.03)" : "transparent"
//                       }}
//                       onClick={() => setTeamType("individual")}
//                     >
//                       <User size={18} color={teamType === "individual" ? "#ffffff" : "#71717a"} />
//                       <span style={{ fontSize: "14px", fontWeight: 600, color: teamType === "individual" ? "#ffffff" : "#a1a1aa" }}>Solo Founder</span>
//                     </div>
//                     <div 
//                       style={{
//                         ...styles.toggleBox,
//                         borderColor: teamType === "team" ? "#ffffff" : "rgba(255,255,255,0.05)",
//                         backgroundColor: teamType === "team" ? "rgba(255,255,255,0.03)" : "transparent"
//                       }}
//                       onClick={() => setTeamType("team")}
//                     >
//                       <Users size={18} color={teamType === "team" ? "#ffffff" : "#71717a"} />
//                       <span style={{ fontSize: "14px", fontWeight: 600, color: teamType === "team" ? "#ffffff" : "#a1a1aa" }}>Team (2–5 members)</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Leader Full Name */}
//                 <div style={styles.inputGroup}>
//                   <label style={styles.label}>{teamType === "individual" ? "Full Name" : "Team Leader Name"}</label>
//                   <input 
//                     type="text" required placeholder="e.g. John Doe" className="solve-input"
//                     style={styles.textInput} value={fullName} onChange={(e) => setFullName(e.target.value)}
//                   />
//                 </div>

//                 {/* Contact Email */}
//                 <div style={styles.inputGroup}>
//                   <label style={styles.label}>Primary Contact Email</label>
//                   <input 
//                     type="email" required placeholder="name@school.com" className="solve-input"
//                     style={styles.textInput} value={email} onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>

//                 {/* Conditional rendering for Team sizing matrix */}
//                 {teamType === "team" && (
//                   <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} style={styles.inputGroup}>
//                     <label style={styles.label}>Total Team Size (including Leader)</label>
//                     <select 
//                       style={styles.textInput} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}
//                     >
//                       <option value="2" style={{ backgroundColor: "#0c0c11" }}>2 Students</option>
//                       <option value="3" style={{ backgroundColor: "#0c0c11" }}>3 Students</option>
//                       <option value="4" style={{ backgroundColor: "#0c0c11" }}>4 Students</option>
//                       <option value="5" style={{ backgroundColor: "#0c0c11" }}>5 Students</option>
//                     </select>
//                   </motion.div>
//                 )}

//                 <button type="submit" style={styles.primaryBtn}>
//                   Continue to Submission
//                 </button>
//               </motion.form>
//             )}

//             {/* STEP 2: PITCH STRATEGY & ASSET LINKS */}
//             {step === 2 && (
//               <motion.form
//                 key="step2"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 onSubmit={handleSubmit}
//               >
//                 <div style={styles.stepIndicator}>
//                   <span style={styles.stepPill}>02 / Submission Hub</span>
//                   <span style={{ ...styles.stepPill, color: "#34d399" }}>Ready to Submit</span>
//                 </div>

//                 <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 8px 0" }}>Project Verification</h3>
//                 <p style={{ fontSize: "14px", color: "#a1a1aa", margin: "0 0 32px 0", lineHeight: 1.5 }}>
//                   Link your presentation and media assets directly below. You can update these links anytime before the formal cutoff deadline.
//                 </p>

//                 {/* Track Selector Toggle Selection */}
//                 <div style={styles.inputGroup}>
//                   <label style={styles.label}>Target Competition Track</label>
//                   <div style={styles.toggleGrid}>
//                     <div 
//                       style={{
//                         ...styles.toggleBox,
//                         borderColor: selectedTrack === "tech" ? "#c084fc" : "rgba(255,255,255,0.05)",
//                         backgroundColor: selectedTrack === "tech" ? "rgba(168, 85, 247, 0.05)" : "transparent"
//                       }}
//                       onClick={() => setSelectedTrack("tech")}
//                     >
//                       <Code size={18} color={selectedTrack === "tech" ? "#c084fc" : "#71717a"} />
//                       <span style={{ fontSize: "14px", fontWeight: 600, color: selectedTrack === "tech" ? "#ffffff" : "#a1a1aa" }}>Tech Innovation</span>
//                     </div>
//                     <div 
//                       style={{
//                         ...styles.toggleBox,
//                         borderColor: selectedTrack === "social" ? "#22d3ee" : "rgba(255,255,255,0.05)",
//                         backgroundColor: selectedTrack === "social" ? "rgba(6, 182, 212, 0.05)" : "transparent"
//                       }}
//                       onClick={() => setSelectedTrack("social")}
//                     >
//                       <Heart size={18} color={selectedTrack === "social" ? "#22d3ee" : "#71717a"} />
//                       <span style={{ fontSize: "14px", fontWeight: 600, color: selectedTrack === "social" ? "#ffffff" : "#a1a1aa" }}>Social Impact</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Project/Idea Name */}
//                 <div style={styles.inputGroup}>
//                   <label style={styles.label}>Project Title / Idea Name</label>
//                   <input 
//                     type="text" required placeholder="e.g. CarbonCount Framework" className="solve-input"
//                     style={styles.textInput} value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
//                   />
//                 </div>

//                 {/* Pitch Deck Link */}
//                 <div style={styles.inputGroup}>
//                   <label style={styles.label}>Google Drive / Canva Pitch Deck URL (8-10 Slides)</label>
//                   <div style={{ position: "relative" }}>
//                     <Layers size={16} color="#52525b" style={{ position: "absolute", left: "14px", top: "16px" }} />
//                     <input 
//                       type="url" required placeholder="https://drive.google.com/..." className="solve-input"
//                       style={{ ...styles.textInput, paddingLeft: "42px" }} value={deckLink} onChange={(e) => setDeckLink(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* Video Pitch Link */}
//                 <div style={styles.inputGroup}>
//                   <label style={styles.label}>YouTube Video Pitch URL (2-3 Minutes)</label>
//                   <div style={{ position: "relative" }}>
//                     <Link size={16} color="#52525b" style={{ position: "absolute", left: "14px", top: "16px" }} />
//                     <input 
//                       type="url" required placeholder="https://youtube.com/watch?v=..." className="solve-input"
//                       style={{ ...styles.textInput, paddingLeft: "42px" }} value={videoLink} onChange={(e) => setVideoLink(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 <button type="submit" style={{ ...styles.primaryBtn, backgroundColor: "#ffffff", color: "#000000" }}>
//                   <Send size={16} /> Complete Registration
//                 </button>

//                 <button type="button" onClick={() => setStep(1)} style={styles.secondaryBtn}>
//                   Back to Profile Setup
//                 </button>
//               </motion.form>
//             )}

//             {/* STEP 3: SUCCESS CONGRATULATIONS PANEL */}
//             {step === 3 && isSubmitted && (
//               <motion.div
//                 key="step3"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 style={{ textAlign: "center", padding: "20px 0" }}
//               >
//                 <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(52, 211, 153, 0.1)", display: "flex", alignItems: "center", justifyindex: "center", justifyContent: "center", margin: "0 auto 24px auto", color: "#34d399", border: "1px solid rgba(52, 211, 153, 0.2)" }}>
//                   <CheckCircle size={32} />
//                 </div>
                
//                 <h3 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 12px 0" }}>Pitch Received.</h3>
//                 <p style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: 1.6, margin: "0 0 32px 0" }}>
//                   Thank you, <span style={{ color: "#ffffff", fontWeight: 600 }}>{fullName}</span>. Your project entry <span style={{ color: "#ffffff", fontWeight: 600 }}>{projectTitle || "SOLVE Project"}</span> has been indexed successfully into our database ecosystem.
//                 </p>

//                 <div style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.08)", borderRadius: "16px", padding: "20px", fontSize: "13.5px", color: "#71717a", textAlign: "left", lineHeight: 1.5 }}>
//                   <strong>Next Phase Steps:</strong> A confirmation receipt and submission tracker link have been routed to <span style={{ color: "#d4d4d8" }}>{email}</span>. You can modify your deck files and pitch asset links anytime via that dashboard before evaluating rounds commence.
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, Code, Heart, Link, Video, Send, CheckCircle, ArrowLeft } from "lucide-react";

export default function SolveRegistrationForm() {
  // Form step management: 1 = Profile Setup, 2 = Pitch Submission, 3 = Success Screen
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State Data
  const [teamType, setTeamType] = useState("individual");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [teamSize, setTeamSize] = useState("2");
  const [selectedTrack, setSelectedTrack] = useState("tech");
  const [projectTitle, setProjectTitle] = useState("");
  const [deckLink, setDeckLink] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      try {
        const response = await fetch('/api/submit-pitch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            teamType,
            fullName,
            email,
            teamSize: teamType === "team" ? teamSize : "1",
            selectedTrack,
            projectTitle,
            deckLink,
            videoLink
          }), 
        });

        if (response.ok) {
          setIsSubmitted(true);
          setStep(3);
        } else {
          console.error("Server failed to save application.");
          alert("Something went wrong on our end. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please check your connection and try again.");
      }
    }
  };

  const styles = {
    section: {
      position: "relative",
      width: "100%",
      backgroundColor: "#050507",
      color: "#ffffff",
      padding: "80px 24px",
      overflow: "hidden",
      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
    },
    container: {
      width: "100%",
      maxWidth: "580px",
      margin: "0 auto",
      position: "relative",
      zIndex: 10,
    },
    formCard: {
      backgroundColor: "rgba(12, 12, 17, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: "28px",
      padding: "40px",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
      boxSizing: "border-box",
    },
    stepIndicator: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "32px",
    },
    stepPill: {
      fontSize: "11px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      color: "#71717a",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: 600,
      color: "#e4e4e7",
      marginBottom: "10px",
    },
    inputGroup: {
      marginBottom: "24px",
    },
    textInput: {
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "12px",
      padding: "14px 16px",
      color: "#ffffff",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    toggleGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginBottom: "4px",
    },
    toggleBox: {
      padding: "18px 16px",
      borderRadius: "14px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      backgroundColor: "rgba(255, 255, 255, 0.01)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    inputIconWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    inputWithIcon: {
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "12px",
      padding: "14px 16px 14px 44px",
      color: "#ffffff",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    inputIcon: {
      position: "absolute",
      left: "16px",
      color: "#71717a",
      pointerEvents: "none",
    },
    primaryBtn: {
      width: "100%",
      padding: "16px",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontWeight: 700,
      fontSize: "15px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 10px 25px rgba(255,255,255,0.05)",
      marginTop: "24px",
      transition: "all 0.2s ease",
    },
    secondaryBtn: {
      backgroundColor: "transparent",
      border: "none",
      color: "#a1a1aa",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer",
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      width: "100%",
      textAlign: "center",
      transition: "color 0.2s ease",
    }
  };

  return (
    <section style={styles.section} id="register">
      {/* Background ambient glow setup */}
      <div style={{
        position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -50%)",
        width: "600px", height: "600px", background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "30%", transform: "translate(-50%, -50%)",
        width: "500px", height: "500px", background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      {/* Global Pseudo-Selector Hacks via CSS injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .solve-input:focus {
          border-color: rgba(255,255,255,0.25) !important;
          background-color: rgba(255,255,255,0.04) !important;
          box-shadow: 0 0 20px rgba(255,255,255,0.02) !important;
        }
        .solve-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .back-btn:hover {
          color: #ffffff !important;
        }
      `}} />

      <div style={styles.container}>
        <div style={styles.formCard}>
          <AnimatePresence mode="wait">
            
            {/* STEP 1: GENERAL & TEAM CONFIGURATION */}
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onSubmit={handleSubmit}
              >
                <div style={styles.stepIndicator}>
                  <span style={{ ...styles.stepPill, color: "#ffffff" }}>01 / Profile Setup</span>
                  <span style={styles.stepPill}>Next: Submission</span>
                </div>

                <h3 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 8px 0", letterSpacing: "-0.02em" }}>Register for SOLVE</h3>
                <p style={{ fontSize: "14px", color: "#a1a1aa", margin: "0 0 32px 0", lineHeight: 1.6 }}>
                  Secure your project entry parameters. Select your dynamic framework as either an individual developer or an integrated assembly.
                </p>

                {/* Team Type Dynamics Choice */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Participation Dynamic</label>
                  <div style={styles.toggleGrid}>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: teamType === "individual" ? "#ffffff" : "rgba(255,255,255,0.06)",
                        backgroundColor: teamType === "individual" ? "rgba(255,255,255,0.03)" : "transparent"
                      }}
                      onClick={() => setTeamType("individual")}
                    >
                      <User size={20} color={teamType === "individual" ? "#ffffff" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: teamType === "individual" ? "#ffffff" : "#a1a1aa" }}>Solo Builder</span>
                    </div>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: teamType === "team" ? "#ffffff" : "rgba(255,255,255,0.06)",
                        backgroundColor: teamType === "team" ? "rgba(255,255,255,0.03)" : "transparent"
                      }}
                      onClick={() => setTeamType("team")}
                    >
                      <Users size={20} color={teamType === "team" ? "#ffffff" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: teamType === "team" ? "#ffffff" : "#a1a1aa" }}>Team Setup</span>
                    </div>
                  </div>
                </div>

                {/* Name Node */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>{teamType === "individual" ? "Full Name" : "Team Lead Identity"}</label>
                  <input 
                    type="text" required placeholder="e.g. Alex Rivera" className="solve-input"
                    style={styles.textInput} value={fullName} onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                {/* Email Routing Node */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Communication Routing Email</label>
                  <input 
                    type="email" required placeholder="alex@institution.edu" className="solve-input"
                    style={styles.textInput} value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Conditional Member Matrix Array dropdown */}
                {teamType === "team" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    style={styles.inputGroup}
                  >
                    <label style={styles.label}>Aggregate Dynamic Group Size (inc. Lead)</label>
                    <select 
                      style={styles.textInput} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="2" style={{ backgroundColor: "#0c0c11" }}>2 Structural Pillars</option>
                      <option value="3" style={{ backgroundColor: "#0c0c11" }}>3 Structural Pillars</option>
                      <option value="4" style={{ backgroundColor: "#0c0c11" }}>4 Structural Pillars</option>
                      <option value="5" style={{ backgroundColor: "#0c0c11" }}>5 Structural Pillars</option>
                    </select>
                  </motion.div>
                )}

                <button type="submit" className="solve-btn" style={styles.primaryBtn}>
                  Continue to Submission Hub
                </button>
              </motion.form>
            )}

            {/* STEP 2: PITCH STRATEGY & ASSET LINKS */}
            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onSubmit={handleSubmit}
              >
                <div style={styles.stepIndicator}>
                  <span style={styles.stepPill}>01 / Profile Setup</span>
                  <span style={{ ...styles.stepPill, color: "#ffffff" }}>02 / Submission Hub</span>
                </div>

                <h3 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 8px 0", letterSpacing: "-0.02em" }}>Project Verification</h3>
                <p style={{ fontSize: "14px", color: "#a1a1aa", margin: "0 0 32px 0", lineHeight: 1.6 }}>
                  Configure your primary execution vectors. You remain authorized to append these values until data freeze.
                </p>

                {/* Track Target Choice Matrix */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Target Competition Track</label>
                  <div style={styles.toggleGrid}>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: selectedTrack === "tech" ? "#c084fc" : "rgba(255,255,255,0.06)",
                        backgroundColor: selectedTrack === "tech" ? "rgba(168, 85, 247, 0.04)" : "transparent"
                      }}
                      onClick={() => setSelectedTrack("tech")}
                    >
                      <Code size={20} color={selectedTrack === "tech" ? "#c084fc" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: selectedTrack === "tech" ? "#ffffff" : "#a1a1aa" }}>Tech Innovation</span>
                    </div>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: selectedTrack === "social" ? "#22d3ee" : "rgba(255,255,255,0.06)",
                        backgroundColor: selectedTrack === "social" ? "rgba(6, 182, 212, 0.04)" : "transparent"
                      }}
                      onClick={() => setSelectedTrack("social")}
                    >
                      <Heart size={20} color={selectedTrack === "social" ? "#22d3ee" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: selectedTrack === "social" ? "#ffffff" : "#a1a1aa" }}>Social Impact</span>
                    </div>
                  </div>
                </div>

                {/* Project Title Entry Field */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Project System Title</label>
                  <input 
                    type="text" required placeholder="Project or Deployment naming structure" className="solve-input"
                    style={styles.textInput} value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
                  />
                </div>

                {/* Presentation Deck Vector Link Input */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Pitch Deck Workspace Endpoint URL</label>
                  <div style={styles.inputIconWrapper}>
                    <Link size={16} style={styles.inputIcon} />
                    <input 
                      type="url" required placeholder="https://canva.com/design/... or Google Slides" className="solve-input"
                      style={styles.inputWithIcon} value={deckLink} onChange={(e) => setDeckLink(e.target.value)}
                    />
                  </div>
                </div>

                {/* Pitch Video Demo Link Input */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Video Demostration Asset URL (Loom/YouTube)</label>
                  <div style={styles.inputIconWrapper}>
                    <Video size={16} style={styles.inputIcon} />
                    <input 
                      type="url" required placeholder="https://youtube.com/watch?v=... or Loom link" className="solve-input"
                      style={styles.inputWithIcon} value={videoLink} onChange={(e) => setVideoLink(e.target.value)}
                    />
                  </div>
                </div>

                {/* Action Trigger Elements Layout Container */}
                <button type="submit" className="solve-btn" style={styles.primaryBtn}>
                  <Send size={16} /> Complete Entry Submission
                </button>

                <button type="button" onClick={() => setStep(1)} className="back-btn" style={styles.secondaryBtn}>
                  <ArrowLeft size={14} /> Revert to Step 1 Form Parameters
                </button>
              </motion.form>
            )}

            {/* STEP 3: SUCCESS STATE NODE */}
            {step === 3 && isSubmitted && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.2)", marginBottom: "24px" }}>
                  <CheckCircle size={32} color="#34d399" />
                </div>
                
                <h3 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 12px 0", letterSpacing: "-0.02em" }}>Registration Confirmed</h3>
                <p style={{ fontSize: "15px", color: "#a1a1aa", margin: "0 0 32px 0", lineHeight: 1.6 }}>
                  Excellent! Your builder profile configurations and deployment links for <strong style={{ color: "#ffffff" }}>{projectTitle || "your project"}</strong> have been successfully processed and verified.
                </p>

                <div style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", textAlign: "left", marginBottom: "32px" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Submission Log Data Summary</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
                    <div><span style={{ color: "#71717a" }}>Operator Name:</span> <span style={{ color: "#e4e4e7", fontWeight: 500 }}>{fullName}</span></div>
                    <div><span style={{ color: "#71717a" }}>Assigned Vector Track:</span> <span style={{ color: selectedTrack === "tech" ? "#c084fc" : "#22d3ee", fontWeight: 600 }}>{selectedTrack === "tech" ? "Tech Innovation" : "Social Impact"}</span></div>
                    <div><span style={{ color: "#71717a" }}>Dynamic Setup Model:</span> <span style={{ color: "#e4e4e7", fontWeight: 500 }}>{teamType === "individual" ? "Solo Architecture" : `Team Cluster (${teamSize} Members)`}</span></div>
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "#71717a", margin: 0 }}>
                  A formal transactional receipt has been successfully routed to <span style={{ color: "#a1a1aa" }}>{email}</span>.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}