import React from 'react'
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LiteracyHero from '../../components/study_youth/hero'
import WhyLiteracy from '../../components/study_youth/why_this'
import LiteracyCollegeImpact from '../../components/study_youth/impact'
import LiteracyModels from '../../components/study_youth/track';
import LiteracyOutcomes from '../../components/study_youth/outcome'
import LiteracyTimeline from '../../components/study_youth/timeline';
// import LiteracyFAQ from '../../compontents/study_youth/kuestion';
import LiteracyFAQ from '../../components/study_youth/kuestion';
// import 

export default function Page() {
  return (
    <div>
        <Navigation/>
        <LiteracyHero/>
        <WhyLiteracy/>
        <LiteracyCollegeImpact/>
        <LiteracyModels/>
        <LiteracyOutcomes/>
        <LiteracyTimeline/>
        <LiteracyFAQ/>
        <Footer/>
    </div>
  )
}
