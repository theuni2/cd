// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { GraduationCap, Scale, BookOpen, Quote, CheckCircle } from 'lucide-react';

// const WhyCollegesLoveThis = () => {
//   return (
//     <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#020617' }}>
      
//       {/* Background Decor */}
//       <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
//          <div 
//            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]" 
//            style={{ backgroundColor: '#fbbf24' }} 
//          />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             Why Universities <span style={{ color: '#fbbf24' }}>Love This.</span>
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//             In a sea of 4.0 GPAs, a John Locke essay is a "signal" mechanism. It proves you can handle the Oxford/Ivy tutorial style before you even arrive.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT: THE BENEFITS GRID */}
//           <div className="space-y-6">
            
//             <BenefitCard 
//               icon={<Scale size={24} color="#fbbf24" />}
//               title="Proof of Academic Rigor"
//               desc="It demonstrates you can read beyond the high school textbook. You are engaging with undergraduate-level philosophy, politics, or economics."
//             />
            
//             <BenefitCard 
//               icon={<BookOpen size={24} color="#fbbf24" />}
//               title="Intellectual Vitality"
//               desc="Admissions officers look for 'curiosity.' Writing 2,000 words on a complex topic voluntarily is the ultimate proof of intellectual hunger."
//             />
            
//             <BenefitCard 
//               icon={<GraduationCap size={24} color="#fbbf24" />}
//               title="Third-Party Validation"
//               desc="School grades are subjective. A shortlist from Oxford/Princeton judges is an objective, globally recognized stamp of quality."
//             />

//           </div>

//           {/* RIGHT: THE "ADMISSIONS VERDICT" VISUAL */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             {/* The File Folder Look */}
//             <div 
//               className="p-8 rounded-2xl border relative backdrop-blur-sm"
//               style={{ 
//                 backgroundColor: 'rgba(30, 41, 59, 0.3)', // Slate-800 with opacity
//                 borderColor: 'rgba(255, 255, 255, 0.1)',
//                 transform: 'rotate(-2deg)'
//               }}
//             >
//                {/* Paper Clip Visual */}
//                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-800 rounded-b-xl border border-slate-700 flex items-center justify-center">
//                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidential</span>
//                </div>

//                <div className="flex items-center gap-4 mb-6 mt-2">
//                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
//                    <Quote size={20} className="text-slate-400" />
//                  </div>
//                  <div>
//                    <h4 className="text-white font-bold">Admissions Committee Note</h4>
//                    <p className="text-slate-500 text-xs">Evaluation Snippet</p>
//                  </div>
//                </div>

//                {/* The "Handwritten" Note */}
//                <div className="space-y-4">
//                  <p className="text-gray-300 italic leading-relaxed font-serif text-lg">
//                    "Candidate distinguishes themselves through the John Locke submission. Unlike peers who list passive activities, this student demonstrates <span style={{ color: '#fbbf24', textDecoration: 'underline' }}>independent research capability</span> and the ability to construct a sustained, original argument."
//                  </p>
//                </div>

//                {/* The Stamp */}
//                <div className="mt-8 flex justify-end">
//                  <div 
//                    className="px-4 py-2 rounded border-2 transform -rotate-12 inline-flex items-center gap-2"
//                    style={{ 
//                      borderColor: '#fbbf24', 
//                      color: '#fbbf24' 
//                    }}
//                  >
//                    <CheckCircle size={18} />
//                    <span className="font-bold uppercase tracking-widest text-sm">High Priority</span>
//                  </div>
//                </div>

//             </div>

//             {/* Backing Card for Depth */}
//             <div 
//               className="absolute inset-0 rounded-2xl border -z-10"
//               style={{ 
//                 backgroundColor: 'rgba(15, 23, 42, 0.5)',
//                 borderColor: 'rgba(255, 255, 255, 0.05)',
//                 transform: 'rotate(4deg) scale(0.95)'
//               }}
//             />

//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// // --- Sub-Component: Benefit Card ---
// const BenefitCard = ({ icon, title, desc }) => (
//   <motion.div 
//     whileHover={{ x: 10 }}
//     className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-slate-900/50"
//   >
//     <div 
//       className="shrink-0 p-3 rounded-lg border"
//       style={{ 
//         backgroundColor: 'rgba(15, 23, 42, 0.5)', 
//         borderColor: 'rgba(251, 191, 36, 0.2)' 
//       }}
//     >
//       {icon}
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
//     </div>
//   </motion.div>
// );

