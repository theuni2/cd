'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, PenTool, CheckCircle, BrainCircuit, ChevronDown, Clock, Upload } from 'lucide-react';

// Data Array
const curriculum = [
  {
    id: 1, weeks: "Weeks 1-2", phase: "Research & Inquiry", hours: "10+ Hours",
    icon: <BookOpen size={18} />,
    desc: "Critical thinking begins before any research. We focus on framing debates.",
    tasks: ["Read 10+ high-quality sources.", "Review past winning essays.", "Shortlist 1 question."],
    milestone: "Hidden assumptions identified.",
    skills: ["Interpretation", "Framing"]
  },
  {
    id: 2, weeks: "Weeks 3-4", phase: "Outlining & Draft 1", hours: "3-4 Hours",
    icon: <BrainCircuit size={18} />,
    desc: "Moving from information to argumentation. Building the skeleton.",
    tasks: ["Build detailed outline.", "Write first full draft (2k words).", "Ensure academic style."],
    milestone: "2,000-word rough draft.",
    skills: ["Analysis", "Synthesis"]
  },
  {
    id: 3, weeks: "Weeks 5-6", phase: "The Editor's Eye", hours: "3-5 Hours",
    icon: <PenTool size={18} />,
    desc: "Refining logic and addressing counter-arguments.",
    tasks: ["Revise for structural clarity.", "Strengthen logic chains.", "Format Endnotes."],
    milestone: "Polished draft.",
    skills: ["Logic", "Sequencing"]
  },
  {
    id: 4, weeks: "Week 7", phase: "Final Polish", hours: "1-2 Hours",
    icon: <CheckCircle size={18} />,
    desc: "Precision over verbosity. Final checks against criteria.",
    tasks: ["Check grammar & flow.", "Verify citations.", "Word count check."],
    milestone: "Final PDF ready.",
    skills: ["Precision", "Discipline"]
  },
  {
    id: 5, weeks: "Week 8", phase: "Submission", hours: "Final Step",
    icon: <Upload size={18} />,
    desc: "Ensuring a smooth submission process.",
    tasks: ["Register on portal.", "Select referee.", "Upload final PDF."],
    milestone: "Submission Receipt.",
    skills: ["Professionalism"]
  }
];

const SimpleCurriculum = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="py-24" style={{ backgroundColor: '#020617' }} id="Roadmap">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The 8-Week <span className="text-amber-400">Roadmap</span>
          </h2>
          <p className="text-slate-400">A structured path from blank page to submission.</p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-4">
          {curriculum.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActive(active === item.id ? null : item.id)}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${active === item.id ? 'bg-slate-900 border-amber-500/50' : 'bg-slate-950 border-slate-800 hover:border-slate-700'}`}
            >
              
              {/* Card Header */}
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   {/* Week Badge */}
                   <div className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${active === item.id ? 'bg-amber-500 text-gray-900' : 'bg-gray-800 text-gray-400'}`}>
                     {item.weeks}
                   </div>
                   <h3 className={`text-lg md:text-xl font-bold ${active === item.id ? 'text-white' : 'text-gray-300'}`}>
                     {item.phase}
                   </h3>
                </div>
                <ChevronDown className={`transition-transform duration-300 ${active === item.id ? 'rotate-180 text-amber-400' : 'text-gray-600'}`} />
              </div>

              {/* Expandable Body */}
              <AnimatePresence>
                {active === item.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-slate-800/50">
                       <div className="pt-6 grid md:grid-cols-2 gap-8">
                          
                          {/* Left: Description & Tasks */}
                          <div>
                            <p className="text-gray-300 mb-4 leading-relaxed">{item.desc}</p>
                            <ul className="space-y-2">
                               {item.tasks.map((task, i) => (
                                 <li key={i} className="flex items-start gap-2 text-sm mt-2 text-gray-400">
                                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                   {task}
                                 </li>
                               ))}
                            </ul>
                          </div>

                          {/* Right: Milestones & Stats */}
                          <div className="space-y-4">
                             <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-1">Hours Needed</div>
                                <div className="text-white font-bold flex items-center gap-2">
                                   <Clock size={16} className="text-amber-400" /> {item.hours}
                                </div>
                             </div>
                             
                             <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/30">
                                <div className="text-xs font-bold text-emerald-500 uppercase mb-1">Milestone</div>
                                <div className="text-white font-bold text-sm flex items-center gap-2">
                                   <CheckCircle size={16} className="text-emerald-500" /> {item.milestone}
                                </div>
                             </div>

                             <div className="flex flex-wrap gap-2">
                                {item.skills.map(skill => (
                                  <span key={skill} className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-slate-800 text-slate-400 border border-slate-700">
                                    {skill}
                                  </span>
                                ))}
                             </div>
                          </div>

                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SimpleCurriculum;