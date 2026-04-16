// import React from 'react';
// import { ChevronRight, Target, BrainCircuit, Mic, XCircle, Rocket, ShieldCheck } from 'lucide-react';

// const AlternativeComparisonGrid = () => {
//   return (
//     <section className="py-24 px-6 md:px-12 bg-white font-sans">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Modern Headline (Navy + Accent Bar) */}
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[#011B3E] uppercase tracking-tight">
//             How Is This Different?
//           </h2>
//           <div className="w-16 h-1.5 bg-[#011B3E]/30 mx-auto mt-4 rounded-full"></div> {/* Subtle divider */}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-10 items-stretch relative">
          
//           {/* Main Advantage Card: Career Discovery (Dynamic Navy Gradient) */}
//           <div className="bg-gradient-to-br from-[#011B3E] via-[#012557] to-[#011B3E] rounded-[32px] p-10 md:p-12 shadow-2xl transition-transform hover:scale-[1.01] relative overflow-hidden">
//             <div className="absolute top-0 right-0 p-4 opacity-10">
//                <ShieldCheck size={120} className="text-white" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-100 mb-10 tracking-widest uppercase relative z-10">
//               Career Discovery
//             </h3>
            
//             <div className="space-y-10 relative z-10">
//               <div className="flex items-start gap-5">
//                 <BrainCircuit className="w-8 h-8 text-white mt-1" />
//                 <div>
//                   <h4 className="text-xl font-bold text-white">1:1 Strategy-Driven Prep</h4>
//                   <p className="text-white/80 mt-2 leading-relaxed text-base">Personalized roadmap for each student based on strengths & competition goals.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <Target className="w-8 h-8 text-white mt-1" />
//                 <div>
//                   <h4 className="text-xl font-bold text-white">Outcome &gt; Just Guidance</h4>
//                   <p className="text-white/80 mt-2 leading-relaxed text-base">End-to-end support to build high-quality submissions for top competitions.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <Mic className="w-8 h-8 text-white mt-1" />
//                 <div>
//                   <h4 className="text-xl font-bold text-white">Execution-Focused Mentorship</h4>
//                   <p className="text-white/80 mt-2 leading-relaxed text-base">Work on real projects for competitions like Blue Ocean, tech & social innovation challenges.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <Rocket className="w-8 h-8 text-white mt-1" />
//                 <div>
//                   <h4 className="text-xl font-bold text-white">Dual Focus: Social + Tech</h4>
//                   <p className="text-white/80 mt-2 leading-relaxed text-base">Build impactful projects across both domains with expert guidance.</p>
//                 </div>
//               </div>

//                <div className="flex items-start gap-5">
//                 <ShieldCheck className="w-8 h-8 text-white mt-1" />
//                 <div>
//                   <h4 className="text-xl font-bold text-white">Fully Customizable Journey</h4>
//                   <p className="text-white/80 mt-2 leading-relaxed text-base">Flexible timelines, tailored mentorship, and competition-specific strategies.</p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Central Arrow (Hidden on Mobile) */}
//           <div className="hidden lg:flex items-center justify-center -ml-16 -mr-16">
//             <div className="bg-white p-4 rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-10">
//               <ChevronRight className="w-12 h-12 text-[#011B3E] stroke-[4px]" />
//             </div>
//           </div>

//           {/* Comparison Card: Others (Muted Gray Aesthetic) */}
//           <div className="bg-[#F9FAFB] p-10 md:p-12 rounded-[32px] border border-gray-100 flex flex-col justify-center">
//             <h3 className="text-xl font-bold text-gray-400 mb-10 tracking-widest uppercase">
//               Others
//             </h3>
            
//             <div className="space-y-10 opacity-70">
//               <div className="flex items-start gap-5">
//                 <XCircle className="w-6 h-6 text-gray-400 mt-1" />
//                 <div>
//                   <h4 className="text-lg font-bold text-gray-500 italic">Generic Competition Prep</h4>
//                   <p className="text-gray-400 text-sm mt-1">Broad advice, no personalization for student goals or strengths.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <XCircle className="w-6 h-6 text-gray-400 mt-1" />
//                 <div>
//                   <h4 className="text-lg font-bold text-gray-500 italic">Participation &gt; Results</h4>
//                   <p className="text-gray-400 text-sm mt-1">Focus on submitting, not on actually winning or reaching finals.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <XCircle className="w-6 h-6 text-gray-400 mt-1" />
//                 <div>
//                   <h4 className="text-lg font-bold text-gray-500 italic">Surface-Level Support</h4>
//                   <p className="text-gray-400 text-sm mt-1">Focus on ideas, not execution or submission quality.</p>
//                 </div>
//               </div>

//                <div className="flex items-start gap-5">
//                 <XCircle className="w-6 h-6 text-gray-400 mt-1" />
//                 <div>
//                   <h4 className="text-lg font-bold text-gray-500 italic">Limited Exposure</h4>
//                   <p className="text-gray-400 text-sm mt-1">Little to no support across both social impact & tech-based competitions.</p>
//                 </div>
//               </div>

//                <div className="flex items-start gap-5">
//                 <XCircle className="w-6 h-6 text-gray-400 mt-1" />
//                 <div>
//                   <h4 className="text-lg font-bold text-gray-500 italic">Fixed & Rigid Approach</h4>
//                   <p className="text-gray-400 text-sm mt-1">Same preparation style across different competitions.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AlternativeComparisonGrid;

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, XCircle, BrainCircuit, Rocket, Mic, CheckCircle } from 'lucide-react';

