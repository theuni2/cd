"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Compass, 
  Search, 
  Layers, 
  Lightbulb, 
  FileCheck, 
  Trophy,
  ArrowRight
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      stepNum: "01",
      stage: "Week Zero — Read In",
      title: "Pre-Program Literature Deep-Dive",
      description: "Ten assigned papers, five classic and five recent, read before the first live session. One Reading Ledger submitted to the cohort board.",
      icon: BookOpen,
      badge: "Self-Paced Reading",
      color: "border-emerald-300 text-emerald-800 bg-emerald-50",
    },
    {
      stepNum: "02",
      stage: "Week 1 — Ground",
      title: "Industry Realism & Case Teardown",
      description: "The professor's 25-year industry experience, reading debrief, and your first teardown of a real consumer decision point.",
      icon: Compass,
      badge: "Session 01 Live",
      color: "border-teal-300 text-teal-800 bg-teal-50",
    },
    {
      stepNum: "03",
      stage: "Week 2 — Choose",
      title: "Topic Scoping & Partner Swap",
      description: "Topic selection begins. Three candidate business problems proposed, ranked, and peer-questioned in partner swap.",
      icon: Search,
      badge: "Session 02 Live",
      color: "border-cyan-300 text-cyan-800 bg-cyan-50",
    },
    {
      stepNum: "04",
      stage: "Week 3 — Diagnose",
      title: "Friction Mapping & Sludge Audits",
      description: "Friction mapping and sludge auditing of your chosen case, converting bias labels into testable causal mechanisms.",
      icon: Layers,
      badge: "Session 03 Live",
      color: "border-blue-300 text-blue-800 bg-blue-50",
    },
    {
      stepNum: "05",
      stage: "Week 4 — Design",
      title: "Intervention Trio & Calibration",
      description: "Three ranked interventions calibrated against real-world effect sizes, matching levers to targeted decision mechanisms.",
      icon: Lightbulb,
      badge: "Session 04 Live",
      color: "border-indigo-300 text-indigo-800 bg-indigo-50",
    },
    {
      stepNum: "06",
      stage: "Week 5 — Test on Paper",
      title: "Test Plan & 90s Pitch Coaching",
      description: "The test plan, ethics review, executive summary, and live pitch coaching for your 90-second Showcase delivery.",
      icon: FileCheck,
      badge: "Session 05 Live",
      color: "border-amber-300 text-amber-800 bg-amber-50",
    },
    {
      stepNum: "07",
      stage: "Week 6 — Showcase",
      title: "Cohort Showcase & Coach Handoff",
      description: "Lightning pitches to the full cohort, the professor's thematic cluster review, and handoff to Ph.D. writing coaches.",
      icon: Trophy,
      badge: "Session 06 Live",
      color: "border-purple-300 text-purple-800 bg-purple-50",
    },
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
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
            Fellowship Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our 7-Step Process
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            From pre-program literature in Week Zero to lightning pitches in Week 6.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="relative flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-sm hover:shadow-xl group"
                >
                  {/* Step Number Bubble */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center font-black text-xl text-emerald-700 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {step.stepNum}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                        {step.stage}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${step.color}`}>
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
