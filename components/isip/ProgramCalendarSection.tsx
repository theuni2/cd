"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  Bot,
  Users2,
  CheckCircle2,
  Flag,
  Trophy,
  Sparkles,
  ArrowRight,
  FileText,
  Layers,
  HelpCircle
} from "lucide-react";

export default function ProgramCalendarSection() {
  const [filterPhase, setFilterPhase] = useState<"all" | "build" | "accelerator" | "final">("all");

  const weeks = [
    {
      week: 1,
      phase: "build",
      phaseLabel: "Venture Build (All Teams)",
      theme: "Find a Real Problem",
      checkpoint: null,
      deliverable: "Problem statement draft & 5–10 logged user discovery conversations",
      description:
        "Isolate an authentic pain point. Interview real people impacted by the issue instead of assuming needs. Frame a specific problem statement with quantifiable urgency.",
      weight: null,
      milestoneBadge: "Orientation & Discovery",
      isLiveSession: true,
    },
    {
      week: 2,
      phase: "build",
      phaseLabel: "Venture Build (All Teams)",
      theme: "Understand Users & Market",
      checkpoint: "Checkpoint 1: Idea Brief",
      deliverable: "1-Page Structured Idea Brief",
      description:
        "Synthesize user insights, customer persona, market scope, and why existing alternatives fail. Scored by AI and spot-checked by lead faculty.",
      weight: "20% of Top 100 Score",
      milestoneBadge: "Graded Milestone",
      isLiveSession: true,
    },
    {
      week: 3,
      phase: "build",
      phaseLabel: "Venture Build (All Teams)",
      theme: "Design the Solution",
      checkpoint: null,
      deliverable: "Value proposition map & architectural solution sketch",
      description:
        "Draft the unique value proposition and user journey. Map out step-by-step how the solution creates measurable value for the target demographic.",
      weight: null,
      milestoneBadge: "Solution Design",
      isLiveSession: true,
    },
    {
      week: 4,
      phase: "build",
      phaseLabel: "Venture Build (All Teams)",
      theme: "Build the Solution Framework",
      checkpoint: "Checkpoint 2: Solution Framework",
      deliverable: "Solution Framework, user workflow, and interactive mockup / plan",
      description:
        "Detailed architecture showing how it works and who it serves. No coding required: interactive Figma screens, Canva mockups, or blueprint schematics. Eligible for 1 resubmission within 72 hrs.",
      weight: "30% of Top 100 Score",
      milestoneBadge: "Resubmission Allowed",
      isLiveSession: true,
    },
    {
      week: 5,
      phase: "build",
      phaseLabel: "Venture Build (All Teams)",
      theme: "Check Feasibility & Stress-Test",
      checkpoint: null,
      deliverable: "Unit economics, resource map, risk matrix & ≥5 user testing logs",
      description:
        "Stress-test costs, technology dependencies, regulatory or logistical friction. Collect critique from at least 5 potential users on the Week 4 mockup.",
      weight: null,
      milestoneBadge: "Feasibility Review",
      isLiveSession: true,
    },
    {
      week: 6,
      phase: "build",
      phaseLabel: "Venture Build (All Teams)",
      theme: "Revenue / Sustainability & The Pitch",
      checkpoint: "Checkpoint 3: Final Submission",
      deliverable: "Financial model, 10-slide pitch deck & 3-minute video pitch",
      description:
        "Complete submission for the Top 100 cut. Tech models define monetization; Social Impact models define funding and circular sustainability. Scored independently by Lead Mentor + Second Reviewer.",
      weight: "50% of Top 100 Score",
      milestoneBadge: "Top 100 Qualifier",
      isLiveSession: true,
    },
    {
      week: 7,
      phase: "accelerator",
      phaseLabel: "Top 100 Accelerator",
      theme: "Top 100 Accelerator & Semi-Finals",
      checkpoint: "Semi-Final Pitch Round",
      deliverable: "30-min 1:1 Lead Mentor Coaching + Live Online Semi-Final Pitch",
      description:
        "The best 100 teams (~50 per track) advance. Receive direct 1:1 mentorship with faculty, group pitch clinics, polished decks, and live online pitch before judge rooms to decide the Top 20.",
      weight: "Judged Fresh for Top 20",
      milestoneBadge: "1:1 Faculty Mentorship",
      isLiveSession: true,
    },
    {
      week: 8,
      phase: "accelerator",
      phaseLabel: "Top 20 Finalist Prep",
      theme: "Global Mentorship & Rehearsals",
      checkpoint: "Finalist Prep",
      deliverable: "Masterclass with Global Mentors + Full Faculty Dress Rehearsal",
      description:
        "The Top 20 finalists (~10 per track) prepare for global demo day. Exclusive session with US/UK/Singapore diaspora founders and faculty, plus intensive rehearsal clinics.",
      weight: "Finalist Polish",
      milestoneBadge: "Global Mentors",
      isLiveSession: true,
    },
    {
      week: 9,
      phase: "final",
      phaseLabel: "Global Demo Day",
      theme: "Global Demo Day & Awards Ceremony",
      checkpoint: "Grand Final Panel",
      deliverable: "3-minute live pitch + 2-minute Q&A before 5–7 VC & academic judges",
      description:
        "The Top 20 pitch live to an esteemed panel of venture capitalists, angel investors, and senior university faculty. Streamed live to parents and schools. Top 3 crowned with $8,500 in seed prizes.",
      weight: "Top 3 Cash Awards ($8,500)",
      milestoneBadge: "Grand Finale",
      isLiveSession: true,
    },
  ];

  const filteredWeeks = weeks.filter((w) => {
    if (filterPhase === "all") return true;
    if (filterPhase === "build") return w.phase === "build";
    if (filterPhase === "accelerator") return w.phase === "accelerator";
    if (filterPhase === "final") return w.phase === "final";
    return true;
  });

  return (
    <section id="calendar" className="relative py-24 bg-[#070a14] text-white border-t border-slate-900 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>9-Week Venture Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Program Calendar & Milestones
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Weeks 1–6 are for everyone to learn, interview users, and build their venture framework. Weeks 7–9 narrow the field to the Top 100, Top 20, and Top 3 winners.
          </p>
        </div>

        {/* Weekly Rhythm Banner (Crucial design element from document) */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-slate-900/90 via-blue-950/30 to-slate-900/90 border border-slate-800 p-6 sm:p-7 backdrop-blur-xl">
          <div className="text-xs uppercase tracking-wider font-mono text-cyan-400 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>The Weekly Rhythm for All Students (Weeks 1–6)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                <Video className="w-4 h-4 text-cyan-400" />
                <span>60-Min Live Masterclass</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                Taught by track lead faculty; unpacks that week's framework with live case studies. All recorded.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                <Users2 className="w-4 h-4 text-emerald-400" />
                <span>60-Min Live Office Hours</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                Track-specific Q&A sessions to unblock deliverables and get live faculty feedback before submission.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                <Bot className="w-4 h-4 text-purple-400" />
                <span>24/7 AI Rubric Feedback</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                Submit draft briefs any time for instant rubric scoring and fix-lists, spot-checked by faculty.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Moderated Community</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                Dedicated educational platform for peer testing, team formation, resources, and staff support.
              </p>
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilterPhase("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              filterPhase === "all"
                ? "bg-blue-600 text-white"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            All 9 Weeks
          </button>
          <button
            onClick={() => setFilterPhase("build")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              filterPhase === "build"
                ? "bg-blue-600 text-white"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Weeks 1–6: Venture Build
          </button>
          <button
            onClick={() => setFilterPhase("accelerator")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              filterPhase === "accelerator"
                ? "bg-blue-600 text-white"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Weeks 7–8: Top 100 & Top 20
          </button>
          <button
            onClick={() => setFilterPhase("final")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              filterPhase === "final"
                ? "bg-blue-600 text-white"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Week 9: Demo Day
          </button>
        </div>

        {/* Weeks Timeline Cards */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredWeeks.map((item) => {
              const isCheckpoint = item.checkpoint !== null;
              return (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                    item.phase === "final"
                      ? "bg-gradient-to-r from-amber-950/30 via-slate-900 to-amber-950/20 border-amber-500/40 shadow-xl shadow-amber-500/5"
                      : isCheckpoint
                      ? "bg-slate-900/90 border-blue-500/30 shadow-lg"
                      : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: Week Badge & Phase */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm font-bold text-cyan-400">
                          W{item.week}
                        </span>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                            {item.phaseLabel}
                          </span>
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                              item.phase === "final"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                : isCheckpoint
                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                : "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {item.milestoneBadge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Theme & Description */}
                    <div className="lg:col-span-5">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {item.theme}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Right: Deliverable & Score Weight */}
                    <div className="lg:col-span-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Deliverable</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-200 mb-2">
                        {item.deliverable}
                      </p>
                      {item.weight && (
                        <div className="pt-2 border-t border-slate-800 text-xs font-mono text-amber-400 flex items-center justify-between">
                          <span>Weighting:</span>
                          <span className="font-bold">{item.weight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
