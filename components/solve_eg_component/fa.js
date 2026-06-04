"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function SolveFAQSection() {
  // Track open states for each FAQ item independently
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Who is eligible to participate in SOLVE?",
      answer: "The competition is explicitly open to students globally aged 14 to 18. Whether you are currently in high school, secondary education, or taking an early gap year, you can register and pitch.",
    },
    {
      question: "Can I submit an entry individually, or do I need a team?",
      answer: "Both formats are fully supported. You can participate as an individual founder or collaborate in teams ranging from 2 to 5 students total. All members must fit within the 14–18 age constraint.",
    },
    {
      question: "What should the 2-3 minute YouTube video pitch look like?",
      answer: "We support multiple formats. You can submit a recorded presentation slide walkthrough, a clean founder-style video speaking directly to the camera, or a functional prototype/screen-share showcase. Just upload it to YouTube (Public or Unlisted) and provide the link.",
    },
    {
      question: "Can I enter multiple tracks simultaneously?",
      answer: "To ensure high-quality execution, each individual participant or team is permitted to submit exactly one pitch deck to one core track (either Tech Innovation or Social Impact) for Year 1.",
    },
    {
      question: "Are there any registration fees or hidden costs?",
      answer: "No. SOLVE is completely free to enter from Day One. Our goal is to democratize access to innovation and maximize social impact opportunities for students globally.",
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
      maxWidth: "760px", // Cozy width optimized for comfortable reading
      margin: "0 auto",
      position: "relative" ,
      zIndex: 5,
    },
    headerBox: {
      textAlign: "center" ,
      marginBottom: "64px",
    },
    labelTag: {
      fontSize: "11px",
      fontWeight: 700,
      color: "#34d399", // Emerald green tone
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
      maxWidth: "520px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
    faqWrapper: {
      display: "flex",
      flexDirection: "column" ,
      gap: "16px",
    },
    accordionItem: {
      backgroundColor: "rgba(12, 12, 17, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.03)",
      borderRadius: "16px",
      overflow: "hidden",
      transition: "border-color 0.3s ease",
    },
    triggerButton: {
      width: "100%",
      padding: "24px",
      backgroundColor: "transparent",
      border: "none",
      color: "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "left" ,
      cursor: "pointer",
      outline: "none",
    },
    questionText: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#e4e4e7",
      margin: 0,
      paddingRight: "16px",
    },
    iconHolder: {
      flexShrink: 0,
      color: "#a1a1aa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    answerContainer: {
      overflow: "hidden",
    },
    answerPadding: {
      padding: "0 24px 24px 24px",
      fontSize: "14.5px",
      lineHeight: 1.6,
      color: "#a1a1aa",
    },
  };

  return (
    <section style={styles.section}>
      {/* Structural ambient light blur */}
      <div style={{
        position: "absolute", top: "10%", right: "-20%", width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(52,211,153,0.03) 0%, transparent 70%)", pointerEvents: "none"
      }} />

      <style dangerouslySetInnerHTML={{__html: `
        .faq-row:hover {
          border-color: rgba(255, 255, 255, 0.08) !important;
          background-color: rgba(16, 16, 22, 0.5) !important;
        }
      `}} />

      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerBox}>
          <span style={styles.labelTag}>Clarifications</span>
          <h2 style={styles.mainTitle}>Frequently Asked Questions</h2>
          <p style={styles.subtitle}>
            Got queries about files, timelines, or requirements? Here is everything you need to clear up immediately.
          </p>
        </div>

        {/* Dynamic Accordion Structure */}
        <div style={styles.faqWrapper}>
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="faq-row"
                style={{
                  ...styles.accordionItem,
                  borderColor: isOpen ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)"
                }}
              >
                {/* Accordion Trigger Header */}
                <button 
                  style={styles.triggerButton} 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <h3 style={styles.questionText}>{faq.question}</h3>
                  <div style={styles.iconHolder}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Smooth Expansion Card powered by Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={styles.answerContainer}
                    >
                      <div style={styles.answerPadding}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}