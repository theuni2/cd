// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Users, 
//   Monitor, 
//   Smartphone, 
//   ShoppingBag, 
//   PenTool, 
//   Video, 
//   Globe, 
//   BookOpen, 
//   Cpu,
//   Layers
// } from 'lucide-react';

// const StartupIdeas = () => {
//   const [activeTab, setActiveTab] = useState('service'); // 'service' or 'product'

//   const serviceIdeas = [
//     {
//       title: "Exam Readiness Studio",
//       desc: "Small-group paid workshops for middle schoolers on note-making, time management, and exam strategy.",
//       monetization: "Per-student fee per cohort",
//       ai: "Generate practice questions, schedules, and flashcards.",
//       icon: <BookOpen size={24} />
//     },
//     {
//       title: "Social Media Lab",
//       desc: "Teens handle Instagram/short video content for local businesses (cafés, salons) that lack time.",
//       monetization: "Monthly retainer per client",
//       ai: "Draft captions, hashtags, and post ideas.",
//       icon: <Smartphone size={24} />
//     },
//     {
//       title: "Youth Tutoring Collective",
//       desc: "Subject or skill-based tutoring (Math, Coding, SAT/ACT, Spoken English). Online or Hybrid.",
//       monetization: "Hourly or package-based fees",
//       ai: "Create worksheets, simplify concepts, and generate quizzes.",
//       icon: <Users size={24} />
//     },
//     {
//       title: "Club-in-a-Box Service",
//       desc: "Help schools/housing societies set up plug-and-play clubs (Debate, Climate, Entrepreneurship).",
//       monetization: "Setup fee + facilitation fee",
//       ai: "Brainstorm activities, debate topics, and meeting agendas.",
//       icon: <Layers size={24} />
//     },
//     {
//       title: "Events Micro-Agency",
//       desc: "Design themed events for kids/teens (STEM day, Book clubs) in schools or communities.",
//       monetization: "Event fees or sponsorship",
//       ai: "Outline run sheets, write invites, and summarize feedback.",
//       icon: <Globe size={24} />
//     }
//   ];

//   const productIdeas = [
//     {
//       title: "Digital Study Guides",
//       desc: "Create exam-specific digital notes, planners, and Notion templates (JEE, NEET, IB).",
//       monetization: "Direct digital sales (Gumroad)",
//       ai: "Expand syllabi into structured notes and question banks.",
//       icon: <Monitor size={24} />
//     },
//     {
//       title: "Niche POD Merch",
//       desc: "Design fandom or cause-based merchandise (t-shirts, bags) without holding inventory.",
//       monetization: "Margin on sales (Print-on-Demand)",
//       ai: "Generate slogans, descriptions, and visual prompts.",
//       icon: <ShoppingBag size={24} />
//     },
//     {
//       title: "Online Micro-Academy",
//       desc: "A niche 'academy' (e.g., MUN prep, Climate Literacy) with a structured 4-8 week curriculum.",
//       monetization: "Cohort fee + mentoring upsell",
//       ai: "Draft lesson outlines, case studies, and role-play scenarios.",
//       icon: <Video size={24} />
//     },
//     {
//       title: "Teen Creator Studio",
//       desc: "Sell ready-made content packs: Canva templates for school councils, clubs, or creators.",
//       monetization: "Low-ticket digital products",
//       ai: "Generate post ideas, headlines, and CTA text.",
//       icon: <PenTool size={24} />
//     },
//     {
//       title: "Social Impact Platform",
//       desc: "A simple directory/platform matching volunteers to NGOs and school projects.",
//       monetization: "Partnership packages (Freemium)",
//       ai: "Summarize NGO profiles, draft matching criteria & emails.",
//       icon: <Globe size={24} />
//     }
//   ];

//   return (
//     // SAFE MODE: Hardcoded Midnight Slate Background
//     <section 
//       className="relative py-24 px-6 font-sans overflow-hidden"
//       style={{ backgroundColor: '#020617' }} 
//     >
      
