'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, PlayCircle, Calendar, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HeroSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 px-6 overflow-hidden bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Background Gradients (Optional for AI feel) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LEFT CONTENT --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-black text-white rounded-full">
            <Zap className="w-3 h-3 text-yellow-400 fill-current" />
            AI Founder Cohort 2026
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            LAUNCH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI BACKED STARTUP
            </span> <br />
            IN 10 WEEKS.
          </h1>

          {/* Subheadline (Placeholder text based on context) */}
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            Go from vague idea to MVP. Leverage AI tools to build faster, validate smarter, and pitch to investors without writing a single line of complex code.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Syllabus
            </button>
          </div>

          {/* Footer / Urgency Info */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-900" />
              <span>Batch Starts: <span className="text-gray-900 font-semibold">Feb 1st, 2026</span></span>
            </div>
            <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-blue-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Application closes in 3 days
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT VISUAL --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Decorative Elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          {/* Main Image Container */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
             
             {/* Placeholder Image - You should replace this */}
             <img 
               src="https://images.unsplash.com/photo-1531297461136-82ae8ace156a?auto=format&fit=crop&q=80" 
               alt="AI Startup Building" 
               className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
             />

             {/* Floating UI Card (Simulating Success) */}
             <div className="absolute bottom-6 left-6 right-6 z-20">
               <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4">
                 <div className="bg-green-100 p-2 rounded-full">
                   <Rocket className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-semibold uppercase">Result</p>
                   <p className="text-sm font-bold text-gray-900">MVP Launched & User Validated</p>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}