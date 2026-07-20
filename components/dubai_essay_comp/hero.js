// "use client"; // Required for the <style> tag to work in App Router

// import React from "react";
// import { BookOpen } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <>
//       {/* --- HARD CODED CSS (ISOLATED) --- */}
//       <style jsx global>{`
//         /* IMPORT PREMIUM TYPOGRAPHY */
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

//         .hero-container {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           min-height: 700px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           background-color: #0d0d11; /* OBSIDIAN BLACK */
//           font-family: 'Lato', sans-serif;
//         }

//         /* FUTURISTIC ARCHITECTURAL BACKGROUND LAYER */
//         .hero-bg-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0.25; /* Highly dimmed to let gold elements pop */
//           z-index: 0;
//           filter: grayscale(30%) contrast(110%);
//         }

//         /* LUXURY GRADIENT OVERLAY (Deep vignette + gold undertone glow) */
//         .hero-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: radial-gradient(circle at center, rgba(223, 183, 108, 0.05) 0%, rgba(13, 13, 17, 0.9) 70%, #0d0d11 100%);
//           z-index: 1;
//         }

//         /* CONTENT LAYER */
//         .hero-content {
//           position: relative;
//           z-index: 10;
//           text-align: center;
//           padding: 0 24px;
//           max-width: 1100px;
//         }

//         /* HIGH-END METALLIC BADGE */
//         .hero-badge {
//           display: inline-block;
//           padding: 6px 20px;
//           margin-bottom: 35px;
//           border: 1px solid rgba(223, 183, 108, 0.3);
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
//           border-radius: 100px;
//           backdrop-filter: blur(12px);
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
//         }
//         .hero-badge-text {
//           background: linear-gradient(90deg, #DFB76C 0%, #B38938 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//         }

//         /* HEADINGS - CINZEL TYPOGRAPHY */
//         .hero-title {
//           font-family: 'Cinzel', serif;
//           font-size: 72px;
//           font-weight: 600;
//           line-height: 1.15;
//           color: #ffffff;
//           margin: 0 0 24px 0;
//           letter-spacing: -1px;
//           text-shadow: 0 20px 40px rgba(0,0,0,0.6);
//         }
        
//         /* LIQUID GOLD TEXT GRADIENT */
//         .hero-title-gold {
//           background: linear-gradient(90deg, #F3D9A1 0%, #DFB76C 30%, #B38938 70%, #8C6621 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           display: block;
//           font-weight: 700;
//           letter-spacing: 1px;
//           margin-top: 8px;
//         }

//         /* SUBTITLE */
//         .hero-subtitle {
//           color: #F4EFE6; /* Desert Sand */
//           opacity: 0.85;
//           font-size: 19px;
//           font-weight: 300;
//           line-height: 1.7;
//           max-width: 750px;
//           margin: 0 auto 55px auto;
//           letter-spacing: 0.8px;
//         }

//         /* BUTTONS */
//         .btn-container {
//           display: flex;
//           justify-content: center;
//           gap: 24px;
//           flex-wrap: wrap;
//         }

//         .btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           padding: 18px 40px;
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//           border-radius: 0px; /* Sharp architectural angles look more luxurious */
//         }

//         /* DISABLED BUTTON - Muted Luxury */
//         .btn-closed {
//           background-color: rgba(255, 255, 255, 0.03);
//           color: rgba(244, 239, 230, 0.3);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           cursor: not-allowed;
//         }

//         /* PRIMARY HOVER ACTION BUTTON */
//         .btn-secondary {
//           background: transparent;
//           border: 1px solid #DFB76C;
//           color: #DFB76C;
//           box-shadow: 0 4px 30px rgba(223, 183, 108, 0.05);
//           cursor: pointer;
//         }
        
//         .btn-secondary:hover {
//           background: linear-gradient(90deg, #DFB76C 0%, #B38938 100%);
//           color: #0d0d11;
//           border-color: transparent;
//           transform: translateY(-3px);
//           box-shadow: 0 12px 30px rgba(179, 137, 56, 0.25);
//         }

//         /* MOBILE RESPONSIVE */
//         @media (max-width: 768px) {
//           .hero-title { font-size: 42px; line-height: 1.25; }
//           .hero-subtitle { font-size: 16px; }
//           .btn-container { flex-direction: column; gap: 16px; }
//           .btn { width: 100%; }
//         }
//       `}</style>

//       {/* --- COMPONENT HTML --- */}
//       <div className="hero-container">
        
