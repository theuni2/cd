// 'use client';

// import { motion } from 'framer-motion';
// import { Lightbulb, Rocket, Flame, BadgeCheck } from 'lucide-react';

// const programs = [
//       {
//     src: '/lp.png',
//     title: "LaunchPad",
//     description: "Launching startups and self driven social projects for participation across Blue Ocean Competition, Diana Awards etc.",
//     href:"/launchpad",
//   },
//   {
//     src: '/thinktank.png',
//     title: "ThinkTank",
//     description: "A direct research experience under professors from Brown University, the IITs, and other top-tier global institutions, with publication support at Elsevier, Heliyon and other IEEE level journals.",
//     href:"/research",
//   },

//   {
//     src: '/ignite.png',
//     title: "Ignite",
//     description: "Internships to help gain firsthand exposure to industry leaders through exclusive shadowing programs at top-tier global firms like Google and PwC.",
//     href: '/internship',
//   },
//   {
//     src: '/claimit.png',
//     title: "ClaimIt",
//     description: "A holistic writing program under PhDs from global universities (IIT, IIM, Oxford) for competitions including the John Locke Essay Competition.",
//     href:'/claimit',
//   },
//   {
//     src: '/mcl.png',
//     title: "Mobile Career Lab",
//     description: "Hands-on, cohort-based workshops teaching 21st-century skills at the intersection of technology and professional fields like AI x Law, Medicine, and Journalism.",
//     href: '/workshops',
//   },
// ];

