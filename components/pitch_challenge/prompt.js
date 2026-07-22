'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Dna, Atom, Cpu, Sparkles, GraduationCap, Compass, Globe } from 'lucide-react';

const promptData = {
  chemistry: {
    title: "Chemistry",
    icon: <FlaskConical size={20} />,
    color: "#EC4899",
    // High-resolution science & chemistry visual
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    junior: [
      "Why does baking soda + vinegar fizz?",
      "How does soap actually get grease off your hands?",
      "How does a glow stick make light without electricity?"
    ],
    senior: [
      "How do catalysts speed up a reaction without being used up?",
      "What actually happens inside a battery when it \"dies\"?",
      "How does pH determine whether a molecule helps or harms the body?"
    ]
  },
  biology: {
    title: "Biology",
    icon: <Dna size={20} />,
    color: "#10B981",
    // Life sciences & cellular visual
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    junior: [
      "How does your body know when to stop growing?",
      "Why do some animals hibernate and others migrate?",
      "Why do we need sleep — what happens if we don't get it?"
    ],
    senior: [
      "How does CRISPR gene editing actually work?",
      "How do mRNA vaccines reprogram cells to fight disease?",
      "What causes antibiotic resistance, and can evolution be \"outrun\"?"
    ]
  },
  physics: {
    title: "Physics",
    icon: <Atom size={20} />,
    color: "#3B82F6",
    // Deep cosmos & quantum physics visual
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    junior: [
      "Why does the sky change color at sunset?",
      "Why can't we see gravity, but we can feel it?",
      "How does a rainbow actually form?"
    ],
    senior: [
      "What is entropy, and why can't time run backward?",
      "How do black holes bend time?",
      "What is dark matter, and how do we know it exists if we've never seen it?"
    ]
  },
  cs_ai: {
    title: "CS / AI",
    icon: <Cpu size={20} />,
    color: "#8B5CF6",
    // Artificial intelligence & neural network visual
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    junior: [
      "How does a search engine \"know\" what you're looking for?",
      "How does your phone unlock with just your face?",
      "How does autocomplete guess your next word?"
    ],
    senior: [
      "How does a machine learning model actually \"learn\"?",
      "What is a neural network, in plain terms — and why is it modeled on the brain?",
      "How do large language models generate text without \"understanding\" it the way humans do?"
    ]
  }
};