//         {/* Background Image - Swapped to a pristine, geometric Dubai aesthetic */}
//         <img 
//           src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=85&w=2070&auto=format&fit=crop" 
//           alt="Futuristic Dubai Architecture" 
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
//             Dubai Global Leaders <br />
//             <span className="hero-title-gold">Essay Competition 2026</span>
//           </h1>

//           <p className="hero-subtitle">
//             Cultivating independent thought and visionary leadership in the next generation of global scholars. 
//             Challenge your intellect on the world's premier academic stage.
//           </p>

//           <div className="btn-container">
//             <button className="btn btn-closed" disabled>
//               REGISTRATION CLOSED
//             </button>
            
//             <a href="#topic" style={{ textDecoration: 'none' }}>
//               <button className="btn btn-secondary">
//                 VIEW TOPICS <BookOpen size={16} />
//               </button>
//             </a>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


// "use client"; // Required for the <style> tag to work in App Router

// import React from "react";
// import { BookOpen, Sparkles } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <>
//       {/* --- HARD CODED CSS (ISOLATED) --- */}
//       <style jsx global>{`
//         /* IMPORT PREMIUM DESIGN FONTS */
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap');

//         .hero-container {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           min-height: 700px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           background-color: #07080b; /* DEEP OBSIDIAN NIGHT */
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         /* FUTURISTIC GLOW EFFECT */
//         .hero-glow-orb {
//           position: absolute;
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(7, 8, 11, 0) 70%);
//           top: 20%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 1;
//           pointer-events: none;
//         }

//         /* DESERT LUXURY IMAGE LAYER */
//         .hero-bg-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0.25; /* Sleek, low-key background visibility */
//           filter: grayscale(30%) contrast(110%);
//           z-index: 0;
//         }

//         /* SMOOTH GRADIENT OVERLAY */
//         .hero-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom, 
//             #07080b 0%, 
//             rgba(7, 8, 11, 0.6) 50%, 
//             #07080b 100%
//           );
//           z-index: 2;
//         }

//         /* CONTENT ARRANGEMENT */
//         .hero-content {
//           position: relative;
//           z-index: 10;
//           text-align: center;
//           padding: 0 24px;
//           max-width: 1100px;
//         }

//         /* HIGH-TECH LUXURY BADGE */
//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 20px;
//           margin-bottom: 35px;
//           border: 1px solid rgba(230, 190, 100, 0.3);
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
//           border-radius: 100px;
//           backdrop-filter: blur(12px);
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
//         }
        
//         .hero-badge-text {
//           color: #e6be64; /* METALLIC CHAMPAGNE GOLD */
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//         }

//         /* HEADINGS WITH CINZEL ARCHITECTURAL FEEL */
//         .hero-title {
//           font-family: 'Cinzel', serif;
//           font-size: 72px;
//           font-weight: 700;
//           line-height: 1.15;
//           color: #ffffff;
//           margin: 0 0 24px 0;
//           letter-spacing: -1px;
//           text-shadow: 0 0 40px rgba(230, 190, 100, 0.15);
//         }
        
//         /* CHROMATIC DESERT GOLD GRADIENT */
//         .hero-title-gold {
//           background: linear-gradient(135deg, #ffffff 10%, #f3d082 50%, #c59b43 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           display: block;
//           font-weight: 900;
//           letter-spacing: 1px;
//           margin-top: 5px;
//         }

//         /* SUBTITLE */
//         .hero-subtitle {
//           color: #b3b9c1;
//           font-size: 19px;
//           font-weight: 300;
//           line-height: 1.7;
//           max-width: 720px;
//           margin: 0 auto 55px auto;
//           letter-spacing: 0.3px;
//         }

//         /* BUTTON LAYOUT */
//         .btn-container {
//           display: flex;
//           justify-content: center;
//           gap: 24px;
//           flex-wrap: wrap;
//         }

//         .btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           padding: 18px 40px;
//           font-size: 13px;
//           font-weight: 600;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//           border-radius: 4px; /* Sharp premium edges */
//         }

//         /* HIGH-END DISABLED BUTTON */
//         .btn-closed {
//           background-color: rgba(255, 255, 255, 0.02);
//           color: rgba(255, 255, 255, 0.25);
//           border: 1px solid rgba(255, 255, 255, 0.07);
//           cursor: not-allowed;
//         }

//         /* GLOWING ACTION BUTTON */
//         .btn-secondary {
//           background: linear-gradient(135deg, #e6be64 0%, #c59b43 100%);
//           border: 1px solid #f3d082;
//           color: #07080b;
//           font-weight: 700;
//           cursor: pointer;
//           box-shadow: 0 4px 25px rgba(197, 155, 67, 0.2);
//         }
        
//         .btn-secondary:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 12px 35px rgba(197, 155, 67, 0.4);
//           background: linear-gradient(135deg, #ffffff 0%, #e6be64 100%);
//         }

//         /* RESPONSIVE DESIGN FOR SMARTPHONES */
//         @media (max-width: 768px) {
//           .hero-title { font-size: 42px; line-height: 1.25; }
//           .hero-subtitle { font-size: 16px; }
//           .btn-container { flex-direction: column-reverse; gap: 16px; }
//           .btn { width: 100%; padding: 16px 24px; }
//           .hero-glow-orb { width: 300px; height: 300px; }
//         }
//       `}</style>

//       {/* --- COMPONENT LAYOUT --- */}
//       <div className="hero-container">
//         {/* Futuristic Ambient Lighting */}
//         <div className="hero-glow-orb"></div>
        
//         {/* Background Landscape */}
//         <img 
//           src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=85&w=2000&auto=format&fit=crop" 
//           alt="Dubai Modern Architecture Background" 
//           className="hero-bg-image"
//         />
        
//         {/* Layer Gradients */}
//         <div className="hero-overlay"></div>

//         {/* Hero Copy & Controls */}
//         <div className="hero-content">
          
//           <div className="hero-badge">
//             <Sparkles size={12} color="#e6be64" />
//             <span className="hero-badge-text">The Career Discovery</span>
//           </div>

//           <h1 className="hero-title">
//             Novus Essay Competition 
//             <span className="hero-title-gold">Dubai Prize 2026</span>
//           </h1>

//           <p className="hero-subtitle">
//             Cultivating independent thought in the next generation of global scholars. 
//             Challenge your intellect against the world's brightest minds in the city of the future.
//           </p>

//           <div className="btn-container">
//             <button className="btn btn-closed" disabled>
//               Registration Closed
//             </button>
            
//             <a href="#topic" style={{ textDecoration: 'none' }}>
//               <button className="btn btn-secondary">
//                 Explore Topics <BookOpen size={16} />
//               </button>
//             </a>
//           </div>

//         </div>
//       </div>
//     </>
//   );h
// }

// "use client"; // Required for the <style> tag to work in App Router

// import React from "react";
// import { BookOpen, Sparkles, Send } from "lucide-react";


// export default function HeroSection({ onSubmitClick }) {
//   return (
//     <>
//       {/* --- HARD CODED CSS (ISOLATED) --- */}
//       <style jsx global>{`
//         /* IMPORT PREMIUM DESIGN FONTS */
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap');

//         .hero-container {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           min-height: 700px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           background-color: #07080b; /* DEEP OBSIDIAN NIGHT */
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         /* FUTURISTIC GLOW EFFECT */
//         .hero-glow-orb {
//           position: absolute;
//           width: 600px;
//           height: 600px;
//           background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(7, 8, 11, 0) 70%);
//           top: 20%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 1;
//           pointer-events: none;
//         }

//         /* DESERT LUXURY IMAGE LAYER */
//         .hero-bg-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           opacity: 0.25; /* Sleek, low-key background visibility */
//           filter: grayscale(30%) contrast(110%);
//           z-index: 0;
//         }

//         /* SMOOTH GRADIENT OVERLAY */
//         .hero-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom, 
//             #07080b 0%, 
//             rgba(7, 8, 11, 0.6) 50%, 
//             #07080b 100%
//           );
//           z-index: 2;
//         }

//         /* CONTENT ARRANGEMENT */
//         .hero-content {
//           position: relative;
//           z-index: 10;
//           text-align: center;
//           padding: 0 24px;
//           max-width: 1100px;
//         }

//         /* HIGH-TECH LUXURY BADGE */
//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 20px;
//           margin-bottom: 35px;
//           border: 1px solid rgba(230, 190, 100, 0.3);
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
//           border-radius: 100px;
//           backdrop-filter: blur(12px);
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
//         }
        
//         .hero-badge-text {
//           color: #e6be64; /* METALLIC CHAMPAGNE GOLD */
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//         }

//         /* HEADINGS WITH CINZEL ARCHITECTURAL FEEL */
//         .hero-title {
//           font-family: 'Cinzel', serif;
//           font-size: 72px;
//           font-weight: 700;
//           line-height: 1.15;
//           color: #ffffff;
//           margin: 0 0 24px 0;
//           letter-spacing: -1px;
//           text-shadow: 0 0 40px rgba(230, 190, 100, 0.15);
//         }
        
//         /* CHROMATIC DESERT GOLD GRADIENT */
//         .hero-title-gold {
//           background: linear-gradient(135deg, #ffffff 10%, #f3d082 50%, #c59b43 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           display: block;
//           font-weight: 900;
//           letter-spacing: 1px;
//           margin-top: 5px;
//         }

//         /* SUBTITLE */
//         .hero-subtitle {
//           color: #b3b9c1;
//           font-size: 19px;
//           font-weight: 300;
//           line-height: 1.7;
//           max-width: 720px;
//           margin: 0 auto 55px auto;
//           letter-spacing: 0.3px;
//         }

//         /* BUTTON LAYOUT */
//         .btn-container {
//           display: flex;
//           justify-content: center;
//           gap: 24px;
//           flex-wrap: wrap;
//         }

//         .btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           padding: 18px 40px;
//           font-size: 13px;
//           font-weight: 600;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//           border-radius: 4px; /* Sharp premium edges */
//         }

//         /* PREMIUM SUBMIT ACTION BUTTON */
//         .btn-primary {
//           background-color: transparent;
//           color: #ffffff;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           cursor: pointer;
//         }

//         .btn-primary:hover {
//           background-color: #ffffff;
//           color: #07080b;
//           border-color: #ffffff;
//           transform: translateY(-3px);
//           box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
//         }

//         /* GLOWING ACTION BUTTON */
//         .btn-secondary {
//           background: linear-gradient(135deg, #e6be64 0%, #c59b43 100%);
//           border: 1px solid #f3d082;
//           color: #07080b;
//           font-weight: 700;
//           cursor: pointer;
//           box-shadow: 0 4px 25px rgba(197, 155, 67, 0.2);
//         }
        
//         .btn-secondary:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 12px 35px rgba(197, 155, 67, 0.4);
//           background: linear-gradient(135deg, #ffffff 0%, #e6be64 100%);
//         }

//         /* RESPONSIVE DESIGN FOR SMARTPHONES */
//         @media (max-width: 768px) {
//           .hero-title { font-size: 42px; line-height: 1.25; }
//           .hero-subtitle { font-size: 16px; }
//           .btn-container { flex-direction: column; gap: 16px; }
//           .btn { width: 100%; padding: 16px 24px; }
//           .hero-glow-orb { width: 300px; height: 300px; }
//         }
//       `}</style>

//       {/* --- COMPONENT LAYOUT --- */}
//       <div className="hero-container">
//         {/* Futuristic Ambient Lighting */}
//         <div className="hero-glow-orb"></div>
        
//         {/* Background Landscape */}
//         <img 
//           src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=85&w=2000&auto=format&fit=crop" 
//           alt="Dubai Modern Architecture Background" 
//           className="hero-bg-image"
//         />
        
//         {/* Layer Gradients */}
//         <div className="hero-overlay"></div>

//         {/* Hero Copy & Controls */}
//         <div className="hero-content">
          
//           <div className="hero-badge">
//             <Sparkles size={12} color="#e6be64" />
//             <span className="hero-badge-text">The Career Discovery</span>
//           </div>

//           <h1 className="hero-title">
//             Novus Essay Competition 
//             <span className="hero-title-gold">Dubai Prize 2026</span>
//           </h1>

//           <p className="hero-subtitle">
//             Cultivating independent thought in the next generation of global scholars. 
//             Challenge your intellect against the world's brightest minds in the city of the future.
//           </p>

//           <div className="btn-container">
//             <button className="btn btn-primary" onClick={onSubmitClick}>
//               Submit Essay <Send size={15} />
//             </button>
            
//             <a href="#topic" style={{ textDecoration: 'none' }}>
//               <button className="btn btn-secondary">
//                 Explore Topics <BookOpen size={16} />
//               </button>
//             </a>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


"use client"; // Required for the <style> tag to work in App Router

import React from "react";
import { BookOpen, Sparkles, Send } from "lucide-react";


