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
      number: "Cohort Entry",
      cohort: "Registered Builders",
      timeline: "28 Oct – 10 Dec",
      focus: "Registration & Track Confirmation",
      perk: "Full onboarding to the ISIP portal, access to venture frameworks, toolkits, and orientation materials.",
      barWidth: "w-full",
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      stage: "Stage 02",
      number: "7-Days Live",
      cohort: "Masterclass Cohort",
      timeline: "11 – 20 Dec",
      focus: "Live Faculty Masterclasses & Discovery",
      perk: "Intensive 7-day live schedule covering problem framing, user research, wireframing & venture feasibility.",
      barWidth: "w-[75%]",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      stage: "Stage 03",
      number: "Submissions",
      cohort: "Builder Teams",
      timeline: "30 Dec – 7 Jan",
      focus: "Pitch Deck & Website / Prototype Submission",
      perk: "Dedicated submission window for the 10-slide Pitch Deck and working Website / Prototype with dual-mentor review.",
      barWidth: "w-[50%]",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      stage: "Stage 04",
      number: "Top Honors",
      cohort: "Grand Champions",
      timeline: "10th March 2027",
      focus: "Official Results & Seed Capital Allocation",
      perk: "₹75,000 Cash Seed Pool (₹40,000 / ₹25,000 / ₹10,000), credential awards & global mentorship pathways.",
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
