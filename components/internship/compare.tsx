// 'use client';

// import { motion } from 'framer-motion';
// import { ReactNode } from 'react';

// interface ComparisonRow {
//   feature: string;
//   ignite: ReactNode;
//   ladder: ReactNode;
//   aip: ReactNode;
//   whyUs: ReactNode;
// }

// const rows: ComparisonRow[] = [
//   {
//     feature: 'Scope & Project Type',
//     ignite: (
//       <>
//         <span className="font-medium italic">Real placements</span> with field experts + Letter of Completion & hands-on learning
//       </>
//     ),
//     ladder: 'Startup projects',
//     aip: 'Field placements; Not necessarily mentored',
//     whyUs: (
//       <>
//         Intern with{' '}
//         <span className="font-medium italic">leading startups, companies, field experts, and nonprofits</span>{' '}
//         — build a global network
//       </>
//     ),
//   },
//   {
//     feature: 'Geographic Reach',
//     ignite: (
//       <>
//         <span className="italic font-medium">Global reach</span> — India & international
//       </>
//     ),
//     ladder: 'Global — US & international',
//     aip: 'India-based; open to international students',
//     whyUs: (
//       <>
//         <span className="italic font-medium">Equal access</span> for students in India & worldwide;
//         <br />
//         <span className="italic">One transparent, affordable price</span>
//       </>
//     ),
//   },
//   {
//     feature: 'Selectivity & Prestige',
//     ignite: (
//       <>
//         Competitive with <span className="italic font-medium">1:1 mentor support</span> every step
//       </>
//     ),
//     ladder: 'Competitive: 70 spots',
//     aip: 'Varies by placement; moderate competition',
//     whyUs: (
//       <>
//         <span className="italic font-medium">No GPA cutoffs</span>, no complicated applications. Just{' '}
//         <span className="font-medium">exclusive, high-quality opportunities</span>.
//       </>
//     ),
//   },
// ];

// export default function InternshipComparisonSection() {
//   return (
//     <section className="bg-white py-20 px-4 md:px-20">
//       <div className="text-center mb-16 max-w-3xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why Us</h2>
//         <p className="mt-4 text-lg text-gray-600">
//           A quick look at what makes Shadowed Internship stand out in a sea of global programs.
//         </p>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm"
//       >
//         <table className="min-w-full text-left border-collapse bg-white">
//           <thead className="bg-blue-50">
//             <tr>
//               <th className="p-4 font-semibold text-sm text-gray-700">Feature</th>
//               <th className="p-4 font-semibold text-sm text-gray-700">Shadowed Internship (CD)</th>
//               <th className="p-4 font-semibold text-sm text-gray-700">Competitor 1</th>
//               <th className="p-4 font-semibold text-sm text-gray-700">Competitor 2</th>
//               <th className="p-4 font-semibold text-sm text-gray-700">Why Us?</th>
//             </tr>
//           </thead>
//           <tbody className="text-sm text-gray-700">
//             {rows.map((row, idx) => (
//               <tr
//                 key={idx}
//                 className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
//               >
//                 <td className="p-4 font-semibold text-gray-800">{row.feature}</td>
//                 <td className="p-4">{row.ignite}</td>
//                 <td className="p-4">{row.ladder}</td>
//                 <td className="p-4">{row.aip}</td>
//                 <td className="p-4">{row.whyUs}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </motion.div>
//     </section>
//   );
// }

// import React from 'react';
// import { Target, Users, Sparkles, XCircle, FileText, Bot } from 'lucide-react';

// const ComparisonSection = () => {
//   const data = [
//     {
//       label: 'Career Discovery',
//       point: 'True 1:1 Personalization',
//       icon: <Users className="w-12 h-12 text-[#FFD700]" />, // Matching gold color
//       description: 'Tailored guidance aligned to your goals, accessible from anywhere.',
//       type: 'advantage'
//     },
//     {
//       label: 'Others',
//       point: 'Generic Group Learning',
//       icon: <Users className="w-12 h-12 text-zinc-300" />,
//       description: 'Limited personalization with divided mentor attention.',
//       type: 'disadvantage'
//     },
//     {
//       label: 'Career Discovery',
//       point: 'Building Real Outcomes',
//       icon: <FileText className="w-12 h-12 text-[#FFD700]" />,
//       description: 'Build high-impact deliverables (case studies, research papers, market reports).',
//       type: 'advantage'
//     },
//     {
//       label: 'Others',
//       point: 'Theory-Heavy Approach',
//       icon: <FileText className="w-12 h-12 text-zinc-300" />,
//       description: 'Only videos/readings. No tangible outputs to showcase.',
//       type: 'disadvantage'
//     },
//     {
//       label: 'Career Discovery',
//       point: 'Active Industry Mentors',
//       icon: <Sparkles className="w-12 h-12 text-[#FFD700]" />,
//       description: 'Certified directly from professionals at top organizations (Google, Microsoft, etc.)',
//       type: 'advantage'
//     },
//     {
//       label: 'Others',
//       point: 'Non-Industry Mentors',
//       icon: <XCircle className="w-12 h-12 text-zinc-300" />,
//       description: 'Guidance from trainers, not active professionals.',
//       type: 'disadvantage'
//     }
//   ];

