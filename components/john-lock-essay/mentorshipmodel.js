// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { UserCheck, BookOpen, BrainCircuit, Lightbulb, XCircle } from 'lucide-react';

// const MentorshipModel = () => {
//   return (
//     <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      
//       {/* Background Decor */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px]" />
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="text-center mb-16">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//               The <span style={{ color: '#fbbf24' }}>Dual-Mentor</span> Advantage.
//             </h2>
//             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//               Strong writing needs strong thinking. That's why we pair you with <strong>two</strong> experts, not just one.
//             </p>
//           </motion.div>
//         </div>

//         {/* --- MENTOR CARDS GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
//           {/* Card 1: Primary Mentor */}
//           <MentorCard 
//             icon={<UserCheck size={32} className="text-amber-400" />}
//             title="Primary Mentor"
//             subtitle="The Writing Architect"
//             points={[
//               "20+ Years Experience in English Writing & Essay Crafting",
//               "Two decades of teaching advanced composition",
//               "Specialised in crafting winning, high-scoring essays",
//               "Coached 100+ students for global competitions"
//             ]}
//           />

//           {/* Card 2: Subject Mentor */}
//           <MentorCard 
//             icon={<BrainCircuit size={32} className="text-blue-400" />}
//             title="Subject & Technical Mentor"
//             subtitle="The Domain Expert"
//             points={[
//               "PhD-level Researchers & Domain Experts",
//               "Specialists in Economics, Political Theory, Law, Psychology",
//               "Guidance on Science & Tech-related themes",
//               "Ensures depth of argument & factual accuracy"
//             ]}
//           />

//         </div>

//         {/* --- BOTTOM SECTION: WHY US & DIFFERENTIATORS --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
//             {/* Left: Why Us (Span 7) */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-7 p-8 rounded-2xl border relative overflow-hidden"
//               style={{ 
//                 backgroundColor: 'rgba(30, 41, 59, 0.4)', 
//                 borderColor: 'rgba(251, 191, 36, 0.2)' 
//               }}
//             >
//                 <div className="flex items-center gap-3 mb-6">
//                     <Lightbulb size={28} className="text-amber-400" />
//                     <h3 className="text-2xl font-bold text-white">Why this works?</h3>
//                 </div>
                
//                 <ul className="space-y-4 mb-6">
//                     <li className="flex items-start gap-3 text-gray-100">
//                         <span className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-400 shrink-0" />
//                         <span><strong>1-on-1 Expert Feedback</strong> at critical stages of drafting.</span>
//                     </li>
//                     <li className="flex items-start gap-3 text-gray-100">
//                         <span className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-400 shrink-0" />
//                         <span>Iterative reviews aligned with specific <strong>competition standards</strong>.</span>
//                     </li>
//                     <li className="flex items-start gap-3 text-gray-100">
//                         <span className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-400 shrink-0" />
//                         <span>Ensures the winning formula: <strong>Strong Writing + Strong Thinking</strong>.</span>
//                     </li>
//                 </ul>
//             </motion.div>

//             {/* Right: What Makes Us Different (Span 5) */}
//             <motion.div 
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-5 p-8 rounded-2xl border bg-slate-900/50 border-slate-800 flex flex-col justify-center"
//             >
//                 <h3 className="text-xl font-bold text-white mb-6">The Anti-Template Promise</h3>
                
//                 <div className="space-y-4">
//                     <div className="flex items-center gap-3 text-slate-400">
//                         <XCircle size={20} className="text-red-400/80" />
//                         <span>No Templates</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-slate-400">
//                         <XCircle size={20} className="text-red-400/80" />
//                         <span>No Generic Edits</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-slate-400">
//                         <XCircle size={20} className="text-red-400/80" />
//                         <span>No AI-written essays</span>
//                     </div>
//                 </div>
//             </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// // --- Sub-Component: Mentor Card ---
// const MentorCard = ({ icon, title, subtitle, points }) => (
//   <motion.div 
//     whileHover={{ y: -5 }}
//     className="p-8 rounded-2xl border transition-all duration-300 group"
//     style={{ 
//       backgroundColor: 'rgba(30, 41, 59, 0.3)', 
//       borderColor: 'rgba(255, 255, 255, 0.05)',
//     }}
//   >
//     <div className="flex items-center gap-4 mb-6">
//         <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-slate-600 transition-colors">
//             {icon}
//         </div>
//         <div>
//             <h3 className="text-xl font-bold text-white">{title}</h3>
//             <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">{subtitle}</p>
//         </div>
//     </div>

//     <ul className="space-y-3">
//         {points.map((point, i) => (
//             <li key={i} className="flex items-start gap-3 text-gray-100 text-sm leading-relaxed">
//                 <span className="w-1 h-1 mt-2 rounded-full bg-slate-500 shrink-0" />
//                 {point}
//             </li>
//         ))}
//     </ul>
//   </motion.div>
// );

// export default MentorshipModel;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, BookOpen, BrainCircuit, Lightbulb, XCircle } from 'lucide-react';

