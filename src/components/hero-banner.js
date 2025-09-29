"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Custom styles for instant responsive fade effect
const customSwiperStyles = `
  .hero-swiper {
    position: relative;
  }
  .hero-swiper .swiper-slide {
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
  }
  .hero-swiper .swiper-slide-active {
    opacity: 1;
    transform: scale(1);
    z-index: 2;
  }
  .hero-swiper .swiper-slide:not(.swiper-slide-active) {
    opacity: 0;
    z-index: 1;
  }
  .hero-swiper .swiper-slide img {
    transition: none;
    filter: brightness(1) saturate(1.1);
  }
`;

export default function HeroBanner() {
  // State for content animation trigger
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const swiperRef = useRef(null);

  // Hero banner images array
  const heroImages = [
    {
      src: "/banner.webp",
      alt: "OOBilliards Banner 1"
    },
    {
      src: "/banner2.jpg", // You can add more images here
      alt: "OOBilliards Banner 2"
    },
    {
      src: "/banner.webp", // You can add more images here
      alt: "OOBilliards Banner 3"
    }
  ];

  // Handle autoplay time left to trigger animation before slide starts
  const handleAutoplayTimeLeft = (swiper, time, progress) => {
    // Trigger animation when there's 200ms left before slide change
    if (time <= 200 && !isAnimating) {
      setIsAnimating(true);
      setAnimationKey(prev => prev + 1);
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
    }
  };

  // Handle manual navigation button clicks
  const handleManualNavigation = (direction) => {
    if (!swiperRef.current || isAnimating) return;
    
    console.log('Manual navigation clicked:', direction, 'swiperRef.current:', swiperRef.current);
    
    // Stop autoplay temporarily
    swiperRef.current.autoplay.stop();
    
    // Trigger content animation
    setIsAnimating(true);
    setAnimationKey(prev => prev + 1);
    
    // Navigate to next/prev slide with a small delay
    setTimeout(() => {
      if (direction === 'next') {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }
    }, 50);
    
    // Reset animation state and restart autoplay
    setTimeout(() => {
      setIsAnimating(false);
      swiperRef.current.autoplay.start();
    }, 3000);
  };

  // Simple slide down animation variants - extremely slow start
  const slideDownVariants = {
    initial: { 
      opacity: 0, 
      y: -80
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 3.0,
        ease: [0.01, 0.04, 0.12, 1]
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Custom CSS for blur transition */}
      <style jsx>{customSwiperStyles}</style>
      {/* Background Image Swiper with Animation */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={1500}
          allowTouchMove={true}
          simulateTouch={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            console.log('Swiper initialized:', swiper);
          }}
          onAutoplayTimeLeft={handleAutoplayTimeLeft}
          onSlideChange={() => console.log('Slide changed')}
          className="w-full h-full hero-swiper"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="relative w-full h-full"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1.12 }}
                transition={{ 
                  duration: 8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Navigation Arrows - Desktop: sides, Mobile: bottom center */}
      {/* Desktop Left Arrow */}
      <div className="hidden md:block absolute left-16 top-1/2 transform -translate-y-1/2 z-30">
        <button 
          onClick={(e) => {
            e.preventDefault();
            console.log('Left button clicked, swiperRef.current:', swiperRef.current);
            handleManualNavigation('prev');
          }}
          className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-[#ffd701] flex items-center justify-center text-white/70 hover:text-[#ffd701] transition-all duration-300 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Desktop Right Arrow */}
      <div className="hidden md:block absolute right-16 top-1/2 transform -translate-y-1/2 z-30">
        <button 
          onClick={(e) => {
            e.preventDefault();
            console.log('Right button clicked, swiperRef.current:', swiperRef.current);
            handleManualNavigation('next');
          }}
          className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-[#ffd701] flex items-center justify-center text-white/70 hover:text-[#ffd701] transition-all duration-300 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Arrows - Bottom Center */}
      <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        <button 
          onClick={(e) => {
            e.preventDefault();
            console.log('Left button clicked (mobile), swiperRef.current:', swiperRef.current);
            handleManualNavigation('prev');
          }}
          className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-[#ffd701] flex items-center justify-center text-white/70 hover:text-[#ffd701] transition-all duration-300 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            console.log('Right button clicked (mobile), swiperRef.current:', swiperRef.current);
            handleManualNavigation('next');
          }}
          className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-[#ffd701] flex items-center justify-center text-white/70 hover:text-[#ffd701] transition-all duration-300 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center pt-32 sm:pt-28 md:pt-24 lg:pt-20">
        <div className="text-center">
          {/* Circular Background with Text - Simple Slide Down Animation */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={animationKey}
              className="relative flex items-center justify-center mb-6"
              variants={slideDownVariants}
              initial="initial"
              animate="animate"
            >
              {/* Large Circle Background */}
              <div className="w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] lg:w-[580px] lg:h-[580px] rounded-full border-2 border-white/30 flex items-center justify-center relative">
                
                {/* Billiard Ball Lines */}
                {/* Horizontal center line */}
                <div className="absolute top-1/2 left-4 right-4 h-px bg-white/20 transform -translate-y-1/2"></div>
                
                {/* Vertical center line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/20 transform -translate-x-1/2"></div>
                
                {/* Diagonal lines */}
                <div 
                  className="absolute top-4 left-4 bottom-4 right-4 border border-white/15 rounded-full"
                  style={{
                    width: 'calc(100% - 32px)',
                    height: 'calc(100% - 32px)',
                    top: '16px',
                    left: '16px'
                  }}
                ></div>
                
                {/* Inner circle for billiard pattern */}
                <div className="absolute top-1/2 left-1/2 w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border border-white/25 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Text Content */}
                <div className="text-center relative z-10 flex flex-col justify-center h-full">
                  {/* Main Title - Moved up */}
                  <div className="mb-6 -mt-8">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none font-kanit italic">
                      <span className="block text-white">BILLIARDS</span>
                      <span className="block text-white whitespace-nowrap -mt-3 sm:-mt-4 md:-mt-5 lg:-mt-6 xl:-mt-8" style={{
                        color: 'transparent',
                        WebkitTextStroke: '3px #ffffff',
                        textStroke: '3px #ffffff',
                      }}>SPORT CLUB</span>
                    </h1>
                  </div>
                  
                  {/* Description Text */}
                  <div className="mt-4 px-8">
                    <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-kanit font-normal leading-relaxed">
                      Experience the finest billiards facilities<br />
                      with professional coaching and premium equipment
                    </p>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="mt-6">
                    <button 
                      className="px-8 py-3 text-black font-kanit font-medium text-sm sm:text-base md:text-lg rounded-full hover:opacity-90 transition-opacity duration-300"
                      style={{ backgroundColor: '#ffd701' }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                
                {/* Decorative smaller circles around the main circle */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/30"></div>
                <div className="absolute top-1/4 -left-6 w-6 h-6 rounded-full bg-white/20"></div>
                <div className="absolute -bottom-6 left-1/3 w-10 h-10 rounded-full bg-white/25"></div>
                <div className="absolute top-1/3 -right-8 w-4 h-4 rounded-full bg-white/35"></div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
}
