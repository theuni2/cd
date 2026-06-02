"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SolveFooterInline() {
  const currentYear = new Date().getFullYear();

  const styles = {
    section: {
      width: '100%',
      backgroundColor: '#030712',
      color: '#ffffff',
      padding: '96px 24px 48px 24px',
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
    // Final Box Box Container
    ctaBox: {
      background: 'linear-gradient(135deg, #090d16 0%, #050b14 100%)',
      border: '1px solid #1f2937',
      borderRadius: '24px',
      padding: '64px 32px',
      textAlign: 'center',
      marginBottom: '80px',
      position: 'relative',
      overflow: 'hidden'
    },
    ctaTitle: {
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      fontWeight: '900',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '0 0 16px 0',
      lineHeight: '1.2'
    },
    ctaDesc: {
      fontSize: '16px',
      fontWeight: '300',
      color: '#9ca3af',
      maxWidth: '576px',
      margin: '0 auto 40px auto',
      lineHeight: '1.6'
    },
    btnPrimary: {
      padding: '14px 40px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontWeight: '700',
      fontSize: '14px',
      letterSpacing: '0.02em',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      display: 'inline-block'
    },
    // Split Footer links layer
    footerMain: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'start',
      gap: '40px',
      paddingBottom: '48px',
      borderBottom: '1px solid #1f2937',
      textAlign: 'left'
    },
    brandSide: {
      maxWidth: '320px'
    },
    logo: {
      fontSize: '24px',
      fontWeight: '900',
      letterSpacing: '-0.02em',
      color: '#ffffff',
      margin: '0 0 12px 0'
    },
    brandText: {
      fontSize: '13px',
      color: '#6b7280',
      lineHeight: '1.6',
      margin: 0
    },
    linkGrid: {
      display: 'flex',
      gap: '64px',
      flexWrap: 'wrap'
    },
    linkColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    columnHeader: {
      fontSize: '11px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#4b5563',
      marginBottom: '4px'
    },
    footerLink: {
      fontSize: '13px',
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    // Copyright Bottom bar row
    bottomBar: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      paddingTop: '32px',
      fontSize: '12px',
      color: '#4b5563'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* CLOSING HIGH-CONVISTION CTA BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={styles.ctaBox}
        >
          {/* Subtle Ambient Radial Mask Accents */}
          <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(99,102,241,0.02) 0%, transparent 60%)', pointerEvents: 'none' }} />
          
          <h3 style={styles.ctaTitle}>Ready to Pitch Your Vision?</h3>
          <p style={styles.ctaDesc}>
            Join a global cohort of purpose-driven student innovators. Strip away the logistics and let your core logic stand out.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={styles.btnPrimary}
          >
            Launch Your Submission
          </motion.button>
        </motion.div>

        {/* FOOTER DIRECTORY INDEX LINKS */}
        <div style={styles.footerMain}>
          
          {/* Brand Info block */}
          <div style={styles.brandSide}>
            <div style={styles.logo}>SOLVE</div>
            <p style={styles.brandText}>
              A global youth competition pitching innovative technology and social impact ideas to solve real-world challenges.
            </p>
          </div>

          {/* Navigational Links blocks */}
          <div style={styles.linkGrid}>
            <div style={styles.linkColumn}>
              <span style={styles.columnHeader}>Competition</span>
              <a style={styles.footerLink}>Tech Track</a>
              <a style={styles.footerLink}>Social Impact</a>
              <a style={styles.footerLink}>Guidelines</a>
            </div>

            <div style={styles.linkColumn}>
              <span style={styles.columnHeader}>Partnerships</span>
              <a style={styles.footerLink}>School Registration</a>
              <a style={styles.footerLink}>Judge Network</a>
              <a style={styles.footerLink}>Contact System</a>
            </div>

            <div style={styles.linkColumn}>
              <span style={styles.columnHeader}>Connect</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.footerLink}>LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.footerLink}>Instagram</a>
              <a style={styles.footerLink}>Community Portal</a>
            </div>
          </div>

        </div>

        {/* FOOTER COPYRIGHT AND STATUS METRICS BAR */}
        <div style={styles.bottomBar}>
          <div>
            &copy; {currentYear} SOLVE Core Framework. All rights reserved.
          </div>
          <div style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>
            // ENV: PRODUCTION_READY // BUILD_V1.0.4
          </div>
        </div>

      </div>
    </section>
  );
}