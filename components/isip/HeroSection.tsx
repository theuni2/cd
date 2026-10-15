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
  GraduationCap
} from "lucide-react";

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreCalendarClick: () => void;
}

export default function HeroSection({
  onRegisterClick,
  onExploreCalendarClick,
}: HeroSectionProps) {
  // Target date for Summer Cohort early-bird / registration lock (May 2027)
  const targetDate = new Date("2027-05-01T23:59:59").getTime();

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

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-[#05070e] text-white">
      {/* Dynamic Background Light Fields */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[15%] w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute top-[40%] left-[45%] w-[380px] h-[380px] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      {/* Futuristic Grid Backdrop Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Badges & Association Banner */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-400/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-blue-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Edition 1 Inaugural Cohort • Summer 2027</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 backdrop-blur-md text-xs sm:text-sm font-medium text-amber-300"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Faculty-Led by IIT, IISc & Global University Academics</span>
          </motion.div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            International Schools{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Innovation Prize
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            A 9-week faculty-led venture incubator and international prize for school
            students in <strong className="text-white font-semibold">Grades 8–12</strong>. Build a breakthrough venture framework with university professors, advance through curated rounds, and compete for{" "}
            <span className="text-amber-400 font-semibold">$8,500 in seed prizes</span>.
          </motion.p>
        </div>

        {/* Key Highlights Pill Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 text-xs sm:text-sm text-slate-300"
        >
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Solo or Teams of up to 3</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Tech & Social Impact Tracks</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>No Coding or Built Product Required</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>100% Student IP Ownership</span>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onRegisterClick}
            id="hero-register-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Register for ISIP (₹5,000 / Student)</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreCalendarClick}
            id="hero-explore-calendar-btn"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Explore 9-Week Calendar</span>
          </button>
        </motion.div>

        {/* Live Countdown & Visual Showcase Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Countdown Timer & Quick Value Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                  Applications Countdown
                </p>
                <h3 className="text-sm font-semibold text-white">
                  Early-Bird Cohort Closes In
                </h3>
              </div>
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Timer Grid */}
            <div className="grid grid-cols-4 gap-2.5 text-center mb-6">
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Days
                </span>
              </div>
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Hours
                </span>
              </div>
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Mins
                </span>
              </div>
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Secs
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Total Prize Pool:</span>
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  $8,500 Cash + Grants
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Registration Fee:</span>
                <span className="font-semibold text-white">
                  ₹5,000 / Student (All-Inclusive)
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Faculty Mentorship:</span>
                <span className="font-semibold text-cyan-300">
                  4 Lead Faculty + 3 Global Sessions
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Grand Finals:</span>
                <span className="font-semibold text-emerald-400">
                  Live Global Online Demo Day
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Holographic Visual Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-950">
              <Image
                src="/images/isip_hero_banner.jpg"
                alt="International Schools Innovation Prize Trophy and Neural Network"
                width={800}
                height={450}
                priority
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Floating Glassmorphic Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">
                    Funnel: Everyone → Top 100 → Top 20 → Top 3
                  </span>
                </div>
                <span className="text-xs font-medium text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-md border border-amber-400/30">
                  1st: $5,000 • 2nd: $2,500 • 3rd: $1,000
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
