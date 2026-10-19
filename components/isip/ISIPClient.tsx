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
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .font-serif-luxury {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .text-gold-accent {
          color: #c5a059;
        }

        .border-gold-accent {
          border-color: rgba(197, 160, 89, 0.35);
        }

        .bg-gold-gradient {
          background: linear-gradient(135deg, #c5a059 0%, #e5c07b 50%, #b38947 100%);
        }
      `}</style>

      <div className="relative min-h-screen bg-[#050B14] text-slate-100 font-sans selection:bg-[#c5a059] selection:text-black">
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

      {/* 4. 8-Week Program Calendar & Milestones */}
      <ProgramCalendarSection />

      {/* 5. Funnel Progression & Coaching Support */}
      <FunnelCoachingSection />

      {/* 6. Rubric & Judging Criteria */}
      <RubricSection />

      {/* 7. ₹75,000 Cash Seed Pool & Honors */}
      <PrizesSection
        onRegisterClick={() => handleOpenRegister()}
      />

      {/* 8. Faculty & Mentors Leadership */}
      <MentorsSection />

      {/* 9. Safeguarding & DPDP Compliance */}
      <SafeguardingSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Final High-Impact Call to Action Banner (FORGE Style) */}
      <section className="relative py-28 bg-[#050B14] text-white border-t border-white/5 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c5a059]/10 blur-[160px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inaugural Cohort • Summer 2027</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Start Your Venture Journey <br />
              <span className="text-[#c5a059] italic font-normal">With Premier University Faculty.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Join ambitious students across Grades 8–12. Learn real venture frameworks, get actionable feedback at every step, and pitch for ₹75,000 in seed prizes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenRegister()}
                id="footer-cta-register-btn"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#c5a059] via-[#e5c07b] to-[#b38947] hover:brightness-110 text-[#050B14] font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-[#c5a059]/25 transition-all cursor-pointer flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Register for ISIP ($20)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#tracks"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0a192f]/70 hover:bg-[#0a192f] text-slate-200 border border-white/15 hover:border-[#c5a059]/50 font-semibold text-sm sm:text-base transition-all"
              >
                Review Tracks
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-white/5 max-w-xl mx-auto">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <GraduationCap className="w-4 h-4 text-[#c5a059]" />
                Faculty-Led Mentorship
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Trophy className="w-4 h-4 text-[#c5a059]" />
                ₹75,000 Seed Pool
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
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
    </>
  );
}
