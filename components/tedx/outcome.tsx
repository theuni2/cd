'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OutcomesCTA = () => {
  return (
    <section className="bg-slate-50 pt-20 pb-0 overflow-hidden">
      
      {/* --- Part 1: The Tangible Outcomes --- */}
      <div className="container mx-auto px-4 md:px-8 mb-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            More Than Just a Talk. <br />
            <span className="text-blue-600">Assets for Life.</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            You graduate with tangible assets that boost your college applications and career prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
      <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 flex flex-col justify-between"
>
  <div className="mb-6">
    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
      🎥
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">
      The Official Recording
    </h3>
    <p className="text-slate-600 text-sm leading-relaxed">
      A professionally filmed and edited recording of your talk, delivered as a
      high-quality portfolio asset and shareable public speaking proof.
    </p>
  </div>

  <div className="w-full h-1 bg-gradient-to-r from-red-500 to-red-200 rounded-full opacity-30"></div>
</motion.div>


          {/* Outcome 2: The Certificate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 flex flex-col justify-between"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                📜
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Certificate of Completion</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A verified certificate acknowledging your completion of the public speaking residency and your performance on the official stage.
              </p>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-200 rounded-full opacity-30"></div>
          </motion.div>

          {/* Outcome 3: The Transformation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 flex flex-col justify-between"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Career Differentiation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A standout addition to your CV/Resume. Showing you have the ability to articulate complex ideas is a top skill sought by universities and employers.
              </p>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-green-500 to-green-200 rounded-full opacity-30"></div>
          </motion.div>

        </div>
      </div>

      {/* --- Part 2: The Final Call to Action (Dark Mode) --- */}
      <div className="bg-slate-900 relative py-24 px-4 md:px-8 overflow-hidden">
        
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            The World is Waiting for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Your Idea.</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Don't let your story go unheard. Join the cohort of future leaders and speakers. Spaces are limited for the upcoming season.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href='/#contact'>
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 text-lg font-bold rounded-full hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
              Apply Now
            </button>
            </a>
            <a href='/#contact'>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-600 text-white text-lg font-semibold rounded-full hover:bg-slate-800 transition-all">
              Schedule Consultation
            </button>
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Next cohort starts: <span className="text-gray-300">January 15th, 2026</span> • Limited spots available
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OutcomesCTA;