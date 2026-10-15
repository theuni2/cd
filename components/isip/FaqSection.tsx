"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to participate? Can Grade 10 and 12 students register?",
      a: "Yes! ISIP is open to high school students currently in Grades 8 through 12 across India and internationally. Edition 1 is intentionally scheduled over the summer break (May–June 2027) so students can focus on venture building without board exam pressure.",
    },
    {
      q: "Do I need to know how to code or have a working software prototype?",
      a: "No! Absolutely no coding, hardware assembly, or pre-built software is required. Teams are evaluated strictly on their critical thinking, user discovery interviews, solution framework logic, unit feasibility, and pitch delivery. High-fidelity sketches or wireframes made in Figma or Canva are completely sufficient.",
    },
    {
      q: "Can I enter as an individual founder, or do I need a team?",
      a: "You can enter solo or form a team of up to 3 students. Cross-school, cross-city, and international collaborations are fully encouraged. Solo innovators and teams are evaluated against the exact same objective rubric standards.",
    },
    {
      q: "What does the ₹5,000 per student fee include?",
      a: "The fee is all-inclusive for the entire 9-week program. It covers live 60-min weekly masterclasses led by university faculty, weekly live office hours, 24/7 AI-assisted draft scoring against the rubric, access to the moderated peer platform, dual-reviewer evaluation, and eligibility for 1:1 faculty coaching in the Top 100 and Top 20 rounds.",
    },
    {
      q: "How does the selection funnel work (Top 100, Top 20, Top 3)?",
      a: "All teams build during Weeks 1–6. Selection for the Top 100 accelerator (about 50 teams per track) is determined by a cumulative score: Checkpoint 1 (20%) + Checkpoint 2 (30%) + Checkpoint 3 (50%). The Top 100 receive 1:1 mentor coaching and pitch live in Semi-Finals, which are scored fresh to pick the Top 20 Demo Day finalists.",
    },
    {
      q: "How is the $8,500 cash prize money disbursed?",
      a: "Prize money ($5,000 for 1st, $2,500 for 2nd, $1,000 for 3rd) is disbursed directly to the student's parent or legal guardian in 2 to 3 milestone tranches. These milestones are established collaboratively by the team to help fund prototype development, user trials, or community deployment.",
    },
    {
      q: "Who owns the intellectual property (IP) of our venture idea?",
      a: "You and your team own 100% of your intellectual property. ISIP, its mentors, and its university partners claim zero equity and zero IP ownership over any concept, pitch deck, or venture developed during the competition.",
    },
    {
      q: "How does AI-assisted feedback work, and who actually grades us?",
      a: "Students can submit drafts of their briefs at any time during the build phase to receive instant, formative feedback from our AI tool against the ISIP rubric, complete with high-impact fix-lists. However, all official checkpoint grades and qualifier rankings are decided strictly by human faculty members and independent second reviewers.",
    },
    {
      q: "What if our project bridges both Technology and Social Impact?",
      a: "Interdisciplinary projects in health, climate, and education naturally span both. The rule of thumb: if your core innovation lies in the technical algorithm, data pipeline, or software/hardware architecture, enter the Tech track. If your core innovation lies in grassroots community adoption, policy reform, or nonprofit distribution, enter the Social Impact track.",
    },
    {
      q: "What happens if our team does not advance to the Top 100?",
      a: "No team leaves empty-handed. Every participating team receives an in-depth diagnostic feedback report highlighting strengths and growth areas, an official tiered certificate of completion, priority early-bird invitation for Edition 2 (Dubai), and lifetime access to our alumni innovation network.",
    },
    {
      q: "What is your refund policy?",
      a: "We offer a 100% full refund at any time before Week 1 masterclasses commence. Once Week 1 starts, registrations become non-refundable because student allocations, faculty cohorts, and software licenses are finalized.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-[#070a14] text-white border-t border-slate-900 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Everything students, parents, and educators need to know about the International Schools Innovation Prize.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