//   return (
//     <section className="py-24 px-6 md:px-12 bg-[#F9FAFB]"> {/* Matching website light bg */}
//       <div className="max-w-7xl mx-auto">
        
//         {/* Modern Headline */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#011B3E] tracking-tight">
//             How We Are Different
//           </h2>
//           <div className="w-20 h-1 bg-[#FFD700] mx-auto mt-4 rounded"></div> {/* Matching gold accent */}
//         </div>

//         {/* The Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
//           {data.map((item, index) => (
//             <div 
//               key={index} 
//               className={`relative bg-white p-10 rounded-3xl border-2 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center text-center
//                 ${item.type === 'advantage' 
//                   ? 'border-[#FFD700] shadow-xl' // Highlighted Brand Card
//                   : 'border-zinc-100 shadow-sm'    // Muted Other Card
//                 }`
//               }
//             >
//               {/* Point Type Label */}
//               <span className={`absolute top-6 left-6 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest
//                 ${item.type === 'advantage' 
//                   ? 'bg-[#FFD700] text-[#011B3E]' 
//                   : 'bg-zinc-100 text-zinc-600'
//                 }`}
//               >
//                 {item.label}
//               </span>

//               {/* Icon Container */}
//               <div className="mb-8 mt-10">
//                 {item.icon}
//               </div>

//               {/* Content */}
//               <h4 className={`text-2xl font-bold mb-4 ${item.type === 'advantage' ? 'text-[#011B3E]' : 'text-zinc-600'}`}>
//                 {item.point}
//               </h4>
//               <p className={`text-base leading-relaxed ${item.type === 'advantage' ? 'text-zinc-800' : 'text-zinc-500'}`}>
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default ComparisonSection;


import React from 'react';
import { Target, Users, Sparkles, XCircle, CheckCircle } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: 'PERSONALIZATION',
      ourIcon: <Users className="w-8 h-8 text-[#FFD700]" />,
      ourPoint: 'True 1:1 Personalization',
      ourDesc: 'Tailored guidance aligned to your goals, accessible anywhere.',
      othersPoint: 'Generic Group Learning',
      othersDesc: 'Limited personalization with divided mentor attention.'
    },
    {
      feature: 'OUTCOMES',
      ourIcon: <Target className="w-8 h-8 text-[#FFD700]" />,
      ourPoint: 'Building Real Deliverables',
      ourDesc: 'Create high-impact assets: case studies, research papers, market reports.',
      othersPoint: 'Theory-Heavy Approach',
      othersDesc: 'Only videos/readings. No tangible outputs to showcase.'
    },
    {
      feature: 'MENTORSHIP',
      ourIcon: <Sparkles className="w-8 h-8 text-[#FFD700]" />,
      ourPoint: 'Active Industry Professionals',
      ourDesc: 'Certified directly by professionals at top orgs (Google, Microsoft, etc.)',
      othersPoint: 'Non-Industry Mentors',
      othersDesc: 'Guidance from trainers, not active professionals.'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Modern Headline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How We Are Different
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mt-4 rounded"></div>
        </div>

        <div className="space-y-12">
          {comparisons.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-stretch md:items-center gap-6 lg:gap-10">
              
              {/* Feature Label (optional, adds structure) */}
              <div className="w-32 flex-shrink-0 text-center md:text-right hidden lg:block">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.feature}</span>
              </div>

              {/* "Our" Card */}
              <div className="flex-1 bg-white p-8 rounded-3xl border-2 border-[#FFD700] shadow-xl flex gap-6 hover:-translate-y-1 transition hover:shadow-2xl">
                <div className="mt-1 flex-shrink-0">{item.ourIcon}</div>
                <div>
                  <h4 className="text-xl font-bold text-[#011B3E]">{item.ourPoint}</h4>
                  <p className="text-zinc-700 mt-1.5 leading-relaxed text-base">{item.ourDesc}</p>
                </div>
              </div>

              {/* Divider / Icon */}
              <div className="hidden lg:flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center font-black text-zinc-400">VS</div>
              </div>

              {/* "Others" Card */}
              <div className="flex-1 bg-zinc-50 p-8 rounded-3xl border border-zinc-100 shadow-inner flex gap-6">
                <div className="mt-1 flex-shrink-0"><XCircle className="w-8 h-8 text-zinc-300" /></div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-500 italic">{item.othersPoint}</h4>
                  <p className="text-zinc-500 mt-1.5 leading-relaxed text-base">{item.othersDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;