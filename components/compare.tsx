'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Program Format & Duration',
    launchpad: '1:1 entrepreneurship program: Short: 6-15 weeks | Long: 25 weeks to 1 year',
    whyUs: 'Emphasis on real-world, long-lasting impact: funding, scaling, measurable outcomes, prototypes, 1:1 flexibility',
  },
//  {
//     title: 'Execution & Outcomes',
//     launchpad: 'From idea to prototype develop your MVP, refine your business model, and gain clarity on funding and growth strategies.',
//     whyUs: 'Every session drives tangible outcomes: progress you can measure, pitch you can present, and impact you can showcase.',
//   },
  {
    title: 'Mentorship',
    launchpad: 'Personalized mentorship from CEOs, founders, domain experts, and nonprofit leaders; regular check-ins',
    whyUs: 'Strong network with top professionals + hands-on entrepreneurial experience',
  },
  {
    title: 'Media Presence',
    launchpad: 'Media & PR support: featured in magazines, video scripts, Instagram, websites, interviews',
    whyUs: 'Documenting journey from ideation to execution to showcase real impact',
  },{
    
title:"Outcome",
launchpad:"Launch a startup, nonprofit, or idea with real-world impact and measurable outcomes.",
whyUs:"Focus on execution and tangible results, not just learning."


  }

];

export default function LaunchpadFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Why LaunchPad Stands Out
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-gray-200 shadow-md p-6 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium text-gray-900">LaunchPad: </span>
                {item.launchpad}
              </p>
              <p className="text-sm text-gray-600 italic">
                {item.whyUs}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

