"use client";

import { motion } from "framer-motion";
import { LANGUAGES_OFFERED } from "@/lib/constants";
import { Globe, MessageCircle, MessageSquare } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  Globe: <Globe className="w-12 h-12" />,
  MessageCircle: <MessageCircle className="w-12 h-12" />,
  MessageSquare: <MessageSquare className="w-12 h-12" />,
};

export function LanguagesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Learn in Your Language
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We teach in multiple languages to make learning accessible for everyone. Choose your
            preferred language and start learning today.
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {LANGUAGES_OFFERED.map((lang, index) => {
            const IconComponent =
              iconMap[lang.icon] ||
              iconMap["Globe"];

            return (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-brand-navy/5 to-brand-gold/5 border-2 border-brand-gold/20 rounded-lg p-8 hover:border-brand-gold hover:shadow-lg transition-all duration-300">
                  {/* Flag & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{lang.flag}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy">{lang.language}</h3>
                      <div className="w-12 h-1 bg-brand-gold rounded-full group-hover:w-16 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {lang.description}
                  </p>

                  {/* Percentage */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600">Course Coverage</span>
                      <span className="text-brand-gold font-bold">{lang.percentage}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.percentage }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-brand-gold to-brand-gold/60 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Select Button */}
                  <button className="w-full py-2 px-4 bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <span>Select Language</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-navy/10 to-brand-gold/10 border-l-4 border-brand-gold rounded-lg p-6"
        >
          <p className="text-gray-800 flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <span>
              All course materials, live sessions, and mentorship support are available in your
              chosen language. Switch languages anytime from your student dashboard.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
