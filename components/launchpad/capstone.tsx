'use client';

import React from 'react';

const CapstoneSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Choose Your Capstone Path</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Build impactful projects tailored to your time, goals, and interests.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Short Capstone */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-300">
          <h3 className="text-2xl font-semibold text-[#E6A800] mb-4">Short Capstone</h3>
          <ul className="space-y-3 text-gray-800 text-base">
            <li><strong>Duration:</strong> 6 weeks–15 weeks</li>
            <li><strong>Goal:</strong> Skill exploration, early exposure</li>
            <li><strong>Project Scope:</strong> Narrow focus, one deliverable</li>
            <li><strong>Mentorship:</strong> Light guidance, structured curriculum</li>
            <li><strong>Outcome:</strong> Newsletter, mini-paper, podcast, or presentation</li>
            <li><strong>Level of Impact:</strong> Ideal for early resume building</li>
            <li><strong>Who It’s For:</strong> Students testing interests, limited time</li>
          </ul>
        </div>

        {/* Long Capstone */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-300">
          <h3 className="text-2xl font-semibold text-[#E6A800] mb-4">Long Capstone</h3>
          <ul className="space-y-3 text-gray-800 text-base">
            <li><strong>Duration:</strong> 25 weeks–1 year</li>
            <li><strong>Goal:</strong> Deep dive, college-ready hook</li>
            <li><strong>Project Scope:</strong> Multi-phase, interdisciplinary</li>
            <li><strong>Mentorship:</strong> Personalized, evolving feedback</li>
            <li><strong>Outcome:</strong> Startup, prototype, podcast, or club</li>
            <li><strong>Level of Impact:</strong> Transformative work</li>
            <li><strong>Who It’s For:</strong> Goal-driven students & university applicants</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CapstoneSection;
