'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const researchData = [
  {
    title: 'CalTech',
    description:
      '45% of Caltech admits submitted original research — showing that top universities value initiative, curiosity, and self-driven academic work.',
    image: '/logos/caltech.png',
  },
  {
    title: 'UPenn',
    description:
      'Nearly 1 in 3 UPenn admits conducted research in high school — a bold marker of academic curiosity and standout initiative.',
    image: '/logos/upenn.png',
  },
  {
    title: 'Stanford',
    description:
      "Stanford looks for 'Intellectual Vitality,' valuing students who are eager to learn and explore.",
    image: '/logos/stanford.png',
  },
  {
    title: 'Harvard',
    description:
      "Harvard’s highest academic rating, based on 'strong scholarship' and 'creative thinking' increases acceptance chances by almost 8x.",
    image: '/logos/harvard.png',
  },
];

export default function WhyResearchSection() {
  return (
    <section className="bg-[#FFE15A] py-20 px-6 md:px-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Why Research?
        </h2>
        <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
          Top universities emphasize research for a reason. Here’s how leading institutions view the role of research in admissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {researchData.map((uni, index) => (
          <motion.div
            key={uni.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex gap-6 items-start"
          >
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={uni.image}
                alt={uni.title}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {uni.title}
              </h3>
              <p className="text-gray-700 text-sm">{uni.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
