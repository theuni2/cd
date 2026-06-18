// 'use client';

// import { motion } from 'framer-motion';
// import { Medal, ArrowRight } from 'lucide-react';
// import Button from '../Button';
// import Image from 'next/image';



// export default function ClaimItHero() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#90CAF9] via-[#C5CAE9] to-white overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute top-0 left-0 right-0 h-[500px] -z-10">
//         <div
//           className="absolute inset-0 animate-fastest-aura"
//           style={{
//             background:
//               'linear-gradient(135deg, rgba(251,191,36,0.5) 0%, rgba(99,102,241,0.6) 50%, rgba(232,121,249,0.4) 100%)',
//             opacity: 0.8,
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-8"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-3 py-1 space-x-2 rounded-full bg-white/70 backdrop-blur-sm shadow-md"
//             >
//               <Medal className="w-4 h-4 text-yellow-600" />
//               <span className="text-sm font-semibold text-yellow-700">
//                 Launchpad | Global Achievement Support
//               </span>
//             </motion.div>

//             {/* Heading */}
//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
//                 Stand Out with Real-World Excellence.
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mt-2">
//                   Lead. Launch. Make an Impact.
//                 </span>
//               </h1>
//               <p className="text-base md:text-xl text-gray-700 max-w-xl">
//                Unlock your potential with self-driven projects—from launching startups and impactful nonprofit partnerships to building innovative prototypes and revenue-generating ventures.

//                </p>
//             </div>

//             {/* Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 pt-4"
//             >
//               <Button
//                 href="/#contact"
//                 variant="primary"
//                 className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Launch Your Idea
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//                 </span>
//               </Button>
//               <Button
//                 href="#programs"
//                 variant="primary-outline"
//                 className="group border border-gray-400 text-gray-700 hover:border-indigo-600 hover:text-indigo-900 transition-all duration-300"
//               >
//                 Explore Opportunities
//               </Button>
//             </motion.div>


//           </motion.div>

//           {/* Right Column Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="relative hidden lg:block"
//           >
//             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/launchpad/hero.png"
//                 alt="ClaimIt Success"
//                 width={700}
//                 height={500}
//                 className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { Medal, ArrowRight, Trophy, Clock } from 'lucide-react'; // Added Clock icon
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
              'linear-gradient(135deg, rgba(251,191,36,0.3) 0%, rgba(99,102,241,0.4) 50%, rgba(232,121,249,0.2) 100%)',
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
              className="inline-flex items-center px-4 py-2 space-x-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-yellow-200"
            >
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="text-xs md:text-sm font-bold text-yellow-800 uppercase tracking-wider">
                Elite Competition Preparation
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-black leading-tight text-gray-900 tracking-tight">
                Secure Global <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
                  Recognition.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl font-medium leading-relaxed">
                Expert mentorship to help you win the world’s most prestigious youth awards. 
                From the <strong>Diana Award</strong> to the <strong>Blue Ocean Competition</strong>, we turn your passion into a global legacy.
              </p>
            </div>

            {/* Trust Logos (Diana & Blue Ocean) */}
            <div className="flex items-center gap-8 pt-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col items-center gap-1">
                    <img src="/launchpad/blue.png" alt="Blue Ocean Award" className="h-10 w-auto" />
                    <span className="text-[10px] font-bold text-gray-500">BLUE OCEAN</span>
                </div>
                <div className="w-[1px] h-10 bg-gray-300"></div>
                <div className="flex flex-col items-center gap-1">
                    <img src="https://cdn.prod.website-files.com/6332fa86146bf38f803b66c2/6334424d05aebb6f70349302_Logo-Banner-Nav-p-500.webp" alt="Blue Ocean" className="h-8 w-auto" />
                    <span className="text-[10px] font-bold text-gray-500">DIANA AWARD</span>
                </div>
            </div>

            {/* Buttons & Commitment Text */}
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3 pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/#contact"
                  variant="primary"
                  className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Launch Your Idea
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>

              {/* Commitment microcopy */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium pl-1">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Minimum commitment 10 weeks</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-white/50">
              <Image
                src="/launchpad/hero.png"
                alt="ClaimIt Success"
                width={700}
                height={500}
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}