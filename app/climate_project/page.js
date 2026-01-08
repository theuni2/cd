import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ClimateProjectHero from '../../components/climate/hero'
import WhyClimateAction from '../../components/climate/why_climate'
import CollegeImpact from '../../components/climate/whythis'
import WhatThisTrackIs from '../../components/climate/track'
import CoreOutcomes from '../../components/climate/core_outcomes'
import ProgramSyllabus from '../../components/climate/timeline';
import ClimateFAQ  from '../../components/climate/kuestion';

export default function Page() {
  return (
    <div>
        <Navigation/>
        <ClimateProjectHero/>
        <WhyClimateAction/>
        <CollegeImpact/>
        <WhatThisTrackIs/>
        <CoreOutcomes/>
        <ProgramSyllabus/>
        <ClimateFAQ/>
        <Footer/>
    </div>
  )
}
