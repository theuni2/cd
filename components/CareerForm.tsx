"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Building,
  FileText,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
} from "lucide-react";

const Blob = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path
      fill="currentColor"
      d="M44.9,-76.2C57.4,-69.7,66.3,-55.5,73.6,-41.1C80.9,-26.7,86.6,-12.1,86.3,2.3C86,16.7,79.7,30.8,70.7,42.5C61.7,54.1,50,63.2,37,69.7C24,76.2,9.7,80.1,-4.1,79.7C-17.9,79.4,-35.8,74.8,-50.3,66C-64.8,57.2,-75.8,44.2,-81.6,29.3C-87.4,14.4,-87.9,-2.4,-84.1,-17.8C-80.2,-33.2,-72,-47.2,-60.1,-57.6C-48.3,-68,-32.8,-74.8,-17.4,-76.8C-1.9,-78.9,13.5,-76.2,28.4,-73.1C43.3,-70,57.7,-66.5,44.9,-76.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

const steps = [
  { title: "Basic Information", icon: User },
  { title: "Education & Experience", icon: GraduationCap },
  { title: "Career Preferences", icon: Briefcase },
  { title: "Additional Details", icon: FileText },
];

const getOrdinalSuffix = (num: number): string => {
  const j = num % 10,
    k = num % 100;
  if (j == 1 && k != 11) {
    return "st";
  }
  if (j == 2 && k != 12) {
    return "nd";
  }
  if (j == 3 && k != 13) {
    return "rd";
  }
  return "th";
};

// interface FormState {
//   fullName: string;
//   email: string;
//   phone: string;
//   userType: string;
//   grade: string;
//   schoolName: string;
//   desiredOutcome: string;
//   comments: string;
//   consent: boolean;
// }

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  grade: string;
  schoolName: string;
  desiredOutcome: string;
  fieldOfInterest: string; // 👈 new
  comments: string;
  consent: boolean;
}

const useFormValidation = (initialState: FormState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});

  const validateField = useCallback((name: keyof FormState, value: string) => {
    let error = "";
    switch (name) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Phone number must be 10 digits";
        }
        break;
      case "userType":
        if (!value) error = "Please select user type";
        break;
      case "grade":
        if (!value) error = "Grade is required";
        break;
      case "schoolName":
        if (!value.trim()) error = "School name is required";
        break;
    }
    return error;
  }, []);

  const handleChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = event.target;
      setValues((prev) => {
        const newValues = { ...prev, [name]: value };
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: validateField(name, value),
        }));
        setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
        return newValues;
      });
    },
    [validateField]
  );

  const handleBlur = useCallback(
    (
      event: React.FocusEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = event.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    },
    [validateField]
  );

  const stepFields: Record<number, Array<keyof FormState>> = {
    0: ["firstName", "lastName", "email", "phone", "userType"],
    1: ["grade", "schoolName"],
    2: ["desiredOutcome", "fieldOfInterest"],
    3: ["consent"],
  };

  const isStepValid = useCallback(
    (step: number) => {
      return stepFields[step].every(
        (field) => !errors[field] && touched[field]
      );
    },
    [errors, touched]
  );

  const validateForm = useCallback(
    (currentStep: number) => {
      const currentFields = stepFields[currentStep];
      const isLastStep = currentStep === steps.length - 1;
      return (
        currentFields.every((field) => {
          const value = values[field];
          return value !== "" && !validateField(field, value);
        }) &&
        (!isLastStep || values.consent)
      );
    },
    [values, validateField, stepFields]
  );

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isStepValid,
    validateForm,
  };
};

const InputField = ({
  icon: Icon,
  error,
  touched,
  ...props
}: {
  icon: React.ElementType;
  error?: string;
  touched?: boolean;
  [key: string]: any;
}) => (
  <div className="relative">
    <div className="relative h-12">
      <Icon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10"
        size={18}
      />
      <input
        {...props}
        className={`pl-10 w-full h-full bg-gray-50 border ${
          touched && error ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition-all duration-300 ease-in-out`}
      />
    </div>
    {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const SelectField = ({
  icon: Icon,
  error,
  touched,
  ...props
}: {
  icon: React.ElementType;
  error?: string;
  touched?: boolean;
  [key: string]: any;
}) => (
  <div className="relative">
    <Icon
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={18}
    />
    <select
      {...props}
      className={`pl-10 w-full py-3 bg-gray-50 border ${
        touched && error ? "border-red-500" : "border-gray-300"
      } rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition-all duration-300 ease-in-out appearance-none`}
    />
    <ChevronRight
      className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400"
      size={18}
    />
    {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default function CareerForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const initialState = {
  //   fullName: '',
  //   email: '',
  //   phone: '',
  //   userType: '',
  //   grade: '',
  //   schoolName: '',
  //   desiredOutcome: '',
  //   comments: '',
  //   consent: false
  // }

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    grade: "",
    schoolName: "",
    desiredOutcome: "",
    fieldOfInterest: "", // 👈 new
    comments: "",
    consent: false,
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isStepValid,
    validateForm,
  } = useFormValidation(initialState);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   console.log("Form submission started");
  //   console.log("Form values:", values);

  //   try {
  //     console.log("Sending request to /api/submit-form");
  //     const response = await fetch("/api/submit-form", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });
  //     console.log("Response status:", response.status);
  //     const contentType = response.headers.get("content-type");
  //     console.log("Response content type:", contentType);
  //     if (contentType && contentType.indexOf("application/json") !== -1) {
  //       const responseData = await response.json();

  //       if (response.ok) {
  //         setIsSubmitted(true);
  //       } else {
  //         throw new Error(responseData.message || "Form submission failed");
  //       }
  //     } else {
  //       throw new Error("Received an unexpected response from the server");
  //     }
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //     if (error instanceof Error) {
  //       alert(`There was an error submitting the form: ${error.message}`);
  //     } else {
  //       alert(
  //         "There was an unknown error submitting the form. Please try again."
  //       );
  //     }
  //   } finally {
  //     console.log("Form submission completed");
  //     setIsSubmitting(false);
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submission started");
    // console.log("Form values:", values);

    try {
      const firstName = values.firstName || "NA";
      const lastName = values.lastName || "NA";
      const fullName = `${firstName} ${lastName}`.trim();

      const { firstName: _, lastName: __, ...rest } = values;

      const apiPayload = {
        ...rest,
        fullName,
      };

      // console.log(apiPayload);
      // Your existing API call
      const apiPromise = fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiPayload),
      });

      const formData = new FormData();

      formData.append(
        "xnQsjsdp",
        "14d751f97bb352542018d8abcbfb486d616775294c3f2ef8abf00d96b0c28ca9"
      );
      formData.append(
        "xmIwtLD",
        "b2e3854a550cc0685cce86f2fde8a37db110a72aa9b917880c5b0a1837bbbf5bbd6d5dca18aaaa4ec03c94446f6e1468"
      );
      formData.append("actionType", "TGVhZHM=");

      formData.append("First Name", firstName);
      formData.append("Last Name", lastName);
      formData.append("Email", values.email);
      formData.append("Phone", values.phone);

      formData.append("LEADCF3", values.grade);
      formData.append("LEADCF4", values.schoolName);
      formData.append("LEADCF8", values.desiredOutcome);
      formData.append("LEADCF7", values.fieldOfInterest);
      formData.append("LEADCF9", values.userType);
      formData.append("Description", values.comments);

      if (values.consent) {
        formData.append("LEADCF101", "on");
      }

      formData.append("LEADCF6", "Career Discovery");

      const zohoPromise = fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        body: formData,
      });

      const [apiRes, zohoRes] = await Promise.all([apiPromise, zohoPromise]);

      // console.log("API status:", apiRes.status);
      // console.log("Zoho status:", zohoRes.status);

      const contentType = apiRes.headers.get("content-type");

      if (contentType && contentType.indexOf("application/json") !== -1) {
        const responseData = await apiRes.json();

        if (!apiRes.ok) {
          throw new Error(
            responseData.message || "Form submission failed (API)"
          );
        }
      } else {
        throw new Error(
          "Received an unexpected response from the server (API)"
        );
      }

      if (!zohoRes.ok) {
        console.error("Zoho CRM submission failed");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);

      if (error instanceof Error) {
        alert(`There was an error submitting the form: ${error.message}`);
      } else {
        alert(
          "There was an unknown error submitting the form. Please try again."
        );
      }
    } finally {
      console.log("Form submission completed");
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateForm(currentStep)) {
      setDirection("right");
      setCompletedSteps((prev) => new Set(prev).add(currentStep));
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setDirection("left");
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // Animation variants for smooth sliding transitions
  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -500 : 500,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    if (isSubmitted) {
      return (
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-4 bg-green-100 rounded-full mb-4"
          >
            <Check className="w-12 h-12 text-green-500" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Thank You 🎉
          </h3>
          <p className="text-lg text-gray-600 mb-3">
            🎓 You’re on the{" "}
            <span className="font-semibold text-primary">Waitlist!</span>
          </p>
          <p className="text-lg text-gray-600 mb-3">
            You’ve taken the first step toward joining an exclusive community of
            students shaping their global futures with{" "}
            <strong>Career Discovery</strong> 🌍
          </p>
          <p className="text-lg text-gray-600">
            Our team will reach out as soon as spots open, giving you the chance
            for a <strong>1:1 session with the Senior Counsellor</strong> — a
            unique opportunity to get personalized guidance and insights.
          </p>
        </div>
      );
    }

    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Basic Information
            </h3>
            <div className="space-y-4">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <InputField
                    icon={User}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    touched={touched.firstName}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <InputField
                    icon={User}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.lastName}
                    touched={touched.lastName}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <InputField
                  icon={Mail}
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <InputField
                  icon={Phone}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  touched={touched.phone}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Are You a:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {["Student", "Parent"].map((type) => (
                    <label
                      key={type}
                      className={`flex items-center space-x-3 bg-gray-50 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-100 ${
                        errors.userType ? "border border-red-500" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={type}
                        checked={values.userType === type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-radio text-primary focus:ring-primary h-5 w-5"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
                {touched.userType && errors.userType && (
                  <p className="text-red-500 text-sm mt-1">{errors.userType}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Education and Experience
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="grade"
                >
                  Grade
                </label>
                <SelectField
                  icon={GraduationCap}
                  id="grade"
                  name="grade"
                  value={values.grade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.grade}
                  touched={touched.grade}
                >
                  <option value="">Select Grade</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>{`${i + 1}${getOrdinalSuffix(
                      i + 1
                    )} Grade`}</option>
                  ))}
                </SelectField>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="schoolName"
                >
                  Name of School
                </label>
                <InputField
                  icon={Building}
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={values.schoolName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.schoolName}
                  touched={touched.schoolName}
                  required
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Career Preferences
            </h3>
            <div className="space-y-4">
              {/* Desired Outcome */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="desiredOutcome"
                >
                  Desired Outcome
                </label>
                <SelectField
                  icon={Briefcase}
                  id="desiredOutcome"
                  name="desiredOutcome"
                  value={values.desiredOutcome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.desiredOutcome}
                  touched={touched.desiredOutcome}
                >
                  <option value="">Select Desired Outcome</option>
                  <option value="WRITE A RESEARCH PAPER UNDER WORLD’S BEST COLLEGE PROFESSOR">
                    WRITE A RESEARCH PAPER UNDER WORLD’S BEST COLLEGE PROFESSOR
                  </option>
                  <option value="Writing Competition">
                    Writing Competition
                  </option>
                  <option value="Internship">INTERNSHIP</option>
                  <option value="BE TEDX SPEAKER">BE TEDX SPEAKER</option>
                  <option value="Debater">DEBATER</option>
                  <option value="START A PODCAST">
                    START A <b>PODCAST</b>
                  </option>
                  <option value="DIGITAL WEBSITE"> WEBSITE</option>
                  <option value="newsletter">START YOUR NEWSLETTER</option>
                  <option value="BUILD AN AI CHATBOT">BUILD A STARTUP</option>
                  <option value="ONLINE BUSINESS">E-COMMERCE/D2C BRAND</option>
                  <option value="PUBLISH A BOOK">Publish A BOOK</option>
                  <option value="LAUNCH YOUR OWN SOCIAL SERVICE">
                    Launch Your Own Social Service Project
                  </option>
                  <option value="BECOME AN INFLUENCER">
                    BECOME AN INFLUENCER
                  </option>
                  <option value="BUILD A ROBOT">BUILD A ROBOT</option>
                  <option value="MARKETING AGENCY">MARKETING AGENCY</option>
                  <option value="LAUNCH NPO">LAUNCH NPO</option>
                  <option value="other">OTHER</option>
                  <option value="ALL of the Above">ALL OF THE ABOVE</option>
                </SelectField>
              </div>

              {/* Field of Interest */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="fieldOfInterest"
                >
                  Field of Interest (related to your desired outcome)
                </label>
                <div className="relative">
                  <GraduationCap
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    id="fieldOfInterest"
                    name="fieldOfInterest"
                    value={(values as any).fieldOfInterest || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g., Artificial Intelligence, Pol Science, Business, Literature..."
                    className="pl-10 w-full py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Additional Details
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="comments"
                >
                  Comments or Questions (optional)
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <textarea
                    id="comments"
                    name="comments"
                    value={values.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    className="pl-10 w-full py-3 bg-gray-50 border-none rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={values.consent}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      className="focus:ring-primary h-5 w-5 text-primary border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="consent"
                      className="font-medium text-gray-700"
                    >
                      Acknowledgement and Consent
                    </label>
                    <p className="text-gray-500 mt-1">
                      I hereby acknowledge that I have read and understood the
                      terms and conditions of Career Discovery&apos;s services.
                      I consent to the collection, use, and processing of my
                      personal data as described in the Privacy Policy for the
                      purpose of receiving career guidance and related services.
                      I understand that I can withdraw my consent at any time by
                      contacting Career Discovery.
                    </p>
                    {touched.consent && errors.consent && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <Blob className="absolute top-0 left-0 text-blue-200/50 w-64 h-64 -translate-x-1/2 -translate-y-1/2" />
      <Blob className="absolute bottom-0 right-0 text-blue-200/50 w-64 h-64 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">
          Start Your Career Journey
        </h2>
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto overflow-hidden">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      completedSteps.has(index)
                        ? "bg-green-500 text-white"
                        : index <= currentStep
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {completedSteps.has(index) ? (
                      <Check size={20} />
                    ) : (
                      <step.icon size={20} />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs md:block hidden ${
                      index <= currentStep ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300 ease-in-out"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {!isSubmitted && (
              <div className="mt-8 flex justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <ChevronLeft size={20} className="mr-2" />
                    Previous
                  </button>
                )}
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!validateForm(currentStep)}
                    className={`ml-auto flex items-center px-6 py-3 ${
                      validateForm(currentStep)
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } rounded-full transition-colors duration-300`}
                  >
                    Next
                    <ChevronRight size={20} className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={
                      !validateForm(currentStep) ||
                      !values.consent ||
                      isSubmitting
                    }
                    className={`ml-auto px-6 py-3 ${
                      validateForm(currentStep) &&
                      values.consent &&
                      !isSubmitting
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } rounded-full transition-colors duration-300 flex items-center`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
