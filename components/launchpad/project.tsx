'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const showcases = [
  {
    name: 'Ssavya',
    title: 'Cloud Care Network',
    description:
      'An APP focused on accessible, affordable preventive healthcare with expert care and seamless service.',
    image: '/launchpad/img1.png', // Add these images in your /public folder
  },
  {
    name: 'Anvay',
    title: 'ThriviFi',
    description:
      'An INTERNATIONAL FINANCE COMPETITION encouraging green finance initiatives through events, school partnerships, and sponsors.',
    image: '/launchpad/img2.png',
  },
  {
    name: 'Anaya',
    title: 'Journalism + Law Project',
    description:
      'A short form CONTENT page and NEWSLETTER featuring young storytellers sharing inspiring hero stories from science, sports, arts, and beyond.',
    image: '/launchpad/img3.png',
  },
  {
    name: 'Aarav',
    title: 'FinFocus',
    description:
      'A MEDIA LITERACY initiative to simplify finance through trackers, curriculums under mentors from London Business School.',
    image: '/launchpad/img4.png',
  },
];

const ShowcaseSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">🚀 Startups, Technology and Sustainability</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {showcases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-full object-cover border-2 border-gray-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-2 italic">{item.title}</p>
            <p className="text-sm text-gray-800">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
