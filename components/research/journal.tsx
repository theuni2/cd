// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const journals = [
//   {
//     logo: '/journal/concord.png',
//   },
//   {
//     logo: '/journal/curieux.png',
//   },
//   {
//     // name: 'Science',
//     logo: '/journal/ijsr.png',
//   },
//   {
//     // name: 'JAMA',
//     logo: '/journal/jsr.png',
//   },
//   {
//     // name: 'BMJ',
//     logo: '/journal/ysj.png',
//   },
//   // Add more as needed
// ];

// export default function JournalMarquee() {
//   return (
//     <div className="mt-24 relative w-full">
//       {/* Fade gradient masks */}
//       <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//       {/* Desktop Marquee */}
//       <div className="hidden md:block overflow-hidden">
//         <motion.div
//           className="flex gap-12 py-4"
//           animate={{ x: ['0%', '-50%'] }}
//           transition={{
//             x: {
//               duration: 50,
//               repeat: Infinity,
//               ease: 'linear',
//             },
//           }}
//         >
//           {[...Array(2)].flatMap(() => journals).map((journal, index) => (
//             <div
//               key={`desktop-${index}`}
//               className="flex items-center space-x-3 flex-shrink-0"
//             >
//               <Image
//                 src={journal.logo}
//                 alt={journal.name}
//                 width={300}
//                 height={60}
//                 className="grayscale hover:grayscale-0 transition-all duration-300"
//               />
//               <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
//                 {journal.name}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Mobile Marquee (faster) */}
//       <div className="md:hidden overflow-hidden">
//         <motion.div
//           className="flex gap-8 py-4"
//           animate={{ x: ['0%', '-50%'] }}
//           transition={{
//             x: {
//               duration: 20,
//               repeat: Infinity,
//               ease: 'linear',
//             },
//           }}
//         >
//           {[...Array(2)].flatMap(() => journals).map((journal, index) => (
//             <div
//               key={`mobile-${index}`}
//               className="flex items-center space-x-2 flex-shrink-0"
//             >
//               <Image
//                 src={journal.logo}
//                 alt={journal.name}
//                 width={32}
//                 height={32}
//                 className="grayscale hover:grayscale-0 transition-all duration-300"
//               />
//               {/* <span className="text-gray-600 text-xs whitespace-nowrap">
//                 {journal.name}
//               </span> */}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const journals = [
//   { logo: '/journal/concord.png' },
//   { logo: '/journal/curieux.png' },
//   { logo: '/journal/ijsr.png' },
//   { logo: '/journal/jsr.png' },
//   { logo: '/journal/ysj.png' },
// ];

// export default function JournalMarquee() {
//   return (
//     <div className="mt-24 relative w-full overflow-hidden">
//       {/* Fade gradient masks */}
//       <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//       {/* Marquee container */}
//       <div className="overflow-hidden">
//         <motion.div
//           className="flex gap-10 sm:gap-16 py-4"
//           animate={{ x: ['0%', '-50%'] }}
//           transition={{
//             x: {
//               duration: 40,
//               repeat: Infinity,
//               ease: 'linear',
//             },
//           }}
//         >
//           {[...Array(2)].flatMap(() => journals).map((journal, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center flex-shrink-0"
//             >
//               <Image
//                 src={journal.logo}
//                 alt="Journal Logo"
//                 width={160}
//                 height={40}
//                 className="grayscale hover:grayscale-0 transition-all duration-300 w-28 sm:w-36 md:w-44"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const journals = [
//   { logo: '/journal/concord.png' },
//   { logo: '/journal/curieux.png' },
//   { logo: '/journal/ijsr.png' },
//   { logo: '/journal/jsr.png' },
//   { logo: '/journal/ysj.png' },
// ];

// export default function JournalMarquee() {
//   return (
//     <div className="mt-24 relative w-full overflow-hidden">
//       {/* Fade gradient masks */}
//       <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//       {/* Marquee container */}
//       <div className="overflow-hidden">
//         <motion.div
//           className="flex gap-12 sm:gap-20 py-8" // Increased gap and padding for larger images
//           animate={{ x: ['0%', '-50%'] }}
//           transition={{
//             x: {
//               duration: 15, // Lower number = Faster speed (Changed from 40 to 20)
//               repeat: Infinity,
//               ease: 'linear',
//             },
//           }}
//         >
//           {[...Array(2)].flatMap(() => journals).map((journal, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center flex-shrink-0"
//             >
//               <Image
//                 src={journal.logo}
//                 alt="Journal Logo"
//                 width={240} // Increased base width for Next.js optimization
//                 height={100}
//                 className="grayscale hover:grayscale-0 transition-all duration-200  w-40 sm:w-52 md:w-64" 
//                 // ^ Increased Tailwind widths (e.g., md:w-44 -> md:w-64)
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const journals = [
//   { logo: '/journal/concord.png' },
//   { logo: '/journal/curieux.png' },
//   { logo: '/journal/ijsr.png' },
//   { logo: '/journal/jsr.png' },
//   { logo: '/journal/ysj.png' },
// ];

// export default function JournalMarquee() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Modern Headline */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[#011B3E] uppercase tracking-tight">
//             We Help You Publish In Top Journals
//           </h2>
//           <div className="w-16 h-1.5 bg-[#011B3E]/30 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Marquee Container */}
//         <div className="relative w-full overflow-hidden group">
//           {/* Fade gradient masks */}
//           <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

//           <motion.div
//             className="flex gap-16 sm:gap-24 py-10"
//             animate={{ x: ['0%', '-50%'] }}
//             transition={{
//               x: {
//                 duration: 15,
//                 repeat: Infinity,
//                 ease: 'linear',
//               },
//             }}
//           >
//             {[...Array(2)].flatMap(() => journals).map((journal, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center flex-shrink-0"
//               >
//                 <Image
//                   src={journal.logo}
//                   alt="Journal Logo"
//                   width={240}
//                   height={100}
//                   className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-44 sm:w-56 md:w-72 object-contain"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom Note / Disclaimer */}
//         <div className="mt-10 flex justify-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm">
//             <span className="flex h-2 w-2 rounded-full bg-[#011B3E] animate-pulse"></span>
//             <p className="text-sm md:text-base text-gray-500 font-medium">
//               <span className="text-[#011B3E] font-bold">Note:</span> We facilitate placements in many more conferences and journals tailored to your specific research experience.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const journals = [
  { logo: '/journal/concord.png' },
  { logo: '/journal/curieux.png' },
  { logo: '/journal/ijsr.png' },
  { logo: '/journal/jsr.png' },
  { logo: '/journal/ysj.png' },
];

export default function JournalMarquee() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#011B3E] uppercase tracking-tight">
            We Help You Publish In Top Journals
          </h2>
          <div className="w-16 h-1.5 bg-[#011B3E]/30 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden group">
          {/* Fade gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 sm:gap-24 py-10"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {[...Array(2)].flatMap(() => journals).map((journal, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <Image
                  src={journal.logo}
                  alt="Journal Logo"
                  width={240}
                  height={100}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-44 sm:w-56 md:w-72 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Note / Disclaimer */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#011B3E] animate-pulse"></span>
            <p className="text-sm md:text-base text-gray-500 font-medium">
              <span className="text-[#011B3E] font-bold">Note:</span> We facilitate placements in many more conferences and journals tailored to your specific research experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}