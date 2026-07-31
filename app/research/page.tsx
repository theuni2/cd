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
import ResearchOutcomes from '@/components/research/outcome'
import ProfessorsTimelineSection from '@/components/research/upcoming'

// export const metadata: Metadata = {
//   title: 'Research | Career Discovery',
//   description: 'Explore research opportunities and mentorship programs at Career Discovery. Work with expert mentors on groundbreaking research projects.',
//   alternates: {
//     canonical: "https://www.thecareerdiscovery.com/research",
//   },
// }


export const metadata: Metadata = {
  title:
    'High School Research Program | Research Mentorship for College Admissions | Career Discovery',

  description:
    'Join Career Discovery’s High School Research Program. Work one-on-one with professors and researchers, build publishable research projects, and strengthen your college applications.',

  keywords: [
    'High School Research Program',
    'Research Mentorship',
    'Research for High School Students',
    'Student Research Program',
    'Research Coaching',
    'College Admissions',
  ],

  alternates: {
    canonical: 'https://www.thecareerdiscovery.com/research',
  },

  openGraph: {
    title: 'High School Research Program | Career Discovery',
    description:
      'Research mentorship with professors from leading universities for ambitious high school students.',
    url: 'https://www.thecareerdiscovery.com/research',
    siteName: 'Career Discovery',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'High School Research Program | Career Discovery',
    description:
      'Research mentorship with professors for high school students.',
  },
};

export default function Research() {
  return (
    <main className="scroll-smooth">
      <ResearchHero />
      <section id="why-research"> 
      <WhyResearch />
      </section>
      <ValueProposition />
      {/* <ResearchOutcomes/> */}
      {/* <ProfessorsTimelineSection/> */}
      <JournalMarquee/>
   
      <Mentors />
      
      <IdeasToImpactSection/>
      <ComparisonSection />

      <Footer />
    </main>
  )
}