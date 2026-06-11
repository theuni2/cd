"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Presentation, AlertTriangle, Lightbulb, Target, Grid, Milestone, CheckCircle, Cpu, BarChart3, TrendingUp } from "lucide-react";

export default function SolveDeckBlueprint() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Complete slide-by-slide curriculum structure scaled exactly to 10 slides
  const blueprintData = [
    {
      id: 0,
      slideNum: "Slide 01",
      title: "Title & Team Introduction",
      icon: <Presentation size={18} />,
      objective: "Hook the judges immediately. Introduce your core team, school name, country, and state. State your project's high-level vision.",
      techExample: "Project Name: 'NeuroSync' — An AI-powered assistive communication interface for neurodivergent students.",
      socialExample: "Project Name: 'CarbonCount' — A hyper-local community distribution framework to reduce institutional carbon footprints."
    },
    {
      id: 1,
      slideNum: "Slide 02",
      title: "The Problem Space",
      icon: <AlertTriangle size={18} />,
      objective: "Clearly articulate the painful problem you want to solve. Highlight exactly who it impacts, its scope, and why it is critical to address now.",
      techExample: "Traditional automated support bots fail to understand contextual nuances in minority student admissions counseling.",
      socialExample: "Small-scale food vendors lack data transparency to optimize daily surplus food distribution, leading to massive local waste."
    },
    {
      id: 2,
      slideNum: "Slide 03",
      title: "The Core Solution",
      icon: <Lightbulb size={18} />,
      objective: "Present your unfair advantage or product concept in 2-3 sentences. Focus heavily on why your idea cuts through the noise.",
      techExample: "A contextual NLP-driven admission agent that links automated chat histories to direct human support networks automatically.",
      socialExample: "A lightweight WhatsApp automation bot mapping live food surplus inventories straight to nearby NGO food banks."
    },
    {
      id: 3,
      slideNum: "Slide 04",
      title: "Target Market (Noncustomers)",
      icon: <Target size={18} />,
      objective: "Show that your target market isn't a tiny niche. Map out the standard market tiers and reveal the audience segments ignored by current alternatives.",
      techExample: "Targeting first-generation college applicants who lack domestic family guidance counselors or professional mentoring networks.",
      socialExample: "Focusing on local independent restaurants and cloud kitchens skipped by major corporate logistics networks."
    },
    {
      id: 4,
      slideNum: "Slide 05",
      title: "Differentiated Strategy (ERRC)",
      icon: <Grid size={18} />,
      objective: "Define your differentiation layout. What industry factors are you eliminating or reducing below standard, and what are you raising or creating?",
      techExample: "Eliminated complex database setups. Created a no-code, drag-and-drop workflow dashboard using rapid n8n engines.",
      socialExample: "Eliminated heavy upfront logistics costs. Created a decentralized peer-to-peer neighborhood verification network."
    },
    {
      id: 5,
      slideNum: "Slide 06",
      title: "Technical Architecture / Operations",
      icon: <Cpu size={18} />,
      objective: "Explain how it actually works. Sketch out the user journey, data pathways, or physical distribution pipeline that makes your project functional.",
      techExample: "User triggers Telegram Bot ➔ n8n handles routing rules ➔ Vector database checks context ➔ Fast frontend renders answer UI.",
      socialExample: "Vendor logs daily surplus ➔ Bot alerts nearby verified NGOs ➔ Local volunteer matches route ➔ Drop-off confirmed via QR code."
    },
    {
      id: 6,
      slideNum: "Slide 07",
      title: "Measurable Impact Model",
      icon: <BarChart3 size={18} />,
      objective: "Prove the social or financial value. How does your solution simultaneously scale, lower traditional costs, and generate verifiable impact parameters?",
      techExample: "Reduces student response wait times by 80% while saving administrative counseling resources from repetitive queries.",
      socialExample: "Diverts 400kg of organic waste from local landfills weekly, translating to a measurable reduction in local carbon footprints."
    },
    {
      id: 7,
      slideNum: "Slide 08",
      title: "Current Milestones Achieved",
      icon: <Milestone size={18} />,
      objective: "Prove execution capability. Highlight any prototypes built, user discovery surveys done, landing pages launched, or early partners onboarded.",
      techExample: "Built a functional Next.js UI workflow wrapper and successfully processed 150 early digital test form submissions.",
      socialExample: "Onboarded 5 local kitchen businesses and successfully routed over 200 kilograms of surplus food to community centers."
    },
    {
      id: 8,
      slideNum: "Slide 09",
      title: "Future Scaling Roadmap",
      icon: <TrendingUp size={18} />,
      objective: "Map out the next 12 to 24 months. Explain your plan to scale operations from an early beginner phase into an established network infrastructure.",
      techExample: "Year 2: Pivot into providing an AI training platform API enabling multi-school deployment networks globally.",
      socialExample: "Year 2: Expand our localized neighborhood delivery framework into an open-source model for global city sustainability."
    },
    {
      id: 9,
      slideNum: "Slide 10",
      title: "Vision Summary & Wrap Up",
      icon: <CheckCircle size={18} />,
      objective: "Conclude your pitch with authority. Summarize your sustainable advantage, call your audience to action, and restate your ultimate vision statement.",
      techExample: "Empowering every student to safely navigate their academic future without resource or financial barriers. Join our ecosystem.",
      socialExample: "Turning institutional surplus into zero waste communities worldwide through frictionless, localized technology."
    }
  ];

  const styles = {
    section: {
      position: "relative",
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
      position: "relative",
      zIndex: 10,
    },
    headerBox: {
      textAlign: "center",
      marginBottom: "64px",
    },
    labelTag: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#c084fc",
      letterSpacing: "0.25em",
      textTransform: "uppercase",
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
    workspaceGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "40px",
      marginTop: "48px",
    },
    navList: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxHeight: "650px",
      overflowY: "auto",
      paddingRight: "8px",
    },
    navItemButton: {
      width: "100%",
      padding: "16px 18px",
      borderRadius: "14px",
      border: "1px solid rgba(255, 255, 255, 0.03)",
      textAlign: "left",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
    },
    displayCanvas: {
      gridColumn: "span 2",
      backgroundColor: "rgba(12, 12, 17, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.06)",
      borderRadius: "24px",
      padding: "40px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    exampleBox: {
      padding: "20px",
      borderRadius: "14px",
      border: "1px solid rgba(255, 255, 255, 0.03)",
      marginTop: "16px",
    }
  };

  return (
    <section style={styles.section}>
      <div style={{
        position: "absolute", top: "30%", right: "10%", width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      {/* Styled scrollbar support for the navigation menu panel lists */}
      <style dangerouslySetInnerHTML={{__html: `
        .solve-slide-menu::-webkit-scrollbar { width: 4px; }
        .solve-slide-menu::-webkit-scrollbar-track { background: transparent; }
        .solve-slide-menu::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
      `}} />

      <div style={styles.container}>
        
        <div style={styles.headerBox}>
          <span style={styles.labelTag}>The Comprehensive Slide Guide</span>
          <h2 style={styles.mainTitle}>10-Slide Pitch Blueprint</h2>
          <p style={styles.subtitle}>
            Explore the exact structural slide pacing required for submissions. Click a slide to analyze contextual track case studies.
          </p>
        </div>

        <div style={styles.workspaceGrid}>
          
          {/* SLIDES SELECTOR LEFT NAVIGATION PANEL */}
          <div className="solve-slide-menu" style={styles.navList}>
            {blueprintData.map((slide, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    ...styles.navItemButton,
                    backgroundColor: isSelected ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 15, 20, 0.3)",
                    borderColor: isSelected ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  <div style={{ color: isSelected ? "#c084fc" : "#52525b", transition: "color 0.2s" }}>
                    {slide.icon}
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "10px", fontWeight: 700, color: isSelected ? "#c084fc" : "#52525b", textTransform: "uppercase" }}>
                      {slide.slideNum}
                    </span>
                    <span style={{ display: "block", fontSize: "14.5px", fontWeight: 600, color: isSelected ? "#ffffff" : "#a1a1aa", marginTop: "1px" }}>
                      {slide.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE CONTENT WORKSPACE CANVAS */}
          <div style={styles.displayCanvas}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "20px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {blueprintData[activeIndex].slideNum} Content Requirements
                  </span>
                  <h3 style={{ fontSize: "26px", fontWeight: 800, margin: "6px 0 10px 0", color: "#ffffff" }}>
                    {blueprintData[activeIndex].title}
                  </h3>
                  <p style={{ fontSize: "14.5px", color: "#d4d4d8", lineHeight: 1.6, margin: 0 }}>
                    {blueprintData[activeIndex].objective}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  
                  {/* Tech innovation application context */}
                  <div style={{ ...styles.exampleBox, backgroundColor: "rgba(168, 85, 247, 0.01)", borderColor: "rgba(168, 85, 247, 0.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#c084fc" }} />
                      <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#c084fc", margin: 0, textTransform: "uppercase" }}>
                        Tech Track Case Application
                      </h4>
                    </div>
                    <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.5, margin: 0 }}>
                      {blueprintData[activeIndex].techExample}
                    </p>
                  </div>

                  {/* Social impact innovation application context */}
                  <div style={{ ...styles.exampleBox, backgroundColor: "rgba(6, 182, 212, 0.01)", borderColor: "rgba(6, 182, 212, 0.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22d3ee" }} />
                      <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#22d3ee", margin: 0, textTransform: "uppercase" }}>
                        Social Impact Case Application
                      </h4>
                    </div>
                    <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.5, margin: 0 }}>
                      {blueprintData[activeIndex].socialExample}
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}