"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Award, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Search, 
  ExternalLink,
  Target,
  GraduationCap,
  Briefcase,
  Flame,
  Globe2,
  CheckCircle2
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export interface Competition {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  category: "all" | "writing" | "stem" | "business" | "social";
  categoryLabel: string;
  tagline: string;
  description: string;
  format: string;
  eligibility: string;
  prize: string;
  timeline: string;
  href: string;
  accentGradient: string;
  cardBorder: string;
  iconBg: string;
  icon: React.ElementType;
  highlights: string[];
}

export const competitionsData: Competition[] = [
  {
    id: "forge",
    title: "FORGE Essay Competition",
    badge: "Open for 2026",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    category: "writing",
    categoryLabel: "Essay & Writing",
    tagline: "International Oxford & Cambridge Style Academic Writing Challenge",
    description: "An elite global writing competition challenging high school thinkers to construct rigorous, evidence-based essays across philosophy, law, international relations, and economics. Evaluated by Oxbridge and Ivy League academic judges.",
    format: "1,500 – 2,000 Word Scholarly Essay",
    eligibility: "Grades 9–12 • Worldwide",
    prize: "Oxford/Cambridge Summer School Scholarships & Fellowships",
    timeline: "Annual Cohort • Rolling Submissions",
    href: "/forge_writing_competition",
    accentGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    cardBorder: "border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-500 text-white",
    icon: BookOpen,
    highlights: [
      "Judged by Oxford & Cambridge scholars",
      "Official certificate of distinction & commendation",
      "Publication in global student review journals"
    ]
  },
  {
    id: "isip",
    title: "ISIP — International Student Innovation Prize",
    badge: "Flagship STEM Challenge",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    category: "stem",
    categoryLabel: "STEM & Tech",
    tagline: "Global Youth Innovation Championship in AI, Health & Sustainability",
    description: "A premier international innovation competition where high school innovators, engineers, and researchers pitch breakthrough prototypes to solve planetary challenges in Artificial Intelligence, Climate Tech, and Healthcare.",
    format: "10-Slide Pitch Deck & Website / Prototype",
    eligibility: "Solo or Teams of up to 3 • Grades 8–12",
    prize: "₹75,000 Cash Seed Grants & Mentorship",
    timeline: "Reg: 28 Oct – 10 Dec • Results: 10 Jan",
    href: "/isip",
    accentGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    cardBorder: "border-emerald-200 hover:border-emerald-400",
    iconBg: "bg-emerald-600 text-white",
    icon: Lightbulb,
    highlights: [
      "Mentorship from leading Silicon Valley & MIT researchers",
      "Direct patent, IP & startup incubation access",
      "Global showcase evaluated by venture capital judges"
    ]
  },
  {
    id: "solve",
    title: "SOLVE Global Challenge",
    badge: "Social Impact Honor",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    category: "social",
    categoryLabel: "Social Impact",
    tagline: "Action-Driven Sustainable Problem Solving for Young Changemakers",
    description: "Inspired by the UN Sustainable Development Goals, SOLVE challenges students to diagnose acute social or environmental crises in their local communities and formulate viable, scalable intervention strategies.",
    format: "Policy Brief & Community Intervention Blueprint",
    eligibility: "High School Students Worldwide",
    prize: "The Laureate Fellowship & Implementation Funding",
    timeline: "Global Showcase & Laureate Induction",
    href: "/solve_eg",
    accentGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    cardBorder: "border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-600 text-white",
    icon: Globe2,
    highlights: [
      "Induction into prestigious Laureate Fellowship",
      "Seed funding for real-world project deployment",
      "Admissions portfolio verification report"
    ]
  },
  {
    id: "novus",
    title: "Novus Dubai Essay Competition",
    badge: "Middle East & Global",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    category: "writing",
    categoryLabel: "Essay & Writing",
    tagline: "Economics, Futuristic Cities & Governance Challenge",
    description: "The leading Middle East high school essay competition exploring future economic models, smart cities, and AI ethics. Designed for students seeking distinctive intellectual honors recognized by global university admissions.",
    format: "1,200 – 1,800 Word Analytical Paper",
    eligibility: "Grades 9–12 • Regional & Global Entries",
    prize: "Honorary Fellowships & Distinction Awards",
    timeline: "2026 Winter & Spring Rounds",
    href: "/novus_comp",
    accentGradient: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    cardBorder: "border-purple-200 hover:border-purple-400",
    iconBg: "bg-purple-600 text-white",
    icon: Trophy,
    highlights: [
      "Regional Dubai & International tracks",
      "Evaluation against Ivy League writing standards",
      "Published compilation for shortlisted finalists"
    ]
  },
  {
    id: "apex",
    title: "Apex Discovery Pitch Competition",
    badge: "Entrepreneurship Battle",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    category: "business",
    categoryLabel: "Business & Pitch",
    tagline: "Fast-Paced High School Venture Ideation & Pitch Challenge",
    description: "Aspiring entrepreneurs pitch early-stage consumer tech, platform, or service concepts to active angel investors and startup founders. Master unit economics, customer discovery, and high-impact pitch delivery.",
    format: "5-Minute Pitch Deck & Live Q&A Defense",
    eligibility: "Solo or Teams of 2–3 • High School",
    prize: "Incubator Placement, Mentorship & Seed Grants",
    timeline: "Bi-Annual Live Pitch Days",
    href: "/pitch_competition",
    accentGradient: "from-rose-500/10 via-pink-500/5 to-transparent",
    cardBorder: "border-rose-200 hover:border-rose-400",
    iconBg: "bg-rose-600 text-white",
    icon: Briefcase,
    highlights: [
      "Live feedback from venture capitalists and founders",
      "Pre-pitch workshop on pitch deck storytelling",
      "Fast-track to Career Discovery LaunchPad"
    ]
  },
  {
    id: "claimit",
    title: "ClaimIt Writing & Competition Incubator",
    badge: "John Locke & Global",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    category: "writing",
    categoryLabel: "Essay & Writing",
    tagline: "Intensive Mentored Preparation for Premier Global Competitions",
    description: "A comprehensive incubation track guided by Ph.D. mentors from Oxford, IIT, and IIM to prepare student submissions for John Locke Institute, Harvard Crimson Essay Competition, and Bowdoin prizes.",
    format: "1-on-1 PhD Coaching & Draft Reviews",
    eligibility: "Grades 8–12 Ambitious Writers",
    prize: "Global Shortlists & University Writing Portfolio",
    timeline: "Rolling Entry Cycles",
    href: "/claimit",
    accentGradient: "from-teal-500/10 via-cyan-500/5 to-transparent",
    cardBorder: "border-teal-200 hover:border-teal-400",
    iconBg: "bg-teal-600 text-white",
    icon: GraduationCap,
    highlights: [
      "1-on-1 thesis development and argumentation coaching",
      "Multiple rounds of line-by-line editorial feedback",
      "Proven track record of international winners & finalists"
    ]
  }
];

