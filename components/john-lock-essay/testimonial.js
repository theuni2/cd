'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, src: "/testimonial/writing_1.jpeg", name: "Student A", achievement: "John Locke Winner" },
  { id: 2, src: "/testimonial/writing_2.jpeg", name: "Student B", achievement: "Harvard HIR Gold" },
  { id: 3, src: "/testimonial/writing_3.jpeg", name: "Student C", achievement: "Marshall Society Finalist" },
  { id: 4, src: "/testimonial/writing_4.jpeg", name: "Student D", achievement: "Cambridge Applicant" },
];

const TestimonialGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-24 w-full bg-[#0f172a]" id="Testimonials">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Square Image Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative aspect-square overflow-hidden rounded-xl bg-slate-900 border border-white/10 hover:border-amber-500/50 transition-colors duration-500"
            >
              {/* Achievement Badge (Top Right) */}
              <div className="absolute top-2 right-2 z-20">
                {/* <div className="bg-amber-500/90 text-[10px] font-bold text-slate-950 px-2 py-0.5 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.achievement}
                </div> */}
              </div>

              {/* Testimonial Image */}
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Text Content */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-sm md:text-base leading-tight">
                  {item.name}
                </p>
                <p className="text-amber-400 text-[11px] md:text-xs font-medium mt-1">
                  Click to view story →
                </p>
              </div> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm italic">
            Joined by 200+ students from top global schools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;