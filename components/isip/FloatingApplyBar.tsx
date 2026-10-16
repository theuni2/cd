"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ArrowRight, Sparkles } from "lucide-react";

interface FloatingApplyBarProps {
  onRegisterClick: () => void;
}

export default function FloatingApplyBar({ onRegisterClick }: FloatingApplyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:px-6 sm:py-3.5 rounded-full bg-[#0a192f]/90 border border-[#c5a059]/40 backdrop-blur-xl shadow-2xl text-white shadow-black/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#c5a059]/20 text-[#c5a059] hidden sm:block">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif-luxury text-sm font-bold text-white tracking-wide">
                    International Schools Innovation Prize
                  </span>
                  <span className="text-[10px] font-mono text-[#c5a059] bg-[#c5a059]/15 px-2 py-0.5 rounded-full border border-[#c5a059]/30">
                    Edition 1
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-light hidden sm:block">
                  9-Week Faculty Incubator • $8,500 Cash Seed Pool • Grades 8–12
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <span className="text-xs font-mono font-bold text-[#c5a059] hidden md:block">
                ₹5,000 / Student
              </span>
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#c5a059] via-[#e5c07b] to-[#b38947] hover:brightness-110 text-[#050B14] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#c5a059]/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Register for ISIP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
