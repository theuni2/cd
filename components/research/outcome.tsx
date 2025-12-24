"use client";

import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";

export default function ResearchOutcomes() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            Program Outcomes
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            What You Get from This Research Program
          </h2>
          <p className="mt-5 text-gray-600">
            Hands-on research outcomes that give credibility to your work and strengthen your academic profile.
          </p>
        </motion.div>

        {/* Horizontal Outcomes */}
        <div className="mt-16 space-y-14">
          {/* Research Paper */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="aspect-[210/297] bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
              Research Paper Preview (A4)
            </div>
            <div>
              <div className="flex items-center gap-3 text-gray-900">
                <BookOpen className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Full-Length Research Paper</h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Students work closely with mentors to produce a complete research paper, including problem framing, literature review, analysis, and a final submission-ready manuscript.
              </p>
            </div>
          </motion.div>

          {/* Certificate */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="md:order-2 aspect-[3/4] bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
              Certificate Preview (3:4)
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 text-gray-900">
                <Award className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Research Completion Certificate</h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                On successful completion of the program, students receive an official certificate validating their research work, commitment, and academic rigor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* LOR Note */}
       <motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="mt-20"
>
<div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
<p className="text-base md:text-lg text-gray-700 leading-relaxed">
<span className="font-semibold text-gray-900">Letters of Recommendation:</span>
<br />
Letters of Recommendation are issued to students who demonstrate exceptional research quality, consistency, and initiative throughout the program.
</p>
</div>
</motion.div>
      </div>
    </section>
  );
}
