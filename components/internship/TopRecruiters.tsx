'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const recruiters = [
  {
    name: "Mindsy",
    logo: "https://i.imgur.com/09XzZSf.jpeg",
    description: "Leading mental health platform",
    link: "https://www.instagram.com/mindsy.in/"
  },
  {
    name: "Mindroot Foundations",
    logo: "https://i.imgur.com/5PozhwY.jpeg",
    description: "Educational non-profit organization",
    link: "https://www.instagram.com/mindroot_foundation/"
  },
  {
    name: "Happiness is love",
    logo: "https://i.imgur.com/eoyzTen.jpeg",
    description: "Mental wellness startup",
    link: "https://www.instagram.com/happinessislovelovelove/"
  },
  {
    name: "Rezio",
    logo: "https://i.imgur.com/l1KG4bI.jpeg",
    description: "Tech innovation company",
    link: "https://www.instagram.com/rezio.io/"
  },
  {
    name: "Mabrij Sports",
    logo: "https://i.imgur.com/8ckjgVF.jpeg",
    description: "Sports technology platform",
    link: "https://www.instagram.com/mabrijsports/"
  },
  {
    name: "MyGov",
    logo: "https://i.imgur.com/gW1xWNx.jpeg",
    description: "Government of India",
    link: "https://www.instagram.com/mygovindia/"
  },
  {
    name: "FICCI",
    logo: "/company/ficci.png",
    description: "Federation of Indian Chambers of Commerce and Industry",
    link: "https://www.bing.com/ck/a?!&&p=6c4e04d4e675eaea464d9b6742103afa397506da484d9805391183647abce655JmltdHM9MTc1MjYyNDAwMA&ptn=3&ver=2&hsh=4&fclid=24e84789-fbec-6f74-299d-533afa1e6e97&psq=ficci+&u=a1aHR0cHM6Ly9maWNjaS5pbi8&ntb=1"
  },
  {
    name: "WICCI",
    logo: "/company/company_logo.png",
    description: "Women's Indian Chamber of Commerce and Industry (WICCI).",
    link: "https://wicci.in/"
  },
  {
    name: "CoWE",
    logo: "/company/company_logo.png",
    description: "Confederation Of Women Entrepreneurs (CoWE)",
    link: "https://co-we.com/"
  },
  {
    name: "Friendicoes – SECA",
    logo: "/company/company_logo.png",
    description: "Friendicoes has always been vocal about compassion and care towards animals.",
    link: "https://co-we.com/"
  },
  {
    name: "Curamind",
    logo: "/company/curamind.png",
    description: "Curamind offers holistic mental health solutions",
    link: "https://www.curamind.in/home-page"
  },
  {
    name: "Support Our Heroes",
    logo: "/company/supportourheros.png",
    description: "Support Our Heroes is a non-profit organization dedicated to supporting the families of armed forces personnel.",
    link: "https://supportourheroes.in/"
  },
  // {
  //   name: "Support Our Heroes",
  //   logo: "/company/supportourheros.png",
  //   description: "Support Our Heroes is a non-profit organization dedicated to supporting the families of armed forces personnel.",
  //   link: "https://supportourheroes.in/"
  // },
]

const RecruiterCard = ({ recruiter, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
  >
    {/* Logo and Details */}
    <div className="flex items-start gap-4">
      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 p-2 group-hover:scale-105 transition-transform duration-300">
        <Image
          src={recruiter.logo}
          alt={recruiter.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
          {recruiter.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{recruiter.description}</p>
        <a 
          href={recruiter.link}
          target="_blank"
          rel="noopener noreferrer" 
          className="relative z-10 inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors duration-300"
        >
          Learn more
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>

    {/* Hover Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 transform opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
  </motion.div>
)

export default function TopRecruiters() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeading
          badge="Partner Companies"
          title="Work with Industry"
          highlightedWord="Ignite Partners"
          subtitle="Your One-Stop Destination for over 100 Internship Opportunities — in Collaboration with over 25 Trusted Partners and Professors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {recruiters.map((recruiter, index) => (
            <RecruiterCard key={index} recruiter={recruiter} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
