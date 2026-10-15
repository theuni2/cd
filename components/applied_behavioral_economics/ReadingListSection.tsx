"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  Info,
  Bookmark,
  Search
} from "lucide-react";

export default function ReadingListSection() {
  const [activeTab, setActiveTab] = useState<"classics" | "recent">("classics");
  const [searchQuery, setSearchQuery] = useState("");

  const classics = [
    {
      id: "classic-1",
      tag: "Classic 1",
      title: "Judgment under uncertainty: Heuristics and biases",
      authors: "Tversky, A., & Kahneman, D. (1974)",
      journal: "Science, 185(4157), 1124–1131",
      pdfUrl: "https://sites.socsci.uci.edu/~bskyrms/bio/readings/tversky_k_heuristics_biases.pdf",
      whyItMatters:
        "The origin of the bias vocabulary you will use all program—anchoring, availability, representativeness. Read it for the mechanisms, not the trivia.",
      advice: "Focus on the psychological mechanisms behind heuristics.",
    },
    {
      id: "classic-2",
      tag: "Classic 2",
      title: "Prospect theory: An analysis of decision under risk",
      authors: "Kahneman, D., & Tversky, A. (1979)",
      journal: "Econometrica, 47(2), 263–291",
      pdfUrl: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_Tversky_1979_Prospect_theory.pdf",
      whyItMatters:
        "Loss aversion and reference dependence explain more pricing, warranty, and subscription behavior than any other single idea in the field.",
      advice: "Dense paper—read the figures and value function closely, skim the mathematical proofs.",
    },
    {
      id: "classic-3",
      tag: "Classic 3",
      title: "Mental accounting and consumer choice",
      authors: "Thaler, R. H. (1985)",
      journal: "Marketing Science, 4(3), 199–214",
      pdfUrl: "https://bear.warrington.ufl.edu/brenner/mar7588/Papers/thaler-mktsci1985.pdf",
      whyItMatters:
        "The most directly commercial of the classics. Bundling, sunk costs, and how customers mentally book a discount versus a surcharge.",
      advice: "Essential reading for pricing and promotion design.",
    },
    {
      id: "classic-4",
      tag: "Classic 4",
      title: "When choice is demotivating: Can one desire too much of a good thing?",
      authors: "Iyengar, S. S., & Lepper, M. R. (2000)",
      journal: "Journal of Personality and Social Psychology, 79(6), 995–1006",
      pdfUrl: "https://faculty.washington.edu/jdb/345/345%20Articles/Iyengar%20&%20Lepper%20(2000).pdf",
      whyItMatters:
        "The assortment question every retailer and product manager faces. Also a useful case in how a famous finding gets contested—note the effect sizes.",
      advice: "Examine the jam jar experiment and choice paralysis.",
    },
    {
      id: "classic-5",
      tag: "Classic 5",
      title: "Do defaults save lives?",
      authors: "Johnson, E. J., & Goldstein, D. (2003)",
      journal: "Science, 302(5649), 1338–1339",
      doi: "https://doi.org/10.1126/science.1091721",
      pdfUrl: "https://www.science.org/doi/abs/10.1126/science.1091721",
      whyItMatters:
        "Two pages, one of the largest documented behavioral effects on record. The default is the single most powerful lever available to a business.",
      advice: "Short 2-page read—memorize the default opt-in vs opt-out delta.",
    },
  ];

  const recents = [
    {
      id: "recent-1",
      tag: "Recent 1",
      title: "Nudge, not sludge",
      authors: "Thaler, R. H. (2018)",
      journal: "Science, 361(6401), 431",
      doi: "https://doi.org/10.1126/science.aau9241",
      pdfUrl: "https://www.science.org/doi/pdf/10.1126/science.aau9241",
      whyItMatters:
        "One page. Introduces sludge—friction that works against the customer. Many of your final projects will be sludge audits, so start here.",
      advice: "Mandatory foundation for Week 3 Sludge Audit assignments.",
    },
    {
      id: "recent-2",
      tag: "Recent 2",
      title: "The effectiveness of nudging: A meta-analysis of choice architecture interventions across behavioral domains",
      authors: "Mertens, S., Herberz, M., Hahnel, U. J. J., & Brosch, T. (2022)",
      journal: "Proceedings of the National Academy of Sciences, 119(1), e2107346118",
      doi: "https://doi.org/10.1073/pnas.2107346118",
      pdfUrl: "https://www.pnas.org/doi/10.1073/pnas.2107346118",
      whyItMatters:
        "The headline estimate of how well nudges actually work by domain. Pair it with the published critique—the disagreement is the lesson.",
      advice: "Pair with optional critique: Maier et al. (2022) 'No evidence for nudging after adjusting for publication bias'.",
      companionLink: "https://www.pnas.org/doi/10.1073/pnas.2200300119",
    },
    {
      id: "recent-3",
      tag: "Recent 3",
      title: "Megastudies improve the impact of applied behavioural science",
      authors: "Milkman, K. L., Gromet, D., Ho, H., et al. (2021)",
      journal: "Nature, 600(7889), 478–483",
      doi: "https://doi.org/10.1038/s41586-021-04128-4",
      pdfUrl: "https://www.nature.com/articles/s41586-021-04128-4",
      whyItMatters:
        "What happens when you test 50 interventions at once instead of arguing about one. This is how large firms now run behavioral programs.",
      advice: "Essential reading for designing your Week 4 Intervention Trio.",
    },
    {
      id: "recent-4",
      tag: "Recent 4",
      title: "RCTs to scale: Comprehensive evidence from two nudge units",
      authors: "DellaVigna, S., & Linos, E. (2022)",
      journal: "Econometrica, 90(1), 81–116",
      doi: "https://doi.org/10.3982/ECTA18709",
      pdfUrl: "https://onlinelibrary.wiley.com/doi/full/10.3982/ECTA18709",
      whyItMatters:
        "The honest accounting. Real-world nudge effects are far smaller than the published academic literature suggests.",
      advice: "Read the introduction and results discussion; skim the econometrics.",
    },
    {
      id: "recent-5",
      tag: "Recent 5",
      title: "Sludge audits",
      authors: "Sunstein, C. R. (2022)",
      journal: "Behavioural Public Policy, 6(4), 654–673",
      pdfUrl: "https://www.cambridge.org/core/journals/behavioural-public-policy/article/sludge-audits/12A7E338984CE8807CC1E078EC4F13A7",
      whyItMatters:
        "The closest thing to a method manual for your final deliverable. It tells you what to look for and how to write it up.",
      advice: "Direct handbook for your final Behavioral Strategy Brief methodology.",
    },
  ];

  const currentRawList = activeTab === "classics" ? classics : recents;
  const currentList = currentRawList.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="reading-list" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
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
            Curated Literature
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Week Zero: Pre-Program Reading List
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Ten essential peer-reviewed papers (~120 pages total) read before Session 01 so we start directly at critical discussion.
          </p>
        </motion.div>

        {/* Feature Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <div className="h-56 sm:h-72 relative">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop"
              alt="Academic Library Literature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Foundational & Frontier Research
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                10 Core Papers Read Before Day 1
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                Five classic foundational works paired with five recent meta-analyses and commercial RCT evaluations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Switcher Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mb-10">
          <div className="p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300 flex items-center gap-2">
            <button
              onClick={() => setActiveTab("classics")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "classics"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              Part One: 5 Classic Papers
            </button>
            <button
              onClick={() => setActiveTab("recent")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "recent"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Part Two: 5 Recent Papers
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search literature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-slate-800 text-xs text-slate-900 outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Reading List Cards */}
        <div className="space-y-6 max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            {currentList.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -2 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-lg hover:shadow-xl flex flex-col md:flex-row items-start justify-between gap-6"
              >
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-mono font-bold">
                      {paper.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {paper.authors}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-mono">
                    {paper.journal} {paper.doi && `• ${paper.doi}`}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                    <span className="font-bold text-emerald-800 block mb-1">
                      Why it matters:
                    </span>
                    <p className="leading-relaxed font-light">{paper.whyItMatters}</p>
                  </div>

                  {paper.advice && (
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-1 font-light">
                      <Info className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <span><strong>Reading Guidance:</strong> {paper.advice}</span>
                    </div>
                  )}

                  {paper.companionLink && (
                    <div className="pt-1">
                      <a
                        href={paper.companionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:underline"
                      >
                        → Optional companion: Maier et al. (2022) Critique <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* PDF Action Link */}
                <div className="flex-shrink-0 w-full md:w-auto">
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Read Paper / PDF
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Week Zero Mini-Assignment Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Week Zero Deliverable
              </span>
              <h3 className="text-xl font-bold text-white">
                Mini-Assignment — The Reading Ledger
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed mb-6">
            <p>
              Build a <strong>ten-row table</strong>, one row per paper. Each row has three concise cells:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-200 pl-2">
              <li>The paper's central claim in one sentence</li>
              <li>One commercial/business implication in one sentence</li>
              <li>One critical question you would ask the author</li>
            </ul>
            <p>
              Below the table, name the <strong>two papers most relevant</strong> to a company or industry you personally care about, and explain why in three sentences. Bring your sharpest question to Session 01—the reading debrief is built directly from these submissions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Estimated Effort: <strong>60–90 min</strong> on top of reading</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Post to Cohort Board before Session 01</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
