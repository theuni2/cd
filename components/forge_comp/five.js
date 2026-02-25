"use client";

import React from "react";

export default function JudgesSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED CSS FOR JUDGES SECTION --- */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        .judges-section {
          background-color: #ffffff;
          padding: 100px 20px;
          font-family: 'Lato', sans-serif;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HEADER */
        .header-wrapper {
          text-align: center;
          margin-bottom: 70px;
        }

        .sub-header {
          color: #c5a059; /* GOLD */
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 15px;
        }

        .main-header {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          color: #0a2342;
          margin: 0;
        }

        /* FACULTY GRID */
        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        /* JUDGE CARD */
        .judge-card {
          text-align: center;
          group: hover;
        }

        .image-container {
          width: 200px;
          height: 200px;
          margin: 0 auto 25px auto;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #f8f9fa;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
        }

        .judge-card:hover .image-container {
          border-color: #c5a059;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(197, 160, 89, 0.2);
        }

        .judge-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%); /* B&W for academic look */
          transition: filter 0.4s ease;
        }

        .judge-card:hover .judge-img {
          filter: grayscale(0%); /* Color on hover */
        }

        .judge-name {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #0a2342;
          margin-bottom: 5px;
        }

        .judge-role {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #c5a059;
          font-weight: 700;
          margin-bottom: 15px;
          display: block;
        }

        .judge-bio {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          max-width: 280px;
          margin: 0 auto;
        }

        /* UNIVERSITY LOGO STRIP */
        .logo-strip {
          border-top: 1px solid #eee;
          padding-top: 60px;
          text-align: center;
        }

        .strip-title {
          font-size: 14px;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 30px;
          display: block;
        }

        .logo-grid {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
          opacity: 0.5;
        }

        .uni-name {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700; /* Bold for authority */
          color: #0a2342;
          font-style: italic;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .main-header { font-size: 36px; }
          .logo-grid { gap: 30px; flex-direction: column; }
        }
      `}</style>

      <section className="judges-section">
        <div className="container">
          
          <div className="header-wrapper">
            <span className="sub-header">Examined by the Best</span>
            <h2 className="main-header">The Faculty</h2>
          </div>

          <div className="faculty-grid">
            
            {/* JUDGE 1 */}
            <div className="judge-card">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professor Portrait" 
                  className="judge-img"
                />
              </div>
              <h3 className="judge-name">Dr. Sterling</h3>
              <span className="judge-role">Chairman of Examiners</span>
              <p className="judge-bio">
                Former Dean of Philosophy at Oxford. Dr. Sterling oversees the academic rigor of the FORGE Prize.
              </p>
            </div>

            {/* JUDGE 2 */}
            <div className="judge-card">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professor Portrait" 
                  className="judge-img"
                />
              </div>
              <h3 className="judge-name">Prof. Vance</h3>
              <span className="judge-role">Senior Fellow, Economics</span>
              <p className="judge-bio">
                Visiting Professor at Princeton University. Specializes in behavioral economics and game theory.
              </p>
            </div>

            {/* JUDGE 3 */}
            <div className="judge-card">
              <div className="image-container">
                <img 
                  src="/forge/img1.png" 
                  alt="Professor Portrait" 
                  className="judge-img"
                />
              </div>
              <h3 className="judge-name">Ms. Krojzl</h3>
              <span className="judge-role">Social Anthropology</span>
              <p className="judge-bio">
                Crime novelist and academic. D.Phil. in Social Anthropology from the University of Oxford, working at the intersection of storytelling, culture and society.
              </p>
            </div>

          </div>

          {/* UNIVERSITY REPRESENTATION */}
          <div className="logo-strip">
            <span className="strip-title">Faculty drawn from</span>
            <div className="logo-grid">
              <span className="uni-name">University of Oxford</span>
              <span className="uni-name">Columbia University</span>
              <span className="uni-name">Princeton University</span>
              <span className="uni-name">Cambridge</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}