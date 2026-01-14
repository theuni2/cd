import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import StartupHero from '../../components/startup/hero';
import CollegeValue from '../../components/startup/whythis'
import WhyWeHelp from '../../components/startup/whywehelp'
import StartupTimeline from '../../components/startup/timeline';
import StartupIdeas from '../../components/startup/startupIdeas'
import StartupFAQ from '../../components/startup/kuestion';
// import 

export default function Page() {
  return (
    <div>

        <Navigation/>
        <StartupHero/>
        <CollegeValue/>
        <WhyWeHelp/>
        <StartupTimeline/>
        <StartupIdeas/>
        {/* <AICTAButton/> */}
        <StartupFAQ/>
        <Footer/>


    </div>
  )
}
