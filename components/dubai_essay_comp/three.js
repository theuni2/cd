// "use client";

// import React, { useState } from "react";
// import { Brain, Scale, Landmark, Globe, BookOpen, Users, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";

// export default function CategoriesSection() {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const categories = [
//     {
//       title: "Philosophy",
//       icon: <Brain size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Meritocracy Trap: If our talents are the result of genetics and upbringing, can anyone truly 'deserve' their success?",
//         "The Paradox of Choice: Does an infinite array of modern choices make us more free, or does it paralyze our ability to live meaningfully?",
//         "The Ghost in the Machine: If AI perfectly simulates empathy, is there a moral difference between offending an AI and a human?"
//       ],
//     },
//     {
//       title: "Politics",
//       icon: <Globe size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Digital Sovereign: Are private tech giants now more powerful than the nation-states that host them?",
//         "Climate vs. Liberty: Can a democratic system prioritize long-term climate solutions over short-term voter needs?",
//         "The End of Privacy: Is the loss of anonymity a necessary price for a perfectly safe and transparent society?"
//       ],
//     },
//     {
//       title: "Law",
//       icon: <Scale size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "Algorithmic Justice: Should AI judges determine sentencing if they are statistically less biased than humans?",
//         "The Right to be Forgotten: Does an individual’s right to delete their past conflict with society’s right to historical accuracy?",
//         "Corporate Personhood: If a corporation is a 'person' legally, should it be subject to 'capital punishment' for criminal negligence?"
//       ],
//     },
//     {
//       title: "History",
//       icon: <Landmark size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Ethics of Curation: Should museums return artifacts to their origin even if they cannot be preserved there?",
//         "Great Men vs. Great Trends: Do individuals change history, or are they puppets of larger economic forces?",
//         "History as a Weapon: How has the rewriting of history been used as a tool for modern political control?"
//       ],
//     },
//     {
//       title: "Psychology",
//       icon: <Users size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Plastic Brain: How is constant smartphone usage re-wiring our capacity for deep, 'slow' thinking?",
//         "The Loneliness of Connection: Why has the most 'connected' generation reported the highest levels of clinical loneliness?",
//         "The Myth of Normal: Is mental health about adapting to the world as it is, or rebelling against its current state?"
//       ],
//     },
//     {
//       title: "Theology & Ethics",
//       icon: <BookOpen size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Creator’s Debt: If humanity creates sentient AI, do we have a divine responsibility to ensure its happiness?",
//         "Suffering and Meaning: In an age where we aim to eliminate all discomfort, are we losing the thing that gives life its depth?",
//         "Secular Rituals: Can a society remain moral without a religious framework, or are we replacing old gods with more dangerous ones?"
//       ],
//     },
//   ];

//   const toggleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

//         .categories-section { 
//           background-color: #07080b; /* Rich Dark Background */
//           padding: 120px 20px; 
//           font-family: 'Plus Jakarta Sans', sans-serif; 
//           position: relative;
//         }
        
//         .container { max-width: 1200px; margin: 0 auto; }
        
//         .section-header { text-align: center; margin-bottom: 75px; }
        
//         .section-subtitle { 
//           color: #e6be64; 
//           font-size: 11px; 
//           font-weight: 600; 
//           letter-spacing: 4px; 
//           text-transform: uppercase; 
//           border: 1px solid rgba(230, 190, 100, 0.25); 
//           padding: 8px 24px; 
//           border-radius: 100px; 
//           display: inline-block; 
//           margin-bottom: 25px; 
//           background: rgba(230, 190, 100, 0.03); 
//           backdrop-filter: blur(8px);
//         }
        
//         .section-title { 
//           font-family: 'Cinzel', serif; 
//           font-size: 44px; 
//           font-weight: 700; 
//           color: #ffffff; 
//           margin: 0; 
//           letter-spacing: -0.5px;
//         }

//         .section-title-gold {
//           background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .title-underline { 
//           width: 60px; 
//           height: 2px; 
//           background: linear-gradient(90deg, transparent, #e6be64, transparent); 
//           margin: 30px auto 0 auto; 
//         }

//         /* GRID */
//         .grid { 
//           display: grid; 
//           grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); 
//           gap: 30px; 
//         }

//         /* PREMIUM GLASS CARDS */
//         .card { 
//           background: rgba(18, 20, 26, 0.6); 
//           padding: 40px; 
//           border: 1px solid rgba(255, 255, 255, 0.05); 
//           border-radius: 4px;
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
//           position: relative; 
//           overflow: hidden; 
//           display: flex; 
//           flex-direction: column; 
//           backdrop-filter: blur(12px);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//         }
        
//         .card::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: radial-gradient(circle at top left, rgba(230, 190, 100, 0.04) 0%, transparent 60%);
//           pointer-events: none;
//         }

//         .card:hover { 
//           border-color: rgba(230, 190, 100, 0.4); 
//           transform: translateY(-4px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 190, 100, 0.05);
//         }

//         /* LUXURY ICON WRAPPERS */
//         .icon-box { 
//           width: 48px; 
//           height: 48px; 
//           background-color: rgba(230, 190, 100, 0.08); 
//           border: 1px solid rgba(230, 190, 100, 0.2);
//           border-radius: 4px; 
//           display: flex; 
//           align-items: center; 
//           justify-content: center; 
//           margin-bottom: 25px; 
//         }
        
//         .card-title { 
//           font-family: 'Cinzel', serif; 
//           font-size: 22px; 
//           font-weight: 700; 
//           color: #ffffff; 
//           margin-bottom: 20px; 
//           letter-spacing: 0.5px;
//         }
        
//         /* THE PROMPTS */
//         .prompt-list { list-style: none; padding: 0; margin: 0; text-align: left; }
        
//         .prompt-item { 
//           font-size: 14.5px; 
//           font-style: italic; 
//           color: #a0aec0; 
//           line-height: 1.7; 
//           margin-bottom: 16px; 
//           padding-bottom: 16px; 
//           border-bottom: 1px solid rgba(255, 255, 255, 0.04); 
//         }
        
//         .prompt-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

//         /* VIEW ALL BUTTON */
//         .view-btn { 
//           margin-top: 25px; 
//           background: none; 
//           border: none; 
//           color: #e6be64; 
//           font-weight: 600; 
//           display: inline-flex; 
//           align-items: center; 
//           gap: 8px; 
//           cursor: pointer; 
//           padding: 8px 0;
//           font-size: 11.5px;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           transition: color 0.3s ease;
//         }
        
//         .view-btn:hover {
//           color: #ffffff;
//         }

//         /* SPECIAL EXCLUSIVE JUNIOR CARD */
//         .junior-card { 
//           border: 1px solid rgba(230, 190, 100, 0.35); 
//           background: linear-gradient(135deg, rgba(18, 20, 26, 0.9) 0%, rgba(26, 22, 16, 0.7) 100%); 
//           grid-column: 1 / -1; 
//         }
        
//         .junior-card::before {
//           background: radial-gradient(circle at top right, rgba(230, 190, 100, 0.08) 0%, transparent 60%);
//         }

//         .junior-meta {
//           font-size: 11px;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           color: #e6be64;
//           font-weight: 600;
//           margin-top: 15px;
//           display: block;
//         }

//         @media (max-width: 768px) { 
//           .grid { grid-template-columns: 1fr; } 
//           .section-title { font-size: 34px; }
//         }
//       `}</style>

//       <section className="categories-section" id="topic">
//         <div className="container">
          
//           <div className="section-header">
//             <span className="section-subtitle">2026 Academic Disciplines</span>
//             <h2 className="section-title">
//               Select Your <span className="section-title-gold">Inquiry Track</span>
//             </h2>
//             <div className="title-underline"></div>
//           </div>

//           <div className="grid">
//             {categories.map((cat, index) => (
//               <div key={index} className="card">
//                 <div className="icon-box">{cat.icon}</div>
//                 <h3 className="card-title">{cat.title}</h3>
                
//                 <div className="prompt-list">
//                   {/* Always show the first prompt */}
//                   <p className="prompt-item">"{cat.prompts[0]}"</p>
                  
//                   {/* Show others only if expanded */}
//                   {expandedIndex === index && (
//                     <>
//                       <p className="prompt-item">"{cat.prompts[1]}"</p>
//                       <p className="prompt-item">"{cat.prompts[2]}"</p>
//                     </>
//                   )}
//                 </div>

//                 <button className="view-btn" onClick={() => toggleExpand(index)}>
//                   {expandedIndex === index ? (
//                     <>Show Less <ChevronUp size={14} /></>
//                   ) : (
//                     <>View All Prompts <ChevronDown size={14} /></>
//                   )}
//                 </button>
//               </div>
//             ))}

//             {/* Special Junior Card */}
//             <div className="card junior-card">
//               <div className="icon-box" style={{ backgroundColor: 'rgba(230, 190, 100, 0.15)', borderColor: '#e6be64' }}>
//                 <Lightbulb size={20} color="#e6be64" />
//               </div>
//               <h3 className="card-title">Junior Prize &bull; Elite Track (Under 14s)</h3>
//               <p className="prompt-item" style={{ fontSize: '15.5px' }}>
//                 "The Future Library: If physical books completely disappeared, what fundamental aspects of human knowledge and connection would we lose?"
//               </p>
//               <span className="junior-meta">
//                 * Note: Junior entrants also hold elite access to choose any prompt from the senior categories above.
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import React, { useState } from "react";
// import { Brain, Globe, Scale, Landmark,Lightbulb, Users, TrendingUp, Dna, BookOpen, Cpu, ChevronDown } from "lucide-react";

import { 
  Brain, 
  Globe, 
  Scale, 
  Landmark, 
  Users, 
  TrendingUp, 
  Dna, 
  Cpu, 
  BookOpen, 
  ChevronUp, 
  ChevronDown, 
  Lightbulb 
} from 'lucide-react';

export default function CategoriesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

//  const categories = [
//     {
//       title: "Philosophy",
//       icon: <Brain size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Digital Majlis: How does transforming traditional community spaces into virtual, decentralized platforms redefine collective responsibility and social consensus in the Middle East?",
//         "Mind and Matter in Ibn Sina: How does the classical 'Flying Man' argument of Avicenna inform modern neural-engineering debates regarding human consciousness?",
//         "Ethical Waterways: How can arid nations balance the energy-intensive demands of modern desalination with the ecological imperative of conserving marine and desert ecosystems for future generations?"
//       ],
//     },
//     {
//       title: "Global Relations & Urbanization",
//       icon: <Globe size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Post-Oil Diplomat: How are regional tech investments and sovereign wealth funds changing soft power dynamics for GCC states on the global stage?",
//         "Hyper-Urbanization vs. Heritage: Can smart city megaprojects balance globalized modernization with historical preservation?",
//         "The Knowledge Exchange: How is the strategic transition from resource-based economies to innovation-driven knowledge hubs reshaping collaboration between the Middle East and global technological centers?"
//       ],
//     },
//     {
//       title: "Jurisprudence & Tech Law",
//       icon: <Scale size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "Digital Jurisprudence: How can regional legal frameworks adapt to govern decentralized technologies, like smart contracts and AI, while ensuring consumer protection and economic trust?",
//         "Intellectual Property in Open Source: How do evolving legal frameworks protect indigenous regional crafts and designs from digital exploitation by international corporations?",
//         "The Architecture of Trade: How do international maritime laws adapt to protect marine biodiversity while facilitating global trade flows through key regional shipping channels?"
//       ],
//     },
//     {
//       title: "History & Heritage",
//       icon: <Landmark size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The House of Wisdom 2.0: To what extent does the contemporary rise of translation and research hubs in the Middle East mirror Baghdad’s Golden Age?",
//         "Silk Roads of Tomorrow: How do historical caravan trade route dynamics compare to modern logistics corridors connecting East and West?",
//         "Preserving the Invisible: How can communities safeguard oral histories and intangible heritage amidst rapid urban development?"
//       ],
//     },
//     {
//       title: "Psychology & Modernity",
//       icon: <Users size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Multicultural Synthesis: How does living in hyper-diverse, cosmopolitan hubs foster cognitive flexibility and global citizenship among youth in the Middle East?",
//         "The Screen and the Soul: How are rapid societal shifts and digital connectivity impacting familial structures and social cohesion?",
//         "Cognitive Adaptability: How does rapid technological adoption across generations in the region shape family dynamics and communication patterns?"
//       ],
//     },
//     {
//       title: "Economics & Finance",
//       icon: <TrendingUp size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "Fintech vs. Tradition: How are regional digital currencies and peer-to-peer lending platforms redefining the accessibility of Islamic micro-finance?",
//         "The Entrepreneurial Ecosystem: How can regional tech hubs optimize the synergy between global venture capital and local talent to build self-sustaining start-up ecosystems?",
//         "The GCC Green Bond: How effective are green sukuk (Islamic bonds) in financing sustainable infrastructure across the Middle East?"
//       ],
//     },
//     {
//       title: "STEM & Bioethics",
//       icon: <Dna size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "Arid Agriculture: How can gene-editing technologies like CRISPR secure food safety in desert climates without triggering ecological imbalances?",
//         "AI in Clinical Triage: What bioethical parameters should govern automated medical diagnostic tools in highly diverse, multilingual hospitals?",
//         "The Genomic Frontier: How do regional personalized medicine initiatives balance public health breakthroughs with data privacy in the age of bio-banking?"
//       ],
//     },
//     {
//       title: "Theology & Ethics",
//       icon: <BookOpen size={24} className="icon-svg" color="#e6be64" />,
//       prompts: [
//         "The Ethical Horizon of AI: How can classical Islamic ethical frameworks guide modern developers as they program autonomous, decision-making AI systems?",
//         "The Preservation of Silence: In an era dominated by hyper-active algorithms, how does the preservation of spiritual reflection spaces challenge modern consumerism?",
//         "Intergenerational Custodianship: How do traditional perspectives on ecological stewardship shape modern regional approaches to climate preservation?"
//       ],
//     },
//  ];
 

const categories = [
    {
      title: "Philosophy",
      icon: <Brain size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "The Digital Majlis: How does transforming traditional community spaces into virtual, decentralized platforms redefine collective responsibility and social consensus in the Middle East?",
        "Mind and Matter in Ibn Sina: How does the classical 'Flying Man' argument of Avicenna inform modern neural-engineering debates regarding human consciousness?",
        "Ethical Waterways: How can arid nations balance the energy-intensive demands of modern desalination with the ecological imperative of conserving marine and desert ecosystems for future generations?"
      ],
    },
    {
      title: "Global Relations & Urbanization",
      icon: <Globe size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "The Post-Oil Diplomat: How are regional tech investments and sovereign wealth funds changing soft power dynamics for GCC states on the global stage?",
        "Hyper-Urbanization vs. Heritage: Can smart city megaprojects balance globalized modernization with historical preservation?",
        "The Knowledge Exchange: How is the strategic transition from resource-based economies to innovation-driven knowledge hubs reshaping collaboration between the Middle East and global technological centers?"
      ],
    },
    {
      title: "Jurisprudence & Tech Law",
      icon: <Scale size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "Digital Jurisprudence: How can regional legal frameworks adapt to govern decentralized technologies, like smart contracts and AI, while ensuring consumer protection and economic trust?",
        "Intellectual Property in Open Source: How do evolving legal frameworks protect indigenous regional crafts and designs from digital exploitation by international corporations?",
        "The Architecture of Trade: How do international maritime laws adapt to protect marine biodiversity while facilitating global trade flows through key regional shipping channels?"
      ],
    },
    {
      title: "History & Heritage",
      icon: <Landmark size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "The House of Wisdom 2.0: To what extent does the contemporary rise of translation and research hubs in the Middle East mirror Baghdad’s Golden Age?",
        "Silk Roads of Tomorrow: How do historical caravan trade route dynamics compare to modern logistics corridors connecting East and West?",
        "Preserving the Invisible: How can communities safeguard oral histories and intangible heritage amidst rapid urban development?"
      ],
    },
    {
      title: "Psychology & Modernity",
      icon: <Users size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "The Multicultural Synthesis: How does living in hyper-diverse, cosmopolitan hubs foster cognitive flexibility and global citizenship among youth in the Middle East?",
        "The Screen and the Soul: How are rapid societal shifts and digital connectivity impacting familial structures and social cohesion?",
        "Cognitive Adaptability: How does rapid technological adoption across generations in the region shape family dynamics and communication patterns?"
      ],
    },
    {
      title: "Economics & Finance",
      icon: <TrendingUp size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "Fintech vs. Tradition: How are regional digital currencies and peer-to-peer lending platforms redefining the accessibility of Islamic micro-finance?",
        "The Entrepreneurial Ecosystem: How can regional tech hubs optimize the synergy between global venture capital and local talent to build self-sustaining start-up ecosystems?",
        "The GCC Green Bond: How effective are green sukuk (Islamic bonds) in financing sustainable infrastructure across the Middle East?"
      ],
    },
    {
      title: "STEM & Bioethics",
      icon: <Dna size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "Arid Agriculture: How can gene-editing technologies like CRISPR secure food safety in desert climates without triggering ecological imbalances?",
        "AI in Clinical Triage: What bioethical parameters should govern automated medical diagnostic tools in highly diverse, multilingual hospitals?",
        "The Genomic Frontier: How do regional personalized medicine initiatives balance public health breakthroughs with data privacy in the age of bio-banking?"
      ],
    },
    {
      title: "Computer Science & Artificial Intelligence",
      icon: <Cpu size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "Sovereign LLMs: How does the development of natively trained Arabic Large Language Models (LLMs) challenge Western-centric algorithmic biases and redefine digital cultural autonomy?",
        "Algorithmic Megacities: What are the computational limitations and privacy vectors of training predictive reinforcement learning systems to orchestrate real-time resource allocation in autonomous smart cities?",
        "Quantum Cryptography on the Horizon: How must modern decentralized financial protocols adapt to remain secure against quantum computing threats within international emerging technology hubs?"
      ],
    },
    {
      title: "Theology & Ethics",
      icon: <BookOpen size={24} className="icon-svg" color="#e6be64" />,
      prompts: [
        "The Ethical Horizon of AI: How can classical Islamic ethical frameworks guide modern developers as they program autonomous, decision-making AI systems?",
        "The Preservation of Silence: In an era dominated by hyper-active algorithms, how does the preservation of spiritual reflection spaces challenge modern consumerism?",
        "Intergenerational Custodianship: How do traditional perspectives on ecological stewardship shape modern regional approaches to climate preservation?"
      ],
    },
];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');

        .categories-section { 
          background-color: #07080b; /* Rich Dark Background */
          padding: 120px 20px; 
          font-family: 'Plus Jakarta Sans', sans-serif; 
          position: relative;
        }
        
        .container { max-width: 1200px; margin: 0 auto; }
        
        .section-header { text-align: center; margin-bottom: 75px; }
        
        .section-subtitle { 
          color: #e6be64; 
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
          color: #ffffff; 
          margin: 0; 
          letter-spacing: -0.5px;
        }

        .section-title-gold {
          background: linear-gradient(135deg, #ffffff 30%, #e6be64 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-underline { 
          width: 60px; 
          height: 2px; 
          background: linear-gradient(90deg, transparent, #e6be64, transparent); 
          margin: 30px auto 0 auto; 
        }

        /* GRID */
        .grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); 
          gap: 30px; 
        }

        /* PREMIUM GLASS CARDS */
        .card { 
          background: rgba(18, 20, 26, 0.6); 
          padding: 40px; 
          border: 1px solid rgba(255, 255, 255, 0.05); 
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
          position: relative; 
          overflow: hidden; 
          display: flex; 
          flex-direction: column; 
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top left, rgba(230, 190, 100, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .card:hover { 
          border-color: rgba(230, 190, 100, 0.4); 
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 190, 100, 0.05);
        }

        /* LUXURY ICON WRAPPERS */
        .icon-box { 
          width: 48px; 
          height: 48px; 
          background-color: rgba(230, 190, 100, 0.08); 
          border: 1px solid rgba(230, 190, 100, 0.2);
          border-radius: 4px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          margin-bottom: 25px; 
        }
        
        .card-title { 
          font-family: 'Cinzel', serif; 
          font-size: 22px; 
          font-weight: 700; 
          color: #ffffff; 
          margin-bottom: 20px; 
          letter-spacing: 0.5px;
        }
        
        /* THE PROMPTS */
        .prompt-list { list-style: none; padding: 0; margin: 0; text-align: left; }
        
        .prompt-item { 
          font-size: 14px; 
          font-style: italic; 
          color: #a0aec0; 
          line-height: 1.7; 
          margin-bottom: 16px; 
          padding-bottom: 16px; 
          border-bottom: 1px solid rgba(255, 255, 255, 0.04); 
        }
        
        .prompt-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

        /* VIEW ALL BUTTON */
        .view-btn { 
          margin-top: auto; 
          padding-top: 25px;
          background: none; 
          border: none; 
          color: #e6be64; 
          font-weight: 600; 
          display: inline-flex; 
          align-items: center; 
          gap: 8px; 
          cursor: pointer; 
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: color 0.3s ease;
        }
        
        .view-btn:hover {
          color: #ffffff;
        }

        /* SPECIAL EXCLUSIVE JUNIOR CARD */
        .junior-card { 
          border: 1px solid rgba(230, 190, 100, 0.35); 
          background: linear-gradient(135deg, rgba(18, 20, 26, 0.9) 0%, rgba(26, 22, 16, 0.7) 100%); 
          grid-column: 1 / -1; 
        }
        
        .junior-card::before {
          background: radial-gradient(circle at top right, rgba(230, 190, 100, 0.08) 0%, transparent 60%);
        }

        .junior-meta {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #e6be64;
          font-weight: 600;
          margin-top: 15px;
          display: block;
        }

        @media (max-width: 768px) { 
          .grid { grid-template-columns: 1fr; } 
          .section-title { font-size: 34px; }
        }
      `}</style>

      <section className="categories-section" id="topic">
        <div className="container">
          
          <div className="section-header">
            <span className="section-subtitle">2026 Academic Disciplines</span>
            <h2 className="section-title">
              Select Your <span className="section-title-gold">Inquiry Track</span>
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="grid">
            {categories.map((cat, index) => (
              <div key={index} className="card">
                <div className="icon-box">{cat.icon}</div>
                <h3 className="card-title">{cat.title}</h3>
                
                <div className="prompt-list" style={{ marginBottom: "20px" }}>
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
                    <>Show Less <ChevronUp size={14} /></>
                  ) : (
                    <>View All Prompts <ChevronDown size={14} /></>
                  )}
                </button>
              </div>
            ))}

            {/* Special Junior Card
            <div className="card junior-card">
              <div className="icon-box" style={{ backgroundColor: 'rgba(230, 190, 100, 0.15)', borderColor: '#e6be64' }}>
                <Lightbulb size={20} color="#e6be64" />
              </div>
              <h3 className="card-title">Junior Prize &bull; Elite Track (Under 14s)</h3>
              <p className="prompt-item" style={{ fontSize: '15.5px' }}>
                "The Oasis of Tomorrow: How do regional conservation methods in hot deserts help teach the global community about preserving resources for the next century?"
              </p>
              <span className="junior-meta">
                * Note: Junior entrants also hold elite access to choose any prompt from the senior categories above.
              </span>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}