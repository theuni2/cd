"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Users,
  Compass,
  Layers,
  Flame,
  GraduationCap
} from "lucide-react";

export default function ProgramCalendarSection() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      num: "01",
      title: "Ideation & Foundation",
      timeline: "Weeks 1–2 • May 2027",
      badge: "Venture Build Phase",
      checkpoint: "Checkpoint 1: Idea Brief (20% of Qualifier Score)",
      description:
        "Isolate an authentic pain point by interviewing real stakeholders. Frame your hypothesis, analyze competitors, and submit your 1-page structured Idea Brief.",
      deliverables: [
        "Problem discovery logs with 5–10 real stakeholder conversations",
        "1-page structured Idea Brief defining market gap and persona",
        "Instant formative AI rubric evaluation with 3-point fix list",
        "Weekly live faculty masterclass & open office hours",
      ],
      mentorFocus: "Faculty-led problem framing & user discovery methodology",
    },
    {
      num: "02",
      title: "Execution & Marketing",
      timeline: "Weeks 3–6 • June 2027",
      badge: "Top 100 Qualifier Gate",
      checkpoint: "Checkpoint 2 & 3: Solution Framework & Go-To-Market Pitch Deck (80% of Score)",
      description:
        "Translate your concept into an execution blueprint and marketing engine. Build interactive Figma/Canva wireframes, map customer acquisition channels and unit economics, and submit your final 10-slide pitch deck.",
      deliverables: [
        "Solution Framework & prototype mockup (Figma, Canva, or system schematic)",
        "Go-To-Market strategy, distribution roadmap & customer acquisition channels",
        "Feasibility stress-test: unit economics, pricing models, and risk matrix",
        "Final 10-slide pitch deck & 3-minute video pitch submission",
      ],
      mentorFocus: "Dual independent grading by Lead Mentor + Second Reviewer",
    },
    {
      num: "03",
      title: "Accelerator & Presentation",
      timeline: "Weeks 7–8 • Late June 2027",
      badge: "Championship Stage",
      checkpoint: "Top 100 Semi-Finals ➔ Top 20 Finalist Prep ➔ Live Grand Demo Day",
      description:
        "The highest-performing teams enter dedicated presentation clinics. The Top 20 rehearse with US & UK global mentors, culminating in the live virtual showcase before VC & industry judges.",
      deliverables: [
        "Top 100: Dedicated 30-min 1:1 pitch & presentation clinic with Lead Faculty",
        "Top 20: Exclusive masterclass with US/UK/Singapore venture leaders",
        "Full dress rehearsal & presentation polish with industry mentors",
        "Grand Demo Day: Live pitches before 5–7 judges for ₹75,000 cash pool",
      ],
      mentorFocus: "Live judging panel of venture capitalists & industry experts",
    },
  ];

  return (
    <section id="calendar" className="relative py-28 bg-[#07101E] text-white border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c5a059]/5 blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>The 8-Week Builder Journey</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            From First Idea to <br />
            <span className="text-[#c5a059] italic font-normal">Live Global Demo Day.</span>
          </h2>

          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4" />
        </div>

        {/* FORGE-Style Side-by-Side Interactive Phase Roadmap */}
        <div className="flex flex-col lg:flex-row rounded-3xl bg-[#0a192f]/80 border border-[#c5a059]/30 shadow-2xl overflow-hidden min-h-[520px] backdrop-blur-xl">
          
          {/* Left Column: Phase Selector (Navy Blue, 38% width) */}
          <div className="w-full lg:w-[38%] bg-[#050B14]/90 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-6 pb-3 border-b border-white/10">
                Strategic Roadmap Phases
              </span>

              <div className="flex flex-col gap-3">
                {phases.map((phase, idx) => {
                  const isActive = activePhase === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePhase(idx)}
                      className={`text-left p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                        isActive
                          ? "bg-[#0a192f] border-[#c5a059] shadow-lg shadow-black/40 scale-[1.02]"
                          : "bg-transparent border-white/5 hover:border-white/15 hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-mono font-bold tracking-wider ${isActive ? "text-[#c5a059]" : "text-slate-500"}`}>
                          PHASE {phase.num}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {phase.timeline.split("•")[0].trim()}
                        </span>
                      </div>
                      <h4 className={`text-base font-serif-luxury font-bold transition-colors ${isActive ? "text-white" : "text-slate-300"}`}>
                        {phase.title}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#c5a059]" />
                University Faculty Mentors
              </span>
              <span className="font-mono text-[#c5a059]">0% Equity</span>
            </div>
          </div>

          {/* Right Column: Active Phase Detail with Fade Animation */}
          <div className="w-full lg:w-[62%] p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0a192f]/60 to-[#07101E]/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Header Tag & Title */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold bg-[#c5a059]/15 px-3 py-1 rounded-full border border-[#c5a059]/30">
                      {phases[activePhase].badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {phases[activePhase].timeline}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-3">
                    {phases[activePhase].title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-light mt-3 leading-relaxed">
                    {phases[activePhase].description}
                  </p>
                </div>

                {/* Milestone Checklist */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider text-[#c5a059] font-bold block">
                    Core Milestone Deliverables:
                  </span>
                  {phases[activePhase].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Graded Checkpoint Box */}
                <div className="p-4 rounded-xl bg-[#050B14]/80 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      Grading & Evaluation
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {phases[activePhase].checkpoint}
                    </span>
                  </div>
                  <Trophy className="w-5 h-5 text-[#c5a059] shrink-0" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
