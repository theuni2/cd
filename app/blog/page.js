// // import Image from "next/image";

// // // Dummy blog data (replace with API)
// // const blogPosts = [
// //   {
// //     id: 1,
// //     title: "How to Build a Strong Profile for Study Abroad",
// //     preview: "A clear roadmap to elevate your student profile with tools and strategies.",
// //     slug: "first_blog",
// //     image: "/blog1.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Your Roadmap to Landing Global Internships",
// //     preview: "Step-by-step career advice for students aspiring to secure international internships.",
// //     slug: "second_blog",
// //     image: "/blog2.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Top Skills Recruiters Want in 2025",
// //     preview: "Learn the most relevant skills for future-ready career success.",
// //     slug: "thrid_blog",
// //     image: "/blog3.jpg",
// //   }
// // ];

// // export default function StudentPage() {
// //   return (
// //     <div className="bg-gray-50 text-gray-800">

// //       {/* Hero */}
// //       <section className="bg-blue-800 py-20 text-center">
// //         <h1 className="text-5xl font-bold mb-2">Student Insights & Resources</h1>
// //         <p className="text-lg text-gray-600 max-w-xl mx-auto">
// //           A learning corner for career exploration, planning, and success.
// //         </p>
// //               <div
// //         className="absolute top-0 left-0 right-0 h-[500px] -z-10 overflow-hidden"
// //       >
// //         <div
// //           className="absolute inset-0 animate-fastest-aura"
// //           style={{
// //             background:
// //               'linear-gradient(135deg, rgba(250, 204, 21, 0.7) 0%, rgba(59, 130, 246, 1) 30%, rgba(37, 99, 235, 1) 70%, rgba(147, 197, 253, 1) 100%)',
// //             opacity: 0.9,
// //           }}
// //         />
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 80%)',
// //           }}
// //         />
// //       </div>
// //       </section>

// //       {/* Blog Section */}
// //       <section id="blogs" className="max-w-6xl mx-auto px-6 py-16">
// //         <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //           {blogPosts.map((blog) => (
// //             <a
// //               key={blog.id}
// //               href={`/blog/${blog.slug}`}
// //               className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col"
// //             >
// //               {/* Cover Image */}
// //               <div className="relative h-40 w-full rounded-lg overflow-hidden">
// //                 <Image
// //                   src={blog.image}
// //                   alt={blog.title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>

// //               {/* Text */}
// //               <div className="mt-4 flex-grow">
// //                 <h3 className="text-xl font-semibold">{blog.title}</h3>
// //                 <p className="text-gray-500 text-sm mt-2">{blog.preview}</p>
// //               </div>

// //               <p className="text-blue-600 font-semibold mt-4 text-right">
// //                 Read More →
// //               </p>
// //             </a>
// //           ))}
// //         </div>
// //       </section>

// //     </div>
// //   );
// // }



// // import Image from "next/image";

// // // Dummy blog data (replace with API)
// // const blogPosts = [
// //   {
// //     id: 1,
// //     title: "How to Build a Strong Profile for Study Abroad",
// //     preview: "A clear roadmap to elevate your student profile with tools and strategies.",
// //     slug: "first_blog",
// //     image: "/blog1.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Your Roadmap to Landing Global Internships",
// //     preview: "Step-by-step career advice for students aspiring to secure international internships.",
// //     slug: "second_blog",
// //     image: "/blog2.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Top Skills Recruiters Want in 2025",
// //     preview: "Learn the most relevant skills for future-ready career success.",
// //     slug: "thrid_blog",
// //     image: "/blog3.jpg",
// //   }
// // ];

// // export default function StudentPage() {
// //   return (
// //     <div className="relative bg-gray-50 text-gray-800 overflow-hidden">

// //       {/* Gradient Background Same as ClaimItHero */}
// //       <div className="absolute top-0 left-0 right-0 h-[500px] -z-10 overflow-hidden">
// //         <div
// //           className="absolute inset-0 animate-fastest-aura"
// //           style={{
// //             background:
// //               "linear-gradient(135deg, rgba(251,191,36,0.5) 0%, rgba(99,102,241,0.6) 50%, rgba(232,121,249,0.4) 100%)",
// //             opacity: 0.85,
// //           }}
// //         />
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,1) 80%)",
// //           }}
// //         />
// //       </div>

// //       {/* Hero */}
// //       <section className="py-28 text-center relative z-10">
// //         <h1 className="text-5xl font-bold mb-3 text-gray-900">Student Insights & Resources</h1>
// //         <p className="text-lg text-gray-700 max-w-xl mx-auto">
// //           A learning corner for career exploration, planning, and success.
// //         </p>
// //       </section>

