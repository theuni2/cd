"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Gift, Award, Briefcase, GraduationCap, Plane, FileText, ArrowUpRight, Sparkles } from "lucide-react";

export default function SolveAwardsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const prizeTiers = [
    {
      badge: "Runner-Ups & Finalists",
      badgeColor: "rgba(168, 85, 247, 0.15)",
      badgeTextColor: "#c084fc",
      borderGlow: "rgba(168, 85, 247, 0.2)",
      title: "Category Finalists",
      subHeading: "Valued over $180,000 per team",
      icon: <Award size={24} color="#c084fc" />,
      perks: [
        {
          title: "University Scholarships",
          detail: "Up to $60,000 academic merit scholarship award for each team member at partner global universities.",
          perkIcon: <GraduationCap size={16} />,
        },
        {
          title: "Expert VC Mentorship",
          detail: "Direct 1-on-1 strategic feedback and scaling reviews with venture capital firms & tech incubators.",
          perkIcon: <Briefcase size={16} />,
        },
      ],
      ctaText: "Explore Partner Colleges",
    },
    {
      badge: "Grand Champions",
      badgeColor: "rgba(245, 158, 11, 0.15)",
      badgeTextColor: "#fbbf24",
      borderGlow: "rgba(245, 158, 11, 0.3)",
      title: "Pete Conrad Scholars",
      subHeading: "Valued over $350,000 per team",
      icon: <Trophy size={28} color="#fbbf24" />,
      isFeatured: true,
      perks: [
        {
          title: "$88,000 University Scholarships",
          detail: "A grand-tier academic scholarship awarded to each individual member of the overall champion team.",
          perkIcon: <GraduationCap size={16} />,
        },
        {
          title: "NASA Space Center Summit Trip",
          detail: "An all-expenses-paid trip to exhibit and power-pitch your solution live at Space Center Houston, USA.",
          perkIcon: <Plane size={16} />,
        },
        {
          title: "IP & Patent Legal Support",
          detail: "Pro-bono consulting from top intellectual property attorneys to file your patent and protect your design.",
          perkIcon: <FileText size={16} />,
        },
      ],
      ctaText: "Apply to Pitch",
    },
    {
      badge: "Honorable Mention",
      badgeColor: "rgba(34, 211, 238, 0.15)",
      badgeTextColor: "#22d3ee",
      borderGlow: "rgba(34, 211, 238, 0.2)",
      title: "Conrad Innovators",
      subHeading: "Industry-Wide Recognition",
      icon: <Gift size={24} color="#22d3ee" />,
      perks: [
        {
          title: "Badge of Excellence",
          detail: "An elite credential and digital badge to elevate your academic portfolios, college apps, and resumes.",
          perkIcon: <Sparkles size={16} />,
        },
        {
          title: "Permanent Alumni Network",
          detail: "Lifetime access to the VIP Alumni database for future co-founding, internships, and research circles.",
          perkIcon: <Briefcase size={16} />,
        },
      ],
      ctaText: "Review Student Portfolios",
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
      maxWidth: "1200px",
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
      maxWidth: "580px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
      gap: "32px",
      alignItems: "stretch",
    },
    card: (isFeatured, borderGlow) => ({
      position: "relative" ,
      backgroundColor: isFeatured ? "rgba(15, 15, 25, 0.7)" : "rgba(10, 10, 14, 0.45)",
      border: `1px solid ${isFeatured ? "rgba(251, 191, 36, 0.25)" : "rgba(255, 255, 255, 0.04)"}`,
      borderRadius: "28px",
      padding: "36px",
      display: "flex",
      flexDirection: "column" ,
      justifyContent: "space-between",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      cursor: "pointer",
      boxShadow: isFeatured ? "0 25px 50px -12px rgba(251, 191, 36, 0.08)" : "none",
    }),
    badge: (bgColor, textColor) => ({
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 14px",
      borderRadius: "9999px",
      backgroundColor: bgColor,
      border: `1px solid rgba(255, 255, 255, 0.05)`,
      fontSize: "11px",
      fontWeight: 600,
      color: textColor,
      textTransform: "uppercase" ,
      letterSpacing: "0.05em",
      marginBottom: "28px",
    }),
    titleGroup: {
      marginBottom: "32px",
    },
    prizeTitle: {
      fontSize: "26px",
      fontWeight: 800,
      color: "#ffffff",
      margin: "0 0 6px 0",
    },
    subHeading: (isFeatured) => ({
      fontSize: "14px",
      fontWeight: 600,
      color: isFeatured ? "#fbbf24" : "#a1a1aa",
    }),
    divider: {
      height: "1px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      margin: "24px 0",
    },
    perksList: {
      display: "flex",
      flexDirection: "column" ,
      gap: "24px",
      marginBottom: "40px",
    },
    perkItem: {
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
    },
    iconWrapper: (isFeatured) => ({
      padding: "10px",
      borderRadius: "12px",
      backgroundColor: isFeatured ? "rgba(251, 191, 36, 0.1)" : "rgba(255, 255, 255, 0.02)",
      border: `1px solid ${isFeatured ? "rgba(251, 191, 36, 0.15)" : "rgba(255, 255, 255, 0.05)"}`,
      color: isFeatured ? "#fbbf24" : "#22d3ee",
      flexShrink: 0,
    }),
    perkTitle: {
      fontSize: "15px",
      fontWeight: 700,
      color: "#ffffff",
      margin: "0 0 4px 0",
    },
    perkDetail: {
      fontSize: "13.5px",
      color: "#71717a",
      lineHeight: 1.5,
      margin: 0,
    },
    ctaButton: (isFeatured) => ({
      width: "100%",
      padding: "14px 20px",
      borderRadius: "14px",
      backgroundColor: isFeatured ? "#fbbf24" : "transparent",
      color: isFeatured ? "#000000" : "#e4e4e7",
      border: `1px solid ${isFeatured ? "transparent" : "rgba(255, 255, 255, 0.08)"}`,
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    }),
  };

  return (
    <section style={styles.section}>
      {/* Immersive background glow highlights */}
      <div style={{
        position: "absolute", top: "40%", left: "5%", width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%", width: "550px", height: "550px",
        background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      {/* Embedded Global Styles for Custom Hover Effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .prize-card:hover {
          border-color: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-6px);
        }
        .featured-prize-card:hover {
          border-color: rgba(251, 191, 36, 0.5) !important;
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -15px rgba(251, 191, 36, 0.15) !important;
        }
        .prize-card:hover .action-text, .featured-prize-card:hover .action-text {
          color: #ffffff !important;
        }
        .prize-card:hover .cta-arrow, .featured-prize-card:hover .cta-arrow {
          transform: translate(2px, -2px);
        }
      `}} />

      <div style={styles.container}>
        
        {/* Section Heading */}
        <div style={styles.headerBox}>
          <span style={styles.labelTag}>The Incentives</span>
          <h2 style={styles.mainTitle}>Fueling Your Future</h2>
          <p style={styles.subtitle}>
            From international travel to life-changing university scholarships, we offer prestigious incentives to launch your entrepreneurial path.
          </p>
        </div>

        {/* Prize Grid Structure */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={styles.grid}
        >
          {prizeTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={tier.isFeatured ? "featured-prize-card" : "prize-card"}
              style={{
                ...styles.card(!!tier.isFeatured, tier.borderGlow),
                transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              {/* Header Badge */}
              <div style={styles.badge(tier.badgeColor, tier.badgeTextColor)}>
                {tier.badge}
              </div>

              {/* Title & Valuation */}
              <div style={styles.titleGroup}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3 style={styles.prizeTitle}>{tier.title}</h3>
                  {tier.icon}
                </div>
                <span style={styles.subHeading(!!tier.isFeatured)}>
                  {tier.subHeading}
                </span>
              </div>

              {/* Layout Break Line */}
              <div style={styles.divider} />

              {/* Specific Perks List */}
              <div style={styles.perksList}>
                {tier.perks.map((perk, pIndex) => (
                  <div key={pIndex} style={styles.perkItem}>
                    <div style={styles.iconWrapper(!!tier.isFeatured)}>
                      {perk.perkIcon}
                    </div>
                    <div>
                      <h4 style={styles.perkTitle}>{perk.title}</h4>
                      <p style={styles.perkDetail}>{perk.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer CTA */}
              <div>
                <button 
                  className="action-text"
                  style={{
                    ...styles.ctaButton(!!tier.isFeatured),
                    transition: "all 0.3s ease",
                  }}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="cta-arrow" size={16} style={{ transition: "transform 0.3s ease" }} />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