export default function HeroSection({ onSubmitClick }) {
  return (
    <>
      {/* --- HARD CODED CSS (ISOLATED) --- */}
      <style jsx global>{`
        /* IMPORT PREMIUM DESIGN FONTS */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap');

        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #07080b; /* DEEP OBSIDIAN NIGHT */
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* FUTURISTIC GLOW EFFECT */
        .hero-glow-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(7, 8, 11, 0) 70%);
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          pointer-events: none;
        }

        /* DESERT LUXURY IMAGE LAYER */
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.25; /* Sleek, low-key background visibility */
          filter: grayscale(30%) contrast(110%);
          z-index: 0;
        }

        /* SMOOTH GRADIENT OVERLAY */
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            #07080b 0%, 
            rgba(7, 8, 11, 0.6) 50%, 
            #07080b 100%
          );
          z-index: 2;
        }

        /* CONTENT ARRANGEMENT */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          max-width: 1100px;
        }

        /* HIGH-TECH LUXURY BADGE */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          margin-bottom: 35px;
          border: 1px solid rgba(230, 190, 100, 0.3);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border-radius: 100px;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
        }
        
        .hero-badge-text {
          color: #e6be64; /* METALLIC CHAMPAGNE GOLD */
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        /* HEADINGS WITH CINZEL ARCHITECTURAL FEEL */
        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: 72px;
          font-weight: 700;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 24px 0;
          letter-spacing: -1px;
          text-shadow: 0 0 40px rgba(230, 190, 100, 0.15);
        }
        
        /* CHROMATIC DESERT GOLD GRADIENT */
        .hero-title-gold {
          background: linear-gradient(135deg, #ffffff 10%, #f3d082 50%, #c59b43 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-display: block; /* Fixed prefix variant if using global styles */
          display: block;
          font-weight: 900;
          letter-spacing: 1px;
          margin-top: 5px;
        }

        /* SUBTITLE */
        .hero-subtitle {
          color: #b3b9c1;
          font-size: 19px;
          font-weight: 300;
          line-height: 1.7;
          max-width: 800px; /* Slightly widened to gracefully hold the text */
          margin: 0 auto 55px auto;
          letter-spacing: 0.3px;
        }

        /* BUTTON LAYOUT */
        .btn-container {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 40px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 4px; /* Sharp premium edges */
        }

        /* PREMIUM SUBMIT ACTION BUTTON */
        .btn-primary {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #ffffff;
          color: #07080b;
          border-color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        }

        /* GLOWING ACTION BUTTON */
        .btn-secondary {
          background: linear-gradient(135deg, #e6be64 0%, #c59b43 100%);
          border: 1px solid #f3d082;
          color: #07080b;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 25px rgba(197, 155, 67, 0.2);
        }
        
        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(197, 155, 67, 0.4);
          background: linear-gradient(135deg, #ffffff 0%, #e6be64 100%);
        }

        /* RESPONSIVE DESIGN FOR SMARTPHONES */
        @media (max-width: 768px) {
          .hero-title { font-size: 42px; line-height: 1.25; }
          .hero-subtitle { font-size: 16px; }
          .btn-container { flex-direction: column; gap: 16px; }
          .btn { width: 100%; padding: 16px 24px; }
          .hero-glow-orb { width: 300px; height: 300px; }
        }
      `}</style>

      {/* --- COMPONENT LAYOUT --- */}
      <div className="hero-container">
        {/* Futuristic Ambient Lighting */}
        <div className="hero-glow-orb"></div>
        
        {/* Background Landscape */}
        <img 
          src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=85&w=2000&auto=format&fit=crop" 
          alt="Dubai Modern Architecture Background" 
          className="hero-bg-image"
        />
        
        {/* Layer Gradients */}
        <div className="hero-overlay"></div>

        {/* Hero Copy & Controls */}
        <div className="hero-content">
          
          <div className="hero-badge">
            <Sparkles size={12} color="#e6be64" />
            <span className="hero-badge-text">The Career Discovery</span>
          </div>

          <h1 className="hero-title">
            Novus Dubai Essay Competition 
            <span className="hero-title-gold">Dubai Prize 2026</span>
          </h1>

          <p className="hero-subtitle">
            Novus means a bright star—and that is exactly the kind of scholar we are preparing through this competition. 
            Cultivating independent thought in the next generation of leaders, we challenge your intellect against the 
            world's brightest minds in the city of the future.
          </p>

          <div className="btn-container">
            <button className="btn btn-primary" onClick={onSubmitClick}>
              Submit Essay <Send size={15} />
            </button>
            
            <a href="#topic" style={{ textDecoration: 'none' }}>
              <button className="btn btn-secondary">
                Explore Topics <BookOpen size={16} />
              </button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}