"use client";

import React from "react";
import { CheckCircle, AlertCircle, FileText, Calendar } from "lucide-react";

export default function RulesSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED CSS FOR RULES SECTION --- */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

        .rules-section {
          background-color: #f4f6f8; /* Light Grey */
          padding: 100px 20px;
          font-family: 'Lato', sans-serif;
          color: #333;
        }

        .container {
          max-width: 1000px; /* Slightly narrower for readability */
          margin: 0 auto;
        }

        /* HEADER */
        .section-header {
          text-center: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 700;
          color: #0a2342;
          margin-bottom: 10px;
        }

        .section-desc {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        /* RULES GRID */
        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        /* RULE CARD */
        .rule-card {
          background: #ffffff;
          padding: 30px;
          border-left: 4px solid #c5a059; /* Gold accent */
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .icon-box {
          min-width: 40px;
          height: 40px;
          background-color: rgba(10, 35, 66, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a2342;
        }

        .rule-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #0a2342;
          margin: 0 0 10px 0;
        }

        .rule-content p {
          font-size: 15px;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        /* IMPORTANT NOTE BOX */
        .note-box {
          margin-top: 50px;
          background-color: #0a2342;
          color: #ffffff;
          padding: 30px;
          text-align: center;
          border-radius: 4px;
        }

        .note-text {
          font-size: 16px;
          line-height: 1.6;
        }

        .note-link {
          color: #c5a059;
          font-weight: 700;
          text-decoration: underline;
          cursor: pointer;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .rules-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 32px; }
        }
      `}</style>

      <section className="rules-section">
        <div className="container">
          
          <div className="section-header">
            <h2 className="section-title">Rules & Eligibility</h2>
            <p className="section-desc">Strict adherence to academic standards is required for disqualification avoidance.</p>
          </div>

          <div className="rules-grid">
            
            {/* RULE 1: ELIGIBILITY */}
            <div className="rule-card">
              <div className="icon-box">
                <CheckCircle size={20} />
              </div>
              <div className="rule-content">
                <h3>Who Can Enter?</h3>
                <p>
                  <strong>Senior Category:</strong> Students aged 15-18 years old.<br/>
                  <strong>Junior Category:</strong> Students aged 14 years and under.<br/>
                  Open to students from any country and any school.
                </p>
              </div>
            </div>

            {/* RULE 2: WORD COUNT */}
            <div className="rule-card">
              <div className="icon-box">
                <FileText size={20} />
              </div>
              <div className="rule-content">
                <h3>Format & Length</h3>
                <p>
                  Essays must be submitted as a PDF. The word count must not exceed <strong>2,000 words</strong>. This excludes diagrams, data tables, footnotes, bibliography, and authorship declaration.
                </p>
              </div>
            </div>

            {/* RULE 3: REFERENCING */}
            <div className="rule-card">
              <div className="icon-box">
                <AlertCircle size={20} />
              </div>
              <div className="rule-content">
                <h3>Citations & Plagiarism</h3>
                <p>
                  All external sources must be cited using a recognized academic style (Chicago, MLA, or Harvard). Plagiarism will result in immediate disqualification and a ban from future competitions.
                </p>
              </div>
            </div>

            {/* RULE 4: ANONYMITY */}
            <div className="rule-card">
              <div className="icon-box">
                <Calendar size={20} />
              </div>
              <div className="rule-content">
                <h3>Blind Grading</h3>
                <p>
                  To ensure impartiality, <strong>do not include your name</strong> or school on the essay document itself. Your details will be linked via your registration number only.
                </p>
              </div>
            </div>

          </div>

          <div className="note-box">
            <p className="note-text">
              Registration closes on <strong>31 May 2026</strong>. Late entries will be accepted until 10 July with a late fee.<br/>
              <span className="note-link">Read Full Terms & Conditions</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}