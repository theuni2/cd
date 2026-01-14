'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  Lightbulb, 
  Zap, 
  Rocket, 
  TrendingUp, 
  FileText 
} from 'lucide-react';

const StartupTimeline = () => {
  const [openPhase, setOpenPhase] = useState(0);

  const togglePhase = (index) => {
    setOpenPhase(openPhase === index ? null : index);
  };

  const phases = [
    {
      title: "Phase 1: Discovery",
      subtitle: "Weeks 1–2 • Mindset & Problem Hunt",
      color: "#22d3ee", // Cyan
      weeks: [
        { 
          week: "Week 1", 
          title: "The Founder Mindset", 
          desc: "Explore entrepreneurship. Write your 'Founder Story' based on personal strengths. Identify problems worth solving." 
        },
        { 
          week: "Week 2", 
          title: "Customer Discovery", 
          desc: "Shortlist 2-3 problem areas (e.g., climate, learning gaps). Map stakeholders and conduct 2-3 'customer discovery' interviews." 
        }
      ]
    },
    {
      title: "Phase 2: Definition",
      subtitle: "Weeks 3–4 • Idea & Business Model",
      color: "#818cf8", // Indigo
      weeks: [
        { 
          week: "Week 3", 
          title: "Idea Crystallization", 
          desc: "Turn interview insights into 2-3 concrete business ideas. Select one to move forward using the 'Problem-Solution-Benefit' framework." 
        },
        { 
          week: "Week 4", 
          title: "The Business Model", 
          desc: "Draft a one-page business model. Define customers, offering, and pricing (e.g., ₹500/workshop). Set 8-week revenue/user goals." 
        }
      ]
    },
    {
      title: "Phase 3: Validation",
      subtitle: "Weeks 5–6 • Brand & Prototype",
      color: "#c084fc", // Purple
      weeks: [
        { 
          week: "Week 5", 
          title: "Digital Presence", 
          desc: "Choose a name and logo. Launch a minimal online presence (Landing page, Instagram, or Notion hub) with your one-line pitch." 
        },
        { 
          week: "Week 6", 
          title: "The Pilot Test", 
          desc: "Design a simple prototype (service trial or no-code product). Recruit 2-5 pilot users to test it and collect raw feedback." 
        }
      ]
    },
    {
      title: "Phase 4: Launch",
      subtitle: "Weeks 7–8 • First Customers",
      color: "#f472b6", // Pink
      weeks: [
        { 
          week: "Week 7", 
          title: "Offer Refinement", 
          desc: "Adjust the idea based on pilot data. Define the core offer (what is included vs. excluded) and prepare sales scripts." 
        },
        { 
          week: "Week 8", 
          title: "Soft Launch", 
          desc: "Announce to your network. Aim for the first 3-5 paying customers. Track everything in a simple sales sheet." 
        }
      ]
    },
    {
      title: "Phase 5: Growth",
      subtitle: "Weeks 9–10 • Storytelling & Pitch",
      color: "#34d399", // Emerald
      weeks: [
        { 
          week: "Week 9", 
          title: "Growth Experiments", 
          desc: "Execute one collaboration (school club/NGO). Post 2-3 pieces of content weekly showcasing user stories and outcomes." 
        },
        { 
          week: "Week 10", 
          title: "Demo Day", 
          desc: "Build a 5-8 slide pitch deck (Problem, Solution, Traction). Deliver a 3-minute pitch to a panel or mentors." 
        }
      ]
    },
    {
      title: "Phase 6: Legacy",
      subtitle: "Weeks 11–12 • Documentation",
      color: "#fbbf24", // Amber
      weeks: [
        { 
          week: "Week 11", 
          title: "The Portfolio Asset", 
          desc: "Document the journey: numbers, wins, and failures. Convert this into a LinkedIn project entry and college essay narrative." 
        },
        { 
          week: "Week 12", 
          title: "Future Roadmap", 
          desc: "Decide the path forward: Grow (Year 2), Sustain (Side Project), or Park. Outline team roles needed for the next phase." 
        }
      ]
    }
  ];

  return (
    // SAFE MODE: Hardcoded Midnight Slate Background
    <section 
      className="relative py-24 px-6 font-sans overflow-hidden"
      style={{ backgroundColor: '#020617' }} id='curriculum'
    >
      
      {/* Background Decor: Tech Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
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
              backgroundColor: 'rgba(6, 182, 212, 0.1)', 
              borderColor: 'rgba(6, 182, 212, 0.3)',
              color: '#22d3ee'
            }}
          >
            <span className="text-xs font-bold uppercase tracking-widest">10-12 Week Curriculum</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The Launch Trajectory.
          </motion.h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            From "Founder Story" to "First Revenue" in one semester.
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
                backgroundColor: openPhase === index ? 'rgba(30, 41, 59, 0.6)' : 'rgba(15, 23, 42, 0.4)',
                borderColor: openPhase === index ? phase.color : 'rgba(255,255,255,0.05)'
              }}
            >
              {/* Header */}
              <button
                onClick={() => togglePhase(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-5">
                  {/* Icon Box */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center border shrink-0 shadow-lg transition-transform group-hover:scale-110"
                    style={{ 
                      backgroundColor: openPhase === index ? phase.color : 'transparent', 
                      borderColor: phase.color,
                      color: openPhase === index ? '#020617' : phase.color,
                    }}
                  >
                    {index === 0 && <Search size={20} />}
                    {index === 1 && <Lightbulb size={20} />}
                    {index === 2 && <Zap size={20} />}
                    {index === 3 && <Rocket size={20} />}
                    {index === 4 && <TrendingUp size={20} />}
                    {index === 5 && <FileText size={20} />}
                  </div>
                  
                  {/* Titles */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm font-medium opacity-70" style={{ color: openPhase === index ? phase.color : '#94a3b8' }}>
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div 
                  className="transition-transform duration-300 text-slate-500 group-hover:text-white"
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
                      <div className="grid gap-4 pt-6">
                        {phase.weeks.map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start gap-4 p-5 rounded-xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/5"
                          >
                             {/* Week Marker */}
                             <div className="mt-1 flex-shrink-0">
                               <span 
                                 className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border"
                                 style={{ 
                                   color: phase.color, 
                                   borderColor: `${phase.color}40`,
                                   backgroundColor: `${phase.color}10`
                                 }}
                               >
                                 {item.week}
                               </span>
                             </div>
                             
                             {/* Text Content */}
                             <div>
                               <h4 className="text-white font-bold text-lg mb-2">
                                 {item.title}
                               </h4>
                               {/* REQUESTED COLOR APPLIED HERE: text-gray-200 */}
                               <p className="text-gray-200 leading-relaxed text-sm">
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

      </div>
    </section>
  );
};

export default StartupTimeline;