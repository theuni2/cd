"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to participate in ISIP?",
      a: "ISIP is open to students worldwide in Grades 8 through 12. You can compete solo as an individual founder or in collaborative teams of up to 3 students from any school or city.",
    },
    {
      q: "Do students need continuous live presence or fixed daily hours to participate?",
      a: "No! ISIP is structured flexibly to fit around rigorous school schedules, extracurriculars, and exam periods. All faculty masterclasses and mentor sessions are recorded for on-demand viewing, and office hours have flexible slots. You only need approximately 3–5 hours per week at your own schedule to complete your checkpoint deliverables.",
    },
    {
      q: "Do I need previous coding experience or a built software prototype?",
      a: "No! Absolutely no coding, hardware, or built software is required. You are evaluated on problem validation, analytical framework depth, interactive Figma/Canva wireframes, and pitch conviction.",
    },
    {
      q: "What does the ₹2,000 per student fee include?",
      a: "The fee covers the complete program: 7 days of live faculty-led masterclasses, open office hours, mentor evaluation, rubric feedback on your Pitch Deck and Website prototype, and consideration for the ₹75,000 seed grant pool.",
    },
    {
      q: "Who owns our venture idea and intellectual property?",
      a: "You and your team retain 100% full, unencumbered ownership of all ideas, pitch decks, and prototypes. ISIP takes 0% equity and 0% IP ownership.",
    },
    {
      q: "How does the competition timeline work?",
      a: "Registration runs from 28th Oct to 10th Dec. Enrolled teams attend 7 days of live faculty masterclasses from 10th to 20th Dec. The submission window opens 30th Dec to 7th Jan for your 10-slide Pitch Deck and Website/Prototype, followed by official results and prize awards on 10th January.",
    },
    {
      q: "What if our venture bridges both Tech and Social Impact?",
      a: "If your core breakthrough is an algorithm, app, or hardware system, choose the Tech Track. If your core breakthrough is community distribution, behavior adoption, or policy change, choose the Social Impact Track.",
    },
  ];

  return (
    <section id="faq" className="relative py-28 bg-[#07101E] text-white border-t border-white/5 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked <br />
            <span className="text-[#c5a059] italic font-normal">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#0a192f] border-[#c5a059]/50 shadow-xl shadow-black/40"
                    : "bg-[#050B14]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-luxury text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "border-[#c5a059] text-[#c5a059] rotate-180 bg-[#c5a059]/10"
                      : "border-white/20 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
