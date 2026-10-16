"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Sparkles,
  CheckCircle2,
  Layers,
  TrendingUp,
  FileText,
  Video,
  DollarSign,
  ShieldCheck
} from "lucide-react";

export default function RubricSection() {
  const criteria = [
    {
      percentage: "20%",
      title: "Problem Urgency & Validation",
      icon: Layers,
      summary: "Depth of user discovery logs, verified pain point severity, and clear evidence of why existing alternatives fail.",
    },
    {
      percentage: "20%",
      title: "Framework & Solution Architecture",
      icon: Sparkles,
      summary: "Logical user journey mapping, interactive Figma/Canva wireframes or schematics, and structural elegance.",
    },
    {
      percentage: "20%",
      title: "Feasibility & Stress-Testing",
      icon: TrendingUp,
      summary: "Realism of execution, unit economics, supply chain dependencies, and feedback logs from ≥5 potential users.",
    },
    {
      percentage: "20%",
      title: "Revenue or Circular Sustainability",
      icon: DollarSign,
      summary: "Monetization model (Tech Track) or self-sustaining grant/circular revenue model (Social Impact Track).",
    },
    {
      percentage: "20%",
      title: "Pitch Deck & Video Conviction",
      icon: Video,
      summary: "Clarity of the 10-slide deck, high-conviction 3-minute video presentation, and crisp executive Q&A responses.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#07101E] text-white border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-[#c5a059]/5 blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4">
            <Scale className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Objective Judging Standard</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            The 5-Pillar <br />
            <span className="text-[#c5a059] italic font-normal">Evaluation Rubric.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light">
            Every submission is graded objectively by human faculty. No bias towards previous coding experience or private lab access.
          </p>
        </div>

        {/* 5-Pillar Metric Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a192f]/60 border border-white/10 hover:border-[#c5a059]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-luxury text-3xl font-bold text-[#c5a059]">
                      {item.percentage}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  {/* Visual Gold Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#c5a059] to-[#e5c07b] rounded-full w-full" />
                  </div>

                  <h3 className="font-serif-luxury text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Level Playing Field Guarantee Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#050B14]/80 border border-[#c5a059]/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#c5a059]" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-bold text-white">
                Zero Built Code Required
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Judged purely on analytical rigor, validation depth, and execution strategy — leveling the playing field for all school students.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-full bg-[#0a192f] border border-white/10 text-xs font-mono text-[#c5a059]">
            Blind Dual-Faculty Grading
          </span>
        </div>

      </div>
    </section>
  );
}
