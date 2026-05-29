// "use client";

// import React from "react";
// import { Brain, Scale, Landmark, Globe, BookOpen, Users, Lightbulb } from "lucide-react";

// export default function CategoriesSection() {
//   return (
//     <>
//       <style jsx>{`
//         /* --- SCOPED CSS FOR CATEGORIES SECTION --- */
//         @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

//         .categories-section {
//           background-color: #f8f9fa; /* Cream/Off-White */
//           padding: 100px 20px;
//           font-family: 'Lato', sans-serif;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         /* HEADER */
//         .section-header {
//           text-center: center;
//           margin-bottom: 70px;
//         }

//         .section-subtitle {
//           color: #c5a059; /* GOLD */
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           border: 1px solid rgba(197, 160, 89, 0.3);
//           padding: 8px 20px;
//           border-radius: 50px;
//           display: inline-block;
//           margin-bottom: 20px;
//           background-color: rgba(197, 160, 89, 0.05);
//         }

//         .section-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 48px;
//           font-weight: 700;
//           color: #0a2342; /* DARK BLUE */
//           margin: 0;
//         }

//         .title-underline {
//           width: 80px;
//           height: 3px;
//           background-color: #c5a059;
//           margin: 25px auto 0 auto;
//         }

//         /* GRID LAYOUT */
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//           gap: 30px;
//         }

//         /* CARD DESIGN */
//         .card {
//           background: #ffffff;
//           padding: 40px;
//           border: 1px solid #e5e7eb;
//           transition: all 0.4s ease;
//           position: relative;
//           overflow: hidden;
//           cursor: default;
//         }

//         .card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 40px rgba(10, 35, 66, 0.08);
//           border-color: #c5a059;
//         }

//         /* Gold Line Animation on Hover */
//         .card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background-color: #c5a059;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.4s ease;
//         }

//         .card:hover::before {
//           transform: scaleX(1);
//         }

//         /* ICON */
//         .icon-box {
//           width: 60px;
//           height: 60px;
//           background-color: rgba(10, 35, 66, 0.05);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 25px;
//           transition: background-color 0.3s ease;
//         }

//         .card:hover .icon-box {
//           background-color: #c5a059;
//         }

//         /* Icon SVG styling handles */
//         .icon-svg {
//           color: #0a2342;
//           transition: color 0.3s ease;
//         }
//         .card:hover .icon-svg {
//           color: #ffffff;
//         }

//         /* TEXT */
//         .card-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #0a2342;
//           margin-bottom: 15px;
//         }

//         .card-question {
//           font-size: 16px;
//           font-style: italic;
//           color: #666;
//           line-height: 1.6;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 768px) {
//           .section-title { font-size: 36px; }
//           .grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       <section className="categories-section">
//         <div className="container">
          
//           <div className="section-header">
//             <span className="section-subtitle">Disciplines of Inquiry</span>
//             <h2 className="section-title">Forge Your Argument</h2>
//             <div className="title-underline"></div>
//           </div>

//           <div className="grid">
            
//             {/* CARD 1: Philosophy */}
//             <div className="card">
//               <div className="icon-box">
//                 <Brain size={28} className="icon-svg" />
//               </div>
//               <h3 className="card-title">Philosophy</h3>
//               <p className="card-question">
//                 "Is it ever wrong to do the right thing for the wrong reasons?"
//               </p>
//             </div>

//             {/* CARD 2: Politics */}
//             <div className="card">
//               <div className="icon-box">
//                 <Globe size={28} className="icon-svg" />
//               </div>
//               <h3 className="card-title">Politics</h3>
//               <p className="card-question">
//                 "Is the right to self-determination absolute, or does it have limits?"
//               </p>
//             </div>

//             {/* CARD 3: Law */}
//             <div className="card">
//               <div className="icon-box">
//                 <Scale size={28} className="icon-svg" />
//               </div>
//               <h3 className="card-title">Law</h3>
//               <p className="card-question">
//                 "Is trial by jury obsolete in the modern age of forensics?"
//               </p>
//             </div>

