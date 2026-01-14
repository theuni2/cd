'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Data tailored for Podcasting
const faqs = [
  {
    question: "Do I need to buy expensive equipment?",
    answer: "Not at all. While we provide recommendations for budget-friendly USB microphones (under $50), you can start the program using just your smartphone or laptop. We teach you how to treat your room acoustically to get studio-quality sound without a studio."
  },
  {
    question: "Is the program online or offline?",
    answer: "It follows a hybrid model based on your location. For students in Delhi NCR, the program is conducted offline (in-person). For students outside Delhi NCR, the entire program is held online via live virtual sessions."
  },
{
    question: "I don't know how to editing. Is that a problem?",
    answer: "Not at all. You don't need to worry about technical skills. Our professional production team handles the entire post-production process for you—including full editing, mixing, and creating custom thumbnails for every episode. You focus on the conversation; we handle the engineering."
  },
{
    question: "How do I find guests for my show?",
    answer: "You don't need to worry about sourcing guests. We handle the entire booking process for you. Our team aligns relevant speakers, experts, and industry leaders to match your show's theme, and we manage all the scheduling logistics. You just show up and host."
  },
  {
    question: "Will my podcast really be on Spotify, Youtube, & Instagram?",
    answer: "Yes. As long as your content meets the standard platform guidelines (which we ensure), your show will be distributed to all major listening platforms."
  },
  {
    question: "Who owns the rights to the podcast?",
    answer: "You do. You own 100% of your content, your brand, and your subscriber list. We are here to launch you, not to own your IP."
  },    {
      question: "Is this a group program or a one-to-one program?",
      answer: "This is a one-to-one (1:1) program, where each student receives personalized guidance and dedicated mentorship throughout the journey."
    },
    
//   {
//     question: "Can I do this with a friend (Co-host)?",
//     answer: "Absolutely. Many successful podcasts have two hosts. You and a friend can enroll together, share the workload, and build the brand as a duo."
//   }
];

const PodcastFAQ = () => {
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
            Common questions about gear, guests, and getting published.
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
                activeIndex === index ? 'border-purple-200 bg-purple-50/30' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Question Header (Clickable) */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${activeIndex === index ? 'text-purple-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                
                {/* Icon (+ / -) */}
                <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'
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
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-slate-500 text-sm"
        >
          {/* Have a specific tech question? <a href="#" className="text-purple-600 font-semibold hover:underline">Chat with our producers</a> */}
        </motion.div>

      </div>
    </section>
  );
};

export default PodcastFAQ;