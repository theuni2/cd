// import React from 'react';
// import { Lightbulb, Rocket, Target, Award, CheckCircle2 } from 'lucide-react';

// const ProgramDetailsSection = () => {
//   const highlights = [
//     {
//       title: "1:1 Mentorship",
//       description: "Work with competition winners, industry experts & global coaches.",
//       icon: <Users className="w-6 h-6 text-[#011B3E]" />
//     },
//     {
//       title: "End-to-End Guidance",
//       description: "From idea validation and strategy to final execution and submission.",
//       icon: <Rocket className="w-6 h-6 text-[#011B3E]" />
//     },
//     {
//       title: "Global Competition Ready",
//       description: "Build projects for top contests like Blue Ocean and Conrad Challenge.",
//       icon: <Award className="w-6 h-6 text-[#011B3E]" />
//     },
//     {
//       title: "Standout Portfolios",
//       description: "Position yourself as a high-impact, globally competitive student leader.",
//       icon: <Target className="w-6 h-6 text-[#011B3E]" />
//     }
//   ];

//   return (
//     <section className="py-24 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//           <div className="max-w-2xl">
//             <h2 className="text-4xl md:text-5xl font-black text-[#011B3E] leading-tight uppercase tracking-tighter">
//               About The <span className="text-[#FFD700]">Program</span>
//             </h2>
//             <div className="w-24 h-2 bg-[#FFD700] mt-4 rounded-full"></div>
//             <p className="text-xl text-gray-600 mt-8 leading-relaxed font-medium">
//               A structured, mentor-led experience designed to take students from 
//               <span className="text-[#011B3E] font-bold"> Ideation to Winning Submissions.</span>
//             </p>
//           </div>
//           <div className="hidden lg:block">
//              <div className="bg-[#011B3E] text-white px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase">
//                Impact Led • Tech Driven
//              </div>
//           </div>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {highlights.map((item, index) => (
//             <div 
//               key={index}
//               className="group bg-[#F9FAFB] p-8 rounded-[32px] border border-transparent hover:border-[#FFD700] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
//             >
//               <div className="w-14 h-14 bg-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 {item.icon}
//               </div>
//               <h4 className="text-xl font-extrabold text-[#011B3E] mb-3 leading-snug">
//                 {item.title}
//               </h4>
//               <p className="text-gray-500 leading-relaxed font-medium">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Feature Focus Callout */}
//         <div className="mt-12 bg-[#011B3E] rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-10 rounded-full -mr-20 -mt-20"></div>
//           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-1">
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 italic">
//                 Focusing on self-driven projects solved socially or technologically.
//               </h3>
//               <p className="text-gray-300 text-lg">
//                 We don't just teach theory; we help you build real-world solutions that top universities value.
//               </p>
//             </div>
//             <button className="bg-[#FFD700] text-[#011B3E] px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3">
//               Apply Now <CheckCircle2 size={20} />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// import { Users } from 'lucide-react'; // Ensure Users is imported
// export default ProgramDetailsSection;



"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, XCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const ComparisonMatrix = () => {
  // Animation for the main card floating
  const floatAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section style={{ 
      padding: '100px 20px', 
      backgroundColor: '#FDFDFD', 
      fontFamily: '"Inter", sans-serif',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header with Glass Detail */}
        <div style={{ textAlign: 'left', marginBottom: '80px', paddingLeft: '20px' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase' }}
          >
            The Gold Standard
          </motion.span>
          <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#011B3E', margin: '10px 0', letterSpacing: '-1.5px' }}>
            Elevate Your <span style={{ color: '#012E6A' }}>Future.</span>
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#FFD700', borderRadius: '2px' }}></div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', position: 'relative' }}>
          
          {/* THE "TRADITIONAL" SIDE - Subtle & Flat */}
          <div style={{ flex: '1', minWidth: '300px', padding: '40px', borderRadius: '32px', backgroundColor: '#F4F7FA' }}>
            <h3 style={{ color: '#8E9AAF', fontSize: '18px', fontWeight: '700', marginBottom: '30px' }}>Traditional Programs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {[
                { text: "Generic Group Learning", sub: "Standardized curriculum for everyone" },
                { text: "Theory-Heavy Approach", sub: "Passive video watching" },
                { text: "Academic Trainers", sub: "Mentors without recent industry experience" }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'start', opacity: 0.6 }}>
                  <XCircle size={20} color="#8E9AAF" style={{ marginTop: '3px' }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: '600', color: '#4A5568' }}>{item.text}</p>
                    <p style={{ margin: 0, fontSize: '13px', color: '#718096' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THE "PREMIUM" CARD - Dynamic Gradient & Magnetic Hover */}
          <motion.div
            {...floatAnimation}
            whileHover={{ scale: 1.03 }}
            style={{ 
              flex: '1.2', 
              minWidth: '350px', 
              padding: '60px 50px', 
              borderRadius: '40px', 
              background: 'linear-gradient(145deg, #011B3E 0%, #012E6A 100%)',
              boxShadow: '0 40px 80px -15px rgba(1, 27, 62, 0.4)',
              position: 'relative',
              zIndex: 10,
              border: '1px solid rgba(255, 215, 0, 0.2)'
            }}
          >
            {/* Top Badge */}
            <div style={{ 
              position: 'absolute', top: '30px', right: '40px', 
              backgroundColor: '#FFD700', color: '#011B3E', 
              padding: '6px 15px', borderRadius: '20px', 
              fontSize: '12px', fontWeight: '900', textTransform: 'uppercase'
            }}>
              Most Transformative
            </div>

            <h3 style={{ color: '#FFD700', fontSize: '26px', fontWeight: '800', marginBottom: '45px' }}>
              Career Discovery
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {[
                { icon: <Users color="#FFD700" />, title: "Hyper-Personalized 1:1", desc: "Your unique roadmap, built specifically for your goals." },
                { icon: <Target color="#FFD700" />, title: "Outcome-First Strategy", desc: "Build high-impact passion projects and case studies that get noticed." },
                { icon: <Rocket color="#FFD700" />, title: "Global Industry Leads", desc: "Access mentors from top companies and Ivy League networks." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  style={{ display: 'flex', gap: '20px' }}
                >
                  <div style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', padding: '12px', borderRadius: '15px' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', margin: '0 0 5px 0', fontSize: '19px', fontWeight: '700' }}>{item.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '15px', lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Button CTA */}
            <motion.div 
              whileHover={{ x: 10 }}
              style={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: '10px', color: '#FFD700', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Start Your Journey <ArrowRight size={20} />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Background Text Decor */}
      <div style={{ 
        position: 'absolute', 
        fontSize: '250px', 
        fontWeight: '900', 
        color: '#F4F7FA', 
        zIndex: -1, 
        bottom: '-50px', 
        left: '-50px', 
        opacity: 0.5,
        userSelect: 'none'
      }}>
        BEYOND
      </div>
    </section>
  );
};

export default ComparisonMatrix;