//             {/* CARD 4: History */}
//             <div className="card">
//               <div className="icon-box">
//                 <Landmark size={28} className="icon-svg" />
//               </div>
//               <h3 className="card-title">History</h3>
//               <p className="card-question">
//                 "Does history have a direction, or is it just one damn thing after another?"
//               </p>
//             </div>

//             {/* CARD 5: Psychology */}
//             <div className="card">
//               <div className="icon-box">
//                 <Users size={28} className="icon-svg" />
//               </div>
//               <h3 className="card-title">Psychology</h3>
//               <p className="card-question">
//                 "Is mental illness over-diagnosed in the 21st century?"
//               </p>
//             </div>

//             {/* CARD 6: Theology/Ethics */}
//             <div className="card">
//               <div className="icon-box">
//                 <BookOpen size={28} className="icon-svg" />
//               </div>
//               <h3 className="card-title">Theology</h3>
//               <p className="card-question">
//                 "If you achieve enlightenment, how will you know for certain?"
//               </p>
//             </div>

//             {/* CARD 7: Junior Prize (Special) */}
//             <div className="card" style={{ borderColor: '#c5a059', backgroundColor: '#fffcf5' }}>
//               <div className="icon-box" style={{ backgroundColor: 'rgba(197, 160, 89, 0.2)' }}>
//                 <Lightbulb size={28} color="#0a2342" />
//               </div>
//               <h3 className="card-title">Junior Prize</h3>
//               <p className="card-question">
//                 <strong>(Under 14s)</strong><br/>
//                 "Entrants may answer any question from the categories above."
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";

// import React from "react";
// import { Brain, Scale, Landmark, Globe, BookOpen, Users, Lightbulb } from "lucide-react";

// export default function CategoriesSection() {
//   const categories = [
//     {
//       title: "Philosophy",
//       icon: <Brain size={28} className="icon-svg" />,
//       question: "The Meritocracy Trap: If our talents are the result of genetics and upbringing, can anyone truly 'deserve' their success?",
//     },
//     {
//       title: "Politics",
//       icon: <Globe size={28} className="icon-svg" />,
//       question: "The Digital Sovereign: Are private tech giants now more powerful than the nation-states that host them?",
//     },
//     {
//       title: "Law",
//       icon: <Scale size={28} className="icon-svg" />,
//       question: "Algorithmic Justice: Should AI judges determine sentencing if they are statistically less biased than humans?",
//     },
//     {
//       title: "History",
//       icon: <Landmark size={28} className="icon-svg" />,
//       question: "The Ethics of Curation: Should museums return artifacts to their origin even if they cannot be preserved there?",
//     },
//     {
//       title: "Psychology",
//       icon: <Users size={28} className="icon-svg" />,
//       question: "The Plastic Brain: How is constant smartphone usage re-wiring our capacity for deep, 'slow' thinking?",
//     },
//     {
//       title: "Theology & Ethics",
//       icon: <BookOpen size={28} className="icon-svg" />,
//       question: "The Creator’s Debt: If humanity creates sentient AI, do we have a divine responsibility to ensure its happiness?",
//     },
//   ];

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

//         .categories-section {
//           background-color: #f8f9fa;
//           padding: 100px 20px;
//           font-family: 'Lato', sans-serif;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .section-header {
//           text-align: center;
//           margin-bottom: 70px;
//         }

//         .section-subtitle {
//           color: #c5a059;
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           border: 1px solid rgba(197, 160, 89, 0.3);
//           padding: 8px 20px;
//           border-radius: 50px;
//           display: inline-block;
//           margin-bottom: 20px;
//           background-color: rgba(197, 160, 89, 0.05);
//         }

//         .section-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 48px;
//           font-weight: 700;
//           color: #0a2342;
//           margin: 0;
//         }

//         .title-underline {
//           width: 80px;
//           height: 3px;
//           background-color: #c5a059;
//           margin: 25px auto 0 auto;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//           gap: 30px;
//         }

//         .card {
//           background: #ffffff;
//           padding: 40px;
//           border: 1px solid #e5e7eb;
//           transition: all 0.4s ease;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//         }

//         .card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 40px rgba(10, 35, 66, 0.08);
//           border-color: #c5a059;
//         }

//         .card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background-color: #c5a059;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.4s ease;
//         }

//         .card:hover::before { transform: scaleX(1); }

//         .icon-box {
//           width: 60px;
//           height: 60px;
//           background-color: rgba(10, 35, 66, 0.05);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 25px;
//           transition: all 0.3s ease;
//         }

//         .card:hover .icon-box { background-color: #0a2342; }
//         .icon-svg { color: #0a2342; transition: color 0.3s ease; }
//         .card:hover .icon-svg { color: #ffffff; }

//         .card-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #0a2342;
//           margin-bottom: 15px;
//         }

//         .card-question {
//           font-size: 16px;
//           font-style: italic;
//           color: #555;
//           line-height: 1.6;
//         }

//         .junior-card {
//           border: 2px solid #c5a059;
//           background-color: #fffcf5;
//           grid-column: 1 / -1; /* Spans full width on desktop */
//           text-align: center;
//           align-items: center;
//         }

//         @media (max-width: 768px) {
//           .section-title { font-size: 36px; }
//           .grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       <section className="categories-section">
//         <div className="container">
//           <div className="section-header">
//             <span className="section-subtitle">Disciplines of Inquiry</span>
//             <h2 className="section-title">Prompts for the 2024 Prize</h2>
//             <div className="title-underline"></div>
//           </div>

//           <div className="grid">
//             {categories.map((cat, index) => (
//               <div key={index} className="card">
//                 <div className="icon-box">{cat.icon}</div>
//                 <h3 className="card-title">{cat.title}</h3>
//                 <p className="card-question">"{cat.question}"</p>
//               </div>
//             ))}

//             {/* JUNIOR PRIZE FULL WIDTH */}
//             <div className="card junior-card">
//               <div className="icon-box" style={{ backgroundColor: '#c5a059' }}>
//                 <Lightbulb size={28} color="#ffffff" />
//               </div>
//               <h3 className="card-title">Junior Prize (Under 14s)</h3>
//               <p className="card-question">
//                 "The Future Library: If physical books disappeared tomorrow, what would we lose that can never be replaced?"
//               </p>
//               <p style={{ fontSize: '12px', marginTop: '10px', color: '#c5a059', fontWeight: 'bold' }}>
//                 OR: Entrants may answer any question from the categories above.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import React, { useState } from "react";
import { Brain, Scale, Landmark, Globe, BookOpen, Users, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";

export default function CategoriesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const categories = [
    {
      title: "Philosophy",
      icon: <Brain size={28} className="icon-svg" />,
      prompts: [
        "The Meritocracy Trap: If our talents are the result of genetics and upbringing, can anyone truly 'deserve' their success?",
        "The Paradox of Choice: Does an infinite array of modern choices make us more free, or does it paralyze our ability to live meaningfully?",
        "The Ghost in the Machine: If AI perfectly simulates empathy, is there a moral difference between offending an AI and a human?"
      ],
    },
    {
      title: "Politics",
      icon: <Globe size={28} className="icon-svg" />,
      prompts: [
        "The Digital Sovereign: Are private tech giants now more powerful than the nation-states that host them?",
        "Climate vs. Liberty: Can a democratic system prioritize long-term climate solutions over short-term voter needs?",
        "The End of Privacy: Is the loss of anonymity a necessary price for a perfectly safe and transparent society?"
      ],
    },
    {
      title: "Law",
      icon: <Scale size={28} className="icon-svg" />,
      prompts: [
        "Algorithmic Justice: Should AI judges determine sentencing if they are statistically less biased than humans?",
        "The Right to be Forgotten: Does an individual’s right to delete their past conflict with society’s right to historical accuracy?",
        "Corporate Personhood: If a corporation is a 'person' legally, should it be subject to 'capital punishment' for criminal negligence?"
      ],
    },
    {
      title: "History",
      icon: <Landmark size={28} className="icon-svg" />,
      prompts: [
        "The Ethics of Curation: Should museums return artifacts to their origin even if they cannot be preserved there?",
        "Great Men vs. Great Trends: Do individuals change history, or are they puppets of larger economic forces?",
        "History as a Weapon: How has the rewriting of history been used as a tool for modern political control?"
      ],
    },
    {
      title: "Psychology",
      icon: <Users size={28} className="icon-svg" />,
      prompts: [
        "The Plastic Brain: How is constant smartphone usage re-wiring our capacity for deep, 'slow' thinking?",
        "The Loneliness of Connection: Why has the most 'connected' generation reported the highest levels of clinical loneliness?",
        "The Myth of Normal: Is mental health about adapting to the world as it is, or rebelling against its current state?"
      ],
    },
    {
      title: "Theology & Ethics",
      icon: <BookOpen size={28} className="icon-svg" />,
      prompts: [
        "The Creator’s Debt: If humanity creates sentient AI, do we have a divine responsibility to ensure its happiness?",
        "Suffering and Meaning: In an age where we aim to eliminate all discomfort, are we losing the thing that gives life its depth?",
        "Secular Rituals: Can a society remain moral without a religious framework, or are we replacing old gods with more dangerous ones?"
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

        .categories-section { background-color: #f8f9fa; padding: 100px 20px; font-family: 'Lato', sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 70px; }
        .section-subtitle { color: #c5a059; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; border: 1px solid rgba(197, 160, 89, 0.3); padding: 8px 20px; border-radius: 50px; display: inline-block; margin-bottom: 20px; background-color: rgba(197, 160, 89, 0.05); }
        .section-title { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; color: #0a2342; margin: 0; }
        .title-underline { width: 80px; height: 3px; background-color: #c5a059; margin: 25px auto 0 auto; }

        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
        .card { background: #ffffff; padding: 40px; border: 1px solid #e5e7eb; transition: all 0.4s ease; position: relative; overflow: hidden; display: flex; flex-direction: column; }
        .card:hover { border-color: #c5a059; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

        .icon-box { width: 50px; height: 50px; background-color: rgba(10, 35, 66, 0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .card-title { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #0a2342; margin-bottom: 15px; }
        
        .prompt-list { list-style: none; padding: 0; margin: 0; text-align: left; }
        .prompt-item { font-size: 15px; font-style: italic; color: #555; line-height: 1.6; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #f0f0f0; }
        .prompt-item:last-child { border-bottom: none; }

        .view-btn { 
          margin-top: auto; 
          background: none; 
          border: none; 
          color: #c5a059; 
          font-weight: 700; 
          display: flex; 
          align-items: center; 
          gap: 8px; 
          cursor: pointer; 
          padding: 10px 0;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .junior-card { border: 2px solid #c5a059; background-color: #fffcf5; grid-column: 1 / -1; }

        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="categories-section" id="topic">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">2026 Essay Prompts</span>
            <h2 className="section-title">Select Your Discipline</h2>
            <div className="title-underline"></div>
          </div>

          <div className="grid">
            {categories.map((cat, index) => (
              <div key={index} className="card">
                <div className="icon-box">{cat.icon}</div>
                <h3 className="card-title">{cat.title}</h3>
                
                <div className="prompt-list">
                  {/* Always show the first prompt */}
                  <p className="prompt-item">"{cat.prompts[0]}"</p>
                  
                  {/* Show others only if expanded */}
                  {expandedIndex === index && (
                    <>
                      <p className="prompt-item">"{cat.prompts[1]}"</p>
                      <p className="prompt-item">"{cat.prompts[2]}"</p>
                    </>
                  )}
                </div>

                <button className="view-btn" onClick={() => toggleExpand(index)}>
                  {expandedIndex === index ? (
                    <>Show Less <ChevronUp size={16} /></>
                  ) : (
                    <>View All Prompts <ChevronDown size={16} /></>
                  )}
                </button>
              </div>
            ))}

            {/* Special Junior Card */}
            <div className="card junior-card">
              <div className="icon-box" style={{ backgroundColor: '#c5a059' }}>
                <Lightbulb size={24} color="#fff" />
              </div>
              <h3 className="card-title">Junior Prize (Under 14s)</h3>
              <p className="prompt-item">"The Future Library: If physical books disappeared, what would we lose?"</p>
              <p style={{ fontSize: '12px', color: '#c5a059' }}>Junior entrants may also choose any prompt from the senior categories above.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}