// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Rocket, Users, Cpu, Mic } from "lucide-react";

// const items = [
//   {
//     title: "Ideas Launched",
//     description:
//       "Books, drones, rockets, startups, and student-led fundraisers brought to life.",
//     href: "/launchpad/ideas-launched",
//     icon: Rocket,
//   },
//   {
//     title: "Community & Field Impact",
//     description:
//       "Workshops, NGO initiatives, book drives, and industry visits led by students.",
//     href: "/launchpad/community-impact",
//     icon: Users,
//   },
//   {
//     title: "TechXpect & Innovation Labs",
//     description:
//       "AI tools, competitions, and technology-first learning experiences.",
//     href: "/launchpad/techxpect",
//     icon: Cpu,
//   },
//   {
//     title: "Voices & Stories",
//     description:
//       "Student podcasts and conversations exploring ideas, journeys, and impact.",
//     href: "/launchpad/podcasts",
//     icon: Mic,
//   },
// ];

// export default function LaunchpadImpactSection() {
//   return (
//     <section className="w-full bg-white py-20">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14 text-center"
//         >
//           <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
//             What We’ve Helped Students Build
//           </h2>
//           <p className="mt-4 text-base text-gray-600">
//             Real outcomes across innovation, community, technology, and media.
//           </p>
//         </motion.div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {items.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <Link
//                   href={item.href}
//                   className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-gray-300 hover:shadow-md"
//                 >
//                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 group-hover:bg-gray-200 transition">
//                     <Icon className="h-6 w-6 text-gray-900" />
//                   </div>
//                   <h3 className="mb-2 text-lg font-medium text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="mb-6 text-sm text-gray-600">
//                     {item.description}
//                   </p>
//                   <span className="mt-auto text-sm font-medium text-gray-900">
//                     Explore →
//                   </span>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Rocket, Mic, Calendar, AlertCircle } from "lucide-react";

// const items = [
//   {
//     title: "TEDx Speaker Residency",
//     description:
//       "A 8-week mentorship program where you craft your 'Big Idea' and deliver it on an official TEDx stage. Includes scriptwriting, coaching, and a recorded talk.",
//     href: "/tedx",
//     icon: Rocket,
//     color: "group-hover:text-red-600",
//     bg: "group-hover:bg-red-50",
//     cohortDate: "Starts Jan 15th, 2026",
//     status: "Limited Seats",
//   },
//   {
//     title: "Student Podcast Incubator",
//     description:
//       "An 8-week accelerator to launch your own show on Spotify and Apple. Master interviewing, audio engineering, and build your digital influence.",
//     href: "/podcast",
//     icon: Mic,
//     color: "group-hover:text-purple-600",
//     bg: "group-hover:bg-purple-50",
//     cohortDate: "Starts Jan 15th, 2026",
//     status: "Limited Slots",
//   },
// ];

// export default function LaunchpadImpactSection() {
//   return (
//     <section className="w-full bg-white py-20">
//       <div className="mx-auto max-w-5xl px-6">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14 text-center"
//         >
//           <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
//             Signature Programs
//           </h2>
//           <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
//             Select a specialized track to build your personal brand and gain real-world experience.
//           </p>
//         </motion.div>

//         {/* Grid - Centered 2 Columns */}
//         <div className="grid gap-8 sm:grid-cols-2">
//           {items.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <Link
//                   href={item.href}
//                   className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1"
//                 >
//                   {/* Icon */}
//                   <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-colors duration-300 ${item.bg}`}>
//                     <Icon className={`h-7 w-7 text-gray-900 transition-colors duration-300 ${item.color}`} />
//                   </div>
                  
//                   {/* Title & Description */}
//                   <h3 className="mb-3 text-xl font-bold text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="mb-6 text-base text-gray-600 leading-relaxed">
//                     {item.description}
//                   </p>

//                   {/* Cohort Info Badges (New Section) */}
//                   <div className="mt-auto mb-6 flex flex-wrap gap-3">
//                     <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
//                       <Calendar className="w-3.5 h-3.5" />
//                       {item.cohortDate}
//                     </div>
//                     <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-medium border border-orange-100">
//                       <AlertCircle className="w-3.5 h-3.5" /> &nbsp;
//                       {item.status}
//                     </div>
//                   </div>

//                   {/* Link Arrow */}
//                   <span className="flex items-center text-sm font-semibold text-gray-900 group-hover:translate-x-1 transition-transform">
//                     View Program Details →
//                   </span>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, AlertCircle, ArrowRight } from "lucide-react";

const items = [
  {
    title: "TEDx Speaker Residency",
    description:
      "A 12-week mentorship program where you craft your 'Big Idea' and deliver it on an official TEDx stage. Includes scriptwriting, coaching, and a recorded talk.",
    href: "/tedx",
    // Speaker Image
    imageSrc: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    brandColor: "red",
    cohortDate: "Starts Jan 15th, 2026",
    status: "Limited Seats",
  },
  {
    title: "Student Podcast Incubator",
    description:
      "An 8-week accelerator to launch your own show on Spotify and Apple. Master interviewing, audio engineering, and build your digital influence.",
    href: "/podcast",
    // Studio Image
    imageSrc: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
    brandColor: "purple",
    cohortDate: "Starts Jan 15th, 2026",
    status: "Limited Slots",
  },
];

export default function LaunchpadImpactSection() {
  return (
    <section className="w-full bg-slate-50 py-24 relative overflow-hidden" id="programs">
      
      {/* Decorative background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100 shadow-sm">
            Choose Your Path
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Signature Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Select a specialized track to build your personal brand and gain real-world experience before you graduate.
          </p>
        </motion.div>

        {/* Grid - Centered 2 Columns */}
        {/* 'items-stretch' ensures both grid cells are same height */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto items-stretch rounded-2xl shadow-lg">
          {items.map((item, index) => {
            
            // Dynamic color classes based on brand
            const isRed = item.brandColor === 'red';
            const borderColor = isRed ? "border-t-red-500" : "border-t-purple-500";
            const buttonColor = isRed ? "bg-red-600 hover:bg-red-700 shadow-red-200" : "bg-purple-600 hover:bg-purple-700 shadow-purple-200";
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full rounded-2xl shadow-lg" // Crucial for height
              >
                <Link
                  href={item.href}
                  className={`group relative flex flex-col h-full bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 border-t-[8px] ${borderColor} overflow-hidden hover:-translate-y-2 ring-1 ring-gray-100`}
                >
                  
                  {/* 1. IMAGE HEADER (Increased Height) */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Status Badge (Floating) */}
                    <div className="absolute top-5 right-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-orange-700 text-xs font-bold border border-orange-100 uppercase tracking-wide shadow-sm">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* 2. CONTENT BODY (Flex-Grow used here) */}
                  <div className="p-8 flex flex-col flex-grow">
                    
                    {/* Title */}
                    <h3 className="mb-4 text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Description (This pushes the button down) */}
                    <p className="mb-8 text-gray-600 leading-relaxed font-medium text-base flex-grow">
                      {item.description}
                    </p>

                    {/* Footer Info: Date & Button */}
                    <div className="pt-6 border-t border-gray-100 mt-auto w-full">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-6 bg-gray-50 w-fit px-3 py-1 rounded-lg">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{item.cohortDate}</span>
                      </div>
                      
                      <button className={`w-full py-4 px-6 rounded-xl text-white font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg ${buttonColor}`}>
                        View Program Details
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}