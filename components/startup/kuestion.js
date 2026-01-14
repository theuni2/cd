'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const StartupFAQ = () => {
  // State to track the currently open question.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where are the sessions held?",
      answer: "All sessions are conducted entirely online via Zoom or Google Meet. This allows for flexibility and ensures you can connect with your instructor from anywhere in the world."
    },
    {
      question: "Who takes the sessions?",
      answer: "Instructors are typically industry experts who have real-world experience building tech projects and startups. They bring professional credibility, which adds significant value when they mentor you and certify your work."
    },
    {
      question: "How is this different from other programs?",
      answer: "Most programs run in large cohorts, but ours is entirely 1:1. We use a highly personalized approach designed with a specific 'outcome' in mind. We don't just build skills; we launch tangible startups that serve as standout assets for college applications."
    },
    {
      question: "What happens if I miss a session?",
      answer: "We understand that life happens. We don't penalize you for missed sessions; however, we allow a maximum of 2 reschedules during the entire course. After this limit is reached, we are unable to reschedule further sessions to ensure the program stays on track."
    },
    {
      question: "Will the sessions be recorded?",
      answer: "No, sessions are not recorded. Since the format is 1:1 and highly interactive, active participation during the scheduled time is essential for the learning process."
    },
    {
      question: "Are there any prerequisites needed?",
      answer: "No. Students of all backgrounds and ages are welcome. The course is divided into two halves: end-to-end mentorship followed by the project launch. You will receive all necessary guidance before launching your startup publicly."
    },
    {
      question: "Is this a group program or a one-to-one program?",
      answer: "This is a one-to-one (1:1) program, where each student receives personalized guidance and dedicated mentorship throughout the journey."
    },
  ];

  return (
    // SAFE MODE: Hardcoded Midnight Slate Background
    <section 
      className="relative py-24 px-6 font-sans overflow-hidden"
      style={{ backgroundColor: '#020617' }} 
    >
      
      {/* Background Decor: Tech Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto max-w-3xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(6, 182, 212, 0.1)', 
              borderColor: 'rgba(6, 182, 212, 0.3)',
              color: '#22d3ee'
            }}
          >
            <HelpCircle size={14} />
            <span className="text-xs font-bold uppercase tracking-widest">Support Protocol</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked <br />
            <span style={{ color: '#22d3ee' }}>Questions.</span>
          </motion.h2>
        </div>

        {/* --- FAQ LIST --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border transition-all duration-300"
              style={{ 
                backgroundColor: openIndex === index ? 'rgba(30, 41, 59, 0.6)' : 'rgba(15, 23, 42, 0.4)',
                borderColor: openIndex === index ? '#22d3ee' : 'rgba(255,255,255,0.05)'
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span 
                  className="text-lg font-bold transition-colors"
                  style={{ color: openIndex === index ? '#22d3ee' : 'white' }}
                >
                  {faq.question}
                </span>
                
                {/* Icon Toggle */}
                <div 
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: openIndex === index ? '#22d3ee' : 'rgba(255,255,255,0.05)',
                    color: openIndex === index ? '#020617' : 'white'
                  }}
                >
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div 
                      className="px-6 pb-6 pt-0 text-base leading-relaxed"
                      style={{ color: '#94a3b8' }} // Slate-400
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StartupFAQ;