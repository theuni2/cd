'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  PenTool, 
  Handshake, 
  PlayCircle, 
  ClipboardCheck, 
  Users, 
  Globe, 
  BarChart, 
  Flag, 
  GraduationCap 
} from 'lucide-react';

const LiteracyTimeline = () => {
  const [openPhase, setOpenPhase] = useState(0);

  const togglePhase = (index) => {
    setOpenPhase(openPhase === index ? null : index);
  };

  const phases = [
    {
      title: "Module 1: Foundation",
      subtitle: "Weeks 1–3 • The Blueprint",
      color: "#fbbf24", // Amber
      weeks: [
        { week: "Week 1", title: "Problem Spike & Mission", icon: <Search size={18} />, desc: "Identify gaps (e.g., Grade 4 reading). Define mission ('Support 30 students'). Map clear metrics." },
        { week: "Week 2", title: "Curriculum Design", icon: <PenTool size={18} />, desc: "Create repeatable lesson plans (Warm-up → Activity → Reflection). Draft teacher manual. Prepare pilot lesson." },
        { week: "Week 3", title: "Partnerships & Perms", icon: <Handshake size={18} />, desc: "Seek permissions from school/NGO. Confirm logistics (time, space, resources). Get 1 formal partner." }
      ]
    },
    {
      title: "Module 2: Execution",
      subtitle: "Weeks 4–7 • Teaching & Growth",
      color: "#fcd34d", // Light Amber
      weeks: [
        { week: "Week 4", title: "Pilot Cycle", icon: <PlayCircle size={18} />, desc: "Run first session with 10-20 students. Use simple diagnostics. Capture basic feedback/stories." },
        { week: "Week 5", title: "Routine & Docs", icon: <ClipboardCheck size={18} />, desc: "Establish weekly schedule. Track attendance/hours. Invite peers to shadow/co-teach." },
        { week: "Week 6", title: "Scale & Showcase", icon: <Users size={18} />, desc: "Add a small group/section. Run a mini showcase (reading circle/quiz). Collect video testimonials." },
        { week: "Week 7", title: "Visibility Push", icon: <Globe size={18} />, desc: "Build portfolio website. Share updates via newsletter/LinkedIn. Set up micro-fundraiser if needed." }
      ]
    },
    {
      title: "Module 3: Graduation",
      subtitle: "Weeks 8–12 • Impact & Legacy",
      color: "#bef264", // Lime (for variety/success)
      weeks: [
        { week: "Week 8", title: "Impact Report", icon: <BarChart size={18} />, desc: "Summarise learners, hours, and improvements. Create a 2-3 page impact report + slide deck." },
        { week: "Week 9", title: "Handover Plan", icon: <Flag size={18} />, desc: "Define roles (Founder, Curriculum Lead). Document processes for juniors to take over next year." },
        { week: "Weeks 10-12", title: "College Positioning", icon: <GraduationCap size={18} />, desc: "Request partner letters. Craft the 'Personal Narrative' essay (500-650 words). Identify awards." }
      ]
    }
  ];

  return (
    // SAFE MODE: Hardcoded Deep Indigo Background
    <section 
      className="relative py-24 px-6 font-sans overflow-hidden"
      style={{ backgroundColor: '#172554' }} id ="curriculum"
    >
      {/* Background: Abstract Lines (Notebook Paper) */}
      {/* <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
             backgroundSize: '100% 30px'
           }} 
      /> */}

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(251, 191, 36, 0.1)', 
              borderColor: 'rgba(251, 191, 36, 0.3)',
              color: '#fcd34d'
            }}
          >
            <span className="text-xs font-bold uppercase tracking-widest">12-Week Syllabus</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The Semester Plan.
          </motion.h2>
          <p className="text-gray-200 max-w-lg mx-auto">
            A structured academic roadmap to launch your teaching initiative.
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
                backgroundColor: openPhase === index ? 'rgba(30, 58, 138, 0.6)' : 'rgba(30, 58, 138, 0.2)',
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
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 shrink-0 font-serif shadow-lg"
                    style={{ 
                      backgroundColor: openPhase === index ? phase.color : 'transparent', 
                      borderColor: phase.color,
                      color: openPhase === index ? '#172554' : phase.color,
                    }}
                  >
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Titles */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm font-medium opacity-70" style={{ color: openPhase === index ? phase.color : '#c7d2fe' }}>
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div 
                  className="transition-transform duration-300 text-indigo-300 group-hover:text-white"
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
                               <p className="text-sm text-gray-200 leading-relaxed">
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

        {/* --- FINAL REPORT CARD (Impact Summary) --- */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative rounded-2xl p-8 border overflow-hidden"
           style={{ 
             backgroundColor: 'rgba(30, 58, 138, 0.4)', 
             borderColor: 'rgba(251, 191, 36, 0.3)' 
           }}
        >
          {/* Background Highlight */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">The Final Report Card</h3>
              <p className="text-gray-200 text-sm max-w-md">
                Tangible metrics that prove your leadership to colleges.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
               <ReportBadge label="Learners" value="30+" color="#fbbf24" />
               <ReportBadge label="Hours Taught" value="50+" color="#fcd34d" />
               <ReportBadge label="Peer Tutors" value="5+" color="#bef264" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- Sub-Component: Report Badge ---
const ReportBadge = ({ label, value, color }) => (
  <div className="px-5 py-3 rounded-xl border bg-indigo-950/50 text-center min-w-[100px]"
       style={{ borderColor: `${color}40` }}>
    <div className="text-2xl font-bold mb-1" style={{ color: color }}>{value}</div>
    <div className="text-[10px] uppercase font-bold text-gray-300 tracking-wider">{label}</div>
  </div>
);

export default LiteracyTimeline;