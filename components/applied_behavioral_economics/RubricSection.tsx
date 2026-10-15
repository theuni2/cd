"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  CheckCircle2, 
  Users, 
  MessageSquare, 
  Sparkles, 
  Scale, 
  PieChart,
  FileCheck
} from "lucide-react";

export default function RubricSection() {
  const miniAssignments = [
    { due: "Week Zero", name: "The Reading Ledger", output: "Ten-row table plus short reflection", effort: "60–90 min plus reading" },
    { due: "Week 1", name: "Decision Moment Teardown", output: "200–250 words", effort: "45 min" },
    { due: "Week 2", name: "Three Business Problems Card", output: "One page, three ranked topics", effort: "60 min plus peer swap" },
    { due: "Week 3", name: "Friction Map", output: "One annotated page or diagram", effort: "90 min" },
    { due: "Week 4", name: "Intervention Trio", output: "One page, three ranked interventions", effort: "75 min" },
    { due: "Week 5", name: "Test Card and Executive Summary", output: "One page plus 250 words", effort: "90 min" },
    { due: "Week 6", name: "The Behavioral Strategy Brief", output: "1,200–1,500 words plus five slides", effort: "Assembly and polish only" },
  ];

  const rubricDimensions = [
    {
      dim: "Business Relevance",
      weight: "20%",
      looksLike: "A real decision point, a real quantifiable metric, and a plausible business owner who would care about the answer.",
      color: "border-emerald-300 text-emerald-800 bg-emerald-50",
    },
    {
      dim: "Diagnosis",
      weight: "25%",
      looksLike: "A causal mechanism that predicts behavior, not a bias label attached after the fact without explanatory power.",
      color: "border-teal-300 text-teal-800 bg-teal-50",
    },
    {
      dim: "Intervention Design",
      weight: "20%",
      looksLike: "Interventions matched to the targeted mechanism, ranked honestly, with implementation costs acknowledged.",
      color: "border-blue-300 text-blue-800 bg-blue-50",
    },
    {
      dim: "Test Plan Quality",
      weight: "20%",
      looksLike: "Conditions, metrics, and a decision rule committed in advance that would survive a critical reader. Limits stated plainly.",
      color: "border-indigo-300 text-indigo-800 bg-indigo-50",
    },
    {
      dim: "Communication",
      weight: "15%",
      looksLike: "Five slides and 250 executive summary words that make one clear, compelling argument to a commercial reader.",
      color: "border-amber-300 text-amber-800 bg-amber-50",
    },
  ];

  return (
    <section id="rubric" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Evaluation & Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Assessment Rubric & Assignments
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Published to fellows in Week 2, not at the end, so you build directly against standards.
          </p>
        </motion.div>

        {/* Mini-Assignments Table */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-emerald-600" />
            Mini-Assignments Summary
          </h3>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-900 text-xs uppercase font-mono border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold">Due After</th>
                  <th className="px-6 py-4 font-bold">Assignment</th>
                  <th className="px-6 py-4 font-bold">Output Specification</th>
                  <th className="px-6 py-4 font-bold">Estimated Effort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {miniAssignments.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-emerald-700 font-bold text-xs whitespace-nowrap">
                      {row.due}
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-900">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.output}
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-xs font-mono whitespace-nowrap">
                      {row.effort}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assessment Rubric Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6 text-emerald-600" />
            Rubric Dimensions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rubricDimensions.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="text-lg font-bold text-slate-900">
                      {r.dim}
                    </h4>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${r.color}`}>
                      Weight: {r.weight}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {r.looksLike}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feedback Model Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto p-6 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col sm:flex-row items-start gap-4"
        >
          <div className="p-3.5 rounded-2xl bg-slate-800 text-emerald-400 flex-shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              How Live Feedback Works
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-light">
              All feedback from Professor Clark is delivered <strong>live</strong> in session or at an Open Desk. Mini-assignments are posted to the cohort board, self-checked against the published rubric, and peer-reviewed in assigned pairs. There is no asynchronous grading or written feedback from the professor, maximizing her 10 live contact hours directly with fellows.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
