"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  UserCheck, 
  FileText, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  Building2,
  Globe
} from "lucide-react";

export default function GlanceSection() {
  const details = [
    {
      icon: Building2,
      title: "Program Name",
      detail: "The Applied Behavioral Economics Scholar Program",
      highlight: "Scholar Fellowship",
    },
    {
      icon: Award,
      title: "Vertical",
      detail: "Economics & Psychology",
      highlight: "Interdisciplinary",
    },
    {
      icon: Calendar,
      title: "Duration",
      detail: "Week Zero (self-paced reading) plus six live teaching weeks",
      highlight: "7 Weeks Total",
    },
    {
      icon: Clock,
      title: "Live Sessions",
      detail: "Six 90-minute live teaching sessions, plus two optional 30-minute Open Desk drop-ins",
      highlight: "Discussion-Led",
    },
    {
      icon: UserCheck,
      title: "Professor Contact Time",
      detail: "10 hours total — the professor’s complete commitment dedicated to direct live instruction",
      highlight: "100% Professor Time",
    },
    {
      icon: Globe,
      title: "Live Session Time",
      detail: "Saturdays: 7:00 a.m. Eastern (US) — 3:00 p.m. Gulf Standard Time (Dubai & UAE) — 4:30 p.m. India Standard Time",
      highlight: "Global Cohort Friendly",
    },
    {
      icon: CheckCircle2,
      title: "Cohort Size & Grade",
      detail: "Grades 9–12, 30 to 35 fellows, admitted strictly by application and interview",
      highlight: "Selective (30-35 Fellows)",
    },
    {
      icon: UserCheck,
      title: "Taught By",
      detail: "Professor Kimberly Rose Clark, Ph.D. No teaching assistants — all instruction is delivered by the professor",
      highlight: "No TAs",
    },
    {
      icon: FileText,
      title: "Final Deliverable",
      detail: "The Behavioral Strategy Brief: a 1,200–1,500 word business brief plus a five-slide client deck",
      highlight: "Consultancy Brief",
    },
    {
      icon: Award,
      title: "Post-Program Support",
      detail: "Ph.D. writing coaches available after the program to polish brief for admissions or research paper extension",
      highlight: "Writing Coaching",
    },
  ];

  return (
    <section id="at-a-glance" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Program Specifications
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Program at a Glance
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            A quick reference to the structure, faculty commitment, cohort parameters, and key deliverables.
          </p>
        </motion.div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all duration-300 group flex items-start gap-4 shadow-sm hover:shadow-xl"
              >
                <div className="p-3.5 rounded-2xl bg-slate-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-slate-900 font-bold text-base leading-snug">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scheduling Note Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto p-6 rounded-3xl bg-amber-50 border border-amber-200 text-amber-900 shadow-md flex flex-col sm:flex-row items-start gap-4"
        >
          <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 flex-shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-amber-950 mb-1 flex items-center gap-2">
              Important Scheduling Note: US Daylight Saving Time (DST) Transition
            </h4>
            <p className="text-sm text-amber-900/90 leading-relaxed font-light">
              United States daylight saving time ends on <strong>1 November 2026</strong>. If any session falls after that date, 7:00 a.m. Eastern converts instead to <strong>4:00 p.m. in Dubai (GST)</strong> and <strong>5:30 p.m. in India (IST)</strong>. All fellows will receive advance calendar notifications.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
