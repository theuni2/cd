import React from 'react'
import CompetitionHero from '../../components/john-lock-essay/hero';

import Footer from '@/components/Footer'
import CompetitionDetails from '../../components/john-lock-essay/comp_detail'
import CompetitionTimeline from '../../components/john-lock-essay/key_deadline'
import WhyCollegesLoveThis from '../../components/john-lock-essay/whythis';
import SimpleCurriculum from '../../components/john-lock-essay/syllabus';
import WhyUniversitiesLove from '../../components/john-lock-essay/why';
import MentorshipModel from '../../components/john-lock-essay/mentorshipmodel';
import SuccessShowcase from '../../components/john-lock-essay/show';
import ProgramSnapshot from '../../components/john-lock-essay/snapshot';

// import Navigation from '../../components/navigation';



export default function Page() {
  return (
    <div>
{/* <Navigation/> */}
<CompetitionHero/>
<ProgramSnapshot/>
{/* <CompetitionDetails/> */}
{/* <CompetitionTimeline/> */}
<MentorshipModel/>
<WhyUniversitiesLove/>
{/* <WhyCollegesLoveThis/> */}
<SimpleCurriculum/>
<SuccessShowcase/>
<Footer/>


    </div>
  )
}
