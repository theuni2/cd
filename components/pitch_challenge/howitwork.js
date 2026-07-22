'use client';

import { motion } from 'framer-motion';
import { Video, Sparkles, Send, Award, School, Globe, ArrowRight } from 'lucide-react';

export default function HowItWorksAndPrizes() {
  const steps = [
    {
      number: '01',
      icon: <Video size={24} color="#06B6D4" />,
      title: 'Pick a Big Idea',
      description:
        'Choose a complex topic in Physics, Life Sciences, Chemistry, or CS/AI that fascinates you—something you love explaining.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Student sketching scientific diagrams',
    },
    {
      number: '02',
      icon: <Sparkles size={24} color="#6366F1" />,
      title: 'Make a 2-Min Video',
      description:
        'Bring it to life using animations, live demonstrations, or creative storytelling. Keep it clear, engaging, and under 120 seconds.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Video editing software setup',
    },
    {
      number: '03',
      icon: <Send size={24} color="#F59E0B" />,
      title: 'Submit & Get Reviewed',
      description:
        'Upload your entry through our portal. Top videos will be evaluated by university professors, educators, and science communicators.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Student submitting research work digitally',
    },
  ];

  const prizes = [
    {
      icon: <Award size={28} color="#F59E0B" />,
      title: '$30,000 Scholarship',
      sub: 'Directly toward your higher education and university tuition fees',
      highlight: true,
      badge: 'Grand Winner',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <School size={28} color="#06B6D4" />,
      title: '$15,000 School Grant',
      sub: 'To upgrade science equipment, robotics labs, or STEM facilities',
      highlight: false,
      badge: 'School Award',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Globe size={28} color="#6366F1" />,
      title: '$5,000 Teacher Award',
      sub: 'For the inspirational educator who guided and supported your entry',
      highlight: false,
      badge: 'Mentor Award',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section style={styles.wrapper} id="how-it-works">
      {/* ---------------- SECTION 1: HOW IT WORKS ---------------- */}
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabel}>The Process</span>
          <h2 style={styles.sectionTitle}>How To Enter in 3 Steps</h2>
          <p style={styles.sectionDesc}>
            No expensive cameras or studio gear required. What matters most is how clearly and creatively you communicate your idea.
          </p>
        </motion.div>

        <div style={styles.grid3}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={styles.stepCard}
            >
              {/* Card Image Header */}
              <div style={styles.imageWrap}>
                <img src={step.image} alt={step.imageAlt} style={styles.cardImg} />
                <div style={styles.imgOverlay} />
                <span style={styles.stepNumBadge}>{step.number}</span>
              </div>

              <div style={styles.cardContent}>
                <div style={styles.titleRow}>
                  <div style={styles.iconCircle}>{step.icon}</div>
                  <h3 style={styles.cardTitle}>{step.title}</h3>
                </div>
                <p style={styles.cardText}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <div style={styles.divider} />

      {/* ---------------- SECTION 2: PRIZE BREAKDOWN ---------------- */}
      <div style={styles.container} id="prizes">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabelGold}>The Rewards</span>
          <h2 style={styles.sectionTitle}>$50,000 Total Prize Purse</h2>
          <p style={styles.sectionDesc}>
            Winning doesn’t just fund your future—it empowers your teacher and your school’s scientific community too.
          </p>
        </motion.div>

        <div style={styles.grid3}>
          {prizes.map((prize, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={prize.highlight ? styles.prizeCardGold : styles.prizeCard}
            >
              <div style={styles.prizeImageWrap}>
                <img src={prize.image} alt={prize.title} style={styles.prizeImg} />
                <div style={styles.prizeImgOverlay} />
                <span style={prize.highlight ? styles.badgeGold : styles.badgeNormal}>
                  {prize.badge}
                </span>
              </div>

              <div style={styles.prizeContent}>
                <div style={styles.prizeHeaderRow}>
                  <div style={styles.prizeIconWrap}>{prize.icon}</div>
                  <h3 style={styles.prizeAmount}>{prize.title}</h3>
                </div>
                <p style={styles.prizeSub}>{prize.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={styles.banner}
        >
          <div>
            <h4 style={styles.bannerTitle}>Ready to show the world what you know?</h4>
            <p style={styles.bannerText}>Submission is completely free for all global and Dubai participants ages 13–18.</p>
          </div>
          <a href="#submit" style={styles.bannerBtn}>
            Start Submission <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Inline CSS Stylesheet (No Tailwind Required)
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
    marginBottom: '56px',
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
  sectionLabelGold: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#F59E0B',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  stepCard: {
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '18px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrap: {
    position: 'relative',
    height: '160px',
    width: '100%',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #161F33 5%, transparent 100%)',
  },
  stepNumBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(11, 15, 25, 0.75)',
    backdropFilter: 'blur(8px)',
    color: '#06B6D4',
    fontSize: '14px',
    fontWeight: '800',
    fontFamily: 'monospace',
    padding: '4px 10px',
    borderRadius: '8px',
    border: '1px solid rgba(6, 182, 212, 0.3)',
  },
  cardContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '0',
    color: '#FFFFFF',
  },
  cardText: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0',
    lineHeight: '1.6',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    margin: '80px auto',
    maxWidth: '1000px',
  },
  prizeCard: {
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '18px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  prizeCardGold: {
    backgroundColor: '#161F33',
    border: '2px solid #F59E0B',
    boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)',
    borderRadius: '18px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  prizeImageWrap: {
    position: 'relative',
    height: '150px',
    width: '100%',
    overflow: 'hidden',
  },
  prizeImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  prizeImgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #161F33 10%, transparent 100%)',
  },
  badgeGold: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#F59E0B',
    color: '#000000',
    fontSize: '11px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    padding: '4px 10px',
    borderRadius: '6px',
  },
  badgeNormal: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: 'rgba(11, 15, 25, 0.8)',
    backdropFilter: 'blur(8px)',
    color: '#FFFFFF',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    padding: '4px 10px',
    borderRadius: '6px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
  },
  prizeContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  prizeHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  prizeIconWrap: {
    flexShrink: 0,
  },
  prizeAmount: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#FFFFFF',
    margin: '0',
  },
  prizeSub: {
    fontSize: '13px',
    color: '#9CA3AF',
    margin: '0',
    lineHeight: '1.5',
  },
  banner: {
    marginTop: '56px',
    padding: '32px 40px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #161F33 0%, #1E293B 100%)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
  },
  bannerTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 6px 0',
  },
  bannerText: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0',
  },
  bannerBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '15px',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
    boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
    whiteSpace: 'nowrap',
  },
};