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
  Award,
  Linkedin
} from "lucide-react";

export default function MentorsSection() {
  const mentors = [
    {
      name: "Dr. Yogi Patel",
      role: "Venture Systems & Prototyping",
      institution: "Argonne National Lab • DeepTech Systems",
      image: "/yogi_patel.jpeg",
      bio: "Aerospace engineer advising high school founders on hardware unit economics, prototype stress-testing, and university patent filing.",
    },
    {
      name: "Mahima Bhagat",
      role: "Senior Consultant, Deloitte India",
      institution: "UN Women 30 for 2030 • McKinsey NGWL",
      image: "/mahima_bhagat.jpeg",
      bio: "Senior Consultant at Deloitte India, UN Women 30 for 2030, Fellow at Global Shapers New Delhi Hub, McKinsey Next Generation Women Leaders Asia, and Pro-Bono Consultant.",
      linkedin: "https://www.linkedin.com/in/mahima-bhagat/",
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
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mb-16">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center group p-8 rounded-3xl bg-[#0a192f]/40 border border-white/5 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col items-center"
            >
              {/* Circular Portrait with Gold Border Hover Animation */}
              <div className="w-36 h-36 mx-auto mb-5 relative rounded-full overflow-hidden border-2 border-white/15 group-hover:border-[#c5a059] transition-all duration-500 shadow-xl group-hover:shadow-[#c5a059]/25 group-hover:scale-105">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Academic Rank */}
              <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors mb-1">
                {mentor.name}
              </h3>
              
              <span className="text-xs uppercase tracking-wider text-[#c5a059] font-bold block mb-1">
                {mentor.role}
              </span>

              <span className="text-xs text-slate-400 font-mono block mb-3">
                {mentor.institution}
              </span>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md mx-auto mb-4">
                {mentor.bio}
              </p>

              {mentor.linkedin && (
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-auto px-4 py-1.5 rounded-full bg-[#0a192f] border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-[#050B14] text-xs font-semibold tracking-wide transition-all duration-300"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              )}
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
