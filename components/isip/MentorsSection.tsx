"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Compass,
  Building,
  Award
} from "lucide-react";

export default function MentorsSection() {
  const mentorRoles = [
    {
      role: "Lead Faculty Mentors",
      count: "4 Mentors (2 Tech, 2 Social)",
      who: "Young or former faculty (approx. 28–38): Assistant Professors, Postdocs, or ex-faculty from premier institutions (IITs, IISc, Ashoka, Plaksha, Krea, FLAME, Shiv Nadar).",
      responsibilities: [
        "Teach 60-min weekly masterclasses & framework lectures",
        "Lead weekly live office hours for their track",
        "Spot-check AI feedback against the academic rubric",
        "Grade Checkpoint 3 submissions",
        "Conduct 30-min 1:1 coaching sessions with Top 100 teams",
        "Lead dress rehearsals with Top 20 finalists",
      ],
      badge: "Academic Core",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      role: "Global Mentors & Operators",
      count: "1–3 Global Mentors",
      who: "Founders, venture operators, or faculty based in the US, UK, Singapore, or the Gulf, connected to institutions like Columbia University and leading diaspora founder networks.",
      responsibilities: [
        "Deliver 2 global innovation masterclasses open to all cohorts",
        "Host an exclusive strategy & pitch masterclass for the Top 20",
        "Provide international venture scaling and cross-border context",
      ],
      badge: "International Exposure",
      accent: "text-amber-400",
      border: "border-amber-500/30",
    },
    {
      role: "Independent Second Reviewers",
      count: "4–6 Reviewers",
      who: "Doctoral (PhD) researchers and MBA scholars from top-tier business and research schools.",
      responsibilities: [
        "Provide a blind, independent second score for every Checkpoint 3 submission",
        "Ensure objective grading parity across all teams",
        "Trigger third-party senior review if score divergence exceeds 15 points",
      ],
      badge: "Grading Integrity",
      accent: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      role: "Demo Day & Semi-Final Judges",
      count: "15–20 Judges",
      who: "Venture capitalists, angel investors, startup founders, industry sponsors, and senior university department heads.",
      responsibilities: [
        "Evaluate live Semi-Final presentation rooms in Week 7",
        "Constitute the 5–7 judge Grand Demo Day panel in Week 9",
        "Conduct live 2-min executive Q&A with Top 20 finalists",
        "Select the final Top 3 winners and track excellence honors",
      ],
      badge: "Industry Jury",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
  ];

  const screeningStandards = [
    "Proven track record: Has actively built, researched, or launched venture/impact frameworks.",
    "Teenager pedagogy: Skilled at distilling complex academic concepts simply for ages 13–18.",
    "Responsiveness: Committed to responsive feedback loops within 48 hours.",
    "Safeguarding compliance: Complete verified background checks and signed code of conduct.",
    "Cohort satisfaction: Must maintain an average student rating of ≥4.0 out of 5.",
  ];

  return (
    <section id="mentors" className="relative py-24 bg-[#070a14] text-white border-t border-slate-900 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Faculty-Led Pedagogy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Mentors & Academic Leadership
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Marketed authentically as <strong className="text-white font-medium">faculty-led</strong>. We concentrate personal faculty attention where it decides outcomes: in the Top 100 and Top 20 rounds.
          </p>
        </div>

        {/* 4 Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mentorRoles.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-slate-950 ${item.border} ${item.accent}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.count}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.role}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  {item.who}
                </p>

                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Scope of Responsibilities:
                </h4>
                <div className="space-y-2.5 mb-4">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${item.accent}`} />
                      <span className="font-light">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Screening Standards & University Ecosystems */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/20 to-slate-900 border border-slate-800 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Rigorous Faculty Screening</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                How Mentors Are Vetted & Selected
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                We recruit early-career faculty from leading private universities (Ashoka, Plaksha, Krea, FLAME, Shiv Nadar), PhDs and postdocs from IITs and IISc, and diaspora founder networks through our Columbia University associations.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-2.5">
              {screeningStandards.map((std, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-light">{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
