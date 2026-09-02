// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'
// import NewsletterSubscription from "@/components/NewsletterSubscription"
// import { useRouter } from 'next/navigation'

// const Blob = ({ className }: { className: string }) => (
//   <div 
//     className={`absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${className}`}
//     style={{ background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)' }}
//   />
// )

// const FooterSection = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
//   <div className="mb-8 md:mb-0">
//     <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
//     <ul className="space-y-2">
//       {links.map((link) => (
//         <li key={link.label}>
//           <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// )

// const SocialIcon = ({ Icon, href }: { Icon: React.ElementType, href: string }) => (
//   <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors pt-2">
//     <Icon size={24} />
//   </a>
// )

// const Footer = () => {
//   const router = useRouter()

// const handleContactClick = () => {
//   router.push('/#contact')
// }
//   //   const handleContactClick = () => {
//   //   // setIsMobileMenuOpen(false) // Close the sheet
//   //   // Add a small delay to ensure the sheet closes before scrolling
//   //   setTimeout(() => {
//   //     const contactSection = document.getElementById('contact')
//   //     if (contactSection) {
//   //       contactSection.scrollIntoView({ behavior: 'smooth' })
//   //     }
//   //   }, 100)
//   // }
//   return (
//     <footer className="relative overflow-hidden border-t bg-gray-50">
//       <Blob className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
//       <Blob className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
      
//       <div className="container relative mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div>
//             <Link href="/" className="flex items-center text-2xl font-bold text-gray-900 mb-4 inline-block">
//               <Image 
//                 src="https://i.imgur.com/YrXWWrk.png" 
//                 alt="Career Discovery Logo" 
//                 width={32} 
//                 height={32} 
//                 className="mr-3"
//               />
//               Career Discovery
//             </Link>
//             <p className="text-gray-600 mb-4">
//               Empowering students to discover and pursue their dream careers through personalized guidance and support.
//             </p>
//             <div className="mt-4">
//               <p className="text-gray-600"><strong>Email:</strong> contact@thecareerdiscovery.com</p>
//               <p className="text-gray-600"><strong>Phone:</strong> +91 9888661618</p>
//             </div>
//             <div className="flex space-x-4 mt-6">
//               <SocialIcon Icon={Facebook} href="https://www.facebook.com/profile.php?id=61569468055193&mibextid=ZbWKwL" />
//               <SocialIcon Icon={Instagram} href="https://www.instagram.com/thecareerdiscovery" />
//             </div>
//           </div>
          
//           <FooterSection 
//             title="Quick Links" 
//             links={[
//               { label: 'Launchpad', href: '/launchpad' },
//               // { label: 'Launchpad', href: '/launchpad' },
//               { label: 'Think Tank', href: '/research' },
//               { label: 'Ignite', href: '/internship' },
//               // { href: '/research', label: 'Research' },  //Think tank
//               // { href: '/internship', label: 'Internship' },  // ignite
//               { href: '/claimit', label: 'Claim It' },
//               // { label: 'Career Pathways', href: '#services' },
//               // { label: 'Success Stories', href: '#success-stories' },
//             ]}
//           />
          
//            <div>
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Stay Updated</h3>
//             <p className="text-gray-600 mb-4">Fill out the form below to connect with us and explore exciting career opportunities.</p>
//             {/* <NewsletterSubscription /> */}
//             <a href='/#contact'>
//             <button 
                  
//                   className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-[#356bff] text-white hover:bg-[#2e5ee6]"
//                 >
//                   Contact Us
//                 </button>
//                 </a>
//                 <Link href="/forge_writing_competition">
//     <button className="mt-4 w-full md:w-auto inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium border border-[#356bff] text-[#356bff] hover:bg-[#356bff] hover:text-white transition">
//       FORGE Essay Comp
//     </button>
//   </Link>
//           </div> 
//         </div> 
        
//         <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-gray-500 mb-4 md:mb-0">
//             © {new Date().getFullYear()} Career Discovery. All rights reserved.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
//               Terms of Service
//             </Link>
//             <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="/cookies" className="text-sm text-gray-500 hover:text-primary transition-colors">
//               Cookie Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer




// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Facebook, Instagram } from 'lucide-react'

