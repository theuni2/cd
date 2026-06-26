



// import React, { useState } from 'react';
// import { Users, Trophy, GraduationCap, CheckCircle2, Clock, AlertCircle, X, ArrowUpRight } from 'lucide-react';

// // Ambassador Mock Data
// const STUDENT_AMBASSADORS = [
//   {
//     name: "Aanya Mehta",
//     batch: "Grade 11",
//     school: "The Doon School, India",
//     role: "Founding Ambassador",
//     image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
//   },
//   {
//     name: "Dev Kabir",
//     batch: "Grade 12",
//     school: "UWC South East Asia, Singapore",
//     role: "Research Advocate",
//     image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
//   },
//   {
//     name: "Zara Al-Jamil",
//     batch: "Grade 11",
//     school: "Dubai College, UAE",
//     role: "Competition lead",
//     image: "https://images.pexels.com/photos/2423537/pexels-photo-2423537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
//   }
// ];

// const CampusAmbassador = () => {
//   // Modal toggle states: 'none', 'apply', or 'waitlist'
//   const [activeModal, setActiveModal] = useState('none');
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // Application Form State mapping exact questions (Question 4 Removed completely)
//   const [appForm, setAppForm] = useState({
//     fullName: '',
//     grade: '',
//     schoolName: '',
//     cityCountry: '',
//     whatsapp: '',
//     email: '',
//     q2_motivation: '',
//     q3_initiative: '',
//     q5_strategy: ''
//   });

//   // Waitlist Form State
//   const [waitlistEmail, setWaitlistEmail] = useState('');

//   // Universal Form Handler
//   const handleFormSubmit = async (e, type) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // REPLACE THIS with your actual Google Apps Script Web App URL or Webhook link
//     const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyLBYXkvuQtQqeCn8e0oGGoK1vN42kWhReX6cl-vjCzW4eQzDwECZoLNIdjj7PFOyLFnw/exec';

//     const payload = type === 'application' 
//       ? { type: 'Ambassador Application', ...appForm, timestamp: new Date().toISOString() }
//       : { type: 'Waitlist Opt-In', email: waitlistEmail, timestamp: new Date().toISOString() };

//     try {
//       await fetch(WEBHOOK_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         mode: 'no-cors', // Essential for sending data directly to Google Scripts
//         body: JSON.stringify(payload),
//       });

//       alert(type === 'application' 
//         ? 'Your application has been received personally! We will review and reach out within 72 hours. 🎉' 
//         : 'You have been added to the priority waitlist pool.'
//       );
      
//       // Reset forms and close modal
//       setActiveModal('none');
//       setAppForm({
//         fullName: '', grade: '', schoolName: '', cityCountry: '', whatsapp: '', email: '',
//         q2_motivation: '', q3_initiative: '', q5_strategy: ''
//       });
//       setWaitlistEmail('');
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Network error detected. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-blue-100 py-24 relative" id="ambassador">
//       <div className="container max-w-5xl mx-auto px-6">
        
//         {/* Header Block matching Main Hero Theme */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="mb-6 inline-block rounded-full bg-white/30 px-4 py-2 backdrop-blur-md border border-white/20">
//             <span className="text-sm font-medium text-gray-800 flex items-center gap-2">
//               <Users className="w-4 h-4 text-indigo-600" /> Grades 8 to 12 Student Leadership Program
//             </span>
//           </div>
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl mb-6 leading-tight">
//             Become a Career Discovery <br/>Campus Ambassador
//           </h2>
//           <p className="text-base md:text-lg text-gray-600">
//             Are you a high school student who loves discovering opportunities — and wants to be the person who brings them to your school? Represent us globally on your own schedule.
//           </p>
//         </div>

//         {/* Core Layout Split */}
//         <div className="grid md:grid-cols-12 gap-12 items-start">
          