// //       {/* Blog Section */}
// //       <section id="blogs" className="max-w-6xl mx-auto px-6 py-16">
// //         <h2 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h2>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //           {blogPosts.map((blog) => (
// //             <a
// //               key={blog.id}
// //               href={`/blog/${blog.slug}`}
// //               className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col"
// //             >
// //               {/* Cover Image */}
// //               <div className="relative h-40 w-full rounded-lg overflow-hidden">
// //                 {/* <Image
// //                   src={blog.image}
// //                   alt={blog.title}
// //                   fill
// //                   className="object-cover"
// //                 /> */}
// //               </div>

// //               {/* Text */}
// //               <div className="mt-4 flex-grow">
// //                 <h3 className="text-xl font-semibold">{blog.title}</h3>
// //                 <p className="text-gray-500 text-sm mt-2">{blog.preview}</p>
// //               </div>

// //               <p className="text-blue-600 font-semibold mt-4 text-right">
// //                 Read More →
// //               </p>
// //             </a>
// //           ))}
// //         </div>
// //       </section>

// //     </div>
// //   );
// // }


// export default function BlogPage() {
//   return (
//     <div className="relative min-h-screen bg-white">
      
//       {/* Top Gradient (exact same style as CareerDiscovery homepage) */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(189,162,255,0.35),_rgba(228,239,255,0)_65%)]"></div>

//       {/* CONTENT */}
//       <div className="relative z-10">
        
//         {/* Heading Section */}
//         <div className="max-w-4xl mx-auto text-center pt-24 px-4">
//           <h1 className="text-4xl font-extrabold text-gray-900">
//             Student Insights & Resources
//           </h1>
//           <p className="text-gray-600 mt-2 text-lg">
//             A learning corner for career exploration, planning, and success.
//           </p>
//         </div>

//         {/* Subtitle */}
//         <h2 className="text-2xl font-bold text-center mt-12">Latest Blog Posts</h2>

//         {/* Blog Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4 pb-24">
          
//           {/* Card 1 */}
//           <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//             <h3 className="text-xl font-semibold text-gray-900">
//               How to Build a Strong Profile for Study Abroad
//             </h3>
//             <p className="text-gray-600 mt-2">
//               A clear roadmap to elevate your student profile with tools and strategies.
//             </p>
//             <a href="#" className="text-blue-600 mt-4 inline-block font-medium">
//               Read More →
//             </a>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//             <h3 className="text-xl font-semibold text-gray-900">
//               Your Roadmap to Landing Global Internships
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Step-by-step career advice for students aspiring to secure international internships.
//             </p>
//             <a href="#" className="text-blue-600 mt-4 inline-block font-medium">
//               Read More →
//             </a>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
//             <h3 className="text-xl font-semibold text-gray-900">
//               Top Skills Recruiters Want in 2025
//             </h3>
//             <p className="text-gray-600 mt-2">
//               Learn the most relevant skills for future-ready career success.
//             </p>
//             <a href="#" className="text-blue-600 mt-4 inline-block font-medium">
//               Read More →
//             </a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }





// import React from 'react'
// import {motion} from 'framer-motion';


// export default function Page() {
//   const blogPosts = [
//   {
//     id: 1,
//     title: "How to Build a Strong Profile for Study Abroad",
//     preview: "A clear roadmap to elevate your student profile with tools and strategies.",
//     slug: "first_blog",
//     image: "/blog1.jpg",
//   },
//   {
//     id: 2,
//     title: "Your Roadmap to Landing Global Internships",
//     preview: "Step-by-step career advice for students aspiring to secure international internships.",
//     slug: "second_blog",
//     image: "/blog2.jpg",
//   },
//   {
//     id: 3,
//     title: "Top Skills Recruiters Want in 2025",
//     preview: "Learn the most relevant skills for future-ready career success.",
//     slug: "thrid_blog",
//     image: "/blog3.jpg",
//   }
// ];
//   return (
//     <div className=''>
//         <div className=" text-gray-800">

//       {/* Hero */}
//       <section className="bg-blue-800 py-20 text-center">
//       <h1 className="text-5xl font-bold mb-2">Student Insights & Resources</h1>
//        <p className="text-lg text-gray-600 max-w-xl mx-auto">
//          A learning corner for career exploration, planning, and success.
//          </p>
//              <div
//         className="absolute top-0 left-0 right-0 h-[500px] -z-10 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 animate-fastest-aura"
//           style={{
//             background:
//               'linear-gradient(135deg, rgba(250, 204, 21, 0.7) 0%, rgba(59, 130, 246, 1) 30%, rgba(37, 99, 235, 1) 70%, rgba(147, 197, 253, 1) 100%)',
//             opacity: 0.9,
//           }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 80%)',
//           }}
//         />
//       </div>
//       </section>

