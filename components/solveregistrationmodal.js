"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, Code, Heart, Link, Layers, Send, CheckCircle, X } from "lucide-react";

export default function SolveRegistrationModal({ isOpen, onClose }) {
  // Form step management: 1 = Profile Info, 2 = Pitch Links, 3 = Success View
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State Data
  const [teamType, setTeamType] = useState("individual");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [teamSize, setTeamSize] = useState("2");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [deckLink, setDeckLink] = useState("");
  const [videoLink, setVideoLink] = useState("");

  // Tracking API Loading Indicator states
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSubmitting(true);
      
      try {
        // Connected directly to your Next.js Pages Router Endpoint configuration
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
          console.error("Server execution loop failed to fire Nodemailer transits.");
          alert("Something went wrong on our end. Please try again.");
        }
      } catch (error) {
        console.error("Network connectivity crash executing pipeline:", error);
        alert("An error occurred. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Helper reset function when shutting modal window frames
  const handleCloseWrapper = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(5, 5, 7, 0.85)", // Premium deep onyx backdrop
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      padding: "20px",
    },
    modalContainer: {
      position: "relative",
      maxWidth: "580px",
      width: "100%",
      maxHeight: "90vh",
      overflowY: "auto",
      backgroundColor: "rgba(12, 12, 17, 0.95)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "28px",
      boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
    },
    closeButton: {
      position: "absolute",
      top: "24px",
      right: "24px",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      color: "#71717a",
      transition: "color 0.2s ease",
      zIndex: 10,
    },
    formBody: {
      padding: "40px",
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
      marginBottom: "24px",
    },
    toggleBox: {
      padding: "16px",
      borderRadius: "14px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      backgroundColor: "rgba(255, 255, 255, 0.01)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      transition: "all 0.3s ease",
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
      cursor: isSubmitting ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
      marginTop: "12px",
      opacity: isSubmitting ? 0.6 : 1,
    },
    secondaryBtn: {
      backgroundColor: "transparent",
      border: "none",
      color: "#a1a1aa",
      fontSize: "14px",
      cursor: "pointer",
      marginTop: "16px",
      display: "block",
      width: "100%",
      textAlign: "center",
    }
  };

  return (
    <div style={styles.overlay}>
      {/* Global CSS Injectors for focus state glow transitions */}
      <style dangerouslySetInnerHTML={{__html: `
        .solve-modal-input:focus {
          border-color: rgba(255,255,255,0.2) !important;
          background-color: rgba(255,255,255,0.04) !important;
          box-shadow: 0 0 15px rgba(255,255,255,0.03);
        }
        .solve-close-trigger:hover { color: #ffffff !important; }
      `}} />

      {/* MODAL FRAME LAYOUT CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={styles.modalContainer}
      >
        {/* Top Floating Exit Button */}
        <button 
          onClick={handleCloseWrapper} 
          className="solve-close-trigger"
          style={styles.closeButton}
        >
          <X size={20} />
        </button>

        <div style={styles.formBody}>
          <AnimatePresence mode="wait">
            
            {/* STEP 1: PERSONAL & TEAM PROFILING */}
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
              >
                <div style={styles.stepIndicator}>
                  <span style={styles.stepPill}>01 / Profile Setup</span>
                  <span style={{ ...styles.stepPill, color: "#a78bfa" }}>Next: Submission</span>
                </div>

                <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 8px 0", color: "#ffffff" }}>Register for SOLVE</h3>
                <p style={{ fontSize: "14px", color: "#a1a1aa", margin: "0 0 32px 0", lineHeight: 1.5 }}>
                  Secure your entry path. Set up your tracking profile as an individual builder or as a collaborative team.
                </p>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Participation Dynamic</label>
                  <div style={styles.toggleGrid}>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: teamType === "individual" ? "#ffffff" : "rgba(255,255,255,0.05)",
                        backgroundColor: teamType === "individual" ? "rgba(255,255,255,0.03)" : "transparent"
                      }}
                      onClick={() => setTeamType("individual")}
                    >
                      <User size={18} color={teamType === "individual" ? "#ffffff" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: teamType === "individual" ? "#ffffff" : "#a1a1aa" }}>Solo Founder</span>
                    </div>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: teamType === "team" ? "#ffffff" : "rgba(255,255,255,0.05)",
                        backgroundColor: teamType === "team" ? "rgba(255,255,255,0.03)" : "transparent"
                      }}
                      onClick={() => setTeamType("team")}
                    >
                      <Users size={18} color={teamType === "team" ? "#ffffff" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: teamType === "team" ? "#ffffff" : "#a1a1aa" }}>Team (2–5 members)</span>
                    </div>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>{teamType === "individual" ? "Full Name" : "Team Leader Name"}</label>
                  <input 
                    type="text" required placeholder="e.g. John Doe" className="solve-modal-input"
                    style={styles.textInput} value={fullName} onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Primary Contact Email</label>
                  <input 
                    type="email" required placeholder="name@school.com" className="solve-modal-input"
                    style={styles.textInput} value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {teamType === "team" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} style={styles.inputGroup}>
                    <label style={styles.label}>Total Team Size (including Leader)</label>
                    <select 
                      style={styles.textInput} value={teamSize} onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="2" style={{ backgroundColor: "#0c0c11" }}>2 Students</option>
                      <option value="3" style={{ backgroundColor: "#0c0c11" }}>3 Students</option>
                      <option value="4" style={{ backgroundColor: "#0c0c11" }}>4 Students</option>
                      <option value="5" style={{ backgroundColor: "#0c0c11" }}>5 Students</option>
                    </select>
                  </motion.div>
                )}

                <button type="submit" style={styles.primaryBtn}>
                  Continue to Submission
                </button>
              </motion.form>
            )}

            {/* STEP 2: PITCH STRATEGY DELIVERABLES LINKS */}
            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
              >
                <div style={styles.stepIndicator}>
                  <span style={styles.stepPill}>02 / Submission Hub</span>
                  <span style={{ ...styles.stepPill, color: "#34d399" }}>Ready to Submit</span>
                </div>

                <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 8px 0", color: "#ffffff" }}>Project Verification</h3>
                <p style={{ fontSize: "14px", color: "#a1a1aa", margin: "0 0 32px 0", lineHeight: 1.5 }}>
                  Link your presentation and media assets directly below. You can update these links anytime before the formal cutoff deadline.
                </p>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Target Competition Track</label>
                  <div style={styles.toggleGrid}>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: selectedTrack === "tech" ? "#c084fc" : "rgba(255,255,255,0.05)",
                        backgroundColor: selectedTrack === "tech" ? "rgba(168, 85, 247, 0.05)" : "transparent"
                      }}
                      onClick={() => setSelectedTrack("tech")}
                    >
                      <Code size={18} color={selectedTrack === "tech" ? "#c084fc" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: selectedTrack === "tech" ? "#ffffff" : "#a1a1aa" }}>Tech Innovation</span>
                    </div>
                    <div 
                      style={{
                        ...styles.toggleBox,
                        borderColor: selectedTrack === "social" ? "#22d3ee" : "rgba(255,255,255,0.05)",
                        backgroundColor: selectedTrack === "social" ? "rgba(6, 182, 212, 0.05)" : "transparent"
                      }}
                      onClick={() => setSelectedTrack("social")}
                    >
                      <Heart size={18} color={selectedTrack === "social" ? "#22d3ee" : "#71717a"} />
                      <span style={{ fontSize: "14px", fontWeight: 600, color: selectedTrack === "social" ? "#ffffff" : "#a1a1aa" }}>Social Impact</span>
                    </div>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Project Title / Idea Name</label>
                  <input 
                    type="text" required placeholder="e.g. CarbonCount Framework" className="solve-modal-input"
                    style={styles.textInput} value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Google Drive / Canva Pitch Deck URL (8-10 Slides)</label>
                  <div style={{ position: "relative" }}>
                    <Layers size={16} color="#52525b" style={{ position: "absolute", left: "14px", top: "16px" }} />
                    <input 
                      type="url" required placeholder="https://drive.google.com/..." className="solve-modal-input"
                      style={{ ...styles.textInput, paddingLeft: "42px" }} value={deckLink} onChange={(e) => setDeckLink(e.target.value)}
                    />
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>YouTube Video Pitch URL (2-3 Minutes)</label>
                  <div style={{ position: "relative" }}>
                    <Link size={16} color="#52525b" style={{ position: "absolute", left: "14px", top: "16px" }} />
                    <input 
                      type="url" required placeholder="https://youtube.com/watch?v=..." className="solve-modal-input"
                      style={{ ...styles.textInput, paddingLeft: "42px" }} value={videoLink} onChange={(e) => setVideoLink(e.target.value)}
                    />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} style={styles.primaryBtn}>
                  <Send size={16} /> {isSubmitting ? "Processing Content..." : "Complete Registration"}
                </button>

                <button type="button" onClick={() => setStep(1)} style={styles.secondaryBtn}>
                  Back to Profile Setup
                </button>
              </motion.form>
            )}

            {/* STEP 3: SUCCESS FEEDBACK MODULE */}
            {step === 3 && isSubmitted && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(52, 211, 153, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px auto", color: "#34d399", border: "1px solid rgba(52, 211, 153, 0.2)" }}>
                  <CheckCircle size={32} />
                </div>
                
                <h3 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 12px 0", color: "#ffffff" }}>Pitch Received.</h3>
                <p style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: 1.6, margin: "0 0 32px 0" }}>
                  Thank you, <span style={{ color: "#ffffff", fontWeight: 600 }}>{fullName}</span>. Your project entry <span style={{ color: "#ffffff", fontWeight: 600 }}>{projectTitle || "SOLVE Project"}</span> has been indexed successfully into our database ecosystem.
                </p>

                <div style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.08)", borderRadius: "16px", padding: "20px", fontSize: "13.5px", color: "#71717a", textAlign: "left", lineHeight: 1.5, marginBottom: "24px" }}>
                  <strong>Next Steps:</strong> A confirmation alert receipt has been routed to <span style={{ color: "#d4d4d8" }}>{email}</span>. You can modify your deck assets and video pitch links anytime before evaluation processes initialize.
                </div>

                <button onClick={handleCloseWrapper} style={{ ...styles.primaryBtn, marginTop: 0 }}>
                  Close Window
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}