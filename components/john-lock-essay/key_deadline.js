'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Upload, Bell, Crown, Calendar, AlertTriangle, ArrowRight } from 'lucide-react';

const CompetitionTimeline = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#020617' }}>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
            className="absolute top-1/2 left-0 w-full h-px"
            style={{ 
                background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
                opacity: 0.3
            }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4" 
               style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
             <Calendar size={14} className="text-slate-400" />
             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">2026 Season Estimates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mark Your <span style={{ color: '#fbbf24' }}>Calendar</span>
          </h2>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10" />

          {/* CARD 1: REGISTRATION */}
          <TimelineCard 
            icon={<UserPlus size={24} color="#fbbf24" />}
            date="May 31"
            title="Registration Closes"
            desc="Official registration deadline. Do not miss this."
            delay={0.1}
          />

          {/* CARD 2: SUBMISSION (Highlighted) */}
          <TimelineCard 
            icon={<Upload size={24} color="#fbbf24" />}
            date="June 30"
            title="Submission Deadline"
            desc="Portal closes. Late submissions accepted until July 21st with £75 fee."
            delay={0.3}
            warning={true}
          />

          {/* CARD 3: SHORTLIST */}
          <TimelineCard 
             icon={<Bell size={24} color="#fbbf24" />}
             date="August 14"
             title="Shortlist Announced"
             desc="Notifications sent via email. Top entries invited to Oxford/London."
             delay={0.5}
          />

          {/* CARD 4: AWARDS */}
          <TimelineCard 
             icon={<Crown size={24} color="#fbbf24" />}
             date="October"
             title="Awards Ceremony"
             desc="Winners announced live in London. The grand finale."
             delay={0.7}
             isLast={true}
          />

        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-500 mt-12 max-w-2xl mx-auto">
          *Dates are projected based on the 2025 cycle. We monitor the John Locke Institute official channels daily and will update enrolled students immediately upon official announcements in April 2026.
        </p>

      </div>
    </section>
  );
};

// --- Sub-Component: Timeline Card ---
const TimelineCard = ({ icon, date, title, desc, delay, warning, isLast }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="relative group"
  >
    {/* Visual Anchor Point on Line */}
    <div className="hidden lg:flex absolute -top-14 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-amber-500 transition-colors z-10" />

    <div 
      className="h-full p-6 rounded-2xl border bg-slate-900/50 backdrop-blur-sm relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.15)]"
      style={{ borderColor: warning ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255, 255, 255, 0.1)' }}
    >
      {/* Date Tag */}
      <div className="inline-block px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 mb-4">
        <span className="text-sm font-bold text-white">{date}</span>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>

      {/* Warning Alert if needed */}
      {warning && (
        <div 
          className="mt-4 flex items-start gap-2 text-xs p-2 rounded-lg border"
          style={{ 
            backgroundColor: 'rgba(76, 5, 25, 0.3)', // Rose-950 with opacity
            borderColor: 'rgba(136, 19, 55, 0.5)',   // Rose-900 with opacity
            color: '#fb7185'                         // Rose-400 (Text Color)
          }}
        >
           <AlertTriangle size={14} className="shrink-0 mt-0.5" />
           <span>Avoid the £75 late fee. Submit early.</span>
        </div>
      )}

      {/* Icon Watermark */}
      <div className="absolute -bottom-4 -right-4 opacity-10 scale-150 group-hover:scale-125 transition-transform duration-500">
        {React.cloneElement(icon, { size: 80 })}
      </div>
      
    </div>
  </motion.div>
);

export default CompetitionTimeline;