// const Blob = ({ className }: { className: string }) => (
//   <div
//     className={`absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${className}`}
//     style={{ background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)' }}
//   />
// )

// const FooterSection = ({
//   title,
//   links,
// }: {
//   title: string
//   links: { label: string; href: string }[]
// }) => (
//   <div>
//     <h3 className="text-lg font-semibold mb-5 text-gray-900">
//       {title}
//     </h3>

//     <ul className="space-y-3">
//       {links.map((link) => (
//         <li key={link.label}>
//           <Link
//             href={link.href}
//             className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
//           >
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// )

// const SocialIcon = ({
//   Icon,
//   href,
// }: {
//   Icon: React.ElementType
//   href: string
// }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
//   >
//     <Icon size={18} />
//   </a>
// )

// const Footer = () => {
//   return (
//     <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50">
//       {/* Background Blobs */}
//       <Blob className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
//       <Blob className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />

//       <div className="container relative mx-auto px-6 py-16">

//         {/* ===================== TOP GRID ===================== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* ===================== BRAND ===================== */}
//           <div>
//             <Link
//               href="/"
//               className="flex items-center mb-5"
//             >
//               <Image
//                 src="https://i.imgur.com/YrXWWrk.png"
//                 alt="Career Discovery Logo"
//                 width={36}
//                 height={36}
//                 className="mr-3"
//               />

//               <span className="text-2xl font-bold text-gray-900">
//                 Career Discovery
//               </span>
//             </Link>

//             <p className="text-gray-600 leading-relaxed mb-6">
//               Empowering students to discover and pursue dream careers through mentorship,
//               research, internships, and competitions.
//             </p>

//             <div className="space-y-2 text-gray-600">
//               <p>
//                 <span className="font-semibold text-gray-800">Email:</span>{' '}
//                 contact@thecareerdiscovery.com
//               </p>

//               <p>
//                 <span className="font-semibold text-gray-800">Phone:</span>{' '}
//                 +91 9888661618
//               </p>
//             </div>

//             <div className="flex items-center gap-4 mt-6">
//               <SocialIcon
//                 Icon={Facebook}
//                 href="https://www.facebook.com/profile.php?id=61569468055193&mibextid=ZbWKwL"
//               />

//               <SocialIcon
//                 Icon={Instagram}
//                 href="https://www.instagram.com/thecareerdiscovery"
//               />
//             </div>
//           </div>

//           {/* ===================== PROGRAMS ===================== */}
//           <FooterSection
//             title="Programs"
//             links={[
//               { label: 'Research', href: '/research' },
//               { label: 'Internships', href: '/internship' },
//               { label: 'Social Projects', href: '/launchpad' },
//               { label: 'Writing Programs', href: '/essay_comp' },
//               { label: 'Workshops', href: '/workshop' },
//             ]}
//           />

//           {/* ===================== COMPETITIONS ===================== */}
//           <FooterSection
//             title="Competitions & Resources"
//             links={[
//               {
//                 label: 'FORGE Essay Competition',
//                 href: '/forge_writing_competition',
//               },
//               { label: 'Blogs', href: '/blogs' },
//               // { label: 'Claim It', href: '/claimit' },
//               // { label: 'Terms of Service', href: '/terms' },
//               // { label: 'Privacy Policy', href: '/privacy' },
//               { label: 'Cookie Policy', href: '/cookies' },
//             ]}
//           />

//           {/* ===================== CTA ===================== */}
//           <div>
//             <h3 className="text-lg font-semibold mb-5 text-gray-900">
//               Stay Connected
//             </h3>

//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Connect with us to explore research opportunities, internships,
//               essay competitions, and mentorship programs.
//             </p>

//             <div className="flex flex-col gap-4">
//               <Link href="/#contact">
//                 <button className="w-full rounded-full bg-[#356bff] px-6 py-3 text-white font-medium hover:bg-[#2e5ee6] transition-all duration-300">
//                   Contact Us
//                 </button>
//               </Link>

//               <Link href="/forge_writing_competition">
//                 <button className="w-full rounded-full border border-[#356bff] px-6 py-3 text-[#356bff] font-medium hover:bg-[#356bff] hover:text-white transition-all duration-300">
//                   FORGE Essay Comp
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* ===================== BOTTOM ===================== */}
//         <div className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

