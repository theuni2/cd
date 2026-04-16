// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { ExternalLink } from 'lucide-react'
// import SectionHeading from '../SectionHeading'

// const recruiters = [
//   {
//     name: "Google",
//     logo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
//     description: "Global leader in technology and innovation",
//     link: "https://www.google.com"
//   },
//   {
//     name: "PwC",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png",
//     description: "Global professional services network",
//     link: "https://www.pwc.in/"
//   },
//   {
//     name: "EY",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/1200px-EY_logo_2019.svg.png",
//     description: "Building a better working world through consulting and audit",
//     link: "https://www.ey.com/en_in"
//   },
//   {
//     name: "Mindsy",
//     logo: "/company/mindsy.png",
//     description: "Leading mental health platform",
//     link: "https://www.instagram.com/mindsy.in/"
//   },
//   {
//     name: "Mindroot Foundations",
//     logo: "https://i.imgur.com/5PozhwY.jpeg",
//     description: "Educational non-profit organization",
//     link: "https://www.instagram.com/mindroot_foundation/"
//   },
//   {
//     name: "Happiness is love",
//     logo: "https://i.imgur.com/eoyzTen.jpeg",
//     description: "Mental wellness startup",
//     link: "https://www.instagram.com/happinessislovelovelove/"
//   },
//   {
//     name: "Rezio",
//     logo: "https://i.imgur.com/l1KG4bI.jpeg",
//     description: "Tech innovation company",
//     link: "https://www.instagram.com/rezio.io/"
//   },
//   {
//     name: "Mabrij Sports",
//     logo: "https://i.imgur.com/8ckjgVF.jpeg",
//     description: "Sports technology platform",
//     link: "https://www.instagram.com/mabrijsports/"
//   },
//   {
//     name: "MyGov",
//     logo: "https://i.imgur.com/gW1xWNx.jpeg",
//     description: "Government of India",
//     link: "https://www.instagram.com/mygovindia/"
//   },
//   {
//     name: "FICCI",
//     logo: "/company/ficci.png",
//     description: "Federation of Indian Chambers of Commerce and Industry",
//     link: "https://ficci.in/"
//   },
//   {
//     name: "WICCI",
//     logo: "/company/company_logo.png",
//     description: "Women's Indian Chamber of Commerce and Industry (WICCI).",
//     link: "https://wicci.in/"
//   },
//   {
//     name: "CoWE",
//     logo: "/company/company_logo.png",
//     description: "Confederation Of Women Entrepreneurs (CoWE)",
//     link: "https://co-we.com/"
//   },
//   {
//     name: "Friendicoes – SECA",
//     logo: "/company/company_logo.png",
//     description: "Friendicoes has always been vocal about compassion and care towards animals.",
//     link: "https://co-we.com/"
//   },
//   {
//     name: "Curamind",
//     logo: "/company/curamind.png",
//     description: "Curamind offers holistic mental health solutions",
//     link: "https://www.curamind.in/home-page"
//   },
//   {
//     name: "Support Our Heroes",
//     logo: "/company/supportourheros.png",
//     description: "Support Our Heroes is a non-profit organization dedicated to supporting the families of armed forces personnel.",
//     link: "https://supportourheroes.in/"
//   },
//   {
//     name: "MoneyMint",
//     logo: "/company/moneymint.png",
//     description: "Simple, useful content for founders and investors.",
//     link: "https://moneymint.com/"
//   },
//   {
//     name: "Swaraj Vikas Foundation",
//     logo: "/company/svf.png",
//     description: "Dedicated to community development, health, and social empowerment.",
//     link: "https://swarajvikas.1ngo.in/"
//   },
//   {
//     name: "Protiviti Inc.",
//     logo: "/company/protiviti.png",
//     description: "Global business consulting firm specializing in Risk & Compliance.",
//     link: "https://www.protiviti.com/IN-en"
//   }
// ];

// const RecruiterCard = ({ recruiter, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     viewport={{ once: true }}
//     className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
//   >
//     {/* Logo and Details */}
//     <div className="flex items-start gap-4">
//       <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 p-2 group-hover:scale-105 transition-transform duration-300">
//         <img
//           src={recruiter.logo}
//           alt={recruiter.name}
//           fill
//           className="object-contain"
//         />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
//           {recruiter.name}
//         </h3>
//         <p className="text-gray-600 text-sm mb-4">{recruiter.description}</p>
//         <a 
//           href={recruiter.link}
//           target="_blank"
//           rel="noopener noreferrer" 
//           className="relative z-10 inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors duration-300"
//         >
//           Learn more
//           <ExternalLink className="w-4 h-4 ml-1" />
//         </a>
//       </div>
//     </div>

