'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Globe, Award, ShieldCheck, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';

const faqs = [
  {
    question: "Who is eligible to submit an entry?",
    answer: "The competition is open to high school students worldwide between the ages of 13 and 18. Entries must be submitted in English or include English subtitles."
  },
  {
    question: "What are the requirements for the video submission?",
    answer: "Videos must be no longer than 2 minutes (120 seconds), uploaded to YouTube or Vimeo as Unlisted or Public, and explain a complex topic in Physics, Life Sciences, or Mathematics using simple language and original visuals."
  },
  {
    question: "Is there an entry fee?",
    answer: "No, participation in the competition is completely free of charge for all students."
  },
  {
    question: "How are the winners judged?",
    answer: "Submissions are evaluated based on three primary criteria: Engagement & Clarity (40%), Scientific Accuracy (30%), and Creativity & Originality (30%). Our panel includes university professors, admissions experts, and science communicators."
  },
  {
    question: "Can I work in a team or must it be an individual entry?",
    answer: "Submissions are individual only. While friends or family can assist as camera operators or background actors, the core idea, script, and main presentation must be led by a single student."
  }
];

export default function FAQAndFooter() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <footer style={styles.wrapper} id="faq">
      
      {/* SECTION 1: FAQ ACCORDION */}
      <div style={styles.faqContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabel}>Help & Support</span>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p style={styles.sectionDesc}>
            Got questions about eligibility, video length, or judging criteria? Everything you need to know is right here.
          </p>
        </motion.div>

        <div style={styles.accordionGroup}>
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div key={index} style={styles.faqCard}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  style={styles.faqButton}
                  aria-expanded={isOpen}
                >
                  <span style={styles.faqQuestion}>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} color="#06B6D4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={styles.faqAnswer}>
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

      <hr style={styles.divider} />

      {/* SECTION 2: FOOTER NAVIGATION & CREDITS */}
      <div style={styles.footerContainer}>
        <div style={styles.footerGrid}>
          
          {/* Brand Info Column */}
          <div style={styles.brandCol}>
            <div style={styles.logoRow}>
              <Award size={24} color="#06B6D4" />
              <span style={styles.brandTitle}>Discovery Prize 2026</span>
            </div>
            <p style={styles.brandText}>
              Empowering the next generation of scientific communicators and innovators worldwide through high-impact, short-form storytelling.
            </p>
            <div style={styles.socialRow}>
              <a href="#twitter" style={styles.socialIcon} aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#youtube" style={styles.socialIcon} aria-label="YouTube"><Youtube size={18} /></a>
              <a href="#linkedin" style={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#instagram" style={styles.socialIcon} aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={styles.colTitle}>Navigation</h4>
            <ul style={styles.linkList}>
              <li><a href="#about" style={styles.link}>About Competition</a></li>
              <li><a href="#rubric" style={styles.link}>Judging Rubric</a></li>
              <li><a href="#prizes" style={styles.link}>Prizes & Grants</a></li>
              <li><a href="#submit" style={styles.link}>Submit Entry</a></li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h4 style={styles.colTitle}>Categories</h4>
            <ul style={styles.linkList}>
              <li><a href="#physics" style={styles.link}>Physics & Astronomy</a></li>
              <li><a href="#lifesciences" style={styles.link}>Life Sciences & Biology</a></li>
              <li><a href="#math" style={styles.link}>Mathematics & Logic</a></li>
              <li><a href="#resources" style={styles.link}>Video Creation Guide</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={styles.colTitle}>Contact & Rules</h4>
            <div style={styles.contactItem}>
              <Mail size={16} color="#06B6D4" />
              <span>support@discoveryprize.org</span>
            </div>
            <div style={styles.contactItem}>
              <Globe size={16} color="#06B6D4" />
              <span>Global Submissions Open</span>
            </div>
            <div style={styles.contactItem}>
              <ShieldCheck size={16} color="#06B6D4" />
              <span>COPPA & Student Privacy Safe</span>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div style={styles.copyrightBar}>
          <p style={styles.copyrightText}>
            © {new Date().getFullYear()} Discovery Prize Challenge. All rights reserved.
          </p>
          <div style={styles.legalLinks}>
            <a href="#privacy" style={styles.legalLink}>Privacy Policy</a>
            <span>•</span>
            <a href="#terms" style={styles.legalLink}>Terms of Service</a>
            <span>•</span>
            <a href="#guidelines" style={styles.legalLink}>Rules & Guidelines</a>
          </div>
        </div>
      </div>

    </footer>
  );
}

// Inline CSS Stylesheet
const styles = {
  wrapper: {
    backgroundColor: '#070A12',
    color: '#F9FAFB',
    paddingTop: '80px',
    paddingBottom: '40px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  },
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
    marginBottom: '80px',
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
  accordionGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  faqCard: {
    backgroundColor: '#111827',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  faqButton: {
    width: '100%',
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'left',
    gap: '16px',
  },
  faqQuestion: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  faqAnswer: {
    padding: '0 24px 20px 24px',
    fontSize: '14px',
    color: '#9CA3AF',
    lineHeight: '1.6',
  },
  divider: {
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderStyle: 'solid',
    borderWidth: '1px 0 0 0',
    margin: '0 0 60px 0',
  },
  footerContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '60px',
  },
  brandCol: {
    gridColumn: 'span 1',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
  },
  brandTitle: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#FFFFFF',
  },
  brandText: {
    fontSize: '14px',
    color: '#9CA3AF',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  socialRow: {
    display: 'flex',
    gap: '12px',
  },
  socialIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9CA3AF',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
  colTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '16px',
  },
  linkList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    fontSize: '14px',
    color: '#9CA3AF',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#9CA3AF',
    marginBottom: '12px',
  },
  copyrightBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  },
  copyrightText: {
    fontSize: '13px',
    color: '#6B7280',
    margin: '0',
  },
  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '13px',
    color: '#6B7280',
  },
  legalLink: {
    color: '#6B7280',
    textDecoration: 'none',
  },
};