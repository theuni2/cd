"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import GlanceSection from "./GlanceSection";
import WhyJoinSection from "./WhyJoinSection";
import ProfessorSection from "./ProfessorSection";
import DeliverableSection from "./DeliverableSection";
import ProcessSection from "./ProcessSection";
import ReadingListSection from "./ReadingListSection";
import SyllabusSection from "./SyllabusSection";
import RubricSection from "./RubricSection";
import CoachAndBudgetSection from "./CoachAndBudgetSection";
import GuidelinesSection from "./GuidelinesSection";
import ApplicationModal from "./ApplicationModal";
import Footer from "@/components/Footer";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function BehavioralEconomicsClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">



      {/* Main Sections */}
      <HeroSection onApplyClick={() => setIsModalOpen(true)} />
      <GlanceSection />
      <WhyJoinSection />
      <ProfessorSection />
      <DeliverableSection />
      <ProcessSection />
      <ReadingListSection />
      <SyllabusSection />
      {/* <RubricSection /> */}
      {/* <CoachAndBudgetSection /> */}
      <GuidelinesSection />

      {/* Final Call to Action Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Selective Fellowship Cohort
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Master Choice Architecture & Behavioral Strategy?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Join 30 to 35 selected fellows for six live sessions with Dartmouth Professor Kimberly Rose Clark, Ph.D., and graduate with a consultancy-ready Behavioral Strategy Brief.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://lms.thecareerdiscovery.com/home-programs/d73c70d8-1b5a-43a7-95c9-bb40db3a68d9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-extrabold text-base shadow-2xl shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Contact & Apply for Fellowship</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact & Enrollment Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.a
          href="https://lms.thecareerdiscovery.com/home-programs/d73c70d8-1b5a-43a7-95c9-bb40db3a68d9"
          target="_blank"
          rel="noopener noreferrer"
          animate={{
            x: [0, -5, 5, -5, 5, -2, 2, 0],
            rotate: [0, -4, 4, -4, 4, -2, 2, 0],
            scale: [1, 1.04, 1, 1.04, 1, 1, 1, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.08, rotate: 0, x: 0 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/95 hover:bg-slate-950 text-white font-bold text-sm border border-emerald-500/40 shadow-2xl shadow-emerald-500/25 backdrop-blur-md transition-all group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Contact & Apply</span>
          <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>
      </div>

      {/* Application Form Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
