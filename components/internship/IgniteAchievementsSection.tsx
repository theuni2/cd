'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "AgriTech Internship",
    description:
      "Our 12th grader prototyped and interned with an AgriTech firm in rural India, gaining real-world field experience.",
    image: "/testimonial/drone.png", // Upload and replace with actual path
  },
  {
    title: "Political Science Research Internship",
    description:
      "Our 10th-grade student worked under Professor Elias, former MP France candidate, on political science research and policy analysis.",
    image: "/testimonial/professor.png", // Upload and replace with actual path
  },
  {
    title: "TEDx Speaker",
    description:
      "One of our students became a TEDx speaker with support from our team in preparation and PR guidance.",
    image: "/testimonial/girik_gupta.png", // Upload and replace with actual path
  },
];

export default function IgniteAchievementsSection() {
  return (
    <section className="bg-yellow-50 py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Ignite Achievements</h2>
        <p className="mt-4 text-lg text-gray-700">
          Real stories. Real impact. Here’s how Ignite students are creating meaningful change.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-60 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