const categoryTabs = [
  { id: "all", label: "All Competitions" },
  { id: "writing", label: "Essay & Writing" },
  { id: "stem", label: "STEM & Tech" },
  { id: "business", label: "Business & Pitch" },
  { id: "social", label: "Social Impact" },
];

export default function CompetitionsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCompetitions = competitionsData.filter((comp) => {
    const matchesCategory =
      selectedCategory === "all" || comp.category === selectedCategory;
    const matchesSearch =
      comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        {/* Ambient lighting glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-500/15 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <Trophy className="w-4 h-4 text-amber-400" />
              Global Youth Competitions 2026
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Prestigious Competitions for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                Ambitious High Schoolers
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Compete on international stages, gain verified honors evaluated by Ivy League & Oxbridge faculty, and produce university-level portfolio work that stands out to top admissions committees.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-slate-800">
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-white">6+</div>
                <div className="text-xs text-slate-400">Global Challenges</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-emerald-400">50+</div>
                <div className="text-xs text-slate-400">Countries Represented</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-amber-400">$50K+</div>
                <div className="text-xs text-slate-400">Awards & Grants</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-indigo-400">100%</div>
                <div className="text-xs text-slate-400">Faculty-Led Judging</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === tab.id
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search competitions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Note */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Featured Programs ({filteredCompetitions.length})
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore official registration, guidelines, and submission pathways.
              </p>
            </div>
            
            <Link
              href="/hanover"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl transition-all"
            >
              <span>Explore Behavioral Economics Fellowship</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {filteredCompetitions.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No competitions found</h3>
              <p className="text-slate-500 text-sm mt-1">
                Try adjusting your search query or switching categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredCompetitions.map((comp, idx) => {
                  const Icon = comp.icon;
                  return (
                    <motion.article
                      key={comp.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      whileHover={{ y: -6 }}
                      className={`rounded-3xl bg-white border ${comp.cardBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group`}
                    >
                      {/* Top Gradient Banner */}
                      <div className={`h-28 bg-gradient-to-br ${comp.accentGradient} p-6 flex items-start justify-between relative`}>
                        <div className={`p-3 rounded-2xl ${comp.iconBg} shadow-md`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${comp.badgeColor}`}>
                          {comp.badge}
                        </span>
                      </div>

                      {/* Main Card Body */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            {comp.categoryLabel}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                            {comp.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                            {comp.tagline}
                          </p>
                          <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                            {comp.description}
                          </p>

                          {/* Quick Spec Pills */}
                          <div className="space-y-2 py-4 border-y border-slate-100 text-xs">
                            <div className="flex items-center gap-2 text-slate-700">
                              <Target className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="font-semibold text-slate-900">Format:</span> {comp.format}
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                              <Users className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="font-semibold text-slate-900">Eligibility:</span> {comp.eligibility}
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                              <Award className="w-4 h-4 text-amber-500 shrink-0" />
                              <span className="font-semibold text-slate-900">Awards:</span> {comp.prize}
                            </div>
                          </div>

                          {/* Highlights Checklist */}
                          <div className="mt-4 space-y-1.5">
                            {comp.highlights.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Footer Action */}
                        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {comp.timeline}
                          </span>
                          
                          <Link
                            href={comp.href}
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 group/btn bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-all"
                          >
                            <span>Explore Details</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Value Proposition Callout */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              Why Compete?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-3">
              Transform Ideas into Verified University Proof Points
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Top global admissions committees seek students who test their intellect in external arenas beyond high school walls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-black text-xl mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Independent Validation</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Awards, honorable mentions, and shortlist distinctions from external faculty judges validate your intellectual rigor on the Common App.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center font-black text-xl mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Publishable Artifacts</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Whether an Oxford-style essay, an AI prototype deck, or a policy brief, every competition produces a finished piece for your portfolio.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/30 text-purple-400 flex items-center justify-center font-black text-xl mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ivy & Oxbridge Faculty Judges</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Receive rigorous evaluation rubrics and critiques from university professors who actively read admissions dossiers and academic papers.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/hanover"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <span>Explore Behavioral Economics Fellowship (Prof. Clark)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
