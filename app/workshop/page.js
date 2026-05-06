import React from 'react'
import HeroSection from '@/components/workshop/hero';
import WorkshopGrid from '@/components/workshop/discovery';
import ExperienceSection from '@/components/workshop/experience';
import ImprovedPhilosophy from '@/components/workshop/rule'
import FAQSection from '@/components/workshop/kuestion';
import Footer from '@/components/Footer.tsx'

export default function Page() {
  return (
    <div>
        <HeroSection />
        <WorkshopGrid/>
        <ExperienceSection />
        <ImprovedPhilosophy/>
        <FAQSection/>
        <Footer/>

        
    </div>
  )
}
 