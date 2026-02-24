"use client";

import React from "react";

export default function AboutSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED CSS FOR ABOUT SECTION --- */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

        .about-section {
          background-color: #ffffff;
          padding: 100px 20px;
          font-family: 'Lato', sans-serif;
          color: #333;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* LEFT SIDE: TEXT */
        .about-label {
          color: #c5a059; /* GOLD */
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
          display: block;
        }

        .about-title {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          color: #0a2342; /* DARK BLUE */
          margin: 0 0 30px 0;
          line-height: 1.1;
        }

        .about-text {
          font-size: 18px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 25px;
          font-weight: 300;
        }

        /* STATS GRID */
        .stats-grid {
          display: flex;
          gap: 40px;
          margin-top: 40px;
          border-top: 1px solid #eee;
          padding-top: 30px;
        }

        .stat-item {
          border-left: 3px solid #c5a059; /* GOLD BAR */
          padding-left: 20px;
        }

        .stat-number {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: #0a2342;
        }

        .stat-desc {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #888;
          font-weight: 700;
        }

        /* RIGHT SIDE: IMAGE */
        .image-wrapper {
          position: relative;
          height: 600px;
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(10, 35, 66, 0.15);
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .image-wrapper:hover .about-image {
          transform: scale(1.03); /* Subtle zoom effect */
        }

        /* QUOTE CARD OVERLAY */
        .quote-card {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background-color: #0a2342;
          padding: 40px;
          max-width: 300px;
          color: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .quote-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 22px;
          line-height: 1.4;
          color: #c5a059;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .image-wrapper {
            height: 400px;
          }
          .quote-card {
            display: none; /* Hide quote card on mobile to save space */
          }
          .about-title {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          
          {/* TEXT CONTENT */}
          <div className="about-content">
            <span className="about-label">Intellectual Rite of Passage</span>
            <h2 className="about-title">Challenge Your Mind</h2>
            
            <p className="about-text">
              The FORGE Essay Competition is not merely a competition; it is an academic challenge modeled after the rigor of Oxford and Princeton tutorials. We invite students to become "junior scholars"—to argue with precision, write with persuasion, and think with true independence.
            </p>
            
            <p className="about-text">
              Our examiners, drawn from the world's leading universities, look for essays that demonstrate a command of logic and a willingness to challenge established norms.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2,000</span>
                <span className="stat-desc">Word Limit</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Under 19 </span>
                <span className="stat-desc">Age Range</span>
              </div>
            </div>
          </div>

          {/* IMAGE CONTENT */}
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop" 
              alt="Student Writing" 
              className="about-image"
            />
            
            <div className="quote-card">
              <p className="quote-text">"To think is to differ."</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}