"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoachingPrograms() {
  const programs = [
    {
      title: "Chinese 8 Ball",
      description: "Learn the popular Chinese 8 Ball format with specialized techniques and strategies for competitive play and tournaments.",
      number: 1
    },
    {
      title: "American Pool",
      description: "Master American Pool techniques including 9-ball, 8-ball, and straight pool for advanced competitive gameplay and skill development.",
      number: 2
    },
    {
      title: "Snooker",
      description: "Professional snooker coaching with emphasis on technique, positioning, and strategic play for precision control and advanced gameplay.",
      number: 3
    },
    {
      title: "Chinese 9 Ball",
      description: "Specialized coaching for Chinese 9 Ball with focus on break shots, safety play, and tournament competition strategies.",
      number: 4
    }
  ];

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
                  }}
                >
                  COACHING
                </span>
                
                {/* Golden Flash Overlay */}
                <motion.span 
                className="absolute inset-0 text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
                  style={{
                    fontFamily: 'Kanit, system-ui, sans-serif',
                    letterSpacing: '0.05em',
                    filter: 'blur(0.5px)',
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
                  COACHING
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
                  Professional Training
                </span>
              </div>
              <h2 
                className="text-4xl sm:text-5xl font-black text-white italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              >
                Coaching <span className="text-[#ffd701]">Programs</span>
            </h2>
          </div>
          </motion.div>
        </div>

        {/* Content Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Photo */}
          <motion.div
            className="relative order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/about/team.jpg"
                alt="Professional Coaching Team"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full space-y-6">
              {/* Introduction Text with Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] p-1 rounded-2xl mb-4">
                  <div className="bg-black px-6 py-2 rounded-2xl">
                    <span className="text-[#ffd701] font-bold italic text-sm" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      ✨ Expert Training Programs
                    </span>
                  </div>
                </div>
                <p 
                  className="text-lg text-gray-300 leading-relaxed text-justify"
                  style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                >
            Whether you&apos;re a beginner or aiming for competitive tournaments, our coaching 
            programs cover Snooker, Chinese 8 Ball, and American Pool. Available in one-to-one 
            or group formats, designed to improve skills and techniques effectively.
          </p>
              </motion.div>

              {/* Game Programs Title */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-[#ffd701] font-bold tracking-wide" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Available Programs
                </p>
              </motion.div>

              {/* Programs List - Enhanced */}
              <div className="grid grid-cols-2 gap-5">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30 hover:border-[#ffd701]/50 transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd701]/0 via-[#ffd701]/0 to-[#ffd701]/0 group-hover:from-[#ffd701]/5 group-hover:via-[#ffd701]/10 group-hover:to-[#ffd701]/5 transition-all duration-500"></div>
                    
                    <div className="relative flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        {/* Billiard Ball Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-[#ffd701] via-[#f4c430] to-[#daa520] rounded-full flex items-center justify-center shadow-lg shadow-[#ffd701]/30 group-hover:shadow-[#ffd701]/70 transition-all duration-300 border-4 border-[#8b6914]">
                          <span className="text-2xl font-black text-[#2d2d2d]" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            {program.number}
                          </span>
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#ffd701]/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#ffd701] transition-colors duration-300 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                        {program.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Button - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a 
                  href="https://wa.me/60102949688?text=Hi!%20I'm%20interested%20in%20your%20coaching%20programs.%20Could%20you%20please%20provide%20me%20with%20more%20details%20about%20the%20available%20programs%20and%20pricing%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <motion.button 
                    className="relative w-full bg-gradient-to-r from-[#ffd701] to-[#daa520] text-black px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 italic shadow-2xl shadow-[#ffd701]/20 overflow-hidden group"
                    style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#daa520] to-[#ffd701] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <span className="relative flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Contact Us on WhatsApp
                    </span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}