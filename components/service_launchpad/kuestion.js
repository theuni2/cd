'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Data tailored for the Mentorship Program
const faqs = [
  {
    question: "Where are the sessions held?",
    answer: "All sessions are conducted entirely online via Zoom or Google Meet. This allows for flexibility and ensures you can connect with your instructor from anywhere."
  },
  {
    question: "Who takes the sessions?",
    answer: "Instructors are typically industry experts who have real-world experience building similar projects. They bring professional credibility, which adds significant value when they mentor you and certify your work."
  },
  {
    question: "How is this different from other programs?",
    answer: "Our programs are entirely 1:1, whereas 99% of other programs run in large cohorts. We use a highly personalized approach designed with a specific 'outcome' in mind. This ensures we launch projects that don't just build skills, but also serve as tangible assets for college applications (not just a check in the box)."
  },
  {
    question: "Are there any prerequisites needed?",
    answer: "No. Students of all backgrounds and ages are welcome. The course is divided into two halves: end-to-end mentorship followed by the project launch. You will receive sufficient mentorship to prepare you before launching your project in public."
  },
  {
    question: "What happens when we miss a session?",
    answer: "We understand that things come up at the last minute. We don’t penalize you for missed sessions; however, we allow a maximum of 2 reschedules during the entire course. After this limit is reached, we are unable to reschedule further sessions."
  },
  {
    question: "Will the sessions be recorded?",
    answer: "No, sessions are not recorded. Since the format is 1:1 and highly interactive, active participation during the scheduled time is essential for the learning process."
  }
];

const ProgramFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Everything you need to know about the mentorship structure, sessions, and outcomes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                activeIndex === index ? 'border-indigo-200 bg-indigo-50/50' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Question Header (Clickable) */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${activeIndex === index ? 'text-indigo-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                
                {/* Icon (+ / -) */}
                <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Answer Content (Animated) */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-slate-400 text-sm"
        >
          Have more questions? <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Contact our support team</span>
        </motion.div>

      </div>
    </section>
  );
};

export default ProgramFAQ;