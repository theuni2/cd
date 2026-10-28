"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building, 
  Briefcase, 
  CheckSquare, 
  BookOpenCheck, 
  GraduationCap, 
  ArrowUpRight 
} from "lucide-react";

export default function WhyJoinSection() {
  const pillars = [
    {
      icon: Building,
      badge: "Commercial Realism",
      title: "Taught by a 25-Year Industry Veteran",
      description:
        "You learn behavioral economics from someone who sold it to Fortune 500 clients for 25 years. Every framework is taught alongside what happened when a real company tried to act on it.",
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-500 text-white",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      icon: Briefcase,
      badge: "Real Business Artifact",
      title: "A Business Deliverable, Not an Essay",
      description:
        "You leave with a Behavioral Strategy Brief—the exact format top strategy consultancies and in-house behavioral teams actually produce to drive decision-making.",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-600 text-white",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: CheckSquare,
      badge: "High-Completion Workload",
      title: "Workload Designed to be Finished",
      description:
        "Six sessions, five short mini-assignments, and a deliverable that assembles seamlessly from work you have already completed week-by-week rather than appearing as a blank page at the end.",
      color: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-600 text-white",
      badgeColor: "bg-teal-100 text-teal-800",
    },
    {
      icon: BookOpenCheck,
      badge: "Academic Rigor",
      title: "Read Real Literature Before You Meet",
      description:
        "Ten peer-reviewed papers in Week Zero means Session 01 starts directly at high-level critical discussion, not basic definitions or textbook recitation.",
      color: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-600 text-white",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      icon: GraduationCap,
      badge: "Admissions Value",
      title: "Ph.D. Writing Coach Post-Program Handoff",
      description:
        "Ph.D. writing coaches pick up where the program ends, helping you polish your brief into a portfolio piece to present to admissions readers or extend into an independent research paper.",
      color: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-600 text-white",
      badgeColor: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section id="why-join" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Join The Fellowship?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            This fellowship bridges academic decision science and high-stakes commercial execution.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isFourth = idx === 3;
            const isFifth = idx === 4;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${pillar.color} border ${pillar.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between lg:col-span-2 ${
                  isFourth ? "lg:col-start-2" : ""
                } ${
                  isFifth ? "md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${pillar.iconBg} shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1 text-xs font-bold text-emerald-700">
                  <span>Fellowship Standard</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
