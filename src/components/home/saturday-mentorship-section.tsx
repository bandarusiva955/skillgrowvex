"use client";

import { motion } from "framer-motion";
import { SATURDAY_MENTORSHIP_SESSIONS, MENTORSHIP_HIGHLIGHTS } from "@/lib/constants";
import { Calendar, Code2, Briefcase, Zap, Users, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  Calendar: <Calendar className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

const highlightIconMap: { [key: string]: React.ReactNode } = {
  Calendar: <Calendar className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  MessageCircle: <LucideIcons.MessageCircle className="w-5 h-5" />,
  FolderKanban: <LucideIcons.FolderKanban className="w-5 h-5" />,
};

export function SaturdayMentorshipSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-navy to-brand-navy/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Saturday Mentorship Sessions
          </h2>
          <p className="text-brand-cream text-lg max-w-2xl mx-auto">
            Every Saturday, join live sessions with our expert mentors to clarify doubts, review
            your code, and get personalized guidance. No questions are too basic or too advanced.
          </p>
        </motion.div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SATURDAY_MENTORSHIP_SESSIONS.map((session, index) => {
            const IconComponent =
              iconMap[session.icon] || iconMap["Calendar"];

            return (
              <motion.div
                key={session.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/10 backdrop-blur border border-brand-gold/30 rounded-lg p-6 hover:border-brand-gold hover:bg-white/15 transition-all duration-300">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-brand-gold/20 rounded-lg text-brand-gold">
                      {IconComponent}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{session.topic}</h3>
                      <p className="text-brand-cream text-xs font-semibold">{session.week}</p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="mb-4">
                    <p className="text-brand-cream text-sm font-semibold mb-1">⏰ {session.time}</p>
                    <p className="text-brand-cream/70 text-xs">{session.date}</p>
                  </div>

                  {/* Mentors & Students */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-brand-cream text-sm">
                      <Users className="w-4 h-4 text-brand-gold" />
                      <span>{session.mentorCount} Expert Mentors</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-cream text-sm">
                      <Check className="w-4 h-4 text-brand-gold" />
                      <span>Max {session.maxStudents} Students</span>
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="mb-6 space-y-1">
                    <p className="text-brand-cream/70 text-xs font-semibold">Focus Areas:</p>
                    {session.focusAreas.map((area) => (
                      <p key={area} className="text-brand-cream text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        {area}
                      </p>
                    ))}
                  </div>

                  {/* Register Button */}
                  <button className="w-full py-2 px-4 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mentorship Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {MENTORSHIP_HIGHLIGHTS.map((highlight, index) => (
            <div
              key={highlight.title}
              className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-6 text-center hover:border-brand-gold transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-brand-gold">
                {highlightIconMap[highlight.icon] || <Users className="w-6 h-6" />}
              </div>
              <h3 className="font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-brand-cream text-sm">{highlight.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-brand-gold/20 to-brand-gold/5 border border-brand-gold/30 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            🎯 Never Miss a Session!
          </h3>
          <p className="text-brand-cream mb-6 max-w-2xl mx-auto">
            Mark your calendar for every Saturday. Sessions are recorded and available for playback
            if you miss live. Join our community of 1000+ learners getting real mentorship.
          </p>
          <button className="px-8 py-3 bg-brand-gold text-brand-navy font-bold rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300 inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </button>
        </motion.div>
      </div>
    </section>
  );
}
