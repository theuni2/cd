// "use client";

// import React from "react";
// import { Trophy, Star, MapPin, Award } from "lucide-react";

// export default function PrizesSection() {
//   return (
//     <>
//       <style jsx>{`
//         /* --- SCOPED CSS FOR PRIZES SECTION --- */
//         @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

//         .prizes-section {
//           background-color: #0a2342; /* DARK NAVY */
//           color: #ffffff;
//           padding: 100px 20px;
//           font-family: 'Lato', sans-serif;
//           position: relative;
//           overflow: hidden;
//         }

//         /* DECORATIVE BACKGROUND GLOW */
//         .glow-effect {
//           position: absolute;
//           top: -100px;
//           right: -100px;
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(10, 35, 66, 0) 70%);
//           border-radius: 50%;
//           z-index: 0;
//           pointer-events: none;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 10;
//         }

//         /* HEADER */
//         .section-header {
//           text-center: center;
//           margin-bottom: 80px;
//         }

//         .section-subtitle {
//           color: #c5a059; /* GOLD */
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           background-color: rgba(255, 255, 255, 0.05);
//           padding: 8px 20px;
//           border-radius: 50px;
//           display: inline-block;
//           margin-bottom: 20px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .section-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 48px;
//           font-weight: 700;
//           color: #ffffff;
//           margin: 0;
//         }

//         /* PRIZE GRID */
//         .prize-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//           align-items: stretch;
//         }

//         /* CARD STYLES */
//         .prize-card {
//           background: rgba(255, 255, 255, 0.03);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           padding: 50px 30px;
//           text-align: center;
//           transition: all 0.3s ease;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .prize-card:hover {
//           background: rgba(255, 255, 255, 0.08);
//           transform: translateY(-5px);
//           border-color: rgba(197, 160, 89, 0.5);
//         }

//         /* CENTER HIGHLIGHT CARD */
//         .prize-card.highlight {
//           background: #ffffff;
//           color: #0a2342;
//           transform: scale(1.1); /* Make it bigger */
//           box-shadow: 0 20px 50px rgba(0,0,0,0.3);
//           border: none;
//           z-index: 20;
//           position: relative;
//         }
        
//         .prize-card.highlight:hover {
//            transform: scale(1.1) translateY(-5px);
//         }

//         /* ICONS */
//         .icon-wrapper {
//           margin-bottom: 30px;
//         }

//         /* TEXT STYLES */
//         .prize-name {
//           font-family: 'Playfair Display', serif;
//           font-size: 24px;
//           font-weight: 700;
//           margin-bottom: 15px;
//         }

//         .prize-amount {
//           font-size: 42px;
//           font-weight: 700;
//           color: #c5a059;
//           margin-bottom: 20px;
//           display: block;
//         }

//         .highlight .prize-amount {
//           color: #0a2342; /* Dark blue text on white card */
//           text-shadow: 2px 2px 0px rgba(197, 160, 89, 0.2);
//         }

//         .prize-desc {
//           font-size: 15px;
//           line-height: 1.6;
//           opacity: 0.8;
//           max-width: 280px;
//           margin: 0 auto;
//         }

//         .highlight .prize-desc {
//           color: #555;
//           opacity: 1;
//         }

//         /* BADGE FOR HIGHLIGHT CARD */
//         .best-badge {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%) translateY(-50%);
//           background-color: #c5a059;
//           color: #0a2342;
//           padding: 8px 20px;
//           font-size: 11px;
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           box-shadow: 0 5px 15px rgba(0,0,0,0.2);
//         }

//         /* CTA BUTTON IN HIGHLIGHT CARD */
//         .criteria-btn {
//           margin-top: 30px;
//           padding: 15px 30px;
//           background: transparent;
//           border: 2px solid #0a2342;
//           color: #0a2342;
//           font-weight: 700;
//           text-transform: uppercase;
//           font-size: 12px;
//           letter-spacing: 2px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .criteria-btn:hover {
//           background: #0a2342;
//           color: #ffffff;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 900px) {
//           .prize-grid {
//             grid-template-columns: 1fr;
//             gap: 60px; /* More space between cards on mobile */
//           }
//           .prize-card.highlight {
//             transform: scale(1); /* Reset scale on mobile */
//           }
//           .prize-card.highlight:hover {
//             transform: translateY(-5px);
//           }
//           .section-title { font-size: 36px; }
//         }
//       `}</style>

//       <section className="prizes-section">
//         {/* Background Glow */}
//         <div className="glow-effect"></div>

//         <div className="container">
          
//           <div className="section-header">
//             <span className="section-subtitle">Distinction & Rewards</span>
//             <h2 className="section-title">The Prize</h2>
//           </div>

//           <div className="prize-grid">

//             {/* CARD 1: CATEGORY WINNERS */}
//             <div className="prize-card">
//               <div className="icon-wrapper">
//                 <Star size={48} color="#c5a059" />
//               </div>
//               <h3 className="prize-name">Category Winners</h3>
//               <span className="prize-amount">$2,000</span>
//               <p className="prize-desc">
//                 Awarded to the best essay in each of the 7 subject categories. Includes a Distinction Certificate.
//               </p>
//             </div>

