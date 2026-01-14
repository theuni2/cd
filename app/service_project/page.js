import React from 'react'
// import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SocialProjectHero from '../../components/service_launchpad/hero';
import ImpactProjectsSection from '../../components/service_launchpad/impact_project';
import ProgramOutcomes from '../../components/service_launchpad/project_outcome';
import ProgramFAQ from '../../components/service_launchpad/kuestion';
import ServiceCards from '../../components/service_launchpad/service';

export default function Page() {
  return (
    <div>
        {/* <Navigation/> */}
        <SocialProjectHero/>
        <ImpactProjectsSection/>
        <ServiceCards/>
        <ProgramOutcomes/>
        <ProgramFAQ/>
        <Footer/>
    </div>
  )
}
