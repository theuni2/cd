"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  Leaf,
  Activity,
  BookOpen
} from "lucide-react";

interface TracksSectionProps {
  onSelectTrack: (track: "tech" | "social") => void;
}

export default function TracksSection({ onSelectTrack }: TracksSectionProps) {
  const tracks = [
    {
      id: "tech" as const,
      number: "TRACK 01",
      title: "Tech Innovation",
      tagline: "Using Code, AI & Systems to Solve Tangible Problems",
      image: "/images/isip_tech_track.jpg",
      badgeColor: "border-[#c5a059]/40 text-[#c5a059] bg-[#0a192f]",
      accentGlow: "group-hover:border-[#c5a059]/60",
      focusItems: [
        "System architecture & user data-flow diagrams",
        "Interactive Figma or Canva prototype mockups",
        "Unit economics & technological feasibility defense",
        "Zero built code required — evaluated on framework rigor",
      ],
      archetypes: ["Adaptive EdTech AI", "Rural Clinic Triage", "Crop-Disease Vision"],
      mentorType: "Computer Science & Product Architecture Faculty",
    },
    {
      id: "social" as const,
      number: "TRACK 02",
      title: "Social Impact",
      tagline: "Grassroots, Community & Non-Profit Blueprints That Scale",
      image: "/images/isip_social_track.jpg",
      badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-950/40",
      accentGlow: "group-hover:border-emerald-500/60",
      focusItems: [
        "Grassroots stakeholder adoption & field mapping",
        "Social return on investment (SROI) framework",
        "Self-sustaining funding & circular revenue model",
        "Measurable community impact & volunteer deployment",
      ],
      archetypes: ["Micro-Waste Recovery", "Rural Learning Pods", "Hygiene Access Network"],
      mentorType: "Development Economics & Public Policy Faculty",
    },
  ];

  return (
    <section id="tracks" className="relative py-28 bg-[#050B14] text-white border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#c5a059]/5 blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Specialized Venture Arenas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Two Dedicated Tracks. <br />
            <span className="text-[#c5a059] italic font-normal">One Global Stage.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light"
          >
            Choose your arena. Both tracks compete for the identical ₹75,000 prize pool and receive tailored faculty mentorship.
          </motion.p>
        </div>

        {/* Dual Luxury Track Cards with High-Res Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group relative rounded-3xl bg-gradient-to-b from-[#0a192f]/70 to-[#06101f]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-black/70 flex flex-col justify-between ${track.accentGlow}`}
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Pill Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border backdrop-blur-md ${track.badgeColor}`}>
                      {track.number}
                    </span>
                  </div>
                </div>

                {/* Track Title & Tagline */}
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-slate-300 font-light mb-6">
                  {track.tagline}
                </p>

                {/* Focus Deliverables */}
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                  {track.focusItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Example Archetypes Pills */}
                <div className="mb-8 pt-4 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                    Example Project Archetypes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {track.archetypes.map((arch, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                      >
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTrack(track.id)}
                className="w-full py-3.5 rounded-xl bg-[#0a192f] hover:bg-[#c5a059] text-white hover:text-[#050B14] border border-[#c5a059]/40 font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg group/btn"
              >
                <span>Select {track.title}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
