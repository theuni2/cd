// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   MapPin, BookOpen, Users, Zap, Layout, 
//   Video, TrendingUp, Trophy, Mic, CheckCircle 
// } from 'lucide-react';

// const ProgramTimelineSticky = () => {
//   return (
//     // SAFE MODE: Hardcoded Dark Green Background
//     <section 
//       className="relative py-24 px-6 font-sans overflow-hidden"
//       style={{ backgroundColor: '#022c22' }} 
//     >
//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* --- MAIN HEADER --- */}
//         <div className="text-center mb-24">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block px-3 py-1 rounded-full border mb-4"
//             style={{ 
//               borderColor: 'rgba(255,255,255,0.2)', 
//               color: '#a3e635' // Lime
//             }}
//           >
//             <span className="text-xs font-bold uppercase tracking-widest">The Syllabus</span>
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             A Structured Journey <br />
//             <span style={{ color: '#34d399' }}>To Tangible Impact.</span>
//           </h2>
//         </div>

//         {/* --- STICKY SECTIONS --- */}
//         <div className="space-y-0 md:space-y-24">
          
//           {/* === PHASE 1 === */}
//           <StickySection 
//             phase="01"
//             title="Core Foundation"
//             subtitle="Weeks 1–3"
//             desc="Build the blueprint, lock the mission, and secure partners."
//             color="#bef264" // Lime
//           >
//             <TimelineCard 
//               week="Week 1"
//               title="Problem Spike & Mission"
//               desc="Identify geography (3-5 schools), craft mission ('Reduce plastic in 3 months'), & launch basic site."
//               icon={<MapPin size={20} />}
//               color="#bef264"
//             />
//             <TimelineCard 
//               week="Week 2"
//               title="Curriculum Design"
//               desc="Build 'See → Do → Reflect' workshop decks. Create teacher manuals & prepare 1-hour pilot."
//               icon={<BookOpen size={20} />}
//               color="#bef264"
//             />
//             <TimelineCard 
//               week="Week 3"
//               title="Partnerships & Blueprint"
//               desc="Pitch 2-3 NGOs/Schools. Draft Scalability Playbook & secure 1-2 MOUs."
//               icon={<Users size={20} />}
//               color="#bef264"
//             />
//           </StickySection>


//           {/* === PHASE 2 === */}
//           <StickySection 
//             phase="02"
//             title="Execution Power-Up"
//             subtitle="Weeks 4–7"
//             desc="Go live, gather proof, and build your digital content engine."
//             color="#34d399" // Emerald
//           >
//             <TimelineCard 
//               week="Week 4"
//               title="Workshop Blitz"
//               desc="Run Pilot Workshop (20 students). Collect pre/post surveys & testimonials. Update website."
//               icon={<Zap size={20} />}
//               color="#34d399"
//             />
//             <TimelineCard 
//               week="Week 5"
//               title="Content Engine Launch"
//               desc="Full Website Launch. Start Social Media (2 posts/week). Optimize LinkedIn profile."
//               icon={<Layout size={20} />}
//               color="#34d399"
//             />
//             <TimelineCard 
//               week="Week 6"
//               title="Scale & Storytelling"
//               desc="Expand to 2nd School. Film 2 Interviews (NGO Head, Principal). Publish on YouTube/IG."
//               icon={<Video size={20} />}
//               color="#34d399"
//             />
//             <TimelineCard 
//               week="Week 7"
//               title="Fundraising & PR Push"
//               desc="Launch Crowdfunding (Goal: ₹50K). Define in-kind needs. Pitch local press."
//               icon={<TrendingUp size={20} />}
//               color="#34d399"
//             />
//           </StickySection>


