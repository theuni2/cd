'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Platform Icons for the visual display
const PlatformLogos = {
  Spotify: () => (
    <svg className="w-8 h-8 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.3.96zm1.44-3.3c-.3.48-.84.66-1.32.36-3.3-2.04-8.28-2.64-12.18-1.44-.48.18-1.02-.12-1.2-.6-.18-.48.12-1.02.6-1.2 4.5-1.32 9.9-1.2 13.56 1.08.42.3.6.84.54 1.32zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.32-1.32 11.58-1.02 15.12 1.08.6.36.78 1.14.42 1.74-.36.6-1.14.78-1.74.42z"/></svg>
  ),
  YouTube: () => (
    <svg className="w-8 h-8 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
  Instagram: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
};

const PodcastOutcomes = () => {
  return (
    <section className="bg-white pt-20 pb-0 overflow-hidden">
      
      {/* --- Part 1: The Tangible Outcomes --- */}
      <div className="container mx-auto px-4 md:px-8 mb-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Launch Your Voice. <br />
            <span className="text-purple-600">Own Your Platform.</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            You graduate not just with skills, but with a launched media property and the credentials to back it up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Outcome 1: The Certificate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-50 rounded-2xl p-8 shadow-md border border-purple-100 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-white text-purple-600 rounded-lg shadow-sm flex items-center justify-center mb-4 text-2xl">
                📜
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Certified Host & Speaker</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Receive official certification recognizing your ability to anchor a show, lead compelling interviews, and manage audio production. A powerful addition to your LinkedIn and resume.
              </p>
            </div>
            <div className="w-full h-1.5 bg-gradient-to-r from-purple-500 to-purple-200 rounded-full"></div>
          </motion.div>

          {/* Outcome 2: The 5-Episode Series (Portfolio) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-pink-50 rounded-2xl p-8 shadow-md border border-pink-100 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-white text-pink-600 rounded-lg shadow-sm flex items-center justify-center mb-4 text-2xl">
                🎙️
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Your 10-Episode Interview Series</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Walk away with a professionally produced mini-series featuring 7–10 real speakers. This is a tangible portfolio asset proving you can connect with experts and create high-value content.
              </p>
            </div>
            <div className="w-full h-1.5 bg-gradient-to-r from-pink-500 to-pink-200 rounded-full"></div>
          </motion.div>

          {/* Outcome 3: Global Distribution (Platforms) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-indigo-50 rounded-2xl p-8 shadow-md border border-indigo-100 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-white text-indigo-600 rounded-lg shadow-sm flex items-center justify-center mb-4 text-2xl">
                🌍
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Global Multi-Platform Presence</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                Your voice, everywhere. We ensure your content is published globally, giving you instant digital credibility on the platforms that matter most.
              </p>
              {/* Visual Platform Logos */}
              <div className="flex items-center gap-4 opacity-80">
                <PlatformLogos.Spotify />
                <PlatformLogos.YouTube />
                <div className="text-pink-600"><PlatformLogos.Instagram /></div>
              </div>
            </div>
             <div className="w-full h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-200 rounded-full"></div>
          </motion.div>

        </div>
      </div>

      {/* --- Part 2: The Final Call to Action (Dark Mode) --- */}
      <div className="bg-slate-900 relative py-24 px-4 md:px-8 overflow-hidden">
        
        {/* Background Glow Effects (Purple theme) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Stop Waiting to Be Heard. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Start Broadcasting.</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the next cohort of student creators and build a digital asset that sets your future apart.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href='/#contact'>
            <button className="w-full sm:w-auto px-10 py-4 bg-purple-600 text-white text-lg font-bold rounded-full hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transform hover:-translate-y-1">
              Apply for Incubator
            </button>
            </a>
            <a href='/#contact'>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-purple-400 text-purple-200 text-lg font-semibold rounded-full hover:bg-purple-900/30 transition-all">
              Book a Producer Call
            </button>
            </a>
          </div>

         {/* <p className="mt-6 text-sm text-gray-500">
  Next cohort starts: <span className="text-gray-300">February 1st, 2026</span> • 
  Register by: <span className="text-gray-300">January 15th</span> • 
  Limited spots available
</p> */}
        </motion.div>

      </div>
    </section>
  );
};

export default PodcastOutcomes;