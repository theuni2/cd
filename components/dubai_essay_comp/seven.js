"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
const faqCategories = [
  {
    title: "Eligibility & Registration",
    faqs: [
      { 
        q: "How strict are the age eligibility criteria?", 
        a: "You must be under 18 years old as of the regular submission deadline (15th September 2026). If you turn 18 on 16th September 2026 or later, you are eligible to compete. There are no minimum age requirements—students of any age under 18 may participate." 
      },
      { 
        q: "Am I too young to participate in the Essay Prize competition?", 
        a: "No. The competition is open to students of any age under 18 as of the regular submission deadline (15th September 2026)." 
      },
      {
        q: "How do I upload and submit my School ID?",
        a: "First, upload a clear photo or scan of your school ID to your personal Google Drive. Next, update the file's sharing permissions so that 'Anyone with the link can view.' Finally, copy that generated share link and paste it directly into the 'ID Drive Link' field on the submission form."
      },
      { 
        q: "When does registration close?", 
        a: "Registration and final submissions close on 15th September 2026." 
      },
      { 
        q: "Is there an entry fee?", 
        a: "There is no fee to enter our global essay competition. Participation is completely free." 
      }
    ]
  },
  {
    title: "Formatting & Rules",
    faqs: [
      { 
        q: "Are the bibliography or references counted towards the word limit?", 
        a: "No. The APA 7th Edition reference list at the end of your essay is completely excluded from the final word count. Only the main body text is counted." 
      },
      { 
        q: "Are APA in-text citations counted towards the word limit?", 
        a: "Yes. Because APA 7th Edition relies on parenthetical, author-date in-text citations (e.g., Smith, 2026), these short inline citations are included within the word limit." 
      },
      { 
        q: "Can I use footnotes instead of in-text citations?", 
        a: "No. To maintain objective academic standards, all submissions must strictly use APA 7th Edition parenthetical in-text citations rather than footnotes or endnotes for referencing sources." 
      },
      { 
        q: "How strictly are essays screened for AI and plagiarism?", 
        a: "Every submission undergoes rigorous screening through enterprise-grade plagiarism and AI-detection software. The use of generative AI tools or uncredited content results in immediate disqualification." 
      },
      { 
        q: "Should my essay be written in American or British English?", 
        a: "Either is perfectly acceptable. You are welcome to use American or Commonwealth (British) English variants—simply ensure your spelling and grammar choices remain entirely consistent throughout the piece." 
      }
    ]
  },
  {
    title: "Submissions & AI Use",
    faqs: [
      { q: "How should I format my essay's file name?", a: "Your file must be named using the format: FirstName-LastName-Category-QuestionNumber.pdf. Essays with incorrect filenames will be rejected." },
      { q: "May I submit more than one essay?", a: "Yes, you may submit as many essays as you please in any or all categories." },
      { q: "When will the winners be announced?", a: "Official results will be released on 20th October 2026. All participants will receive an email update, and the winning essays will be featured on our global gallery." },
      { q: "May I use AI software, such as ChatGPT?", a: "Yes, but be warned: overreliance on AI often results in less original work. Since AI use can negatively affect our assessment of your unique 'voice,' we recommend using it sparingly or not at all." },
      { q: "I uploaded the wrong draft. What should I do?", a: "Re-upload any time before the final deadline." },
    ]
  }
];
  // ==========================================
  // INDIVIDUAL FAQ ITEM (STRICTLY STYLED)
  // ==========================================
  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div 
        style={{
          marginBottom: "16px",
          backgroundColor: isOpen ? "rgba(230, 190, 100, 0.02)" : "rgba(255, 255, 255, 0.02)",
          border: isOpen ? "1px solid rgba(230, 190, 100, 0.4)" : "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "8px",
          boxShadow: isOpen ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
          overflow: "hidden", 
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          height: "auto", 
          minHeight: "0"  
        }}
      >
        {/* BUTTON AREA */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            minHeight: "60px",
            margin: 0
          }}
        >
          <span 
            style={{ 
              fontFamily: "'Cinzel', serif", 
              fontSize: "17px", 
              fontWeight: "700", 
              color: isOpen ? "#e6be64" : "#ffffff",
              marginRight: "20px",
              lineHeight: "1.4",
              letterSpacing: "0.5px",
              transition: "color 0.3s ease"
            }}
          >
            {question}
          </span>
          
          {/* ICON BOX */}
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              minWidth: "36px", 
              borderRadius: "50%",
              backgroundColor: isOpen ? "#e6be64" : "rgba(255, 255, 255, 0.03)",
              border: isOpen ? "1px solid #e6be64" : "1px solid rgba(255, 255, 255, 0.05)",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.4s ease, background-color 0.3s ease"
            }}
          >
            <ChevronDown color={isOpen ? "#07080b" : "#a0aec0"} size={18} />
          </div>
        </button>

        {/* HIDDEN ANSWER AREA */}
        <div 
          style={{
            maxHeight: isOpen ? "800px" : "0px", 
            opacity: isOpen ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div style={{ padding: "0 24px 24px 24px" }}>
            {/* Divider Line */}
            <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(255, 255, 255, 0.05)", marginBottom: "16px" }}></div>
            {/* Answer Text */}
            <p 
              style={{ 
                margin: 0, 
                color: "#a0aec0", 
                lineHeight: "1.7", 
                fontSize: "14px",
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');
      `}</style>

      <section style={{ backgroundColor: "#07080b", padding: "120px 20px", position: "relative", overflow: "hidden" }}>
        
        {/* Glow Accent */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(230, 190, 100, 0.02) 0%, rgba(7, 8, 11, 0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0
        }} />

        <div style={{ maxWidth: "850px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          
          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span 
              style={{ 
                display: "inline-block", 
                padding: "8px 24px", 
                border: "1px solid rgba(230, 190, 100, 0.25)", 
                borderRadius: "100px", 
                backgroundColor: "rgba(230, 190, 100, 0.03)", 
                color: "#e6be64", 
                fontSize: "11px", 
                fontWeight: "600", 
                letterSpacing: "4px", 
                textTransform: "uppercase", 
                marginBottom: "25px",
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}
            >
              Got Questions?
            </span>
            <h2 
              style={{ 
                fontFamily: "'Cinzel', serif", 
                fontSize: "44px", 
                fontWeight: "700", 
                color: "#ffffff", 
                margin: 0,
                letterSpacing: "-0.5px"
              }}
            >
              Frequently Asked <span style={{
                background: "linear-gradient(135deg, #ffffff 30%, #e6be64 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Questions</span>
            </h2>
            <div style={{ width: "60px", height: "2px", backgroundColor: "rgba(230, 190, 100, 0.3)", margin: "30px auto 0 auto" }}></div>
          </div>

          {/* FAQ CATEGORY LOOP */}
          <div>
            {faqCategories.map((category, index) => (
              <div key={index} style={{ marginBottom: "60px" }}>
                
                {/* Category Title with lines */}
                <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "30px" }}>
                  <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}></div>
                  <h3 
                    style={{ 
                      fontFamily: "'Cinzel', serif", 
                      fontSize: "20px", 
                      fontWeight: "700",
                      letterSpacing: "0.5px",
                      color: "#e6be64", 
                      margin: 0 
                    }}
                  >
                    {category.title}
                  </h3>
                  <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}></div>
                </div>
                
                {/* Questions List */}
                <div>
                  {category.faqs.map((faq, faqIndex) => (
                    <FaqItem key={faqIndex} question={faq.q} answer={faq.a} />
                  ))}
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}