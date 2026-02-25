// "use client";

// import React, { useState } from "react";
// import { ChevronRight, ChevronLeft, BookOpen, Rocket, Users, Target, Lightbulb } from "lucide-react";

// export default function ChapterRoadmap() {
//   const [activeChapter, setActiveChapter] = useState(0);

//   const chapters = [
//     {
//       num: "01",
//       title: "Foundation & Ideation",
//       timeline: "February — April",
//       icon: <Lightbulb size={28} color="#c5a059" />,
//       description: "Building the academic baseline and conceptualizing the core capstone project.",
//       tasks: [
//         "Initial Brainstorming & Selection for the Capstone Project",
//         "Scientific Concept Building via Youth Scientist Lab",
//         "Core Physics Foundation via Khan Academy",
//         "Targeted Reading and Literature Review"
//       ]
//     },
//     {
//       num: "02",
//       title: "Execution & Competitions",
//       timeline: "May — August",
//       icon: <Rocket size={28} color="#c5a059" />,
//       description: "Transitioning from theory to practice through active project development.",
//       tasks: [
//         "Capstone Project Execution with Subject Mentors",
//         "Finalize & Submit Commonwealth Essay (Deadline: May 15)",
//         "Registration for eCybermission STEM Challenge",
//         "Iterative testing and refinement of prototypes"
//       ]
//     },
//     {
//       num: "03",
//       title: "Advanced Exploration",
//       timeline: "September",
//       icon: <BookOpen size={28} color="#c5a059" />,
//       description: "Deepening subject matter expertise through university-level coursework.",
//       tasks: [
//         "Compete in the International Aerospace Olympiad",
//         "Complete Entrepreneurship Certification (Coursera)",
//         "Study Behavioral Psychology & Emotion (edX / Udacity)",
//         "Master Product Design & Design Thinking (Alison / edX)"
//       ]
//     },
//     {
//       num: "04",
//       title: "Leadership & Impact",
//       timeline: "October — December",
//       icon: <Users size={28} color="#c5a059" />,
//       description: "Showcasing the profile by taking on leadership roles and sharing knowledge.",
//       tasks: [
//         "Launch Science Clubs in Local Schools for Peer Learning",
//         "Curate Photography Skills via Instagram Portfolio",
//         "Engage with Academic Publications (BPS Research Digest)",
//         "Finalize portfolio for university admissions review"
//       ]
//     }
//   ];

//   return (
//     <section className="bg-[#fcfcfc] py-20 px-4 md:px-8 font-sans min-h-screen flex items-center justify-center">
      
//       {/* --- INLINE CSS FOR THE FADE ANIMATION --- */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes fadeSlideIn {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade {
//           animation: fadeSlideIn 0.5s ease-out forwards;
//         }
//       `}} />

//       <div className="max-w-6xl w-full mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2342] mb-4">
//             The Student Journey
//           </h2>
//           <div className="w-16 h-1 bg-[#c5a059] mx-auto"></div>
//         </div>

//         {/* ================= STRICT SIDE-BY-SIDE LAYOUT ================= */}
//         {/* md:flex-row forces side-by-side on tablets and laptops */}
//         <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
          
//           {/* LEFT PANE: INDEX (Navy Blue, 33% width) */}
//           <div className="w-full md:w-1/3 bg-[#0a2342] p-8 md:p-12 flex flex-col justify-between">
            
//             <div>
//               <span className="text-[#c5a059] text-sm font-bold tracking-[0.2em] uppercase block mb-10 border-b border-white/10 pb-4">
//                 Strategic Phases
//               </span>
              
//               <div className="flex flex-col gap-2">
//                 {chapters.map((chapter, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveChapter(index)}
//                     className={`text-left w-full py-4 px-5 rounded-lg transition-all duration-300 flex items-center justify-between group ${
//                       activeChapter === index 
//                         ? "bg-white/10 border-l-4 border-[#c5a059]" 
//                         : "border-l-4 border-transparent hover:bg-white/5"
//                     }`}
//                   >
//                     <div>
//                       <span className={`text-xs tracking-widest uppercase block mb-1 ${activeChapter === index ? "text-[#c5a059]" : "text-gray-400"}`}>
//                         Chapter {chapter.num}
//                       </span>
//                       <span className={`font-serif text-lg ${activeChapter === index ? "text-white font-bold" : "text-gray-300 group-hover:text-white"}`}>
//                         {chapter.title}
//                       </span>
//                     </div>
//                     {/* Arrow Indicator */}
//                     <ChevronRight 
//                       size={18} 
//                       className={`transition-transform duration-300 ${activeChapter === index ? "text-[#c5a059] translate-x-1" : "text-transparent"}`} 
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* RIGHT PANE: CONTENT (White, 66% width) */}
//           <div className="w-full md:w-2/3 p-8 md:p-14 relative flex flex-col justify-between">
            
//             {/* Animated Content Block */}
//             <div key={activeChapter} className="animate-fade flex-1">
              
//               {/* Header Info */}
//               <div className="flex justify-between items-center mb-6">
//                 <span className="text-[#c5a059] font-bold tracking-[0.2em] uppercase text-sm border border-[#c5a059]/30 px-4 py-1 rounded-full bg-[#c5a059]/5">
//                   {chapters[activeChapter].timeline}
//                 </span>
//                 <div className="text-[#0a2342]/10">
//                   {chapters[activeChapter].icon}
//                 </div>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a2342] mb-6">
//                 {chapters[activeChapter].title}
//               </h2>

//               <p className="text-lg text-gray-600 font-serif italic mb-10 pb-8 border-b border-gray-100">
//                 "{chapters[activeChapter].description}"
//               </p>

//               {/* Tasks Checklist */}
//               <div className="space-y-4">
//                 {chapters[activeChapter].tasks.map((task, idx) => (
//                   <div key={idx} className="flex items-start gap-4">
//                     <Target size={18} className="text-[#c5a059] mt-1 flex-shrink-0" />
//                     <span className="text-gray-700 text-lg">{task}</span>
//                   </div>
//                 ))}
//               </div>

//             </div>

//             {/* Pagination Controls */}
//             <div className="mt-12 pt-6 flex items-center justify-between border-t border-gray-100">
              
//               <button 
//                 onClick={() => { if (activeChapter > 0) setActiveChapter(activeChapter - 1) }}
//                 className={`flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors ${activeChapter === 0 ? "text-gray-300 cursor-not-allowed" : "text-[#0a2342] hover:text-[#c5a059]"}`}
//               >
//                 <ChevronLeft size={16} /> Prev
//               </button>

//               <button 
//                 onClick={() => { if (activeChapter < chapters.length - 1) setActiveChapter(activeChapter + 1) }}
//                 className={`flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors ${activeChapter === chapters.length - 1 ? "text-gray-300 cursor-not-allowed" : "text-[#0a2342] hover:text-[#c5a059]"}`}
//               >
//                 Next <ChevronRight size={16} />
//               </button>

//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft, BookOpen, Rocket, Users, Target, Lightbulb } from "lucide-react";

export default function ChapterRoadmap() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      num: "01",
      title: "Foundation & Ideation",
      timeline: "February — April",
      icon: <Lightbulb size={28} color="#c5a059" />,
      description: "Building the academic baseline and conceptualizing the core capstone project.",
      tasks: [
        "Initial Brainstorming & Selection for the Capstone Project",
        "Scientific Concept Building via Youth Scientist Lab",
        "Core Physics Foundation via Khan Academy",
        "Targeted Reading and Literature Review"
      ]
    },
    {
      num: "02",
      title: "Execution & Competitions",
      timeline: "May — August",
      icon: <Rocket size={28} color="#c5a059" />,
      description: "Transitioning from theory to practice through active project development.",
      tasks: [
        "Capstone Project Execution with Subject Mentors",
        "Finalize & Submit Commonwealth Essay (Deadline: May 15)",
        "Registration for eCybermission STEM Challenge",
        "Iterative testing and refinement of prototypes"
      ]
    },
    {
      num: "03",
      title: "Advanced Exploration",
      timeline: "September",
      icon: <BookOpen size={28} color="#c5a059" />,
      description: "Deepening subject matter expertise through university-level coursework.",
      tasks: [
        "Compete in the International Aerospace Olympiad",
        "Complete Entrepreneurship Certification (Coursera)",
        "Study Behavioral Psychology & Emotion (edX / Udacity)",
        "Master Product Design & Design Thinking (Alison / edX)"
      ]
    },
    {
      num: "04",
      title: "Leadership & Impact",
      timeline: "October — December",
      icon: <Users size={28} color="#c5a059" />,
      description: "Showcasing the profile by taking on leadership roles and sharing knowledge.",
      tasks: [
        "Launch Science Clubs in Local Schools for Peer Learning",
        "Curate Photography Skills via Instagram Portfolio",
        "Engage with Academic Publications (BPS Research Digest)",
        "Finalize portfolio for university admissions review"
      ]
    }
  ];

  return (
    <section style={{ backgroundColor: "#fcfcfc", padding: "80px 20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* ================= IRONCLAD CSS ================= */}
      <style dangerouslySetInnerHTML={{__html: `
        .dossier-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .dossier-box {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          border: 1px solid #eaeaea;
          overflow: hidden;
          min-height: 600px;
        }

        /* Forces Side-by-Side on Desktop/Tablets */
        @media (min-width: 768px) {
          .dossier-box {
            flex-direction: row;
          }
          .dossier-left {
            width: 35%;
          }
          .dossier-right {
            width: 65%;
          }
        }

        .dossier-left {
          background-color: #0a2342;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dossier-right {
          background-color: #ffffff;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .chapter-btn {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 16px 20px;
          margin-bottom: 8px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-left: 4px solid transparent;
          transition: all 0.3s ease;
        }

        .chapter-btn:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .chapter-btn.active {
          background-color: rgba(255, 255, 255, 0.1);
          border-left-color: #c5a059;
        }

        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
      `}} />

      <div className="dossier-container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "42px", fontFamily: "Georgia, serif", color: "#0a2342", margin: "0 0 16px 0" }}>
            The Student Roadmap
          </h2>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#c5a059", margin: "0 auto" }}></div>
        </div>

        {/* Dossier Layout */}
        <div className="dossier-box">
          
          {/* ================= LEFT PANE (INDEX) ================= */}
          <div className="dossier-left">
            <div>
              <span style={{ color: "#c5a059", fontSize: "13px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px" }}>
                Strategic Phases
              </span>
              
              <div>
                {chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveChapter(index)}
                    className={`chapter-btn ${activeChapter === index ? "active" : ""}`}
                  >
                    <div>
                      <span style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: "4px", color: activeChapter === index ? "#c5a059" : "#888" }}>
                        Chapter {chapter.num}
                      </span>
                      <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: activeChapter === index ? "#ffffff" : "#cccccc", fontWeight: activeChapter === index ? "bold" : "normal" }}>
                        {chapter.title}
                      </span>
                    </div>
                    <ChevronRight size={18} color={activeChapter === index ? "#c5a059" : "transparent"} style={{ transform: activeChapter === index ? "translateX(4px)" : "none", transition: "transform 0.3s" }} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT PANE (CONTENT) ================= */}
          <div className="dossier-right">
            
            <div key={activeChapter} className="animate-fade">
              
              {/* Timeline Tag & Icon */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ color: "#c5a059", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase", fontSize: "13px", border: "1px solid rgba(197,160,89,0.3)", padding: "6px 16px", borderRadius: "50px", backgroundColor: "rgba(197,160,89,0.05)" }}>
                  {chapters[activeChapter].timeline}
                </span>
                <div style={{ opacity: 0.8 }}>
                  {chapters[activeChapter].icon}
                </div>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: "36px", fontFamily: "Georgia, serif", color: "#0a2342", margin: "0 0 24px 0" }}>
                {chapters[activeChapter].title}
              </h2>

              {/* Description */}
              <p style={{ fontSize: "18px", color: "#555", fontFamily: "Georgia, serif", fontStyle: "italic", margin: "0 0 40px 0", paddingBottom: "30px", borderBottom: "1px solid #eaeaea", lineHeight: "1.6" }}>
                "{chapters[activeChapter].description}"
              </p>

              {/* Tasks List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {chapters[activeChapter].tasks.map((task, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ marginTop: "4px" }}>
                      <Target size={18} color="#c5a059" />
                    </div>
                    <span style={{ color: "#333", fontSize: "16px", lineHeight: "1.6" }}>{task}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ================= PAGINATION CONTROLS ================= */}
            <div style={{ marginTop: "60px", paddingTop: "24px", borderTop: "1px solid #eaeaea", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              
              <button 
                onClick={() => { if (activeChapter > 0) setActiveChapter(activeChapter - 1) }}
                style={{ display: "flex", alignItems: "center", gap: "8px", background: "transparent", border: "none", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", cursor: activeChapter === 0 ? "not-allowed" : "pointer", color: activeChapter === 0 ? "#ccc" : "#0a2342" }}
              >
                <ChevronLeft size={16} /> Prev
              </button>

              <button 
                onClick={() => { if (activeChapter < chapters.length - 1) setActiveChapter(activeChapter + 1) }}
                style={{ display: "flex", alignItems: "center", gap: "8px", background: "transparent", border: "none", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", cursor: activeChapter === chapters.length - 1 ? "not-allowed" : "pointer", color: activeChapter === chapters.length - 1 ? "#ccc" : "#0a2342" }}
              >
                Next <ChevronRight size={16} />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}