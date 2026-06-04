"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, CheckCircle2, Award, Sparkles, Flame, ShieldAlert } from "lucide-react";

export default function SolveCriteriaSection() {
  // Interactive state tracking for the dynamic simulation matrix
  const [innovation, setInnovation] = useState(80);
  const [impact, setImpact] = useState(85);
  const [feasibility, setFeasibility] = useState(75);
  const [presentation, setPresentation] = useState(90);

  // Core programmatic evaluation algorithm (Weights: 30%, 30%, 20%, 20%)
  const calculatedScore = (
    (innovation * 0.3) + 
    (impact * 0.3) + 
    (feasibility * 0.2) + 
    (presentation * 0.2)
  ).toFixed(1);

  const getScoreTier = (score) => {
    if (score >= 85) return { text: "Elite Tier Pitch", color: "#22d3ee" };
    if (score >= 70) return { text: "Highly Competitive", color: "#a78bfa" };
    return { text: "Baseline Standard", color: "#a1a1aa" };
  };

  const currentTier = getScoreTier(parseFloat(calculatedScore));

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
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    dashboardLayout: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      gap: "48px",
      alignItems: "stretch",
    },
    panelCard: {
      backgroundColor: "rgba(12, 12, 17, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.04)",
      borderRadius: "24px",
      padding: "40px 32px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column" ,
      justifyContent: "space-between",
    },
    criteriaRow: {
      marginBottom: "32px",
    },
    criteriaMeta: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "10px",
    },
    criteriaName: {
      fontSize: "18px",
      fontWeight: 700,
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    weightBadge: {
      fontSize: "12px",
      fontWeight: 700,
      color: "#22d3ee",
      backgroundColor: "rgba(6, 182, 212, 0.08)",
      padding: "2px 10px",
      borderRadius: "6px",
      border: "1px solid rgba(6, 182, 212, 0.15)",
    },
    progressTrack: {
      width: "100%",
      height: "6px",
      backgroundColor: "rgba(255,255,255,0.03)",
      borderRadius: "99px",
      overflow: "hidden",
    },
    interactiveRow: {
      marginBottom: "24px",
    },
    inputLabel: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "13px",
      color: "#a1a1aa",
      marginBottom: "8px",
      fontWeight: 500,
    },
    sliderElement: {
      width: "100%",
      WebkitAppearance: "none" ,
      appearance: "none" ,
      height: "6px",
      borderRadius: "99px",
      background: "rgba(255,255,255,0.08)",
      outline: "none",
      cursor: "pointer",
    },
    scoreWindow: {
      backgroundColor: "rgba(255,255,255,0.01)",
      border: "1px dashed rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "24px",
      textAlign: "center" ,
      marginTop: "auto",
    },
  };

  return (
    <section style={styles.section}>
      {/* Structural ambient light orb behind the calculation layout */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px", background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 80%)", pointerEvents: "none"
      }} />

      {/* Embedded style variables to manage custom slider rendering across generic platforms */}
      <style dangerouslySetInnerHTML={{__html: `
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 10px rgba(255,255,255,0.5);
          cursor: pointer;
          transition: transform 0.1s ease;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}} />

      <div style={styles.container}>
        
        {/* Module Header */}
        <div style={styles.headerBox}>
          <span style={styles.labelTag}>Evaluation Rubric</span>
          <h2 style={styles.mainTitle}>Transparent Metrics. Simple Rules.</h2>
          <p style={styles.subtitle}>
            Every submission is analyzed objectively based on four balanced parameters. No over-complicated modern operations needed.
          </p>
        </div>

        {/* Dynamic Split Dashboard Panel Layout */}
        <div style={styles.dashboardLayout}>
          
          {/* PANEL 1: OFFICIAL METRIC DETAILS */}
          <div style={styles.panelCard}>
            <div>
              {/* Criterion 1 */}
              <div style={styles.criteriaRow}>
                <div style={styles.criteriaMeta}>
                  <span style={styles.criteriaName}>
                    <Sparkles size={18} color="#c084fc" /> Innovation
                  </span>
                  <span style={styles.weightBadge}>30% Weight</span>
                </div>
                <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.5, margin: "0 0 12px 0" }}>
                  Is the idea original, creative, or presenting a fundamentally fresh iteration of existing concepts within the ecosystem?
                </p>
                <div style={styles.progressTrack}>
                  <div style={{ width: "30%", height: "100%", background: "linear-gradient(to right, #a78bfa, #c084fc)" }} />
                </div>
              </div>

              {/* Criterion 2 */}
              <div style={styles.criteriaRow}>
                <div style={styles.criteriaMeta}>
                  <span style={styles.criteriaName}>
                    <Award size={18} color="#22d3ee" /> Social or Tech Impact
                  </span>
                  <span style={styles.weightBadge}>30% Weight</span>
                </div>
                <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.5, margin: "0 0 12px 0" }}>
                  Does the pitch solve a real, verifiable pain point? How deep is the potential transformational value of the idea?
                </p>
                <div style={styles.progressTrack}>
                  <div style={{ width: "30%", height: "100%", background: "linear-gradient(to right, #06b6d4, #22d3ee)" }} />
                </div>
              </div>

              {/* Criterion 3 */}
              <div style={styles.criteriaRow}>
                <div style={styles.criteriaMeta}>
                  <span style={styles.criteriaName}>
                    <Sliders size={18} color="#f472b6" /> Feasibility
                  </span>
                  <span style={{ ...styles.weightBadge, color: "#f472b6", backgroundColor: "rgba(244,114,182,0.06)", borderColor: "rgba(244,114,182,0.15)" }}>20% Weight</span>
                </div>
                <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.5, margin: "0 0 12px 0" }}>
                  Is the business model and architectural execution strategy grounded? Can this team realistically deploy the future vision?
                </p>
                <div style={styles.progressTrack}>
                  <div style={{ width: "20%", height: "100%", backgroundColor: "#f472b6" }} />
                </div>
              </div>

              {/* Criterion 4 */}
              <div style={{ ...styles.criteriaRow, marginBottom: 0 }}>
                <div style={styles.criteriaMeta}>
                  <span style={styles.criteriaName}>
                    <CheckCircle2 size={18} color="#34d399" /> Presentation
                  </span>
                  <span style={{ ...styles.weightBadge, color: "#34d399", backgroundColor: "rgba(52,211,153,0.06)", borderColor: "rgba(52,211,153,0.15)" }}>20% Weight</span>
                </div>
                <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.5, margin: "0 0 12px 0" }}>
                  Clarity of transmission within the 8-10 slides and the engagement quality displayed inside the 3-minute video presentation.
                </p>
                <div style={styles.progressTrack}>
                  <div style={{ width: "20%", height: "100%", backgroundColor: "#34d399" }} />
                </div>
              </div>
            </div>
          </div>

          {/* PANEL 2: SIMULATION ENGINE FOR STUDENTS */}
          <div style={{ ...styles.panelCard, border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(18, 18, 24, 0.45)" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }}>
                <Flame size={18} color="#f59e0b" /> Score Simulator
              </h3>
              <p style={{ fontSize: "13.5px", color: "#a1a1aa", lineHeight: 1.5, margin: "0 0 32px 0" }}>
                Slide the parameters to model how your pitch will be scored by judges using the calculation algorithm.
              </p>

              {/* Input 1 */}
              <div style={styles.interactiveRow}>
                <div style={styles.inputLabel}>
                  <span>Innovation Matrix Score</span>
                  <span style={{ color: "#ffffff", fontWeight: 600 }}>{innovation}/100</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={innovation}
                  onChange={(e) => setInnovation(parseInt(e.target.value))}
                  style={styles.sliderElement}
                />
              </div>

              {/* Input 2 */}
              <div style={styles.interactiveRow}>
                <div style={styles.inputLabel}>
                  <span>Impact Metrics Matrix</span>
                  <span style={{ color: "#ffffff", fontWeight: 600 }}>{impact}/100</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={impact}
                  onChange={(e) => setImpact(parseInt(e.target.value))}
                  style={styles.sliderElement}
                />
              </div>

              {/* Input 3 */}
              <div style={styles.interactiveRow}>
                <div style={styles.inputLabel}>
                  <span>Structural Feasibility</span>
                  <span style={{ color: "#ffffff", fontWeight: 600 }}>{feasibility}/100</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={feasibility}
                  onChange={(e) => setFeasibility(parseInt(e.target.value))}
                  style={styles.sliderElement}
                />
              </div>

              {/* Input 4 */}
              <div style={styles.interactiveRow}>
                <div style={styles.inputLabel}>
                  <span>Presentation & Deck Clarity</span>
                  <span style={{ color: "#ffffff", fontWeight: 600 }}>{presentation}/100</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={presentation}
                  onChange={(e) => setPresentation(parseInt(e.target.value))}
                  style={styles.sliderElement}
                />
              </div>
            </div>

            {/* REAL TIME SCORE MATRIX OUTCOME */}
            <div style={styles.scoreWindow}>
              <p style={{ fontSize: "11px", color: "#52525b", uppercase: "true", tracking: "0.15em", margin: "0 0 4px 0", textTransform: "uppercase" }}>Estimated Composite Score</p>
              <h4 style={{ fontSize: "48px", fontWeight: 900, color: "#ffffff", margin: "0 0 4px 0", tracking: "-0.04em" }}>
                {calculatedScore} <span style={{ fontSize: "16px", color: "#52525b", fontWeight: 500 }}>/ 100</span>
              </h4>
              <p style={{ fontSize: "13px", fontWeight: 600, color: currentTier.color, margin: 0 }}>
                Status: {currentTier.text}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}