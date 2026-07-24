'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Award, Sparkles, ExternalLink, CheckCircle } from 'lucide-react';

export default function JudgesAndExemplars() {
  const [activeVideo, setActiveVideo] = useState(null);

  const judges = [
    {
      name: 'Dr. Aris Thorne',
      role: 'Astrophysicist & Professor',
      institution: 'Department of Physics',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      badge: 'Lead Judge',
    },
    {
      name: 'Elena Rostova',
      role: 'Science Communicator & Author',
      institution: 'Global STEM Initiative',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      badge: 'Evaluation Lead',
    },
    {
      name: 'Marcus Vance',
      role: 'Bioengineering Researcher',
      institution: 'Institute of Quantum Biology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      badge: 'Review Panel',
    },
  ];

  const exemplars = [
    {
      title: 'Quantum Entanglement Explained with Light',
      topic: 'Physics',
      duration: '1:58',
      author: 'Sample Exemplar Video 01',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
      description: 'Using polarized filters and visual analogies to explain non-locality.',
    },
    {
      title: 'How CRISPR Cuts DNA in Real Time',
      topic: 'Life Sciences',
      duration: '1:52',
      author: 'Sample Exemplar Video 02',
      thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
      description: '2D motion graphics illustrating Cas9 protein mechanisms.',
    },
  ];

  return (
    <section style={styles.wrapper}>
      {/* ---------------- SECTION 1: JUDGING PANEL ---------------- */}
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabel}>World-Class Evaluation</span>
          <h2 style={styles.sectionTitle}>Evaluated by Experts</h2>
          <p style={styles.sectionDesc}>
            Your submission will be personally reviewed by leading educators, researchers, and science communicators.
          </p>
        </motion.div>

        <div style={styles.grid3}>
          {judges.map((judge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={styles.judgeCard}
            >
              <div style={styles.judgeHeader}>
                <img src={judge.image} alt={judge.name} style={styles.judgeImg} />
                <span style={styles.badge}>{judge.badge}</span>
              </div>
              <h3 style={styles.judgeName}>{judge.name}</h3>
              <p style={styles.judgeRole}>{judge.role}</p>
              <p style={styles.judgeInst}>{judge.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* ---------------- SECTION 2: EXEMPLAR VIDEOS ---------------- */}
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabelCyan}>Inspiration & Standards</span>
          <h2 style={styles.sectionTitle}>What a Winning Entry Looks Like</h2>
          <p style={styles.sectionDesc}>
            Explore benchmark videos showing how complex concepts can be simplified effectively within 2 minutes.
          </p>
        </motion.div>

        {/* <div style={styles.grid2}>
          {exemplars.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              style={styles.videoCard}
            >
              <div style={styles.thumbWrapper}>
                <img src={video.thumbnail} alt={video.title} style={styles.thumbImg} />
                <div style={styles.overlay} />
                <button
                  style={styles.playBtn}
                  onClick={() => setActiveVideo(video.title)}
                  aria-label="Play video preview"
                >
                  <Play size={22} color="#FFFFFF" fill="#FFFFFF" />
                </button>
                <span style={styles.timeTag}>{video.duration}</span>
                <span style={styles.topicTag}>{video.topic}</span>
              </div>

              <div style={styles.videoBody}>
                <h3 style={styles.videoTitle}>{video.title}</h3>
                <p style={styles.videoDesc}>{video.description}</p>
                <div style={styles.videoFooter}>
                  <span style={styles.videoAuthor}>
                    <Sparkles size={14} color="#06B6D4" />
                    {video.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Scoring Criteria Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={styles.criteriaBox}
        >
          <h4 style={styles.criteriaTitle}>Key Judging Criteria</h4>
          <div style={styles.criteriaGrid}>
            <div style={styles.criteriaItem}>
              <CheckCircle size={18} color="#06B6D4" />
              <span><strong>Engagement (30%):</strong> Captivates audience attention immediately</span>
            </div>
            <div style={styles.criteriaItem}>
              <CheckCircle size={18} color="#06B6D4" />
              <span><strong>Clarity (30%):</strong> Simplifies a complex concept accurately</span>
            </div>
            <div style={styles.criteriaItem}>
              <CheckCircle size={18} color="#06B6D4" />
              <span><strong>Creativity (20%):</strong> Original animations, visuals, or storytelling</span>
            </div>
            <div style={styles.criteriaItem}>
              <CheckCircle size={18} color="#06B6D4" />
              <span><strong>Scientific Rigor (20%):</strong> Factually precise and research-backed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Pure Inline CSS Stylesheet (No Tailwind Required)
const styles = {
  wrapper: {
    backgroundColor: '#0B0F19',
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
    marginBottom: '48px',
  },
  sectionLabel: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#6366F1',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'inline-block',
    marginBottom: '8px',
  },
  sectionLabelCyan: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#06B6D4',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'inline-block',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    margin: '0 0 16px 0',
    letterSpacing: '-0.5px',
  },
  sectionDesc: {
    fontSize: '17px',
    color: '#9CA3AF',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '28px',
  },
  judgeCard: {
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '28px 24px',
    textAlign: 'center',
  },
  judgeHeader: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '16px',
  },
  judgeImg: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #6366F1',
  },
  badge: {
    position: 'absolute',
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#6366F1',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: '700',
    padding: '3px 10px',
    borderRadius: '12px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
  },
  judgeName: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '8px 0 4px 0',
  },
  judgeRole: {
    fontSize: '14px',
    color: '#06B6D4',
    fontWeight: '600',
    margin: '0 0 4px 0',
  },
  judgeInst: {
    fontSize: '13px',
    color: '#9CA3AF',
    margin: '0',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    margin: '80px auto',
    maxWidth: '1000px',
  },
  videoCard: {
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  thumbWrapper: {
    position: 'relative',
    height: '200px',
    width: '100%',
    overflow: 'hidden',
  },
  thumbImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(11, 15, 25, 0.4)',
  },
  playBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    backgroundColor: '#6366F1',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)',
  },
  timeTag: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: '#FFFFFF',
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 8px',
    borderRadius: '6px',
    fontFamily: 'monospace',
  },
  topicTag: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: 'rgba(6, 182, 212, 0.2)',
    border: '1px solid #06B6D4',
    color: '#06B6D4',
    fontSize: '11px',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '20px',
  },
  videoBody: {
    padding: '24px',
  },
  videoTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 8px 0',
    lineHeight: '1.4',
  },
  videoDesc: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0 0 16px 0',
    lineHeight: '1.5',
  },
  videoFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '12px',
  },
  videoAuthor: {
    fontSize: '13px',
    color: '#06B6D4',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontWeight: '600',
  },
  criteriaBox: {
    marginTop: '48px',
    padding: '28px 32px',
    borderRadius: '16px',
    backgroundColor: 'rgba(22, 31, 51, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  criteriaTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 16px 0',
  },
  criteriaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  criteriaItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '14px',
    color: '#9CA3AF',
    lineHeight: '1.4',
  },
};