//     {/* Hover Effects */}
//     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
//     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 transform opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
//   </motion.div>
// )

// export default function TopRecruiters() {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
//         <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
//         <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <SectionHeading
//           badge="Partner Companies & Mentors"
//           title="Work with Industry"
//           highlightedWord="Partners"
//           subtitle="Your One-Stop Destination for over 100 Internship Opportunities — in Collaboration with over 25 Trusted Partners and Professionals."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
//           {recruiters.map((recruiter, index) => (
//             <RecruiterCard key={index} recruiter={recruiter} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const recruiters = [
  {
    name: "Google",
    logo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
    description: "Global leader in technology and innovation",
    link: "https://www.google.com"
  },
  {
    name: "Goldman Sachs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png",
    description: "Leading global investment banking and management firm",
    link: "https://www.goldmansachs.com"
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    description: "Empowering every person and organization to achieve more",
    link: "https://www.microsoft.com"
  },
  {
    name: "PwC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png",
    description: "Global professional services network",
    link: "https://www.pwc.in/"
  },
  {
    name: "Deloitte",
    logo: "https://tse2.mm.bing.net/th/id/OIP.yKW0vY2oXU2fll6NLaYvDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Providing audit, consulting, and advisory services",
    link: "https://www2.deloitte.com/in/en.html"
  },
  {
    name: "EY",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/1200px-EY_logo_2019.svg.png",
    description: "Building a better working world through consulting and audit",
    link: "https://www.ey.com/en_in"
  },
  {
    name: "Mindsy",
    logo: "/company/mindsy.png",
    description: "Leading mental health platform",
    link: "https://www.instagram.com/mindsy.in/"
  },
  {
    name: "Protiviti Inc.",
    logo: "/company/protiviti.png",
    description: "Global business consulting firm specializing in Risk & Compliance.",
    link: "https://www.protiviti.com/IN-en"
  },
  {
    name: "MyGov",
    logo: "https://i.imgur.com/gW1xWNx.jpeg",
    description: "Citizen engagement platform of Government of India",
    link: "https://www.instagram.com/mygovindia/"
  },
  {
    name: "FICCI",
    logo: "/company/ficci.png",
    description: "Federation of Indian Chambers of Commerce and Industry",
    link: "https://ficci.in/"
  },
  {
    name: "WICCI",
    logo: "/company/company_logo.png",
    description: "Women's Indian Chamber of Commerce and Industry (WICCI).",
    link: "https://wicci.in/"
  },
  {
    name: "MoneyMint",
    logo: "/company/moneymint.png",
    description: "Simple, useful content for founders and investors.",
    link: "https://moneymint.com/"
  }
];

const RecruiterCard = ({ recruiter, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center"
  >
    {/* Enlarged Logo Container */}
    <div className="relative w-24 h-24 mb-6 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-3 group-hover:bg-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
      <div className="relative w-full h-full">
         <img
          src={recruiter.logo}
          alt={recruiter.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>

    {/* Details */}
    <div className="flex-1 flex flex-col items-center">
      <h3 className="text-xl font-bold text-[#011B3E] mb-2">
        {recruiter.name}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{recruiter.description}</p>
      
      <a 
        href={recruiter.link}
        target="_blank"
        rel="noopener noreferrer" 
        className="mt-auto inline-flex items-center text-sm font-semibold text-[#011B3E] hover:underline transition-all duration-300"
      >
        View Portfolio
        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
      </a>
    </div>

    {/* Subtle Decorative Hover Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
  </motion.div>
)

export default function TopRecruiters() {
  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#011B3E_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          badge="Global Network"
          title="Intern & Build Profiles with"
          highlightedWord="Top Firms"
          subtitle="Direct access to 100+ opportunities across Fortune 500s, leading consultancies, and high-impact startups."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-7xl mx-auto">
          {recruiters.map((recruiter, index) => (
            <RecruiterCard key={index} recruiter={recruiter} index={index} />
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic">
            + and 15+ more industry leaders across Tech, Finance, and Social Impact sectors.
          </p>
        </div>
      </div>
    </section>
  )
}