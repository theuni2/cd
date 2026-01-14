'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ClaimItValueAdds() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Value Adds</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From strategy to submission — full guidance on international competition and award applications, including LORs, essays, videos, and pitch decks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Block 1 */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-6 border"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/claimit/essay.png"
                alt="Essay Competitions"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
              Essays for International Competitions
            </h3>
            <p className="text-gray-600 text-sm text-center">
              A rigorous essay contest for high schoolers promoting critical thinking and writing in philosophy, politics, economics, and more.
            </p>
          </motion.div> */}

<motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white shadow-xl rounded-2xl p-6 border flex flex-col h-full" // Added flex-col to push button to bottom
      style={{ borderColor: 'rgba(0,0,0,0.05)' }}
    >
      <div className="flex justify-center mb-4">
        <Image
          src="/claimit/essay.png"
          alt="Essay Competitions"
          width={160}
          height={60}
          className="object-contain"
        />
      </div>
      
      <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
        Essays for International Competitions
      </h3>
      
      <p className="text-gray-600 text-sm text-center mb-6">
        A rigorous essay contest for high schoolers promoting critical thinking and writing in philosophy, politics, economics, and more.
      </p>

      {/* --- NEW LEARN MORE BUTTON --- */}
      <div className="mt-auto flex justify-center">
        <a href="/essay_comp"> {/* Change link as needed */}
          <button 
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-md"
            style={{ 
              backgroundColor: 'rgba(251, 191, 36, 0.1)', // Light Amber tint
              color: '#d97706', // Dark Amber Text
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}
          >
            Learn More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>

    </motion.div>


          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-6 border"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/claimit/award.png"
                alt="Diana Award"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
              International Award Nominations
            </h3>
            <p className="text-gray-600 text-sm text-center">
              A prestigious honor recognizing youth leaders for impactful social action or humanitarian work that drives meaningful change.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-6 border"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/claimit/rsi.png"
                alt="RSI Program"
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
              Competitive Summer Program Applications
            </h3>
            <p className="text-gray-600 text-sm text-center">
              MIT RSI is a fully-funded program for high schoolers to conduct STEM research under MIT scientists — ClaimIt helps you get in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
