"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2
} from "lucide-react";

export default function CoachAndBudgetSection() {
  const budgetRows = [
    { commitment: "Teaching sessions 01 through 06", sessions: "6 × 90 minutes", hours: "9.0 hrs" },
    { commitment: "Open Desk drop-ins A and B", sessions: "2 × 30 minutes", hours: "1.0 hr" },
    { commitment: "Asynchronous review, grading, or written feedback", sessions: "None", hours: "0.0 hrs" },
  ];

  return (
    <section id="support-budget" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Column 1: Ph.D. Writing Coach Support */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
                Post-Program Support
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-7 h-7 text-emerald-600" />
                Ph.D. Writing Coach Support
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                Support from Ph.D. writing coaches begins once the fellowship has ended and the deliverable is complete. Coaches do not teach during the six weeks and do not co-author the brief.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Two Rounds of Written Feedback</strong>
                    <span className="text-slate-600 font-light">Focused on structure, logical argument, precision, and commercial clarity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Admissions Portfolio Guidance</strong>
                    <span className="text-slate-600 font-light">Formatting, framing, and positioning the brief effectively for university admissions readers.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Independent Paper Scoping</strong>
                    <span className="text-slate-600 font-light">Scoping conversation for fellows who wish to extend the brief into a longer independent paper.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono">
              ★ Tailored 1-on-1 post-program writing mentorship.
            </div>
          </motion.div>

          {/* Column 2: Professor Time Budget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
                Faculty Commitment
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-7 h-7 text-emerald-600" />
                Professor Time Budget (10.0 Hours)
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                All ten hours represent synchronous live contact with fellows. The design deliberately holds the professor's asynchronous load at zero to maximize direct teaching time.
              </p>

              {/* Table */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden mb-6">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-100 text-slate-800 uppercase font-mono border-b border-slate-200">
                    <tr>
                      <th className="p-3.5 font-bold">Commitment</th>
                      <th className="p-3.5 font-bold">Sessions</th>
                      <th className="p-3.5 font-bold text-right">Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80">
                    {budgetRows.map((r, idx) => (
                      <tr key={idx}>
                        <td className="p-3.5 font-medium text-slate-900">{r.commitment}</td>
                        <td className="p-3.5 text-slate-600 font-mono">{r.sessions}</td>
                        <td className="p-3.5 text-emerald-700 font-mono font-bold text-right">{r.hours}</td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-100/60 font-bold text-slate-900">
                      <td className="p-3.5">Total Professor Live Contact</td>
                      <td className="p-3.5 font-mono text-emerald-800">100% Synchronous</td>
                      <td className="p-3.5 text-emerald-800 font-mono text-right text-sm">10.0 hrs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed font-light">
              <strong className="text-emerald-800">Zero Async Overhead:</strong> Mini-assignments are peer-reviewed and self-checked; Showcase format scales to full cohort without per-fellow question rounds.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
