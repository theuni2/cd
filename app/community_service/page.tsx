import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/community/hero'
import WhatStudentsDoSection from '@/components/community/activity'
import HowCommunityServiceWorks from '@/components/community/timeline'
import NGOCollaborationsSection from '@/components/community/ngo'
import OutcomesSection from '@/components/community/outcome'


export default function Page() {
  return (
    <div>
        <Navigation/>
<Hero/>
<WhatStudentsDoSection/>
<HowCommunityServiceWorks/>
<NGOCollaborationsSection/>
<OutcomesSection/>
        <Footer/>
    </div>
  )
}