//           {/* === PHASE 3 === */}
//           <StickySection 
//             phase="03"
//             title="Awards & Glory"
//             subtitle="Weeks 8–12"
//             desc="Quantify impact, certify results, and apply for recognition."
//             color="#60a5fa" // Blue
//           >
//             <TimelineCard 
//               week="Week 8"
//               title="Impact Dashboard"
//               desc="Quantify metrics (Waste diverted, Funds). Create Project Deck mapped to Diana Award/Chegg."
//               icon={<Trophy size={20} />}
//               color="#60a5fa"
//             />
//             <TimelineCard 
//               week="Week 9"
//               title="Showcase Event"
//               desc="Host Launch Event (Online/Hybrid). Present Keynote on roadmap & Year 2 plan."
//               icon={<Mic size={20} />}
//               color="#60a5fa"
//             />
//             <TimelineCard 
//               week="Weeks 10-12"
//               title="Buffer & Continuity"
//               desc="Finalize award applications. Tighten playbook for local handoff. Buffer for exams."
//               icon={<CheckCircle size={20} />}
//               color="#60a5fa"
//             />
//           </StickySection>

//         </div>
//       </div>
//     </section>
//   );
// };


// // --- SUB-COMPONENTS ---

// // The Layout Wrapper for each Phase
// const StickySection = ({ phase, title, subtitle, desc, color, children }) => (
//   <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-0">
    
//     {/* LEFT COLUMN: STICKY HEADER */}
//     <div className="md:col-span-4 lg:col-span-5 relative">
//       <div className="md:sticky md:top-32 pb-8 md:pb-20">
//         <span className="text-6xl md:text-8xl font-black opacity-10 absolute -top-8 -left-4 md:-left-8 select-none text-white">
//           {phase}
//         </span>
//         <div className="relative z-10">
//           <span className="text-sm font-bold uppercase tracking-widest mb-2 block" style={{ color: color }}>
//             {subtitle}
//           </span>
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             {title}
//           </h3>
//           <p className="text-gray-400 text-base md:text-lg leading-relaxed">
//             {desc}
//           </p>
          
//           {/* Decorative line under title */}
//           <div className="w-12 h-1 mt-6 rounded-full" style={{ backgroundColor: color }} />
//         </div>
//       </div>
//     </div>

//     {/* RIGHT COLUMN: SCROLLABLE CARDS */}
//     <div className="md:col-span-8 lg:col-span-7 space-y-4">
//       {children}
//     </div>
//   </div>
// );


// // The Individual Week Card
// const TimelineCard = ({ week, title, desc, icon, color }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
//     style={{ 
//       backgroundColor: 'rgba(0,0,0,0.2)', 
//       borderColor: 'rgba(255,255,255,0.08)' 
//     }}
//   >
//     <div className="flex flex-col sm:flex-row gap-5">
      
//       {/* Icon */}
//       <div className="flex-shrink-0">
//         <div className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg"
//              style={{ 
//                backgroundColor: `${color}10`, // 10% opacity hex
//                borderColor: `${color}30`,
//                color: color
//              }}>
//           {icon}
//         </div>
//       </div>

//       {/* Content */}
//       <div>
//         <div className="flex items-center gap-3 mb-1">
//           <span className="text-xs font-bold uppercase tracking-wider opacity-80" style={{ color: color }}>
//             {week}
//           </span>
//         </div>
//         <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
//           {title}
//         </h4>
//         <p className="text-sm text-gray-400 leading-relaxed">
//           {desc}
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// export default ProgramTimelineSticky;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   MapPin, BookOpen, Users, Zap, Layout, 
//   Video, TrendingUp, Trophy, Mic, CheckCircle 
// } from 'lucide-react';

// const ProgramTimelineSticky = () => {
//   return (
//     // SAFE MODE: Hardcoded Dark Green Background
//     <section 
//       className="relative py-24 px-6 font-sans overflow-hidden"
//       style={{ backgroundColor: '#022c22' }} 
//     >
//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* --- MAIN HEADER --- */}
//         <div className="text-center mb-24">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block px-3 py-1 rounded-full border mb-4"
//             style={{ 
//               borderColor: 'rgba(255,255,255,0.2)', 
//               color: '#a3e635' // Lime
//             }}
//           >
//             <span className="text-xs font-bold uppercase tracking-widest">The Syllabus</span>
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             A Structured Journey <br />
//             <span style={{ color: '#34d399' }}>To Tangible Impact.</span>
//           </h2>
//         </div>

