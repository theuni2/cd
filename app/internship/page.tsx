import { Metadata } from 'next'
import Footer from '@/components/Footer'
import InternshipHero from '@/components/internship/InternshipHero'
import TopFields from '@/components/internship/TopFields'
import TopRecruiters from '@/components/internship/TopRecruiters'
import GuaranteeSection from '@/components/internship/GuaranteeSection'
import PlacementTimelineSection from '@/components/internship/PlacementTimelineSection'
import InternshipComparisonSection from '@/components/internship/compare'
import IgniteExperienceSection from '@/components/internship/Difference'
import IgniteAchievementsSection from '@/components/internship/IgniteAchievementsSection'

export const metadata: Metadata = {
  title: 'Internship | Career Discovery',
  description: 'Find your dream internship with Career Discovery. 100% internship guarantee with top companies across various industries.',
}

export default function Internship() {
  return (
    <main className="scroll-smooth">
      <InternshipHero />
      <section id="top-fields">
        <IgniteExperienceSection/>
        <PlacementTimelineSection/>
      <TopFields />
      </section>
      <InternshipComparisonSection/>
      <TopRecruiters />
      <GuaranteeSection />
      <IgniteAchievementsSection />
      <Footer />
    </main>
  )
}