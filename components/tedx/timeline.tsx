'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Timeline Data
const timelineSteps = [
  {
    phase: "Phase 1: Discovery & Ideation",
    weeks: "Weeks 1–2",
    description: "We start by brainstorming, researching, and selecting a topic that matters. We find your unique 'Big Idea'.",
    color: "bg-blue-100 text-blue-600",
    borderColor: "border-blue-200"
  },
  {
    phase: "Phase 2: Script Development",
    weeks: "Weeks 3–5",
    description: "Drafting the narrative. We focus on outlining, writing, editing, and rigorous feedback cycles to craft a compelling script.",
    color: "bg-purple-100 text-purple-600",
    borderColor: "border-purple-200"
  },
  {
    phase: "Phase 3: Visuals & Delivery",
    weeks: "Weeks 6–8",
    description: "Bringing the talk to life. We work on slide design, vocal practice, and stage presence techniques.",
    color: "bg-indigo-100 text-indigo-600",
    borderColor: "border-indigo-200"
  },
  {
    phase: "Phase 4: Rehearsal & Polish",
    weeks: "Weeks 9–10",
    description: "The final stretch. Full run-throughs, technical checks, and detailed feedback to ensure perfection.",
    color: "bg-orange-100 text-orange-600",
    borderColor: "border-orange-200"
  },
  {
    phase: "Phase 5: The Performance",
    weeks: "Weeks 11–12",
    description: "The official TEDx event. You step onto the red dot, deliver your talk, and share your idea with the world.",
    color: "bg-red-100 text-red-600",
    borderColor: "border-red-200"
  },
];

const ProgramJourney = () => {
  return (
    <section className="py-24 bg-slate-50" id ="timeline">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Your Roadmap to the <span className="text-red-600">Red Dot</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            A structured 12-week journey designed to transform you from a student with an idea into a recognized speaker.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Line (Hidden on mobile, visible on md+) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-white border-4 border-slate-300 z-10 shadow-sm"></div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-12 w-full">
                  <div className={`p-6 bg-white rounded-xl shadow-sm border-l-4 ${step.borderColor} hover:shadow-md transition-shadow duration-300`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${step.color}`}>
                        {step.weeks}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.phase}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty Space for the other side of the timeline */}
                <div className="hidden md:block md:w-1/2" />
                
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Offerings Grid */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-900">Beyond the Stage</h3>
            <p className="text-slate-500">The program includes premium benefits to support your growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Offering 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                💬
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Personalized Feedback</h4>
              <p className="text-sm text-slate-600">Regular, deep-dive critiques from experienced coaches and TEDx alumni.</p>
            </motion.div>

            {/* Offering 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-14 h-14 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                🤝
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Network & Support</h4>
              <p className="text-sm text-slate-600">Join a community of peers for camaraderie, inspiration, and cross-pollination of ideas.</p>
            </motion.div>

            {/* Offering 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-14 h-14 mx-auto bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                🎥
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Pro Recording</h4>
              <p className="text-sm text-slate-600">Professional video recording of your talk and expert advice on how to promote it.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramJourney;