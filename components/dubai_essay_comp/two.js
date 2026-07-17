"use client";

import React from "react";

export default function AboutSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED CSS FOR ABOUT SECTION --- */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600&display=swap');

        .about-section {
          background-color: #07080b; /* CONTINUITY FROM HERO */
          padding: 120px 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        /* AMBIENT GLOW BACKDROP */
        .about-ambient-glow {
          position: absolute;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(230, 190, 100, 0.05) 0%, rgba(7, 8, 11, 0) 75%);
          bottom: -10%;
          right: -5%;
          z-index: 1;
          pointer-events: none;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* LEFT SIDE: DESIGNED TEXT FOR DUBAI YOUTH */
        .about-label {
          color: #e6be64; /* METALLIC CHAMPAGNE GOLD */
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 15px;
          display: block;
        }

        .about-title {
          font-family: 'Cinzel', serif;
          font-size: 44px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 30px 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .about-title-gold {
          background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-text {
          font-size: 17px;
          line-height: 1.85;
          color: #a0aec0;
          margin-bottom: 25px;
          font-weight: 300;
        }

        .about-highlight {
          color: #f3d082;
          font-weight: 500;
        }

        /* LUXURY STATS GRID */
        .stats-grid {
          display: flex;
          gap: 48px;
          margin-top: 45px;
          border-top: 1px solid rgba(230, 190, 100, 0.15);
          padding-top: 35px;
        }

        .stat-item {
          border-left: 2px solid #e6be64;
          padding-left: 24px;
        }

        .stat-number {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #ffffff 0%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-desc {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #718096;
          font-weight: 600;
        }

        /* RIGHT SIDE: GLASSMORPHIC WRAPPER & IMAGE */
        .image-wrapper {
          position: relative;
          height: 550px;
          width: 100%;
          border-radius: 8px;
          overflow: visible; /* Allows quote card to offset properly */
        }

        .image-border-acc {
          position: absolute;
          top: -12px;
          right: -12px;
          bottom: 12px;
          left: 12px;
          border: 1px solid rgba(230, 190, 100, 0.2);
          border-radius: 8px;
          z-index: 1;
          pointer-events: none;
        }

        .image-frame {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .image-frame:hover .about-image {
          transform: scale(1.05);
        }

        /* PREMIUM FLOATING QUOTE */
        .quote-card {
          position: absolute;
          bottom: 30px;
          left: -40px;
          background: rgba(13, 16, 23, 0.85);
          border: 1px solid rgba(230, 190, 100, 0.3);
          padding: 30px 35px;
          max-width: 280px;
          backdrop-filter: blur(20px);
          border-radius: 4px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05);
          z-index: 10;
        }
        
        .quote-text {
          font-family: 'Cinzel', serif;
          font-size: 16px;
          line-height: 1.5;
          color: #e6be64;
          margin: 0;
          font-weight: 500;
        }

        /* MOBILE RESPONSIVE ADAPTABILITY */
        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .image-wrapper {
            height: 420px;
            margin-top: 20px;
          }
          .quote-card {
            left: 20px;
            bottom: -20px;
            padding: 20px;
            max-width: 240px;
          }
          .about-title {
            font-size: 34px;
          }
          .stats-grid {
            gap: 24px;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-ambient-glow"></div>
        
        <div className="about-container">
          
          {/* TEXT CONTENT */}
          <div className="about-content">
            <span className="about-label">An Elite Regional Stage</span>
            <h2 className="about-title">
              Cultivating the Next <br />
              <span className="about-title-gold">Scholars of the Emirates</span>
            </h2>
            
            <p className="about-text">
              The Novus Essay Competition is an exclusive initiative designed solely for <span className="about-highlight">Dubai's outstanding young minds</span>. Structured after the rigorous tutorial systems of Oxford and Ivy League academies, this competition invites high school students to step onto the world stage as junior scholars.
            </p>
            
            <p className="about-text">
              Under the guidance of examiners from top global universities, you are challenged to move past rote learning. We look for sharp analytical prose, compelling reasoning, and bold arguments that address the real-world issues shaping our region's future.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2,000</span>
                <span className="stat-desc">Word Limit</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Under 19</span>
                <span className="stat-desc">Exclusive Age Range</span>
              </div>
            </div>
          </div>

          {/* LUXURY DECORATED IMAGE VIEW */}
          <div className="image-wrapper">
            <div className="image-border-acc"></div>
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Ambitious Scholars Collaborating" 
                className="about-image"
              />
            </div>
            
            <div className="quote-card">
              <p className="quote-text">"To shape tomorrow, we must first dare to think differently today."</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}