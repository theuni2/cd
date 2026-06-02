"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SolveRequirementsInline() {
  const deckSlides = ["01. Problem", "02. Solution", "03. Why It Matters", "04. Impact", "05. Innovation", "06. Future Vision"];

  const styles = {
    section: {
      width: '100%',
      backgroundColor: '#030712',
      color: '#ffffff',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #1f2937',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      boxSizing: 'border-box'
    },
    ambientGlow: {
      position: 'absolute',
      bottom: '-10%',
      right: '10%',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      backgroundColor: 'rgba(59, 130, 246, 0.02)',
      filter: 'blur(130px)',
      pointerEvents: 'none'
    },
    container: {
      width: '100%',
      maxWidth: '1152px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    },
    headerArea: {
      maxWidth: '640px',
      marginBottom: '64px',
      textAlign: 'left'
    },
    preTitle: {
      fontSize: '11px',
      fontFamily: 'monospace',
      fontWeight: '700',
      color: '#6b7280',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      margin: '0 0 12px 0'
    },
    mainTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: '900',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '0 0 24px 0',
      lineHeight: '1.1'
    },
    description: {
      fontSize: '16px',
      fontWeight: '300',
      color: '#9ca3af',
      lineHeight: '1.6',
      margin: 0
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '40px',
      width: '100%'
    },
    requirementCard: {
      background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.5) 0%, rgba(9, 13, 22, 0.2) 100%)',
      border: '1px solid #1f2937',
      borderRadius: '24px',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      textAlign: 'left'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '28px'
    },
    iconBox: (color) => ({
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      backgroundColor: `rgba(${color}, 0.1)`,
      border: `1px solid rgba(${color}, 0.2)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      color: `rgb(${color})`
    }),
    badge: {
      fontSize: '10px',
      fontFamily: 'monospace',
      color: '#6b7280',
      border: '1px solid #1f2937',
      padding: '4px 10px',
      borderRadius: '6px',
      backgroundColor: '#090d16'
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: '800',
      color: '#ffffff',
      margin: '0 0 8px 0',
      letterSpacing: '-0.01em'
    },
    cardSubtitle: {
      fontSize: '14px',
      color: '#9ca3af',
      fontWeight: '300',
      lineHeight: '1.5',
      margin: '0 0 32px 0'
    },
    // Visual Mockup Box Styles
    mockupContainer: {
      backgroundColor: '#040814',
      border: '1px solid #1f2937',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '32px',
      position: 'relative',
      overflow: 'hidden'
    },
    slideGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px'
    },
    slideThumbnail: {
      aspectRatio: '16/10',
      backgroundColor: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '8px',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box'
    },
    videoStage: {
      width: '100%',
      aspectRatio: '16/9',
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      borderRadius: '12px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.ambientGlow} />

      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerArea}>
          <p style={styles.preTitle}>// Evaluation Deliverables</p>
          <h2 style={styles.mainTitle}>Submission Requirements</h2>
          <p style={styles.description}>
            We value your time and clarity. To enter, students only need to submit two core assets. No complex code deployment or lengthy paperwork required.
          </p>
        </div>

        {/* Requirements Split Layout Grid */}
        <div style={styles.grid}>
          
          {/* REQUIREMENT 01: PITCH DECK */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={styles.requirementCard}
          >
            <div>
              <div style={styles.cardHeader}>
                <div style={styles.iconBox('59, 130, 246')}>📊</div>
                <span style={styles.badge}>8—10 SLIDES MAX</span>
              </div>
              
              <h3 style={styles.cardTitle}>1. Innovation Pitch Deck</h3>
              <p style={styles.cardSubtitle}>A clean presentation outlining your core theory, system framework, and strategic target problem architecture.</p>

              {/* Interactive Slide Array Mockup Graphic */}
              <div style={styles.mockupContainer}>
                <div style={styles.slideGrid}>
                  {deckSlides.map((slide, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.03, borderColor: '#3b82f6' }}
                      style={styles.slideThumbnail}
                    >
                      <span style={{ fontSize: '9px', color: '#64748b', fontFamily: 'monospace', fontWeight: 'bold' }}>SLIDE_0{i+1}</span>
                      <span style={{ fontSize: '10px', color: '#e2e8f0', fontWeight: '600', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{slide.split('. ')[1]}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* REQUIREMENT 02: YOUTUBE VIDEO */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={styles.requirementCard}
          >
            <div>
              <div style={styles.cardHeader}>
                <div style={styles.iconBox('239, 68, 68')}>▶️</div>
                <span style={styles.badge}>2—3 MINUTES MAX</span>
              </div>
              
              <h3 style={styles.cardTitle}>2. YouTube Pitch Video</h3>
              <p style={styles.cardSubtitle}>A high-conviction recorded video overview pitch communicating your core vision. Can be a presentation slide-over, demo, or founder delivery layout.</p>

              {/* Interactive Video Frame Mockup Graphic */}
              <div style={styles.mockupContainer}>
                <div style={styles.videoStage}>
                  {/* Subtle Radar/Soundwave animation representing a continuous video track play state */}
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    style={{ position: 'absolute', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid rgba(239, 68, 68, 0.4)' }}
                  />
                  {/* Play Button Icon wrapper */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2, boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}
                  >
                    <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid white', marginLeft: '3px' }} />
                  </motion.div>
                  {/* Faux Video Interface Controls */}
                  <div style={{ position: 'absolute', bottom: '8px', left: '12px', right: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '2px', backgroundColor: '#ef4444', borderRadius: '1px' }} />
                    <div style={{ flex: 1, height: '2px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '1px' }} />
                    <span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#475569' }}>02:45</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}