// "use client";

// import React from "react";

// export default function JudgesSection() {
//   return (
//     <>
//       <style jsx>{`
//         /* --- SCOPED LUXURY CSS FOR JUDGES SECTION --- */
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

//         .judges-section {
//           background-color: #07080b; /* Consistent Deep Obsidian Dark Theme */
//           padding: 120px 20px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           color: #ffffff;
//           position: relative;
//           overflow: hidden;
//         }

//         .glow-effect {
//           position: absolute;
//           bottom: -100px;
//           left: -100px;
//           width: 500px;
//           height: 500px;
//           background: radial-gradient(circle, rgba(230, 190, 100, 0.04) 0%, rgba(7, 8, 11, 0) 70%);
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
//         .header-wrapper {
//           text-align: center;
//           margin-bottom: 80px;
//         }

//         .sub-header {
//           color: #e6be64; /* Champagne Gold */
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//           border: 1px solid rgba(230, 190, 100, 0.25);
//           padding: 8px 24px;
//           border-radius: 100px;
//           display: inline-block;
//           margin-bottom: 25px;
//           background: rgba(230, 190, 100, 0.03);
//           backdrop-filter: blur(8px);
//         }

//         .main-header {
//           font-family: 'Cinzel', serif;
//           font-size: 44px;
//           font-weight: 700;
//           margin: 0;
//           letter-spacing: -0.5px;
//         }

//         .header-title-gold {
//           background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         /* FACULTY GRID */
//         .faculty-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 50px;
//           margin-bottom: 100px;
//         }

//         /* JUDGE CARD */
//         .judge-card {
//           text-align: center;
//           position: relative;
//         }

//         .image-container {
//           width: 190px;
//           height: 190px;
//           margin: 0 auto 30px auto;
//           position: relative;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 2px solid rgba(255, 255, 255, 0.05);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .judge-card:hover .image-container {
//           border-color: #e6be64;
//           transform: translateY(-6px);
//           box-shadow: 0 20px 40px rgba(230, 190, 100, 0.15);
//         }

//         .judge-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           filter: grayscale(100%); /* Elegant Black and White */
//           transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .judge-card:hover .judge-img {
//           filter: grayscale(0%); /* Transitions smoothly on hover */
//         }

//         .judge-name {
//           font-family: 'Cinzel', serif;
//           font-size: 22px;
//           font-weight: 700;
//           color: #ffffff;
//           margin-bottom: 6px;
//           letter-spacing: 0.5px;
//         }

//         .judge-role {
//           font-size: 11px;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           color: #e6be64;
//           font-weight: 600;
//           margin-bottom: 20px;
//           display: block;
//         }

//         .judge-bio {
//           font-size: 14px;
//           color: #a0aec0;
//           line-height: 1.7;
//           max-width: 300px;
//           margin: 0 auto;
//         }

//         /* UNIVERSITY LOGO STRIP */
//         .logo-strip {
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//           padding-top: 80px;
//           text-align: center;
//         }

//         .strip-title {
//           font-size: 12px;
//           color: #718096;
//           text-transform: uppercase;
//           letter-spacing: 3px;
//           margin-bottom: 40px;
//           display: block;
//           font-weight: 600;
//         }

//         .logo-grid {
//           display: flex;
//           justify-content: center;
//           gap: 60px;
//           flex-wrap: wrap;
//           align-items: center;
//         }

//         .uni-name {
//           font-family: 'Cinzel', serif;
//           font-size: 18px;
//           font-weight: 600; 
//           color: #ffffff;
//           opacity: 0.4;
//           transition: all 0.3s ease;
//           letter-spacing: 1px;
//         }

//         .uni-name:hover {
//           opacity: 0.9;
//           color: #e6be64;
//           text-shadow: 0 0 15px rgba(230, 190, 100, 0.2);
//         }

//         /* RESPONSIVE */
//         @media (max-width: 768px) {
//           .main-header { font-size: 34px; }
//           .logo-grid { gap: 30px; flex-direction: column; }
//           .uni-name { font-size: 16px; }
//         }

//         /* UNIVERSITY LOGO STRIP */
//         .logo-strip {
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//           padding-top: 80px;
//           text-align: center;
//         }

//         .strip-title {
//           font-size: 12px;
//           color: #718096;
//           text-transform: uppercase;
//           letter-spacing: 3px;
//           margin-bottom: 40px;
//           display: block;
//           font-weight: 600;
//         }

//         .logo-grid {
//           display: flex;
//           justify-content: center;
//           gap: 70px;
//           flex-wrap: wrap;
//           align-items: center;
//         }

//         .uni-logo-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .uni-logo-img {
//           height: 38px; /* Perfectly scaled for horizontal strip alignment */
//           width: auto;
//           object-fit: contain;
//           opacity: 0.35;
//           filter: brightness(0) invert(1); /* Forces raw logos into high-end white monochrome */
//           transition: all 0.4s ease;
//         }

//         .uni-logo-wrapper:hover .uni-logo-img {
//           opacity: 0.95;
//           filter: drop-shadow(0 0 12px rgba(230, 190, 100, 0.25)); /* Adds a warm subtle gold glow behind logo on hover */
//         }

//         /* RESPONSIVE LOGO FIXES */
//         @media (max-width: 768px) {
//           .main-header { font-size: 34px; }
//           .logo-grid { gap: 45px; }
//           .uni-logo-img { height: 32px; } /* Slightly smaller asset footprint on tablets/phones */
//         }
//       `}</style>

//       <section className="judges-section">
//         <div className="glow-effect"></div>

//         <div className="container">
          
//           <div className="header-wrapper">
//             <span className="sub-header">Scholarly Evaluation</span>
//             <h2 className="main-header">
//               The <span className="header-title-gold">Adjudicating Faculty</span>
//             </h2>
//           </div>

//           <div className="faculty-grid">
            
//             {/* JUDGE 1 */}
//             <div className="judge-card">
//               <div className="image-container">
//                 <img 
//                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Dr. Sterling" 
//                   className="judge-img"
//                 />
//               </div>
//               <h3 className="judge-name">Dr. Sterling</h3>
//               <span className="judge-role">Chairman of Examiners</span>
//               <p className="judge-bio">
//                 Former Dean of Philosophy at Oxford. Dr. Sterling oversees the academic rigor and structural critique of submissions.
//               </p>
//             </div>

//             {/* JUDGE 2 */}
//             <div className="judge-card">
//               <div className="image-container">
//                 <img 
//                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Prof. Vance" 
//                   className="judge-img"
//                 />
//               </div>
//               <h3 className="judge-name">Prof. Vance</h3>
//               <span className="judge-role">Senior Fellow, Economics</span>
//               <p className="judge-bio">
//                 Visiting Professor at Princeton University. Specializes in structural systems design, game theory, and behavioral research.
//               </p>
//             </div>

//             {/* JUDGE 3 */}
//             <div className="judge-card">
//               <div className="image-container">
//                 <img 
//                   src="/forge/img1.png" 
//                   alt="Ms. Krojzl" 
//                   className="judge-img"
//                   onError={(e) => {
//                     // Fallback to premium alternative if local path not loaded
//                     e.target.src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop";
//                   }}
//                 />
//               </div>
//               <h3 className="judge-name">Ms. Krojzl</h3>
//               <span className="judge-role">Social Anthropology Specialist</span>
//               <p className="judge-bio">
//                 Oxford D.Phil Scholar, published novelist, and academic investigating the critical intersections of narrative structures, culture, and modern society.
//               </p>
//             </div>

//           </div>

//           {/* UNIVERSITY REPRESENTATION */}
//           {/* <div className="logo-strip">
//             <span className="strip-title">Ecosystem Faculty Drawn From</span>
//             <div className="logo-grid">
//               <span className="uni-name">University of Oxford</span>
//               <span className="uni-name">Columbia University</span>
//               <span className="uni-name">Princeton University</span>
//               <span className="uni-name">University of Cambridge</span>
//             </div>
//           </div> */}

//           {/* UNIVERSITY REPRESENTATION */}
//           <div className="logo-strip">
//             <span className="strip-title">Ecosystem Faculty Drawn From</span>
//             <div className="logo-grid">
              
//               {/* Oxford Logo */}
//               <div className="uni-logo-wrapper">
//                 <img 
//                   src="/unilogo/oxford.png" /* Replace with your image path */
//                   alt="University of Oxford" 
//                   className="uni-logo-img" 
//                 />
//               </div>

//               {/* Columbia Logo */}
//               <div className="uni-logo-wrapper">
//                 <img 
//                   src="/unilogo/columbia university.png" /* Replace with your image path */
//                   alt="Columbia University" 
//                   className="uni-logo-img" 
//                 />
//               </div>

//               {/* Princeton Logo */}
//               <div className="uni-logo-wrapper">
//                 <img 
//                   src="/unilogo/princeton.png" /* Replace with your image path */
//                   alt="Princeton University" 
//                   className="uni-logo-img" 
//                 />
//               </div>

//               {/* Cambridge Logo */}
//               <div className="uni-logo-wrapper">
//                 <img 
//                   src="/unilogo/cambridge.png" /* Replace with your image path */
//                   alt="University of Cambridge" 
//                   className="uni-logo-img" 
//                 />
//               </div>

//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import React from "react";

