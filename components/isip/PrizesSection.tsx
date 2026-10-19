"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Medal,
  Star,
  MapPin,
  Globe
} from "lucide-react";

interface PrizesSectionProps {
  onRegisterClick: () => void;
}

export default function PrizesSection({ onRegisterClick }: PrizesSectionProps) {
  return (
    <section className="relative py-28 bg-[#07101E] text-white border-t border-white/5 overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#c5a059]/10 blur-[180px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4">
            <Trophy className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Honors & Seed Grants</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            ₹75,000 Non-Dilutive <br />
            <span className="text-[#c5a059] italic font-normal">Cash Seed Grants.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light">
            Awarded directly to student builders. Zero equity taken. Designed to fund actual deployment, patents, and customer acquisition.
          </p>
        </div>

        {/* FORGE-Style 3-Tier Luxury Prize Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-5xl mx-auto mb-20">
          
          {/* 2nd Place: Runner-Up */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#0a192f]/70 border border-white/10 backdrop-blur-xl text-center flex flex-col justify-between hover:border-slate-400 transition-all shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 mx-auto flex items-center justify-center mb-6">
                <Medal className="w-7 h-7 text-slate-300" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                2nd Place Runner-Up
              </span>
              <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white block mb-6">
                ₹25,000
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 text-left mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>₹25,000 Seed Grant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Official ISIP Runner-Up Trophy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Cloud & AI builder credits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>University admissions dossier support</span>
                </li>
              </ul>
            </div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block pt-4 border-t border-white/5">
              Top 20 Demo Day Finalist
            </span>
          </motion.div>

          {/* 1st Place: Global Champion (Center, Elevated & Glowing Gold) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#112444] to-[#0a192f] border-2 border-[#c5a059] backdrop-blur-2xl text-center flex flex-col justify-between shadow-2xl shadow-[#c5a059]/20 md:-translate-y-4 relative"
          >
            {/* Top Gold Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#c5a059] to-[#e5c07b] text-[#050B14] text-xs font-extrabold uppercase tracking-widest shadow-md">
              Global Champion
            </div>

            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#c5a059]/20 border border-[#c5a059]/40 mx-auto flex items-center justify-center mb-6 mt-2">
                <Trophy className="w-9 h-9 text-[#c5a059]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] block mb-2">
                1st Place Winner
              </span>
              <span className="font-serif-luxury text-5xl sm:text-6xl font-extrabold text-[#c5a059] block mb-6">
                ₹40,000
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 text-left mb-8">
                <li className="flex items-center gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>₹40,000 Cash Seed Grant</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Official ISIP Winner Title & Trophy</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Global Press Feature & Hall of Fame</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Global Investor Panel Live Feature</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Full Uni Discovery VIP prep package</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onRegisterClick}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c5a059] via-[#e5c07b] to-[#b38947] hover:brightness-110 text-[#050B14] font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#c5a059]/20 cursor-pointer"
            >
              Compete for 1st Place
            </button>
          </motion.div>

          {/* 3rd Place: Third Place Winner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#0a192f]/70 border border-white/10 backdrop-blur-xl text-center flex flex-col justify-between hover:border-amber-700/60 transition-all shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-950/40 border border-amber-800/40 mx-auto flex items-center justify-center mb-6">
                <Medal className="w-7 h-7 text-amber-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 block mb-2">
                3rd Place Winner
              </span>
              <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white block mb-6">
                ₹10,000
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 text-left mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>₹10,000 Seed Grant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Official ISIP 3rd Place Plaque</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Cloud & AI builder credits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>University admissions portfolio advisory</span>
                </li>
              </ul>
            </div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block pt-4 border-t border-white/5">
              Top 20 Demo Day Finalist
            </span>
          </motion.div>

        </div>

        {/* Fully Online Grand Finals Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-[#c5a059]/30 bg-[#0a192f]/80 p-8 sm:p-10 backdrop-blur-xl max-w-5xl mx-auto shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-xs font-bold uppercase tracking-wider text-[#c5a059]">
                <Globe className="w-3.5 h-3.5" />
                <span>Edition 1 • 100% Online Global Grand Finals</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                Live Online Grand Finals
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Edition 1 is conducted 100% online for maximum global accessibility. Top 20 finalist teams pitch live directly to a distinguished Global Investor & Faculty Panel from anywhere in the world, eliminating logistical barriers while delivering high-stakes international exposure.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  Global Investor Panel
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium text-white">
                  <Trophy className="w-4 h-4 text-[#c5a059]" />
                  Live Virtual Stage
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-56 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/isip_hero_banner.jpg"
                alt="Global Online Grand Innovation Stage for ISIP"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
