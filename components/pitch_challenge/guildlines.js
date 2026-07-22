'use client';

import { motion } from 'framer-motion';
import { Clock, ShieldAlert, Video, Sparkles, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

const guidelines = [
  {
    icon: <Clock size={24} color="#06B6D4" />,
    title: "Strict 2-Minute Limit",
    desc: "Videos must be between 60 seconds and 120 seconds long. Anything over 2 minutes will be automatically disqualified."
  },
  {
    icon: <Video size={24} color="#6366F1" />,
    title: "Format & Hosting",
    desc: "Upload your video to YouTube or Vimeo as Unlisted or Public. Submit the direct link via our portal."
  },
  {
    icon: <Sparkles size={24} color="#EC4899" />,
    title: "Original Content & AI Rules",
    desc: "Scripts, visuals, and animations must be entirely your own work. AI voiceovers and fully AI-generated videos are prohibited."
  },
  {
    icon: <ShieldAlert size={24} color="#F59E0B" />,
    title: "Safety & Lab Ethics",
    desc: "No dangerous chemical experiments, unhandled fire, or harm to animals. Focus on clear explanation and demonstration safety."
  }
];

export default function CompetitionGuidelines() {
  return (
    <section style={styles.wrapper} id="guidelines">
      <div style={styles.container}>
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabel}>Official Rules</span>
          <h2 style={styles.sectionTitle}>Competition Guidelines</h2>
          <p style={styles.sectionDesc}>
            Make sure your entry meets all requirements before submitting to ensure smooth judging.
          </p>
        </motion.div>

        {/* 4 Core Rule Cards */}
        <div style={styles.ruleGrid}>
          {guidelines.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={styles.ruleCard}
            >
              <div style={styles.iconBox}>{rule.icon}</div>
              <h3 style={styles.ruleTitle}>{rule.title}</h3>
              <p style={styles.ruleDesc}>{rule.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Do's & Don'ts Checklist */}
        <div style={styles.checklistCard}>
          <h3 style={styles.checklistHeading}>Submission Do's & Don'ts</h3>
          
          <div style={styles.checklistGrid}>
            {/* DO's */}
            <div style={styles.checkColumn}>
              <div style={styles.checkHeader}>
                <CheckCircle2 size={20} color="#10B981" />
                <span style={{ ...styles.columnLabel, color: '#10B981' }}>DO</span>
              </div>
              <ul style={styles.list}>
                <li>Introduce yourself and your topic clearly in the first 10 seconds.</li>
                <li>Use analogies, physical props, or diagrams to simplify complex ideas.</li>
                <li>Ensure audio is crisp and clear with minimal background noise.</li>
                <li>Include English subtitles if your primary language is not English.</li>
              </ul>
            </div>

            {/* DON'Ts */}
            <div style={styles.checkColumn}>
              <div style={styles.checkHeader}>
                <AlertTriangle size={20} color="#EF4444" />
                <span style={{ ...styles.columnLabel, color: '#EF4444' }}>DON'T</span>
              </div>
              <ul style={styles.list}>
                <li>Do not use copyrighted music or movie clips without permission.</li>
                <li>Do not read directly off a visible slide or dense script wall.</li>
                <li>Do not perform lab demonstrations without proper protective gear.</li>
                <li>Do not submit team entries—all submissions must be solo work.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Inline CSS Stylesheet
const styles = {
  wrapper: {
    backgroundColor: '#070A12',
    color: '#F9FAFB',
    padding: '80px 20px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  headerBlock: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionLabel: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#06B6D4',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'inline-block',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
    fontWeight: '800',
    margin: '0 0 16px 0',
    letterSpacing: '-0.5px',
  },
  sectionDesc: {
    fontSize: '16px',
    color: '#9CA3AF',
    maxWidth: '550px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  ruleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  ruleCard: {
    backgroundColor: '#111827',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  iconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ruleTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0',
  },
  ruleDesc: {
    fontSize: '13px',
    color: '#9CA3AF',
    lineHeight: '1.5',
    margin: '0',
  },
  checklistCard: {
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '32px',
  },
  checklistHeading: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 24px 0',
    textAlign: 'center',
  },
  checklistGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
  },
  checkColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  checkHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  columnLabel: {
    fontSize: '16px',
    fontWeight: '800',
    letterSpacing: '1px',
  },
  list: {
    margin: '0',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: '#D1D5DB',
    fontSize: '14px',
    lineHeight: '1.5',
  },
};