//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="text-center mb-16">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block px-3 py-1 rounded-full border mb-4"
//             style={{ 
//               backgroundColor: 'rgba(6, 182, 212, 0.1)', 
//               borderColor: 'rgba(6, 182, 212, 0.3)',
//               color: '#22d3ee'
//             }}
//           >
//             <span className="text-xs font-bold uppercase tracking-widest">Startup Menu</span>
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//           >
//             Pick Your <br />
//             <span style={{ color: '#22d3ee' }}>Business Model.</span>
//           </motion.h2>
//           <p className="text-gray-200 max-w-2xl mx-auto text-lg">
//             Don't have an idea yet? Choose one of these proven models and make it your own.
//           </p>
//         </div>

//         {/* --- TABS --- */}
//         <div className="flex justify-center mb-12">
//           <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 inline-flex">
//             <TabButton 
//               label="Service Startups" 
//               isActive={activeTab === 'service'} 
//               onClick={() => setActiveTab('service')}
//               color="#22d3ee" // Cyan
//             />
//             <TabButton 
//               label="Digital Products" 
//               isActive={activeTab === 'product'} 
//               onClick={() => setActiveTab('product')}
//               color="#c084fc" // Purple
//             />
//           </div>
//         </div>

//         {/* --- GRID CONTENT --- */}
//         <div className="min-h-[600px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {(activeTab === 'service' ? serviceIdeas : productIdeas).map((idea, index) => (
//                 <IdeaCard 
//                   key={index} 
//                   idea={idea} 
//                   color={activeTab === 'service' ? '#22d3ee' : '#c084fc'} 
//                   delay={index * 0.1}
//                 />
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// };

// // --- SUB-COMPONENTS ---

// const TabButton = ({ label, isActive, onClick, color }) => (
//   <button
//     onClick={onClick}
//     className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${isActive ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
//     style={{ color: isActive ? color : undefined }}
//   >
//     {label}
//   </button>
// );

// const IdeaCard = ({ idea, color, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay }}
//     className="group relative p-6 rounded-2xl border flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
//     style={{ 
//       backgroundColor: 'rgba(15, 23, 42, 0.4)', 
//       borderColor: 'rgba(255, 255, 255, 0.05)'
//     }}
//   >
//     {/* Hover Glow */}
//     <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
//          style={{ backgroundColor: color }} />

//     {/* Header */}
//     <div className="flex items-start justify-between mb-4">
//       <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-white shadow-lg" style={{ color: color }}>
//         {idea.icon}
//       </div>
//       <div className="px-3 py-1 rounded-full border bg-slate-900/50 text-[10px] uppercase font-bold tracking-wider"
//            style={{ borderColor: `${color}30`, color: color }}>
//         Model #{Math.floor(Math.random() * 90 + 10)}
//       </div>
//     </div>

//     {/* Content */}
//     <h3 className="text-xl font-bold text-white mb-2">{idea.title}</h3>
//     <p className="text-gray-200 text-sm leading-relaxed mb-6 flex-grow">
//       {idea.desc}
//     </p>

//     {/* Footer Details */}
//     <div className="pt-4 border-t border-slate-800 space-y-3">
//       {/* Monetization */}
//       <div className="flex items-start gap-2">
//         <div className="mt-1 shrink-0 text-white"><ShoppingBag size={14} /></div>
//         <div>
//           <span className="block text-[10px] uppercase font-bold text-slate-500">Monetization</span>
//           <span className="text-xs text-gray-200">{idea.monetization}</span>
//         </div>
//       </div>

//       {/* AI Usage */}
//       <div className="flex items-start gap-2">
//         <div className="mt-1 shrink-0 text-white"><Cpu size={14} /></div>
//         <div>
//           <span className="block text-[10px] uppercase font-bold text-slate-500">AI Power-Up</span>
//           <span className="text-xs text-gray-200">{idea.ai}</span>
//         </div>
//       </div>
//     </div>

//   </motion.div>
// );

// export default StartupIdeas;


// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Users, 
//   Monitor, 
//   Smartphone, 
//   ShoppingBag, 
//   PenTool, 
//   Video, 
//   Globe, 
//   BookOpen, 
//   Cpu,
//   Layers
// } from 'lucide-react';

// const StartupIdeas = () => {
//   const [activeTab, setActiveTab] = useState('service'); // 'service' or 'product'

