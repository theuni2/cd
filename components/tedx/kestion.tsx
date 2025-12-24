'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Data based on your specific program details
const faqs = [
  {
    question: "Is the TEDx talk guaranteed?",
    answer: "Yes. We guarantee that every student who completes our program will be given a platform to deliver an OFFICIAL TEDx talk. However, please note that the specific timeline and location depend on the availability of TEDx events across India, which we do not control."
  },
  {
    question: "Do I need a fully formed idea to join?",
    answer: "Not at all. The first phase of our program (Weeks 1-2) is dedicated to 'Discovery & Ideation'. We will help you brainstorm, research, and refine a unique 'Big Idea' that is worth sharing."
  },
  {
    question: "What is the time commitment required?",
    answer: "Most students spend about 3-5 hours per week on the program. This includes coaching sessions, script writing, and rehearsal practice. The standard duration is 8-12 weeks, though it can be extended up to 24 weeks depending on your pace."
  },
  {
    question: "Is the program online or in-person?",
    answer: "The coaching sessions are primarily conducted online for flexibility. However, the final TEDx talk will be a live, in-person event on an official TEDx stage."
  },
  {
    question: "I have stage fright. Can I still do this?",
    answer: "Absolutely. A core part of our curriculum focuses on 'Nerves & Presence'. We teach techniques for emotional intelligence and fear management to help you turn anxiety into confidence. You will have multiple rehearsals before the big day."
  },
  {
    question: "What happens after the talk?",
    answer: "You won't just walk away with a memory. We provide a professional video recording of your talk, along with advice on how to promote it on social media and use it for university applications or career growth."
  }
];

const FAQSection = () => {
  // State to track which accordion is open (null = all closed)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
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
          <p className="text-slate-500">
            Everything you need to know about the program and your journey to the stage.
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
                activeIndex === index ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Question Header (Clickable) */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${activeIndex === index ? 'text-blue-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                
                {/* Icon (+ / -) */}
                <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
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

        {/* Contact Support Prompt */}
     

      </div>
    </section>
  );
};

export default FAQSection;