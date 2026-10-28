"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles, 
  FileText
} from "lucide-react";

export default function SyllabusSection() {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  const toggleWeek = (w: number) => {
    setOpenWeek(openWeek === w ? null : w);
  };

  const weeks = [
    {
      weekNum: 1,
      title: "Session 01 — The Pracademic: Behavioral Economics Inside a Real Research Firm",
      duration: "90 minutes live with Professor Clark",
      agenda: [
        { title: "Meet Your Professor", time: "30 min", text: "Oberlin College to Dartmouth Ph.D. Co-founding Merchant Mechanics, 25 years as CRO running research for national/international retail & consumer brands. Teaching Dartmouth's first Consumer Neuroscience course & leading the DIRECT Lab." },
        { title: "Behavioral Economics on a Client Budget", time: "40 min", text: "Integrating attitudinal, behavioral, and implicit measures. The gap at the centre of the field: people cannot always articulate drivers of their decisions. Worked example of a multi-method path-to-purchase study. What clients push back on." },
        { title: "Reading Debrief", time: "20 min", text: "Open floor on the ten Week Zero papers: which findings would you bet a marketing budget on, and which would you not? Responding to the sharpest questions from Reading Ledgers." },
      ],
      assignment: {
        name: "Mini-Assignment 1 — Decision Moment Teardown",
        wordCount: "200–250 words",
        effort: "45 min",
        text: "Pick one real decision you personally made as a customer in the last month. Identify: (a) decision point, (b) choice environment, (c) framework mechanism (describe mechanism, not just a label), and (d) scale metric. Post to cohort board.",
      },
    },
    {
      weekNum: 2,
      title: "Session 02 — From Curiosity to Business Question",
      duration: "90 minutes live with Professor Clark",
      agenda: [
        { title: "What Makes a Question Business-Relevant", time: "30 min", text: "The three-part test: a decision, a metric, and someone who owns that metric. Scoping down to one decision, one audience, one metric. Nudge vs sludge as a project discovery tool." },
        { title: "The Deliverable, Explained", time: "20 min", text: "Full walkthrough of the Behavioral Strategy Brief: what each section contains and rubric review." },
        { title: "Live Ideation Clinic", time: "40 min", text: "Volunteered ideas taken from the floor and stress-tested live by Professor Clark: decision observable, metric real, scope survivable in 4 weeks?" },
      ],
      assignment: {
        name: "Mini-Assignment 2 — Three Business Problems Card",
        wordCount: "1 page",
        effort: "60 min plus peer swap",
        text: "Produce one page listing three candidate topics (5 lines each: company/product, decision point, audience, framework, business metric). Rank 1–3 and defend #1. Swap with partner for hard questions.",
      },
      openDesk: "Between Weeks 2 and 3: Open Desk A — Topic Triage (30 min optional drop-in with Prof Clark for fast topic verdicts).",
    },
    {
      weekNum: 3,
      title: "Session 03 — Diagnosis: Friction Maps and Sludge Audits",
      duration: "90 minutes live with Professor Clark",
      agenda: [
        { title: "Mapping a Decision Journey", time: "30 min", text: "Breaking a customer journey into discrete decision points. Identifying defaults, frames, friction, salience, and hidden elements." },
        { title: "Running a Sludge Audit", time: "35 min", text: "Sunstein's audit method adapted to commercial settings: enumerate frictions, estimate who bears them, protective vs extractive friction. Dark patterns & regulatory exposure." },
        { title: "Mechanism Versus Label", time: "25 min", text: "Converting bias labels into causal accounts that make testable predictions." },
      ],
      assignment: {
        name: "Mini-Assignment 3 — Friction Map",
        wordCount: "1 page diagram/map",
        effort: "90 min",
        text: "Build a one-page annotated map of your chosen case (diagram, flow, or screenshot sequence). Mark 3 friction points with framework, mechanism sentence, and predicted behavior.",
      },
    },
    {
      weekNum: 4,
      title: "Session 04 — Designing the Intervention",
      duration: "90 minutes live with Professor Clark",
      agenda: [
        { title: "The Choice Architect's Toolkit", time: "35 min", text: "Defaults, framing, salience, social proof, simplification, commitment devices, timing, friction removal. Matching tools to targeted mechanisms." },
        { title: "Calibrating Your Expectations", time: "35 min", text: "Meta-analytic and nudge-unit evidence on real effect sizes. Megastudy logic: design to test several interventions cheaply rather than defending one expensively." },
        { title: "Working Time", time: "20 min", text: "Silent drafting of your intervention set with live Q&A with Professor Clark." },
      ],
      assignment: {
        name: "Mini-Assignment 4 — Intervention Trio",
        wordCount: "1 page",
        effort: "75 min",
        text: "Propose three interventions for your single leverage point: target mechanism, expected magnitude, cost (low/med/high), failure mode. Include 1 rejected intervention and why.",
      },
      openDesk: "Between Weeks 4 and 5: Open Desk B — Design Triage (30 min optional drop-in with Prof Clark for intervention review).",
    },
    {
      weekNum: 5,
      title: "Session 05 — Proving It Without Running It",
      duration: "90 minutes live with Professor Clark",
      agenda: [
        { title: "Anatomy of a Test Plan", time: "40 min", text: "Seven components: randomization, conditions, primary metric, guardrail metric, sample/duration logic, analysis approach, pre-committed decision rule. Threats to validity." },
        { title: "Risk, Ethics, and Brand Exposure", time: "25 min", text: "Helping vs exploiting decisions. Pre-empting legal, brand, and trust objections." },
        { title: "Pitch Coaching", time: "25 min", text: "The 90-second business pitch: problem, mechanism, intervention, metric, ask. Slide discipline for 5-slide deck." },
      ],
      assignment: {
        name: "Mini-Assignment 5 — Test Card & Executive Summary",
        wordCount: "1 page Test Card + 250w Exec Summary",
        effort: "90 min",
        text: "One-page Test Card + 250-word executive summary. Rehearse 90-second pitch out loud. Final deliverable due 48h before Showcase.",
      },
    },
    {
      weekNum: 6,
      title: "Session 06 — The Showcase",
      duration: "90 minutes live with Professor Clark",
      agenda: [
        { title: "Lightning Pitches", time: "40 min", text: "Every fellow presents for 90 seconds against a single slide in a fixed running order." },
        { title: "Professor's Review", time: "30 min", text: "Projects grouped into thematic clusters and reviewed as clusters. Detailed review of 3-4 exemplar briefs." },
        { title: "What Comes Next", time: "20 min", text: "Good applied brief vs professional brief. Handoff to Ph.D. writing coaches for portfolio polish or independent paper extension." },
      ],
      assignment: {
        name: "Final Deliverable — The Behavioral Strategy Brief",
        wordCount: "1,200–1,500 words + 5-slide deck",
        effort: "Assembly and polish only",
        text: "Assembled directly from mini-assignments 1–5. Due 48 hours before the Showcase.",
      },
    },
  ];

  return (
    <section id="syllabus" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Detailed Syllabus
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Six Teaching Weeks
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Saturdays at 7:00 a.m. Eastern. Discussion-led live sessions ending with actionable mini-assignments.
          </p>
        </motion.div>

        {/* Weeks Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {weeks.map((week, idx) => {
            const isOpen = openWeek === week.weekNum;
            return (
              <motion.div
                key={week.weekNum}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-3xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-white border-emerald-400 shadow-xl"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleWeek(week.weekNum)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center font-black text-lg font-mono">
                      W{week.weekNum}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-0.5">
                        Week {week.weekNum} Agenda
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {week.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs text-slate-500 font-mono">
                      {week.duration}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content with AnimatePresence */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 sm:p-8 pt-0 border-t border-slate-100 space-y-6"
                    >
                      {/* Live Agenda Timeline */}
                      <div className="space-y-4 pt-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          Session Breakdown (90 Min Synchronous)
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {week.agenda.map((ag, aIdx) => (
                            <div
                              key={aIdx}
                              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-slate-900 text-sm">
                                  {ag.title}
                                </span>
                                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300 font-bold">
                                  {ag.time}
                                </span>
                              </div>
                              <p className="leading-relaxed text-slate-600 font-light">{ag.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mini-Assignment Box */}
                      <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 shadow-sm">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                          <span className="font-bold text-emerald-950 text-base flex items-center gap-2">
                            <FileText className="w-5 h-5 text-emerald-700" />
                            {week.assignment.name}
                          </span>
                          <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-mono font-bold">
                            <span>{week.assignment.wordCount}</span>
                            <span>•</span>
                            <span>{week.assignment.effort}</span>
                          </div>
                        </div>
                        <p className="leading-relaxed text-slate-700 font-light">
                          {week.assignment.text}
                        </p>
                      </div>

                      {/* Open Desk Callout if present */}
                      {week.openDesk && (
                        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 flex items-center gap-2 font-light">
                          <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                          <span>{week.openDesk}</span>
                        </div>
                      )}

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
