"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function CoachesSection() {
  const coaches = [
    {
      id: 1,
      name: "Vincent Lim",
      position: "Head Coach",
      image: "/home/coaching.jpg",
      description: "Professional billiards player with 15+ years of experience"
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Senior Coach",
      image: "/home/coaching.jpg",
      description: "Former national champion specializing in Chinese 8-ball"
    },
    {
      id: 3,
      name: "Marcus Wong",
      position: "Technical Coach",
      image: "/home/coaching.jpg",
      description: "Expert in advanced techniques and tournament preparation"
    },
    {
      id: 4,
      name: "Lisa Tan",
      position: "Youth Coach",
      image: "/home/coaching.jpg",
      description: "Specialized in coaching beginners and junior players"
    },
    {
      id: 5,
      name: "David Kumar",
      position: "Strategy Coach",
      image: "/home/coaching.jpg",
      description: "Focus on game strategy and mental preparation"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const nextCoach = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % coaches.length);
  };

  const prevCoach = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + coaches.length) % coaches.length);
  };

  const getVisibleCoaches = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % coaches.length;
      visible.push({
        ...coaches[index],
        displayIndex: i
      });
    }
    return visible;
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(/coaches_background.jpg)`,
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      ></div>
      
      {/* Dark overlay for better text readability - temporarily disabled */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10 z-5"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Background Text Effect */}
        <div className="text-center mb-16 relative">
          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              {/* COACHES - Main background text */}
              {/* Base White Text */}
              <span 
                className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
                style={{
                  color: 'rgba(255, 255, 255, 0.15)',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  textStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  fontFamily: 'Kanit, system-ui, sans-serif',
                  letterSpacing: '0.05em',
                  fontStyle: 'italic',
                }}
              >
                COACHES
              </span>
              
              {/* Golden Flash Overlay */}
              <motion.span 
                className="absolute inset-0 text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
                style={{
                  fontFamily: 'Kanit, system-ui, sans-serif',
                  letterSpacing: '0.05em',
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
                COACHES
              </motion.span>
              
              {/* Our coaches and Meet our Coaches - In the middle of COACHES */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span 
                    className="text-sm md:text-base font-medium text-[#ffd701] tracking-wide block mb-1"
                    style={{
                      fontFamily: 'Kanit, system-ui, sans-serif',
                      fontStyle: 'italic',
                    }}
                  >
                    Our coaches
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span 
                    className="text-3xl md:text-4xl font-black text-white tracking-wide whitespace-nowrap"
                    style={{
                      fontFamily: 'Kanit, system-ui, sans-serif',
                      fontStyle: 'italic',
                    }}
                  >
                    Meet our Coaches
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Foreground Content - Minimal space for clean look */}
          <div className="relative z-10 flex items-center justify-center min-h-[120px] sm:min-h-[150px]">
          </div>
        </div>

        {/* Coaches Carousel */}
        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevCoach}
            className="hidden lg:block absolute -left-16 xl:-left-20 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white hover:border-[#ffd701] hover:bg-white/10 flex items-center justify-center text-white hover:text-[#ffd701] transition-all duration-300"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateX(1px)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCoach}
            className="hidden lg:block absolute -right-16 xl:-right-20 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white hover:border-[#ffd701] hover:bg-white/10 flex items-center justify-center text-white hover:text-[#ffd701] transition-all duration-300"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateX(-1px)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Coaches Display */}
          <div className="flex items-center justify-center space-x-6 md:space-x-12 px-4 md:px-16">
            {/* Mobile: Show only current coach */}
            <div className="md:hidden flex flex-col items-center">
              <motion.div
                key={`mobile-${coaches[currentIndex].id}-${currentIndex}`}
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: direction * -100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0
                }}
                exit={{ opacity: 0, x: direction * 100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Coach Image */}
                <Avatar className="border-2 border-white w-72 h-72">
                  <AvatarImage
                    src={coaches[currentIndex].image}
                    alt={coaches[currentIndex].name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gray-300 text-gray-600 font-semibold">
                    {coaches[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                {/* Coach Info */}
                <div className="text-center mt-4">
                  <h3 
                    className="font-bold text-white italic text-2xl"
                    style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                  >
                    {coaches[currentIndex].name}
                  </h3>
                  <p 
                    className="text-[#ffd701] font-medium text-lg"
                    style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                  >
                    {coaches[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Desktop: Show all coaches */}
            <div className="hidden md:flex items-center space-x-12">
              {getVisibleCoaches().map((coach, index) => {
                const isCenter = coach.displayIndex === 2;
                const isSecondary = coach.displayIndex === 1 || coach.displayIndex === 3;
                
                return (
                  <motion.div
                    key={`${coach.id}-${currentIndex}`}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    {/* Coach Image */}
                    <Avatar 
                      className={`border-2 border-white ${
                        isCenter ? 'w-56 h-56 md:w-72 md:h-72' : 
                        isSecondary ? 'w-40 h-40 md:w-52 md:h-52' : 
                        'w-24 h-24 md:w-32 md:h-32'
                      }`}
                    >
                      <AvatarImage
                        src={coach.image}
                        alt={coach.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gray-300 text-gray-600 font-semibold">
                        {coach.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    {/* Coach Info */}
                    <div className="text-center mt-4">
                      <h3 
                        className={`font-bold text-white italic ${
                          isCenter ? 'text-3xl md:text-4xl' : 
                          isSecondary ? 'text-lg md:text-xl' : 
                          'text-sm md:text-base'
                        }`}
                        style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                      >
                        {coach.name}
                      </h3>
                      <p 
                        className={`text-[#ffd701] font-medium ${
                          isCenter ? 'text-xl md:text-2xl' : 
                          isSecondary ? 'text-sm md:text-base' : 
                          'text-xs md:text-xs'
                        }`}
                        style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                      >
                        {coach.position}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Arrows - Bottom Center */}
          <div className="md:hidden flex justify-center mt-8 space-x-4">
            <button
              onClick={prevCoach}
              className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-[#ffd701] flex items-center justify-center text-white/70 hover:text-[#ffd701] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextCoach}
              className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-[#ffd701] flex items-center justify-center text-white/70 hover:text-[#ffd701] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
