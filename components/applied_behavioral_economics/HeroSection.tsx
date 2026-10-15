"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Clock,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  CheckCircle2,
  Globe,
  BrainCircuit,
  Briefcase
} from "lucide-react";

interface HeroProps {
  onApplyClick: () => void;
}

export default function HeroSection({ onApplyClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">

      {/* Dynamic Floating Background Gradient Auras */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-emerald-300/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"
      />
      <div className="absolute -bottom-10 left-1/3 w-[500px] h-[250px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Left Column: Clean Title, Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Top Animated Pill Tag */}
            <motion.div variants={itemVariants} className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-emerald-700 font-extrabold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Research Fellowship
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700">Grades 9–12</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-extrabold">20–25 Fellows Max</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
            >
              The Applied Behavioral Economics{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">
                Scholar Program
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light max-w-2xl"
            >
              A six-week fellowship plus Week Zero in Applied Behavioral Economics & Choice Architecture. Master decision theory, diagnose commercial friction, and produce a consultancy-grade <span className="text-slate-900 font-semibold underline decoration-emerald-500 decoration-2 underline-offset-4">Behavioral Strategy Brief</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="https://lms.thecareerdiscovery.com/home-programs/d73c70d8-1b5a-43a7-95c9-bb40db3a68d9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 group cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Apply / Contact</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#reading-list"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <BookOpen className="w-5 h-5 text-emerald-600" />
                View Week Zero Literature
              </a>
            </motion.div>

            {/* Stats Row Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold mb-0.5">
                  <Clock className="w-3.5 h-3.5" /> 10 Live Hours
                </div>
                <div className="text-slate-900 font-extrabold text-xs">Professor-Led</div>
                <div className="text-slate-500 text-[11px]">6 x 90m + 2 Desks</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1.5 text-teal-700 text-xs font-bold mb-0.5">
                  <Award className="w-3.5 h-3.5" /> Deliverable
                </div>
                <div className="text-slate-900 font-extrabold text-xs">Strategy Brief</div>
                <div className="text-slate-500 text-[11px]">1,500w + 5 Slides</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1.5 text-indigo-700 text-xs font-bold mb-0.5">
                  <Users className="w-3.5 h-3.5" /> Post-Program
                </div>
                <div className="text-slate-900 font-extrabold text-xs">Ph.D. Coaches</div>
                <div className="text-slate-500 text-[11px]">2 Feedback Rounds</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1.5 text-amber-700 text-xs font-bold mb-0.5">
                  <Globe className="w-3.5 h-3.5" /> Schedule
                </div>
                <div className="text-slate-900 font-extrabold text-xs">Saturdays Live</div>
                <div className="text-slate-500 text-[11px]">ET • GST • IST</div>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Featured Professor Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center">

            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/40 via-teal-200/40 to-indigo-300/40 rounded-3xl blur-2xl transform rotate-2 scale-95" />

            {/* Main Animated Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md bg-white border border-slate-200/90 rounded-3xl shadow-2xl p-6 sm:p-7 text-left"
            >

              {/* Professor Portrait Frame */}
              <div className="relative mb-5 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-100">
                <img
                  src="/professor/kimberly_rose_clark.png"
                  alt="Professor Kimberly Rose Clark, Ph.D."
                  className="w-full h-72 sm:h-80 object-cover object-top"
                />

                {/* Clean Dark Overlay Badge at Bottom of Photo */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-white flex items-center justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-emerald-400 block">
                      Professor Kimberly Rose Clark, Ph.D.
                    </span>
                    <span className="text-[11px] text-slate-300">
                      Senior Lecturer, Dartmouth College
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase">
                    Ivy League
                  </span>
                </div>
              </div>

              {/* Professor Credentials List */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Dartmouth Ph.D. & Oberlin B.A.</span>
                    <span className="text-slate-500">Human decision-making under uncertainty</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">25-Year CRO (Merchant Mechanics)</span>
                    <span className="text-slate-500">Consumer research for global retail brands</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-extrabold text-emerald-900 block">100% Direct Instruction (No TAs)</span>
                    <span className="text-emerald-700 font-medium">All 10 live contact hours delivered by Prof Clark</span>
                  </div>
                </div>
              </div>

              {/* Animated Floating Accent Chip */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3.5 -right-3.5 bg-slate-900 text-white px-3.5 py-2 rounded-2xl shadow-xl text-xs font-bold border border-slate-800 flex items-center gap-1.5"
              >
                <BrainCircuit className="w-4 h-4 text-emerald-400" />
                <span>Pracademic Model</span>
              </motion.div>

            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
