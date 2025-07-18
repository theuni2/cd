'use client';

import { motion } from 'framer-motion';
import { Medal, ArrowRight } from 'lucide-react';
import Button from '../Button';
import Image from 'next/image';



export default function ClaimItHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#90CAF9] via-[#C5CAE9] to-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] -z-10">
        <div
          className="absolute inset-0 animate-fastest-aura"
          style={{
            background:
              'linear-gradient(135deg, rgba(251,191,36,0.5) 0%, rgba(99,102,241,0.6) 50%, rgba(232,121,249,0.4) 100%)',
            opacity: 0.8,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 space-x-2 rounded-full bg-white/70 backdrop-blur-sm shadow-md"
            >
              <Medal className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700">
                Launchpad | Global Achievement Support
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Stand Out with Real-World Excellence.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mt-2">
                  Lead. Launch. Make an Impact.
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-700 max-w-xl">
               Unlock your potential with self-driven projects—from launching startups and impactful nonprofit partnerships to building innovative prototypes and revenue-generating ventures.

               </p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                href="/#apply"
                variant="primary"
                className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Start Your ClaimIt Journey
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                href="#elite-programs"
                variant="primary-outline"
                className="group border border-gray-400 text-gray-700 hover:border-indigo-600 hover:text-indigo-900 transition-all duration-300"
              >
                Explore Opportunities
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/launchpad/hero.png"
                alt="ClaimIt Success"
                width={700}
                height={500}
                className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