// export default WhyCollegesLoveThis;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, BookOpen, GraduationCap, PenTool, Search, Trophy, Quote, CheckCircle } from 'lucide-react';

const WritingProgramValue = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#020617' }}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <div 
           className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]" 
           style={{ backgroundColor: '#fbbf24' }} 
         />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Universities <span style={{ color: '#fbbf24' }}>Love This.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            In a sea of 4.0 GPAs, a John Locke essay is a "signal" mechanism. It proves you can handle the Oxford/Ivy tutorial style before you even arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: THE BENEFITS GRID (Content from Writing Flyer) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Item 1: From Screenshot */}
            <BenefitCard 
              icon={<Scale size={24} color="#fbbf24" />}
              title="Proof of Academic Rigor"
              desc="Demonstrates you can read beyond high school textbooks and engage with undergrad-level philosophy."
            />
            
            {/* Item 2: From Screenshot */}
            <BenefitCard 
              icon={<BookOpen size={24} color="#fbbf24" />}
              title="Intellectual Vitality"
              desc="Writing 2,000 words on a complex topic voluntarily is the ultimate proof of intellectual hunger."
            />
            
            {/* Item 3: From Screenshot */}
            <BenefitCard 
              icon={<GraduationCap size={24} color="#fbbf24" />}
              title="Third-Party Validation"
              desc="A shortlist from Oxford/Princeton judges is an objective, globally recognized stamp of quality."
            />

            {/* Item 4: From Flyer (Structure) */}
            <BenefitCard 
              icon={<PenTool size={24} color="#fbbf24" />}
              title="Argument Construction"
              desc="Build a logical, unbreakable thesis that stands up to academic scrutiny."
            />

            {/* Item 5: From Flyer (Structure) */}
            <BenefitCard 
              icon={<Search size={24} color="#fbbf24" />}
              title="Deep Research"
              desc="Learn to research that signals depth. Go beyond Google and cite like a scholar."
            />

            {/* Item 6: From Flyer (Outcome) */}
            <BenefitCard 
              icon={<Trophy size={24} color="#fbbf24" />}
              title="Reusable Framework"
              desc="Walk away with a clear thinking & writing framework you can use for college essays."
            />

          </div>

          {/* RIGHT: THE "ADMISSIONS VERDICT" VISUAL (Content from Screenshot) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The File Folder Look */}
            <div 
              className="p-8 rounded-2xl border relative backdrop-blur-sm"
              style={{ 
                backgroundColor: 'rgba(30, 41, 59, 0.3)', // Slate-800 with opacity
                borderColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'rotate(-2deg)'
              }}
            >
               {/* Paper Clip Visual */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-800 rounded-b-xl border border-slate-700 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidential</span>
               </div>

               <div className="flex items-center gap-4 mb-6 mt-2">
                 <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
                   <Quote size={20} className="text-slate-400" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold">Admissions Committee Note</h4>
                   <p className="text-slate-500 text-xs">Evaluation Snippet</p>
                 </div>
               </div>

               {/* The "Handwritten" Note (Exact text from your screenshot) */}
               <div className="space-y-4">
                 <p className="text-gray-300 italic leading-relaxed font-serif text-lg">
                   "Candidate distinguishes themselves through the John Locke submission. Unlike peers who list passive activities, this student demonstrates <span style={{ color: '#fbbf24', textDecoration: 'underline' }}>independent research capability</span> and the ability to construct a sustained, original argument."
                 </p>
               </div>

               {/* The Stamp */}
               <div className="mt-8 flex justify-end">
                 <div 
                   className="px-4 py-2 rounded border-2 transform -rotate-12 inline-flex items-center gap-2"
                   style={{ 
                     borderColor: '#fbbf24', 
                     color: '#fbbf24' 
                   }}
                 >
                   <CheckCircle size={18} />
                   <span className="font-bold uppercase tracking-widest text-sm">High Priority</span>
                 </div>
               </div>

            </div>

            {/* Backing Card for Depth */}
            <div 
              className="absolute inset-0 rounded-2xl border -z-10"
              style={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(255, 255, 255, 0.05)',
                transform: 'rotate(4deg) scale(0.95)'
              }}
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

// --- Sub-Component: Benefit Card ---
const BenefitCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-slate-900/50 border border-transparent hover:border-slate-800"
  >
    <div 
      className="shrink-0 p-3 rounded-lg border"
      style={{ 
        backgroundColor: 'rgba(15, 23, 42, 0.5)', 
        borderColor: 'rgba(251, 191, 36, 0.2)' 
      }}
    >
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default WritingProgramValue;