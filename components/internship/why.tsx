import React from 'react';
import { Lightbulb, Brain, Briefcase, GraduationCap } from 'lucide-react';

const DifferenceSection = () => {
  const features = [
    {
      id: "01",
      title: "Exposure Before Decisions",
      desc: "Students don't just guess careers, they experience them first hand.",
      icon: <Lightbulb size={24} color="#ca8a04" />
    },
    {
      id: "02",
      title: "Learn How Professionals Think",
      desc: "It’s not about tasks; it’s about decision-making, problem-solving, and frameworks.",
      icon: <Brain size={24} color="#ca8a04" />
    },
    {
      id: "03",
      title: "Build Real Work",
      desc: "Students create actual projects, case studies, or solutions they can show, not just say.",
      icon: <Briefcase size={24} color="#ca8a04" />
    },
    {
      id: "04",
      title: "Stand Out in Applications",
      desc: "Top universities value real-world depth. This is a clear differentiator vs. generic extracurriculars.",
      icon: <GraduationCap size={24} color="#ca8a04" />
    }
  ];

  return (
    <section style={{ 
      backgroundColor: '#f8fafc', 
      padding: '80px 24px', 
      borderRadius: '60px', 
      margin: '20px' 
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header Aligned with previous section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Why Shadowed Internship?
          </h2>
          <div style={{ width: '80px', height: '6px', backgroundColor: '#facc15', margin: '20px auto', borderRadius: '10px' }}></div>
        </div>

        {/* Feature List */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px' 
        }}>
          {features.map((f) => (
            <div key={f.id} style={{ 
              backgroundColor: '#ffffff', 
              padding: '32px', 
              borderRadius: '32px', 
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: '#fefce8', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                {f.icon}
              </div>
              
              <div>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#facc15', display: 'block', marginBottom: '4px' }}>
                  STEP {f.id}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '12px', lineHeight: '1.3' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: '0' }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DifferenceSection;


// import React from 'react';
// import { ChevronRight, CheckCircle2, XCircle, Briefcase, Target, Users } from 'lucide-react';

// const DifferenceSection = () => {
//   return (
//     <section className="py-16 px-4 bg-white font-sans">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 tracking-tight">
//           HOW IS THIS DIFFERENT?
//         </h2>

//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          
//           {/* Career Discovery Card */}
//           <div className="w-full lg:w-[45%] bg-amber-400 rounded-3xl p-8 md:p-10 shadow-xl transform transition hover:scale-[1.02]">
//             <h3 className="text-2xl font-black text-center mb-10 border-b-2 border-black pb-4 uppercase tracking-wider">
//               Career Discovery
//             </h3>
            
//             <div className="space-y-8">
//               <div className="flex gap-4">
//                 <Users className="flex-shrink-0 w-8 h-8 text-black" />
//                 <div>
//                   <h4 className="font-bold text-lg leading-tight text-black">1:1 Truly Personalized &gt; Group</h4>
//                   <p className="text-black/80 mt-1 leading-relaxed">Tailored guidance aligned to your goals, accessible from anywhere.</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <Target className="flex-shrink-0 w-8 h-8 text-black" />
//                 <div>
//                   <h4 className="font-bold text-lg leading-tight text-black">Outcome &gt; Just Learning</h4>
//                   <p className="text-black/80 mt-1 leading-relaxed">Build high-impact deliverables like case studies, research papers, PPTs, market reports, or strategy decks.</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <Briefcase className="flex-shrink-0 w-8 h-8 text-black" />
//                 <div>
//                   <h4 className="font-bold text-lg leading-tight text-black">Mentors Who Build the Real World</h4>
//                   <p className="text-black/80 mt-1 leading-relaxed">Get certified directly from professionals at top organizations (Google, Microsoft, etc.)</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Central Arrow (Hidden on small screens) */}
//           <div className="hidden lg:flex items-center justify-center">
//             <div className="bg-amber-400 p-4 rounded-full shadow-lg">
//               <ChevronRight className="w-12 h-12 text-white stroke-[3px]" />
//             </div>
//           </div>

//           {/* Others Card */}
//           <div className="w-full lg:w-[45%] bg-amber-400/90 rounded-3xl p-8 md:p-10 shadow-md">
//             <h3 className="text-2xl font-black text-center mb-10 border-b-2 border-black/20 pb-4 uppercase tracking-wider text-black/70">
//               Others
//             </h3>
            
//             <div className="space-y-8 opacity-90">
//               <div className="flex gap-4">
//                 <XCircle className="flex-shrink-0 w-8 h-8 text-black/60" />
//                 <div>
//                   <h4 className="font-bold text-lg leading-tight text-black/70 italic">Generic Group Learning</h4>
//                   <p className="text-black/60 mt-1">Limited personalization with divided mentor attention.</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <XCircle className="flex-shrink-0 w-8 h-8 text-black/60" />
//                 <div>
//                   <h4 className="font-bold text-lg leading-tight text-black/70 italic">Theory-Heavy Approach</h4>
//                   <p className="text-black/60 mt-1">Only videos/readings. No tangible outputs to showcase.</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <XCircle className="flex-shrink-0 w-8 h-8 text-black/60" />
//                 <div>
//                   <h4 className="font-bold text-lg leading-tight text-black/70 italic">Non-Industry Mentors</h4>
//                   <p className="text-black/60 mt-1">Guidance from trainers, not active professionals.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DifferenceSection;