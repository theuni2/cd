'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stories = [
  {
    name: 'OJASWINI',
    field: 'Psychology',
    project: 'Post-Traumatic Growth in Adolescents Who Experienced Bullying',
    universityLogo: '/unilogo/ucla.png',
    image: '/testimonial/ojshawni.png',
  },
  {
    name: 'ZOYA',
    field: 'Economics',
    project: 'Behavioral Insights into Discrimination in Labor Markets',
    universityLogo: '/unilogo/columbia university.png',
    image: '/testimonial/img2.png',
  },
  {
    name: 'AKSHAT',
    field: 'Economics',
    project: 'The Economics of Reverse Migration in India Post-COVID-19',
    universityLogo: '/unilogo/iitd.png',
    image: '/testimonial/ig3.png',
  },
];

export default function IdeasToImpactSection() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a]">
          From Ideas to Impact
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Real research journeys by our students
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center"
          >
            <Image
              src={story.image}
              alt={story.name}
              width={90}
              height={90}
              className="mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-md font-medium text-[#1a1a1a] uppercase tracking-wide">
              {story.name} • {story.field}
            </h3>
            <p className="text-sm text-gray-500 mt-3 italic leading-snug">
              {story.project}
            </p>
            <Image
              src={story.universityLogo}
              alt="University Logo"
              width={70}
              height={30}
              className="mx-auto mt-5"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
