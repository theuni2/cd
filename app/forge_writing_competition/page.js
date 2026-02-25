import React from 'react'
import HeroSection from '../../components/forge_comp/hero';
import AboutSection from '../../components/forge_comp/second';
import CategoriesSection from '../../components/forge_comp/three';
import PrizesSection from '../../components/forge_comp/four';
import JudgesSection from '../../components/forge_comp/five';
import RulesSection from '../../components/forge_comp/six';
import FaqSection from '../../components/forge_comp/eight';
import FormSection from '../../components/forge_comp/form';
import RoadmapSection from '../../components/forge_comp/roadmap';
import Footer from '../../components/forge_comp/seven';

export default function Page() {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <CategoriesSection/>
        <PrizesSection/>
        <RoadmapSection/>
        <FormSection/>
        <JudgesSection/>
        <RulesSection/>
        <FaqSection/>
        <Footer/>
    
    </div>
  )
}