export default function TopicPrompts() {
  const [activeTab, setActiveTab] = useState('chemistry');
  const activeCategory = promptData[activeTab];

  return (
    <section style={styles.wrapper} id="topics">
      <div style={styles.container}>
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <div style={styles.badgeRow}>
            <span style={styles.sectionLabel}>Video Prompts</span>
            <span style={styles.regionBadge}>
              <Globe size={13} color="#06B6D4" /> Open to Dubai & International Students
            </span>
          </div>

          <h2 style={styles.sectionTitle}>Choose Your Scientific Challenge</h2>
          <p style={styles.sectionDesc}>
            Pick <strong>one topic</strong> from your category track below and explain it in 2 minutes or less using simple language and original visuals.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div style={styles.tabBar}>
          {Object.keys(promptData).map((key) => {
            const cat = promptData[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                style={{
                  ...styles.tabBtn,
                  ...(isActive ? { ...styles.tabBtnActive, borderColor: cat.color, boxShadow: `0 0 15px ${cat.color}40` } : {})
                }}
              >
                <span style={{ color: isActive ? cat.color : '#9CA3AF', display: 'flex', alignItems: 'center' }}>
                  {cat.icon}
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Prompts Display Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            style={styles.promptCard}
          >
            {/* Visual Header Banner with Gradient Overlay */}
            <div style={styles.bannerBox}>
              <img 
                src={activeCategory.image} 
                alt={`${activeCategory.title} theme illustration`}
                style={styles.bannerImage} 
              />
              <div style={{ ...styles.bannerOverlay, background: `linear-gradient(to top, #161F33 10%, rgba(22, 31, 51, 0.4) 100%)` }} />
              <div style={styles.bannerContent}>
                <span style={{ ...styles.categoryPill, backgroundColor: activeCategory.color }}>
                  {activeCategory.title}
                </span>
                <h3 style={styles.bannerTitle}>Explore {activeCategory.title} Prompts</h3>
              </div>
            </div>

            {/* Prompts Grid */}
            <div style={styles.promptGrid}>
              
              {/* Junior Track */}
              <div style={styles.trackColumn}>
                <div style={{ ...styles.trackHeader, borderColor: '#06B6D4' }}>
                  <Compass size={18} color="#06B6D4" />
                  <div>
                    <h3 style={styles.trackTitle}>Junior Track</h3>
                    <span style={styles.trackAge}>Ages 13–15</span>
                  </div>
                </div>

                <div style={styles.promptList}>
                  {activeCategory.junior.map((prompt, idx) => (
                    <div key={idx} style={styles.promptItem}>
                      <span style={{ ...styles.promptNumber, color: activeCategory.color }}>0{idx + 1}</span>
                      <p style={styles.promptText}>{prompt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior Track */}
              <div style={styles.trackColumn}>
                <div style={{ ...styles.trackHeader, borderColor: '#6366F1' }}>
                  <GraduationCap size={18} color="#6366F1" />
                  <div>
                    <h3 style={styles.trackTitle}>Senior Track</h3>
                    <span style={styles.trackAge}>Ages 16–18</span>
                  </div>
                </div>

                <div style={styles.promptList}>
                  {activeCategory.senior.map((prompt, idx) => (
                    <div key={idx} style={styles.promptItem}>
                      <span style={{ ...styles.promptNumber, color: activeCategory.color }}>0{idx + 1}</span>
                      <p style={styles.promptText}>{prompt}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Callout Banner */}
            <div style={styles.calloutBox}>
              <Sparkles size={18} color="#06B6D4" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={styles.calloutText}>
                <strong>Have your own creative topic idea?</strong> You can propose a custom video concept in your submission as long as it directly fits into one of these four core fields!
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

// Inline CSS Stylesheet
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
    marginBottom: '40px',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '12px',
  },
  sectionLabel: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#06B6D4',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  regionBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 10px',
    borderRadius: '20px',
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(6, 182, 212, 0.25)',
    fontSize: '12px',
    fontWeight: '600',
    color: '#06B6D4',
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
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  tabBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '32px',
  },
  tabBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 24px',
    borderRadius: '12px',
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#D1D5DB',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  tabBtnActive: {
    backgroundColor: '#1E293B',
    color: '#FFFFFF',
  },
  promptCard: {
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    overflow: 'hidden',
  },
  bannerBox: {
    position: 'relative',
    height: '180px',
    borderRadius: '14px',
    overflow: 'hidden',
    marginBottom: '28px',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    inset: 0,
  },
  bannerContent: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  categoryPill: {
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    width: 'fit-content',
  },
  bannerTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#FFFFFF',
    margin: '0',
    textShadow: '0 2px 4px rgba(0,0,0,0.6)',
  },
  promptGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
  },
  trackColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  trackHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingBottom: '12px',
    borderBottom: '2px solid',
  },
  trackTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0',
  },
  trackAge: {
    fontSize: '12px',
    color: '#9CA3AF',
    fontWeight: '500',
  },
  promptList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  promptItem: {
    backgroundColor: '#0B0F19',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
  },
  promptNumber: {
    fontSize: '14px',
    fontWeight: '800',
    fontFamily: 'monospace',
    marginTop: '2px',
  },
  promptText: {
    fontSize: '14px',
    color: '#E5E7EB',
    margin: '0',
    lineHeight: '1.5',
  },
  calloutBox: {
    marginTop: '28px',
    padding: '16px 20px',
    borderRadius: '12px',
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    border: '1px solid rgba(6, 182, 212, 0.2)',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  calloutText: {
    fontSize: '13px',
    color: '#9CA3AF',
    margin: '0',
    lineHeight: '1.5',
  },
};