//       {/* Blog Section */}
//  {/* <section id="blogs" className="max-w-7xl mx-auto px-6 py-20">
//   <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">
//     Latest Blog Posts
//   </h2>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//     {blogPosts.map((blog) => (
//       <a
//         key={blog.id}
//         href={`/blog/${blog.slug}`}
//         className="
//           group relative bg-white/60 backdrop-blur-md 
//           rounded-3xl border border-gray-100 
//           shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
//           hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] 
//           transition-all p-6 flex flex-col
//         "
//       >
//         {/* Cover Placeholder (Premium Glass Box) */}
//         {/* <div
//           className="
//             relative h-44 w-full rounded-2xl overflow-hidden 
//             bg-gradient-to-br from-gray-100 to-gray-200
//             border border-gray-200
//             group-hover:scale-[1.02] transition-transform
//           "
//         >
//           {/* Uncomment when images available */}
//           {/* <Image src={blog.image} alt={blog.title} fill className="object-cover" /> */}
//         {/* </div> */} 

//         {/* Text */}
//         {/* <div className="mt-6 flex-grow">
//           <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
//             {blog.title}
//           </h3>
//           <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//             {blog.preview}
//           </p>
//         </div>

//         <div className="mt-6 text-blue-700 font-medium text-right group-hover:underline">
//           Read More →
//         </div>
//       </a>
//     ))}
//   </div> */}
// {/* </section> */} 


//   <section id="blogs" className="max-w-7xl mx-auto px-6 py-20">
//       {/* Heading Animation */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight"
//       >
//         Latest Blog Posts
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         {blogPosts.map((blog, index) => (
//           <motion.a
//             key={blog.id}
//             href={`/blog/${blog.slug}`}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.15,
//               ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               scale: 1.02,
//               transition: { duration: 0.2 },
//             }}
//             className="
//               group relative bg-white/60 backdrop-blur-md 
//               rounded-3xl border border-gray-200 
//               shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
//               hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]
//               transition-all p-6 flex flex-col cursor-pointer
//             "
//           >
//             {/* Image Placeholder */}
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               className="
//                 relative h-44 w-full rounded-2xl overflow-hidden 
//                 bg-gradient-to-br from-gray-100 to-gray-200
//                 border border-gray-200
//               "
//             ></motion.div>

//             {/* Text */}
//             <div className="mt-6 flex-grow">
//               <motion.h3
//                 whileHover={{ x: 3 }}
//                 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors"
//               >
//                 {blog.title}
//               </motion.h3>

//               <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                 {blog.preview}
//               </p>
//             </div>

//             <motion.div
//               whileHover={{ x: 4 }}
//               className="mt-6 text-blue-700 font-medium text-right"
//             >
//               Read More →
//             </motion.div>
//           </motion.a>
//         ))}
//       </div>

//     </section>

//     </div>
//     </div>
//   )
// }




"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Page() {
  const blogPosts = [
    {
      id: 1,
      title: " Maximize Your Future with the Top Benefits of a Research Coaching Program for Indian High Schoolers",
      preview: "Discover how research coaching helps Indian high school students boost college admissions, build strong portfolios, and gain clarity about future careers.",
      slug: "india-high-school-research-coaching",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Your Roadmap to Landing Global Internships",
      preview: "Step-by-step career advice for students aspiring to secure international internships.",
      slug: "",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "Top Skills Recruiters Want in 2025",
      preview: "Learn the most relevant skills for future-ready career success.",
      slug: "",
      image: "/blog3.jpg",
    },
  ];

  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section className="bg-blue-800 py-20 text-center relative overflow-hidden">
        <h1 className="text-5xl font-bold mb-2 text-white">
          Student Insights & Resources
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mx-auto">
          A learning corner for career exploration, planning, and success.
        </p>

        <div className="absolute top-0 left-0 right-0 h-[500px] -z-10 overflow-hidden">
          <div
            className="absolute inset-0 animate-fastest-aura"
            style={{
              background:
                "linear-gradient(135deg, rgba(250, 204, 21, 0.7) 0%, rgba(59, 130, 246, 1) 30%, rgba(37, 99, 235, 1) 70%, rgba(147, 197, 253, 1) 100%)",
              opacity: 0.9,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 80%)",
            }}
          />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight"
        >
          Latest Blog Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((blog, index) => (
            <motion.a
              key={blog.id}
              href={`/blog/${blog.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white/60 backdrop-blur-md 
                rounded-3xl border border-gray-200 
                shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]
                transition-all p-6 flex flex-col cursor-pointer"
            >
              {/* Image Placeholder Box */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative h-44 w-full rounded-2xl overflow-hidden 
                  bg-gradient-to-br from-gray-100 to-gray-200
                  border border-gray-200"
              />

              {/* Text */}
              <div className="mt-6 flex-grow">
                <motion.h3
                  whileHover={{ x: 3 }}
                  className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors"
                >
                  {blog.title}
                </motion.h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {blog.preview}
                </p>
              </div>

              <motion.div
                whileHover={{ x: 4 }}
                className="mt-6 text-blue-700 font-medium text-right"
              >
                Read More →
              </motion.div>
            </motion.a>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
