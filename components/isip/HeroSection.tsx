"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Users,
  Compass,
  CheckCircle2,
  DollarSign,
  GraduationCap,
  Clock
} from "lucide-react";

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreCalendarClick: () => void;
}

export default function HeroSection({
  onRegisterClick,
  onExploreCalendarClick,
}: HeroSectionProps) {
  const targetDate = new Date("2026-12-10T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const kpis = [
    { value: "28 OCT – 10 DEC", label: "Registration Window", highlight: true },
    { value: "10 – 20 DEC", label: "7-Days Live Classes", highlight: false },
    { value: "30 DEC – 7 JAN", label: "Deck & Website Submissions", highlight: true },
    { value: "10 JANUARY", label: "Results & ₹75K Grants", highlight: true },
    { value: "₹2,000", label: "Per Builder Fee", highlight: false },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-[#050B14] text-white">
      {/* 1. Cinematic Background Image Layer with Navy Vignette (FORGE Style) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/isip_hero_stage.jpg"
          alt="International Schools Innovation Prize Grand Stage"
          fill
          priority
          className="object-cover object-center opacity-30 scale-105"
        />
        {/* Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-[#050B14]/80 to-[#050B14]" />
        {/* Radial Center Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_25%,transparent_0%,#050B14_100%)]" />
        {/* Ambient Gold Halo */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c5a059]/10 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Gold Pill Kicker */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f]/70 backdrop-blur-md shadow-lg shadow-black/40"
          >
            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#c5a059]">
              Edition 1 • International Schools Innovation Prize
            </span>
          </motion.div>
        </div>

        {/* Editorial Serif Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.08]"
          >
            Where Young Minds <br />
            <span className="text-[#c5a059] italic font-normal">Build Breakthroughs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            An intensive venture competition for students in <strong className="text-white font-semibold">Grades 8–12</strong>. Master venture frameworks in 7 days of live masterclasses, build your Pitch Deck & Website prototype, and compete for <strong className="text-[#c5a059] font-semibold">₹75,000 in seed prizes</strong>.
          </motion.p>
        </div>

        {/* Action Buttons (FORGE Gold Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onRegisterClick}
            id="hero-register-btn"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#c5a059] via-[#e5c07b] to-[#b38947] hover:brightness-110 text-[#050B14] font-extrabold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#c5a059]/20 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Register for ISIP (₹2,000)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreCalendarClick}
            id="hero-explore-calendar-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0a192f]/70 hover:bg-[#0a192f] text-slate-200 border border-white/15 hover:border-[#c5a059]/50 font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-[#c5a059]" />
            <span>Explore Program Timeline</span>
          </button>
        </motion.div>

        {/* Luxury KPI Glass Ribbon (Linear / Apple style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto mb-16"
        >
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border backdrop-blur-md text-center transition-all duration-300 ${
                kpi.highlight
                  ? "bg-[#0a192f]/60 border-[#c5a059]/30 hover:border-[#c5a059]/60 shadow-lg shadow-black/30"
                  : "bg-slate-900/40 border-white/10 hover:border-white/20"
              }`}
            >
              <span className={`block font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide ${kpi.highlight ? "text-[#c5a059]" : "text-white"}`}>
                {kpi.value}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider block mt-1">
                {kpi.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Split Preview: Live Countdown & Grand Stage Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Countdown Timer in FORGE Navy & Gold */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 bg-gradient-to-b from-[#0a192f]/80 to-[#06101f]/90 border border-[#c5a059]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#c5a059] font-bold block mb-1">
                  Registration Window
                </span>
                <h3 className="text-base font-serif-luxury font-bold text-white">
                  Registration Closes 10th Dec
                </h3>
              </div>
              <span className="flex h-3 w-3 rounded-full bg-[#c5a059] animate-ping" />
            </div>

            {/* Timer Grid */}
            <div className="grid grid-cols-4 gap-2.5 text-center mb-6">
              <div className="bg-[#050B14]/80 border border-white/10 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#c5a059] font-mono">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Days</span>
              </div>
              <div className="bg-[#050B14]/80 border border-white/10 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Hours</span>
              </div>
              <div className="bg-[#050B14]/80 border border-white/10 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Mins</span>
              </div>
              <div className="bg-[#050B14]/80 border border-white/10 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#c5a059] font-mono">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Secs</span>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Registration:</span>
                <span className="font-semibold text-white">28th Oct – 10th Dec (₹2,000)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Classes (7 Days):</span>
                <span className="font-semibold text-emerald-400">10th – 20th Dec (Live Faculty)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Submissions Window:</span>
                <span className="font-semibold text-white">30th Dec – 7th Jan (Deck + Web)</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-400">Results & Seed Pool:</span>
                <span className="font-bold text-[#c5a059] flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" />
                  10th Jan (₹75,000 Pool)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Framed Visual of Grand Innovation Stage */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl bg-[#050B14]">
              <Image
                src="/images/isip_hero_banner.jpg"
                alt="International Schools Innovation Prize Stage and Global Network"
                width={800}
                height={450}
                priority
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />

              {/* Floating Glassmorphic Footer Pill */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3.5 bg-[#050B14]/85 backdrop-blur-md border border-[#c5a059]/25 rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">
                    Funnel: All Builders ➔ Top 100 ➔ Top 20 ➔ Top 3
                  </span>
                </div>
                <span className="text-xs font-bold text-[#c5a059] bg-[#c5a059]/15 px-3 py-1 rounded-full border border-[#c5a059]/40">
                  1st: $1,000 • 2nd: $650 • 3rd: $250
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