const MentorshipModel = () => {
  // Brand Colors (Hardcoded to ensure visibility)
  const colors = {
    gold: '#fbbf24',    // Amber-400
    goldDim: 'rgba(251, 191, 36, 0.1)',
    blue: '#60a5fa',    // Blue-400
    slate: '#94a3b8',   // Slate-400
    white: '#ffffff',
    bgDark: '#0f172a',  // Slate-950
    cardBg: 'rgba(30, 41, 59, 0.5)', // Slate-800 with opacity
    border: 'rgba(255, 255, 255, 0.1)'
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.bgDark }}>
      
      {/* Background Decor (Updated for visibility) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px]" 
            style={{ backgroundColor: colors.goldDim, opacity: 0.3 }}
          />
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[100px]" 
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', opacity: 0.3 }}
          />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The <span style={{ color: colors.gold }}>Dual-Mentor</span> Advantage.
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: colors.slate }}>
              Strong writing needs strong thinking. That's why we pair you with <strong>two</strong> experts, not just one.
            </p>
          </motion.div>
        </div>

        {/* --- MENTOR CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Primary Mentor */}
          <MentorCard 
            icon={<UserCheck size={32} color={colors.gold} />}
            title="Primary Mentor"
            subtitle="The Writing Architect"
            borderColor={colors.gold}
            points={[
              "20+ Years Experience in English Writing & Essay Crafting",
              "Two decades of teaching advanced composition",
              "Specialised in crafting winning, high-scoring essays",
              "Coached 100+ students for global competitions"
            ]}
          />

          {/* Card 2: Subject Mentor */}
          <MentorCard 
            icon={<BrainCircuit size={32} color={colors.blue} />}
            title="Subject & Technical Mentor"
            subtitle="The Domain Expert"
            borderColor={colors.blue}
            points={[
              "PhD-level Researchers & Domain Experts",
              "Specialists in Economics, Political Theory, Law, Psychology",
              "Guidance on Science & Tech-related themes",
              "Ensures depth of argument & factual accuracy"
            ]}
          />

        </div>

        {/* --- BOTTOM SECTION: WHY US & DIFFERENTIATORS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Why Us (Span 7) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 p-8 rounded-2xl border relative overflow-hidden"
              style={{ 
                backgroundColor: colors.cardBg, 
                borderColor: 'rgba(251, 191, 36, 0.2)' // Subtle Gold Border
              }}
            >
                <div className="flex items-center gap-3 mb-6">
                    <Lightbulb size={28} color={colors.gold} />
                    <h3 className="text-2xl font-bold text-white">Why this works?</h3>
                </div>
                
                <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3" style={{ color: '#e2e8f0' }}>
                        <span className="w-1.5 h-1.5 mt-2 rounded-full shrink-0" style={{ backgroundColor: colors.gold }} />
                        <span><strong>1-on-1 Expert Feedback</strong> at critical stages of drafting.</span>
                    </li>
                    <li className="flex items-start gap-3" style={{ color: '#e2e8f0' }}>
                        <span className="w-1.5 h-1.5 mt-2 rounded-full shrink-0" style={{ backgroundColor: colors.gold }} />
                        <span>Iterative reviews aligned with specific <strong>competition standards</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3" style={{ color: '#e2e8f0' }}>
                        <span className="w-1.5 h-1.5 mt-2 rounded-full shrink-0" style={{ backgroundColor: colors.gold }} />
                        <span>Ensures the winning formula: <strong>Strong Writing + Strong Thinking</strong>.</span>
                    </li>
                </ul>
            </motion.div>

            {/* Right: What Makes Us Different (Span 5) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 p-8 rounded-2xl border flex flex-col justify-center"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.8)', // Darker background
                borderColor: 'rgba(255, 255, 255, 0.1)'
              }}
            >
                <h3 className="text-xl font-bold text-white mb-6">The Anti-Template Promise</h3>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-3" style={{ color: colors.slate }}>
                        <XCircle size={20} color="#f87171" /> {/* Red-400 */}
                        <span>No Templates</span>
                    </div>
                    <div className="flex items-center gap-3" style={{ color: colors.slate }}>
                        <XCircle size={20} color="#f87171" />
                        <span>No Generic Edits</span>
                    </div>
                    <div className="flex items-center gap-3" style={{ color: colors.slate }}>
                        <XCircle size={20} color="#f87171" />
                        <span>No AI-written essays</span>
                    </div>
                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
};

// --- Sub-Component: Mentor Card ---
const MentorCard = ({ icon, title, subtitle, points, borderColor }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl border transition-all duration-300 group"
    style={{ 
      backgroundColor: 'rgba(30, 41, 59, 0.4)', 
      borderColor: 'rgba(255, 255, 255, 0.05)',
    }}
  >
    <div className="flex items-center gap-4 mb-6">
        <div 
          className="p-3 rounded-xl border transition-colors"
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            borderColor: 'rgba(255,255,255,0.1)'
          }}
        >
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm uppercase tracking-wider font-medium" style={{ color: '#94a3b8' }}>{subtitle}</p>
        </div>
    </div>

    <ul className="space-y-3">
        {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#e2e8f0' }}>
                <span 
                  className="w-1.5 h-1.5 mt-2 rounded-full shrink-0" 
                  style={{ backgroundColor: '#64748b' }} // Slate-500 bullet
                />
                {point}
            </li>
        ))}
    </ul>
  </motion.div>
);

export default MentorshipModel;