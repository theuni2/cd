import React from 'react'
import HeroSection from '@/components/pitch_challenge/hero';
import HowItWorksAndPrizes from '@/components/pitch_challenge/howitwork';
import SubmissionPortal from '@/components/pitch_challenge/submission';
import JudgesAndExemplars from '@/components/pitch_challenge/judge';
import TopicPrompts from '@/components/pitch_challenge/prompt';
import FAQAndFooter from '@/components/pitch_challenge/faq';
import CompetitionGuidelines from '@/components/pitch_challenge/guildlines';

export default function PitchCompetition() {
  return (
    <div>
       <HeroSection/> 
       <HowItWorksAndPrizes/>
       <JudgesAndExemplars/>
       <TopicPrompts/>
       <CompetitionGuidelines/>
       <SubmissionPortal/>
       <FAQAndFooter/>
    </div>
  )
}