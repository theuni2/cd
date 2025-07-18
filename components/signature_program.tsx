'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Flame, BadgeCheck } from 'lucide-react';

const programs = [
      {
    src: '/lp.png',
    title: "LaunchPad",
    description: "Mentor-backed startup/nonprofit project building prototypes or revenue.",
    href:"/launchpad",
  },
  {
    src: '/thinktank.png',
    title: "ThinkTank",
    description: "Professor-led research with publications and strong LORs.",
    href:"/research",
  },

  {
    src: '/ignite.png',
    title: "Ignite",
    description: "Short, guided internship projects for real-world skills.",
    href: '/internship',
  },
  {
    src: '/claimit.png',
    title: "ClaimIt",
    description: "Expert mentorship and standout application support to win top awards and elite programs.",
    href:'/claimit',
  },
];

export default function SignatureProgramsSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Signature Programs
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition"
            >

              <div className="flex justify-center mb-4"><img className='w-10 h-15'  src={program.src}/></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm">{program.description}</p>
              <a href={program.href} className='my-2'>Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
