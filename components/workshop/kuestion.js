"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ShieldCheck, Banknote, GraduationCap } from 'lucide-react';

const faqCategories = [
  {
    id: "value",
    label: "Value & Outcome",
    icon: <HelpCircle size={18} />,
    questions: [
      { 
        q: "What will my child actually walk away with?", 
        a: "By Day 2, they'll have a completed pitch deck, a working prototype/website, a recorded presentation, and a physical certificate. The project is the real prize." 
      },
      { 
        q: "Will this help with college applications?", 
        a: "Yes. For foreign unis, it's a portfolio piece. For Indian law/business programs, it provides real-world experience. It builds confidence and storytelling." 
      }
    ]
  },
  {
    id: "academics",
    label: "Academics & Exams",
    icon: <GraduationCap size={18} />,
    questions: [
      { 
        q: "Will this affect their school studies?", 
        a: "No. It’s a one-time weekend experience with no ongoing workload or long-term homework." 
      },
      { 
        q: "Does it help with JEE/NEET?", 
        a: "It has no direct rank impact, but it helps with mental clarity, stream selection, and interview confidence[cite: 1]." 
      }
    ]
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const containerStyle = {
    padding: '100px 24px',
    backgroundColor: '#050505',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column' ,
    alignItems: 'center',
  };

  return (
    <section style={containerStyle}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', marginBottom: '60px' }}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ color: '#818cf8', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '12px' }}
        >
          Common Concerns[cite: 1]
        </motion.span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginTop: '10px' }}>
          Answers for Parents
        </h2>
      </div>

      <div style={{ maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {faqCategories.map((cat) => (
          <div key={cat.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#818cf8' }}>
              {cat.icon}
              <span style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '0.1em' }}>{cat.label}</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cat.questions.map((item, idx) => {
                const isId = `${cat.id}-${idx}`;
                const isOpen = openId === isId;
                
                return (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isOpen ? 'rgba(129, 140, 248, 0.4)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button 
                      onClick={() => setOpenId(isOpen ? null : isId)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '600' }}>{item.q}</span>
                      {isOpen ? <Minus size={18} color="#818cf8" /> : <Plus size={18} color="#666" />}
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div style={{ padding: '0 24px 24px 24px', color: '#9ca3af', fontSize: '15px', lineHeight: '1.6' }}>
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Dynamic CTA for specific questions */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        style={{
          marginTop: '60px',
          padding: '24px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.1) 0%, rgba(0,0,0,0) 100%)',
          border: '1px border-dashed rgba(129, 140, 248, 0.3)',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%'
        }}
      >
        <p style={{ margin: 0, color: '#d1d5db', fontSize: '14px' }}>
          Have more questions? Every answer must be true, verifiable, and deliverable.
        </p>
        <button style={{ 
          marginTop: '16px', 
          background: 'none', 
          border: 'none', 
          color: '#818cf8', 
          fontWeight: '700', 
          textDecoration: 'underline',
          cursor: 'pointer' 
        }}>
          Talk to a Counselor
        </button>
      </motion.div>
    </section>
  );
};

export default FAQSection;