'use client'

import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import Plans from '../components/Plans'
import MobilePlans from '../components/MobilePlans'
// import LaunchpadComparison from '../components/compare'
import SuccessStories from '../components/SuccessStories'
import CareerForm from '../components/CareerForm'
import Footer from '../components/Footer'
import SignatureProgramsSection from '../components/signature_program';
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 200) // wait for DOM render
      }
    }
  }, [])
  return (
    <main className="scroll-smooth">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <WhoWeAre />
      </section>
      <SignatureProgramsSection/>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      {/* <section id="services">
        <Services />
      </section> */}
      {/* <LaunchpadComparison /> */}
      {/* <Plans /> */}
      {/* <MobilePlans /> */}
      <section id="success-stories">
        <SuccessStories />
      </section>
      <section id="contact">
        <CareerForm />
      </section>
      <Footer />
    </main>
  )
}

