"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroBanner() {
  // Hero banner image
  const heroImage = {
    src: "/banner.jpg",
    alt: "OOBilliards Banner"
  };


  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="relative w-full h-full"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.08 }}
          transition={{ 
            duration: 6, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            priority={true}
            quality={90}
          />
        </motion.div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>


      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center pt-32 sm:pt-28 md:pt-24 lg:pt-20">
        <div className="text-center">
          {/* Circular Background with Text */}
          <motion.div 
            className="relative flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
                        color: 'rgba(255, 255, 255, 0.15)',
                        WebkitTextStroke: '3px #ffffff',
                        textStroke: '3px #ffffff',
                      }}>EMPIRE</span>
                    </h1>
                  </div>
                  
                  {/* Description Text */}
                  <div className="mt-4 px-8">
                    <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-kanit font-normal leading-relaxed">
                      Malaysia's Billiards Empire<br />
                      Professional Training • Tournament Venues • Premium Experience
                    </p>
                  </div>
                  
                  {/* Book Now Button */}
                  <div className="mt-6">
                    <Link href="/outlets">
                      <button 
                        className="px-8 py-3 text-black font-kanit font-medium text-sm sm:text-base md:text-lg rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: '#ffd701' }}
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Decorative smaller circles around the main circle */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/30"></div>
                <div className="absolute top-1/4 -left-6 w-6 h-6 rounded-full bg-white/20"></div>
                <div className="absolute -bottom-6 left-1/3 w-10 h-10 rounded-full bg-white/25"></div>
                <div className="absolute top-1/3 -right-8 w-4 h-4 rounded-full bg-white/35"></div>
              </div>
            </motion.div>

        </div>
      </div>

    </section>
  );
}
