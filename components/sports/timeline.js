'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Target, 
  ClipboardList, 
  Handshake, 
  Play, 
  Globe, 
  Video, 
  TrendingUp, 
  Trophy, 
  Mic, 
  Timer 
} from 'lucide-react';

const SportsGamePlan = () => {
  const [openPhase, setOpenPhase] = useState(0);

  const togglePhase = (index) => {
    setOpenPhase(openPhase === index ? null : index);
  };

  const phases = [
    {
      title: "Phase 1: The Pre-Season",
      subtitle: "Weeks 1–3 • Foundation & Strategy",
      color: "#f97316", // Orange
      weeks: [
        { week: "Week 1", title: "Scouting & Mission", icon: <Target size={18} />, desc: "Identify gaps (e.g., lack of tournaments). Craft mission ('3 tournaments in 3 months'). Design logo & launch basic site." },
        { week: "Week 2", title: "Playbook Design", icon: <ClipboardList size={18} />, desc: "Build 'See → Do → Reflect' curriculum. Create 'Sports Basics 101' decks & volunteer manuals." },
        { week: "Week 3", title: "Team Recruitment", icon: <Handshake size={18} />, desc: "Pitch schools/academies. Draft scalability playbook. Secure 1-2 MOUs or letters of support." }
      ]
    },
    {
      title: "Phase 2: Game Time",
      subtitle: "Weeks 4–7 • Execution & Momentum",
      color: "#fbbf24", // Amber
      weeks: [
        { week: "Week 4", title: "Kickoff Workshop", icon: <Play size={18} />, desc: "Run pilot workshop (20 students). Conduct mini-tournament or skills challenge. Collect testimonials." },
        { week: "Week 5", title: "Digital Offense", icon: <Globe size={18} />, desc: "Launch full website. Start 'Career in Sports' social content. Optimize LinkedIn profile as 'Founder'." },
        { week: "Week 6", title: "Expansion", icon: <Video size={18} />, desc: "Expand to 2nd school/ground. Film interviews with coaches/athletes. Upload to YouTube." },
        { week: "Week 7", title: "The Big Play", icon: <TrendingUp size={18} />, desc: "Launch fundraising (Goal: ₹50K). Pitch local press for a feature story. Host flagship sports day." }
      ]
    },
    {
      title: "Phase 3: The Championship",
      subtitle: "Weeks 8–12 • Stats & Glory",
      color: "#38bdf8", // Sky Blue
      weeks: [
        { week: "Week 8", title: "Stats Analysis", icon: <Trophy size={18} />, desc: "Build Impact Dashboard (Athletes reached, Funds raised). Map project to Sports/Leadership awards." },
        { week: "Week 9", title: "Trophy Ceremony", icon: <Mic size={18} />, desc: "Host Launch/Impact Showcase. Deliver keynote on results & Year 2 roadmap. Introduce 'Management Tracks'." },
        { week: "Weeks 10-12", title: "Post-Season", icon: <Timer size={18} />, desc: "Buffer for academic clashes. Finalise award submissions. Refine playbook for handoff." }
      ]
    }
  ];

  return (
    // SAFE MODE: Hardcoded Dark Blue Background
    <section 
      className="relative py-24 px-6 font-sans overflow-hidden"
      style={{ backgroundColor: '#0f172a' }} id="details"
    >
      {/* Background: Tactical Board Dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }} 
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(249, 115, 22, 0.1)', 
              borderColor: 'rgba(249, 115, 22, 0.3)',
              color: '#fdba74'
            }}
          >
            <span className="text-xs font-bold uppercase tracking-widest">12-Week Strategy</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The Game Plan.
          </motion.h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            From "Just an Idea" to "League Founder" in 3 months.
          </p>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4 mb-20">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: openPhase === index ? 'rgba(15, 23, 42, 0.8)' : 'rgba(30, 41, 59, 0.3)',
                borderColor: openPhase === index ? phase.color : 'rgba(255,255,255,0.1)'
              }}
            >
              {/* Header */}
              <button
                onClick={() => togglePhase(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-5">
                  {/* Phase Number Box */}
                  <div 
                    className="w-14 h-14 rounded-lg flex flex-col items-center justify-center border shrink-0 font-mono shadow-lg"
                    style={{ 
                      backgroundColor: openPhase === index ? phase.color : 'transparent', 
                      borderColor: phase.color,
                      color: openPhase === index ? '#0f172a' : phase.color,
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase opacity-80 leading-none mb-1">QTR</span>
                    <span className="text-2xl font-bold leading-none">{index + 1}</span>
                  </div>
                  
                  {/* Titles */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm font-medium opacity-70" style={{ color: openPhase === index ? phase.color : '#94a3b8' }}>
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div 
                  className="transition-transform duration-300 text-white/50 group-hover:text-white"
                  style={{ transform: openPhase === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown size={24} />
                </div>
              </button>

              {/* Content */}
              <AnimatePresence>
                {openPhase === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-8 border-t border-white/5">
                      <div className="grid gap-3 pt-6">
                        {phase.weeks.map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/5"
                          >
                             <div className="mt-1 flex-shrink-0" style={{ color: phase.color }}>
                               {item.icon}
                             </div>
                             <div>
                               <div className="flex items-center gap-2 mb-1">
                                 <span className="text-xs font-bold uppercase tracking-wider opacity-80" style={{ color: phase.color }}>
                                   {item.week}
                                 </span>
                                 <span className="w-1 h-1 rounded-full bg-white/20" />
                                 <h4 className="text-white font-bold text-sm">
                                   {item.title}
                                 </h4>
                               </div>
                               <p className="text-sm text-gray-400 leading-relaxed">
                                 {item.desc}
                               </p>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* --- FINAL SCOREBOARD (Measurable Outcomes) --- */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative rounded-2xl p-8 border overflow-hidden"
           style={{ 
             backgroundColor: 'rgba(30, 41, 59, 0.5)', 
             borderColor: 'rgba(255,255,255,0.1)' 
           }}
        >
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Measurable Epic Outcomes</h3>
              <p className="text-gray-400 text-sm max-w-md">
                By the final whistle, you will have built a scale-ready model that continues without you.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
               <ScoreBadge label="Students Reached" value="100+" color="#f97316" />
               <ScoreBadge label="Funds Raised" value="₹50K+" color="#fbbf24" />
               <ScoreBadge label="Tournaments" value="3-4" color="#38bdf8" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- Sub-Component: Score Badge ---
const ScoreBadge = ({ label, value, color }) => (
  <div className="px-5 py-3 rounded-xl border bg-black/20 text-center min-w-[100px]"
       style={{ borderColor: `${color}40` }}>
    <div className="text-2xl font-black mb-1" style={{ color: color }}>{value}</div>
    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{label}</div>
  </div>
);

export default SportsGamePlan;