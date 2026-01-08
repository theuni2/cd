'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Updated Timeline Data
const timelineSteps = [
  {
    phase: "Phase 1: Identity & Niche",
    weeks: "Week 1",
    description: "We define your show's DNA. Who are you speaking to? What is your unique angle? We lock in your show name, format, and content strategy to set a strong foundation.",
    color: "bg-purple-100 text-purple-600",
    borderColor: "border-purple-200"
  },
  {
    phase: "Phase 2: Aligning Speakers",
    weeks: "Weeks 2–3",
    description: "Networking and outreach. We help you identify potential guests, craft professional outreach emails, and secure your lineup of speakers for the season.",
    color: "bg-pink-100 text-pink-600",
    borderColor: "border-pink-200"
  },
  {
    phase: "Phase 3: The Execution Cycle",
    weeks: "Weeks 4–10",
    description: "The 4-week sprint. This is an ongoing, dynamic process where we handle Recording, Editing, and Publishing simultaneously. You won't just wait for the end to launch; we will be rolling out episodes, gathering feedback, and optimizing your presence in real-time.",
    color: "bg-indigo-100 text-indigo-600",
    borderColor: "border-indigo-200"
  },
];

const PodcastJourney = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Your Roadmap to <span className="text-purple-600">Going Live</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            An 8-week accelerator designed to take you from a concept to a live show with real listeners.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Line */}
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
                    
                    {/* Visual tags for the "Execution Cycle" to show what happens inside */}
                    {index === 2 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">🎙️ Recording</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">✂️ Editing</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">🚀 Publishing</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Space for the other side of the timeline */}
                <div className="hidden md:block md:w-1/2" />
                
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Creator Toolkit Grid */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-900">Included in Your Creator Toolkit</h3>
            <p className="text-slate-500">We provide the assets you need so you can focus on creating.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Asset 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-14 h-14 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                ✉️
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Guest Outreach Templates</h4>
              <p className="text-sm text-slate-600">Proven email scripts to help you connect with and book high-profile industry experts.</p>
            </motion.div>

            {/* Asset 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-14 h-14 mx-auto bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                🎨
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cover Art Design</h4>
              <p className="text-sm text-slate-600">Professional templates and guidance to create eye-catching cover art for Spotify and Apple.</p>
            </motion.div>

            {/* Asset 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100"
            >
              <div className="w-14 h-14 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6 text-2xl">
                🎵
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Music Library</h4>
              <p className="text-sm text-slate-600">Access to royalty-free intro and outro music to give your show a broadcast-quality feel.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PodcastJourney;