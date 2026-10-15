"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  CheckCircle2,
  ListOrdered,
  RefreshCw,
  Award,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
  BarChart3
} from "lucide-react";

export default function FunnelCoachingSection() {
  const funnelStages = [
    {
      stage: "Stage 01",
      title: "Build Phase (Weeks 1–6)",
      cohort: "All Registered Teams",
      criteria: "Complete 3 Checkpoint Briefs",
      benefits:
        "Access to all faculty masterclasses, weekly office hours, 24/7 AI-assisted feedback, and moderated cohort community.",
      badge: "Open to All",
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      stage: "Stage 02",
      title: "Top 100 Accelerator (Week 7)",
      cohort: "Best 100 Teams (~50 / Track)",
      criteria: "Cumulative Score: CP1 (20%) + CP2 (30%) + CP3 (50%)",
      benefits:
        "Dedicated 30-min 1:1 with Lead Faculty, interactive pitch clinic, deck polish, and live online semi-final pitch slot.",
      badge: "Top 100 Qualifier",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      stage: "Stage 03",
      title: "Top 20 Finalist Prep (Week 8)",
      cohort: "Best 20 Teams (~10 / Track)",
      criteria: "Judged Fresh on Semi-Final Pitch & Q&A",
      benefits:
        "Exclusive global masterclass with US/UK/Singapore mentors, full dress rehearsal with lead faculty, cloud/AI credits & Uni Discovery session.",
      badge: "Finalist Tier",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      stage: "Stage 04",
      title: "Grand Demo Day (Week 9)",
      cohort: "Top 3 Global Winners",
      criteria: "Demo Day Panel (5–7 VC & Faculty Judges)",
      benefits:
        "$8,500 Cash Seed Pool (1st: $5,000, 2nd: $2,500, 3rd: $1,000), press feature, winner titles, and showcase at Dubai Edition 2.",
      badge: "Championship Tier",
      accent: "text-amber-400",
      border: "border-amber-500/30",
    },
  ];

  const coachingFeatures = [
    {
      icon: Target,
      title: "Real-Time Readiness Scores",
      description:
        "At every checkpoint, teams see their exact score relative to the projected Top 100 qualification bar (e.g., 'You are at 62; the current cutoff is ~75').",
    },
    {
      icon: ListOrdered,
      title: "The 3-Point High-Impact Fix List",
      description:
        "No generic platitudes. Every feedback report pinpoints the exact three adjustments worth the most rubric points to elevate your rank.",
    },
    {
      icon: RefreshCw,
      title: "72-Hour Checkpoint 2 Resubmission",
      description:
        "Building a venture is iterative. At Checkpoint 2, every team gets a 72-hour window after receiving feedback to refine and resubmit their framework.",
    },
    {
      icon: Award,
      title: "No One Leaves Empty-Handed",
      description:
        "Teams that do not advance receive an exhaustive feedback diagnostic report, an official tiered certificate, priority entry for Edition 2, and lifelong alumni community access.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#05070e] text-white border-t border-slate-900 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Transparent Progression</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            The Selection Funnel & <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              How Coaching Moves Teams Up
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Students move up on an objective cumulative score and always know exactly where they stand and what specific changes will elevate them into the next round.
          </p>
        </div>

        {/* 4-Stage Funnel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {funnelStages.map((stage, idx) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    {stage.stage}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-slate-950 ${stage.border} ${stage.accent}`}>
                    {stage.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {stage.title}
                </h3>

                <p className={`text-xs font-mono mb-3 ${stage.accent}`}>
                  Cohort: {stage.cohort}
                </p>

                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono mb-4">
                  <span className="text-slate-400 block mb-0.5">Qualification:</span>
                  {stage.criteria}
                </div>

                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {stage.benefits}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Funnel Step 0{idx + 1}</span>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-slate-500" />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coaching Innovations Grid */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900/90 via-blue-950/30 to-slate-900/90 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              How Continuous Coaching Elevates Teams
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              We concentrate intensive 1:1 faculty attention where it determines outcomes: the Top 100 and Top 20. But every team receives actionable guidance at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coachingFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
