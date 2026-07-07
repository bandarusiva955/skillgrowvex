"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { LANGUAGES_OFFERED, PROGRAMS_DETAILED } from "@/lib/constants";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
}

export function EnrollmentModal({ isOpen, onClose, courseTitle }: EnrollmentModalProps) {
  const [step, setStep] = useState<"course" | "details">("course");
  const [selectedCourse, setSelectedCourse] = useState<string>(courseTitle || "");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "beginner",
    learningGoal: "",
    batchPreference: "weekday",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
    setStep("details");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success state
    setSubmitted(true);

    // Simulate submission
    setTimeout(() => {
      onClose();
      setStep("course");
      setSelectedCourse("");
      setSelectedLanguage("English");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "beginner",
        learningGoal: "",
        batchPreference: "weekday",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white p-6 flex justify-between items-center border-b border-brand-gold/20">
              <h2 className="text-2xl font-bold">
                {step === "course" ? "Choose Your Course" : "Enrollment Details"}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Close"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                // Success State
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Enrollment Successful!</h3>
                  <p className="text-gray-700 mb-2">
                    Welcome to {selectedCourse}!
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    Check your email for course access details and next steps.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
                    <p className="text-sm text-gray-700">
                      <strong>Course:</strong> {selectedCourse}
                      <br />
                      <strong>Language:</strong> {selectedLanguage}
                      <br />
                      <strong>Email:</strong> {formData.email}
                    </p>
                  </div>
                </motion.div>
              ) : step === "course" ? (
                // Course Selection Step
                <div className="space-y-4">
                  <p className="text-gray-700 mb-6">Select the course you want to enroll in:</p>
                  <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto">
                    {PROGRAMS_DETAILED.map((course) => (
                      <motion.button
                        key={course.title}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCourseSelect(course.title)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedCourse === course.title
                            ? "border-brand-gold bg-brand-gold/10"
                            : "border-gray-200 hover:border-brand-gold/50"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-bold text-brand-navy">{course.title}</h4>
                            <p className="text-sm text-gray-600">{course.description}</p>
                            <div className="flex gap-2 mt-2 flex-wrap">
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {course.duration}
                              </span>
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                {course.badge}
                              </span>
                            </div>
                          </div>
                          {selectedCourse === course.title && (
                            <Check className="w-6 h-6 text-brand-gold flex-shrink-0" />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                // Details Form Step
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Selected Course Info */}
                  <div className="bg-brand-navy/5 border border-brand-gold/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600">
                      <strong>Selected Course:</strong> {selectedCourse}
                    </p>
                  </div>

                  {/* Language Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Preferred Language
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {LANGUAGES_OFFERED.map((lang) => (
                        <motion.button
                          key={lang.language}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedLanguage(lang.language)}
                          className={`p-3 rounded-lg border-2 text-center transition-all ${
                            selectedLanguage === lang.language
                              ? "border-brand-gold bg-brand-gold/10"
                              : "border-gray-200 hover:border-brand-gold/50"
                          }`}
                        >
                          <p className="text-2xl mb-1">{lang.flag}</p>
                          <p className="text-sm font-semibold text-gray-800">{lang.language}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXXXXXXX"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                      />
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Your Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    >
                      <option value="beginner">Beginner (Just Starting Out)</option>
                      <option value="intermediate">Intermediate (Some Experience)</option>
                      <option value="advanced">Advanced (Experienced)</option>
                    </select>
                  </div>

                  {/* Learning Goal */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      What&apos;s Your Learning Goal?

                    </label>
                    <textarea
                      name="learningGoal"
                      value={formData.learningGoal}
                      onChange={handleInputChange}
                      placeholder="E.g., Get a job in tech, Build projects, Switch careers..."
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 resize-none"
                    />
                  </div>

                  {/* Batch Preference */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">
                      Batch Preference
                    </label>
                    <select
                      name="batchPreference"
                      value={formData.batchPreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    >
                      <option value="weekday">Weekday Batch (Mon-Fri)</option>
                      <option value="weekend">Weekend Batch (Sat-Sun)</option>
                      <option value="flexible">Flexible (Self-Paced)</option>
                    </select>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => setStep("course")}
                      className="flex-1 px-4 py-2 border-2 border-gray-300 text-brand-navy font-semibold rounded-lg hover:border-brand-gold transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-brand-gold text-brand-navy font-bold rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300"
                    >
                      Confirm Enrollment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
