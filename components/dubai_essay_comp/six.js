"use client";

import React from "react";
import { CheckCircle, AlertCircle, FileText, Calendar, BellRing } from "lucide-react";

export default function RulesSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED LUXURY CSS FOR RULES SECTION --- */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

        .rules-section {
          background-color: #07080b; /* Consistent Deep Obsidian Dark Theme */
          padding: 120px 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .glow-effect {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(230, 190, 100, 0.03) 0%, rgba(7, 8, 11, 0) 70%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* HEADER */
        .section-header {
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

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 44px;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .title-gold {
          background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-desc {
          font-size: 16px;
          color: #a0aec0;
          max-width: 600px;
          margin: 20px auto 0 auto;
          line-height: 1.6;
        }

        /* CARD GRID */
        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 30px;
        }

        /* PREMIUM GLASS CARDS */
        .rule-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 35px;
          border-radius: 8px;
          display: flex;
          gap: 24px;
          align-items: flex-start;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rule-card:hover {
          transform: translateY(-5px);
          border-color: rgba(230, 190, 100, 0.3);
          background: rgba(230, 190, 100, 0.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        /* ICON SYSTEM */
        .icon-box {
          min-width: 48px;
          height: 48px;
          background-color: rgba(230, 190, 100, 0.08);
          border: 1px solid rgba(230, 190, 100, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e6be64;
          transition: all 0.3s ease;
        }

        .rule-card:hover .icon-box {
          background-color: #e6be64;
          color: #07080b;
          box-shadow: 0 0 15px rgba(230, 190, 100, 0.3);
        }

        /* CARD TYPOGRAPHY */
        .rule-content h3 {
          font-family: 'Cinzel', serif;
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
        }

        .rule-content p {
          font-size: 14px;
          color: #a0aec0;
          line-height: 1.7;
          margin: 0;
        }

        .rule-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .highlight-gold {
          color: #e6be64;
          font-weight: 600;
        }

        /* GOLD NOTICE BOARD */
        .note-box {
          margin-top: 60px;
          background: linear-gradient(135deg, rgba(230, 190, 100, 0.03) 0%, rgba(230, 190, 100, 0.08) 100%);
          border: 1px solid rgba(230, 190, 100, 0.2);
          backdrop-filter: blur(12px);
          padding: 40px;
          border-radius: 8px;
          text-align: center;
          position: relative;
        }

        .note-text {
          font-size: 15px;
          line-height: 1.8;
          color: #a0aec0;
          margin: 0;
        }

        .note-accent-text {
          font-size: 14px;
          margin-top: 15px;
          color: #e6be64;
          letter-spacing: 0.5px;
        }

        @media (max-width: 900px) {
          .rules-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 34px; }
          .rule-card { padding: 25px; }
        }
      `}</style>

      <section className="rules-section">
        <div className="glow-effect"></div>

        <div className="container">
          
          <div className="section-header">
            <span className="sub-header">Academic Integrity</span>
            <h2 className="section-title">
              Rules & <span className="title-gold">Eligibility</span>
            </h2>
            <p className="section-desc">
              Strict adherence to international academic standards is required to ensure a fair, rigorous evaluation.
            </p>
          </div>

          <div className="rules-grid">
            
    {/* ELIGIBILITY */}
        <div className="rule-card">
          <div className="icon-box">
            <CheckCircle size={22} />
          </div>
          <div className="rule-content">
            <h3>Who Can Enter?</h3>
            <p>
              <strong>Senior Category:</strong> Students aged 15–18 years old.<br/>
              <strong>Junior Category:</strong> Students aged 14 and under.<br/>
              Open exclusively to students currently enrolled in any school across Dubai, representing any academic curriculum.
            </p>
          </div>
        </div>

            {/* FORMAT & LENGTH */}
            <div className="rule-card">
              <div className="icon-box">
                <FileText size={22} />
              </div>
              <div className="rule-content">
                <h3>Format & Length</h3>
                <p>
                  Essays must be submitted as a PDF. Word count must not exceed <strong>2,000 words</strong>, excluding the formal bibliography and authorship declarations.
                </p>
              </div>
            </div>

            {/* CITATIONS */}
            <div className="rule-card">
              <div className="icon-box">
                <AlertCircle size={22} />
              </div>
              <div className="rule-content">
                <h3>Citations & Integrity</h3>
                <p>
                  All source material must be meticulously cited (Chicago, MLA, or Harvard). Plagiarism or AI-generated work results in immediate disqualification.
                </p>
              </div>
            </div>

            {/* ANONYMITY */}
            <div className="rule-card">
              <div className="icon-box">
                <Calendar size={22} />
              </div>
              <div className="rule-content">
                <h3>Blind Grading</h3>
                <p>
                  To ensure complete impartiality, <strong>do not include your name</strong> or school on the essay PDF. Submissions are tracked solely via registration ID.
                </p>
              </div>
            </div>

          </div>

          {/* NOTICE BANNER */}
          <div className="note-box">
            <p className="note-text">
              Registration closes on <strong className="highlight-gold">31st May 2026</strong>. Late entries with extenuating grounds will be accepted until <strong className="highlight-gold">10th July 2026</strong>.
            </p>
            <p className="note-accent-text">
              * Final results will be officially declared on <span className="highlight-gold">10th August 2026</span> via the portal and email notifications.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}