"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Background Text Effect */}
        <div className="text-center mb-16 relative">
          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              {/* Base White Text */}
              <span 
                className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
                style={{
                  color: 'rgba(255, 255, 255, 0.15)',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  textStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  fontFamily: 'Kanit, system-ui, sans-serif',
                  letterSpacing: '0.05em',
                  filter: 'blur(0.5px)',
                  fontStyle: 'italic',
                }}
              >
                ABOUT US
              </span>
              
              {/* Golden Flash Overlay */}
              <motion.span 
                className="absolute inset-0 text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
                style={{
                  fontFamily: 'Kanit, system-ui, sans-serif',
                  letterSpacing: '0.05em',
                  filter: 'blur(0.5px)',
                  fontStyle: 'italic',
                  color: 'rgba(255, 215, 1, 1)',
                  WebkitTextStroke: '1.5px rgba(255, 215, 1, 0.8)',
                  textStroke: '1.5px rgba(255, 215, 1, 0.8)',
                  textShadow: '0 0 20px rgba(255, 215, 1, 0.8)',
                }}
                animate={{
                  opacity: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                }}
              >
                ABOUT US
              </motion.span>
            </div>
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
                className="text-4xl sm:text-5xl font-black text-white italic"
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
                className="text-lg text-gray-300 leading-relaxed italic"
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
                className="text-lg text-gray-300 leading-relaxed italic"
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
                    <span className="text-gray-300 font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
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

          {/* Right Side - Single Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="/about/team.jpg"
                alt="O'O+ In-House Coaching Team"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-xl mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Professional In-House Coaching Team
                </h3>
                <p className="text-white/90 text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Expert coaches dedicated to elevating your billiards skills
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-6 right-6 bg-[#ffd701] p-3 rounded-full">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
