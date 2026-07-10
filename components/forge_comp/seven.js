// "use client";

// import React from "react";
// import { useState } from "react";
// import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
// import SubmitModal from "./form"; 


// export default function Footer() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <>
//       <style jsx>{`
//         /* --- SCOPED CSS FOR FOOTER --- */
//         @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@700&display=swap');

//         .site-footer {
//           background-color: #051121; /* Very Dark Blue (almost black) */
//           color: #a0aec0;
//           font-family: 'Lato', sans-serif;
//           padding-top: 80px;
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         /* TOP SECTION: CTA */
//         .footer-cta {
//           text-align: center;
//           padding-bottom: 80px;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           margin-bottom: 60px;
//         }

//         .footer-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 36px;
//           color: #ffffff;
//           margin-bottom: 30px;
//         }

//         .footer-btn {
//           background-color: #c5a059;
//           color: #051121;
//           padding: 18px 40px;
//           font-size: 14px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           border: none;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .footer-btn:hover {
//           background-color: #ffffff;
//           transform: translateY(-2px);
//         }

//         /* MIDDLE SECTION: LINKS */
//         .footer-content {
//           display: grid;
//           grid-template-columns: 2fr 1fr 1fr 1fr;
//           gap: 40px;
//           padding-bottom: 60px;
//         }

//         .brand-col p {
//           font-size: 14px;
//           line-height: 1.6;
//           max-width: 300px;
//           margin-top: 20px;
//         }

//         .footer-col h4 {
//           color: #ffffff;
//           font-size: 14px;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           margin-bottom: 25px;
//           font-weight: 700;
//         }

//         .footer-links {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .footer-links li {
//           margin-bottom: 15px;
//         }

//         .footer-links a {
//           color: #a0aec0;
//           text-decoration: none;
//           font-size: 14px;
//           transition: color 0.3s ease;
//         }

//         .footer-links a:hover {
//           color: #c5a059;
//         }

//         /* BOTTOM SECTION: COPYRIGHT */
//         .footer-bottom {
//           background-color: #020810;
//           padding: 20px 0;
//           text-align: center;
//           font-size: 12px;
//           color: #555;
//         }

//         /* SOCIAL ICONS */
//         .social-links {
//           display: flex;
//           gap: 15px;
//           margin-top: 20px;
//         }
        
//         .social-icon {
//           cursor: pointer;
//           transition: color 0.3s;
//         }
//         .social-icon:hover { color: #c5a059; }

//         /* RESPONSIVE */
//         @media (max-width: 900px) {
//           .footer-content { grid-template-columns: 1fr; gap: 40px; }
//           .footer-title { font-size: 28px; }
//         }
//       `}</style>

//       <footer className="site-footer">
//         <div className="container">
          
//           {/* FINAL CTA */}
//           <div className="footer-cta">
//             <h2 className="footer-title">Ready to test your intellect against the world?</h2>
//             <button className="footer-btn" onClick={() => setIsModalOpen(true)}>Register for 2026 Prize</button>
//           </div>

//           {/* LINKS GRID */}
//           <div className="footer-content">
            
//             <div className="brand-col">
//               <h4 style={{ color: '#c5a059' }}>Forge Organised by Career Discovery</h4>
//               <p>
//                 Cultivating independent thought and academic rigor in the next generation of global leaders.
//               </p>
//               {/* <div className="social-links">
//                 <Twitter size={20} className="social-icon" />
//                 <Facebook size={20} className="social-icon" />
//                 <Instagram size={20} className="social-icon" />
//                 <Linkedin size={20} className="social-icon" />
//               </div> */}
//             </div>

//             {/* <div className="footer-col">
//               <h4>Competition</h4>
//               <ul className="footer-links">
//                 <li><a href="#">Register</a></li>
//                 <li><a href="#">Key Dates</a></li>
//                 <li><a href="#">Categories</a></li>
//                 <li><a href="#">Past Winners</a></li>
//               </ul>
//             </div>

//             <div className="footer-col">
//               <h4>Resources</h4>
//               <ul className="footer-links">
//                 <li><a href="#">Essay Guide</a></li>
//                 <li><a href="#">Referencing Style</a></li>
//                 <li><a href="#">FAQs</a></li>
//                 <li><a href="#">Download Poster</a></li>
//               </ul>
//             </div> */}

//             <div className="footer-col">
//               <h4>Contact</h4>
//               <ul className="footer-links">
//                 <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                   <Mail size={16} /> contact@thecareerdiscovery.com
//                 </li>
//                 {/* <li>London, UK</li> */}
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="footer-bottom">
//           <div className="container">
//             &copy; 2026 The Career Discovery. All Rights Reserved. | Privacy Policy | Terms of Service
//           </div>
//         </div>
//       </footer>
//       <SubmitModal 
//   isOpen={isModalOpen} 
//   onClose={() => setIsModalOpen(false)} 
// />

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
        /* --- SCOPED CSS FOR FOOTER --- */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@700&display=swap');

        .site-footer {
          background-color: #051121; /* Very Dark Blue (almost black) */
          color: #a0aec0;
          font-family: 'Lato', sans-serif;
          padding-top: 80px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* TOP SECTION: CTA */
        .footer-cta {
          text-align: center;
          padding-bottom: 80px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 60px;
        }

        .footer-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          color: #ffffff;
          margin-bottom: 30px;
        }

        .footer-btn-closed {
          background-color: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 18px 40px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: not-allowed;
          display: inline-block;
        }

        /* MIDDLE SECTION: LINKS */
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          padding-bottom: 60px;
        }

        .brand-col p {
          font-size: 14px;
          line-height: 1.6;
          max-width: 300px;
          margin-top: 20px;
        }

        .footer-col h4 {
          color: #ffffff;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 15px;
        }

        /* BOTTOM SECTION: COPYRIGHT */
        .footer-bottom {
          background-color: #020810;
          padding: 20px 0;
          text-align: center;
          font-size: 12px;
          color: #555;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .footer-content { grid-template-columns: 1fr; gap: 40px; }
          .footer-title { font-size: 28px; }
        }
      `}</style>

      <footer className="site-footer">
        <div className="container">
          
          {/* FINAL CTA */}
          <div className="footer-cta">
            <h2 className="footer-title">2026 Essay Competition</h2>
            <button className="footer-btn-closed" disabled>
              Registration Closed
            </button>
          </div>

          {/* LINKS GRID */}
          <div className="footer-content">
            
            <div className="brand-col">
              <h4 style={{ color: '#c5a059' }}>Forge Organised by Career Discovery</h4>
              <p>
                Cultivating independent thought and academic rigor in the next generation of global leaders.
              </p>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-links">
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={16} /> contact@thecareerdiscovery.com
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <div className="container">
            &copy; 2026 The Career Discovery. All Rights Reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </>
  );
}