// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const ProgramOutcomes = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   return (
//     <section className="relative py-24 bg-slate-900 overflow-hidden font-sans">
      
//       {/* Background Ambience (Subtle Glows) */}
//       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

//       <div className="container mx-auto px-6 max-w-7xl">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
//           {/* LEFT COLUMN: Image + Target Audience Overlay */}
//           {/* <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
//           > */}
//             {/* Main Image */}
//             {/* <img 
//               src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770&auto=format&fit=crop" 
//               alt="Students collaborating" 
//               className="w-full h-full object-cover opacity-90 rounded-2xl transition-transform duration-700 group-hover:scale-105"
//             /> */}
            
//             {/* Gradient Overlay for Depth */}
//             {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" /> */}

//             {/* Target Audience Card - FIXED VISIBILITY */}

//             {/* <div className="absolute bottom-6 left-6 right-6 ">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 // Changed background to dark slate so white text pops
//                 className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl "
//               >
//                 <div className="flex items-center gap-3 mb-2 p-2">
//                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">🎯</span>
//                   <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase ">
//                     Target Audience
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-white p-2">
//                   Middle & High Schoolers
//                 </h3>
//                 <p className="text-gray-400 text-sm mt-1 p-2">
//                   Ambitious students ready to build real-world experience.
//                 </p>
//               </motion.div>
//             </div> */}


//           {/* </motion.div> */}


// <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
//           >
//             {/* Main Image */}
//             <img 
//               src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770&auto=format&fit=crop" 
//               alt="Students collaborating" 
//               className="w-full h-full object-cover opacity-90 rounded-2xl transition-transform duration-700 group-hover:scale-105"
//             />
            
//             {/* Gradient Overlay for Depth */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

//             {/* Target Audience Card - FIXED PADDING */}
//             <div className="absolute bottom-6 left-6 right-6">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 // Added p-6 here for consistent spacing inside the card
//                 className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
//               >
//                 {/* Removed p-2 from children */}
//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">🎯</span>
//                   <span className="text-black text-xs font-bold tracking-widest uppercase">
//                     Target Audience
//                   </span>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   Middle & High Schoolers
//                 </h3>
                
//                 <p className="text-white text-sm">
//                   Ambitious students ready to build real-world experience.
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>



//           {/* RIGHT COLUMN: Content & Grid */}
//           <div className="flex flex-col justify-center h-full">
            
//             {/* Header Text */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-10 text-left"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
//                 The Ultimate <br/>
//                 <span className="text-emerald-400">Portfolio Booster.</span>
//               </h2>
//               <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
//                 Don't just learn. Build tangible assets for your college applications and future career.
//               </p>
//             </motion.div>

//             {/* Outcomes Grid */}
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6"
//             >
//               <OutcomeItem 
//                 icon="🏅" 
//                 title="NGO Certificate" 
//                 desc="Official partner certification."
//               />
//               <OutcomeItem 
//                 icon="🎓" 
//                 title="College Portfolio" 
//                 desc="Standout application narrative."
//               />
//               <OutcomeItem 
//                 icon="💻" 
//                 title="Live Platform" 
//                 desc="Website & fundraiser."
//               />
//               <OutcomeItem 
//                 icon="📊" 
//                 title="Pitch Deck" 
//                 desc="Professional slides for awards."
//               />
//               <OutcomeItem 
//                 icon="🚀" 
//                 title="Real Impact" 
//                 desc="Money raised & lives touched."
//               />
//               <OutcomeItem 
//                 icon="📰" 
//                 title="Media Feature" 
//                 desc="Publication in youth media."
//               />
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Dark Mode Card Component - Improved Spacing
// const OutcomeItem = ({ icon, title, desc }) => (
//   <motion.div 
//     variants={{
//       hidden: { opacity: 0, y: 15 },
//       visible: { opacity: 1, y: 0 }
//     }}
//     whileHover={{ y: -5, scale: 1.01 }}
//     className="relative flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-lg transition-all duration-300 group overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
//   >
    
//     {/* Subtle emerald glow effect in background on hover */}
//     <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//     {/* Icon Box - Designed to look like a 'gem' or button */}
//     <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300">
//       {/* Glossy highlight on icon box */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
//       <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
//         {icon}
//       </span>
//     </div>
    
//     {/* Text */}
//     <div className="flex flex-col relative z-10">
//       <h4 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors duration-300">
//         {title}
//       </h4>
//       <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
//         {desc}
//       </p>
//     </div>
//   </motion.div>
// );

// export default ProgramOutcomes;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const ProgramOutcomes = () => {
//   return (
//     // Changed bg-slate-950 to bg-gray-900/black to ensure dark mode works on all tailwind versions
//     <section className="relative py-20 bg-gray-900 overflow-hidden font-sans text-white">
      
//       {/* --- BACKGROUND GLOWS (Fixed Z-Index) --- */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* --- LEFT COLUMN: Image & Float Card --- */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative mx-auto w-full max-w-lg lg:max-w-full"
//           >
//             {/* Main Image Container */}
//             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
//                {/* Gradient Overlay to ensure text readability if needed */}
//               <div className="absolute inset-0 bg-black/20 z-10" />
//               <img 
//                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770&auto=format&fit=crop" 
//                 alt="Students collaborating" 
//                 className="w-full h-[400px] lg:h-[550px] object-cover"
//               />
//             </div>

