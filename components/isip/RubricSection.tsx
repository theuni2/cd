"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  Award,
  ShieldCheck,
  TrendingUp,
  FileCheck2
} from "lucide-react";

export default function RubricSection() {
  const [selectedPhase, setSelectedPhase] = useState<"cp1" | "cp2" | "cp3" | "finals">("cp3");

  const phaseWeights = {
    cp1: {
      name: "Checkpoint 1: Idea Brief",
      timing: "End of Week 2",
      format: "1-Page Structured Brief",
      evaluator: "AI-Assisted, Spot-Checked by Lead Mentors",
      countsToward: "20% of Top 100 Cumulative Score",
      weights: [
        { name: "Idea and Problem", weight: 40, color: "bg-blue-500" },
        { name: "User Insight", weight: 30, color: "bg-cyan-500" },
        { name: "Originality", weight: 30, color: "bg-emerald-500" },
      ],
    },
    cp2: {
      name: "Checkpoint 2: Framework",
      timing: "End of Week 4",
      format: "Solution Framework & Mockup Plan",
      evaluator: "AI-Assisted, Spot-Checked (72h Resubmission Window)",
      countsToward: "30% of Top 100 Cumulative Score",
      weights: [
        { name: "Framework & Solution Logic", weight: 35, color: "bg-purple-500" },
        { name: "Feasibility", weight: 25, color: "bg-indigo-500" },
        { name: "Idea and Problem", weight: 15, color: "bg-blue-500" },
        { name: "User Insight", weight: 15, color: "bg-cyan-500" },
        { name: "Originality", weight: 10, color: "bg-emerald-500" },
      ],
    },
    cp3: {
      name: "Checkpoint 3: Final Submission",
      timing: "End of Week 6",
      format: "10-Slide Deck, 3-Min Video & Sustainability Model",
      evaluator: "Lead Faculty + Independent Second Reviewer",
      countsToward: "50% of Top 100 Cumulative Score",
      weights: [
        { name: "Feasibility", weight: 20, color: "bg-indigo-500" },
        { name: "Revenue or Sustainability", weight: 20, color: "bg-amber-500" },
        { name: "Idea and Problem", weight: 15, color: "bg-blue-500" },
        { name: "Framework & Solution Logic", weight: 15, color: "bg-purple-500" },
        { name: "Pitch Deck Quality", weight: 15, color: "bg-pink-500" },
        { name: "Video Pitch Presentation", weight: 15, color: "bg-cyan-500" },
      ],
    },
    finals: {
      name: "Semi-Finals & Demo Day Pitch",
      timing: "Weeks 7 & 9",
      format: "Live Online Pitch (3 min) + Q&A (2 min)",
      evaluator: "Judge Panels (VCs, Angels, Senior Faculty) Scored Fresh",
      countsToward: "Decides Top 20 & Top 3 Winners",
      weights: [
        { name: "Live Pitch Delivery", weight: 25, color: "bg-amber-500" },
        { name: "Feasibility", weight: 20, color: "bg-indigo-500" },
        { name: "Revenue or Sustainability", weight: 20, color: "bg-emerald-500" },
        { name: "Q&A Handling", weight: 15, color: "bg-pink-500" },
        { name: "Idea and Problem", weight: 10, color: "bg-blue-500" },
        { name: "Framework & Solution Logic", weight: 10, color: "bg-purple-500" },
      ],
    },
  };

  const rubricAnchors = [
    {
      criterion: "Idea & Problem",
      score5: "A specific, real problem for a defined group, backed by clear urgency on why it matters now.",
      score1: "Vague, generalized, or artificially invented problem with no clear audience.",
    },
    {
      criterion: "User Insight",
      score5: "Real, nuanced understanding of people affected, validated through 5–10 direct conversations.",
      score1: "Assumptions and desktop guessing only; no verified user engagement.",
    },
    {
      criterion: "Originality",
      score5: "A fresh strategic angle or a compelling structural reason why it beats existing alternatives.",
      score1: "Direct, unimaginative copy of an existing mainstream solution.",
    },
    {
      criterion: "Framework & Logic",
      score5: "An airtight logical path connecting problem statement, user friction, mechanism, and target model.",
      score1: "Disconnected ideas with logical gaps and ungrounded claims.",
    },
    {
      criterion: "Feasibility",
      score5: "Realistic about cost, technical requirements, time and risks; proposes a plausible first step.",
      score1: "Demands impossible resources or capital far beyond the team's capacity.",
    },
    {
      criterion: "Revenue / Sustainability",
      score5: "Tech: who pays, how much and why. Social Impact: how it funds operations and endures long term.",
      score1: "Zero answer to operational survival or economic viability.",
    },
    {
      criterion: "Pitch Deck Quality",
      score5: "Crisp 10-slide narrative with clear typography, quantified data, and zero fluff.",
      score1: "Cluttered, unreadable slides missing vital business or execution components.",
    },
    {
      criterion: "Video Presentation",
      score5: "Confident, dynamic, articulately delivered under 3 minutes showing full team cohesion.",
      score1: "Over time limit or robotic script reading with low energy.",
    },
    {
      criterion: "Live Pitch Delivery",
      score5: "Engaging, well-timed, persuasive delivery commanding executive audience attention.",
      score1: "Disorganized, stumbling over slides, or exceeding allotted demo time.",
    },
    {
      criterion: "Q&A Handling",
      score5: "Direct answers, mastery over numbers, admits gaps with intellectual honesty.",
      score1: "Evades panel questions or contradicts the submitted pitch deck.",
    },
  ];

  const currentPhase = phaseWeights[selectedPhase];

  return (
    <section id="rubric" className="relative py-24 bg-[#070a14] text-white border-t border-slate-900 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Fair & Rigorous Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Judging Criteria & Rubric
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Teams are judged on their thinking, framework, and feasibility — not on whether code has been deployed. A great idea with a credible plan can win with nothing built.
          </p>
        </div>

        {/* Philosophy Card: No Built Product Required */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/30 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4 text-cyan-400" />
                <span>Our Core Academic Standard</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Judged on Thinking, Not Pre-Existing Software.
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Many hackathons favor students with previous coding experience or access to private labs. At ISIP, our rubric isolates{" "}
                <strong className="text-white font-medium">problem discovery, stakeholder research, unit feasibility, and commercial logic</strong>. A rigorous framework on Canva or Figma with validated user interviews scores higher than poorly planned code.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 max-w-sm shrink-0 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Dual-Reviewer Integrity Rule</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Checkpoint 3 is scored independently by a Lead Mentor and a Second Reviewer (PhD/MBA). If scores diverge by &gt;15 points, a third senior arbiter decides. Tracks are ranked separately for equal representation.
              </p>
            </div>
          </div>
        </div>

        {/* Phase Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedPhase("cp1")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              selectedPhase === "cp1"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Checkpoint 1 (Idea)
          </button>
          <button
            onClick={() => setSelectedPhase("cp2")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              selectedPhase === "cp2"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Checkpoint 2 (Framework)
          </button>
          <button
            onClick={() => setSelectedPhase("cp3")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              selectedPhase === "cp3"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Checkpoint 3 (Final Qualifier)
          </button>
          <button
            onClick={() => setSelectedPhase("finals")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              selectedPhase === "finals"
                ? "bg-amber-600 text-white shadow-lg shadow-amber-500/20"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Semi-Final & Demo Day
          </button>
        </div>

        {/* Selected Phase Weighting Breakdown Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPhase}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mb-16 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  Scoring Breakdown: {currentPhase.timing}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {currentPhase.name}
                </h3>
              </div>
              <div className="text-left md:text-right">
                <span className="text-xs text-slate-400 block">Counts Toward:</span>
                <span className="text-sm font-bold text-amber-400">
                  {currentPhase.countsToward}
                </span>
              </div>
            </div>

            {/* Visual Weighting Progress Bars */}
            <div className="space-y-4">
              {currentPhase.weights.map((w) => (
                <div key={w.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-medium">
                    <span className="text-slate-200">{w.name}</span>
                    <span className="font-mono text-cyan-400 font-bold">{w.weight}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${w.weight}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`h-full ${w.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Criteria Anchors Table (Scores 5 vs. Scores 1) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Scoring Anchors: What Earns Full Points
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Every criterion is evaluated on a 1–5 scale using transparent behavioral anchors.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/90 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300 font-mono text-xs uppercase">
                    <th className="py-4 px-5 font-bold w-1/4">Criterion</th>
                    <th className="py-4 px-5 font-bold text-emerald-400 w-3/8">Scores 5 (Exemplary)</th>
                    <th className="py-4 px-5 font-bold text-rose-400 w-3/8">Scores 1 (Insufficient)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {rubricAnchors.map((row) => (
                    <tr key={row.criterion} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-white align-top">
                        {row.criterion}
                      </td>
                      <td className="py-3.5 px-5 text-slate-300 align-top leading-relaxed font-light">
                        {row.score5}
                      </td>
                      <td className="py-3.5 px-5 text-slate-400 align-top leading-relaxed font-light">
                        {row.score1}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