//           <p className="text-sm text-gray-500 text-center md:text-left">
//             © {new Date().getFullYear()} Career Discovery. All rights reserved.
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-6">
//             <Link
//               href="/terms"
//               className="text-sm text-gray-500 hover:text-blue-600 transition"
//             >
//               Terms
//             </Link>

//             <Link
//               href="/privacy"
//               className="text-sm text-gray-500 hover:text-blue-600 transition"
//             >
//               Privacy
//             </Link>

//             <Link
//               href="/cookies"
//               className="text-sm text-gray-500 hover:text-blue-600 transition"
//             >
//               Cookies
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Disc as Discord } from 'lucide-react'

const Blob = ({ className }: { className: string }) => (
  <div
    className={`absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${className}`}
    style={{ background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)' }}
  />
)

const FooterSection = ({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) => (
  <div>
    <h3 className="text-lg font-semibold mb-5 text-gray-900">
      {title}
    </h3>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const SocialIcon = ({
  Icon,
  href,
}: {
  Icon: React.ElementType
  href: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
  >
    <Icon size={18} />
  </a>
)

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50">
      {/* Background Blobs */}
      <Blob className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <Blob className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />

      <div className="container relative mx-auto px-6 py-16">

        {/* ===================== TOP GRID ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ===================== BRAND ===================== */}
          <div>
            <Link
              href="/"
              className="flex items-center mb-5"
            >
              <Image
                src="https://i.imgur.com/YrXWWrk.png"
                alt="Career Discovery Logo"
                width={36}
                height={36}
                className="mr-3"
              />

              <span className="text-2xl font-bold text-gray-900">
                Career Discovery
              </span>
            </Link>

            <p className="text-gray-600 leading-relaxed mb-6">
              Empowering students to discover and pursue dream careers through mentorship,
              research, internships, and competitions.
            </p>

            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">Email:</span>{' '}
                contact@thecareerdiscovery.com
              </p>

              <p>
                <span className="font-semibold text-gray-800">Phone:</span>{' '}
                +91 9888661618
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <SocialIcon
                Icon={Facebook}
                href="https://www.facebook.com/profile.php?id=61569468055193&mibextid=ZbWKwL"
              />

              <SocialIcon
                Icon={Instagram}
                href="https://www.instagram.com/thecareerdiscovery"
              />

              <SocialIcon
                Icon={Discord}
                href="https://discord.gg/28DFDfpXz"
              />
            </div>
          </div>

          {/* ===================== PROGRAMS ===================== */}
          <FooterSection
            title="Programs"
            links={[
              { label: 'Research', href: '/research' },
              { label: 'Internships', href: '/internship' },
              { label: 'Social Projects', href: '/launchpad' },
              { label: 'Writing Programs', href: '/essay_comp' },
              { label: 'Workshops', href: '/workshop' },
            ]}
          />

          {/* ===================== COMPETITIONS ===================== */}
          <FooterSection
            title="Competitions & Resources"
            links={[
              {
                label: 'FORGE Essay Competition',
                href: '/forge_writing_competition',
              },
              { label: 'Blogs', href: '/blogs' },
              { label: 'Cookie Policy', href: '/cookies' },
            ]}
          />

          {/* ===================== CTA ===================== */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900">
              Stay Connected
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect with us to explore research opportunities, internships,
              essay competitions, and mentorship programs.
            </p>

            <div className="flex flex-col gap-4">
              <Link href="/#contact">
                <button className="w-full rounded-full bg-[#356bff] px-6 py-3 text-white font-medium hover:bg-[#2e5ee6] transition-all duration-300">
                  Contact Us
                </button>
              </Link>

              <Link href="/forge_writing_competition">
                <button className="w-full rounded-full border border-[#356bff] px-6 py-3 text-[#356bff] font-medium hover:bg-[#356bff] hover:text-white transition-all duration-300">
                  FORGE Essay Comp
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ===================== BOTTOM ===================== */}
        <div className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Career Discovery. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-blue-600 transition"
            >
              Terms
            </Link>

            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-blue-600 transition"
            >
              Privacy
            </Link>

            <Link
              href="/cookies"
              className="text-sm text-gray-500 hover:text-blue-600 transition"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer