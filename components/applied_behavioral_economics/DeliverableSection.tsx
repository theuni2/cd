"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Presentation, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  Sparkles,
  ShieldAlert,
  Target,
  BarChart2
} from "lucide-react";

export default function DeliverableSection() {
  const [activeShape, setActiveShape] = useState(0);

  const sections = [
    {
      num: "01",
      name: "The Business Problem",
      contents: "The company or product, the specific decision point, the target audience, and the metric that is underperforming.",
      builtIn: "Mini-Assignment 2",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    {
      num: "02",
      name: "Behavioral Diagnosis",
      contents: "A friction map of the decision journey, the choice architecture framework applied, and a causal mechanism—not a bias label.",
      builtIn: "Mini-Assignment 3",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    },
    {
      num: "03",
      name: "Proposed Interventions",
      contents: "Two or three ranked interventions calibrated with target mechanism, expected direction & magnitude of effect, and implementation cost.",
      builtIn: "Mini-Assignment 4",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      num: "04",
      name: "Test Plan",
      contents: "Randomised conditions, primary and guardrail metrics, duration logic, committed decision rule, and threats to validity. Design only.",
      builtIn: "Mini-Assignment 5",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    },
    {
      num: "05",
      name: "Risks, Ethics, and Limits",
      contents: "What could go wrong commercially and ethically, brand reputational exposure, and what the brief does not establish.",
      builtIn: "Mini-Assignment 5",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    },
  ];

  const projectShapes = [
    {
      title: "Subscription Sludge Audit",
      domain: "SaaS & Consumer Tech",
      description: "A sludge audit of a subscription cancellation flow, with a proposal to reduce friction and a test plan for the retention trade-off.",
      frameworks: ["Sludge Audit", "Friction Mapping", "Guardrail Metrics"],
      metric: "Cancellation Friction vs. Brand Churn",
    },
    {
      title: "Default Savings / Insurance Product",
      domain: "Fintech & Banking",
      description: "A default-setting proposal for an opt-in savings or micro-insurance product sold in the fellow's home market.",
      frameworks: ["Choice Architecture", "Default Effect", "Opt-in / Opt-out"],
      metric: "Product Adoption Rate",
    },
    {
      title: "Food Delivery Assortment Design",
      domain: "E-Commerce & Delivery Platforms",
      description: "An assortment and menu-design diagnosis for a food delivery platform, grounded in choice-overload evidence.",
      frameworks: ["Choice Overload", "Categorization", "Salience"],
      metric: "Cart Conversion & Order Time",
    },
    {
      title: "Framing Redesign for Utility Bills",
      domain: "Public Utilities & Energy",
      description: "A framing redesign of a residential electricity bill, with a plan to test the effect on payment timeliness.",
      frameworks: ["Gain/Loss Framing", "Social Norms", "Payment Friction"],
      metric: "On-Time Payment Percentage",
    },
    {
      title: "Mental-Accounting Discount Structure",
      domain: "Retail & Apparel",
      description: "A mental-accounting analysis of how a retailer structures promotional discounts, and whether the structure changes basket size.",
      frameworks: ["Mental Accounting", "Reference Pricing", "Transaction Utility"],
      metric: "Average Order Value (AOV)",
    },
  ];

  return (
    <section id="deliverable" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative">
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
            Core Output
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Your Final Deliverable: The Behavioral Strategy Brief
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light">
            Each fellow produces one individual brief diagnosing a real decision problem, proposing choice-architecture interventions, and designing a rigorous test plan.
          </p>
        </motion.div>

        {/* Deliverable Image Banner & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group"
        >
          <div className="h-64 sm:h-80 relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Strategy Pitch Deck Presentation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs">
                  Consultancy Grade
                </span>
                <span className="text-xs text-slate-300">1,200–1,500 Words + 5-Slide Client Deck</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Zero Blank-Page Stress: Assembled Week-by-Week
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Deliverable Specifications Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-600" />
            Brief Section Anatomy
          </h3>

          <div className="space-y-4">
            {sections.map((sec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ x: 4 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-slate-300 font-mono">
                    {sec.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-slate-900">
                        {sec.name}
                      </h4>
                      <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${sec.badgeColor}`}>
                        Built in {sec.builtIn}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {sec.contents}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Example Project Shapes */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Example Project Shapes
            </h3>
            <p className="text-slate-600 text-sm font-light">
              Explore real topic directions selected by fellows across tech, retail, energy, and fintech.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {projectShapes.map((shape, idx) => (
              <button
                key={idx}
                onClick={() => setActiveShape(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeShape === idx
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {shape.title}
              </button>
            ))}
          </div>

          {/* Active Shape Card Display with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeShape}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {projectShapes[activeShape].domain}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Primary Metric: <strong className="text-slate-900">{projectShapes[activeShape].metric}</strong>
                </span>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-3">
                {projectShapes[activeShape].title}
              </h4>

              <p className="text-slate-600 text-base leading-relaxed font-light mb-6">
                {projectShapes[activeShape].description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 mr-2">
                  Applied Frameworks:
                </span>
                {projectShapes[activeShape].frameworks.map((fw, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs border border-slate-200 font-medium"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
