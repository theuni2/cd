import React from 'react'
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SocialProjectHero from '../../components/sports/hero';
import WhySportsEducation from '../../components/sports/whythis';
import SportsTrackSection from '../../components/sports/track';
import SportsOutcomes from '../../components/sports/outcomes';
import SportsGamePlan from '../../components/sports/timeline';
import SportsFAQ from '../../components/sports/kuestion';

export default function Page() {
  return (
    <div>
<Navigation/>
<SocialProjectHero/>
<WhySportsEducation/>
<SportsTrackSection/>
<SportsOutcomes/>
<SportsGamePlan/>
<SportsFAQ/>
<Footer/>
    </div>
  )
}
