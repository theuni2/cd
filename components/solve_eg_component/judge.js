"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, GraduationCap, Award, ShieldCheck } from "lucide-react";

export default function SolvePanelSection() {
  const panelData = [
    {
      name: "Venkat R. Srivatsan",
      role: "Adjunct Professor of Economics, NYU-Stern",
      subRole: "Guest Faculty, Humanities Department, IIT-Madras",
      description: "Expert in early-stage business models, venture scalability, and disruptive market strategies. Guiding student entrepreneurs on transforming raw ideas into high-growth startups and validating unit economics for sustainable growth.",
      displayEmail: "vrs [at] srisaividya [dot] com",
      rawEmail: "mailto:vrs@srisaividya.com",
      badge: "Lead Academic Advisor"
    },
    {
      name: "Ananya Sachdev",
      role: "Entrepreneur & Global Startup Mentor",
      subRole: "Global Startup Strategy Mentor",
      description: "She is a two-time Founder, LinkedIn Influencer, and TEDx speaker. Holding a degree in Economics from SRCC and a Masters in Management from Columbia University, Ananya has navigated the corporate landscapes of New York and Tokyo with firms like Rakuten.",
      displayEmail: "alok [at] careerdiscovery [dot] org",
      rawEmail: "mailto:alok@careerdiscovery.org",
      badge: "Ecosystem Mentor"
    },
    {
      name: "Sarah Jenkins",
      role: "Innovation Consultant & Venture Partner",
      subRole: "Digital Outreach & Media Strategist",
      description: "Expert in brand positioning, storytelling structures, and digital literacy metrics. Evaluating how clearly teams transmit complex ideas inside their 3-minute video pitches.",
      displayEmail: "s.jenkins [at] launcharena [dot] com",
      rawEmail: "mailto:s.jenkins@launcharena.com",
      badge: "Media & Presentation Judge"
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
      marginBottom: "80px",
    },
    labelTag: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#c5a059", // Elite brand gold
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
    panelGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "32px",
    },
    mentorCard: {
      backgroundColor: "rgba(12, 12, 17, 0.6)",
      border: "1px solid rgba(255, 255, 255, 0.04)",
      borderRadius: "24px",
      padding: "40px 32px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
    },
    cardBadge: {
      alignSelf: "flex-start",
      fontSize: "10px",
      fontWeight: 700,
      textTransform: "uppercase",
      color: "#c5a059",
      backgroundColor: "rgba(197, 160, 89, 0.06)",
      border: "1px solid rgba(197, 160, 89, 0.15)",
      padding: "4px 12px",
      borderRadius: "6px",
      letterSpacing: "0.05em",
      marginBottom: "24px",
    },
    mentorName: {
      fontSize: "24px",
      fontWeight: 800,
      margin: "0 0 8px 0",
      color: "#ffffff",
      letterSpacing: "-0.01em",
    },
    academicLine: {
      fontSize: "14.5px",
      fontWeight: 600,
      color: "#d4d4d8",
      margin: "0 0 4px 0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    subAcademicLine: {
      fontSize: "13.5px",
      fontWeight: 500,
      color: "#71717a",
      margin: "0 0 20px 0",
    },
    description: {
      fontSize: "14px",
      color: "#a1a1aa",
      lineHeight: 1.6,
      margin: "0 0 32px 0",
    },
    contactFooter: {
      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      paddingTop: "20px",
      marginTop: "auto",
    },
    emailLink: {
      fontSize: "13.5px",
      fontWeight: 600,
      color: "#a1a1aa",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "color 0.2s ease",
    }
  };

  return (
    <section style={styles.section}>
      {/* Background soft ambient gold tracking glow */}
      <div style={{
        position: "absolute", bottom: "10%", left: "15%", width: "450px", height: "450px",
        background: "radial-gradient(circle, rgba(197,160,89,0.03) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      <style dangerouslySetInnerHTML={{__html: `
        .mentor-interactive-card:hover {
          border-color: rgba(197, 160, 89, 0.2) !important;
          background-color: rgba(18, 18, 24, 0.5) !important;
          transform: translateY(-4px);
        }
        .mentor-interactive-card:hover .mentor-email {
          color: #c5a059 !important;
        }
      `}} />

      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerBox}>
          <span style={styles.labelTag}>Evaluation & Advisory Council</span>
          <h2 style={styles.mainTitle}>Meet the Mentors & Judges</h2>
          <p style={styles.subtitle}>
            Your ideas will be thoroughly evaluated and supported by leading minds across international economics, startup development, and business strategy.
          </p>
        </div>

        {/* Panel Grid Layer */}
        <div style={styles.panelGrid}>
          {panelData.map((mentor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="mentor-interactive-card"
              style={styles.mentorCard}
            >
              <div>
                {/* Structural Specialty Badge */}
                <div style={styles.cardBadge}>
                  {mentor.badge}
                </div>

                {/* Name */}
                <h3 style={styles.mentorName}>{mentor.name}</h3>

                {/* Primary Affiliation */}
                <p style={styles.academicLine}>
                  <GraduationCap size={16} style={{ color: "#c5a059", flexShrink: 0 }} />
                  {mentor.role}
                </p>

                {/* Secondary/Guest Affiliation */}
                <p style={styles.subAcademicLine}>
                  {mentor.subRole}
                </p>

                {/* Contextual Focus Description */}
                <p style={styles.description}>
                  {mentor.description}
                </p>
              </div>

              {/* Secure Scraper-Safe Contact Node */}
              {/* <div style={styles.contactFooter}>
                <a href={mentor.rawEmail} className="mentor-email" style={styles.emailLink}>
                  <Mail size={14} />
                  <span>{mentor.displayEmail}</span>
                </a>
              </div> */}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}