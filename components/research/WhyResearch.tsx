// 'use client'

// import { motion } from 'framer-motion'
// import { Star, Target, BookOpen, TrendingUp, Brain } from 'lucide-react'
// import SectionHeading from '../SectionHeading'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   type CarouselApi,
// } from "@/components/ui/carousel"
// import { useMediaQuery } from '@/hooks/useMediaQuery'
// import { useState, useEffect } from 'react'

// const advantages = [
//   {
//     icon: Star,
//     title: "Stand Out from the Crowd",
//     description: "Demonstrating research experience on your profile sets you apart from peers and enhances college or job applications.",
//     gradient: "bg-gradient-to-br from-blue-500 to-violet-500"
//   },
//   {
//     icon: BookOpen,
//     title: "Build a Strong Profile",
//     description: "Research projects showcase your ability to work independently, think critically, and innovate, strengthening your academic and professional credentials.",
//     gradient: "bg-gradient-to-br from-emerald-500 to-teal-500"
//   },
//   {
//     icon: Brain,
//     title: "Enhance Knowledge & Skills",
//     description: "Deep dive into subjects of interest, develop analytical skills, and gain hands-on experience in your field.",
//     gradient: "bg-gradient-to-br from-orange-500 to-amber-500"
//   },
//   {
//     icon: TrendingUp,
//     title: "Boost Career & Academic Prospects",
//     description: "Universities and employers value candidates with research experience as it reflects dedication, curiosity, and expertise.",
//     gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
//   },
//   {
//     icon: Target,
//     title: "Develop Problem-Solving Abilities",
//     description: "Research nurtures your ability to identify challenges, analyze data, and create solutions, preparing you for future endeavors.",
//     gradient: "bg-gradient-to-br from-purple-500 to-indigo-500"
//   }
// ]

// const stats = [
//   { value: "90%", label: "Success Rate" },
//   { value: "50+", label: "Research Papers" },
//   { value: "100+", label: "Global Mentors" },
//   { value: "25+", label: "Partner Universities" }
// ]

// const CarouselDots = ({ count, current }) => {
//   return (
//     <div className="flex justify-center gap-2 mt-6">
//       {Array.from({ length: count }).map((_, index) => (
//         <div
//           key={index}
//           className={`h-1.5 rounded-full transition-all duration-300 ${
//             index === current 
//               ? 'w-8 bg-primary' 
//               : 'w-4 bg-gray-200'
//           }`}
//         />
//       ))}
//     </div>
//   )
// }

// export default function WhyResearch() {
//   const isMobile = useMediaQuery('(max-width: 768px)')
//   const [api, setApi] = useState<CarouselApi>()
//   const [current, setCurrent] = useState(0)
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     if (!api) {
//       return
//     }

//     setCount(api.scrollSnapList().length)
//     setCurrent(api.selectedScrollSnap())

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap())
//     })
//   }, [api])

//   useEffect(() => {
//     if (!api) return

//     const autoPlay = () => {
//       api.scrollNext()
//     }

//     const intervalId = setInterval(autoPlay, 5000)

//     return () => clearInterval(intervalId)
//   }, [api])

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
//       <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//       <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

//       <div className="container mx-auto px-4 relative">
//         <SectionHeading
//           badge="Why Conduct Research?"
//           title="Unlock Your"
//           highlightedWord="Potential"
//           subtitle="Discover how research experience can transform your academic journey and future career prospects"
//         />

//         {/* Stats Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-20"
//         >
//           {stats.map((stat, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Main Content */}
//         {isMobile ? (
//           // Mobile Carousel View
//           <div className="relative">
//             <Carousel
//               opts={{
//                 align: "start",
//                 loop: true,
//               }}
//               className="w-full"
//               setApi={setApi}
//             >
//               <CarouselContent className="-ml-2 md:-ml-4">
//                 {advantages.map((advantage, index) => (
//                   <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="bg-white rounded-2xl p-6 shadow-lg h-full border border-gray-100"
//                     >
//                       <div className={`w-12 h-12 rounded-xl ${advantage.gradient} p-2.5 mb-6`}>
//                         <advantage.icon className="w-full h-full text-white" />
//                       </div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                         {advantage.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         {advantage.description}
//                       </p>
//                     </motion.div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//             </Carousel>
//             <CarouselDots count={count} current={current} />
//           </div>
//         ) : (
//           // Desktop Flex Layout
//           <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
//             {advantages.map((advantage, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group w-[calc(33.333%-1rem)] min-w-[300px] max-w-[400px]"
//               >
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 h-full relative overflow-hidden">
//                   {/* Hover gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   {/* Icon with gradient */}
//                   <div className={`w-12 h-12 rounded-xl ${advantage.gradient} p-2.5 mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
//                     <advantage.icon className="w-full h-full text-white" />
//                   </div>
                  
//                   <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                     {advantage.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {advantage.description}
//                   </p>
                  
//                   {/* Decorative line */}
//                   <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-block bg-gradient-to-r from-rose-50 to-amber-50 px-8 py-4 rounded-2xl">
//             <p className="text-lg text-gray-800 font-medium">
//               Start your research journey with us today and take a step towards academic and career excellence! 
//               <span className="inline-block ml-2 animate-bounce">🚀</span>
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const universities = [
//   {
//     name: 'CalTech',
//     description:
//       '45% of Caltech admits submitted original research — showing that top universities value initiative, curiosity, and self-driven academic work.',
//     logo: '/unilogo/caltech.png',
//   },
//   {
//     name: 'UPenn',
//     description:
//       'Nearly 1 in 3 UPenn admits conducted research in high school — a bold marker of academic curiosity and standout initiative.',
//     logo: '/unilogo/upenn.png',
//   },
//   {
//     name: 'Stanford',
//     description:
//       "Stanford looks for 'Intellectual Vitality,' valuing students who are eager to learn and explore.",
//     logo: '/unilogo/standford_univ.png',
//   },
//   {
//     name: 'Harvard',
//     description:
//       "Harvard’s highest academic rating, based on 'strong scholarship' and 'creative thinking' increases acceptance chances by almost 8x.",
//     logo: '/unilogo/Harvard_University_coat_of_arms.svg.png',
//   },
// ];

// export default function WhyResearch() {
//   return (
//     <section className="bg-[#fceabb] bg-gradient-to-br from-[#f8b500] to-[#fceabb] py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-5xl font-extrabold text-white mb-6 drop-shadow-md"
//         >
//           WHY RESEARCH?
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-white text-lg max-w-2xl mx-auto mb-12"
//         >
//           Discover how top-tier universities value research and what it reveals about your potential.
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//           {universities.map((uni, index) => (
//             <motion.div
//               key={uni.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-xl p-6 flex items-start gap-4 hover:shadow-2xl transition-shadow duration-300"
//             >
//               <div className="w-16 h-16 relative flex-shrink-0">
//                 <Image
//                   src={uni.logo}
//                   alt={uni.name + ' logo'}
//                   fill
//                   className="object-contain rounded-full"
//                 />
//               </div>
//               <div className="text-left">
//                 <h3 className="text-xl font-semibold text-[#e26a00] mb-2">
//                   {uni.name}
//                 </h3>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   {uni.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const researchData = [
  {
    title: 'CalTech',
    description:
      '45% of Caltech admits submitted original research — showing that top universities value initiative, curiosity, and self-driven academic work.',
    image: '/unilogo/caltech.png',
  },
  {
    title: 'UPenn',
    description:
      'Nearly 1 in 3 UPenn admits conducted research in high school — a bold marker of academic curiosity and standout initiative.',
    image: '/unilogo/upenn.png',
  },
  {
    title: 'Stanford',
    description:
      "Stanford looks for 'Intellectual Vitality,' valuing students who are eager to learn and explore.",
    image: '/unilogo/standford_univ.png',
  },
  {
    title: 'Harvard',
    description:
      "Harvard’s highest academic rating, based on 'strong scholarship' and 'creative thinking' increases acceptance chances by almost 8x.",
    image: '/unilogo/Harvard_University_coat_of_arms.svg.png',
  },
];

export default function WhyResearch() {
  return (
    <section className="relative bg-gray-50 py-24 px-6 md:px-20">
    {/* <section className="relative bg-[#FFFBEA] py-24 px-6 md:px-20"> */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Thinktank? 
          </h2>
          <Image
            src="/thinktank.png" // ✅ Update path to your actual logo
            alt="Launchpad Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </motion.div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
            Research isn’t just about academics — it demonstrates curiosity, initiative,
            and creative thinking. Here’s what top universities say.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {researchData.map((uni, index) => (
            <motion.div
              key={uni.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="w-16 h-16 relative rounded-full overflow-hidden border border-gray-300 bg-gray-50 flex-shrink-0">
                <Image
                  src={uni.image}
                  alt={uni.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#EBA300] transition-colors">
                  {uni.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  {uni.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional Background Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-[-5rem] right-[-5rem] w-[300px] h-[300px] bg-yellow-400 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
