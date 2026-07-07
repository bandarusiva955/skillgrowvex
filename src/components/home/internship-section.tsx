"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INTERNSHIP_OPPORTUNITIES } from "@/lib/constants";
import { X, Mail, Phone, Linkedin, Users, Clock, Zap } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface InternshipModalProps {
  internship: (typeof INTERNSHIP_OPPORTUNITIES)[0];
  isOpen: boolean;
  onClose: () => void;
}

function InternshipModal({ internship, isOpen, onClose }: InternshipModalProps) {
  const [message, setMessage] = useState("");
  const [contacted, setContacted] = useState(false);

  const handleContact = () => {
    setContacted(true);
    setTimeout(() => setContacted(false), 3000);
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
            <div className="sticky top-0 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white p-6 flex justify-between items-start border-b border-brand-gold/20">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{internship.title}</h2>
                <p className="text-brand-cream">{internship.company}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Close modal"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4" /> Duration
                  </p>
                  <p className="font-bold text-brand-navy">{internship.duration}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4" /> Level
                  </p>
                  <p className="font-bold text-brand-navy">{internship.level}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4" /> Students
                  </p>
                  <p className="font-bold text-brand-navy">
                    {internship.students}/{internship.maxStudents}
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                    <span>📚</span> Domain
                  </p>
                  <p className="font-bold text-brand-navy text-sm">{internship.domain}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">About This Internship</h3>
                <p className="text-gray-700 leading-relaxed">{internship.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {internship.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">Your Responsibilities</h3>
                <ul className="space-y-2">
                  {internship.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-brand-gold/10 text-brand-navy border border-brand-gold/30 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-brand-navy/5 border border-brand-gold/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-navy mb-4">Contact Information</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-navy rounded-lg">
                      <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a
                        href={`mailto:${internship.contact.email}`}
                        className="font-semibold text-brand-navy hover:text-brand-gold transition-colors"
                      >
                        {internship.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-navy rounded-lg">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a
                        href={`tel:${internship.contact.phone}`}
                        className="font-semibold text-brand-navy hover:text-brand-gold transition-colors"
                      >
                        {internship.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-navy rounded-lg">
                      <Linkedin className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">LinkedIn</p>
                      <a
                        href={internship.contact.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-navy hover:text-brand-gold transition-colors"
                      >
                        {internship.contact.name}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Mentor */}
                <div className="space-y-3 border-t border-brand-gold/20 pt-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 resize-none"
                    rows={3}
                  />
                  <button
                    onClick={handleContact}
                    className="w-full px-4 py-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {contacted ? "Message Sent!" : "Send Message to Mentor"}
                  </button>
                </div>
              </div>

              {/* Enrollment CTA */}
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300">
                  Apply Now
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-brand-navy font-semibold rounded-lg hover:border-brand-gold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function InternshipSection() {
  const [selectedInternship, setSelectedInternship] = useState<
    (typeof INTERNSHIP_OPPORTUNITIES)[0] | null
  >(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-cream to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Internship Opportunities
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore real internship opportunities across different domains. Click any card to see
            full details, contact mentors, and apply directly.
          </p>
        </motion.div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {INTERNSHIP_OPPORTUNITIES.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer h-full"
              onClick={() => setSelectedInternship(internship)}
            >
              <div className="h-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-brand-gold hover:shadow-lg transition-all duration-300 group">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                        {internship.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{internship.company}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {internship.level}
                    </span>
                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                      {internship.domain}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{internship.description}</p>

                {/* Info Row */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4 text-brand-gold" />
                    <span>
                      {internship.students}/{internship.maxStudents}
                    </span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {internship.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-brand-gold/10 text-brand-navy text-xs rounded border border-brand-gold/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {internship.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-600">
                        +{internship.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-2 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>View Details</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-brand-navy/5 to-brand-gold/5 p-8 rounded-lg border border-brand-gold/20"
        >
          <h3 className="text-2xl font-bold text-brand-navy mb-3">Ready to Start Your Internship?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Choose an internship that matches your skills and interests. Connect directly with mentors
            and apply instantly through our platform.
          </p>
          <button className="px-8 py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300">
            Browse All Internships
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedInternship && (
        <InternshipModal
          internship={selectedInternship}
          isOpen={!!selectedInternship}
          onClose={() => setSelectedInternship(null)}
        />
      )}
    </section>
  );
}