//             {/* CARD 2: GRAND PRIZE (HIGHLIGHT) */}
//             <div className="prize-card highlight">
//               <div className="best-badge">Global Winner</div>
//               <div className="icon-wrapper">
//                 <Trophy size={64} color="#0a2342" />
//               </div>
//               <h3 className="prize-name">Grand Prize</h3>
//               <span className="prize-amount">$10,000</span>
//               <p className="prize-desc">
//                 Full Scholarship to our Summer School in Oxford or Washington D.C. plus an Honorary Junior Fellowship.
//               </p>
//               <button className="criteria-btn">View Evaluation Criteria</button>
//             </div>

//             {/* CARD 3: GALA */}
//             <div className="prize-card">
//               <div className="icon-wrapper">
//                 <MapPin size={48} color="#c5a059" />
//               </div>
//               <h3 className="prize-name">Awards Gala</h3>
//               <span className="prize-amount">London</span>
//               <p className="prize-desc">
//                 Shortlisted candidates are invited to an exclusive Academic Conference and Awards Dinner at the Grosvenor House Hotel.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import React from "react";
import { Trophy, Star, Award, ScrollText } from "lucide-react";

export default function PrizesSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED CSS --- */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

        .prizes-section {
          background-color: #0a2342;
          color: #ffffff;
          padding: 100px 20px;
          font-family: 'Lato', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .glow-effect {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(10, 35, 66, 0) 70%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-subtitle {
          color: #c5a059;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          background-color: rgba(255, 255, 255, 0.05);
          padding: 8px 20px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          margin: 0;
        }

        .prize-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          align-items: stretch;
          margin-bottom: 60px;
        }

        .prize-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 50px 30px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .prize-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
          border-color: rgba(197, 160, 89, 0.5);
        }

        .prize-card.highlight {
          background: #ffffff;
          color: #0a2342;
          transform: scale(1.1);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          border: none;
          z-index: 20;
        }

        .prize-name {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .prize-amount {
          font-size: 36px;
          font-weight: 700;
          color: #c5a059;
          margin-bottom: 20px;
          display: block;
        }

        .highlight .prize-amount { color: #0a2342; }

        .prize-desc {
          font-size: 15px;
          line-height: 1.6;
          opacity: 0.8;
        }

        /* NEW: PARTICIPATION BAR */
        .participation-bar {
          background: rgba(197, 160, 89, 0.1);
          border: 1px dashed rgba(197, 160, 89, 0.4);
          border-radius: 12px;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        .participation-text h4 {
          margin: 0;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #c5a059;
        }

        .participation-text p {
          margin: 5px 0 0 0;
          font-size: 14px;
          opacity: 0.8;
        }

        @media (max-width: 900px) {
          .prize-grid { grid-template-columns: 1fr; gap: 40px; }
          .prize-card.highlight { transform: scale(1); }
          .participation-bar { flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="prizes-section">
        <div className="glow-effect"></div>

        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Distinction & Rewards</span>
            <h2 className="section-title">Recognition of Excellence</h2>
          </div>

          <div className="prize-grid">
            {/* 2nd Place */}
            <div className="prize-card">
              <Award size={48} color="#c5a059" style={{ marginBottom: '20px' }} />
              <h3 className="prize-name">Runner Up</h3>
              <span className="prize-amount">80K Value</span>
              <p className="prize-desc">Direct Mentorship with PhD Scholars to accelerate your writing and academic journey.</p>
            </div>

            {/* 1st Place */}
            <div className="prize-card highlight">
              <div style={{ position: 'absolute', top: 0, background: '#c5a059', color: '#0a2342', padding: '5px 15px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', transform: 'translateY(-50%)' }}>Winner</div>
              <Trophy size={60} color="#0a2342" style={{ marginBottom: '20px' }} />
              <h3 className="prize-name">Grand Prize</h3>
              <span className="prize-amount">1.2L Value</span>
              <p className="prize-desc" style={{ color: '#444' }}>Media Publication + 1-on-1 PhD Mentorship for ultimate academic prestige and global exposure.</p>
            </div>

            {/* 3rd Place */}
            <div className="prize-card">
              <Star size={48} color="#c5a059" style={{ marginBottom: '20px' }} />
              <h3 className="prize-name">Third Prize</h3>
              <span className="prize-amount">40K Value</span>
              <p className="prize-desc">Professional Editorial Review of your manuscript + Exclusive Competition Merchandise.</p>
            </div>
          </div>

          {/* ALL PARTICIPANTS SECTION */}
          <div className="participation-bar">
            <ScrollText size={40} color="#c5a059" />
            <div className="participation-text">
              <h4>Certificate of Participation</h4>
              <p>Every participant will receive a verified digital certificate acknowledging their writing contribution.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}