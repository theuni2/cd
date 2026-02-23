"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const faqCategories = [
    {
      title: "Eligibility & Registration",
      faqs: [
        { q: "How strict are the age eligibility criteria?", a: "You must be under 19 years old as of the regular submission deadline (31 May, 2026). If you turn 19 on 1 June 2026 or later, you are eligible to compete. There are no minimum age requirements—students of any age under 19 may participate." },
        { q: "Am I too young to participate in the Essay Prize competition?", a: "No! The competition is open to students of any age under 19 as of the regular submission deadline of 31 May, 2026." },
        { q: "How can I enter the Junior or Senior Category?", a: "Your category is determined solely by your age on the submission deadline. Students who are under the age of 15 as of 31 May will be judged in the Junior Category. All other eligible students will be judged in the Senior Category. You do not need to apply separately for a category." },
        { q: "Is there an entry fee?", a: "No. There is no charge to enter our global essay competition unless you submit your essay after the normal deadline, in which case there is a fee of 25.00 GBP (for the seven day extension) or 75.00 GBP (for the twenty-one day extension)." },
        { q: "I missed the registration deadline. May I still register or submit an essay?", a: "No. Only contestants who registered before the registration deadline, or who purchased the late registration option, will be able to submit an essay." },
      ]
    },
    {
      title: "Formatting & Rules",
      faqs: [
        { q: "Are footnotes, endnotes, a bibliography or references counted towards the word limit?", a: "No. Only the body of the essay is counted." },
        { q: "Are in-text citations counted towards the word limit?", a: "If you are using an in-text based referencing format, such as APA, your in-text citations are included in the word limit." },
        { q: "Is it necessary to include footnotes or endnotes in an essay?", a: "You may not include footnotes, but you may include in-text citations or endnotes. You should give your sources of any factual claims you make, and you should acknowledge any other authors on whom you rely." },
        { q: "Should my essay be in American or Commonwealth (British) English?", a: "Either is acceptable. You may write your essay in American or Commonwealth (British) English just be consistent throughout. Judges will not penalise you for your choice of variant." },
      ]
    },
    {
      title: "Submissions & AI Use",
      faqs: [
        { q: "How should I format my essay's file name?", a: "Your file must be named using the format: FirstName-LastName-Category-QuestionNumber.pdf. Essays with incorrect filenames will be rejected." },
        { q: "May I submit more than one essay?", a: "Yes, you may submit as many essays as you please in any or all categories." },
        { q: "When will the winners be announced?", a: "Official results will be released on 20 July 2026. All participants will receive an email update, and the winning essays will be featured on our global gallery." }, // Added this
        { q: "May I use AI software, such as ChatGPT?", a: "Yes, but be warned: overreliance on AI often results in less original work. Since AI use can negatively affect our assessment of your unique 'voice,' we recommend using it sparingly or not at all." },
        { q: "I uploaded the wrong draft. What should I do?", a: "You may delete your submission and re-upload any time before the final deadline." },
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
        // Strict outer box styling to prevent the "giant box" bug
        style={{
          marginBottom: "16px",
          backgroundColor: "#ffffff",
          border: isOpen ? "1px solid #c5a059" : "1px solid #eaeaea",
          borderRadius: "8px",
          boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          overflow: "hidden", // Forces the box to shrink when content is hidden
          transition: "all 0.3s ease",
          height: "auto", // Overrides any global stretch rules
          minHeight: "0"  // Overrides any global min-height rules
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
            padding: "20px 24px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            minHeight: "60px", // Keeps the button tight
            margin: 0
          }}
        >
          <span 
            style={{ 
              fontFamily: "Georgia, 'Times New Roman', serif", 
              fontSize: "18px", 
              fontWeight: "bold", 
              color: isOpen ? "#c5a059" : "#0a2342",
              marginRight: "20px",
              lineHeight: "1.4"
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
              minWidth: "36px", // Prevents icon from shrinking
              borderRadius: "50%",
              backgroundColor: isOpen ? "rgba(197, 160, 89, 0.1)" : "#f4f4f4",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.4s ease, background-color 0.3s ease"
            }}
          >
            <ChevronDown color={isOpen ? "#c5a059" : "#888"} size={20} />
          </div>
        </button>

        {/* HIDDEN ANSWER AREA */}
        <div 
          style={{
            maxHeight: isOpen ? "800px" : "0px", // This makes it slide
            opacity: isOpen ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.4s ease-in-out"
          }}
        >
          <div style={{ padding: "0 24px 24px 24px" }}>
            {/* Divider Line */}
            <div style={{ height: "1px", width: "100%", backgroundColor: "#f0f0f0", marginBottom: "16px" }}></div>
            {/* Answer Text */}
            <p 
              style={{ 
                margin: 0, 
                color: "#555", 
                lineHeight: "1.6", 
                fontSize: "16px",
                fontFamily: "Arial, sans-serif"
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
    <section style={{ backgroundColor: "#fcfcfc", padding: "100px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span 
            style={{ 
              display: "inline-block", 
              padding: "4px 16px", 
              border: "1px solid rgba(197, 160, 89, 0.3)", 
              borderRadius: "50px", 
              backgroundColor: "rgba(197, 160, 89, 0.05)", 
              color: "#c5a059", 
              fontSize: "12px", 
              fontWeight: "bold", 
              letterSpacing: "2px", 
              textTransform: "uppercase", 
              marginBottom: "16px" 
            }}
          >
            Got Questions?
          </span>
          <h2 
            style={{ 
              fontFamily: "Georgia, 'Times New Roman', serif", 
              fontSize: "42px", 
              fontWeight: "bold", 
              color: "#0a2342", 
              margin: 0 
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ width: "60px", height: "3px", backgroundColor: "#c5a059", margin: "24px auto 0 auto" }}></div>
        </div>

        {/* FAQ CATEGORY LOOP */}
        <div>
          {faqCategories.map((category, index) => (
            <div key={index} style={{ marginBottom: "50px" }}>
              
              {/* Category Title with lines */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{ height: "1px", flex: 1, backgroundColor: "#eaeaea" }}></div>
                <h3 
                  style={{ 
                    fontFamily: "Georgia, 'Times New Roman', serif", 
                    fontSize: "22px", 
                    color: "#0a2342", 
                    margin: 0 
                  }}
                >
                  {category.title}
                </h3>
                <div style={{ height: "1px", flex: 1, backgroundColor: "#eaeaea" }}></div>
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
  );
}