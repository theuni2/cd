"use client";

import React from "react";
import { Brain, Scale, Landmark, Globe, BookOpen, Users, Lightbulb } from "lucide-react";

export default function CategoriesSection() {
  return (
    <>
      <style jsx>{`
        /* --- SCOPED CSS FOR CATEGORIES SECTION --- */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

        .categories-section {
          background-color: #f8f9fa; /* Cream/Off-White */
          padding: 100px 20px;
          font-family: 'Lato', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HEADER */
        .section-header {
          text-center: center;
          margin-bottom: 70px;
        }

        .section-subtitle {
          color: #c5a059; /* GOLD */
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid rgba(197, 160, 89, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 20px;
          background-color: rgba(197, 160, 89, 0.05);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          color: #0a2342; /* DARK BLUE */
          margin: 0;
        }

        .title-underline {
          width: 80px;
          height: 3px;
          background-color: #c5a059;
          margin: 25px auto 0 auto;
        }

        /* GRID LAYOUT */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        /* CARD DESIGN */
        .card {
          background: #ffffff;
          padding: 40px;
          border: 1px solid #e5e7eb;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(10, 35, 66, 0.08);
          border-color: #c5a059;
        }

        /* Gold Line Animation on Hover */
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #c5a059;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .card:hover::before {
          transform: scaleX(1);
        }

        /* ICON */
        .icon-box {
          width: 60px;
          height: 60px;
          background-color: rgba(10, 35, 66, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: background-color 0.3s ease;
        }

        .card:hover .icon-box {
          background-color: #c5a059;
        }

        /* Icon SVG styling handles */
        .icon-svg {
          color: #0a2342;
          transition: color 0.3s ease;
        }
        .card:hover .icon-svg {
          color: #ffffff;
        }

        /* TEXT */
        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #0a2342;
          margin-bottom: 15px;
        }

        .card-question {
          font-size: 16px;
          font-style: italic;
          color: #666;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .section-title { font-size: 36px; }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="categories-section">
        <div className="container">
          
          <div className="section-header">
            <span className="section-subtitle">Disciplines of Inquiry</span>
            <h2 className="section-title">Forge Your Argument</h2>
            <div className="title-underline"></div>
          </div>

          <div className="grid">
            
            {/* CARD 1: Philosophy */}
            <div className="card">
              <div className="icon-box">
                <Brain size={28} className="icon-svg" />
              </div>
              <h3 className="card-title">Philosophy</h3>
              <p className="card-question">
                "Is it ever wrong to do the right thing for the wrong reasons?"
              </p>
            </div>

            {/* CARD 2: Politics */}
            <div className="card">
              <div className="icon-box">
                <Globe size={28} className="icon-svg" />
              </div>
              <h3 className="card-title">Politics</h3>
              <p className="card-question">
                "Is the right to self-determination absolute, or does it have limits?"
              </p>
            </div>

            {/* CARD 3: Law */}
            <div className="card">
              <div className="icon-box">
                <Scale size={28} className="icon-svg" />
              </div>
              <h3 className="card-title">Law</h3>
              <p className="card-question">
                "Is trial by jury obsolete in the modern age of forensics?"
              </p>
            </div>

            {/* CARD 4: History */}
            <div className="card">
              <div className="icon-box">
                <Landmark size={28} className="icon-svg" />
              </div>
              <h3 className="card-title">History</h3>
              <p className="card-question">
                "Does history have a direction, or is it just one damn thing after another?"
              </p>
            </div>

            {/* CARD 5: Psychology */}
            <div className="card">
              <div className="icon-box">
                <Users size={28} className="icon-svg" />
              </div>
              <h3 className="card-title">Psychology</h3>
              <p className="card-question">
                "Is mental illness over-diagnosed in the 21st century?"
              </p>
            </div>

            {/* CARD 6: Theology/Ethics */}
            <div className="card">
              <div className="icon-box">
                <BookOpen size={28} className="icon-svg" />
              </div>
              <h3 className="card-title">Theology</h3>
              <p className="card-question">
                "If you achieve enlightenment, how will you know for certain?"
              </p>
            </div>

            {/* CARD 7: Junior Prize (Special) */}
            <div className="card" style={{ borderColor: '#c5a059', backgroundColor: '#fffcf5' }}>
              <div className="icon-box" style={{ backgroundColor: 'rgba(197, 160, 89, 0.2)' }}>
                <Lightbulb size={28} color="#0a2342" />
              </div>
              <h3 className="card-title">Junior Prize</h3>
              <p className="card-question">
                <strong>(Under 14s)</strong><br/>
                "Entrants may answer any question from the categories above."
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}