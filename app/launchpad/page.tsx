import { Metadata } from 'next'
import Footer from '@/components/Footer'
import LaunchpadSection from'@/components/launchpad/soil';
import Hero from '@/components/launchpad/hero'
import CapstoneSection from '@/components/launchpad/capstone';
import TimelineSection from '@/components/launchpad/timeline';
import ShowcaseSection from '@/components/launchpad/project';
import LaunchpadComparison from '@/components/compare'
import Plans from '../components/Plans'
import MobilePlans from '../components/MobilePlans'


export const metadata: Metadata = {
  title: 'Launchpad | Career Discovery',
  description: 'Unlock your potential with self-driven projects—from launching startups and impactful nonprofit partnerships to building innovative prototypes and revenue-generating ventures.',
alternates: {
    canonical: "https://www.thecareerdiscovery.com/launchpad",
  },
}

export default function Launchpad() {
  return (
    <main className="scroll-smooth">
     <Hero/>
     <LaunchpadSection/>
     <CapstoneSection/>
     <TimelineSection/>
     <ShowcaseSection/>
     <LaunchpadComparison/>
     {/* <Plans/>
     <MobilePlans/> */}
      <Footer />
    </main>
  )
}