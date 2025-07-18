'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'
import NewsletterSubscription from "@/components/NewsletterSubscription"
import { useRouter } from 'next/navigation'

const Blob = ({ className }: { className: string }) => (
  <div 
    className={`absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${className}`}
    style={{ background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)' }}
  />
)

const FooterSection = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const SocialIcon = ({ Icon, href }: { Icon: React.ElementType, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors pt-2">
    <Icon size={24} />
  </a>
)

const Footer = () => {
  const router = useRouter()

const handleContactClick = () => {
  router.push('/#contact')
}
  //   const handleContactClick = () => {
  //   // setIsMobileMenuOpen(false) // Close the sheet
  //   // Add a small delay to ensure the sheet closes before scrolling
  //   setTimeout(() => {
  //     const contactSection = document.getElementById('contact')
  //     if (contactSection) {
  //       contactSection.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   }, 100)
  // }
  return (
    <footer className="relative overflow-hidden border-t bg-gray-50">
      <Blob className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <Blob className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center text-2xl font-bold text-gray-900 mb-4 inline-block">
              <Image 
                src="https://i.imgur.com/YrXWWrk.png" 
                alt="Career Discovery Logo" 
                width={32} 
                height={32} 
                className="mr-3"
              />
              Career Discovery
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering students to discover and pursue their dream careers through personalized guidance and support.
            </p>
            <div className="mt-4">
              <p className="text-gray-600"><strong>Email:</strong> info@thecareerdiscovery.com</p>
              <p className="text-gray-600"><strong>Phone:</strong> +91 97177 71969</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/profile.php?id=61569468055193&mibextid=ZbWKwL" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/thecareerdiscovery" />
            </div>
          </div>
          
          <FooterSection 
            title="Quick Links" 
            links={[
              { label: 'Home', href: '/' },
              { label: 'Research', href: '/research' },
              { label: 'Internship', href: '/internship' },
              { label: 'Career Pathways', href: '#services' },
              { label: 'Success Stories', href: '#success-stories' },
            ]}
          />
          
           <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest career insights and opportunities.</p>
            {/* <NewsletterSubscription /> */}
            <button 
                  onClick={handleContactClick}
                  className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-[#356bff] text-white hover:bg-[#2e5ee6]"
                >
                  Contact Us
                </button>
          </div> 
        </div> 
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Career Discovery. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer