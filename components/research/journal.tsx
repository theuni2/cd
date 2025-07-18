'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const journals = [
  {
    logo: '/journal/concord.png',
  },
  {
    logo: '/journal/curieux.png',
  },
  {
    // name: 'Science',
    logo: '/journal/ijsr.png',
  },
  {
    // name: 'JAMA',
    logo: '/journal/jsr.png',
  },
  {
    // name: 'BMJ',
    logo: '/journal/ysj.png',
  },
  // Add more as needed
];

export default function JournalMarquee() {
  return (
    <div className="mt-24 relative w-full">
      {/* Fade gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Desktop Marquee */}
      <div className="hidden md:block overflow-hidden">
        <motion.div
          className="flex gap-12 py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 50,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...Array(2)].flatMap(() => journals).map((journal, index) => (
            <div
              key={`desktop-${index}`}
              className="flex items-center space-x-3 flex-shrink-0"
            >
              <Image
                src={journal.logo}
                alt={journal.name}
                width={300}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
                {journal.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Marquee (faster) */}
      <div className="md:hidden overflow-hidden">
        <motion.div
          className="flex gap-8 py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...Array(2)].flatMap(() => journals).map((journal, index) => (
            <div
              key={`mobile-${index}`}
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <Image
                src={journal.logo}
                alt={journal.name}
                width={32}
                height={32}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              {/* <span className="text-gray-600 text-xs whitespace-nowrap">
                {journal.name}
              </span> */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
