"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SolveTimelineInline() {
  const timelineStages = [
    { phase: "Stage 01", title: "Applications Open", detail: "Portal opens for international registration and structural draft alignments." },
    { phase: "Stage 02", title: "Submission Deadline", detail: "Final collection of your 8—10 slide Pitch Deck and 2—3 min YouTube Pitch Video frame." },
    { phase: "Stage 03", title: "Judging Round", detail: "Panel review processes based on our core analytical breakdown matrices." },
    { phase: "Stage 04", title: "Finalists Announcement", detail: "Top tier strategic innovation frameworks published globally." },
    { phase: "Stage 05", title: "Virtual Finale / Awards", detail: "Live digital presentations, networking framework rollouts, and prize assignments." }
  ];

  const criteria = [
    { title: "Innovation", weight: "30%", color: "#3b82f6", detail: "Originality of theory and novelty of problem mitigation logic." },
    { title: "Impact", weight: "30%", color: "#10b981", detail: "Measurable potential for human or operational optimization." },
    { title: "Feasibility", weight: "20%", color: "#6366f1", detail: "Logical baseline realism of system framework deployment execution." },
    { title: "Presentation", weight: "20%", color: "#f59e0b", detail: "Clarity, punch, and conviction of delivery via deck and video." }
  ];

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
    container: {
      width: '100%',
      maxWidth: '1152px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    },
    headerArea: {
      maxWidth: '640px',
      marginBottom: '80px',
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
    splitGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '64px',
      alignItems: 'start'
    },
    columnTitle: {
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#9ca3af',
      marginBottom: '40px',
      borderBottom: '1px solid #1f2937',
      paddingBottom: '16px'
    },
    // Timeline specific styles
    timelineItem: {
      display: 'flex',
      gap: '24px',
      position: 'relative',
      paddingBottom: '32px'
    },
    timelineLine: {
      position: 'absolute',
      left: '7px',
      top: '16px',
      bottom: 0,
      width: '1px',
      backgroundColor: '#1f2937'
    },
    node: {
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      backgroundColor: '#111827',
      border: '2px solid #4b5563',
      zIndex: 2,
      marginTop: '4px',
      flexShrink: 0
    },
    // Criteria card specific styles
    criteriaRow: {
      background: 'rgba(17, 24, 39, 0.2)',
      border: '1px solid #1f2937',
      padding: '24px',
      borderRadius: '16px',
      marginBottom: '16px',
      textAlign: 'left'
    },
    barContainer: {
      width: '100%',
      height: '6px',
      backgroundColor: '#111827',
      borderRadius: '3px',
      marginTop: '16px',
      overflow: 'hidden'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.headerArea}>
          <p style={styles.preTitle}>// Roadmap & Evaluation</p>
          <h2 style={styles.mainTitle}>Timeline & Criteria</h2>
        </div>

        {/* Asymmetrical Split Layout */}
        <div style={styles.splitGrid}>
          
          {/* LEFT SIDE: 5-STAGE TIMELINE */}
          <div>
            <h3 style={styles.columnTitle}>// Structural Milestones</h3>
            <div style={{ paddingLeft: '8px' }}>
              {timelineStages.map((stage, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={styles.timelineItem}
                >
                  {/* Connective line element between items (omit on last item) */}
                  {idx !== timelineStages.length - 1 && <div style={styles.timelineLine} />}
                  
                  {/* Timeline Indicator Dot */}
                  <motion.div 
                    whileInView={{ backgroundColor: '#ffffff', borderColor: '#3b82f6' }}
                    viewport={{ once: true }}
                    style={styles.node} 
                  />

                  {/* Stage Text details */}
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#6b7280', fontWeight: 'bold', textTransform: 'uppercase' }}>{stage.phase}</span>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '4px 0 6px 0' }}>{stage.title}</h4>
                    <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '300', margin: 0, lineHeight: '1.5' }}>{stage.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: JUDGING CRITERIA */}
          <div>
            <h3 style={styles.columnTitle}>// Weight Metrics Matrix</h3>
            <div>
              {criteria.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ borderColor: 'rgba(255,255,255,0.15)' }}
                  style={styles.criteriaRow}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: 0 }}>{item.title}</h4>
                    <span style={{ fontSize: '24px', fontWeight: '900', fontFamily: 'monospace', color: item.color }}>{item.weight}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '300', margin: '6px 0 0 0', lineHeight: '1.4' }}>{item.detail}</p>
                  
                  {/* Code-rendered animated loading weighting data line metric bar */}
                  <div style={styles.barContainer}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.weight }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                      style={{ height: '100%', backgroundColor: item.color, borderRadius: '3px' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}