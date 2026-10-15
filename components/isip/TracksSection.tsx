"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lightbulb,
  GraduationCap,
  ShieldAlert,
  Layers,
  Leaf,
  Activity,
  BookOpen
} from "lucide-react";

interface TracksSectionProps {
  onSelectTrack: (track: "tech" | "social") => void;
}

export default function TracksSection({ onSelectTrack }: TracksSectionProps) {
  const [activeTab, setActiveTab] = useState<"tech" | "social">("tech");

  const tracksData = {
    tech: {
      id: "tech",
      name: "Tech Innovation",
      tagline: "Using Code, AI & Systems to Solve Tangible Problems",
      badge: "Track 01",
      icon: Cpu,
      accentColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10 border-cyan-500/30",
      glowColor: "from-cyan-500/10 via-blue-500/10 to-transparent",
      whatYouBuild:
        "A tech or AI solution to a real problem: mobile & web applications, AI models, automation workflows, or hardware/IoT blueprints.",
      leadMentorBg:
        "Computer Science, Engineering, or Data Science faculty with deep industry product and venture architecture experience.",
      judgingLens:
        "Assessed on technological leverage, product architecture, user friction reduction, and technical feasibility.",
      exampleProjects: [
        {
          title: "Adaptive Study-Planning AI",
          problem: "Students struggle with personalized exam preparation and retention pacing.",
          solution: "Algorithmic schedule generator adapting to daily retention curves and syllabus deadlines.",
          icon: BookOpen,
        },
        {
          title: "Small-Town Clinic Booking Engine",
          problem: "Overcrowded waiting rooms and lack of triage transparency in Tier-2/3 towns.",
          solution: "Lightweight SMS and WhatsApp bot connecting rural clinics with patients without heavy apps.",
          icon: Activity,
        },
        {
          title: "Crop-Disease Photo Checker",
          problem: "Smallholder farmers lose up to 40% of yields before identifying blight.",
          solution: "Computer vision smartphone framework detecting leaf pathology offline with actionable treatment guides.",
          icon: Leaf,
        },
      ],
      deliverableFocus: [
        "System architecture & data flow diagrams",
        "Interactive wireframes or interface sketches (Figma/Canva)",
        "Feasibility & technology stack justification",
        "Zero coding deployment required — judged on framework rigor",
      ],
    },
    social: {
      id: "social",
      name: "Social Impact",
      tagline: "Grassroots, Community & Non-Profit Blueprints That Work",
      badge: "Track 02",
      icon: HeartHandshake,
      accentColor: "text-emerald-400",
      accentBg: "bg-emerald-500/10 border-emerald-500/30",
      glowColor: "from-emerald-500/10 via-teal-500/10 to-transparent",
      whatYouBuild:
        "A community, nonprofit, or social-enterprise blueprint: volunteer networks, grassroots distribution, circular economy drives, or public policy awareness.",
      leadMentorBg:
        "Development Economics, Public Policy, or Social Science faculty with extensive grassroots and field research experience.",
      judgingLens:
        "Assessed on social return on investment (SROI), grassroots stakeholder adoption, cost-per-impact, and self-sustaining funding models.",
      exampleProjects: [
        {
          title: "Hyperlocal Waste-Collection Model",
          problem: "Informal settlements lack municipal waste pickup, leading to open burning.",
          solution: "Incentivized micro-collection network compensating local youth with educational points and recyclers.",
          icon: Leaf,
        },
        {
          title: "Decentralized Rural Learning Pods",
          problem: "School dropouts in agricultural regions due to distance and seasonal harvests.",
          solution: "Community volunteer mentorship network utilizing offline audio modules and village centers.",
          icon: BookOpen,
        },
        {
          title: "Menstrual Health Awareness & Access Drive",
          problem: "Pervasive social taboo and lack of affordable sanitary hygiene in tier-3 schools.",
          solution: "Peer-led dignity workshops coupled with sustainable biodegradable distribution partnerships.",
          icon: Activity,
        },
      ],
      deliverableFocus: [
        "Community stakeholder mapping & empathy interviews",
        "Operational pilot roadmap & logistics flow",
        "Financial sustainability & grant/revenue mechanics",
        "Measurable social impact metrics & KPIs",
      ],
    },
  };

  const current = tracksData[activeTab];

  return (
    <section id="tracks" className="relative py-24 bg-[#05070e] text-white border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Choose Your Pathway</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Two Specialized Tracks. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              One Rigorous Standard.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Every submission must solve a real, verifiable problem. The track you pick defines your lead faculty mentors, specialized masterclasses, and judging lens.
          </p>
        </div>

        {/* Track Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "tech"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-5 h-5 text-cyan-300" />
              <span>Tech Innovation</span>
            </button>

            <button
              onClick={() => setActiveTab("social")}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "social"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <HeartHandshake className="w-5 h-5 text-emerald-300" />
              <span>Social Impact</span>
            </button>
          </div>
        </div>

        {/* Dynamic Track Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
          >
            {/* Left Column: Track Info & Mentor Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 shadow-2xl relative overflow-hidden">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase mb-4 ${current.accentBg}`}>
                  <current.icon className={`w-4 h-4 ${current.accentColor}`} />
                  <span className={current.accentColor}>{current.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {current.name}
                </h3>
                <p className={`text-sm font-medium mb-6 ${current.accentColor}`}>
                  {current.tagline}
                </p>

                <div className="space-y-5 text-sm text-slate-300">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      What Teams Build
                    </h4>
                    <p className="leading-relaxed font-light">{current.whatYouBuild}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      Lead Mentor Background
                    </h4>
                    <p className="leading-relaxed font-light text-slate-300">
                      {current.leadMentorBg}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Judging Evaluation Lens
                    </h4>
                    <p className="leading-relaxed font-light text-slate-300">
                      {current.judgingLens}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectTrack(activeTab)}
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Register Under {current.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Example Projects & Deliverable Highlights */}
            <div className="lg:col-span-7 space-y-6">
              {/* Example Projects Grid */}
              <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Real-World Benchmark Ideas ({current.name})</span>
                </div>

                <div className="space-y-4">
                  {current.exampleProjects.map((proj) => {
                    const ProjectIcon = proj.icon;
                    return (
                      <div
                        key={proj.title}
                        className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className={`p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0`}>
                            <ProjectIcon className={`w-5 h-5 ${current.accentColor}`} />
                          </div>
                          <div>
                            <h5 className="text-base font-bold text-white mb-1">
                              {proj.title}
                            </h5>
                            <p className="text-xs text-slate-400 mb-2 font-mono">
                              Problem: <span className="text-slate-300">{proj.problem}</span>
                            </p>
                            <p className="text-xs text-slate-300 font-light leading-relaxed">
                              Solution: {proj.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What You Hand In */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Track Deliverables & Expectations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  {current.deliverableFocus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Crossover Guidance Card (Health, Climate, Education) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-indigo-500/20 p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Interdisciplinary Crossover Guide</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Working on Health, Climate, or Education?
              </h4>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Health, climate, and education ventures comfortably fit either track: a medical diagnostics app or solar IoT monitoring goes to{" "}
                <strong className="text-cyan-300 font-medium">Tech Innovation</strong>; a rural healthcare awareness initiative or community clean-up drive goes to{" "}
                <strong className="text-emerald-300 font-medium">Social Impact</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs flex items-start gap-3 max-w-sm shrink-0">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Ethical Safety Rule:</strong>
                All health and biological projects must stay strictly at the concept, software, and access level. No human or clinical trials are permitted.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
