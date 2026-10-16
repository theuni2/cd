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
  Trophy
} from "lucide-react";

export default function FunnelCoachingSection() {
  const funnelStages = [
    {
      stage: "Stage 01",
      number: "1,000",
      cohort: "All Registered Builders",
      timeline: "Weeks 1–6",
      focus: "Build & Complete 3 Checkpoint Briefs",
      perk: "Full access to faculty masterclasses, weekly office hours, and AI feedback.",
      barWidth: "w-full",
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      stage: "Stage 02",
      number: "Top 100",
      cohort: "Qualifier Teams (~50 / Track)",
      timeline: "Week 7",
      focus: "Cumulative Score: CP1 (20%) + CP2 (30%) + CP3 (50%)",
      perk: "Dedicated 30-min 1:1 pitch clinic with Lead Faculty + semi-final pitch slot.",
      barWidth: "w-[75%]",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      stage: "Stage 03",
      number: "Top 20",
      cohort: "Finalists (~10 / Track)",
      timeline: "Week 8",
      focus: "Semi-Final Pitch & Q&A Scores",
      perk: "Global masterclass with US/UK mentors, full dress rehearsal & Uni Discovery session.",
      barWidth: "w-[50%]",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      stage: "Stage 04",
      number: "Top 3",
      cohort: "Global Champions",
      timeline: "Week 9",
      focus: "Live Demo Day Panel (5–7 VC & Faculty Judges)",
      perk: "$8,500 Cash Seed Pool ($5,000 / $2,500 / $1,000) & Dubai Edition 2 showcase.",
      barWidth: "w-[25%]",
      accent: "text-[#c5a059]",
      border: "border-[#c5a059]/40",
    },
  ];

  const coachingFeatures = [
    {
      icon: Target,
      title: "Real-Time Readiness Scores",
      description: "Know exactly where your framework stands relative to the Top 100 cutoff bar at each checkpoint.",
    },
    {
      icon: ListOrdered,
      title: "3-Point High-Impact Fix List",
      description: "No generic critique. Every evaluation report isolates the 3 highest-leverage fixes to gain rubric points.",
    },
    {
      icon: RefreshCw,
      title: "72-Hour Checkpoint Resubmission",
      description: "Building is iterative. At Checkpoint 2, teams get a 72-hour window after feedback to refine and resubmit.",
    },
    {
      icon: Award,
      title: "Lifelong Alumni & Certificates",
      description: "All builders receive official tiered credential certificates and priority access to future cohorts.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#050B14] text-white border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-[#c5a059]/5 blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>The Competition Progression</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            How The Qualifier <br />
            <span className="text-[#c5a059] italic font-normal">Rounds Unfold.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light">
            Every team learns and builds. The best 100 advance, the top 20 pitch live, and the top 3 win cash seed grants.
          </p>
        </div>

        {/* Visual Tiered Progression Funnel */}
        <div className="space-y-4 mb-20 max-w-4xl mx-auto">
          {funnelStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-5 sm:p-6 rounded-2xl bg-[#0a192f]/60 border ${stage.border} backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#c5a059]/60 transition-all`}
            >
              <div className="flex items-center gap-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#c5a059] min-w-[120px]">
                  {stage.number}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">
                      {stage.stage}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      • {stage.timeline}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {stage.cohort}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                    {stage.perk}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-left md:text-right">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {stage.focus.split(":")[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Coaching Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coachingFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a192f]/40 border border-white/10 hover:border-[#c5a059]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#c5a059]" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-white mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
