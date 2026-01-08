// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const WhyClimateAction = () => {
//   return (
//     // SAFE MODE: Hardcoded Dark Green Background matching the Hero
//     <section 
//       className="relative py-24 px-6 overflow-hidden"
//       style={{ backgroundColor: '#022c22' }} // Deep Forest Green
//     >
      
//       {/* Background Texture (Subtle Noise) */}
//       <div className="absolute inset-0 opacity-20" 
//            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
//       />

//       <div className="container mx-auto max-w-7xl relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold mb-6 text-white"
//           >
//             From Anxiety to <br />
//             <span 
//               className="text-transparent bg-clip-text"
//               style={{ backgroundImage: 'linear-gradient(to right, #a3e635, #34d399)' }} // Lime to Emerald
//             >
//               Measurable Action.
//             </span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-lg leading-relaxed"
//             style={{ color: '#d1d5db' }} // Gray-300
//           >
//             Climate change is the defining challenge of our generation. We give you the structured playbook to move beyond debate and start building solutions.
//           </motion.p>
//         </div>

//         {/* --- VISUAL BENTO GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {/* CARD 1: The "Why" (Large Image Card) */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group shadow-2xl"
//           >
//           <img 
//               src="http://googleusercontent.com/image_collection/image_retrieval/9953777282027306162_0" 
//               alt="Youth planting trees together" 
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,44,34,0.9), transparent)' }} />
            
//             <div className="absolute bottom-0 left-0 p-8">
//               <div className="flex items-center gap-2 mb-3">
//                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black" style={{ backgroundColor: '#a3e635' }}>
//                    Real Impact
//                  </span>
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-2">Local Interventions, Global Goals.</h3>
//               <p className="text-sm max-w-md" style={{ color: '#e5e7eb' }}>
//                 Ground your project in real beneficiaries—schools, neighborhoods, and NGOs. Contribute directly to <span className="font-bold text-white">SDG 13 (Climate Action)</span>.
//               </p>
//             </div>
//           </motion.div>

//           {/* CARD 2: The 10-Week Model (Dark Card) */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="relative h-[400px] rounded-3xl p-8 flex flex-col justify-between border shadow-2xl"
//             style={{ 
//               backgroundColor: 'rgba(6, 78, 59, 0.3)', // Dark Emerald transparent
//               borderColor: 'rgba(163, 230, 53, 0.2)', // Lime border
//               backdropFilter: 'blur(10px)'
//             }}
//           >
//             <div>
//               <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-6" style={{ backgroundColor: 'rgba(163, 230, 53, 0.2)' }}>
//                 ⚡
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4">The 10-Week Model</h3>
//               <ul className="space-y-4">
//                 {['Learn the Basics', 'Build Partnerships', 'Launch Campaign', 'Ensure Sustainability'].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#d1d5db' }}>
//                     <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#a3e635' }} />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Decorative Line */}
//             <div className="w-full h-1 rounded-full mt-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
//               <motion.div 
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '100%' }}
//                 transition={{ duration: 1.5, delay: 0.5 }}
//                 className="h-full rounded-full"
//                 style={{ backgroundColor: '#a3e635' }}
//               />
//             </div>
//           </motion.div>

//           {/* CARD 3: Sustainability (Dark Card) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="relative h-[300px] rounded-3xl p-8 border shadow-2xl"
//             style={{ 
//               backgroundColor: 'rgba(255, 255, 255, 0.03)', 
//               borderColor: 'rgba(255, 255, 255, 0.1)',
//             }}
//           >
//              <div className="absolute top-0 right-0 p-8 opacity-20 text-6xl">
//                ∞
//              </div>
//              <h3 className="text-xl font-bold text-white mb-3">Built to Last</h3>
//              <p className="text-sm leading-relaxed mb-6" style={{ color: '#9ca3af' }}>
//                This isn't a one-off token activity. We provide teacher manuals and NGO playbooks to ensure your initiative continues growing beyond the initial term.
//              </p>
//              <div className="flex gap-2">
//                 {/* Visual tags */}
//                 <span className="text-xs px-2 py-1 rounded border border-white/20 text-white/60">Multi-year</span>
//                 <span className="text-xs px-2 py-1 rounded border border-white/20 text-white/60">Scalable</span>
//              </div>
//           </motion.div>

