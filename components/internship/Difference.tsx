'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGlobe, FaUsers, FaCheckCircle, FaUserGraduate, FaRocket } from 'react-icons/fa';

const IgniteExperienceSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900">IGNITE</h2> */}
                    

  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">IGNITE</h3>

          <Image
            src="/ignite.png" 
            alt="Launchpad Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </motion.div>


        <p className="mt-4 text-lg text-gray-600">
          Fast-track your future with prestigious internships, apprenticeships, and mentor-led projects—organize TEDx events, collaborate with PhD researchers, or intern with global brands.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* With Virtual Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm"
        >
          <h3 className="text-base font-semibold text-blue-600 mb-4 uppercase tracking-wide">
            With Virtual Experience
          </h3>
          <ul className="space-y-5 text-gray-700">
            <li className="flex gap-3 items-start">
              <FaGlobe className="text-blue-500 mt-1" />
              <span>Accessible from anywhere, offering broader opportunities</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaUsers className="text-blue-500 mt-1" />
              <span>Work with <strong>diverse teams</strong>, enhancing adaptability</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span><strong>Wide network</strong> — Builds a global professional ecosystem</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaUserGraduate className="text-blue-500 mt-1" />
              <span><strong>LORs have helped students</strong> get into top global programs</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaRocket className="text-blue-500 mt-1" />
              <span>Mentorship by <strong>global experts</strong> and launch a <strong>LIVE, impact-driven project</strong> right from day one</span>
            </li>
          </ul>
        </motion.div>

        {/* Without Virtual Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm"
        >
          <h3 className="text-base font-semibold text-red-600 mb-4 uppercase tracking-wide">
            Without Virtual Experience
          </h3>
          <ul className="space-y-5 text-gray-700">
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-red-500 mt-1" />
              <span><strong>Restricted</strong> by location and availability</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-red-500 mt-1" />
              <span>Limited cross-cultural collaboration</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-red-500 mt-1" />
              <span>Mostly local or industry-specific connections</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-red-500 mt-1" />
              <span><strong>Fewer examples</strong> of successful recommendations</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default IgniteExperienceSection;