const AlternativeComparisonList = () => {
  // Data directly from your latest program structure
  const comparisons = [
    { 
      feature: 'Personalization', 
      us: '1:1 Strategy-Driven Prep', 
      others: 'Generic Competition Prep', 
      desc: 'Personalized roadmap for each student based on strengths',
      icon: <BrainCircuit size={28} /> 
    },
    { 
      feature: 'Support Focus', 
      us: 'Outcome > Just Guidance', 
      others: 'Participation > Results', 
      desc: 'End-to-end support to build high-quality submissions',
      icon: <Target size={28} /> 
    },
    { 
      feature: 'Coaching Style', 
      us: 'Execution-Focused Mentorship', 
      others: 'Surface-Level Support', 
      desc: 'Work on real projects for Blue Ocean and Tech challenges',
      icon: <Mic size={28} /> 
    },
    { 
      feature: 'Domain Coverage', 
      us: 'Dual Focus: Social + Tech', 
      others: 'Limited Exposure', 
      desc: 'Build impactful projects across both domains with experts',
      icon: <Rocket size={28} /> 
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section style={{ padding: '100px 20px', backgroundColor: '#F8FAFC', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#011B3E', margin: '0', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            How Is This Different?
          </h2>
          <div style={{ width: '60px', height: '5px', backgroundColor: '#011B3E', margin: '20px auto', borderRadius: '10px', opacity: 0.2 }}></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          {comparisons.map((item, index) => (
            <motion.div 
              key={index} 
              variants={rowVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '30px', position: 'relative' }}
            >
              {/* Feature Label */}
              <div style={{ width: '150px', flexShrink: 0, textAlign: 'right', display: 'none' }} className="lg:block">
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#94A3B8', uppercase: 'true', letterSpacing: '2px' }}>
                  {item.feature}
                </span>
              </div>

              {/* "OUR" CARD - High Contrast Navy */}
              <motion.div 
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ 
                  flex: 1, 
                  backgroundColor: '#FFFFFF', 
                  padding: '35px', 
                  borderRadius: '24px', 
                  borderLeft: '8px solid #011B3E',
                  boxShadow: '0 20px 40px rgba(1, 27, 62, 0.08)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'start',
                  cursor: 'default'
                }}
              >
                <div style={{ color: '#011B3E', backgroundColor: '#F1F5F9', padding: '12px', borderRadius: '16px' }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#011B3E', fontSize: '20px', fontWeight: '800', margin: '0 0 5px 0' }}>{item.us}</h4>
                  <p style={{ color: '#64748B', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                </div>
                <CheckCircle size={24} color="#011B3E" style={{ opacity: 0.3 }} />
              </motion.div>

              {/* VS Divider */}
              <div style={{ 
                fontSize: '12px', 
                fontWeight: '900', 
                color: '#CBD5E1', 
                backgroundColor: '#FFFFFF', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid #E2E8F0',
                zIndex: 2,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
              }} className="hidden lg:flex">
                VS
              </div>

              {/* "OTHERS" CARD - Muted Silver */}
              <div style={{ 
                flex: 1, 
                backgroundColor: 'rgba(241, 245, 249, 0.5)', 
                padding: '35px', 
                borderRadius: '24px', 
                border: '1px solid #E2E8F0',
                display: 'flex',
                gap: '20px',
                alignItems: 'start',
                opacity: 0.8
              }}>
                <XCircle size={24} color="#94A3B8" style={{ marginTop: '4px' }} />
                <div>
                  <h4 style={{ color: '#64748B', fontSize: '18px', fontWeight: '600', margin: '0 0 5px 0', fontStyle: 'italic' }}>{item.others}</h4>
                  <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Standardized approach with limited personal depth.</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AlternativeComparisonList;