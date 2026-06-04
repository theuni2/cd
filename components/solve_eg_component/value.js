"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, HelpCircle, Compass, CheckCircle2 } from "lucide-react";

export default function SolveValueProp() {
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
      zIndex: 5,
    },
    headerBox: {
      textAlign: "center" ,
      marginBottom: "80px",
    },
    labelTag: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#f472b6",
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
      maxWidth: "580px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "32px",
    },
    card: {
      backgroundColor: "rgba(12, 12, 17, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.03)",
      borderRadius: "20px",
      padding: "40px 32px",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      transition: "all 0.4s ease",
    },
    iconBox: {
      width: "44px",
      height: "44px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "24px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
    },
    cardTitle: {
      fontSize: "19px",
      fontWeight: 700,
      margin: "0 0 12px 0",
      color: "#ffffff",
    },
    cardText: {
      fontSize: "14.5px",
      color: "#a1a1aa",
      lineHeight: 1.6,
      margin: 0,
    }
  };

  const coreStrengths = [
    {
      title: "Tech Meets Purpose",
      desc: "We don't isolate software from reality. SOLVE bridges the gap by letting you pitch hard engineering ideas designed specifically to build social good.",
      icon: <Zap size={20} color="#c084fc" />,
      bg: "rgba(168, 85, 247, 0.05)",
    },
    // {
    //   title: "Radically Accessible",
    //   desc: "Skip the exhausting multiday hackathon logistics or mandatory advanced technical build limits. Bring your strategy, your deck, and your passion.",
    //   icon: <Target size={20} color="#22d3ee" />,
    //   bg: "rgba(6, 182, 212, 0.05)",
    // },
    {
      title: "Built for Beginners",
      desc: "No previous startup experience required. Whether you are launching a simple awareness campaign or a future tech app, this space is built for your early validation.",
      icon: <Compass size={20} color="#f472b6" />,
      bg: "rgba(244, 114, 182, 0.05)",
    },
    {
      title: "Global Collaboration",
      desc: "Open to both individual creators and collaborative teams of 2–5 students. Shape your ideas locally, connect with global judges, and build early brand trust.",
      icon: <CheckCircle2 size={20} color="#34d399" />,
      bg: "rgba(52, 211, 153, 0.05)",
    },
  ];

  return (
    <section style={styles.section}>
      {/* Background radial gradient glow overlay */}
      <div style={{
        position: "absolute", top: "40%", left: "-10%", width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(244,114,182,0.04) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      <style dangerouslySetInnerHTML={{__html: `
        .prop-card:hover {
          border-color: rgba(255,255,255,0.08) !important;
          background-color: rgba(20, 20, 25, 0.5) !important;
          transform: translateY(-4px);
        }
      `}} />

      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerBox}>
          <span style={styles.labelTag}>The SOLVE Advantage</span>
          <h2 style={styles.mainTitle}>Designed Differently.</h2>
          <p style={styles.subtitle}>
            Unlike massive, high-friction competitions, we focus purely on amplifying your core ideas, giving you visibility without structural complexity.
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <div style={styles.grid}>
          {coreStrengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="prop-card"
              style={styles.card}
            >
              <div style={{ ...styles.iconBox, backgroundColor: item.bg }}>
                {item.icon}
              </div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}