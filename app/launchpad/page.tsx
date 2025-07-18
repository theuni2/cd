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
  title: 'Internship | Career Discovery',
  description: 'Find your dream internship with Career Discovery. 100% internship guarantee with top companies across various industries.',
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