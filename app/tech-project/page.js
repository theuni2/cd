import React from 'react'
import HeroSection from '../../components/tech_project/hero'
import CompetitionsSection from '../../components/tech_project/second'
import ComparisonMatrix from '@/components/launchpad/aboutus';
import AlternativeComparisonList from '@/components/launchpad/difference';
import CompetitionsTimeline from '@/components/tech_project/key_competition';
import LaunchpadComparison from '@/components/compare'

export default function Page() {
  return (
    <div>
     
        <HeroSection />
        <CompetitionsSection/>
        <ComparisonMatrix />
        <AlternativeComparisonList />
        <CompetitionsTimeline />
        <LaunchpadComparison />

    </div>
  )
}


       
