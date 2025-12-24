import React from 'react'
import HeroSection from '../../components/tedx/hero'
import Footer from '@/components/Footer'
import ProgramEssentials from '@/components/tedx/ProgramEssentials';
import ProgramJourney from '@/components/tedx/timeline';
import FAQSection from '@/components/tedx/kestion';
import OutcomesCTA from '@/components/tedx/outcome';

export default function Page() {
  return (
    <div>
        <HeroSection/>
        <ProgramEssentials/>
        <OutcomesCTA/>
        <ProgramJourney/>

        <FAQSection/>
<Footer/>
    </div>
  )
}
