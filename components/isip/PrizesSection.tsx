"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Sparkles,
  Plane,
  Building2,
  DollarSign,
  CheckCircle2,
  Calendar,
  Globe,
  Compass,
  ArrowRight
} from "lucide-react";

interface PrizesSectionProps {
  onRegisterClick: () => void;
}

export default function PrizesSection({ onRegisterClick }: PrizesSectionProps) {
  const topPrizes = [
    {
      place: "1st Place",
      title: "ISIP Global Champion",
      cash: "$5,000 USD",
      inrEstimate: "~₹4.4 Lakhs",
      badge: "Grand Prize Winner",
      accent: "text-amber-400",
      border: "border-amber-500/40",
      bgGradient: "from-amber-950/40 via-slate-900 to-slate-950",
      perks: [
        "Official ISIP Winner Title & Trophy",
        "International Press Release & Feature",
        "Milestone-based venture seed disbursement",
        "Exclusive in-kind incubator & cloud perks",
        "Spotlight at Edition 2 Dubai Demo Day",
      ],
      isGrand: true,
    },
    {
      place: "2nd Place",
      title: "First Runner-Up",
      cash: "$2,500 USD",
      inrEstimate: "~₹2.2 Lakhs",
      badge: "Silver Award",
      accent: "text-slate-200",
      border: "border-slate-500/30",
      bgGradient: "from-slate-900 via-slate-900 to-slate-950",
      perks: [
        "Official ISIP Runner-Up Title & Certificate",
        "Venture grant paid in milestone tranches",
        "In-kind AI, Cloud, and Software credits",
        "Featured on ISIP Global Hall of Fame",
      ],
      isGrand: false,
    },
    {
      place: "3rd Place",
      title: "Second Runner-Up",
      cash: "$1,000 USD",
      inrEstimate: "~₹88,000",
      badge: "Bronze Award",
      accent: "text-amber-600",
      border: "border-amber-700/30",
      bgGradient: "from-slate-900 via-slate-900 to-slate-950",
      perks: [
        "Official Third Place Title & Certificate",
        "Venture grant paid in milestone tranches",
        "In-kind sponsor credits & resources",
        "Priority invitation to future cohorts",
      ],
      isGrand: false,
    },
  ];

  const categoryAwards = [
    {
      title: "Best in Tech Innovation",
      desc: "Awarded to the highest-ranking venture in the Tech track at Demo Day.",
      perk: "Special Distinction Title & Honors Certificate",
    },
    {
      title: "Best in Social Impact",
      desc: "Awarded to the highest-ranking venture in the Social Impact track at Demo Day.",
      perk: "Special Distinction Title & Honors Certificate",
    },
    {
      title: "Top 20 Finalists Perks",
      desc: "All teams pitching live on Demo Day receive institutional career acceleration.",
      perk: "Finalist Certificate, Cloud/AI Credits & 1:1 Uni Discovery Counseling",
    },
    {
      title: "Top 100 Semi-Finalists",
      desc: "Teams advancing through Checkpoints 1, 2, and 3.",
      perk: "Semi-Finalist Certificate & 30-min 1:1 Lead Mentor Pitch Clinic",
    },
  ];

  return (
    <section id="prizes" className="relative py-24 bg-[#05070e] text-white border-t border-slate-900 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Prizes, Honors & Future Editions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            $8,500 Cash Seed Pool & <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Global Recognition
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Prize grants are awarded to fuel student projects into viable ventures, paid out in milestone tranches to parents or legal guardians.
          </p>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {topPrizes.map((prize, idx) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-7 sm:p-8 rounded-2xl bg-gradient-to-b ${prize.bgGradient} border ${prize.border} flex flex-col justify-between relative shadow-2xl ${
                prize.isGrand ? "ring-1 ring-amber-400/50 -translate-y-2" : ""
              }`}
            >
              {prize.isGrand && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Prestigious
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold">
                    {prize.place}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-slate-950 ${prize.border} ${prize.accent}`}>
                    {prize.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {prize.title}
                </h3>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <span className={`block text-3xl sm:text-4xl font-extrabold font-mono ${prize.accent}`}>
                    {prize.cash}
                  </span>
                  <span className="text-xs text-slate-400">
                    {prize.inrEstimate} Seed Venture Grant
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {prize.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${prize.accent}`} />
                      <span className="font-light">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-500 font-mono block">
                  Tranche Milestones: 2–3 Verified Delivery Phases
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tier Recognition & Special Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {categoryAwards.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" />
                <span>Special Honor</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
              <p className="text-xs text-slate-400 font-light mb-3">{item.desc}</p>
              <div className="text-[11px] text-amber-300 font-medium p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                {item.perk}
              </div>
            </div>
          ))}
        </div>

        {/* Global Roadmap: Dubai & Bangkok In-Person Finals */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Global Expansion Roadmap</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Edition 1 Online. <br />
                <span className="text-cyan-400">Edition 2 In-Person in Dubai.</span>
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Edition 1 runs fully online to democratize access across all international and domestic schools. Outstanding participants in Edition 1 receive priority consideration for Edition 2, which will feature a live in-person grand finale on stage in Dubai, followed by Bangkok for Edition 3.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Edition 1</span>
                  <span className="font-bold text-cyan-400">Fully Online</span>
                  <span className="text-[10px] text-slate-500 block">$8,500 Pool</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Edition 2</span>
                  <span className="font-bold text-amber-400">Dubai Stage</span>
                  <span className="text-[10px] text-slate-500 block">Sponsor Pool</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Edition 3</span>
                  <span className="font-bold text-emerald-400">Bangkok / Dubai</span>
                  <span className="text-[10px] text-slate-500 block">Expanded</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-blue-500/30 shadow-2xl">
                <Image
                  src="/images/isip_dubai_final.jpg"
                  alt="Dubai Grand Innovation Stage for ISIP Edition 2"
                  width={600}
                  height={350}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="block text-center text-[11px] text-slate-400 mt-2 font-mono">
                Architectural Preview • Edition 2 Dubai Innovation Final Stage
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
