"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Scale,
  Users2
} from "lucide-react";

export default function SafeguardingSection() {
  const policies = [
    {
      icon: Scale,
      title: "100% Student IP Ownership",
      highlight: "0% Equity Taken",
      desc: "Students retain full, unencumbered ownership of all pitch decks, intellectual property, and venture ideas. ISIP takes zero equity.",
    },
    {
      icon: Lock,
      title: "DPDP & Parental Safeguarding",
      highlight: "Parent Open-Door Policy",
      desc: "Verifiable parental consent, fully recorded mentor sessions, zero private DMs, and parents are always welcome to join all 1:1 calls.",
    },
    {
      icon: ShieldCheck,
      title: "Human Evaluation Integrity",
      highlight: "Dual Blind Faculty Scoring",
      desc: "Every official qualifier grade is determined independently by human university faculty with strict academic code of conduct standards.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#050B14] text-white border-t border-white/5 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Integrity & Governance</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Built on Absolute <br />
            <span className="text-[#c5a059] italic font-normal">Trust & Student Protection.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light">
            We ensure complete legal protection, verified adult supervision, and strict student data privacy standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policies.map((pol, idx) => {
            const Icon = pol.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#0a192f]/50 border border-white/10 hover:border-[#c5a059]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c5a059] block mb-2">
                    {pol.highlight}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white mb-3">
                    {pol.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {pol.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
