"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Heart, Layers, Video, ShieldCheck } from "lucide-react";

export default function SolveTracksWithImages() {
  const cardFadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.12, duration: 0.7, ease: "easeOut" }
    })
  };

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
      maxWidth: "1140px",
      margin: "0 auto",
      position: "relative" ,
      zIndex: 2,
    },
    sectionHeader: {
      textAlign: "center" ,
      marginBottom: "80px",
    },
    sectionLabel: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#c084fc",
      letterSpacing: "0.2em",
      textTransform: "uppercase" ,
      marginBottom: "12px",
      display: "block",
    },
    sectionTitle: {
      fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      margin: "0 0 16px 0",
      color: "#f4f4f5",
    },
    sectionSubtitle: {
      fontSize: "clamp(1rem, 2vw, 1.15rem)",
      color: "#71717a",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    splitGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "48px",
      alignItems: "start",
    },
    columnTitle: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#a1a1aa",
      marginBottom: "28px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    /* Image Card Frame Wrapper */
    trackCard: {
      position: "relative" ,
      backgroundColor: "rgba(12, 12, 17, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.04)",
      borderRadius: "24px",
      overflow: "hidden",
      marginBottom: "32px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      cursor: "pointer",
    },
    /* Hidden image wrapper box to contain zoom effect */
    imageContainer: {
      position: "relative" ,
      width: "100%",
      height: "220px",
      overflow: "hidden",
      backgroundColor: "#18181b",
    },
    cardImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover" ,
      transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), filter 0.5s ease",
    },
    imageOverlay: {
      position: "absolute" ,
      inset: 0,
      background: "linear-gradient(to bottom, transparent 30%, #0c0c11 100%)",
    },
    cardContent: {
      padding: "32px",
    },
    iconBadge: {
      position: "absolute" ,
      top: "24px",
      right: "24px",
      padding: "12px",
      borderRadius: "14px",
      zIndex: 5,
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: 700,
      margin: "0 0 10px 0",
      color: "#ffffff",
    },
    cardDescription: {
      fontSize: "14.5px",
      color: "#a1a1aa",
      lineHeight: 1.6,
      margin: 0,
    },
    tagContainer: {
      display: "flex",
      flexWrap: "wrap" ,
      gap: "8px",
      marginTop: "24px",
    },
    pillTag: {
      fontSize: "12px",
      fontWeight: 500,
      padding: "5px 14px",
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      color: "#d4d4d8",
    },
    requirementRow: {
      display: "flex",
      gap: "16px",
      padding: "18px 0",
      borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
    },
    requirementText: {
      fontSize: "14px",
      lineHeight: 1.5,
      color: "#d4d4d8",
      margin: 0,
    }
  };

  return (
    <section style={styles.section}>
      {/* Dynamic Keyframe Injection for the Img Zoom & Subtle Pan Effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .solve-img-card:hover .solve-zoom-img {
          transform: scale(1.08) translateY(-4px);
          filter: brightness(1.1) contrast(1.05);
        }
        .solve-img-card:hover {
          border-color: rgba(255, 255, 255, 0.12) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
      `}} />

      <div style={styles.container}>
        
        {/* Section Heading */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionLabel}>The Blueprints</span>
          <h2 style={styles.sectionTitle}>Choose Your Track. Pitch Your Vision.</h2>
          <p style={styles.sectionSubtitle}>
            Pick one vertical that aligns with your skillset and submit your concept using our streamlined standard metrics.
          </p>
        </div>

        {/* Two-Column Structured Split */}
        <div style={styles.splitGrid}>
          
          {/* COLUMN 1: TRACKS WITH ANIMATED IMAGES */}
          <div>
            <h3 style={styles.columnTitle}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#c084fc" }} />
              Vertical Selection
            </h3>

            {/* Track 1: Tech Innovation */}
            <motion.div
              custom={1}
              variants={cardFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="solve-img-card"
              style={styles.trackCard}
            >
              <div style={styles.imageContainer}>
                {/* Premium Abstract Tech Image from Unsplash */}
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
                  alt="Tech Innovation Vertical"
                  className="solve-zoom-img"
                  style={styles.cardImage}
                />
                <div style={styles.imageOverlay} />
                <div style={{ ...styles.iconBadge, backgroundColor: "rgba(147, 51, 234, 0.15)", color: "#c084fc", border: "1px solid rgba(147, 51, 234, 0.3)" }}>
                  <Code size={18} />
                </div>
              </div>

              <div style={styles.cardContent}>
                <h4 style={styles.cardTitle}>Tech Innovation</h4>
                <p style={styles.cardDescription}>
                  Deploy applications, integrate tailored machine learning setups, engineer high-tier STEM configurations, or design systems meant to scale into real startups.
                </p>
                <div style={styles.tagContainer}>
                  <span style={styles.pillTag}>AI Agents</span>
                  <span style={styles.pillTag}>Software & Apps</span>
                  <span style={styles.pillTag}>Future Tech</span>
                </div>
              </div>
            </motion.div>

            {/* Track 2: Social Impact */}
            <motion.div
              custom={2}
              variants={cardFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="solve-img-card"
              style={styles.trackCard}
            >
              <div style={styles.imageContainer}>
                {/* Premium Nature/Humanitarian Gradient Fluid Image from Unsplash */}
                <img 
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop" 
                  alt="Social Impact Vertical"
                  className="solve-zoom-img"
                  style={styles.cardImage}
                />
                <div style={styles.imageOverlay} />
                <div style={{ ...styles.iconBadge, backgroundColor: "rgba(6, 182, 212, 0.15)", color: "#22d3ee", border: "1px solid rgba(6, 182, 212, 0.3)" }}>
                  <Heart size={18} />
                </div>
              </div>

              <div style={styles.cardContent}>
                <h4 style={styles.cardTitle}>Social Impact</h4>
                <p style={styles.cardDescription}>
                  Initiate localized grassroots campaigns, direct community-based outreach systems, or develop sustainability configurations tackling ecological and economic struggles.
                </p>
                <div style={styles.tagContainer}>
                  <span style={styles.pillTag}>Sustainability</span>
                  <span style={styles.pillTag}>Community Advocacy</span>
                  <span style={styles.pillTag}>NGO Ideas</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: DELIVERABLES */}
          <div>
            <h3 style={styles.columnTitle}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22d3ee" }} />
              Dossier Deliverables
            </h3>

            {/* Deliverable 1: Pitch Deck */}
            <motion.div
              custom={3}
              variants={cardFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ ...styles.trackCard, backgroundColor: "rgba(15, 15, 22, 0.45)" }}
            >
              <div style={{ padding: "32px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px" }}>
                  <div style={{ padding: "12px", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", color: "#ffffff" }}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 style={{ ...styles.cardTitle, fontSize: "19px", margin: 0 }}>1. Pitch Deck (PPT)</h4>
                    <span style={{ fontSize: "12px", color: "#71717a", fontWeight: 500 }}>8 to 10 Slides Maximum</span>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px" }}>
                  <div style={styles.requirementRow}>
                    <ShieldCheck size={16} color="#c084fc" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <p style={styles.requirementText}><strong>Core Frameworks:</strong> Showcase the direct Problem space, your unique Solution, and precisely specify why it matters.</p>
                  </div>
                  <div style={styles.requirementRow}>
                    <ShieldCheck size={16} color="#c084fc" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <p style={styles.requirementText}><strong>Expansion Plan:</strong> Lay out detailed metrics concerning Innovation, verifiable Impact, and your long-term Future Vision.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Deliverable 2: YouTube Video */}
            <motion.div
              custom={4}
              variants={cardFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ ...styles.trackCard, backgroundColor: "rgba(15, 15, 22, 0.45)" }}
            >
              <div style={{ padding: "32px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px" }}>
                  <div style={{ padding: "12px", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", color: "#ffffff" }}>
                    <Video size={20} />
                  </div>
                  <div>
                    <h4 style={{ ...styles.cardTitle, fontSize: "19px", margin: 0 }}>2. YouTube Pitch Video</h4>
                    <span style={{ fontSize: "12px", color: "#71717a", fontWeight: 500 }}>2 to 3 Minutes Limit</span>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px" }}>
                  <div style={styles.requirementRow}>
                    <ShieldCheck size={16} color="#22d3ee" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <p style={styles.requirementText}><strong>Versatile Production:</strong> Use whatever format suits you—an interactive recorded slide deck presentation, a standard founder camera pitch, or a functional showcase/prototype demo video.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}