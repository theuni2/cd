// 'use client';

// import { motion } from 'framer-motion';

// const comparisonData = [
//   // {
//   //   feature: 'Price (USD)',
//   //   us: '$3,000 including 1v1 mentorship with top professors, LORs, and journal publication guidance',
//   //   others: [
//   //     '~$3000 for only 1v1 mentorship without add-ons like publication extending to $3,795',
//   //     '~$6500 for premium research and publication',
//   //     '~$5,000+ ',
//   //      '~$6500',
//   //   ],
//   // },
//   {
//     feature: 'Format',
//     us: ' 1v1 Ultra‑focused 10-hr sessions (5-hr with a top Professor, 5-hr with an expert writer) ',
//     others: [
//       '1-on-1 with only a PhD mentor',
//       '1-on-1 with only a PhD mentor',
//       'Seminars (small cohort) with professors; 1v1 with only PhD mentor ',
//       '1-on-1 research with PhD/postdoc, lectures, workshops',
     
//     ],
//   },
//   {
//     feature: 'Mentor Type',
//     us: ' Professors from top universities like the Ivy Leagues, Columbia + PhD experts + writing mentor (1v1)  ',
//     others: [
//       'PhD mentors',
//       'PhD mentors',
//       'Professors only in seminars',
//       'PhD mentors and Professors',
     
//     ],
//   },
//   {
//     feature: 'Publication',
//     us: 'Laser-focused on producing a ready-to-submit paper in 10 sessions, with guidance for publishing in reputed global journals.',
//     others: [
//       'Assistance in journal completion; publication as an add-on (chargeable)',
//       'Not guaranteed; Publication with Premium Research and Publication Program',
//       'Only guidance in journal publication',
//       'Guided publication track; only the top 5% invited for publication',
//     ],
//   },
//   // {
//   //   feature: 'Selectivity',
//   //   us: 'Open to motivated 9th to 12th graders despite their grades',
//   //   others: [
//   //     'Moderately selective',
//   //     'Selective (focuses on academic scores + interview)',
//   //     '26% acceptance; GPA > 3.9; fewer than 5% are 9th graders',
//   //     'Selective; involves an interview session',
//   //   ],
//   // },

//   {
//   feature: 'Selectivity',
//   us: 'Highly selective — only 13% of applicants are accepted, focusing on motivation, creativity, and research potential (open to students from Grades 9–12)',
//   others: [
//     'Moderately selective — admission based on basic academic performance and application quality',
//     'Selective — emphasizes academic scores, interview performance, and prior achievements',
//     '10% acceptance; GPA > 3.9; fewer than 5% are 9th graders — highly grade-dependent',
//     'Selective — includes a rigorous interview and application review process',
//   ],
// },

//   {
//     feature: 'Flexibility',
//     us: 'Fully customizable topic and workflow in 1-on-1 sessions with professors',
//     others: [
//       'Moderately flexible in topic/output',
//       'Semi-flexible schedule',
//       'Seminars have fixed schedules',
//       'Less flexible, set research tracks',
//     ],
//   },
// ];

// export default function ComparisonSection() {
//   return (
//     <section className="bg-[#f9f9f9] py-20 px-4 md:px-24 text-[#1a1a1a]">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
//           How We Compare
//         </h2>
//         <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
//           See how our approach stacks up against other student research programs.
//         </p>
//       </div>

//       <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 bg-white">
//         <table className="min-w-[900px] w-full text-left border-collapse">
//           <thead className="bg-[#f2f2f2] text-sm uppercase text-gray-700">
//             <tr>
//               <th className="p-4 font-medium">Feature</th>
//               <th className="p-4 font-medium text-[#111]">Thinktank (CD)</th>
//               {[...Array(4)].map((_, i) => (
//                 <th key={i} className="p-4 font-medium text-gray-600 text-sm text-center">
//                   Competitor {i + 1}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {comparisonData.map((row, idx) => (
//               <motion.tr
//                 key={idx}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//                 className="border-t border-gray-200"
//               >
//                 <td className="p-4 font-medium">{row.feature}</td>
//                 <td className="p-4 text-gray-900 text-sm">{row.us}</td>
//                 {row.others.map((text, i) => (
//                   <td key={i} className="p-4 text-sm text-gray-600 text-center">
//                     {text}
//                   </td>
//                 ))}
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { Check, X, Target, Zap, Users, Edit3 } from 'lucide-react';

