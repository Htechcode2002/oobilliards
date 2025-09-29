"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Background Text Effect */}
        <div className="text-center mb-16 relative">
          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span 
              className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px #bdc3c7',
                textStroke: '1.5px #bdc3c7',
                fontFamily: 'Kanit, system-ui, sans-serif',
                letterSpacing: '0.05em',
                filter: 'blur(0.5px)',
                fontStyle: 'italic',
              }}
            >
              ABOUT US
            </span>
          </div>
          
          {/* Foreground Content */}
          <motion.div 
            className="relative z-10 flex items-center justify-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div>
                <span 
                  className="text-[#ffd701] text-sm font-semibold uppercase tracking-wide italic"
                  style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                >
                  Our Story
                </span>
              </div>
              <h2 
                className="text-4xl sm:text-5xl font-black text-gray-900 italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              >
                Play Hard. <span className="text-[#ffd701]">Aim True.</span><br />
                Relax Fully.
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                O&apos;O+ Billiards Group is Malaysia&apos;s leading billiards entertainment and sports group, 
                offering world-class venues, professional coaching programs, high-profile tournaments, 
                and premium cue sports equipment under one brand.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our commitment goes beyond facilities—we aim to transform cue sports into a respected, 
                inclusive, and professional sport across Malaysia and Southeast Asia. From our first 
                outlet in Kuala Lumpur (2017) to 6 locations nationwide and expanding to Vietnam in 2025.
              </motion.p>

              {/* Features List */}
              <motion.div 
                className="space-y-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  "6 outlets across Malaysia + Vietnam expansion (Oct 2025)",
                  "Official exclusive dealership for DUYA, APLUS & EARL",
                  "10+ tournaments hosted annually with regional events",
                  "Professional coaching programs for all skill levels"
                ].map((feature, index) => (
                  <motion.div 
                    key={feature}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-[#ffd701] rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Learn More Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <Link href="/about">
                  <button className="bg-[#ffd701] hover:bg-[#e6c200] text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 italic shadow-lg hover:shadow-xl" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    Our Complete Story
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/home/coaching.jpg"
                alt="About O'O+ Billiards Group"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
