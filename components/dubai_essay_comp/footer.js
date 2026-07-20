// "use client";

// import React from "react";
// import { Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <>
//       <style jsx>{`
//         /* --- SCOPED LUXURY CSS FOR FOOTER --- */
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

//         .site-footer {
//           background-color: #07080b; /* Consistent Deep Obsidian Dark Theme */
//           color: #a0aec0;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           padding-top: 100px;
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//           position: relative;
//           overflow: hidden;
//         }

//         .container {
//           max-width: 1100px;
//           margin: 0 auto;
//           padding: 0 20px;
//           position: relative;
//           z-index: 10;
//         }

//         /* GLOW ACCENTS */
//         .glow-effect {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 600px;
//           height: 150px;
//           background: radial-gradient(circle, rgba(230, 190, 100, 0.03) 0%, rgba(7, 8, 11, 0) 70%);
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* TOP SECTION: CTA */
//         .footer-cta {
//           text-align: center;
//           padding-bottom: 80px;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//           margin-bottom: 60px;
//         }

//         .footer-title {
//           font-family: 'Cinzel', serif;
//           font-size: 38px;
//           font-weight: 700;
//           color: #ffffff;
//           margin-bottom: 25px;
//           letter-spacing: -0.5px;
//         }

//         .title-gold {
//           background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .footer-btn-closed {
//           background: rgba(255, 255, 255, 0.02);
//           color: rgba(255, 255, 255, 0.25);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           padding: 16px 36px;
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           cursor: not-allowed;
//           display: inline-block;
//           border-radius: 4px;
//           transition: all 0.3s ease;
//         }

//         /* MIDDLE SECTION: LINKS */
//         .footer-content {
//           display: grid;
//           grid-template-columns: 2fr 1fr;
//           gap: 60px;
//           padding-bottom: 60px;
//         }

//         .brand-title {
//           font-family: 'Cinzel', serif;
//           color: #e6be64;
//           font-size: 16px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           margin: 0 0 15px 0;
//         }

//         .brand-col p {
//           font-size: 14px;
//           line-height: 1.7;
//           max-width: 380px;
//           color: #a0aec0;
//           margin: 0;
//         }

//         .footer-col h4 {
//           color: #ffffff;
//           font-size: 12px;
//           text-transform: uppercase;
//           letter-spacing: 3px;
//           margin-bottom: 20px;
//           font-weight: 700;
//         }

//         .footer-links {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .contact-item {
//           display: flex;
//           gap: 12px;
//           align-items: center;
//           font-size: 14px;
//           color: #a0aec0;
//           transition: color 0.3s ease;
//         }

//         .contact-item:hover {
//           color: #e6be64;
//         }

//         .contact-icon {
//           color: #e6be64;
//         }

//         /* BOTTOM SECTION: COPYRIGHT */
//         .footer-bottom {
//           background-color: #040507;
//           border-top: 1px solid rgba(255, 255, 255, 0.02);
//           padding: 30px 0;
//           text-align: center;
//           font-size: 12px;
//           color: #4a5568;
//           letter-spacing: 0.5px;
//         }

//         .footer-bottom-links {
//           margin-top: 10px;
//         }

//         .footer-bottom-links span {
//           margin: 0 10px;
//           cursor: pointer;
//           transition: color 0.3s ease;
//         }

//         .footer-bottom-links span:hover {
//           color: #e6be64;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 768px) {
//           .footer-content { grid-template-columns: 1fr; gap: 40px; }
//           .footer-title { font-size: 30px; }
//           .brand-col p { max-width: 100%; }
//         }
//       `}</style>

//       <footer className="site-footer">
//         <div className="glow-effect"></div>

//         <div className="container">
          
//           {/* FINAL CTA */}
//           {/* <div className="footer-cta">
//             <h2 className="footer-title">
//               The 2026 <span className="title-gold">Essay Competition</span>
//             </h2>
//             <button className="footer-btn-closed" disabled>
//               Registration Closed
//             </button>
//           </div> */}

//           {/* LINKS GRID */}
//           <div className="footer-content">
            
//             <div className="brand-col">
//              <h3 className="brand-title">
//   Novus Supported by Uni Discovery Counselors
// </h3>
//               <p>
//                 Cultivating independent thought, precision writing, and scholarly rigor in the next generation of global leaders.
//               </p>
//             </div>

