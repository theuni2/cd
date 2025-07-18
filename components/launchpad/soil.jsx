'use client';

import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaLightbulb, FaUsers, FaSeedling } from 'react-icons/fa';
import Image from 'next/image';

const soilData = [
  {
    title: 'Service',
    description: 'Purpose-driven contribution to society',
    icon: <FaHandHoldingHeart size={32} className="text-blue-600" />,
  },
  {
    title: 'Opportunity',
    description: 'Seizing moments to grow and drive change',
    icon: <FaSeedling size={32} className="text-green-600" />,
  },
  {
    title: 'Innovation',
    description: 'Solving real problems with bold ideas',
    icon: <FaLightbulb size={32} className="text-yellow-500" />,
  },
  {
    title: 'Leadership',
    description: 'Initiating change, empowering others',
    icon: <FaUsers size={32} className="text-indigo-600" />,
  },
];

export default function LaunchpadSection() {
  return (
    <section className="bg-gradient-to-b from-[#f5faff] to-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title with logo in same line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Launchpad
          </h2>
          <Image
            src="/lp.png" // ✅ Update path to your actual logo
            alt="Launchpad Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
        >
          Creating a capstone or personal project so impactful that it touches across <span className="font-semibold text-indigo-600">S.O.I.L.</span>
        </motion.p>

        {/* SOIL Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {soilData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

