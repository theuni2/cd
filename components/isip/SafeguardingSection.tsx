"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  AlertTriangle,
  Heart,
  Scale,
  Sparkles,
  CheckCircle2,
  Users2
} from "lucide-react";

export default function SafeguardingSection() {
  const policies = [
    {
      icon: Lock,
      title: "DPDP Act Verified Parental Consent",
      desc: "Every applicant requires verifiable parent/legal guardian consent at checkout, in full alignment with India's Digital Personal Data Protection (DPDP) Act.",
    },
    {
      icon: Eye,
      title: "No Private Channels or DMs",
      desc: "No sharing of personal phone numbers, WhatsApp, or direct messages between mentors and students. All calls are on secure platforms and recorded.",
    },
    {
      icon: Scale,
      title: "100% Student IP Ownership (Zero Equity)",
      desc: "Students retain full, unencumbered ownership of all pitch decks, intellectual property, and venture ideas. ISIP claims 0% equity.",
    },
    {
      icon: ShieldCheck,
      title: "Vetted Mentors & Code of Conduct",
      desc: "Every faculty member and judge undergoes background verification and signs an explicit minor-safeguarding code of conduct before student interaction.",
    },
    {
      icon: Heart,
      title: "Parent Welcome Policy on 1:1 Calls",
      desc: "Parents and guardians are actively invited to join all 1:1 Top 100 mentor sessions and dress rehearsals alongside their students.",
    },
    {
      icon: FileCheck,
      title: "Human Scoring Guarantee",
      desc: "While AI provides 24/7 formative feedback on drafts against the rubric, all official checkpoint and finalist scores are determined exclusively by human evaluators.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#05070e] text-white border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Child Safety & Ethics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Safeguarding, IP & Operations
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            All participants are minors. Every adult–student interaction takes place in the open on our recorded platform, guaranteeing strict child protection and complete peace of mind for parents.
          </p>
        </div>

        {/* 6 Protection Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {policies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Operational Roles & Refund Guarantee */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border border-emerald-500/20 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                100% Pre-Cohort Refund Guarantee
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Risk-Free Registration Before Week 1
              </h4>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                If your schedule changes or exams conflict, you can request a full 100% refund at any point before Week 1 masterclasses commence. After Week 1 begins, fees become non-refundable as cohort seats and faculty allocations are locked.
              </p>
            </div>

            <div className="md:col-span-4 p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2.5">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <Users2 className="w-4 h-4 text-cyan-400" />
                <span>Dedicated Operations Team</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Program Manager:</span>
                <span className="text-slate-200">Calendar & Masterclasses</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Safeguarding Lead:</span>
                <span className="text-slate-200">24/7 Incident Escalation</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Student Coordinators:</span>
                <span className="text-slate-200">Office Hours & Checkpoints</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
