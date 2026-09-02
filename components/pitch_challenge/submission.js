'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Film, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, UploadCloud, AlertCircle } from 'lucide-react';

export default function SubmissionPortal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    schoolName: '',
    country: '',
    videoTitle: '',
    category: 'Physics',
    videoUrl: '',
    videoDescription: '',
    counselorName: '',
    counselorEmail: '',
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-pitch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong on our end. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An error occurred. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitles = [
    { num: 1, label: 'Student Info', icon: <User size={18} /> },
    { num: 2, label: 'Video Details', icon: <Film size={18} /> },
    { num: 3, label: 'Counselor Info', icon: <ShieldCheck size={18} /> },
    { num: 4, label: 'Review', icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <section style={styles.wrapper} id="submit">
      <div style={styles.container}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.headerBlock}
        >
          <span style={styles.sectionLabel}>Official Portal</span>
          <h2 style={styles.sectionTitle}>Submit Your Video Entry</h2>
          <p style={styles.sectionDesc}>
            Complete the 4 steps below. Submissions are open to high school students worldwide ages 13–18.
          </p>
        </motion.div>

        {!isSubmitted ? (
          <div style={styles.portalCard}>
            
            {/* Step Progress Bar */}
            <div style={styles.progressContainer}>
              {stepTitles.map((step) => (
                <div key={step.num} style={styles.stepIndicator}>
                  <div
                    style={{
                      ...styles.stepCircle,
                      ...(currentStep === step.num ? styles.stepCircleActive : {}),
                      ...(currentStep > step.num ? styles.stepCircleCompleted : {}),
                    }}
                  >
                    {currentStep > step.num ? <CheckCircle2 size={18} color="#FFFFFF" /> : step.num}
                  </div>
                  <span
                    style={{
                      ...styles.stepLabelText,
                      color: currentStep === step.num ? '#06B6D4' : '#9CA3AF',
                    }}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Step Content */}
            <form onSubmit={currentStep === 4 ? handleSubmit : handleNext}>
              <AnimatePresence mode="wait">
                
                {/* STEP 1: STUDENT INFO */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={styles.formGroup}
                  >
                    <h3 style={styles.stepHeading}>Step 1: Student Information</h3>
                    
                    <div style={styles.fieldGrid}>
                      <div>
                        <label style={styles.label}>Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Alex Chen"
                          style={styles.input}
                        />
                      </div>
                      <div>
                        <label style={styles.label}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@example.com"
                          style={styles.input}
                        />
                      </div>
                      <div>
                        <label style={styles.label}>Age (Must be 13–18) *</label>
                        <input
                          type="number"
                          name="age"
                          min="13"
                          max="18"
                          required
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="16"
                          style={styles.input}
                        />
                      </div>
                      <div>
                        <label style={styles.label}>School Name *</label>
                        <input
                          type="text"
                          name="schoolName"
                          required
                          value={formData.schoolName}
                          onChange={handleChange}
                          placeholder="High School Name"
                          style={styles.input}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: VIDEO DETAILS */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={styles.formGroup}
                  >
                    <h3 style={styles.stepHeading}>Step 2: Video Submission Details</h3>

                    <div style={styles.fieldGrid}>
                      <div>
                        <label style={styles.label}>Video Title *</label>
                        <input
                          type="text"
                          name="videoTitle"
                          required
                          value={formData.videoTitle}
                          onChange={handleChange}
                          placeholder="e.g. How Quantum Tunneling Works"
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Category *</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          style={styles.input}
                        >
                          <option value="Physics">Physics & Astronomy</option>
                          <option value="Life Sciences">Life Sciences & Biology</option>
                          <option value="Mathematics">Mathematics & Logic</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginTop: '16px' }}>
                      <label style={styles.label}>Video URL (YouTube or Vimeo Link) *</label>
                      <input
                        type="url"
                        name="videoUrl"
                        required
                        value={formData.videoUrl}
                        onChange={handleChange}
                        placeholder="https://www.youtube.com/watch?v=..."
                        style={styles.input}
                      />
                      <span style={styles.helpText}>Make sure your video privacy settings are set to Unlisted or Public.</span>
                    </div>

                    <div style={{ marginTop: '16px' }}>
                      <label style={styles.label}>Brief Video Summary (Max 100 words)</label>
                      <textarea
                        name="videoDescription"
                        rows={3}
                        value={formData.videoDescription}
                        onChange={handleChange}
                        placeholder="Briefly describe what concept your video explains..."
                        style={{ ...styles.input, resize: 'vertical' }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: COUNSELOR / ACADEMIC VERIFICATION */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={styles.formGroup}
                  >
                    <h3 style={styles.stepHeading}>Step 3: Academic Teacher / Counselor Verification</h3>
                    <p style={styles.stepSubDesc}>
                      Provide your school teacher or counselor details for academic verification.
                    </p>

                    <div style={styles.fieldGrid}>
                      <div>
                        <label style={styles.label}>Academic Teacher / Counselor Name *</label>
                        <input
                          type="text"
                          name="counselorName"
                          required
                          value={formData.counselorName}
                          onChange={handleChange}
                          placeholder="e.g. Mrs. Sarah Jenkins"
                          style={styles.input}
                        />
                      </div>
                      <div>
                        <label style={styles.label}>Counselor Email *</label>
                        <input
                          type="email"
                          name="counselorEmail"
                          required
                          value={formData.counselorEmail}
                          onChange={handleChange}
                          placeholder="teacher@school.edu"
                          style={styles.input}
                        />
                      </div>
                    </div>

                    <div style={styles.checkboxWrap}>
                      <input
                        type="checkbox"
                        id="agreedToTerms"
                        name="agreedToTerms"
                        required
                        checked={formData.agreedToTerms}
                        onChange={handleChange}
                        style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                      />
                      <label htmlFor="agreedToTerms" style={styles.checkboxLabel}>
                        I confirm that my video is under 2 minutes, entirely original work, and complies with competition guidelines.
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: REVIEW & SUBMIT */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={styles.formGroup}
                  >
                    <h3 style={styles.stepHeading}>Step 4: Review Your Details</h3>
                    <p style={styles.stepSubDesc}>Please double-check your submission before finalizing.</p>

                    <div style={styles.reviewBox}>
                      <div style={styles.reviewRow}><strong>Student:</strong> {formData.fullName || 'N/A'} ({formData.age ? `${formData.age} yrs` : 'N/A'})</div>
                      <div style={styles.reviewRow}><strong>Email:</strong> {formData.email || 'N/A'}</div>
                      <div style={styles.reviewRow}><strong>School:</strong> {formData.schoolName || 'N/A'}</div>
                      <div style={styles.reviewRow}><strong>Video Title:</strong> {formData.videoTitle || 'N/A'}</div>
                      <div style={styles.reviewRow}><strong>Category:</strong> {formData.category}</div>
                      <div style={styles.reviewRow}><strong>Video Link:</strong> {formData.videoUrl || 'N/A'}</div>
                      <div style={styles.reviewRow}><strong>Counselor:</strong> {formData.counselorName || 'N/A'} ({formData.counselorEmail || 'N/A'})</div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {errorMessage && (
                <div style={{ marginTop: '16px', padding: '12px 16px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#f87171', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={styles.buttonRow}>
                {currentStep > 1 && (
                  <button type="button" onClick={handlePrev} disabled={isSubmitting} style={styles.backBtn}>
                    <ArrowLeft size={16} /> Back
                  </button>
                )}

                <button type="submit" disabled={isSubmitting} style={{ ...styles.nextBtn, opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  {currentStep === 4 ? (
                    <>{isSubmitting ? 'Submitting Entry...' : 'Submit Entry'} <UploadCloud size={18} /></>
                  ) : (
                    <>Continue <ArrowRight size={18} /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Box */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={styles.successCard}
          >
            <CheckCircle2 size={64} color="#06B6D4" style={{ marginBottom: '16px' }} />
            <h3 style={styles.successTitle}>Entry Successfully Submitted!</h3>
            <p style={styles.successText}>
              Thank you, <strong>{formData.fullName}</strong>. We’ve sent a confirmation email to <strong>{formData.email}</strong>.
            </p>
            <div style={styles.successBadge}>
              Submission ID: #APEX-2026-{Math.floor(1000 + Math.random() * 9000)}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

// Inline CSS Stylesheet
const styles = {
  wrapper: {
    backgroundColor: '#0B0F19',
    color: '#F9FAFB',
    padding: '80px 20px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headerBlock: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionLabel: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#06B6D4',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'inline-block',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    margin: '0 0 16px 0',
    letterSpacing: '-0.5px',
  },
  sectionDesc: {
    fontSize: '16px',
    color: '#9CA3AF',
    maxWidth: '550px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  portalCard: {
    backgroundColor: '#161F33',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '36px 32px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '36px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    paddingBottom: '24px',
  },
  stepIndicator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  stepCircle: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '700',
    color: '#9CA3AF',
  },
  stepCircleActive: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
    color: '#FFFFFF',
    boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
  },
  stepCircleCompleted: {
    backgroundColor: '#06B6D4',
    borderColor: '#06B6D4',
  },
  stepLabelText: {
    fontSize: '12px',
    fontWeight: '600',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  stepHeading: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 8px 0',
  },
  stepSubDesc: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0 0 16px 0',
  },
  fieldGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#D1D5DB',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    backgroundColor: '#0B0F19',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#FFFFFF',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  helpText: {
    fontSize: '12px',
    color: '#9CA3AF',
    marginTop: '4px',
    display: 'block',
  },
  checkboxWrap: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginTop: '16px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#D1D5DB',
    lineHeight: '1.4',
  },
  reviewBox: {
    backgroundColor: '#0B0F19',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  reviewRow: {
    fontSize: '14px',
    color: '#9CA3AF',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '32px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  nextBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 28px',
    borderRadius: '10px',
    background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    marginLeft: 'auto',
    boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
  },
  successCard: {
    backgroundColor: '#161F33',
    border: '1px solid #06B6D4',
    borderRadius: '20px',
    padding: '48px 32px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#FFFFFF',
    margin: '0 0 12px 0',
  },
  successText: {
    fontSize: '16px',
    color: '#9CA3AF',
    maxWidth: '500px',
    margin: '0 0 24px 0',
    lineHeight: '1.5',
  },
  successBadge: {
    padding: '8px 16px',
    borderRadius: '20px',
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    color: '#06B6D4',
    fontSize: '13px',
    fontWeight: '700',
    fontFamily: 'monospace',
  },
};