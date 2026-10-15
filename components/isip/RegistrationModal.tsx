"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Users,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CreditCard,
  Building,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  AlertCircle
} from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrack?: "tech" | "social";
}

export default function RegistrationModal({
  isOpen,
  onClose,
  preselectedTrack = "tech",
}: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [teamType, setTeamType] = useState<"solo" | "team">("solo");
  const [selectedTrack, setSelectedTrack] = useState<"tech" | "social">(preselectedTrack);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    leadName: "",
    leadEmail: "",
    leadPhone: "",
    leadGrade: "10",
    schoolName: "",
    cityCountry: "",
    teamMember2Name: "",
    teamMember2Grade: "10",
    teamMember3Name: "",
    teamMember3Grade: "10",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentConsent: false,
    ideaSummary: "",
  });

  useEffect(() => {
    if (preselectedTrack) {
      setSelectedTrack(preselectedTrack);
    }
  }, [preselectedTrack]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.parentConsent) {
      alert("Please confirm parental/guardian consent under the DPDP Act to proceed.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API registration delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  const teamMemberCount = teamType === "solo" ? 1 : formData.teamMember3Name ? 3 : 2;
  const totalFee = teamMemberCount * 5000;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-white"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-bold text-white tracking-wide">
              ISIP Edition 1 Registration Portal
            </h3>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isSuccess ? (
            <>
              {/* Stepper Progress */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 text-xs">
                <div className={`flex items-center gap-2 font-semibold ${step >= 1 ? "text-cyan-400" : "text-slate-500"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono border ${
                    step >= 1 ? "border-cyan-400 bg-cyan-500/20" : "border-slate-700 bg-slate-800"
                  }`}>
                    1
                  </span>
                  <span>Track & Mode</span>
                </div>
                <div className="h-0.5 w-10 bg-slate-800" />
                <div className={`flex items-center gap-2 font-semibold ${step >= 2 ? "text-cyan-400" : "text-slate-500"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono border ${
                    step >= 2 ? "border-cyan-400 bg-cyan-500/20" : "border-slate-700 bg-slate-800"
                  }`}>
                    2
                  </span>
                  <span>Student Details</span>
                </div>
                <div className="h-0.5 w-10 bg-slate-800" />
                <div className={`flex items-center gap-2 font-semibold ${step >= 3 ? "text-cyan-400" : "text-slate-500"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono border ${
                    step >= 3 ? "border-cyan-400 bg-cyan-500/20" : "border-slate-700 bg-slate-800"
                  }`}>
                    3
                  </span>
                  <span>Parent Consent</span>
                </div>
              </div>

              <form onSubmit={handleNext}>
                {/* Step 1: Track & Mode */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Participation Format
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setTeamType("solo")}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            teamType === "solo"
                              ? "bg-blue-600/20 border-cyan-400 text-white"
                              : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <User className="w-5 h-5 text-cyan-400 mb-2" />
                          <div className="font-bold text-sm text-white">Solo Innovator</div>
                          <div className="text-xs text-slate-400 mt-1">1 student founder (₹5,000)</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setTeamType("team")}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            teamType === "team"
                              ? "bg-blue-600/20 border-cyan-400 text-white"
                              : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <Users className="w-5 h-5 text-emerald-400 mb-2" />
                          <div className="font-bold text-sm text-white">Collaborative Team</div>
                          <div className="text-xs text-slate-400 mt-1">2 to 3 students (₹5,000 / student)</div>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Select Your Specialized Track
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setSelectedTrack("tech")}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            selectedTrack === "tech"
                              ? "bg-cyan-500/20 border-cyan-400 text-white"
                              : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <Cpu className="w-5 h-5 text-cyan-400 mb-2" />
                          <div className="font-bold text-sm text-white">Tech Innovation</div>
                          <div className="text-xs text-slate-400 mt-1">AI, Apps, Software & Hardware logic</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedTrack("social")}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            selectedTrack === "social"
                              ? "bg-emerald-500/20 border-emerald-400 text-white"
                              : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <HeartHandshake className="w-5 h-5 text-emerald-400 mb-2" />
                          <div className="font-bold text-sm text-white">Social Impact</div>
                          <div className="text-xs text-slate-400 mt-1">Grassroots, Non-profit & Sustainability</div>
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                      <span>No built product required:</span>
                      <span className="text-cyan-400 font-medium">Judged on framework & pitch</span>
                    </div>
                  </div>
                )}

                {/* Step 2: Student Details */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Lead Student Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="leadName"
                          value={formData.leadName}
                          onChange={handleInputChange}
                          placeholder="e.g., Aarav Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Grade (Academic Year) *
                        </label>
                        <select
                          name="leadGrade"
                          value={formData.leadGrade}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        >
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                          <option value="10">Grade 10</option>
                          <option value="11">Grade 11</option>
                          <option value="12">Grade 12</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Student Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="leadEmail"
                          value={formData.leadEmail}
                          onChange={handleInputChange}
                          placeholder="student@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Student WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          name="leadPhone"
                          value={formData.leadPhone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          School / Institution Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          placeholder="e.g., The Heritage School"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          City & Country *
                        </label>
                        <input
                          type="text"
                          required
                          name="cityCountry"
                          value={formData.cityCountry}
                          onChange={handleInputChange}
                          placeholder="e.g., New Delhi, India"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    {teamType === "team" && (
                      <div className="pt-3 border-t border-slate-800 space-y-3">
                        <p className="text-xs font-mono uppercase text-cyan-400">
                          Teammate Details (Up to 2 additional students)
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="teamMember2Name"
                            value={formData.teamMember2Name}
                            onChange={handleInputChange}
                            placeholder="Teammate 2 Name"
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                          />
                          <input
                            type="text"
                            name="teamMember3Name"
                            value={formData.teamMember3Name}
                            onChange={handleInputChange}
                            placeholder="Teammate 3 Name (Optional)"
                            className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Safeguarding & Parental Consent */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2.5">
                      <Lock className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                      <span>
                        <strong>Minor Safeguarding (DPDP Act Compliance):</strong> As all participants are minors, verified parent or legal guardian consent is mandatory prior to cohort admission.
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Parent / Guardian Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          placeholder="e.g., Priya Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Parent Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          placeholder="parent@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Parent WhatsApp / Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Preliminary Problem Idea (Optional)
                      </label>
                      <textarea
                        rows={2}
                        name="ideaSummary"
                        value={formData.ideaSummary}
                        onChange={handleInputChange}
                        placeholder="Brief sentence on what problem you hope to explore..."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          name="parentConsent"
                          checked={formData.parentConsent}
                          onChange={handleInputChange}
                          className="mt-0.5 rounded text-cyan-500 focus:ring-cyan-400"
                        />
                        <span>
                          I confirm that parental/guardian consent is provided. I agree that student IP is 100% retained by the founders and that all communications are recorded on the educational platform.
                        </span>
                      </label>
                    </div>

                    {/* Fee Summary Box */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 block">Registration Fee ({teamMemberCount} student{teamMemberCount > 1 ? "s" : ""}):</span>
                        <span className="text-white font-bold text-sm">₹{totalFee.toLocaleString("en-IN")}</span>
                      </div>
                      <span className="text-emerald-400 font-mono text-[11px] bg-emerald-500/10 px-2 py-1 rounded">
                        Full Refund Pre-Week 1
                      </span>
                    </div>
                  </div>
                )}

                {/* Form Buttons */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Application...</span>
                    ) : step === 3 ? (
                      <span>Complete Registration (₹{totalFee.toLocaleString("en-IN")})</span>
                    ) : (
                      <>
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* Success Confirmation View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Welcome to ISIP Edition 1!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                  Your registration under the <strong className="text-cyan-400">{selectedTrack === "tech" ? "Tech Innovation" : "Social Impact"}</strong> track has been logged. An onboarding pack and receipt have been dispatched to {formData.leadEmail}.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Applicant:</span>
                  <span className="text-white font-medium">{formData.leadName}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Track:</span>
                  <span className="text-cyan-300 font-medium">
                    {selectedTrack === "tech" ? "Tech Innovation" : "Social Impact"}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Cohort Launch:</span>
                  <span className="text-amber-400 font-mono">Summer Break (May 2027)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>DPDP Parent Consent:</span>
                  <span className="text-emerald-400">Verified ({formData.parentName})</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Return to Program Overview
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
