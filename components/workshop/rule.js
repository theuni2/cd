

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const rules = [
  {
    id: "01",
    title: "Producable Outcomes",
    desc: "We don't do 'theory.' Every workshop is designed to produce a tangible result—like a 6-slide pitch deck or a working AI prototype—within 8–9 hours.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    icon: <Target size={22} />,
    color: "#3b82f6"
  },
  {
    id: "02",
    title: "The 'Stage' Moment",
    desc: "Every student ends Day 2 with a presentation. This 'brand moment' builds immense confidence and storytelling skills.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    icon: <Zap size={22} />,
    color: "#fbbf24"
  },
  {
    id: "03",
    title: "Industry Credibility",
    desc: "Mentors are practicing advocates, founders, and industry pros with legible real-world credentials.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    icon: <ShieldCheck size={22} />,
    color: "#10b981"
  },
  {
    id: "04",
    title: "Zero Friction Tools",
    desc: "We use professional, near-free tools like Canva and ChatGPT. No expensive software barriers—just pure creation.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <CheckCircle2 size={22} />,
    color: "#f472b6"
  }
];

const ImprovedPhilosophy = () => {
  const outerWrapper = {
    width: '100%',
    backgroundColor: '#050505',
    display: 'flex',
    justifyContent: 'center',
    padding: '120px 0',
  };

  const innerContainer = {
    width: '90%',
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
  };

  const gridStyle = {
    display: 'grid',
    // Ensures a responsive grid that fills the space correctly
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '64px',
    width: '100%'
  };

  return (
    <section style={outerWrapper}>
      <div style={innerContainer}>
        <div style={{ textAlign: 'left', maxWidth: '800px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ 
              color: '#3b82f6', 
              fontWeight: '800', 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase', 
              fontSize: '11px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div style={{ width: '32px', height: '1px', backgroundColor: '#3b82f6' }} />
            The Workshop DNA
          </motion.div>
          
          <h2 style={{ 
            color: '#fff',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: '900', 
            lineHeight: '1.1', 
            letterSpacing: '-0.04em',
            margin: 0
          }}>
            What Makes <br /> 
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>This Work?</span>
          </h2>
        </div>

        <div style={gridStyle}>
          {rules.map((rule, idx) => (
            <RuleCard key={idx} rule={rule} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RuleCard = ({ rule, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        height: '480px',
        borderRadius: '28px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a0a0a',
        border: `1px solid ${isHovered ? rule.color : 'rgba(255,255,255,0.1)'}`,
        transition: 'all 0.4s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 20px 40px -15px ${rule.color}44` : 'none',
      }}
    >
      {/* Background with Darker Gradient for Readability */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img 
          src={rule.img} 
          alt={rule.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: isHovered ? 0.35 : 0.15,
            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'all 0.6s ease'
          }} 
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, transparent 30%, #050505 95%)' 
        }} />
      </div>

      {/* Content */}
      <div style={{ 
        position: 'relative', 
        height: '100%', 
        padding: '36px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end',
        zIndex: 2
      }}>
        <div style={{ 
          width: '44px', 
          height: '44px', 
          borderRadius: '12px', 
          backgroundColor: rule.color, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '20px',
          color: '#000'
        }}>
          {rule.icon}
        </div>

        <h3 style={{ 
          fontSize: '26px', 
          fontWeight: '800', 
          color: '#fff',
          marginBottom: '12px', 
          letterSpacing: '-0.02em',
          margin: '0 0 12px 0'
        }}>
          {rule.title}
        </h3>

        <p style={{ 
          fontSize: '14px', 
          color: '#9ca3af', 
          lineHeight: '1.6', 
          margin: 0,
          opacity: isHovered ? 1 : 0.8,
        }}>
          {rule.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default ImprovedPhilosophy;