// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// // Icons tailored for Podcasting
// const Icons = {
//   Concept: () => (
//     <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//     </svg>
//   ),
//   Tech: () => (
//     <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//     </svg>
//   ),
//   Edit: () => (
//     <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//     </svg>
//   ),
//   Interview: () => (
//     <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//     </svg>
//   ),
//   Branding: () => (
//     <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//     </svg>
//   ),
//   Launch: () => (
//     <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//     </svg>
//   ),
// };

// const features = [
//   {
//     title: "Concept & Niche",
//     desc: "Define your voice. We help you identify a unique topic, target audience, and show format that cuts through the noise.",
//     icon: Icons.Concept,
//   },
//   {
//     title: "Setup & Gear",
//     desc: "Sound like a pro on a budget. Learn the essential hardware and software setup to capture studio-quality audio from home.",
//     icon: Icons.Tech,
//   },
//   {
//     title: "Interview Mastery",
//     desc: "The art of conversation. Learn how to research guests, ask powerful questions, and keep listeners engaged.",
//     icon: Icons.Interview,
//   },
//   {
//     title: "Audio Engineering",
//     desc: "Hands-on training in editing. Remove background noise, fix levels, and add music/SFX to create a polished final product.",
//     icon: Icons.Edit,
//   },
//   {
//     title: "Visual Branding",
//     desc: "Create your identity. We guide you in designing compelling cover art, show notes, and social media assets.",
//     icon: Icons.Branding,
//   },
//   {
//     title: "Distribution & Growth",
//     desc: "Go live globally. We handle the RSS feed setup to get you on Spotify, Youtube & Instagram, and teach you growth strategies.",
//     icon: Icons.Launch,
//   },
// ];

// const PodcastEssentials = () => {
//   return (
//     <section className="py-20 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8">
        
//         {/* 1. Intro Section: What & Who */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          
//           {/* Left: What is the Incubator? */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               What is the <span className="text-purple-600">Podcast Incubator</span>?
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed mb-6">
//               A comprehensive 8-week program designed to turn students into broadcasters. It’s not just about recording; it’s about building a digital asset, networking with industry leaders, and mastering the art of communication.
//             </p>
//             <div className="flex gap-4 text-sm text-gray-500 font-medium">
//               <span className="flex items-center gap-1">
//                 <span className="w-2 h-2 rounded-full bg-purple-600"></span> 8 Weeks
//               </span>
//               <span className="flex items-center gap-1">
//                 <span className="w-2 h-2 rounded-full bg-purple-600"></span> Youtube, Spotify & Instagram 
//               </span>
//               <span className="flex items-center gap-1">
//                 <span className="w-2 h-2 rounded-full bg-purple-600"></span> Global Reach
//               </span>
//             </div>
//           </motion.div>

//           {/* Right: Who is it for? */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-50 p-8 rounded-2xl border-l-4 border-purple-600 shadow-sm"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Should Join?</h3>
//             <p className="text-gray-600 mb-4">
//               Aspiring journalists, curious conversationalists, and students who want to build a powerful personal brand before graduation.
//             </p>
//             <p className="text-gray-600">
//               Whether you want to interview CEOs, discuss pop culture, or explain science, <span className="font-semibold text-gray-900">your voice deserves to be heard.</span>
//             </p>
//           </motion.div>
//         </div>

//         {/* 2. Core Program Components Grid */}
//         <div className="mb-20">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Program Components</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               From the first brainstorm to the "Publish" button, we guide you through every step of the production process.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group p-6 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
//                   <feature.icon />
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* 3. Important Disclaimer / Guarantee Box */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden"
//         >
//           {/* Decorative Background Element */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 opacity-20 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

//           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//             <div className="max-w-2xl">
//               <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
//                 <span className="bg-purple-600 text-xs px-2 py-1 rounded uppercase tracking-wider">Guarantee</span>
//                 Global Distribution
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 We guarantee that your final podcast episodes will be technically compliant and approved for listing on 
//                 <span className="text-white font-semibold"> Youtube, Spotify & Instagram</span>.
//               </p>
//             </div>
//             <a href='/#contact'>
//             <button className="whitespace-nowrap px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
//               Start Your Show
//             </button>
//             </a>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };


// export default PodcastEssentials;



'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Icons tailored for Podcasting
const Icons = {
  Concept: () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Tech: () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  Edit: () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Interview: () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  Branding: () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Launch: () => (
    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

// Data for the new layout
const featuresList = [
  {
    title: "Concept & Niche",
    desc: "Define your voice. We help you identify a unique topic, target audience, and show format that cuts through the noise.",
    icon: Icons.Concept,
  },
  {
    title: "Setup & Gear",
    desc: "Sound like a pro on a budget. Learn the essential hardware and software setup to capture studio-quality audio from home.",
    icon: Icons.Tech,
  },
  {
    title: "Interview Mastery",
    desc: "The art of conversation. Learn how to research guests, ask powerful questions, and keep listeners engaged.",
    icon: Icons.Interview,
  },
  {
    title: "Audio Engineering",
    desc: "Hands-on training in editing. Remove background noise, fix levels, and add music/SFX to create a polished final product.",
    icon: Icons.Edit,
  },
  {
    title: "Visual Branding",
    desc: "Create your identity. We guide you in designing compelling cover art, show notes, and social media assets.",
    icon: Icons.Branding,
  },
  {
    title: "Distribution & Growth",
    desc: "Go live globally. We handle the RSS feed setup to get you on Spotify, Youtube & Instagram, and teach you growth strategies.",
    icon: Icons.Launch,
  },
];

const PodcastEssentials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* 1. Intro Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What is the <br/><span className="text-purple-600">Podcast Incubator</span>?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A comprehensive 8-week program designed to turn students into broadcasters. It’s not just about recording; it’s about building a digital asset, networking with industry leaders, and mastering the art of communication.
            </p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-purple-600">8 Weeks</span>
                <span className="text-sm text-gray-500 font-medium">Program Duration</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-purple-600">3+ Platforms</span>
                <span className="text-sm text-gray-500 font-medium">Spotify, YT, Insta</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-purple-600">Global</span>
                <span className="text-sm text-gray-500 font-medium">Audience Reach</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image & Who is it for Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                {/* Replace with a real image of students podcasting */}
                <img 
                    src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070&auto=format&fit=crop" 
                    alt="Students recording a podcast" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlapping "Who is it for" Box */}
            <div className="absolute -bottom-10 -left-10 md:-left-12 z-20 bg-white p-8 rounded-2xl shadow-xl border-l-4 border-purple-600 max-w-md hidden md:block">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who Should Join?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aspiring journalists, curious conversationalists, and students who want to build a powerful personal brand before graduation. <span className="font-semibold text-gray-900">Your voice deserves to be heard.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* 2. Core Program Components Grid with Alternate Layout */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Program Components</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the first brainstorm to the "Publish" button, we guide you through every step of the production process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 items-center">
            
            {/* Left Column: Feature Images */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative hidden md:block"
            >
                <div className="grid grid-cols-2 gap-4">
<img 
                      src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                      alt="Audio editing software screen" 
                      className="rounded-2xl shadow-lg object-cover h-64 w-full"
                    />                    <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop" alt="Professional microphone setup" className="rounded-2xl shadow-lg object-cover h-64 w-full mt-12"/>
                </div>
                {/* Decorative Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/50 blur-3xl rounded-full -z-10"></div>
            </motion.div>

            {/* Right Column: Feature List */}
            <div className="grid grid-cols-1 gap-8">
                {featuresList.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-5 group"
                >
                    <div className="flex-shrink-0 w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <feature.icon />
                    </div>
                    <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                </motion.div>
                ))}
            </div>

          </div>
        </div>

        {/* 3. Important Disclaimer / Guarantee Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="bg-purple-600 text-sm px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">Guarantee</span>
                Global Distribution
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                We guarantee that your final podcast episodes will be technically compliant and approved for listing on 
                <span className="text-white font-bold border-b-2 border-purple-400 mx-1">Youtube, Spotify & Instagram</span>.
              </p>
            </div>
            <a href='/#contact' className="flex-shrink-0">
            <button className="whitespace-nowrap px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start Your Show
            </button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PodcastEssentials;