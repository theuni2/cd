"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Trophy,
  Users,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function AtAGlanceSection() {
  const stats = [
    {
      number: "₹75,000",
      label: "Seed Grant Pool",
      subtext: "1st: ₹40,000 • 2nd: ₹25,000 • 3rd: ₹10,000",
    },
    {
      number: "Grades 8–12",
      label: "Global Student Builders",
      subtext: "Solo Founders or Teams of 3",
    },
    {
      number: "Leading Faculty",
      label: "Academic & Industry Mentors",
      subtext: "Leading Professionals from Google & OpenAI",
    },
    {
      number: "100%",
      label: "Student IP Ownership",
      subtext: "Zero Equity Claimed by ISIP",
    },
  ];

  return (
    <section className="relative py-28 bg-[#07101E] text-white border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#c5a059]/5 blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: FORGE-Style Editorial Narrative & Gold-Bar Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Incubator Advantage</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Academic Rigor Meets <br />
              <span className="text-[#c5a059] italic font-normal">Real-World Venture Building.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Most student hackathons test pre-existing coding skills or reward whoever has access to private labs. <strong className="text-white font-semibold">ISIP is fundamentally different.</strong>
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Over 8 structured weeks, university faculty and global venture leaders guide you step-by-step from discovering an authentic problem to building a tested venture blueprint. Zero built code required — you are judged purely on framework depth, problem validation, and strategic conviction.
            </p>

            {/* Stats Grid with Gold Left-Borders (FORGE Signature Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="border-l-[3px] border-[#c5a059] pl-4 py-1"
                >
                  <span className="font-serif-luxury text-3xl font-bold text-white block">
                    {stat.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold block mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {stat.subtext}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase Card with Gold Framing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl shadow-black/60 group">
              <Image
                src="/images/isip_tech_track.jpg"
                alt="Students collaborating in modern venture incubator"
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/20 to-transparent opacity-80" />

              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0a192f]/90 border border-[#c5a059]/30 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#c5a059] font-bold">
                    Faculty-Led Masterclasses
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Leading University Faculty
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-light">
                  Direct guidance from leading professionals from Google & OpenAI, paired with continuous formative AI feedback on every brief.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
