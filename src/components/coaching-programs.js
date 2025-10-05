"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";

export default function CoachingPrograms() {

  return (
    <section className="pt-4 pb-4 sm:pt-6 sm:pb-6 px-2 sm:px-4 lg:px-6 bg-black relative">
      <div className="max-w-full mx-auto overflow-hidden">
        {/* Header with Overlapping Text Effect */}
        <div className="text-center mb-12 relative">
          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
                {/* Base White Text */}
                <span 
                  className="text-[3.4rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none select-none tracking-normal whitespace-nowrap"
                  style={{
                    fontFamily: 'Kanit, system-ui, sans-serif',
                    letterSpacing: '0.05em',
                    filter: 'blur(0.5px)',
                    fontStyle: 'italic',
                    color: 'rgba(255, 255, 255, 0.15)',
                    WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.3)',
                    textStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  COACHING
                </span>
                
                {/* Golden Flash Overlay */}
                <motion.span 
                  className="absolute inset-0 text-[3.4rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none select-none tracking-normal whitespace-nowrap"
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
                  COACHING
                </motion.span>
              
            </div>
          </div>
          
          {/* Foreground Content - Short Title in Center */}
          <div className="relative z-10 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
              Professional <span style={{ color: '#ffd701' }}>Billiards</span>
              <br />
              Coaching Services
            </h2>
          </div>
        </div>

        {/* Long Description Below */}
        <div className="text-center mb-8 -mt-20 md:-mt-25">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
            Whether you&apos;re a beginner or aiming for competitive tournaments, our coaching 
            programs cover Snooker, Chinese 8 Ball, and American Pool. Available in one-to-one 
            or group formats, designed to improve skills and techniques effectively.
          </p>
        </div>

        {/* Coaching Format Info */}
        <div className="text-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-gray-700/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#ffd701] mb-3 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Available Formats
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>One-to-One Coaching</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>Group Coaching</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#ffd701] mb-3 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Suitable For
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>Beginners</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>Intermediate Players</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>Competitive Players</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6 lg:gap-8 mb-12 px-2 sm:px-4">
          <ServiceCard 
            image="/home/game/chinese8ball.png"
            alt="Chinese 8 Ball"
            title="Chinese 8 Ball"
            description="Learn the popular Chinese 8 Ball format with specialized techniques and strategies for competitive play and tournaments."
            buttonColor="blue"
            delay={0}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />

          <ServiceCard 
            image="/home/game/pool.jpg"
            alt="American Pool"
            title="American Pool"
            description="Master American Pool techniques including 9-ball, 8-ball, and straight pool for advanced competitive gameplay and skill development."
            buttonColor="green"
            delay={0.1}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />

          <ServiceCard 
            image="/home/game/snooker.jpg"
            alt="Snooker"
            title="Snooker"
            description="Professional snooker coaching with emphasis on technique, positioning, and strategic play for precision control and advanced gameplay."
            buttonColor="purple"
            delay={0.2}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
          />

          <ServiceCard 
            image="/home/game/chinese9ball.jpg"
            alt="Chinese 9 Ball"
            title="Chinese 9 Ball"
            description="Specialized coaching for Chinese 9 Ball with focus on break shots, safety play, and tournament competition strategies."
            buttonColor="orange"
            delay={0.3}
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}