//           {/* CARD 4: Image Card (Visual Relief) */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="md:col-span-2 relative h-[300px] rounded-3xl overflow-hidden group shadow-2xl"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop" 
//               alt="Nature close up" 
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
             
//              <div className="absolute bottom-8 right-8 text-right">
//                 <h3 className="text-3xl md:text-5xl font-bold text-white opacity-90">SDG 13</h3>
//                 <p className="text-white/80 text-sm tracking-widest uppercase mt-1">Climate Action</p>
//              </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyClimateAction;



'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhyClimateAction = () => {
  return (
    // SAFE MODE: Hardcoded Dark Green Background matching the Hero
    <section 
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: '#022c22' }} // Deep Forest Green
    >
      
      {/* Background Texture (Subtle Noise) */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            From Anxiety to <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #a3e635, #34d399)' }} // Lime to Emerald
            >
              Measurable Action.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
            style={{ color: '#d1d5db' }} // Gray-300
          >
            Climate change is the defining challenge of our generation. We give you the structured playbook to move beyond debate and start building solutions.
          </motion.p>
        </div>

        {/* --- VISUAL BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1: The "Why" (Large Image Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group shadow-2xl"
          >
            {/* UPDATED IMAGE HERE */}
            <img 
              src="https://media.istockphoto.com/id/1337297891/photo/latino-brothers-preparing-the-plant-to-plant-it-in-their-pot.webp?a=1&b=1&s=612x612&w=0&k=20&c=lIY5L76CNRfR9xSlvDYev2HuWln2q6iwlyo8M5ke6UI=" 
              alt="Students planting trees outdoors" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,44,34,0.9), transparent)' }} />
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                 <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black" style={{ backgroundColor: '#a3e635' }}>
                   Real Impact
                 </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Local Interventions, Global Goals.</h3>
              <p className="text-sm max-w-md" style={{ color: '#e5e7eb' }}>
                Ground your project in real beneficiaries—schools, neighborhoods, and NGOs. Contribute directly to <span className="font-bold text-white">SDG 13 (Climate Action)</span>.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: The 10-Week Model (Dark Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] rounded-3xl p-8 flex flex-col justify-between border shadow-2xl"
            style={{ 
              backgroundColor: 'rgba(6, 78, 59, 0.3)', // Dark Emerald transparent
              borderColor: 'rgba(163, 230, 53, 0.2)', // Lime border
              backdropFilter: 'blur(10px)'
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-6" style={{ backgroundColor: 'rgba(163, 230, 53, 0.2)' }}>
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The 10-Week Model</h3>
              <ul className="space-y-4">
                {['Learn the Basics', 'Build Partnerships', 'Launch Campaign', 'Ensure Sustainability'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#d1d5db' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#a3e635' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Decorative Line */}
            <div className="w-full h-1 rounded-full mt-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full rounded-full"
                style={{ backgroundColor: '#a3e635' }}
              />
            </div>
          </motion.div>

          {/* CARD 3: Sustainability (Dark Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative h-[300px] rounded-3xl p-8 border shadow-2xl"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.03)', 
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
             <div className="absolute top-0 right-0 p-8 opacity-20 text-6xl">
               ∞
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Built to Last</h3>
             <p className="text-sm leading-relaxed mb-6" style={{ color: '#9ca3af' }}>
               This isn't a one-off token activity. We provide teacher manuals and NGO playbooks to ensure your initiative continues growing beyond the initial term.
             </p>
             <div className="flex gap-2">
                {/* Visual tags */}
                <span className="text-xs px-2 py-1 rounded border border-white/20 text-white/60">Multi-year</span>
                <span className="text-xs px-2 py-1 rounded border border-white/20 text-white/60">Scalable</span>
             </div>
          </motion.div>

          {/* CARD 4: Image Card (Visual Relief) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 relative h-[300px] rounded-3xl overflow-hidden group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop" 
              alt="Nature close up" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
             
             <div className="absolute bottom-8 right-8 text-right">
                <h3 className="text-3xl md:text-5xl font-bold text-white opacity-90">SDG 13</h3>
                <p className="text-white/80 text-sm tracking-widest uppercase mt-1">Climate Action</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyClimateAction;