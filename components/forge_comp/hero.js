// "use client"; // Required for the <style> tag to work in App Router

// import React from "react";
// import { useState } from "react";
// import { ChevronRight, Download,BookOpen} from "lucide-react";
// import SubmitModal from "./form"; 


// export default function HeroSection() {

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       {/* --- HARD CODED CSS (ISOLATED) --- */}
//       <style jsx global>{`
//         /* IMPORT FONTS DIRECTLY TO ENSURE THEY LOAD */
//         @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

//         .hero-container {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           min-height: 600px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           background-color: #0a2342; /* HARD FALLBACK: DARK BLUE */
//           font-family: 'Lato', sans-serif;
//         }

//         /* IMAGE LAYER */
//         .hero-bg-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0.5; /* Dim the image so text pops */
//           z-index: 0;
//         }

//         /* OVERLAY GRADIENT */
//         .hero-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(to bottom, #0a2342 0%, rgba(10, 35, 66, 0.4) 50%, #0a2342 100%);
//           z-index: 1;
//         }

//         /* CONTENT LAYER */
//         .hero-content {
//           position: relative;
//           z-index: 10;
//           text-align: center;
//           padding: 0 20px;
//           max-width: 1200px;
//         }

//         /* BADGE */
//         .hero-badge {
//           display: inline-block;
//           padding: 8px 24px;
//           margin-bottom: 30px;
//           border: 1px solid rgba(197, 160, 89, 0.5);
//           background-color: rgba(10, 35, 66, 0.6);
//           border-radius: 50px;
//           backdrop-filter: blur(5px);
//         }
//         .hero-badge-text {
//           color: #c5a059; /* GOLD */
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//         }

//         /* HEADINGS */
//         .hero-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 80px;
//           font-weight: 700;
//           line-height: 1.1;
//           color: #ffffff;
//           margin: 0 0 20px 0;
//           text-shadow: 0 10px 30px rgba(0,0,0,0.5);
//         }
//         .hero-title-gold {
//           color: #c5a059; /* GOLD */
//           display: block;
//         }

//         /* SUBTITLE */
//         .hero-subtitle {
//           color: #e0e0e0;
//           font-size: 20px;
//           font-weight: 300;
//           line-height: 1.6;
//           max-width: 700px;
//           margin: 0 auto 50px auto;
//           letter-spacing: 0.5px;
//         }

//         /* BUTTONS */
//         .btn-container {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           flex-wrap: wrap;
//         }

//         .btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           padding: 16px 36px;
//           font-size: 14px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border-radius: 2px;
//         }

//         .btn-primary {
//           background-color: #c5a059;
//           color: #0a2342;
//           border: none;
//           box-shadow: 0 0 20px rgba(197, 160, 89, 0.3);
//         }
//         .btn-primary:hover {
//           background-color: #ffffff;
//           transform: translateY(-2px);
//         }

//         .btn-secondary {
//           background-color: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           color: #ffffff;
//           backdrop-filter: blur(5px);
//         }
//         .btn-secondary:hover {
//           background-color: #ffffff;
//           color: #0a2342;
//           transform: translateY(-2px);
//         }

//         /* MOBILE RESPONSIVE */
//         @media (max-width: 768px) {
//           .hero-title { font-size: 48px; }
//           .hero-subtitle { font-size: 16px; }
//           .btn-container { flex-direction: column; }
//           .btn { width: 100%; }
//         }
//       `}</style>

//       {/* --- COMPONENT HTML --- */}
//       <div className="hero-container">
        
//         {/* Background Image (Standard HTML img tag for absolute reliability) */}
//         <img 
//           src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=85&w=2070&auto=format&fit=crop" 
//           alt="Library Background" 
//           className="hero-bg-image"
//         />
        
//         {/* Overlay */}
//         <div className="hero-overlay"></div>

//         {/* Content */}
//         <div className="hero-content">
          
