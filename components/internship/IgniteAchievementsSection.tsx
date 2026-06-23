// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const achievements = [
//   {
//     title: "AgriTech Internship",
//     description:
//       "Our 12th grader prototyped and interned with an AgriTech firm in rural India, gaining real-world field experience.",
//     image: "/testimonial/drone.png", // Upload and replace with actual path
//   },
//   {
//     title: "Political Science Research Internship",
//     description:
//       "Our 10th-grade student worked under Professor Elias, former MP France candidate, on political science research and policy analysis.",
//     image: "/testimonial/professor.png", // Upload and replace with actual path
//   },
//   {
//     title: "TEDx Speaker",
//     description:
//       "One of our students became a TEDx speaker with support from our team in preparation and PR guidance.",
//     image: "/testimonial/girik_gupta.png", // Upload and replace with actual path
//   },
// ];

// export default function IgniteAchievementsSection() {
//   return (
//     <section className="bg-yellow-50 py-20 px-6 md:px-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900"> Achievements</h2>
//         {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Ignite Achievements</h2> */}
//         <p className="mt-4 text-lg text-gray-700">
//           Real stories. Real impact. Here’s how Ignite students are creating meaningful change.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {achievements.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="relative h-60 w-full">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//               <p className="text-gray-600 text-sm">{item.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Protiviti Sustainability Consulting",
    description:
      "Our 12th-grade student completed a shadow internship with global consulting firm Protiviti, building corporate sustainability frameworks and analyzing ESG compliance strategies.",
    image: "https://protiviticareer.com/wp-content/uploads/2022/04/Protiviti-Logo-Blue.png",
  },
  {
    title: "Political Science Research Internship",
    description:
      "A 10th-grade student collaborated with Professor Elias, a former French MP candidate, conducting advanced political science research and policy analysis.",
    image: "/testimonial/governmnet_of_franch.png",
  },
  {
    title: "LupLu B2B Growth Strategy",
    description:
      "One of our talented students successfully partnered with LupLu, a rising B2B firm, executing market-entry tactics and optimizing conversion funnels for corporate clients.",
    image: "/ignite/luplu.png",
  },
];

export default function IgniteAchievementsSection() {
  return (
    <section className="bg-gradient-to-b from-yellow-50/50 to-white py-24 px-6 md:px-20">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Achievements
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Real stories. Real impact. Discover how Ignite students are driving meaningful change across industries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Premium Image Wrapper */}
            <div className="relative h-56 w-full bg-gray-50 border-b border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-500 ease-out"
                priority={index === 0}
              />
            </div>
            
            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}