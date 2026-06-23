"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CareerPopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen && !showSuccess) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "Prospect";
    const lastName = nameParts.slice(1).join(" ") || "Prospect";

    // Dynamic configuration for Career Discovery assets
    const careerFreebieLink = "https://yourdomain.com/downloads/career-blueprint.pdf";

    const formData = new FormData();
    formData.append("First Name", firstName);
    formData.append("Last Name", lastName);
    formData.append("Email", email);
    formData.append("Phone", phoneValue);
    formData.append("Company", "Career Discovery");
    formData.append("Lead Status", "New Lead");
    formData.append("Lead Source", "Career Discovery Popup"); // Identifies origin in Zoho

    // Your Zoho Web-to-Lead configuration keys
    formData.append("xnQsjsdp", "700024531e8bd49eeda61842c35ade4a3f32c8cb97adeb74c03e50b09bf95327");
    formData.append("xmIwtLD", "f930a1a23f5cf33381249dddf1fc60174c3c29e053c313e792d26550746d4daebf906ad47d4b0104446d4bf6100f10c5");
    formData.append("actionType", "TGVhZHM=");
    formData.append("returnURL", "null");

    try {
      const zohoPromise = fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        body: formData,
      });

      const emailPromise = emailjs.send(
        "service_2zhabz2",
        "template_au6ckbo", // Your fresh EmailJS template ID
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phoneValue,
          download_link: careerFreebieLink,
        },
        "qcOkFVGMENS8Nrhdx"
      );

      await Promise.all([zohoPromise, emailPromise]);
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {(isOpen || showSuccess) && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <motion.div className="bg-white rounded-2xl p-8 relative w-full max-w-md mx-4 text-gray-900 shadow-2xl">
            <button onClick={() => { setShowSuccess(false); onClose(); }} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg">✕</button>
            
            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Download Career Roadmap Guide 🚀</h2>
                <p className="text-sm text-gray-500">Map your skills to fields of the future.</p>
                
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Full Name*</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-50 rounded-lg border p-2 outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Email Address*</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 rounded-lg border p-2 outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Phone Number*</label>
                  <PhoneInput country={"in"} value={phoneValue} onChange={(val) => setPhoneValue(`+${val}`)} containerClass="!w-full" inputClass="!w-full !h-10 !bg-gray-50" inputProps={{ required: true }} />
                </div>
                <button type="submit" disabled={loading} className="w-full text-white font-medium bg-blue-600 py-3 rounded-xl shadow-md hover:bg-blue-700 transition">
                  {loading ? "Sending Roadmap..." : "Get Free Blueprint 📩"}
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mb-4">✔</div>
                <h2 className="text-2xl font-bold mb-2">Check Your Inbox! 📩</h2>
                <p className="text-gray-600 mb-6 text-sm">Your Career Roadmap **has been successfully sent to your email**. Please check your inbox to claim it.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}