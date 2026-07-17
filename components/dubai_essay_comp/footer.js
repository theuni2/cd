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
          padding-top: 100px;
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

        /* TOP SECTION: CTA */
        .footer-cta {
          text-align: center;
          padding-bottom: 80px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 60px;
        }

        .footer-title {
          font-family: 'Cinzel', serif;
          font-size: 38px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 25px;
          letter-spacing: -0.5px;
        }

        .title-gold {
          background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-btn-closed {
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 16px 36px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: not-allowed;
          display: inline-block;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        /* MIDDLE SECTION: LINKS */
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
        }

        .brand-title {
          font-family: 'Cinzel', serif;
          color: #e6be64;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1px;
          margin: 0 0 15px 0;
        }

        .brand-col p {
          font-size: 14px;
          line-height: 1.7;
          max-width: 380px;
          color: #a0aec0;
          margin: 0;
        }

        .footer-col h4 {
          color: #ffffff;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-item {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 14px;
          color: #a0aec0;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: #e6be64;
        }

        .contact-icon {
          color: #e6be64;
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
          .footer-title { font-size: 30px; }
          .brand-col p { max-width: 100%; }
        }
      `}</style>

      <footer className="site-footer">
        <div className="glow-effect"></div>

        <div className="container">
          
          {/* FINAL CTA */}
          {/* <div className="footer-cta">
            <h2 className="footer-title">
              The 2026 <span className="title-gold">Essay Competition</span>
            </h2>
            <button className="footer-btn-closed" disabled>
              Registration Closed
            </button>
          </div> */}

          {/* LINKS GRID */}
          <div className="footer-content">
            
            <div className="brand-col">
             <h3 className="brand-title">
  Novus Supported by Uni Discovery Counselors
</h3>
              <p>
                Cultivating independent thought, precision writing, and scholarly rigor in the next generation of global leaders.
              </p>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-links">
                <li>
                  <a href="mailto:contact@thecareerdiscovery.com" className="contact-item">
                    <Mail size={16} className="contact-icon" /> contact@thecareerdiscovery.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
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