'use client';

import { motion } from 'framer-motion';
import { BsPersonBadge, BsTools, BsBriefcase, BsChatDots } from 'react-icons/bs';

const steps = [
  {
    week: 'Weeks 1–2',
    title: 'Profile Optimization & Skill Enhancement',
    points: [
      {
        icon: <BsPersonBadge className="text-blue-600" size={24} />,
        heading: 'Profile Optimization',
        description: 'Polish your LinkedIn, resume, and online presence to make a strong first impression.',
      },
      {
        icon: <BsTools className="text-blue-600" size={24} />,
        heading: 'Skill Development',
        description: 'Gain industry-relevant skills via expert-led sessions and targeted training.',
      },
    ],
  },
  {
    week: 'Weeks 3–4',
    title: 'Placement and Work + Live Projects',
    points: [
      {
        icon: <BsChatDots className="text-blue-600" size={24} />,
        heading: 'Placement connections',
        description: 'Get connected with top startups and partner organizations, paving the eay for your placement success',
      },
      {
        icon: <BsBriefcase className="text-blue-600" size={24} />,
        heading: 'Live Projects',
        description: 'Intern with top firms on real-time business challenges, gaining hands-on experience,industry exposure, and practical-solving skills',
      },
    ],
  },
];

export default function PlacementTimelineSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Timelines & Process</h2>
        <p className="mt-4 text-lg text-gray-600">Your 1-month journey in the Career Discovery Placement Lab</p>
      </div>

      {/* Step Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-md border border-gray-100"
          >
            <p className="text-sm uppercase text-blue-500 font-semibold tracking-widest mb-2">{step.week}</p>
            <h3 className="text-xl font-bold text-gray-800 mb-6">{step.title}</h3>

            <div className="space-y-6">
              {step.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-xl">{point.icon}</div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-800">{point.heading}</h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