// export default function SignatureProgramsSection() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-white px-6 py-20">
//       <div className="max-w-7xl mx-auto w-full">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
//         >
//           Signature Programs
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {programs.map((program, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition"
//             >

//               <div className="flex justify-center mb-4"><img className='w-10 h-15'  src={program.src}/></div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
//               <p className="text-gray-600 text-sm">{program.description}</p>
//               <a href={program.href} className='my-2'>Learn More</a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react'; // Using a Lucide icon for the button

// const programs = [
//   {
//     src: '/lp.png',
//     title: "LaunchPad",
//     description: "Launching startups and self-driven social projects for participation across Blue Ocean Competition, Diana Awards etc.",
//     href: "/launchpad",
//     color: "from-orange-50 to-orange-100"
//   },
//   {
//     src: '/thinktank.png',
//     title: "ThinkTank",
//     description: "A direct research experience under professors from Brown University, the IITs, and other global institutions.",
//     href: "/research",
//     color: "from-blue-50 to-blue-100"
//   },
//   {
//     src: '/ignite.png',
//     title: "Ignite",
//     description: "Internships to gain firsthand exposure to industry leaders through exclusive shadowing programs at top-tier global firms.",
//     href: '/internship',
//     color: "from-purple-50 to-purple-100"
//   },
//   {
//     src: '/claimit.png',
//     title: "ClaimIt",
//     description: "A holistic writing program under PhDs from global universities for competitions including the John Locke Essay Competition.",
//     href: '/claimit',
//     color: "from-green-50 to-green-100"
//   },
//   {
//     src: '/mcl.png',
//     title: "Mobile Career Lab",
//     description: "Hands-on, cohort-based workshops teaching 21st-century skills such as AI x Law, Medicine, and Journalism.",
//     href: '/workshop',
//     color: "from-pink-50 to-pink-100"
//   },
// ];

// export default function SignatureProgramsSection() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-[#fafafa] px-6 py-24 overflow-hidden">
//       {/* Background Decorative Blobs */}
//       <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
//       <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

//       <div className="max-w-7xl mx-auto w-full relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
//             Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs</span>
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-lg">
//             Empowering the next generation of leaders through specialized, high-impact career and academic pathways.
//           </p>
//         </motion.div>

//         {/* Flexible Grid to handle 5 items beautifully */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {programs.map((program, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               whileHover={{ y: -10 }}
//               className={`relative group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-[380px] flex flex-col`}
//             >
//               {/* Icon Container with subtle background gradient */}
//               <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                 <img className='w-10 h-10 object-contain' src={program.src} alt={program.title} />
//               </div>

//               <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
//                 {program.title}
//               </h3>
              
//               <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
//                 {program.description}
//               </p>

//               <a 
//                 href={program.href} 
//                 className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-gray-900 group/link"
//               >
//                 Explore Program
//                 <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
//               </a>

//               {/* Decorative accent line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react'; // Using a Lucide icon for the button

// const programs = [
//   {
//     src: '/lp.png',
//     title: "LaunchPad",
//     description: "Launching startups and self-driven social projects for participation across Blue Ocean Competition, Diana Awards etc.",
//     href: "/launchpad",
//     color: "from-orange-50 to-orange-100"
//   },
//   {
//     src: '/thinktank.png',
//     title: "ThinkTank",
//     description: "A direct research experience under professors from Brown University, the IITs, and other global institutions.",
//     href: "/research",
//     color: "from-blue-50 to-blue-100"
//   },
//   {
//     src: '/ignite.png',
//     title: "Ignite",
//     description: "Internships to gain firsthand exposure to industry leaders through exclusive shadowing programs at top-tier global firms.",
//     href: '/internship',
//     color: "from-purple-50 to-purple-100"
//   },
//   {
//     src: '/claimit.png',
//     title: "ClaimIt",
//     description: "A holistic writing program under PhDs from global universities for competitions including the John Locke Essay Competition.",
//     href: '/claimit',
//     color: "from-green-50 to-green-100"
//   }
// ];

// export default function SignatureProgramsSection() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-[#fafafa] px-6 py-24 overflow-hidden">
//       {/* Background Decorative Blobs */}
//       <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
//       <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

//       <div className="max-w-7xl mx-auto w-full relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
//             Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs</span>
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-lg">
//             Empowering the next generation of leaders through specialized, high-impact career and academic pathways.
//           </p>
//         </motion.div>

//         {/* Flexible Grid adjusted for 4 items (Balanced 2x2 layout) */}
//         <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
//           {programs.map((program, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               whileHover={{ y: -10 }}
//               className={`relative group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 w-full sm:w-[calc(50%-1rem)] max-w-[420px] flex flex-col`}
//             >
//               {/* Icon Container with subtle background gradient */}
//               <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                 <img className='w-10 h-10 object-contain' src={program.src} alt={program.title} />
//               </div>

//               <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
//                 {program.title}
//               </h3>
              
//               <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
//                 {program.description}
//               </p>

//               <a 
//                 href={program.href} 
//                 className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-gray-900 group/link"
//               >
//                 Explore Program
//                 <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
//               </a>

//               {/* Decorative accent line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    src: '/lp.png',
    title: "LaunchPad",
    description: "Launch your passion projects for participation across Blue Ocean Competition, Diana Awards etc.",
    href: "/launchpad",
    color: "from-orange-50 to-orange-100"
  },
  {
    src: '/thinktank.png',
    title: "ThinkTank",
    description: "A direct research experience under professors & PhDs from Brown University, the IITs, and other global institutions.",
    href: "/research",
    color: "from-blue-50 to-blue-100"
  },
  {
    src: '/ignite.png',
    title: "Ignite",
    description: "Internships to gain firsthand exposure to industry leaders through exclusive shadowing programs at top-tier global firms.",
    href: '/internship',
    color: "from-purple-50 to-purple-100"
  },
  {
    src: '/claimit.png',
    title: "ClaimIt",
    description: "A holistic writing program under PhDs from global universities for competitions including the John Locke Essay Competition.",
    href: '/claimit',
    color: "from-green-50 to-green-100"
  }
];

export default function SignatureProgramsSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fafafa] px-6 py-24 overflow-hidden" id='services'>
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Empowering the next generation of leaders through specialized, high-impact career and academic pathways.
          </p>
        </motion.div>

        {/* Featured Fellowship Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 border border-slate-700 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Decorative Background Aura */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-left z-10 max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Selective Research Fellowship • Grades 9–12
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              The Applied Behavioral Economics Scholar Program
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Taught directly by <strong>Dartmouth Professor Kimberly Rose Clark, Ph.D.</strong> (25-Yr CRO). Master choice architecture, diagnose commercial friction, and publish a consultancy-ready Behavioral Strategy Brief.
            </p>
          </div>
          
          <a
            href="/applied-behavioral-economics-scholar"
            className="z-10 flex-shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2 group whitespace-nowrap"
          >
            Explore Fellowship
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* CSS Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 w-full flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with subtle background gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <img className='w-10 h-10 object-contain' src={program.src} alt={program.title} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {program.description}
                </p>
              </div>

              <a 
                href={program.href} 
                className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-gray-900 group/link mt-auto"
              >
                Explore Program
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </a>

              {/* Decorative accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}