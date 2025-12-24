import React from 'react'
import Footer from '@/components/Footer';
import Hero from '@/components/podcast/hero';
import PodcastEssentials from '@/components/podcast/PodcastEssentials';
import PodcastJourney from '@/components/podcast/timeline';
import PodcastFAQ from '@/components/podcast/kestion';
import PodcastOutcomes from '@/components/podcast/outcome';

export default function Page() {
  return (
    <div>
        
        <Hero/>
        <PodcastEssentials/>
        <PodcastJourney/>
        <PodcastOutcomes/>
        <PodcastFAQ/>
        <Footer/>

    </div>
  )
}