//   const serviceIdeas = [
//     {
//       title: "Exam Readiness Studio",
//       desc: "Small-group paid workshops for middle schoolers on note-making, time management, and exam strategy.",
//       monetization: "Per-student fee per cohort",
//       ai: "Generate practice questions, schedules, and flashcards.",
//       icon: <BookOpen size={24} />
//     },
//     {
//       title: "Social Media Lab",
//       desc: "Teens handle Instagram/short video content for local businesses (cafés, salons) that lack time.",
//       monetization: "Monthly retainer per client",
//       ai: "Draft captions, hashtags, and post ideas.",
//       icon: <Smartphone size={24} />
//     },
//     {
//       title: "Youth Tutoring Collective",
//       desc: "Subject or skill-based tutoring (Math, Coding, SAT/ACT, Spoken English). Online or Hybrid.",
//       monetization: "Hourly or package-based fees",
//       ai: "Create worksheets, simplify concepts, and generate quizzes.",
//       icon: <Users size={24} />
//     },
//     {
//       title: "Club-in-a-Box Service",
//       desc: "Help schools/housing societies set up plug-and-play clubs (Debate, Climate, Entrepreneurship).",
//       monetization: "Setup fee + facilitation fee",
//       ai: "Brainstorm activities, debate topics, and meeting agendas.",
//       icon: <Layers size={24} />
//     },
//     {
//       title: "Events Micro-Agency",
//       desc: "Design themed events for kids/teens (STEM day, Book clubs) in schools or communities.",
//       monetization: "Event fees or sponsorship",
//       ai: "Outline run sheets, write invites, and summarize feedback.",
//       icon: <Globe size={24} />
//     }
//   ];

//   const productIdeas = [
//     {
//       title: "Digital Study Guides",
//       desc: "Create exam-specific digital notes, planners, and Notion templates (JEE, NEET, IB).",
//       monetization: "Direct digital sales (Gumroad)",
//       ai: "Expand syllabi into structured notes and question banks.",
//       icon: <Monitor size={24} />
//     },
//     {
//       title: "Niche POD Merch",
//       desc: "Design fandom or cause-based merchandise (t-shirts, bags) without holding inventory.",
//       monetization: "Margin on sales (Print-on-Demand)",
//       ai: "Generate slogans, descriptions, and visual prompts.",
//       icon: <ShoppingBag size={24} />
//     },
//     {
//       title: "Online Micro-Academy",
//       desc: "A niche 'academy' (e.g., MUN prep, Climate Literacy) with a structured 4-8 week curriculum.",
//       monetization: "Cohort fee + mentoring upsell",
//       ai: "Draft lesson outlines, case studies, and role-play scenarios.",
//       icon: <Video size={24} />
//     },
//     {
//       title: "Teen Creator Studio",
//       desc: "Sell ready-made content packs: Canva templates for school councils, clubs, or creators.",
//       monetization: "Low-ticket digital products",
//       ai: "Generate post ideas, headlines, and CTA text.",
//       icon: <PenTool size={24} />
//     },
//     {
//       title: "Social Impact Platform",
//       desc: "A simple directory/platform matching volunteers to NGOs and school projects.",
//       monetization: "Partnership packages (Freemium)",
//       ai: "Summarize NGO profiles, draft matching criteria & emails.",
//       icon: <Globe size={24} />
//     }
//   ];

//   return (
//     // SAFE MODE: Hardcoded Midnight Slate Background
//     <section 
//       className="relative py-24 px-6 font-sans overflow-hidden"
//       style={{ backgroundColor: '#020617' }} 
//     >
      
//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* --- HEADER --- */}
//         <div className="text-center mb-16">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block px-3 py-1 rounded-full border mb-4"
//             style={{ 
//               backgroundColor: 'rgba(6, 182, 212, 0.1)', 
//               borderColor: 'rgba(6, 182, 212, 0.3)',
//               color: '#22d3ee'
//             }}
//           >
//             <span className="text-xs font-bold uppercase tracking-widest">Startup Menu</span>
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold text-white mb-6"
//           >
//             Pick Your <br />
//             <span style={{ color: '#22d3ee' }}>Business Model.</span>
//           </motion.h2>
//           <p className="text-gray-200 max-w-2xl mx-auto text-lg">
//             Don't have an idea yet? Choose one of these proven models and make it your own.
//           </p>
//         </div>

