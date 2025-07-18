import { Metadata } from 'next'
import Footer from '@/components/Footer'
import Hero from '@/components/claimit/hero'
import ClaimItValueAdds from '@/components/claimit/valueadds'
import StudentAchievements from '@/components/claimit/studentacheivement'
import FinalPricing from '@/components/claimit/pricing'

export const metadata: Metadata = {
  title: 'Claimit | Career Discovery',
  description: 'Find your dream internship with Career Discovery. 100% internship guarantee with top companies across various industries.',
}

export default function Claimit() {
  return (
    <main className="scroll-smooth">
  <Hero/>
  <ClaimItValueAdds/>
  <StudentAchievements/>
  <FinalPricing/>
  <Footer/>
    </main>
  )
}