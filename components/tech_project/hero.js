"use client";
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    // Added a light blue/white gradient background and proper padding
    <section className="relative min-h-screen w-full bg-[#f8fbff] px-6 py-12 lg:px-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
            <span className="text-sm">🏆</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
              Elite Competition Preparation
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-[#0f172a] leading-tight">
            Secure Global <br />
            <span className="text-[#2563eb]">Recognition.</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Expert mentorship to help you win the world's most prestigious youth awards. 
            From the <span className="font-bold text-slate-800">Diana Award</span> to the 
            <span className="font-bold text-slate-800"> Blue Ocean Competition</span>, 
            we turn your passion into a global legacy.
          </p>

          {/* Partner Icons */}
          <div className="flex gap-8 pt-4">
            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="h-12 w-12 bg-slate-300 rounded-full" />
              <span className="text-[10px] font-bold uppercase">Google Science Fair</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="h-12 w-12 bg-slate-300 rounded-full" />
              <span className="text-[10px] font-bold uppercase"></span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
              Launch Your Idea <span className="text-xl">→</span>
            </button>
            <button className="bg-gray-400 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold transition-all">
              Explore Opportunities
            </button>
          </div>
        </div>

        {/* Right Side: Image & Floating Card */}
        <div className="relative w-full">
          {/* Image Container with fixed height so it doesn't collapse */}
          <div className="relative z-10 w-full h-[350px] lg:h-[500px] bg-slate-200 rounded-[32px] overflow-hidden border-[10px] border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
              alt="Students working on project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card - Positioned Relative to the Image Container */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 min-w-[160px]">
            <h3 className="text-4xl font-black text-[#2563eb]">100%</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Publication Success
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;