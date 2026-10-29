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
      title: "Registration & Onboarding",
      timeline: "28th Oct – 10th Dec",
      badge: "Registration Open",
      checkpoint: "Checkpoint 1: Registration Deadline: 10th Dec (₹2,000 Fee)",
      description:
        "Registration window is open until 10th December for students in Grades 8–12. Form your solo or 3-builder team, select Tech Innovation or Social Impact, complete guardian DPDP consent, and access onboarding toolkits.",
      deliverables: [
        "Solo or Team Registration (Up to 3 builders • Grades 8–12)",
        "Track Confirmation: Tech Innovation or Social Impact",
        "Minor Safeguarding parent/guardian verified DPDP consent",
        "ISIP Portal access & preliminary venture discovery toolkit",
      ],
      mentorFocus: "Cohort Admissions & Pre-Program Onboarding Support",
    },
    {
      num: "02",
      title: "Live Classes (7 Days)",
      timeline: "11th Dec – 20th Dec",
      badge: "7-Days Live Masterclasses",
      checkpoint: "Checkpoint 2: Core Venture Frameworks & Discovery",
      description:
        "7 days of high-impact live masterclasses and interactive clinics led by university faculty from 11th to 20th December. Learn authentic stakeholder discovery, market hypothesis testing, wireframing, and venture feasibility.",
      deliverables: [
        "7 days of live interactive masterclasses with university faculty",
        "Problem discovery & authentic stakeholder validation methodology",
        "Wireframing & system architecture workshops (Figma, Canva & schematics)",
        "Open faculty office hours, live interactive Q&A & clinic sessions",
      ],
      mentorFocus: "Faculty-led problem validation & prototype architecture",
    },
    {
      num: "03",
      title: "Submissions Window",
      timeline: "30th Dec – 7th Jan",
      badge: "Deliverables Window",
      checkpoint: "Checkpoint 3: Pitch Deck & Website / Prototype Submission",
      description:
        "Finalize and submit your venture deliverables during the dedicated submission window. Every team submits their structured 10-slide pitch deck and working website or interactive prototype for independent scoring.",
      deliverables: [
        "10-Slide Investor & Impact Pitch Deck (Problem, Solution, TAM, Unit Economics)",
        "Working Website / Prototype Showcase (Live link, Figma prototype, or Web app)",
        "3-Minute recorded video walkthrough & executive pitch",
        "Dual independent evaluation by Lead Mentor & second reviewer",
      ],
      mentorFocus: "Independent dual-review grading & rubric scoring",
    },
    {
      num: "04",
      title: "Results & Prize Awards",
      timeline: "10th March 2027",
      badge: "Grand Results Declaration",
      checkpoint: "Final Checkpoint: Official Winners & ₹75,000 Cash Pool Allocation",
      description:
        "Official announcement of ISIP Champions, Runner-ups, and Track Winners on 10th March 2027, followed by seed prize pool distribution and induction into the global student builder network.",
      deliverables: [
        "Official leaderboard publication & winner honors announcement",
        "Distribution of ₹75,000 cash seed grant pool (1st: ₹40K, 2nd: ₹25K, 3rd: ₹10K)",
        "Verified credential certificate & admissions portfolio documentation",
        "Incubation and global advisory pathways for top ventures",
      ],
      mentorFocus: "Live announcement by VC & industry judges panel",
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
            <span>Competition Timeline & Milestones</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            From Idea to Prototype & <br />
            <span className="text-[#c5a059] italic font-normal">Grand Prize Results.</span>
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