//         {/* --- STICKY SECTIONS --- */}
//         <div className="space-y-0 md:space-y-24">
          
//           {/* === PHASE 1 === */}
//           <StickySection 
//             phase="01"
//             title="Core Foundation"
//             subtitle="Weeks 1–3"
//             desc="Build the blueprint, lock the mission, and secure partners."
//             color="#bef264" // Lime
//           >
//             <TimelineCard 
//               week="Week 1"
//               title="Problem Spike & Mission"
//               desc="Identify geography (3-5 schools), craft mission ('Reduce plastic in 3 months'), & launch basic site."
//               icon={<MapPin size={20} />}
//               color="#bef264"
//             />
//             <TimelineCard 
//               week="Week 2"
//               title="Curriculum Design"
//               desc="Build 'See → Do → Reflect' workshop decks. Create teacher manuals & prepare 1-hour pilot."
//               icon={<BookOpen size={20} />}
//               color="#bef264"
//             />
//             <TimelineCard 
//               week="Week 3"
//               title="Partnerships & Blueprint"
//               desc="Pitch 2-3 NGOs/Schools. Draft Scalability Playbook & secure 1-2 MOUs."
//               icon={<Users size={20} />}
//               color="#bef264"
//             />
//           </StickySection>


//           {/* === PHASE 2 === */}
//           <StickySection 
//             phase="02"
//             title="Execution Power-Up"
//             subtitle="Weeks 4–7"
//             desc="Go live, gather proof, and build your digital content engine."
//             color="#34d399" // Emerald
//           >
//             <TimelineCard 
//               week="Week 4"
//               title="Workshop Blitz"
//               desc="Run Pilot Workshop (20 students). Collect pre/post surveys & testimonials. Update website."
//               icon={<Zap size={20} />}
//               color="#34d399"
//             />
//             <TimelineCard 
//               week="Week 5"
//               title="Content Engine Launch"
//               desc="Full Website Launch. Start Social Media (2 posts/week). Optimize LinkedIn profile."
//               icon={<Layout size={20} />}
//               color="#34d399"
//             />
//             <TimelineCard 
//               week="Week 6"
//               title="Scale & Storytelling"
//               desc="Expand to 2nd School. Film 2 Interviews (NGO Head, Principal). Publish on YouTube/IG."
//               icon={<Video size={20} />}
//               color="#34d399"
//             />
//             <TimelineCard 
//               week="Week 7"
//               title="Fundraising & PR Push"
//               desc="Launch Crowdfunding (Goal: ₹50K). Define in-kind needs. Pitch local press."
//               icon={<TrendingUp size={20} />}
//               color="#34d399"
//             />
//           </StickySection>


//           {/* === PHASE 3 === */}
//           <StickySection 
//             phase="03"
//             title="Awards & Glory"
//             subtitle="Weeks 8–12"
//             desc="Quantify impact, certify results, and apply for recognition."
//             color="#60a5fa" // Blue
//           >
//             <TimelineCard 
//               week="Week 8"
//               title="Impact Dashboard"
//               desc="Quantify metrics (Waste diverted, Funds). Create Project Deck mapped to Diana Award/Chegg."
//               icon={<Trophy size={20} />}
//               color="#60a5fa"
//             />
//             <TimelineCard 
//               week="Week 9"
//               title="Showcase Event"
//               desc="Host Launch Event (Online/Hybrid). Present Keynote on roadmap & Year 2 plan."
//               icon={<Mic size={20} />}
//               color="#60a5fa"
//             />
//             <TimelineCard 
//               week="Weeks 10-12"
//               title="Buffer & Continuity"
//               desc="Finalize award applications. Tighten playbook for local handoff. Buffer for exams."
//               icon={<CheckCircle size={20} />}
//               color="#60a5fa"
//             />
//           </StickySection>

