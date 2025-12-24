// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Menu } from 'lucide-react'
// import Button from './Button'
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const linkClass = isScrolled ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-200"

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/research', label: 'Research' },  //Think tank
//     { href: '/internship', label: 'Internships' },  
//     { href: '/launchpad', label: 'Launchpad' },
//     { href: '/blog', label: 'Blogs' },
//     // ignite
//     { href: '/claimit', label: 'Claim It' },
//   ]

//   const handleContactClick = () => {
//     setIsMobileMenuOpen(false) // Close the sheet
//     // Add a small delay to ensure the sheet closes before scrolling
//     setTimeout(() => {
//       const contactSection = document.getElementById('contact')
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: 'smooth' })
//       }
//     }, 100)
//   }

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : ''}`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image 
//               src="https://i.imgur.com/YrXWWrk.png" 
//               alt="Career Discovery Logo" 
//               width={32} 
//               height={32} 
//               className="mr-3"
//             />
//             <span className={`text-2xl font-bold ${linkClass}`}>
//               Career Discovery
//             </span>
//           </Link>

//           {/* Desktop Navigation - Now centered with negative margin */}
//           <div className="hidden md:flex items-center justify-center flex-1 space-x-8 -ml-[111px]">
//             {navItems.map((item) => (
//               <Link key={item.href} href={item.href} className={linkClass}>
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Contact Us Button (Desktop) */}
//           <div className="hidden md:block">

//             <Button href='/#contact' variant={isScrolled ? "primary" : "white"}>
//               Contact Us
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild>
//               <button className={`md:hidden ml-auto ${linkClass}`}>
//                 <Menu className="w-6 h-6" />
//               </button>
//             </SheetTrigger>
//             <SheetContent side="top" className="w-full h-screen pt-16">
//               <SheetHeader>
//                 <SheetTitle className="text-2xl font-bold mb-6">Menu</SheetTitle>
//               </SheetHeader>
//               <div className="flex flex-col space-y-4">
//                 {navItems.map((item) => (
//                   <Link 
//                     key={item.href} 
//                     href={item.href} 
//                     className="text-xl text-gray-800 hover:text-primary"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//                 <button 
//                   onClick={handleContactClick}
//                   className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-[#356bff] text-white hover:bg-[#2e5ee6]"
//                 >
//                   Contact Us
//                 </button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navigation



'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown } from 'lucide-react' // Added ChevronDown
import Button from './Button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // State for mobile dropdown toggle
  const [isMobileLaunchpadOpen, setIsMobileLaunchpadOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = isScrolled ? "text-gray-900 hover:text-gray-600" : "text-white hover:text-gray-200"

  // Updated Data Structure
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/internship', label: 'Internships' },
    { 
      href: '/launchpad', 
      label: 'Launchpad',
      // Added subItems for the dropdown
      subItems: [
        { href: '/tedx', label: 'Be a TEDx Speaker' },
        { href: '/podcast', label: 'Podcast Incubator' }
      ]
    },
    { href: '/blog', label: 'Blogs' },
    { href: '/claimit', label: 'Claim It' },
  ]

  const handleContactClick = () => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="https://i.imgur.com/YrXWWrk.png" 
              alt="Career Discovery Logo" 
              width={32} 
              height={32} 
              className="mr-3"
            />
            <span className={`text-2xl font-bold ${linkClass}`}>
              Career Discovery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8 -ml-[111px]">
            {navItems.map((item) => {
              // Check if item has a dropdown
              if (item.subItems) {
                return (
                  <div key={item.label} className="relative group">
                    {/* Trigger */}
                    <Link 
                      href={item.href} 
                      className={`flex items-center gap-1 ${linkClass}`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-56 overflow-hidden">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              // Standard Link
              return (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Contact Us Button (Desktop) */}
          <div className="hidden md:block">
            <Button href='/#contact' variant={isScrolled ? "primary" : "white"}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className={`md:hidden ml-auto ${linkClass}`}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-screen pt-16 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold mb-6">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  // Mobile Dropdown Logic
                  if (item.subItems) {
                    return (
                      <div key={item.label} className="flex flex-col">
                        <div 
                          className="flex items-center justify-between text-xl text-gray-800 cursor-pointer py-2"
                          onClick={() => setIsMobileLaunchpadOpen(!isMobileLaunchpadOpen)}
                        >
                          <span className={isMobileLaunchpadOpen ? "text-blue-600 font-semibold" : ""}>{item.label}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${isMobileLaunchpadOpen ? 'rotate-180 text-blue-600' : ''}`} />
                        </div>
                        
                        {/* Mobile Submenu Items */}
                        {isMobileLaunchpadOpen && (
                          <div className="flex flex-col pl-4 space-y-3 mt-1 mb-2 border-l-2 border-gray-100 ml-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="text-lg text-gray-600 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }

                  // Standard Mobile Link
                  return (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className="text-xl text-gray-800 hover:text-primary py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <button 
                  onClick={handleContactClick}
                  className="mt-6 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-[#356bff] text-white hover:bg-[#2e5ee6]"
                >
                  Contact Us
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation