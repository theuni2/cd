"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FloatingApplyBarProps {
  onRegisterClick: () => void;
}

export default function FloatingApplyBar({ onRegisterClick }: FloatingApplyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 550px down
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:px-6 sm:py-3.5 rounded-2xl bg-slate-950/90 border border-blue-500/30 backdrop-blur-xl shadow-2xl text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/20 text-cyan-400 hidden sm:block">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white tracking-wide">
                    International Schools Innovation Prize
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                    Edition 1
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-light hidden sm:block">
                  9-Week Incubator • ₹5,000 / Student • $8,500 Cash Seed Pool • Grades 8–12
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <span className="text-xs font-mono font-bold text-amber-400 hidden md:block">
                ₹5,000 / Student
              </span>
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
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
