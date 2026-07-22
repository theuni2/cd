'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Trophy, Clock, Play } from 'lucide-react';

export default function HeroSection() {
  // Target deadline for the competition
  const targetDate = new Date('2026-10-31T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section style={styles.section}>
      {/* 1. Ambient Animated Background Lights */}
      <div style={styles.bgGlowPurple} />
      <div style={styles.bgGlowCyan} />

      <div style={styles.container}>
        {/* 2. Inaugural Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.badge}
        >
          <Sparkles size={16} color="#06B6D4" />
          <span style={styles.badgeText}>Inaugural 2026 Edition</span>
        </motion.div>

        {/* 3. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.headline}
        >
          Explain a Big Idea. <br />
          <span style={styles.gradientText}>Win $50,000 in Scholarships.</span>
        </motion.h1>

        {/* 4. Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={styles.subheadline}
        >
          A global challenge for thinkers ages 13–18. Create an original 2-minute video bringing a complex concept in Physics, Life Sciences, or Math to life.
        </motion.p>

        {/* 5. CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.btnGroup}
        >
          <a href="/submit" style={styles.primaryBtn}>
            Enter the Challenge
            <ArrowRight size={18} />
          </a>

          <a href="#how-it-works" style={styles.secondaryBtn}>
            <Play size={16} color="#06B6D4" fill="#06B6D4" />
            Watch Sample Entries
          </a>
        </motion.div>

        {/* 6. Live Countdown Timer Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={styles.timerWrapper}
        >
          <div style={styles.timerBox}>
            <div style={styles.timerHeader}>
              <Clock size={16} color="#F59E0B" />
              <span>SUBMISSIONS CLOSE IN</span>
            </div>

            <div style={styles.timerGrid}>
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} style={styles.timerUnit}>
                  <span style={styles.timerNum}>
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span style={styles.timerLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 7. Key Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={styles.statsBar}
        >
          <div style={styles.statItem}>
            <Trophy size={24} color="#F59E0B" />
            <div>
              <p style={styles.statTitle}>$50,000 Grand Prize</p>
              <p style={styles.statSub}>Scholarship + School Grant</p>
            </div>
          </div>

          <div style={styles.statItem}>
            <Sparkles size={24} color="#06B6D4" />
            <div>
              <p style={styles.statTitle}>Under 2 Minutes</p>
              <p style={styles.statSub}>Video length constraint</p>
            </div>
          </div>

          <div style={styles.statItem}>
            <div style={styles.ageBadge}>18</div>
            <div>
              <p style={styles.statTitle}>Ages 13–18</p>
              <p style={styles.statSub}>Global eligibility</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Inline CSS Stylesheet (No Tailwind Required)
const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#0B0F19',
    color: '#F9FAFB',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '96px 20px 64px 20px',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  bgGlowPurple: {
    position: 'absolute',
    top: '-10%',
    left: '-5%',
    width: '450px',
    height: '450px',
    backgroundColor: 'rgba(99, 102, 241, 0.18)',
    borderRadius: '50%',
    filter: 'blur(120px)',
    pointerEvents: 'none',
  },
  bgGlowCyan: {
    position: 'absolute',
    bottom: '10%',
    right: '-5%',
    width: '500px',
    height: '500px',
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    borderRadius: '50%',
    filter: 'blur(130px)',
    pointerEvents: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 18px',
    borderRadius: '9999px',
    backgroundColor: '#161F33',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    boxShadow: '0 0 15px rgba(6, 182, 212, 0.15)',
  },
  badgeText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#06B6D4',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  headline: {
    fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
    fontWeight: '800',
    lineHeight: '1.15',
    letterSpacing: '-0.5px',
    margin: '0',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #6366F1 0%, #06B6D4 50%, #F59E0B 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subheadline: {
    maxWidth: '650px',
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#9CA3AF',
    margin: '0',
  },
  btnGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '8px',
    width: '100%',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '16px',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
    boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)',
    transition: 'all 0.3s ease',
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '16px',
    color: '#F9FAFB',
    textDecoration: 'none',
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    transition: 'all 0.3s ease',
  },
  timerWrapper: {
    marginTop: '24px',
    width: '100%',
  },
  timerBox: {
    display: 'inline-block',
    padding: '24px 36px',
    borderRadius: '16px',
    backgroundColor: 'rgba(22, 31, 51, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  timerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#9CA3AF',
    marginBottom: '16px',
  },
  timerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  timerUnit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timerNum: {
    fontSize: '32px',
    fontWeight: '800',
    fontFamily: 'monospace',
    color: '#F9FAFB',
  },
  timerLabel: {
    fontSize: '12px',
    color: '#9CA3AF',
    marginTop: '4px',
  },
  statsBar: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    width: '100%',
    textAlign: 'left',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  statTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0',
  },
  statSub: {
    fontSize: '13px',
    color: '#9CA3AF',
    margin: '0',
  },
  ageBadge: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    border: '1px solid #6366F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '800',
    color: '#6366F1',
  },
};