//         {/* --- TABS --- */}
//         <div className="flex justify-center mb-12">
//           <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 inline-flex">
//             <TabButton 
//               label="Service Startups" 
//               isActive={activeTab === 'service'} 
//               onClick={() => setActiveTab('service')}
//               color="#22d3ee" // Cyan
//             />
//             <TabButton 
//               label="Digital Products" 
//               isActive={activeTab === 'product'} 
//               onClick={() => setActiveTab('product')}
//               color="#c084fc" // Purple
//             />
//           </div>
//         </div>

//         {/* --- GRID CONTENT --- */}
//         <div className="min-h-[600px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {(activeTab === 'service' ? serviceIdeas : productIdeas).map((idea, index) => (
//                 <IdeaCard 
//                   key={index} 
//                   idea={idea} 
//                   color={activeTab === 'service' ? '#22d3ee' : '#c084fc'} 
//                   delay={index * 0.1}
//                 />
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// };

// // --- SUB-COMPONENTS ---

// const TabButton = ({ label, isActive, onClick, color }) => (
//   <button
//     onClick={onClick}
//     className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${isActive ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
//     style={{ color: isActive ? color : undefined }}
//   >
//     {label}
//   </button>
// );

// const IdeaCard = ({ idea, color, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay }}
//     className="group relative p-6 rounded-2xl border flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
//     style={{ 
//       backgroundColor: 'rgba(15, 23, 42, 0.4)', 
//       borderColor: 'rgba(255, 255, 255, 0.05)'
//     }}
//   >
//     {/* Hover Glow */}
//     <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
//          style={{ backgroundColor: color }} />

//     {/* Header */}
//     <div className="flex items-start justify-between mb-4">
//       <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-white shadow-lg" style={{ color: color }}>
//         {idea.icon}
//       </div>
//       <div className="px-3 py-1 rounded-full border bg-slate-900/50 text-[10px] uppercase font-bold tracking-wider"
//            style={{ borderColor: `${color}30`, color: color }}>
//         Model #{Math.floor(Math.random() * 90 + 10)}
//       </div>
//     </div>

//     {/* Content */}
//     <h3 className="text-xl font-bold text-white mb-2">{idea.title}</h3>
//     <p className="text-gray-200 text-sm leading-relaxed mb-6 flex-grow">
//       {idea.desc}
//     </p>

//     {/* Footer Details */}
//     <div className="pt-4 border-t border-slate-800 space-y-3">
//       {/* Monetization */}
//       <div className="flex items-start gap-2">
//         <div className="mt-1 shrink-0 text-white"><ShoppingBag size={14} /></div>
//         <div>
//           <span className="block text-[10px] uppercase font-bold text-slate-500">Monetization</span>
//           <span className="text-xs text-gray-200">{idea.monetization}</span>
//         </div>
//       </div>

//       {/* AI Usage */}
//       <div className="flex items-start gap-2">
//         <div className="mt-1 shrink-0 text-white"><Cpu size={14} /></div>
//         <div>
//           <span className="block text-[10px] uppercase font-bold text-slate-500">AI Power-Up</span>
//           <span className="text-xs text-gray-200">{idea.ai}</span>
//         </div>
//       </div>
//     </div>

//   </motion.div>
// );

// export default StartupIdeas;


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Monitor, 
  Smartphone, 
  ShoppingBag, 
  PenTool, 
  Video, 
  Globe, 
  BookOpen, 
  Cpu,
  Layers,
  ArrowRight,
  Leaf,       // Added for Sustainability
  Dumbbell,   // Added for Sports
  Palette,    // Added for Arts
  Heart       // Added for Mental Health
} from 'lucide-react';

