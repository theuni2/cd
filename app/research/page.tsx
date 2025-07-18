import { Metadata } from 'next'
import Footer from '@/components/Footer'
import ResearchHero from '@/components/research/ResearchHero'
import WhyResearch from '@/components/research/WhyResearch'
import ValueProposition from '@/components/research/ValueProposition'
import Mentors from '@/components/research/Mentors'
import JournalMarquee from '@/components/research/journal'
import ThreePAdvantage from '@/components/research/threepadvantage'
import IdeasToImpactSection from '@/components/research/activity'
import ComparisonSection from '@/components/research/compare'

export const metadata: Metadata = {
  title: 'Research | Career Discovery',
  description: 'Explore research opportunities and mentorship programs at Career Discovery. Work with expert mentors on groundbreaking research projects.',
}

export default function Research() {
  return (
    <main className="scroll-smooth">
      <ResearchHero />
      <section id="why-research"> 
      <WhyResearch />
      </section>
      <ValueProposition />
      <JournalMarquee/>
      <ThreePAdvantage/>
      <Mentors />
      <IdeasToImpactSection/>
      <ComparisonSection />
      <Footer />
    </main>
  )
}