export default function JudgesSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED LUXURY CSS FOR JUDGES SECTION --- */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

        .judges-section {
          background-color: #07080b; /* Consistent Deep Obsidian Dark Theme */
          padding: 120px 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .glow-effect {
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(230, 190, 100, 0.04) 0%, rgba(7, 8, 11, 0) 70%);
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

        /* HEADER */
        .header-wrapper {
          text-align: center;
          margin-bottom: 80px;
        }

        .sub-header {
          color: #e6be64; /* Champagne Gold */
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          border: 1px solid rgba(230, 190, 100, 0.25);
          padding: 8px 24px;
          border-radius: 100px;
          display: inline-block;
          margin-bottom: 25px;
          background: rgba(230, 190, 100, 0.03);
          backdrop-filter: blur(8px);
        }

        .main-header {
          font-family: 'Cinzel', serif;
          font-size: 44px;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .header-title-gold {
          background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* FACULTY GRID */
        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 50px;
          margin-bottom: 100px;
        }

        /* JUDGE CARD */
        .judge-card {
          text-align: center;
          position: relative;
        }

        .image-container {
          width: 190px;
          height: 190px;
          margin: 0 auto 30px auto;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .judge-card:hover .image-container {
          border-color: #e6be64;
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(230, 190, 100, 0.15);
        }

        .judge-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%); /* Elegant Black and White */
          transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .judge-card:hover .judge-img {
          filter: grayscale(0%); /* Transitions smoothly on hover */
        }

        .judge-name {
          font-family: 'Cinzel', serif;
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }

        .judge-role {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #e6be64;
          font-weight: 600;
          margin-bottom: 20px;
          display: block;
        }

        .judge-bio {
          font-size: 14px;
          color: #a0aec0;
          line-height: 1.7;
          max-width: 300px;
          margin: 0 auto;
        }

        /* UNIVERSITY LOGO STRIP */
        .logo-strip {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 80px;
          text-align: center;
        }

        .strip-title {
          font-size: 12px;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 40px;
          display: block;
          font-weight: 600;
        }

        .logo-grid {
          display: flex;
          justify-content: center;
          gap: 70px;
          flex-wrap: wrap;
          align-items: center;
        }

        .uni-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .uni-logo-img {
          height: 38px; /* Perfectly scaled for horizontal strip alignment */
          width: auto;
          object-fit: contain;
          opacity: 0.65; /* Bumped up baseline visibility */
          transition: all 0.4s ease;
        }

        .uni-logo-wrapper:hover .uni-logo-img {
          opacity: 1; 
          filter: drop-shadow(0 0 12px rgba(230, 190, 100, 0.25)); /* Warm subtle gold glow behind logo on hover */
        }

        /* RESPONSIVE LOGO FIXES */
        @media (max-width: 768px) {
          .main-header { font-size: 34px; }
          .logo-grid { gap: 45px; flex-direction: row; } /* Kept row mapping clean */
          .uni-logo-img { height: 32px; }
        }
      `}</style>

      <section className="judges-section">
        <div className="glow-effect"></div>

        <div className="container">
          
          <div className="header-wrapper">
            <span className="sub-header">Scholarly Evaluation</span>
            <h2 className="main-header">
              The <span className="header-title-gold">Adjudicating Faculty</span>
            </h2>
          </div>

          <div className="faculty-grid">
            
            {/* JUDGE 1 */}
            <div className="judge-card">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dr. Sterling" 
                  className="judge-img"
                />
              </div>
              <h3 className="judge-name">Dr. Sterling</h3>
              <span className="judge-role">Chairman of Examiners</span>
              <p className="judge-bio">
                Former Dean of Philosophy at Oxford. Dr. Sterling oversees the academic rigor and structural critique of submissions.
              </p>
            </div>

            {/* JUDGE 2 */}
            <div className="judge-card">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Prof. Vance" 
                  className="judge-img"
                />
              </div>
              <h3 className="judge-name">Prof. Vance</h3>
              <span className="judge-role">Senior Fellow, Economics</span>
              <p className="judge-bio">
                Visiting Professor at Princeton University. Specializes in structural systems design, game theory, and behavioral research.
              </p>
            </div>

            {/* JUDGE 3 */}
            <div className="judge-card">
              <div className="image-container">
                <img 
                  src="/forge/img1.png" 
                  alt="Ms. Krojzl" 
                  className="judge-img"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
              <h3 className="judge-name">Ms. Krojzl</h3>
              <span className="judge-role">Social Anthropology Specialist</span>
              <p className="judge-bio">
                Oxford D.Phil Scholar, published novelist, and academic investigating the critical intersections of narrative structures, culture, and modern society.
              </p>
            </div>

          </div>

          {/* UNIVERSITY REPRESENTATION */}
          <div className="logo-strip">
            <span className="strip-title">Ecosystem Faculty Drawn From</span>
            <div className="logo-grid">
              
              {/* Oxford Logo */}
              <div className="uni-logo-wrapper">
                <img 
                  src="/unilogo/oxford_logo.png" 
                  alt="University of Oxford" 
                  className="uni-logo-img" 
                />
              </div>

              {/* Columbia Logo */}
              <div className="uni-logo-wrapper">
                <img 
                  src="/unilogo/columbia.png" 
                  alt="Columbia University" 
                  className="uni-logo-img" 
                />
              </div>

              {/* Princeton Logo */}
              <div className="uni-logo-wrapper">
                <img 
                  src="/unilogo/princeton.jpg" 
                  alt="Princeton University" 
                  className="uni-logo-img" 
                />
              </div>

              {/* Cambridge Logo */}
              <div className="uni-logo-wrapper">
                <img 
                  src="/unilogo/Cambrige.png" 
                  alt="University of Cambridge" 
                  className="uni-logo-img" 
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}