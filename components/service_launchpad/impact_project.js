'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ImpactProjectsSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // Project Data
  const projects = [
    {
      title: "Robotics for All",
      desc: "Distributing kits & teaching classes for underprivileged students.",
      icon: "🤖",
      gradient: "from-orange-500 to-red-500",
      border: "border-orange-500/30"
    },
    {
      title: "Education Hub",
      desc: "Building the largest digital resource library for learners.",
      icon: "📚",
      gradient: "from-blue-500 to-cyan-500",
      border: "border-blue-500/30"
    },
    {
      title: "Climate Action Fund",
      desc: "Launching a youth-led fund to finance local green initiatives.",
      icon: "🌱",
      gradient: "from-emerald-500 to-green-500",
      border: "border-emerald-500/30"
    },
    {
      title: "Fashion Upcycling",
      desc: "Creating a sustainable business turning waste into wearable art.",
      icon: "🧵",
      gradient: "from-pink-500 to-rose-500",
      border: "border-pink-500/30"
    },
    {
      title: "Inclusive Campaign",
      desc: "Advocacy and awareness campaigns for the differently abled.",
      icon: "🤝",
      gradient: "from-purple-500 to-indigo-500",
      border: "border-purple-500/30"
    },
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      
      {/* Background Decor (Subtle Glows) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            From Classroom to <span className="text-emerald-400">Community Leader</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            In this track, pre-teens and teens master the nuances of non-profits and social businesses. 
            <br className="hidden md:block" />
            Go from idea to <span className="text-white font-semibold">launching your own initiative in just ~2.5 weeks!</span>
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all overflow-hidden`}
            >
              {/* Hover Gradient Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.gradient} transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl bg-slate-800 border ${project.border} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* The "Any SDG" Card (Special Card) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-slate-900 border border-emerald-500/30 flex flex-col justify-center items-center text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            
            <span className="text-4xl mb-4 animate-bounce">🌍</span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Choose from <span className="text-emerald-400">ANY 17 SDGs</span>
            </h3>
            <p className="text-emerald-200/80 text-sm mb-6">
              Pick a cause that matters to you. Endless variations available.
            </p>
            <button className="px-6 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-all">
              Explore Topics
            </button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ImpactProjectsSection;