//             <div className="footer-col">
//               <h4>Contact</h4>
//               <ul className="footer-links">
//                 <li>
//                   <a href="mailto:contact@thecareerdiscovery.com" className="contact-item">
//                     <Mail size={16} className="contact-icon" /> contact@thecareerdiscovery.com
//                   </a>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="footer-bottom">
//           <div className="container">
//             <div>
//               &copy; 2026 The Career Discovery. All Rights Reserved.
//             </div>
//             <div className="footer-bottom-links">
//               <span>Privacy Policy</span> | <span>Terms of Service</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }


"use client";

import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
   <style jsx>{`
        /* --- SCOPED LUXURY CSS FOR FOOTER --- */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

        .site-footer {
          background-color: #07080b; /* Consistent Deep Obsidian Dark Theme */
          color: #a0aec0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding-top: 80px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        /* GLOW ACCENTS */
        .glow-effect {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 150px;
          background: radial-gradient(circle, rgba(230, 190, 100, 0.03) 0%, rgba(7, 8, 11, 0) 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* MIDDLE SECTION: LINKS */
        .footer-content {
          display: grid;
          grid-template-columns: 1.8fr 1.2fr;
          gap: 60px;
          padding-bottom: 60px;
        }

        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .brand-title {
          font-family: 'Cinzel', serif;
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin: 0;
        }

        .brand-title-gold {
          background: linear-gradient(135deg, #ffffff 40%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          font-size: 13px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-top: 5px;
          font-weight: 600;
        }

        /* PARTNERS ECOSYSTEM FRAME */
        .partners-container {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .partner-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .partner-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #718096;
          font-weight: 600;
        }

        .partner-logo-box {
          height: 32px;
          display: flex;
          align-items: center;
        }

        /* CORRECTED: Removed aggressive filters preventing visibility */
        .partner-logo-img {
          height: 100%;
          max-width: 140px; /* Prevents logos from stretching unnaturally */
          width: auto;
          object-fit: contain;
          opacity: 0.75; /* Softened elegant default state */
          transition: opacity 0.3s ease;
        }

        .partner-logo-img:hover {
          opacity: 1; /* Crisp view on hover */
        }

        .footer-col h4 {
          color: #ffffff;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 14px;
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: #e6be64;
        }

        .contact-icon {
          color: #e6be64;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* BOTTOM SECTION: COPYRIGHT */
        .footer-bottom {
          background-color: #040507;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
          padding: 30px 0;
          text-align: center;
          font-size: 12px;
          color: #4a5568;
          letter-spacing: 0.5px;
        }

        .footer-bottom-links {
          margin-top: 10px;
        }

        .footer-bottom-links span {
          margin: 0 10px;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-bottom-links span:hover {
          color: #e6be64;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .footer-content { grid-template-columns: 1fr; gap: 40px; }
          .partners-container { gap: 30px; }
        }
      `}</style>

      <footer className="site-footer">
        <div className="glow-effect"></div>

        <div className="container">
          <div className="footer-content">
            
            {/* BRANDING & PARTNERS COLUMN */}
            <div className="brand-col">
              <div>
                <h3 className="brand-title">
                  NOVUS <span className="brand-title-gold">Dubai Essay Competition</span>
                </h3>
              </div>
              
              {/* Strategic Brand Partners Architecture */}
              <div className="partners-container">
                
                {/* Education Partner Block */}
                <div className="partner-block">
                  <span className="partner-label">Education Partner Uni Discovery</span>
                  <div className="partner-logo-box">
                    <img 
                      src="/ud_logo.jpeg" /* Replace with your Uni Discovery logo asset path */
                      alt="Uni Discovery" 
                      className="partner-logo-img" 
                    />
                  </div>
                </div>

                {/* Media Partner Block */}
      

              </div>
            </div>

            {/* COMMUNICATIONS & SOCIAL CHANNELS */}
            <div className="footer-col">
              <h4>Connect With Us</h4>
              <ul className="footer-links">
                
                {/* Email Channel */}
                <li>
                  <a href="mailto:contact@thecareerdiscovery.com" className="contact-item">
                    <span className="contact-icon"><Mail size={16} /></span>
                    <span>contact@thecareerdiscovery.com</span>
                  </a>
                </li>

                {/* Instagram Channel */}
                <li>
                  <a href="https://www.instagram.com/thecareerdiscovery" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span className="contact-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </span>
                    <span>@thecareerdiscovery</span>
                  </a>
                </li>

                {/* LinkedIn Channel */}
                <li>
                  <a href="https://www.linkedin.com/company/106448793/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span className="contact-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </span>
                    <span>Career Discovery</span>
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT MATRICES */}
        <div className="footer-bottom">
          <div className="container">
            <div>
              &copy; 2026 The Career Discovery. All Rights Reserved.
            </div>
            <div className="footer-bottom-links">
              <span>Privacy Policy</span> | <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}