// const ComparisonSection = () => {
//   const highlights = [
//     {
//       title: "1:1 Ultra-Focused Model",
//       desc: "Deeply personalized mentorship compared to generic group sessions.",
//       icon: <Users className="w-5 h-5 text-yellow-500" />
//     },
//     {
//       title: "Guaranteed Publication",
//       desc: "We don't just provide guidance; we ensure your research is published in journals.",
//       icon: <Target className="w-5 h-5 text-yellow-500" />
//     },
//     {
//       title: "Direct Expert Access",
//       desc: "Work directly with Professors from top global universities and PhD experts.",
//       icon: <Zap className="w-5 h-5 text-yellow-500" />
//     },
//     {
//       title: "Full Customization",
//       desc: "Tailored to your specific topic, pace, and academic goals.",
//       icon: <Edit3 className="w-5 h-5 text-yellow-500" />
//     }
//   ];

//   return (
//     <section className="py-16 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             How Is This Different?
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover why our execution-driven mentorship stands apart from traditional academic programs.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 items-stretch">
//           {/* Career Discovery Column */}
//           <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-400 overflow-hidden relative">
//             <div className="bg-yellow-400 py-4 px-6">
//               <h3 className="text-xl font-bold text-gray-900 text-center uppercase tracking-wider">
//                 Career Discovery
//               </h3>
//             </div>
//             <div className="p-8 space-y-8">
//               {highlights.map((item, index) => (
//                 <div key={index} className="flex gap-4">
//                   <div className="flex-shrink-0 mt-1 p-2 rounded-lg">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">{item.title}</h4>
//                     <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Competitors Column */}
//           <div className="bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
//             <div className="bg-gray-200 py-4 px-6 text-center text-gray-700 font-bold uppercase tracking-wider">
//               Others
//             </div>
//             <div className="p-8 space-y-8 opacity-80">
//               <div className="flex gap-4">
//                 <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">Single-Mentor Limitation</h4>
//                   <p className="text-gray-500 text-sm mt-1">Typically only PhD mentors with no specialized writing support.</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">Just Guidance</h4>
//                   <p className="text-gray-500 text-sm mt-1">No guarantee or handholding through the publication process.</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">Theory-Heavy Approach</h4>
//                   <p className="text-gray-500 text-sm mt-1">Mostly videos and readings with no tangible outputs to showcase.</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">Rigid Structure</h4>
//                   <p className="text-gray-500 text-sm mt-1">Fixed schedules and predefined tracks with limited flexibility.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComparisonSection;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Target, Zap, Users, Edit3, ArrowRight } from 'lucide-react';

const ComparisonSection = () => {
  const highlights = [
    {
      title: "1:1 Ultra-Focused Model",
      desc: "Deeply personalized mentorship compared to generic group sessions.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Guaranteed Publication",
      desc: "We don't just provide guidance; we ensure your research is published in top journals.",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Direct Expert Access",
      desc: "Work directly with Professors from top global universities and PhD experts.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Full Customization",
      desc: "Tailored to your specific topic, pace, and academic goals.",
      icon: <Edit3 className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24 px-6 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#011B3E] uppercase tracking-tight mb-4">
            How Is This <span className="text-[#478af6]">Different?</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#478af6] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover why our execution-driven mentorship stands apart from traditional, theory-heavy academic programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Career Discovery Column (Premium Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow Decorative Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#478af6] to-[#011B3E] rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-[32px] shadow-2xl border border-blue-50 overflow-hidden">
              <div className="bg-[#011B3E] py-6 px-8 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                  Career Discovery
                </h3>
                <span className="bg-[#478af6] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  Execution-Led
                </span>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 md:p-10 space-y-8"
              >
                {highlights.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#478af6]/10 flex items-center justify-center text-[#478af6] group-hover:bg-[#478af6] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#011B3E] text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Competitors Column (Subtle/Minimalist) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pl-8"
          >
            <div className="flex items-center gap-4 mb-8">
               <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">The Alternatives</h3>
               <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="space-y-8">
              {[
                { label: "Single-Mentor Limitation", sub: "Typically only PhD mentors with no specialized writing support." },
                { label: "Just Guidance", sub: "No guarantee or handholding through the publication process." },
                { label: "Theory-Heavy Approach", sub: "Mostly videos and readings with no tangible outputs to showcase." },
                { label: "Rigid Structure", sub: "Fixed schedules and predefined tracks with limited flexibility." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:bg-red-50 transition-colors">
                    <X className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 group-hover:text-gray-600 transition-colors">{item.label}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-gray-100 border border-dashed border-gray-300">
               <p className="text-sm text-gray-500 italic">
                 "Most programs focus on the 'What'. We focus on the 'How', ensuring you leave with a published portfolio, not just a certificate."
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;