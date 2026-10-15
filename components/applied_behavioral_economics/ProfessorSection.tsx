"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Building2, 
  BrainCircuit, 
  Sparkles, 
  CheckCircle2, 
  BookOpen,
  LineChart
} from "lucide-react";

export default function ProfessorSection() {
  return (
    <section id="professor" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            Faculty Spotlight
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Meet Your Professor
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Direct live instruction from a Dartmouth scholar and veteran commercial CRO. No teaching assistants—ever.
          </p>
        </motion.div>

        {/* Featured Professor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Real Photo Profile */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-inner">
              <div className="relative mb-6">
                <div className="w-44 h-44 rounded-full p-1.5 bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 shadow-2xl">
                  <img
                    src="/professor/kimberly_rose_clark.png"
                    alt="Dr. Kimberly Rose Clark"
                    className="w-full h-full rounded-full object-cover object-top shadow-inner"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-emerald-500 text-slate-950 p-2 rounded-full border-2 border-slate-950 shadow-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Kimberly Rose Clark, Ph.D.
              </h3>
              <p className="text-emerald-400 font-semibold text-sm mb-4">
                Senior Lecturer, Dartmouth College
              </p>

              <div className="w-full space-y-2.5 text-left text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>B.A. Oberlin College | Ph.D. Dartmouth College</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Co-Founder & 25-Year CRO, Merchant Mechanics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <BrainCircuit className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Director, Dartmouth DIRECT Lab</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Pracademic Detail */}
            <div className="lg:col-span-7 space-y-6 text-slate-300">
              
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800/60 mb-3">
                  The "Pracademic" Philosophy
                </span>
                <h4 className="text-2xl font-bold text-white mb-3">
                  Bridging Cognitive Neuroscience & Global Brand Strategy
                </h4>
                <p className="text-sm leading-relaxed text-slate-300 font-light mb-4">
                  Professor Kimberly Rose Clark holds a B.A. from Oberlin College and a Ph.D. in Psychological and Brain Sciences from <strong>Dartmouth College</strong>, where her doctoral work examined human decision-making under uncertainty. She leads Dartmouth’s Initiative for Research on Energy Communication Transformation (DIRECT) Lab.
                </p>
                <p className="text-sm leading-relaxed text-slate-300 font-light">
                  She is also a self-described <strong>“pracademic”</strong>—an academic and working practitioner in the same field. With a fellow Dartmouth Ph.D., she co-founded <strong>Merchant Mechanics</strong>, a consumer research firm built to bridge behavioral psychology and neuroscience with commercial decision-making, serving as its Chief Research Officer for 25 years.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 text-xs text-slate-200 space-y-2 shadow-lg">
                <div className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4" /> Multi-Methodological Commercial Research
                </div>
                <p className="leading-relaxed text-slate-300 font-light">
                  Dr. Clark designed and directed research programs for national and international retail brands, integrating attitudinal, behavioral, and implicit measures into single unified studies. She also taught Dartmouth’s first course in <strong>Consumer Neuroscience</strong>.
                </p>
              </div>

              {/* Week 1 Industry Focus Note */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
                <strong className="text-white font-semibold">Week 1 Industry Focus:</strong> Session 01 is dedicated to this industry experience—what behavioral economics looks like when a client is paying for it, which findings hold up under commercial budgets, and why self-reported decisions fail to predict real action.
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