//         </div>
//       </div>
//     </section>
//   );
// };


// // --- SUB-COMPONENTS ---

// // The Layout Wrapper for each Phase
// const StickySection = ({ phase, title, subtitle, desc, color, children }) => (
//   <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-0">
    
//     {/* LEFT COLUMN: STICKY HEADER */}
//     <div className="md:col-span-4 lg:col-span-5 relative">
//       <div className="md:sticky md:top-32 pb-8 md:pb-20">
//         <span className="text-6xl md:text-8xl font-black opacity-10 absolute -top-8 -left-4 md:-left-8 select-none text-white">
//           {phase}
//         </span>
//         <div className="relative z-10">
//           <span className="text-sm font-bold uppercase tracking-widest mb-2 block" style={{ color: color }}>
//             {subtitle}
//           </span>
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             {title}
//           </h3>
//           <p className="text-gray-400 text-base md:text-lg leading-relaxed">
//             {desc}
//           </p>
          
//           {/* Decorative line under title */}
//           <div className="w-12 h-1 mt-6 rounded-full" style={{ backgroundColor: color }} />
//         </div>
//       </div>
//     </div>

//     {/* RIGHT COLUMN: SCROLLABLE CARDS */}
//     <div className="md:col-span-8 lg:col-span-7 space-y-4">
//       {children}
//     </div>
//   </div>
// );


// // The Individual Week Card
// const TimelineCard = ({ week, title, desc, icon, color }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
//     style={{ 
//       backgroundColor: 'rgba(0,0,0,0.2)', 
//       borderColor: 'rgba(255,255,255,0.08)' 
//     }}
//   >
//     <div className="flex flex-col sm:flex-row gap-5">
      
//       {/* Icon */}
//       <div className="flex-shrink-0">
//         <div className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg"
//              style={{ 
//                backgroundColor: `${color}10`, // 10% opacity hex
//                borderColor: `${color}30`,
//                color: color
//              }}>
//           {icon}
//         </div>
//       </div>

//       {/* Content */}
//       <div>
//         <div className="flex items-center gap-3 mb-1">
//           <span className="text-xs font-bold uppercase tracking-wider opacity-80" style={{ color: color }}>
//             {week}
//           </span>
//         </div>
//         <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
//           {title}
//         </h4>
//         <p className="text-sm text-gray-400 leading-relaxed">
//           {desc}
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// export default ProgramTimelineSticky;


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  MapPin, 
  BookOpen, 
  Users, 
  Zap, 
  Layout, 
  Video, 
  TrendingUp, 
  Trophy, 
  Mic 
} from 'lucide-react';

