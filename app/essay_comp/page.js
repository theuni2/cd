import React from 'react'
import CompetitionHero from '../../components/john-lock-essay/hero';

import Footer from '@/components/Footer'
import CompetitionDetails from '../../components/john-lock-essay/comp_detail'
import CompetitionTimeline from '../../components/john-lock-essay/key_deadline'
import WhyCollegesLoveThis from '../../components/john-lock-essay/whythis';
import SimpleCurriculum from '../../components/john-lock-essay/syllabus';

// import Navigation from '../../components/navigation';



export default function Page() {
  return (
    <div>
{/* <Navigation/> */}
<CompetitionHero/>
<CompetitionDetails/>
<CompetitionTimeline/>
<WhyCollegesLoveThis/>
<SimpleCurriculum/>
<Footer/>


    </div>
  )
}
