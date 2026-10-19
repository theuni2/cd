"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award
} from "lucide-react";

export default function MentorsSection() {
  const mentors = [
    {
      name: "Dr. Aalok Sharma",
      role: "Lead Tech Track Faculty",
      institution: "Leading University Faculty • AI Systems",
      image: "/prof_aalok.jpeg",
      bio: "Specializes in computer vision and applied machine learning architectures. Mentored 40+ student research publications.",
    },
    {
      name: "Prof. Kimberly Rose Clark",
      role: "Global Advisory Mentor",
      institution: "Dartmouth College • Behavioral Science",
      image: "/professor/kimberly_rose_clark.png",
      bio: "Lecturer and venture advisor bridging consumer behavior, cognitive models, and ethical product adoption.",
    },
    {
      name: "Dr. Shambhu Nath",
      role: "Lead Social Impact Faculty",
      institution: "Public Policy & Development Economics",
      image: "/shambhu.jpeg",
      bio: "Decade of grassroots fieldwork designing community distribution models and sustainable social enterprise frameworks.",
    },
    {
      name: "Dr. Yogi Patel",
      role: "Venture Systems & Prototyping",
      institution: "Biomedical Systems & DeepTech",
      image: "/yogi_patel.jpeg",
      bio: "Advises high school founders on hardware unit economics, prototype stress-testing, and university patent filing.",
    },
  ];

  const facultyTiers = [
    {
      title: "Leading University Faculty",
      desc: "Weekly masterclasses, open office hours & 1:1 clinics for Top 100 teams.",
      icon: GraduationCap,
    },
    {
      title: "Global Venture Leaders",
      desc: "US, UK & Singapore guest sessions on cross-border scale & pitch conviction.",
      icon: Globe2,
    },
    {
      title: "Dual Review Integrity",
      desc: "Blind second review by PhD scholars ensures 100% objective grading parity.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="mentors" className="relative py-28 bg-[#050B14] text-white border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c5a059]/5 blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0a192f] text-xs font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Academic Mentorship</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Taught by Faculty from <br />
            <span className="text-[#c5a059] italic font-normal">Premier Global Universities.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light">
            You don't just get judges on demo day. You learn directly from university professors and researchers every single week.
          </p>
        </div>

        {/* FORGE-Style Circular Portrait Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center group"
            >
              {/* Circular Portrait with Gold Border Hover Animation */}
              <div className="w-32 h-32 mx-auto mb-5 relative rounded-full overflow-hidden border-2 border-white/15 group-hover:border-[#c5a059] transition-all duration-500 shadow-xl group-hover:shadow-[#c5a059]/25 group-hover:scale-105">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Academic Rank */}
              <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#c5a059] transition-colors mb-1">
                {mentor.name}
              </h3>
              
              <span className="text-xs uppercase tracking-wider text-[#c5a059] font-bold block mb-1">
                {mentor.role}
              </span>

              <span className="text-xs text-slate-400 font-mono block mb-3">
                {mentor.institution}
              </span>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {mentor.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Support Structure Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/10">
          {facultyTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0a192f]/50 border border-white/5 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#c5a059]" />
                </div>
                <h4 className="font-serif-luxury text-base font-bold text-white mb-1">
                  {tier.title}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
