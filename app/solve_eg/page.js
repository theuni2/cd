// 'use client'

// import React, { useState } from "react";
// import SolveHeroAnimated from '@/components/solve_eg_component/hero'
// import SolveTracksAndRequirements from '@/components/solve_eg_component/track'
// import SolveCriteriaSection from '@/components/solve_eg_component/criteria'
// import SolveTimelineSection from '@/components/solve_eg_component/timeline'
// import SolveValueProp from '@/components/solve_eg_component/value'
// import SolveFAQSection from '@/components/solve_eg_component/fa'
// import SolveRegistrationForm from '@/components/solve_eg_component/form'
// import SolveFooterCTA from '@/components/solve_eg_component/footer'
// import SolveRegistrationModal from '@/components/solveregistrationmodal'
// import { AnimatePresence } from "framer-motion";


// export default function Page() {

// const [isModalOpen, setIsModalOpen] = useState(false);
// const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   return (
//     <div>
//         <SolveHeroAnimated onOpenRegister={() => setIsModalOpen(true)}/>
//         <SolveTracksAndRequirements />
//         <SolveCriteriaSection/>
//         <SolveTimelineSection/>
//         <SolveValueProp/>
//         <SolveFAQSection/>
//         <SolveRegistrationForm/>
//         <SolveFooterCTA/>
//         <SolveRegistrationModal/>
//         <AnimatePresence>
//         {isModalOpen && (
//           <SolveRegistrationModal 
//             isOpen={isModalOpen} 
//             onClose={() => setIsModalOpen(false)} 
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


'use client'

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Custom Component Layer Mapping
import SolveHeroAnimated from '@/components/solve_eg_component/hero';
import SolveTracksAndRequirements from '@/components/solve_eg_component/track';
import SolveCriteriaSection from '@/components/solve_eg_component/criteria';
import SolveTimelineSection from '@/components/solve_eg_component/timeline';
import SolveValueProp from '@/components/solve_eg_component/value';
import SolveFAQSection from '@/components/solve_eg_component/fa';
import SolveRegistrationForm from '@/components/solve_eg_component/form';
import SolveFooterCTA from '@/components/solve_eg_component/footer';
import SolveRegistrationModal from '@/components/solveregistrationmodal';
import SolveAwardSection from '@/components/solve_eg_component/award';

export default function Page() {
  // 1. Fixed duplicate hook definitions 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Centralizing triggers for clean access performance wrappers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ backgroundColor: "#050507", minHeight: "100vh", width: "100%" }}>
      {/* Hero Section (Connected to Modal Trigger) */}
      <SolveHeroAnimated onOpenRegister={openModal} />
      
      {/* Core Structural Information Ecosystem */}
      <SolveTracksAndRequirements />
      {/* <SolveCriteriaSection /> */}
      <SolveTimelineSection />
      <SolveValueProp />
      <SolveAwardSection />
      <SolveFAQSection />
      
      {/* Inline Section-based Form view wrapper */}
      {/* <SolveRegistrationForm /> */}
      
      {/* 3. Added onOpenRegister prop mapping down to the footer CTA section */}
      <SolveFooterCTA onOpenRegister={openModal} />
      
      {/* 4. Removed the duplicate static modal that was floating unrendered */}
      <AnimatePresence>
        {isModalOpen && (
          <SolveRegistrationModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}