const StartupIdeas = () => {
  const [activeTab, setActiveTab] = useState('service'); // 'service' or 'product'

  const serviceIdeas = [
    {
      title: "Exam Readiness Studio",
      desc: "Small-group paid workshops for middle schoolers on note-making, time management, and exam strategy.",
      monetization: "Per-student fee per cohort",
      ai: "Generate practice questions, schedules, and flashcards.",
      icon: <BookOpen size={24} />
    },
    {
      title: "Social Media Lab",
      desc: "Teens handle Instagram/short video content for local businesses (cafés, salons) that lack time.",
      monetization: "Monthly retainer per client",
      ai: "Draft captions, hashtags, and post ideas.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Youth Tutoring Collective",
      desc: "Subject or skill-based tutoring (Math, Coding, SAT/ACT, Spoken English). Online or Hybrid.",
      monetization: "Hourly or package-based fees",
      ai: "Create worksheets, simplify concepts, and generate quizzes.",
      icon: <Users size={24} />
    },
    {
      title: "Club-in-a-Box Service",
      desc: "Help schools/housing societies set up plug-and-play clubs (Debate, Climate, Entrepreneurship).",
      monetization: "Setup fee + facilitation fee",
      ai: "Brainstorm activities, debate topics, and meeting agendas.",
      icon: <Layers size={24} />
    },
    {
      title: "Events Micro-Agency",
      desc: "Design themed events for kids/teens (STEM day, Book clubs) in schools or communities.",
      monetization: "Event fees or sponsorship",
      ai: "Outline run sheets, write invites, and summarize feedback.",
      icon: <Globe size={24} />
    }
  ];

  const productIdeas = [
    {
      title: "Digital Study Guides",
      desc: "Create exam-specific digital notes, planners, and Notion templates (JEE, NEET, IB).",
      monetization: "Direct digital sales (Gumroad)",
      ai: "Expand syllabi into structured notes and question banks.",
      icon: <Monitor size={24} />
    },
    {
      title: "Niche POD Merch",
      desc: "Design fandom or cause-based merchandise (t-shirts, bags) without holding inventory.",
      monetization: "Margin on sales (Print-on-Demand)",
      ai: "Generate slogans, descriptions, and visual prompts.",
      icon: <ShoppingBag size={24} />
    },
    {
      title: "Online Micro-Academy",
      desc: "A niche 'academy' (e.g., MUN prep, Climate Literacy) with a structured 4-8 week curriculum.",
      monetization: "Cohort fee + mentoring upsell",
      ai: "Draft lesson outlines, case studies, and role-play scenarios.",
      icon: <Video size={24} />
    },
    {
      title: "Teen Creator Studio",
      desc: "Sell ready-made content packs: Canva templates for school councils, clubs, or creators.",
      monetization: "Low-ticket digital products",
      ai: "Generate post ideas, headlines, and CTA text.",
      icon: <PenTool size={24} />
    },
    {
      title: "Social Impact Platform",
      desc: "A simple directory/platform matching volunteers to NGOs and school projects.",
      monetization: "Partnership packages (Freemium)",
      ai: "Summarize NGO profiles, draft matching criteria & emails.",
      icon: <Globe size={24} />
    }
  ];

  return (
    // SAFE MODE: Hardcoded Midnight Slate Background
    <section 
      className="relative py-24 px-6 font-sans overflow-hidden"
      style={{ backgroundColor: '#020617' }} 
    >
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(6, 182, 212, 0.1)', 
              borderColor: 'rgba(6, 182, 212, 0.3)',
              color: '#22d3ee'
            }}
          >
            <span className="text-xs font-bold uppercase tracking-widest">Startup Menu</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Pick Your <br />
            <span style={{ color: '#22d3ee' }}>Business Model.</span>
          </motion.h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Don't have an idea yet? Choose one of these proven models.
          </p>
        </div>

        {/* --- TABS --- */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 inline-flex">
            <TabButton 
              label="Service Startups" 
              isActive={activeTab === 'service'} 
              onClick={() => setActiveTab('service')}
              color="#22d3ee" // Cyan
            />
            <TabButton 
              label="Digital Products" 
              isActive={activeTab === 'product'} 
              onClick={() => setActiveTab('product')}
              color="#c084fc" // Purple
            />
          </div>
        </div>

        {/* --- GRID CONTENT --- */}
        <div className="min-h-[600px] mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeTab === 'service' ? serviceIdeas : productIdeas).map((idea, index) => (
                <IdeaCard 
                  key={index} 
                  idea={idea} 
                  color={activeTab === 'service' ? '#22d3ee' : '#c084fc'} 
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- NEW: CUSTOMIZATION / PASSION SECTION --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 p-8 md:p-12 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.95))',
            }}
        >
            {/* Ambient Background Glow (Amber/Orange) */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Build Around Your <span className="text-orange-400">Passion.</span>
                    </h3>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        The models above are just templates. We customize every track to fit your specific interests—whether you care about saving the planet, mental health, or sports analytics.
                    </p>

                    {/* Interest Tags */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <PassionTag icon={<Leaf size={16} />} label="Sustainability" />
                        <PassionTag icon={<Dumbbell size={16} />} label="Sports & Fitness" />
                        <PassionTag icon={<Heart size={16} />} label="Mental Health" />
                        <PassionTag icon={<Palette size={16} />} label="Creative Arts" />
                    </div>
                </div>

                {/* Right Side CTA */}
             <div className="shrink-0">
  <a href="/#contact" className="group relative block">
    
    {/* 1. Background Glow (Hardcoded Gradient) */}
    <div 
      className="absolute -inset-1 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"
      style={{ 
        background: 'linear-gradient(to right, #fbbf24, #f59e0b)' // Amber-400 to Orange-500
      }} 
    />

    {/* 2. The Button Itself */}
    {/* <a href=''> */}
    <button 
      className="relative px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-colors"
    style={{ backgroundColor: '#22d3ee', color: '#020617' }}
    >
      Customize Your Track
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>
  
  <p className="text-xs text-center mt-3" style={{ color: '#64748b' }}> {/* Slate-500 */}
    Speak to a mentor to validate your idea.
  </p>
</div>

            </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

const PassionTag = ({ icon, label }) => (
    <motion.div 
        className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium cursor-pointer"
        style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)', // Slate-800/50
            borderColor: '#334155', // Slate-700
            color: '#f3f4f6' // Gray-100
        }}
        whileHover={{ 
            borderColor: 'rgba(249, 115, 22, 0.5)', // Orange-500/50
            color: '#fed7aa', // Orange-200 (Light Orange)
            backgroundColor: 'rgba(30, 41, 59, 0.8)'
        }}
        transition={{ duration: 0.2 }}
    >
        {icon}
        <span>{label}</span>
    </motion.div>
);
const TabButton = ({ label, isActive, onClick, color }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${isActive ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
    style={{ color: isActive ? color : undefined }}
  >
    {label}
  </button>
);

const IdeaCard = ({ idea, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="group relative p-6 rounded-2xl border flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
    style={{ 
      backgroundColor: 'rgba(15, 23, 42, 0.4)', 
      borderColor: 'rgba(255, 255, 255, 0.05)'
    }}
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
         style={{ backgroundColor: color }} />

    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-white shadow-lg" style={{ color: color }}>
        {idea.icon}
      </div>
      <div className="px-3 py-1 rounded-full border bg-slate-900/50 text-[10px] uppercase font-bold tracking-wider"
           style={{ borderColor: `${color}30`, color: color }}>
        Model #{Math.floor(Math.random() * 90 + 10)}
      </div>
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-white mb-2">{idea.title}</h3>
    <p className="text-gray-200 text-sm leading-relaxed mb-6 flex-grow">
      {idea.desc}
    </p>

    {/* Footer Details */}
    <div className="pt-4 border-t border-slate-800 space-y-3">
      <div className="flex items-start gap-2">
        <div className="mt-1 shrink-0 text-white"><ShoppingBag size={14} /></div>
        <div>
          <span className="block text-[10px] uppercase font-bold text-slate-500">Monetization</span>
          <span className="text-xs text-gray-200">{idea.monetization}</span>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="mt-1 shrink-0 text-white"><Cpu size={14} /></div>
        <div>
          <span className="block text-[10px] uppercase font-bold text-slate-500">AI Power-Up</span>
          <span className="text-xs text-gray-200">{idea.ai}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default StartupIdeas;