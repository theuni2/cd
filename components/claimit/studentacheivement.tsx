'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const students = [
  {
    name: 'VARSHIKA',
    image: '/claimit/varshika.png',
    detail: 'Got into this prestigious summer program with ~4% acceptance rate',
    logo: '/claimit/stanford.png',
  },
  {
    name: 'GIRIK',
    image: '/claimit/girik.png',
    detail: 'Bagged a position in the prestigious essay competition by Northeastern University.',
    logo: '/claimit/nu.png',
  },
  {
    name: 'ZOYA',
    image: '/claimit/oya.png',
    detail: '  Secured acceptance into an elite summer school at Babson College.',
    logo: '/claimit/babson.png',
  },
  {
    name: 'SANAYA',
    image: '/claimit/sanaya.png',
    detail: 'Finalist for the Psychology essay at the prestigious John Locke Institute.',
    logo: '/claimit/essay.png',
  },
];

export default function StudentAchievements() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Global Achievements of Our Students
          </h2>
          <p className="mt-3 text-gray-600 text-base max-w-2xl mx-auto">
            Our students consistently stand out in the most selective global programs and competitions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {students.map((student, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={student.image}
                alt={student.name}
                width={96}
                height={96}
                className="rounded-full object-cover border-4 border-yellow-500"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{student.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{student.detail}</p>
              <div className="mt-4">
                <Image
                  src={student.logo}
                  alt="Logo"
                  width={80}
                  height={40}
                  className="object-contain mx-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
