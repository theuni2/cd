"use client";
import React, { useState } from "react";
import HeroSection from '../../components/dubai_essay_comp/hero';
import AboutSection from '../../components/dubai_essay_comp/two';
import CategoriesSection from '../../components/dubai_essay_comp/three';
import PrizesSection from '../../components/dubai_essay_comp/four';
import JudgesSection from '../../components/dubai_essay_comp/five';
import RulesSection from '../../components/dubai_essay_comp/six';
import Footer from '../../components/dubai_essay_comp/footer';
import FaqSection from '../../components/dubai_essay_comp/seven';
import SubmitModal from "../../components/dubai_essay_comp/form";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <HeroSection onSubmitClick={() => setIsModalOpen(true)} />
      <AboutSection />
      <CategoriesSection />
      <PrizesSection />
      <JudgesSection />
      <RulesSection />
      
      {/* Handshake fixed: Passing both isOpen and onClose */}
      <SubmitModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <FaqSection />
      <Footer />
    </div>
  )
}
