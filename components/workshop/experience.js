"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Play, Award } from 'lucide-react';

const steps = [
 
  {
    time: "10:30 AM - Day 1",
    title: "The Framing",
    desc: "Mentor introduction, team formation, and identifying the problem you'll solve.",
    icon: <Users size={20} />,
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
  },
     {
    time: "1:15 PM - Day 1",
    title: "The Build Sprint",
    desc: "Hands-on project work using AI tools and professional frameworks.",
    icon: <Play size={20} />,
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
  },

  {
    time: "3:00 PM - Day 2",
    title: "Demo Day",
    desc: "Final presentations and prototypes presented to a panel and parents.",
    icon: <Award size={20} />,
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
  }
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerStyle = {
    padding: '100px 24px',
    backgroundColor: '#050505',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const contentWrapper = {
    maxWidth: '1200px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    alignItems: 'center',
  };

  return (
    <section style={containerStyle}>
      <div style={{ maxWidth: '1200px', width: '100%', marginBottom: '60px' }}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ color: '#818cf8', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '12px' }}
        >
          Behind the Scenes
        </motion.span>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '10px' }}>
          48 Hours. No Textbooks.
        </h2>
      </div>

      <div style={contentWrapper}>
        {/* Left Side: Timeline Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              style={{
                padding: '24px',
                borderRadius: '20px',
                backgroundColor: activeIndex === idx ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: `1px solid ${activeIndex === idx ? 'rgba(255,255,255,0.1)' : 'transparent'}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  backgroundColor: activeIndex === idx ? '#818cf8' : '#333', 
                  padding: '10px', 
                  borderRadius: '12px',
                  color: '#fff'
                }}>
                  {step.icon}
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#818cf8', fontWeight: '700', marginBottom: '4px' }}>{step.time}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.5' }}>{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Dynamic Image Display */}
        <div style={{ position: 'relative', height: '500px', width: '100%', borderRadius: '32px', overflow: 'hidden' }}>
          {steps.map((step, idx) => (
            <motion.img
              key={idx}
              src={step.img}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: activeIndex === idx ? 1 : 0,
                scale: activeIndex === idx ? 1 : 1.1 
              }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.7)',
              }}
            />
          ))}
          
          {/* Floating Result Tag */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              backgroundColor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              padding: '16px 24px',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <div style={{ fontSize: '10px', color: '#818cf8', fontWeight: '800', textTransform: 'uppercase' }}>Outcome</div>
            <div style={{ fontWeight: '700', marginTop: '4px' }}>Tangible Portfolio Piece</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;