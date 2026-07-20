"use client";

import React from "react";
import { Trophy, Star, Award, ScrollText } from "lucide-react";

export default function PrizesSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED LUXURY CSS --- */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

        .prizes-section {
          background-color: #07080b; /* Rich Dark Theme Continuity */
          color: #ffffff;
          padding: 120px 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* FUTURISTIC DESERT GLOW BACKDROP */
        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(230, 190, 100, 0.05) 0%, rgba(7, 8, 11, 0) 70%);
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
          color: #e6be64;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          background-color: rgba(230, 190, 100, 0.03);
          padding: 8px 24px;
          border-radius: 100px;
          display: inline-block;
          margin-bottom: 25px;
          border: 1px solid rgba(230, 190, 100, 0.25);
          backdrop-filter: blur(8px);
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 44px;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .section-title-gold {
          background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* PRIZE CARDS */
        .prize-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          align-items: stretch;
          margin-bottom: 60px;
        }

        .prize-card {
          background: rgba(18, 20, 26, 0.6); 
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          padding: 60px 30px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .prize-card:hover {
          border-color: rgba(230, 190, 100, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* ULTRA LUXURY GRAND PRIZE HIGHLIGHT */
        .prize-card.highlight {
          background: linear-gradient(135deg, rgba(20, 22, 28, 0.9) 0%, rgba(30, 26, 18, 0.75) 100%);
          border: 1px solid rgba(230, 190, 100, 0.5);
          transform: scale(1.05);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(230, 190, 100, 0.1);
          z-index: 20;
        }

        .prize-card.highlight:hover {
          border-color: #e6be64;
          transform: scale(1.07) translateY(-5px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(230, 190, 100, 0.2);
        }

        .winner-badge {
          position: absolute;
          top: 0;
          background: linear-gradient(135deg, #e6be64 0%, #c59b43 100%);
          color: #07080b;
          padding: 6px 20px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          transform: translateY(-50%);
          border-radius: 2px;
          box-shadow: 0 4px 15px rgba(197, 155, 67, 0.3);
        }

        .prize-name {
          font-family: 'Cinzel', serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
          color: #ffffff;
        }

        .highlight .prize-name {
          color: #e6be64;
        }

        .prize-amount {
          font-family: 'Cinzel', serif;
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          display: block;
        }

        .prize-value-sub {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #e6be64;
          font-weight: 600;
          margin-bottom: 25px;
          display: block;
        }

        .prize-desc {
          font-size: 14.5px;
          line-height: 1.7;
          color: #a0aec0;
          margin: 0;
        }

        .highlight .prize-desc {
          color: #e2e8f0;
        }

        /* ALL PARTICIPANTS SECTION */
        .participation-bar {
          background: rgba(230, 190, 100, 0.03);
          border: 1px dashed rgba(230, 190, 100, 0.2);
          border-radius: 4px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 60px;
          backdrop-filter: blur(8px);
        }

        .participation-text h4 {
          margin: 0;
          font-family: 'Cinzel', serif;
          font-size: 18px;
          color: #e6be64;
          letter-spacing: 0.5px;
        }

        .participation-text p {
          margin: 8px 0 0 0;
          font-size: 14px;
          color: #a0aec0;
          line-height: 1.5;
        }

        @media (max-width: 950px) {
          .prize-grid { grid-template-columns: 1fr; gap: 40px; }
          .prize-card.highlight { transform: scale(1); }
          .prize-card.highlight:hover { transform: translateY(-5px); }
          .participation-bar { flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="prizes-section">
        <div className="glow-effect"></div>

        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Distinction & Rewards</span>
            <h2 className="section-title">
              Recognition of <span className="section-title-gold">Exceptional Intellect</span>
            </h2>
          </div>

          <div className="prize-grid">
            {/* 2nd Place */}
            <div className="prize-card">
              <div className="icon-box" style={{ 
                width: '48px', height: '48px', backgroundColor: 'rgba(230, 190, 100, 0.08)', 
                border: '1px solid rgba(230, 190, 100, 0.2)', borderRadius: '4px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' 
              }}>
                <Award size={24} color="#e6be64" />
              </div>
              <h3 className="prize-name">Runners Up</h3>
              <span className="prize-amount">AED 2,750</span>
              <span className="prize-value-sub">Est. Value ($750 USD)</span>
              <p className="prize-desc">
                An exclusive 1-on-1 Global Academic Profiling Session & Roadmap custom-designed by a Premier Education Strategist, official winner's certificate, and custom branded merchandise.
              </p>
            </div>

            {/* 1st Place (HIGHLIGHT) */}
            <div className="prize-card highlight">
              <div className="winner-badge">Grand Prize</div>
              <div className="icon-box" style={{ 
                width: '56px', height: '56px', backgroundColor: 'rgba(230, 190, 100, 0.15)', 
                border: '1px solid #e6be64', borderRadius: '4px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' 
              }}>
                <Trophy size={28} color="#e6be64" />
              </div>
              <h3 className="prize-name">The Dubai Championship</h3>
              <span className="prize-amount" style={{ color: '#e6be64' }}>AED 3,670</span>
              <span className="prize-value-sub" style={{ color: '#ffffff', opacity: '0.6' }}>Est. Value ($1,000 USD)</span>
              <p className="prize-desc">
                A prestigious physical Championship Trophy, regional press and media features, 1-on-1 Academic Profile strategy consulting directly with the Founder, and bespoke awardee merchandise.
              </p>
            </div>

            {/* 3rd Place */}
            <div className="prize-card">
              <div className="icon-box" style={{ 
                width: '48px', height: '48px', backgroundColor: 'rgba(230, 190, 100, 0.08)', 
                border: '1px solid rgba(230, 190, 100, 0.2)', borderRadius: '4px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' 
              }}>
                <Star size={24} color="#e6be64" />
              </div>
              <h3 className="prize-name">Third Prize</h3>
              <span className="prize-amount">AED 1,830</span>
              <span className="prize-value-sub">Est. Value ($500 USD)</span>
              <p className="prize-desc">
                An intensive 1-on-1 Profile Strategy and Ivy-admissions consultation with an Elite Advisor, accompanied by a verified physical certificate of outstanding performance.
              </p>
            </div>
          </div>

          {/* ALL PARTICIPANTS SECTION */}
          <div className="participation-bar">
            <ScrollText size={32} color="#e6be64" />
            <div className="participation-text">
              <h4>Official Fellowship Record</h4>
              <p>Every qualified submission from our Dubai cohort receives a verified digital Certificate of Scholarly Participation to support Ivy League and global university portfolios.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}