//             {/* Floating "Target Audience" Card - Fixed Positioning */}
//             {/* Moved slightly overlapping the bottom to look deliberate */}
//             <motion.div 
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="absolute -bottom-6 left-6 right-6 lg:-right-6 lg:left-auto lg:w-80 z-20"
//             >
//               <div className="bg-gray-800/90 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-xl">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
//                     🎯
//                   </div>
//                   <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
//                     Who is this for?
//                   </span>
//                 </div>
//                 <h3 className="text-lg font-bold text-white">
//                   Middle & High Schoolers
//                 </h3>
//                 <p className="text-gray-400 text-sm mt-1">
//                   Ambitious students ready to build real-world experience.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>


//           {/* --- RIGHT COLUMN: Content --- */}
//           <div className="flex flex-col justify-center mt-12 lg:mt-0">
            
//             {/* Header */}
//             <div className="mb-10">
//               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
//                 The Ultimate <br/>
//                 <span className="text-emerald-400">Portfolio Booster.</span>
//               </h2>
//               <p className="text-gray-400 text-lg max-w-lg">
//                 Don't just learn theory. Build tangible assets, gain recognition, and craft a narrative for your future career.
//               </p>
//             </div>

//             {/* Grid of Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <OutcomeItem 
//                 icon="🏅" 
//                 title="NGO Certificate" 
//                 desc="Official partner certification."
//               />
//               <OutcomeItem 
//                 icon="🎓" 
//                 title="College Portfolio" 
//                 desc="Standout application narrative."
//               />
//               <OutcomeItem 
//                 icon="💻" 
//                 title="Live Platform" 
//                 desc="Real website & fundraiser."
//               />
//               <OutcomeItem 
//                 icon="📊" 
//                 title="Pitch Deck" 
//                 desc="Professional slides for awards."
//               />
//               <OutcomeItem 
//                 icon="🚀" 
//                 title="Real Impact" 
//                 desc="Money raised & lives touched."
//               />
//               <OutcomeItem 
//                 icon="📰" 
//                 title="Media Feature" 
//                 desc="Publication in youth media."
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Subcomponent: Outcome Card ---
// const OutcomeItem = ({ icon, title, desc }) => (
//   <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
//     <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
//       {icon}
//     </div>
//     <div>
//       <h4 className="text-white font-semibold text-base mb-1 group-hover:text-emerald-300 transition-colors">
//         {title}
//       </h4>
//       <p className="text-gray-400 text-sm leading-snug group-hover:text-gray-300">
//         {desc}
//       </p>
//     </div>
//   </div>
// );

// export default ProgramOutcomes;







'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProgramOutcomes = () => {
  // Animation Stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    // FORCE DARK BACKGROUND: Using inline style to guarantee the color loads
    <section 
      className="relative py-24 overflow-hidden font-sans text-white"
      style={{ backgroundColor: '#0f172a' }} // Hardcoded Dark Slate
    >
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[450px] lg:h-[600px]">
              <div className="absolute inset-0 bg-black/20 z-10" /> {/* Dimmer */}
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770&auto=format&fit=crop" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating "Target Audience" Card - Fixed Position & Visibility */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 left-6 right-6 lg:-right-10 lg:left-auto lg:bottom-12 lg:w-80 z-20"
            >
              <div 
                className="backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl"
                style={{ backgroundColor: 'rgba(30, 41, 59, 0.9)' }} // Force dark semi-transparent bg
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 text-lg">🎯</span>
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                    Who is this for?
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Middle & High Schoolers
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Ambitious students ready to build real-world experience before college.
                </p>
              </div>
            </motion.div>
          </motion.div>


          {/* --- RIGHT COLUMN: Content --- */}
          <div className="flex flex-col justify-center">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 mx-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Ultimate <br/>
                <span className="text-emerald-400">Portfolio Booster.</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Don't just learn theory. Build tangible assets, gain recognition, and craft a narrative for your future career.
              </p>
            </motion.div>

            {/* Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4"
            >
              <OutcomeItem icon="🏅" title="NGO Certificate" desc="Official partner certification." />
              <OutcomeItem icon="🎓" title="College Portfolio" desc="Standout application narrative." />
              <OutcomeItem icon="💻" title="Live Platform" desc="Real website & fundraiser." />
              <OutcomeItem icon="📊" title="Pitch Deck" desc="Professional slides for awards." />
              <OutcomeItem icon="🚀" title="Real Impact" desc="Money raised & lives touched." />
              <OutcomeItem icon="📰" title="Media Feature" desc="Publication in youth media." />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Fixed Dark Card ---
const OutcomeItem = ({ icon, title, desc }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5 }}
    className="flex items-start gap-4 p-5 rounded-xl border border-white/5 transition-all duration-300 hover:border-emerald-500/30 shadow-lg"
    style={{ backgroundColor: '#1e293b' }} // Hardcoded Slate-800 equivalent
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-xl m-1 bg-black/20 border border-white/5 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold text-sm mb-1">
        {title}
      </h4>
      <p className="text-gray-400 text-xs leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default ProgramOutcomes;