//           {/* Left Column: Requirements, Perks, and Info */}
//           <div className="md:col-span-7 space-y-10">
//             <div className="space-y-3">
//               <h3 className="text-xl font-bold text-gray-900">What you'll do:</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Share Career Discovery opportunities with students at your school who would benefit. **One to two hours a month**, on your own schedule, from wherever you are. We provide everything you need you handle the conversations.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-gray-900">What you get:</h3>
//               <div className="grid gap-4">
//                 <div className="flex gap-3 items-start">
//                   <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
//                   <p className="text-sm text-gray-600"><strong className="text-gray-900">Official Appointment Letter:</strong> Signed by our founder recognizing your leadership title locally.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <Trophy className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
//                   <p className="text-sm text-gray-600"><strong className="text-gray-900">Live Website Footprint:</strong> Your name and school listed on our platform as a verified credential for your college applications.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
//                   <p className="text-sm text-gray-600"><strong className="text-gray-900">Exclusive Insights:</strong> Monthly breakdowns of global competitions, unique industry perspectives, and advanced career guidance.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
//                   <p className="text-sm text-gray-600"><strong className="text-gray-900">$5 Direct Program Credits:</strong> Stackable rewards earned for every enrolled student referral—redeemable against any workshop or program.</p>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
//                   <p className="text-sm text-gray-600"><strong className="text-gray-900">Founder's LOR:</strong> A personalized Letter of Recommendation after 6 months of active service for your university applications.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Cohort Urgent Notification Box */}
//             <div className="bg-white/40 border border-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm space-y-4">
//               <div className="flex items-center gap-2 text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs font-medium w-fit">
//                 <Clock className="w-4 h-4" /> 4 spots remaining in the current cohort
//               </div>
//               <p className="text-xs text-gray-500">
//                 Applications are rolling but strictly capped. We only onboard 25 new ambassadors at a time to maintain high-quality mentorship access.
//               </p>
              
//               <div className="flex flex-wrap gap-4 pt-2">
//                 <button 
//                   onClick={() => setActiveModal('apply')}
//                   className="inline-flex items-center gap-1 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm"
//                 >
//                   Apply Now — takes 5 mins <ArrowUpRight className="w-4 h-4" />
//                 </button>
//                 <button 
//                   onClick={() => setActiveModal('waitlist')}
//                   className="text-gray-600 hover:text-gray-900 underline font-medium text-sm py-2.5"
//                 >
//                   Join the Waitlist
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Active Ambassador Showcase Cards */}
//           <div className="md:col-span-5 space-y-6">
//             <h3 className="text-lg font-bold text-gray-900 px-1">Active Global Peers</h3>
//             <div className="space-y-4">
//               {STUDENT_AMBASSADORS.map((student, idx) => (
//                 <div key={idx} className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-sm hover:translate-x-1 transition-transform">
//                   <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full border-2 border-indigo-50 relative">
//                     <img 
//                       src={student.image} 
//                       alt={student.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <div className="flex items-center justify-between gap-2 mb-0.5">
//                       <h4 className="font-bold text-gray-900 text-sm truncate">{student.name}</h4>
//                       <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
//                         {student.batch}
//                       </span>
//                     </div>
//                     <p className="text-xs font-semibold text-indigo-600 mb-0.5">{student.role}</p>
//                     <p className="text-xs text-gray-500 truncate">{student.school}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* MODAL 1: FULL APPLICATION OVERLAY */}
//         {activeModal === 'apply' && (
//           <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm px-4 py-6 sm:py-12 flex justify-center items-start">
//             <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative border border-gray-100 my-auto">
              
//               <button 
//                 onClick={() => setActiveModal('none')}
//                 className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2 text-left pr-8">Ambassador Application</h3>
//                 <div className="flex items-start gap-2 bg-indigo-50/70 border border-indigo-100 p-3 rounded-xl">
//                   <AlertCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
//                   <p className="text-xs text-indigo-900 leading-normal font-medium text-left">
//                     "We review every application personally and respond within 72 hours. Be genuine that's what we're looking for."
//                   </p>
//                 </div>
//               </div>

//               <form onSubmit={(e) => handleFormSubmit(e, 'application')} className="space-y-5 text-left">
                
//                 {/* Question 1: Background Data Stack */}
//                 <div className="bg-gray-50/50 border border-gray-100 p-4 rounded-2xl space-y-3">
//                   <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">Part 1: Background Data</span>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <input 
//                       type="text" placeholder="Full Name" required
//                       value={appForm.fullName} onChange={(e) => setAppForm({...appForm, fullName: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-white"
//                     />
//                     <input 
//                       type="text" placeholder="Grade (e.g. Grade 10)" required
//                       value={appForm.grade} onChange={(e) => setAppForm({...appForm, grade: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-white"
//                     />
//                     <input 
//                       type="text" placeholder="School Name" required
//                       value={appForm.schoolName} onChange={(e) => setAppForm({...appForm, schoolName: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-white"
//                     />
//                     <input 
//                       type="text" placeholder="City and Country" required
//                       value={appForm.cityCountry} onChange={(e) => setAppForm({...appForm, cityCountry: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-white"
//                     />
//                     <input 
//                       type="tel" placeholder="WhatsApp Number" required
//                       value={appForm.whatsapp} onChange={(e) => setAppForm({...appForm, whatsapp: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-white"
//                     />
//                     <input 
//                       type="email" placeholder="Email Address" required
//                       value={appForm.email} onChange={(e) => setAppForm({...appForm, email: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-white"
//                     />
//                   </div>
//                 </div>

//                 {/* Question 2 */}
//                 <div>
//                   <label className="block text-xs font-bold text-gray-700 mb-1">
//                     What made you apply to the Career Discovery Ambassador Program? <span className="text-gray-400 font-normal">(1-2 sentences)</span>
//                   </label>
//                   <textarea 
//                     required rows={2}
//                     value={appForm.q2_motivation} onChange={(e) => setAppForm({...appForm, q2_motivation: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-gray-50/30"
//                     placeholder="Tell us what sparked your interest..."
//                   />
//                 </div>

//                 {/* Question 3 */}
//                 <div>
//                   <label className="block text-xs font-bold text-gray-700 mb-1">
//                     Tell us about one thing you've done at school or outside it where you took initiative. What did you do? <span className="text-gray-400 font-normal">(2-3 sentences)</span>
//                   </label>
//                   <textarea 
//                     required rows={2}
//                     value={appForm.q3_initiative} onChange={(e) => setAppForm({...appForm, q3_initiative: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-gray-50/30"
//                     placeholder="Describe a project, club activity, event, or initiative you helped lead..."
//                   />
//                 </div>

//                 {/* Question 5 */}
//                 <div>
//                   <label className="block text-xs font-bold text-gray-700 mb-1">
//                     How would you share Career Discovery with students at your school? <span className="text-gray-400 font-normal">(1-2 sentences — be specific)</span>
//                   </label>
//                   <textarea 
//                     required rows={2}
//                     value={appForm.q5_strategy} onChange={(e) => setAppForm({...appForm, q5_strategy: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 bg-gray-50/30"
//                     placeholder="e.g., WhatsApp school channels, pitching to student council, club boards..."
//                   />
//                 </div>

//                 {/* Footer Copy & Submission Hook */}
//                 <div className="pt-2 border-t border-gray-100">
//                   <button
//                     type="submit" disabled={isSubmitting}
//                     className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-indigo-400 text-white font-medium py-3 rounded-xl transition-all shadow-sm text-sm"
//                   >
//                     {isSubmitting ? 'Processing Application...' : 'Submit Application'}
//                   </button>
//                 </div>
//               </form>

//             </div>
//           </div>
//         )}

//         {/* MODAL 2: COHORT WAITLIST OVERLAY */}
//         {activeModal === 'waitlist' && (
//           <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm px-4 py-6 flex justify-center items-start">
//             <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative border border-gray-100 my-auto">
              
//               <button 
//                 onClick={() => setActiveModal('none')}
//                 className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 z-10"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <h3 className="text-xl font-bold text-gray-900 mb-1 text-left pr-8">Join the Priority Waitlist</h3>
//               <p className="text-xs text-gray-600 mb-4 text-left">We'll alert you the exact moment the next ambassador cohort application window goes live.</p>

//               <form onSubmit={(e) => handleFormSubmit(e, 'waitlist')} className="space-y-3 text-left">
//                 <input 
//                   type="email" placeholder="Enter your email address" required
//                   value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)}
//                   className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <button
//                   type="submit" disabled={isSubmitting}
//                   className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white text-sm font-medium py-2.5 rounded-xl transition-all"
//                 >
//                   {isSubmitting ? 'Adding...' : 'Notify Me First'}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default CampusAmbassador;


import React, { useState } from 'react';
import { Users, Trophy, GraduationCap, CheckCircle2, Clock, AlertCircle, X, ArrowUpRight } from 'lucide-react';

// Ambassador Mock Data
const STUDENT_AMBASSADORS = [
  {
    name: "Aanya Mehta",
    batch: "Grade 11",
    school: "The Doon School, India",
    role: "Founding Ambassador",
    image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    name: "Dev Kabir",
    batch: "Grade 12",
    school: "UWC South East Asia, Singapore",
    role: "Research Advocate",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    name: "Zara Al-Jamil",
    batch: "Grade 11",
    school: "Dubai College, UAE",
    role: "Competition Lead",
    image: "https://images.pexels.com/photos/2423537/pexels-photo-2423537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const CampusAmbassador = () => {
  const [activeModal, setActiveModal] = useState('none');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [appForm, setAppForm] = useState({
    fullName: '',
    grade: '',
    schoolName: '',
    cityCountry: '',
    whatsapp: '',
    email: '',
    q2_motivation: '',
    q3_initiative: '',
    q5_strategy: ''
  });

  const [waitlistEmail, setWaitlistEmail] = useState('');

  const handleFormSubmit = async (e, type) => {
    e.preventDefault();
    setIsSubmitting(true);

    const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyLBYXkvuQtQqeCn8e0oGGoK1vN42kWhReX6cl-vjCzW4eQzDwECZoLNIdjj7PFOyLFnw/exec';

    const payload = type === 'application' 
      ? { type: 'Ambassador Application', ...appForm, timestamp: new Date().toISOString() }
      : { type: 'Waitlist Opt-In', email: waitlistEmail, timestamp: new Date().toISOString() };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });

      alert(type === 'application' 
        ? 'Your application has been received personally! We will review and reach out within 72 hours. 🎉' 
        : 'You have been added to the priority waitlist pool.'
      );
      
      setActiveModal('none');
      setAppForm({
        fullName: '', grade: '', schoolName: '', cityCountry: '', whatsapp: '', email: '',
        q2_motivation: '', q3_initiative: '', q5_strategy: ''
      });
      setWaitlistEmail('');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error detected. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 relative overflow-hidden" id="ambassador">
      
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 -translate-x-20 translate-y-20" />

      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Main Section Header */}
       {/* Main Section Header */}
<div className="max-w-3xl mb-16 text-center mx-auto">
  <div className="mb-5 inline-block rounded-full bg-indigo-50 border border-indigo-100/80 px-4 py-1.5 shadow-sm">
    <span className="text-xs font-semibold text-indigo-700 flex items-center gap-2 tracking-wide uppercase">
      <Users className="w-3.5 h-3.5" /> Grades 8 to 12 Student Leadership Program
    </span>
  </div>
  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl mb-5 leading-tight">
    Become a Career Discovery <br />
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
      Campus Ambassador
    </span>
  </h2>
  <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto"> {/* Added mx-auto here too just in case for the paragraph */}
    Are you a high school student who loves discovering opportunities and wants to be the person who brings them to your school? Represent us globally on your own schedule.
  </p>
</div>

        {/* Master Column Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block (7 Cols): Focus Content & Actions */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="bg-white/60 border border-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                What you'll do
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Share Career Discovery opportunities with students at your school who would benefit. <span className="font-semibold text-indigo-600">On your own schedule</span>, from wherever you are. We provide everything you need you handle the conversations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 px-1">What you get</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-3">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Official Appointment Letter</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Signed by our founder recognizing your leadership title locally.</p>
                </div>

                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-3">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Live Website Footprint</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Your name and school listed on our platform as a verified college credential.</p>
                </div>

                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Exclusive Media Coverage</h4>
<p className="text-xs text-gray-500 leading-relaxed">
  Get exclusive media coverage, featured stories, and visibility opportunities to showcase your achievements.
</p> </div>

                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Program Credits & LOR</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Stackable reward credits plus a personalized Founder's LOR.</p>
                </div>

              </div>
            </div>

            {/* Urgency Trigger Panel */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-2xl p-6 shadow-md text-white space-y-4 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-40 h-40 bg-gray-500/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-2 text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-lg px-3 py-1.5 text-xs font-semibold w-fit">
                <Clock className="w-3.5 h-3.5" /> Only 4 spots remaining in current cohort
              </div>
              <p className="text-xs text-gray-300 max-w-xl leading-relaxed">
                Applications are reviewed on a rolling basis but strictly capped. We only onboard 25 new ambassadors at a time to maintain high-quality mentorship access.
              </p>
              
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button 
                  onClick={() => setActiveModal('apply')}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm px-5 py-3 rounded-xl transition-all shadow-sm transform active:scale-95"
                >
                  Apply Now — takes 5 mins <ArrowUpRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveModal('waitlist')}
                  className="text-gray-300 hover:text-white underline font-medium text-sm transition-colors py-2"
                >
                  Join the Waitlist
                </button>
              </div>
            </div>

          </div>

          {/* Right Block (5 Cols): Premium Visual Asset & Peers Showcase */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Custom Requested Feature Image with Framed Design */}
            <div className="relative group rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[4/3] sm:aspect-[16/10] lg:aspect-square bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1779286351762-8d263f04947e?w=800&auto=format&fit=crop&q=80" 
                alt="Student Leadership Engagement"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-medium text-indigo-200 tracking-wider uppercase mb-0.5">Global Student Network</p>
                <p className="text-sm font-semibold opacity-95">Lead initiatives, earn credentials, map your career roadmap.</p>
              </div>
            </div>

            {/* Peer Cards Container */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-wider text-gray-400 uppercase px-1">Active Global Peers</h3>
              <div className="space-y-3">
                {STUDENT_AMBASSADORS.map((student, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/80 border border-gray-100 p-4 rounded-2xl shadow-xs hover:-translate-y-0.5 transition-all duration-300">
                    {/* <div className="w-12 h-12 shrink-0 overflow-hidden rounded-full border-2 border-indigo-100"> */}
                      {/* <img src={student.image} alt={student.name} className="w-full h-full object-cover" /> */}
                    {/* </div> */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">{student.name}</h4>
                        <span className="text-[9px] sm:text-[10px] bg-indigo-50 border border-indigo-100/60 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">
                          {student.batch}
                        </span>
                      </div>
                      <p className="text-[11px] font-medium text-indigo-600 my-0.5">{student.role}</p>
                      <p className="text-[11px] text-gray-400 truncate font-normal">{student.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* MODAL 1: APPLICATION WINDOW */}
        {activeModal === 'apply' && (
          <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-xs px-4 py-6 flex justify-center items-center overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setActiveModal('none')}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ambassador Application</h3>
                <div className="flex items-start gap-2.5 bg-indigo-50 border border-indigo-100 p-3 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-indigo-950 leading-normal font-medium">
                    We review every profile uniquely and respond personally within 72 hours.
                  </p>
                </div>
              </div>

              <form onSubmit={(e) => handleFormSubmit(e, 'application')} className="space-y-4 text-left">
                
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl space-y-3">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Background Data</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" placeholder="Full Name" required
                      value={appForm.fullName} onChange={(e) => setAppForm({...appForm, fullName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                    <input 
                      type="text" placeholder="Grade (e.g. Grade 11)" required
                      value={appForm.grade} onChange={(e) => setAppForm({...appForm, grade: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                    <input 
                      type="text" placeholder="School Name" required
                      value={appForm.schoolName} onChange={(e) => setAppForm({...appForm, schoolName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                    <input 
                      type="text" placeholder="City and Country" required
                      value={appForm.cityCountry} onChange={(e) => setAppForm({...appForm, cityCountry: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                    <input 
                      type="tel" placeholder="WhatsApp Number" required
                      value={appForm.whatsapp} onChange={(e) => setAppForm({...appForm, whatsapp: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                    <input 
                      type="email" placeholder="Email Address" required
                      value={appForm.email} onChange={(e) => setAppForm({...appForm, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    What made you apply to the Career Discovery Ambassador Program? <span className="text-gray-400 font-normal">(1-2 sentences)</span>
                  </label>
                  <textarea 
                    required rows={2}
                    value={appForm.q2_motivation} onChange={(e) => setAppForm({...appForm, q2_motivation: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    placeholder="Tell us what sparked your interest..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Tell us about one thing you've done at school or outside it where you took initiative. <span className="text-gray-400 font-normal">(2-3 sentences)</span>
                  </label>
                  <textarea 
                    required rows={2}
                    value={appForm.q3_initiative} onChange={(e) => setAppForm({...appForm, q3_initiative: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    placeholder="Describe a project, club activity, event, or initiative you helped lead..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    How would you share Career Discovery with students at your school? <span className="text-gray-400 font-normal">(1-2 sentences)</span>
                  </label>
                  <textarea 
                    required rows={2}
                    value={appForm.q5_strategy} onChange={(e) => setAppForm({...appForm, q5_strategy: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
                    placeholder="e.g., WhatsApp school channels, student council pitches, club announcements..."
                  />
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 sm:py-3 rounded-xl transition-all text-xs sm:text-sm shadow-xs"
                  >
                    {isSubmitting ? 'Processing Application...' : 'Submit Application'}
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

        {/* MODAL 2: WAITLIST WINDOW */}
        {activeModal === 'waitlist' && (
          <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-xs px-4 py-6 flex justify-center items-center">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl relative border border-gray-100">
              
              <button 
                onClick={() => setActiveModal('none')}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 text-left"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-gray-900 mb-1 text-left">Join the Priority Waitlist</h3>
              <p className="text-xs text-gray-500 mb-4 text-left">We'll alert you the exact moment the next ambassador cohort application window opens.</p>

              <form onSubmit={(e) => handleFormSubmit(e, 'waitlist')} className="space-y-3 text-left">
                <input 
                  type="email" placeholder="Enter your email address" required
                  value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs sm:text-sm font-semibold py-2.5 rounded-xl transition-all"
                >
                  {isSubmitting ? 'Adding...' : 'Notify Me First'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CampusAmbassador;