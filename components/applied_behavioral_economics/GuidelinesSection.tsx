"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Database, 
  FileText, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Info
} from "lucide-react";

export default function GuidelinesSection() {
  const guidelines = [
    {
      icon: ShieldAlert,
      title: "No Data Collection from Human Subjects",
      description:
        "Strictly prohibited: no surveys, interviews, or experiments involving classmates, family, teachers, customers, or online panels. All fellowship projects are rigorous analysis and choice architecture design only.",
      highlight: "Analysis & Design Only",
      color: "border-red-200 bg-red-50 text-red-800",
    },
    {
      icon: Database,
      title: "Public & Secondary Sources Only",
      description:
        "All work must rely exclusively on published literature, public datasets, company SEC filings, public policy disclosures, and publicly accessible product and service user interfaces.",
      highlight: "Open Secondary Data",
      color: "border-blue-200 bg-blue-50 text-blue-800",
    },
    {
      icon: Award,
      title: "Recommendation Letters Policy",
      description:
        "The professor’s role is instructor and Showcase reviewer. Letters of recommendation are explicitly not a feature of this program and must not be referenced in program materials or admissions conversations.",
      highlight: "Transparent Positioning",
      color: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      icon: Calendar,
      title: "Fixed Published Calendar",
      description:
        "The full calendar of six sessions and two Open Desks is published prior to Week Zero opening with fixed dates and times. Session times are not altered once published.",
      highlight: "Fixed Dates",
      color: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
      icon: FileText,
      title: "Public Positioning",
      description:
        "Public-facing language describes the program as applied behavioral economics producing a consultancy-grade business brief—not as original academic research or a route to journal publication.",
      highlight: "Consultancy Brief Focus",
      color: "border-purple-200 bg-purple-50 text-purple-800",
    },
  ];

  return (
    <section id="guidelines" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
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
            Compliance & Ethics
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Program Guidelines & Ethics
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Strict boundaries ensuring institutional compliance, research safety, and transparent academic framing.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {guidelines.map((g, idx) => {
            const Icon = g.icon;
            const isFourth = idx === 3;
            const isFifth = idx === 4;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-lg hover:shadow-xl flex flex-col justify-between lg:col-span-2 ${
                  isFourth ? "lg:col-start-2" : ""
                } ${
                  isFifth ? "md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3.5 rounded-2xl bg-slate-100 text-slate-900 border border-slate-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${g.color}`}>
                      {g.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {g.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {g.description}
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
