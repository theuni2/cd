"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import AtAGlanceSection from "./AtAGlanceSection";
import TracksSection from "./TracksSection";
import ProgramCalendarSection from "./ProgramCalendarSection";
import FunnelCoachingSection from "./FunnelCoachingSection";
import RubricSection from "./RubricSection";
import PrizesSection from "./PrizesSection";
import MentorsSection from "./MentorsSection";
import SafeguardingSection from "./SafeguardingSection";
import FaqSection from "./FaqSection";
import RegistrationModal from "./RegistrationModal";
import FloatingApplyBar from "./FloatingApplyBar";
import Footer from "@/components/Footer";
import { Sparkles, ArrowRight, Trophy, GraduationCap, ShieldCheck } from "lucide-react";

export default function ISIPClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<"tech" | "social">("tech");

  const handleOpenRegister = (track?: "tech" | "social") => {
    if (track) {
      setSelectedTrack(track);
    }
    setIsModalOpen(true);
  };

  const handleScrollToCalendar = () => {
    const el = document.getElementById("calendar");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* 1. Hero Section */}
      <HeroSection
        onRegisterClick={() => handleOpenRegister()}
        onExploreCalendarClick={handleScrollToCalendar}
      />

      {/* 2. At A Glance Executive Dashboard */}
      <AtAGlanceSection />

      {/* 3. Specialized Dual Tracks */}
      <TracksSection
        onSelectTrack={(track) => handleOpenRegister(track)}
      />

      {/* 4. 9-Week Program Calendar & Milestones */}
      <ProgramCalendarSection />

      {/* 5. Funnel Progression & Coaching Support */}
      <FunnelCoachingSection />

      {/* 6. Rubric & Judging Criteria */}
      <RubricSection />

      {/* 7. $8,500 Cash Seed Pool & Honors */}
      <PrizesSection
        onRegisterClick={() => handleOpenRegister()}
      />

      {/* 8. Faculty & Mentors Leadership */}
      <MentorsSection />

      {/* 9. Safeguarding & DPDP Compliance */}
      <SafeguardingSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Final High-Impact Call to Action Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#070a14] to-[#04060c] text-white border-t border-slate-900 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/10 blur-[160px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Inaugural Cohort • Limited Seats</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Start Your Venture Journey with Top Faculty.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Join 1,000 ambitious students across Grades 8–12. Learn real venture frameworks, get actionable feedback at every step, and pitch for $8,500 in seed prizes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenRegister()}
                id="footer-cta-register-btn"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-base shadow-2xl shadow-blue-500/30 transition-all cursor-pointer flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Register for ISIP (₹5,000 / Student)</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#tracks"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold text-base transition-colors"
              >
                Review Tracks
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Faculty-Led Support
              </span>
              <span className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                $8,500 Cash Seed Pool
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Student IP Retained
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Registration Sticky Bar */}
      <FloatingApplyBar onRegisterClick={() => handleOpenRegister()} />

      {/* Multi-Step Application Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedTrack={selectedTrack}
      />

      {/* Global Site Footer */}
      <Footer />
    </div>
  );
}
