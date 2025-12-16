import { Metadata } from 'next'
import Footer from '@/components/Footer'
import Hero from '@/components/claimit/hero'
import ClaimItValueAdds from '@/components/claimit/valueadds'
import StudentAchievements from '@/components/claimit/studentacheivement'
import FinalPricing from '@/components/claimit/pricing'

export const metadata: Metadata = {
  title: 'Claimit | Career Discovery',
  description: 'With ClaimIt, get expert guidance to win global competitions and elite programs like RSI, Diana Award, TEDx and more. From standout essays and nominations to personalized mentorship—we boost your chances of success.',
  alternates: {
    canonical: "https://www.thecareerdiscovery.com/claimit",
  },
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