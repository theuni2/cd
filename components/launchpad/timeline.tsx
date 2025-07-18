'use client';

import { motion } from 'framer-motion';
import React from 'react';

const phases = [
  {
    title: 'Week 1–4: Research & Alignment with Long-term Goals',
    points: [
      'Identify problem area and motivation',
      '1:1 mentorship + brainstorming sessions',
      'Identify SDG/tech/policy or domain intersection',
      'Choose project format: Startup | Research | Club | Podcast | Prototype',
    ],
  },
  {
    title: 'Week 5–9: Research & Skill Building',
    points: [
      'Dive deep into academic papers, and technical tools',
      'Enroll in short courses',
      'Peer & mentor discussions for refining insights',
      'Curate MVP outline (if tech or startup) or project scope',
    ],
  },
  {
    title: 'Week 9–16: Development & Pilot',
    points: [
      'Develop prototype or first version',
      'Weekly mentor feedback and iteration loops',
      'Social media soft launch (Instagram, LinkedIn, Blog)',
      'Collaborate with a nonprofit, or startup',
    ],
  },
  {
    title: 'Week 17–25: Expansion & Ecosystem Building',
    points: [
      'Host a webinar, workshop, or mini-conference',
      'Collaborate with peers, mentors, or relevant organizations',
      'Enter competitions or showcase platforms',
    ],
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-[#E5F0FF] py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Timelines and Processes (~25 Weeks)</h2>
        <p className="mt-3 text-lg md:text-xl text-yellow-800 font-medium">
          for Research Lab
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-yellow-400"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-4">{phase.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
              {phase.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
