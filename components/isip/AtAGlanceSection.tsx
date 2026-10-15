"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  CreditCard,
  Laptop,
  Layers,
  GraduationCap,
  Trophy,
  Scale,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Globe2
} from "lucide-react";

export default function AtAGlanceSection() {
  const glanceCards = [
    {
      icon: Users,
      title: "Who Can Enter",
      value: "Grades 8–12",
      description: "Open to school students globally. Compete solo as an individual founder or in collaborative teams of up to 3.",
      color: "from-blue-500/20 to-cyan-500/10",
      accent: "text-cyan-400",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: CreditCard,
      title: "Registration Fee",
      value: "₹5,000 / Student",
      description: "Accessible, transparent pricing covering 9 weeks of faculty-led masterclasses, office hours, and AI feedback.",
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: Laptop,
      title: "Program Format",
      value: "9 Weeks • Fully Online",
      description: "6 weeks of venture building for everyone, followed by Top 100 Accelerator, Top 20 Finalist prep, and Week 9 Demo Day.",
      color: "from-indigo-500/20 to-purple-500/10",
      accent: "text-indigo-400",
      borderColor: "border-indigo-500/30",
    },
    {
      icon: Layers,
      title: "Two Dual Tracks",
      value: "Tech & Social Impact",
      description: "Solve a real problem using AI/software concepts or design a high-leverage community/social enterprise blueprint.",
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400",
      borderColor: "border-amber-500/30",
    },
    {
      icon: GraduationCap,
      title: "Faculty Mentorship",
      value: "4 Lead + 3 Global Mentors",
      description: "Guided by active and former faculty (IIT, IISc, Ashoka, Plaksha) plus international operator masterclasses.",
      color: "from-purple-500/20 to-pink-500/10",
      accent: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Trophy,
      title: "Cash & Seed Grants",
      value: "$8,500 Cash Pool",
      description: "1st: $5,000 • 2nd: $2,500 • 3rd: $1,000 paid in milestone tranches, plus cloud/AI credits & Uni Discovery sessions.",
      color: "from-yellow-500/20 to-amber-500/10",
      accent: "text-yellow-400",
      borderColor: "border-yellow-500/30",
    },
  ];

  return (
    <section className="relative py-24 bg-[#070a14] text-white border-t border-slate-900 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Executive Overview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            ISIP At A Glance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 font-light leading-relaxed"
          >
            Designed from the ground up for high school thinkers. No boring quizzes, no coding prerequisites, and no borrowed names — every milestone is anchored in your own venture.
          </motion.p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {glanceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 p-6 sm:p-7 backdrop-blur-md hover:border-slate-700 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${card.color} border ${card.borderColor}`}
                  >
                    <Icon className={`w-6 h-6 ${card.accent}`} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                  {card.title}
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {card.value}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Prestige & Credibility Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-indigo-950/40 border border-blue-500/20 p-6 sm:p-8 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Credibility Covenant</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Prestige comes from real associations, not borrowed names.
              </h4>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Every judge, mentor, and academic partner is named with direct, verified permission. We do not license logo walls or inflate credentials: you work directly with young and former university faculty from India and leading diaspora institutions.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2.5 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IITs, IISc, Ashoka, Plaksha & Krea Faculty</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Columbia Diaspora Global Mentors</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Edition 2 Dubai Finals Announced</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
