"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function ProfessorsTimelineSection() {
  const timeline = [
    {
      month: "February",
      professor: "Dr. Anita Sharma",
      role: "Physics Research Mentor",
      topics: ["Research Methodology", "Problem Framing", "Academic Writing"],
    },
    {
      month: "March",
      professor: "Prof. Samir Gupta",
      role: "AI & CS Research Guide",
      topics: ["AI Literature Review", "Experimental Design", "Data Analysis"],
    },
    {
      month: "April",
      professor: "Dr. Meera Rao",
      role: "Biomedical Lead Mentor",
      topics: ["Paper Structuring", "Peer Review", "Final Submission"],
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20">
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
            Faculty Timeline
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
            Professors & Research Timeline
          </h2>
          <p className="mt-5 text-gray-600">
            The research journey unfolds across three focused months, each guided by an experienced faculty mentor.
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-xl transition"
            >
              {/* Month Badge */}
              <div className="absolute -top-4 left-6 rounded-full bg-gray-900 text-white px-4 py-1 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {item.month}
              </div>

              {/* Professor Image */}
              <div className="mt-6 h-40 rounded-xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                Professor Image
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-medium text-gray-900">{item.professor}</h3>
                <p className="mt-1 text-gray-600">{item.role}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {item.topics.map((topic, i) => (
                    <li key={i}>• {topic}</li>
                  ))}
                </ul>

                <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-5 py-2 text-sm hover:bg-gray-800 transition">
                  Apply for {item.month}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
