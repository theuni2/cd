'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const items = [
  {
    title: 'Professionals',
    subtitle: 'The Practice Leaders',
    Icon: BriefcaseIcon,
    description:
      'They ground theory in execution—bringing hands-on industry insight to every student experience.',
  },
  {
    title: 'PhD Students',
    subtitle: 'The Power of Research',
    Icon: AcademicCapIcon,
    description:
      'They guide you through advanced research work and journal publishing—boosting academic credibility.',
  },
  {
    title: 'Professors',
    subtitle: 'The Pillars of Knowledge',
    Icon: BookOpenIcon,
    description:
      'They offer rigorous frameworks, structured mentoring, and timeless academic foundations.',
  },
];

export default function ThreePAdvantage() {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Unlock the 3P Advantage
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base md:text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our unique mentorship model blends the expertise of professionals, PhD researchers, and professors to provide a holistic learning experience.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6 bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#EDEDED] p-3 rounded-full">
              <item.Icon className="h-7 w-7 text-[#012C51]" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {item.title}{' '}
                <span className="text-sm text-gray-500 font-normal block">
                  {item.subtitle}
                </span>
              </h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