//           <div className="hero-badge">
//             <span className="hero-badge-text">The Career Discovery</span>
//           </div>

//           <h1 className="hero-title">
//             FORGE Essay Competition <br />
//             <span className="hero-title-gold">Prize 2026</span>
//           </h1>

//           <p className="hero-subtitle">
//             Cultivating independent thought in the next generation of scholars. 
//             Challenge your intellect against the world's brightest minds.
//           </p>

//           <div className="btn-container">
//             <button className="btn btn-primary"
//             onClick={() => setIsModalOpen(true)}
//             >

//               REGISTER NOW <ChevronRight size={16} />
//             </button>
//             <a href="#topic">
//             <button className="btn btn-secondary" >
//               VIEW TOPICS <BookOpen size={16} />
//             </button>
//             </a>
//           </div>

//         </div>
//       </div>

//       <SubmitModal 
//   isOpen={isModalOpen} 
//   onClose={() => setIsModalOpen(false)} 
// />

//     </>
//   );
// }

"use client"; // Required for the <style> tag to work in App Router

import React from "react";
import { BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* --- HARD CODED CSS (ISOLATED) --- */}
      <style jsx global>{`
        /* IMPORT FONTS DIRECTLY TO ENSURE THEY LOAD */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0a2342; /* HARD FALLBACK: DARK BLUE */
          font-family: 'Lato', sans-serif;
        }

        /* IMAGE LAYER */
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5; /* Dim the image so text pops */
          z-index: 0;
        }

        /* OVERLAY GRADIENT */
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #0a2342 0%, rgba(10, 35, 66, 0.4) 50%, #0a2342 100%);
          z-index: 1;
        }

        /* CONTENT LAYER */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
          max-width: 1200px;
        }

        /* BADGE */
        .hero-badge {
          display: inline-block;
          padding: 8px 24px;
          margin-bottom: 30px;
          border: 1px solid rgba(197, 160, 89, 0.5);
          background-color: rgba(10, 35, 66, 0.6);
          border-radius: 50px;
          backdrop-filter: blur(5px);
        }
        .hero-badge-text {
          color: #c5a059; /* GOLD */
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* HEADINGS */
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 80px;
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin: 0 0 20px 0;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .hero-title-gold {
          color: #c5a059; /* GOLD */
          display: block;
        }

        /* SUBTITLE */
        .hero-subtitle {
          color: #e0e0e0;
          font-size: 20px;
          font-weight: 300;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 50px auto;
          letter-spacing: 0.5px;
        }

        /* BUTTONS */
        .btn-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 36px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .btn-closed {
          background-color: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: not-allowed;
        }

        .btn-secondary {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          backdrop-filter: blur(5px);
          cursor: pointer;
        }
        .btn-secondary:hover {
          background-color: #ffffff;
          color: #0a2342;
          transform: translateY(-2px);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .hero-title { font-size: 48px; }
          .hero-subtitle { font-size: 16px; }
          .btn-container { flex-direction: column; }
          .btn { width: 100%; }
        }
      `}</style>

      {/* --- COMPONENT HTML --- */}
      <div className="hero-container">
        
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=85&w=2070&auto=format&fit=crop" 
          alt="Library Background" 
          className="hero-bg-image"
        />
        
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">
          
          <div className="hero-badge">
            <span className="hero-badge-text">The Career Discovery</span>
          </div>

          <h1 className="hero-title">
            FORGE Essay Competition <br />
            <span className="hero-title-gold">Prize 2026</span>
          </h1>

          <p className="hero-subtitle">
            Cultivating independent thought in the next generation of scholars. 
            Challenge your intellect against the world's brightest minds.
          </p>

          <div className="btn-container">
            <button className="btn btn-closed" disabled>
              REGISTRATION CLOSED
            </button>
            
            <a href="#topic">
              <button className="btn btn-secondary">
                VIEW TOPICS <BookOpen size={16} />
              </button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}