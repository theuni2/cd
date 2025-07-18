'use client';

import { motion } from 'framer-motion';

const pricingData = [
  {
    id: 1,
    title: 'EXTENSIVE CAPSTONE X CONNECTIONS',
    details: [
      'Prototype (ROBOT, APPS, CHATBOT)',
      'Online Podcast (10–12 EPISODES)',
      'Social Media Page (200 POSTS)',
      'Launching a Business',
    ],
    deliverables:
      'End-to-end connections, editing + speaker invites + scaling and support with right partners, fundraising links, websites included.',
    timeline: '25 weeks – 1 year (Flexible days/time)',
    price: '2,50,000 INR / 10700 AED',
  },
  {
    id: 2,
    title: '1 SHORT CAPSTONE',
    details: [
      'Book',
      'Newsletter Publishing',
      'Featured Magazine writing',
      'Launching a Club',
      'Toolkit',
    ],
    deliverables:
      'Includes book, club, publishing and featured writing. Ideal for short-term impactful storytelling.',
    timeline: '6–15 weeks (Flexible days/time)',
    price: '50,000 INR / 2140 AED',
  },
];

export default function FinalPricing() {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Final Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-md text-gray-700 max-w-2xl mx-auto mb-14"
        >
          Choose the path that matches your vision—whether you're launching a full-scale business or creating high-impact publications.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-2">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-[#DAA520] mb-2">
                {plan.title}
              </h3>
              <ul className="list-disc list-inside mb-4 text-sm text-gray-700 space-y-1">
                {plan.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 mb-4">{plan.deliverables}</p>
              <p className="text-sm text-gray-600 italic mb-2">
                <strong>Timeline:</strong> {plan.timeline}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {plan.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