const ProgramSyllabus = () => {
  // State to track which phase is open. Default to 0 (Phase 1).
  const [openPhase, setOpenPhase] = useState(0);

  const togglePhase = (index) => {
    // If clicking the already open phase, close it (set to null), otherwise open the new one
    setOpenPhase(openPhase === index ? null : index);
  };

  const phases = [
    {
      title: "Phase 1: Core Foundation",
      subtitle: "Weeks 1–3 • The Blueprint",
      color: "#bef264", // Lime
      weeks: [
        { week: "Week 1", title: "Problem Spike & Mission", icon: <MapPin size={18} />, desc: "Identify geography (3-5 schools), craft mission, & launch basic site." },
        { week: "Week 2", title: "Curriculum Design", icon: <BookOpen size={18} />, desc: "Build 'See → Do → Reflect' decks & teacher manuals." },
        { week: "Week 3", title: "Partnerships", icon: <Users size={18} />, desc: "Pitch NGOs/Schools. Secure 1-2 MOUs." }
      ]
    },
    {
      title: "Phase 2: Execution Power-Up",
      subtitle: "Weeks 4–7 • Go Live",
      color: "#34d399", // Emerald
      weeks: [
        { week: "Week 4", title: "Workshop Blitz", icon: <Zap size={18} />, desc: "Run Pilot Workshop. Collect surveys & testimonials." },
        { week: "Week 5", title: "Content Launch", icon: <Layout size={18} />, desc: "Full Website Launch. Start Social Media & LinkedIn." },
        { week: "Week 6", title: "Scale & Storytelling", icon: <Video size={18} />, desc: "Expand to 2nd School. Film interviews." },
        { week: "Week 7", title: "Fundraising Push", icon: <TrendingUp size={18} />, desc: "Launch Crowdfunding (Goal: ₹50K). Pitch local press." }
      ]
    },
    {
      title: "Phase 3: Awards & Glory",
      subtitle: "Weeks 8–12 • Quantify & Certify",
      color: "#60a5fa", // Blue
      weeks: [
        { week: "Week 8", title: "Impact Dashboard", icon: <Trophy size={18} />, desc: "Quantify metrics. Map project to Diana Award." },
        { week: "Week 9", title: "Showcase Event", icon: <Mic size={18} />, desc: "Host Launch Event. Present Keynote & Roadmap." },
        { week: "Weeks 10-12", title: "Buffer & Handoff", icon: <Layout size={18} />, desc: "Finalize awards. Tighten playbook for handoff." }
      ]
    }
  ];

  return (
    // SAFE MODE: Hardcoded Dark Green Background
    <section 
      className="relative py-24 px-6 font-sans overflow-hidden"
      style={{ backgroundColor: '#022c22' }} 
    >
      <div className="container mx-auto max-w-3xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              borderColor: 'rgba(255,255,255,0.1)',
              color: '#a3e635'
            }}
          >
            <span className="text-xs font-bold uppercase tracking-widest">Curriculum</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            12-Week Roadmap
          </motion.h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A structured sprint from ideation to impact. Click a phase to explore the weekly breakdown.
          </p>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{ 
                // Dynamic styles based on open/closed state
                backgroundColor: openPhase === index ? 'rgba(0,0,0,0.2)' : 'transparent',
                borderColor: openPhase === index ? phase.color : 'rgba(255,255,255,0.1)'
              }}
            >
              {/* Expandable Header */}
              <button
                onClick={() => togglePhase(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-5">
                  {/* Number Badge */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border shrink-0"
                    style={{ 
                      backgroundColor: openPhase === index ? phase.color : 'transparent', 
                      borderColor: phase.color,
                      color: openPhase === index ? '#022c22' : phase.color,
                      boxShadow: openPhase === index ? `0 0 20px ${phase.color}60` : 'none'
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Titles */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm font-mono mt-1 opacity-70" style={{ color: openPhase === index ? phase.color : '#9ca3af' }}>
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div 
                  className="transition-transform duration-300 text-white/50 group-hover:text-white"
                  style={{ transform: openPhase === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown size={28} />
                </div>
              </button>

              {/* The Weeks Content (Animated) */}
              <AnimatePresence>
                {openPhase === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                      <div className="grid gap-3 pt-4">
                        {phase.weeks.map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                          >
                             {/* Small Icon */}
                             <div className="mt-1 flex-shrink-0 opacity-80" style={{ color: phase.color }}>
                               {item.icon}
                             </div>
                             
                             {/* Details */}
                             <div>
                               <div className="flex items-center gap-2 mb-1">
                                 <span className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: phase.color }}>
                                   {item.week}
                                 </span>
                                 <span className="w-1 h-1 rounded-full bg-white/20" />
                                 <h4 className="text-white font-bold text-sm">
                                   {item.title}
                                 </h4>
                               </div>
                               <p className="text-sm text-gray-400 leading-relaxed">
                                 {item.desc}
                               </p>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramSyllabus;