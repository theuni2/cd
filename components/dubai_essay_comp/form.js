// "use client";

// import React, { useState } from "react";
// import { X } from "lucide-react";

// export default function SubmitModal({ isOpen, onClose }) {
//   // Form State
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     school: "",
//     category: "",
//     contactNumber: "",
//     counselorName: "",
//     counselorEmail: "",
//     idDriveLink: "",
//     docLink: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("idle");

//   // Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Form Submission (Connected to Nodemailer API)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // 1. Send the data to your Next.js backend
//       const response = await fetch('/api/submit-essay', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), 
//       });

//       // 2. Check if the email was sent successfully
//       if (response.ok) {
//         setSubmitStatus("success");
//       } else {
//         console.error("Server failed to send the email.");
//         alert("Something went wrong on our end. Please try again.");
//       }
//     } catch (error) {
//       // 3. Catch network errors
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please check your connection and try again.");
//     } finally {
//       // 4. Always turn off the loading spinner, success or fail
//       setIsSubmitting(false);
//     }
//   };

//   // If modal is not open, render nothing
//   if (!isOpen) return null;

//   return (
//     // OVERLAY: Darkens the background and blurs it
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a2342]/80 backdrop-blur-sm p-4">
      
//       {/* MODAL BOX */}
//       <div 
//         className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
//         style={{ maxHeight: '90vh', overflowY: 'auto' }}
//       >
//         {/* Close Button (Top Right X) */}
//         <button 
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: "24px",
//             right: "24px",
//             background: "transparent",
//             border: "none",
//             cursor: "pointer",
//             color: "#888"
//           }}
//         >
//           <X size={24} />
//         </button>

//         {/* Modal Header */}
//         <div className="bg-[#f8f9fa] p-8 border-b border-gray-100 text-center">
//           <span className="text-[#c5a059] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
//             The Career Discovery
//           </span>
//           <h2 className="text-3xl font-serif font-bold text-[#0a2342] m-0">
//             Official Submission Form
//           </h2>
//           <p className="text-gray-500 mt-2 text-sm">
//             Please ensure your essay follows the naming convention outlined in the rules before submitting.
//           </p>
//         </div>

//         {/* Form Body */}
//         {submitStatus === "success" ? (
//           <div className="p-12 text-center">
//             <h3 className="text-2xl font-serif text-[#0a2342] mb-4">Submission Received</h3>
//             <p className="text-gray-600 mb-8">Thank you, {formData.firstName}. Your essay has been securely submitted to the faculty for review.</p>
            
//             {/* HARD-CODED CLOSE BUTTON */}
//             <button 
//               onClick={onClose}
//               style={{
//                 backgroundColor: "#0a2342",
//                 color: "#ffffff",
//                 padding: "16px 32px",
//                 border: "none",
//                 borderRadius: "4px",
//                 fontWeight: "bold",
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//                 cursor: "pointer",
//                 fontSize: "14px",
//                 boxShadow: "0 4px 10px rgba(10,35,66,0.2)"
//               }}
//             >
//               CLOSE WINDOW
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="p-8">
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* First Name */}
//               <div>
//                 <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">First Name *</label>
//                 <input 
//                   type="text" 
//                   name="firstName"
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//                 />
//               </div>

//               {/* Last Name */}
//               <div>
//                 <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">Last Name *</label>
//                 <input 
//                   type="text" 
//                   name="lastName"
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-6">
//               <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">Email Address *</label>
//               <input 
//                 type="email" 
//                 name="email"
//                 required
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//               />
//             </div>

//             {/* School */}
//             <div className="mb-6">
//               <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">School *</label>
//               <input 
//                 type="text" 
//                 name="school"
//                 required
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//               />
//             </div>

//             {/* Category Dropdown */}
//             <div className="mb-6">
//               <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">Essay Category *</label>
//               <select 
//                 name="category"
//                 required
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm appearance-none"
//               >
//                 <option value="">Select a Discipline...</option>
//                 <option value="Philosophy">Philosophy</option>
//                 <option value="Politics">Politics</option>
//                 <option value="Economics">Economics</option>
//                 <option value="History">History</option>
//                 <option value="Psychology">Psychology</option>
//                 <option value="Theology">Theology</option>
//                 <option value="Law">Law</option>
//                 <option value="Junior Prize">Junior Prize (Under 14s)</option>
//               </select>
//             </div>

//             {/* Phone Number */}
//             <div className="mb-6">
//               <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">Phone Number *</label>
//               <input 
//                 type="text" 
//                 name="contactNumber"
//                 required
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//               />
//             </div>

//             {/* Counselor Details (Two-Column Layout) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* Counselor Name */}
//               <div>
//                 <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">Counselor Name *</label>
//                 <input 
//                   type="text" 
//                   name="counselorName"
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//                 />
//               </div>

//               {/* Counselor Email */}
//               <div>
//                 <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">Counselor Email *</label>
//                 <input 
//                   type="email" 
//                   name="counselorEmail"
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//                 />
//               </div>
//             </div>

//             {/* Google Doc Link */}
//             <div className="mb-8">
//               <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">Essay Google Document Link *</label>
//               <p className="text-xs text-gray-500 mb-2">Ensure link sharing is set to "Anyone with the link can view".</p>
//               <input 
//                 type="url" 
//                 name="docLink"
//                 required
//                 placeholder="https://docs.google.com/document/d/..."
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//               />
//             </div>

//             {/* ID Drive Link */}
//             <div className="mb-8">
//               <label className="block text-sm font-bold text-[#0a2342] uppercase tracking-wider mb-2">ID Drive Link *</label>
//               <p className="text-xs text-gray-500 mb-2">Ensure link sharing is set to "Anyone with the link can view".</p>
//               <input 
//                 type="url" 
//                 name="idDriveLink"
//                 required
//                 placeholder="https://docs.google.com/document/d/..."
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none transition-all rounded-sm"
//               />
//             </div>

//             {/* HARD-CODED SUBMIT BUTTON */}
//             <button 
//               type="submit" 
//               disabled={isSubmitting}
//               style={{
//                 width: "100%",
//                 padding: "16px 0",
//                 backgroundColor: isSubmitting ? "#888888" : "#0a2342",
//                 color: "#ffffff",
//                 border: "none",
//                 borderRadius: "4px",
//                 fontWeight: "bold",
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//                 fontSize: "16px",
//                 cursor: isSubmitting ? "not-allowed" : "pointer",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 boxShadow: "0 4px 15px rgba(10,35,66,0.3)",
//                 marginTop: "10px"
//               }}
//             >
//               {isSubmitting ? "Submitting to Faculty..." : "Submit Essay"}
//             </button>
            
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function SubmitModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    category: "",
    contactNumber: "",
    counselorName: "",
    counselorEmail: "",
    idDriveLink: "",
    docLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-essay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) setSubmitStatus("success");
      else alert("Something went wrong. Please try again.");
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    /* OVERLAY: Inline zIndex: 999999 guarantees it forces over all page text */
    <div 
      style={{ zIndex: 999999 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
    >
      
      {/* MODAL CARD: Height bounded to viewport with flex column */}
      <div 
        style={{ maxHeight: "88vh" }}
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden my-auto"
      >
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          style={{ zIndex: 100 }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all cursor-pointer shadow"
        >
          <X size={18} />
        </button>

        {/* HEADER (Fixed at top of modal) */}
        <div className="bg-gray-50 p-5 md:p-6 border-b border-gray-200 text-center shrink-0 pr-12">
          <span className="text-[#c5a059] text-xs font-bold tracking-[0.2em] uppercase mb-1 block">
            The Career Discovery
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#0a2342] m-0">
            Official Submission Form
          </h2>
          <p className="text-gray-500 mt-1 text-xs max-w-md mx-auto">
            Please fill in all mandatory fields before submitting.
          </p>
        </div>

        {/* SCROLLABLE FORM BODY (minHeight: 0 enables flex scroll in all browsers) */}
        <div 
          style={{ minHeight: 0 }} 
          className="flex-1 overflow-y-auto p-5 md:p-8"
        >
          {submitStatus === "success" ? (
            <div className="py-8 text-center">
              <h3 className="text-xl font-serif text-[#0a2342] mb-2">Submission Received</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Thank you, {formData.firstName}. Your essay has been securely submitted.
              </p>
              <button
                onClick={onClose}
                className="bg-[#0a2342] text-white px-6 py-2.5 rounded-sm font-bold uppercase text-xs cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pb-2">
              
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm"
                />
              </div>

              {/* School */}
              <div>
                <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                  School *
                </label>
                <input
                  type="text"
                  name="school"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm"
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                  Essay Category *
                </label>
                <div className="relative">
                  <select
                    name="category"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm appearance-none cursor-pointer text-gray-800"
                  >
                    <option value="">Select a Discipline...</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Politics">Politics</option>
                    <option value="Economics">Economics</option>
                    <option value="History">History</option>
                    <option value="Psychology">Psychology</option>
                    <option value="Theology">Theology</option>
                    <option value="Law">Law</option>
                    <option value="Junior Prize">Junior Prize (Under 14s)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <span className="text-xs">▼</span>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm"
                />
              </div>

              {/* Counselor Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                    Counselor Name *
                  </label>
                  <input
                    type="text"
                    name="counselorName"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1">
                    Counselor Email *
                  </label>
                  <span className="block text-[10px] text-gray-400 font-medium mb-1">
                    Provide official email for verification.
                  </span>
                  <input
                    type="email"
                    name="counselorEmail"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm"
                  />
                </div>
              </div>

              {/* Google Doc Link */}
              <div>
                <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1">
                  Essay Google Document Link *
                </label>
                <p className="text-[11px] text-gray-400 mb-1.5">
                  Ensure sharing permissions are set to "Anyone with link can view".
                </p>
                <input
                  type="url"
                  name="docLink"
                  required
                  placeholder="https://docs.google.com/document/d/..."
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm placeholder:text-gray-300"
                />
              </div>

              {/* ID Drive Link */}
              <div>
                <label className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1">
                  ID Drive Link *
                </label>
                <p className="text-[11px] text-gray-400 mb-1.5">
                  Upload a verification file or academic card copy to Google Drive.
                </p>
                <input
                  type="url"
                  name="idDriveLink"
                  required
                  placeholder="https://drive.google.com/drive/folders/..."
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] outline-none rounded-sm text-sm placeholder:text-gray-300"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4 pb-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 text-white rounded-sm font-bold tracking-widest uppercase text-xs flex justify-center items-center shadow-lg transition-all ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#0a2342] hover:bg-[#0d2f59] cursor-pointer"
                  }`}
                >
                  {isSubmitting ? "Submitting to Faculty..." : "Submit Essay"}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}