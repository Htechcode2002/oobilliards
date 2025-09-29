"use client";

import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ServiceCard({ 
  image, 
  alt, 
  title, 
  description, 
  buttonColor = "green", 
  icon, 
  delay = 0,
  isGradient = false,
  gradientFrom = "",
  gradientTo = "",
  emoji = ""
}) {
  const buttonColors = {
    green: "text-green-500 hover:text-green-600",
    blue: "text-blue-500 hover:text-blue-600", 
    purple: "text-purple-500 hover:text-purple-600",
    orange: "text-orange-500 hover:text-orange-600"
  };

  // Use the same color for all cards
  const borderColor = "#ffd701"; // gold

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Image Only */}
      <div className="relative mb-6">
        <AspectRatio ratio={3/4} className="relative">
          {/* Animated Border Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Border - from left */}
            <div 
              className="absolute top-0 left-0 h-0.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out z-10"
              style={{
                width: '100%',
                backgroundColor: borderColor,
                willChange: 'transform'
              }}
            ></div>
            {/* Right Border - from top */}
            <div 
              className="absolute top-0 right-0 w-0.5 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-600 delay-200 ease-out z-10"
              style={{
                height: '100%',
                backgroundColor: borderColor,
                willChange: 'transform'
              }}
            ></div>
            {/* Bottom Border - from right */}
            <div 
              className="absolute bottom-0 right-0 h-0.5 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out z-10"
              style={{
                width: '100%',
                backgroundColor: borderColor,
                willChange: 'transform'
              }}
            ></div>
            {/* Left Border - from bottom */}
            <div 
              className="absolute bottom-0 left-0 w-0.5 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-600 delay-200 ease-out z-10"
              style={{
                height: '100%',
                backgroundColor: borderColor,
                willChange: 'transform'
              }}
            ></div>
          </div>
          {isGradient ? (
            <div className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center overflow-hidden`}>
              <div className="text-white text-6xl font-bold">{emoji}</div>
            </div>
          ) : (
            <>
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </>
          )}
        </AspectRatio>
      </div>
      
      {/* Text Below */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 italic cursor-pointer transition-colors duration-300" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }} onMouseEnter={(e) => e.target.style.color = '#ffd701'} onMouseLeave={(e) => e.target.style.color = ''}>
          {title}
        </h3>
        <div className="text-gray-600 mb-4 text-sm leading-relaxed font-normal min-h-[120px] flex flex-col justify-between" style={{ fontFamily: 'Arial, sans-serif' }}>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <button className="bg-[#ffd701] text-black font-semibold text-sm px-6 py-3 rounded-full flex items-center justify-center italic transition-all duration-300 hover:bg-[#e6c200] hover:scale-105 transform shadow-md hover:shadow-lg" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
