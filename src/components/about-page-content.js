"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPageContent() {
  const milestones = [
    { date: "Nov 2017", event: "First outlet @ One Shamelin Mall, KL", image: "/outlets/shamelin/shamelin.jpg" },
    { date: "Sept 2022", event: "Seremban outlet opens", image: "/outlets/seremban/seremban.jpg" },
    { date: "Mar 2023", event: "Viva Home outlet opens", image: "/outlets/vivahome/vivahome.jpg" },
    { date: "Jul 2024", event: "Scott Garden outlet opens – one of the biggest in KL", image: "/outlets/scottgarden/scottgarden.jpg" },
    { date: "Jan 2025", event: "USJ outlet opens at 91 Sports Arena + Group HQ established", image: "/outlets/usj/usj.PNG" },
    { date: "Oct 2025", event: "Vietnam outlet (Ho Chi Minh City) opening soon", image: "/outlets/vietnam/vietnam.jpg", comingSoon: true }
  ];

  const values = [
    {
      title: "Passion",
      description: "Our love for cue sports inspires every outlet, event, and training program we create."
    },
    {
      title: "Professionalism", 
      description: "High standards in venues, coaching, and tournaments"
    },
    {
      title: "Community",
      description: "A welcoming space for players, families, and enthusiasts"
    },
    {
      title: "Innovation",
      description: "Modern designs, technology, and services for better experiences"
    }
  ];


  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Background Image */}
      <div className="min-h-screen relative">
        {/* Full Page Background Image */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('/home/tournament.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.6) contrast(1.1)'
          }}
        ></div>

        {/* Header Section - Transparent with overlay */}
        <section className="py-25 sm:py-35 text-white relative z-10">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-16 sm:pt-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-tight italic px-2"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              >
                About <span className="text-[#ffd701]">O&apos;O+ Billiards Group</span>
              </motion.h1>
            
            <motion.div 
              className="text-white/70 text-base sm:text-lg mb-4 sm:mb-6"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/" className="text-white/60 hover:text-white transition-colors duration-300">
                Home
              </Link>
                <span className="mx-2 text-[#ffd701]">{'//'}</span>
                <span className="text-[#ffd701]">About Us</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

        {/* Content Sections */}
        <div className="relative z-10 bg-black">
        
        {/* Who We Are Section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffd701' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
              }}
            ></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                Who <span className="text-[#ffd701] relative">
                  We Are
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] rounded-full"></div>
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] rounded-full mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/about/team.jpg" 
                    alt="O'O+ Billiards Group - Professional Team"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Image Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                      <p className="text-gray-900 font-bold italic text-sm" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                        &ldquo;Our professional in-house coaching team&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Accent */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffd701] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#ccaa4c] rounded-full opacity-20 blur-xl"></div>
              </motion.div>
              
              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Badge */}
                <div className="inline-block bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] p-1 rounded-2xl">
                  <div className="bg-white px-6 py-2 rounded-2xl">
                    <span className="text-black font-bold italic text-sm" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      ✨ Malaysia&apos;s Premier Billiards Experience
                    </span>
                  </div>
                </div>
                
                {/* Main Title */}
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 italic leading-tight" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Where <span className="text-[#ffd701]">Excellence</span> Meets Passion
                </h3>
                
                {/* Description */}
                <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic font-medium" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    O&apos;O+ Billiards Group is Malaysia&apos;s leading billiards entertainment and sports group, 
                    offering world-class venues, professional coaching programs, high-profile tournaments, 
                    and premium cue sports equipment under one brand.
                  </p>
                </div>
                
                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      World-Class Venues
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      Expert Coaching
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      Premium Equipment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-300 font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      Professional Tournaments
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffd701' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
              }}
            ></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                Our Journey from <span className="text-[#ffd701] relative">
                  Passion
                  <div className="absolute  left-0 right-0 h-1 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] rounded-full"></div>
                </span> to Professionalism
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Story Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Story Cards */}
                <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 relative">
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-[#ffd701] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 italic ml-6" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    The Beginning
                  </h3>
                  <p className="text-gray-300 leading-relaxed ml-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    The story of O&apos;O+ Billiards Group began with our founder&apos;s lifelong passion for snooker. 
                    From humble beginnings in local billiard halls, the dream was clear: to transform cue sports 
                    into a respected, professional, and inclusive sport in Malaysia.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 relative">
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-[#ffd701] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 italic ml-6" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    Rapid Growth
                  </h3>
                  <p className="text-gray-300 leading-relaxed ml-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    The first outlet opened in Kuala Lumpur in November 2017, marking the start of a brand that 
                    has grown to six locations nationwide and will soon open its first international outlet in 
                    Ho Chi Minh City, Vietnam, in October 2025.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 relative">
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-[#ffd701] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 italic ml-6" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    Unique Concepts
                  </h3>
                  <p className="text-gray-300 leading-relaxed ml-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    Each outlet is designed with a unique concept—ranging from world-class tournament venues to 
                    welcoming recreational spaces—embodying our founder&apos;s vision of creating a space where 
                    competition, leisure, and community come together.
                  </p>
                </div>
              </motion.div>
              
              {/* Right: Image with Overlay */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/about/passion.jpg"
                    alt="Professional Billiards Venue"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      World-Class Facilities
                    </h3>
                    <p className="text-white/90 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      Premium venues designed for passionate players
                    </p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-6 right-6 bg-[#ffd701] p-3 rounded-full">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Clients and Partners Banner */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">

              <h2 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4 italic px-2" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                CLIENTS AND <span className="text-[#ffd701]">PARTNERS</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto italic px-4" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                We are proud to work with leading brands and trusted partners in the billiards industry.
              </p>
            </div>

            {/* Brand Logo Grid - Sorted by Usage Frequency */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 lg:gap-6 mb-8 md:mb-0">
              {/* 1. Earl - Most used (6 outlets, 85 tables) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/earl.png" 
                  alt="EARL" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>

              {/* 2. Rasson - (6 outlets, 35 tables) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/rasson.png" 
                  alt="RASSON" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>

              {/* 3. Duya - (3 outlets, 16 tables) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/duya.png" 
                  alt="DUYA" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>

              {/* 4. Aplus - (1 outlet, 14 tables) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/aplus.png" 
                  alt="APLUS" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>

              {/* 5. Joy - (2 outlets, 14 tables) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/joy.png" 
                  alt="JOY" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>

              {/* 6. Wiraka - (1 outlet, 7 tables) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/wiraka.png" 
                  alt="WIRAKA" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>

              {/* 7. Aramith - Billiard balls brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/aramith.png" 
                  alt="ARAMITH" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>

              {/* 8. Acurra - Cue brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center justify-center grayscale-0 hover:grayscale-0 transition-all duration-300 p-6 bg-white/20 rounded-lg hover:bg-white/30 shadow-lg"
              >
                <img 
                  src="/about/brand/acurra.png" 
                  alt="ACURRA" 
                  className="max-h-20 md:max-h-24 lg:max-h-32 w-auto object-contain brightness-110 contrast-110"
                />
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-12 px-4">
              <Link href="/product" className="w-full sm:w-auto">
                <button className="w-full bg-[#ffd701] hover:bg-[#e6c200] text-black px-6 md:px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 italic text-sm md:text-base" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  View Products
                </button>
              </Link>
              
              <Link href="/outlets" className="w-full sm:w-auto">
                <button className="w-full border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-800 text-gray-300 hover:text-white px-6 md:px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 italic text-sm md:text-base" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Visit Outlets
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Core Values Section - Premium Design */}
        <section className="py-20 relative overflow-hidden">
          {/* Sticky Background Image with Overlay - Only for this section */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background Image - Hidden on mobile, shown on desktop */}
            <div 
              className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat hidden md:block"
              style={{
                backgroundImage: "url('/home/tournament.jpg')",
                backgroundAttachment: 'fixed'
              }}
            ></div>
            
            {/* Black background for mobile */}
            <div className="absolute inset-0 bg-black md:hidden"></div>
            
            {/* Gradient overlay for desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 hidden md:block"></div>
            
            {/* Floating Particles/Dots Effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[
                { left: 23.7, top: 60.0, delay: 2.8, duration: 2.1 },
                { left: 3.1, top: 23.5, delay: 1.3, duration: 3.3 },
                { left: 62.9, top: 51.0, delay: 0.6, duration: 3.6 },
                { left: 65.9, top: 59.2, delay: 1.1, duration: 2.9 },
                { left: 80.9, top: 53.4, delay: 1.3, duration: 3.5 },
                { left: 14.7, top: 99.5, delay: 0.4, duration: 2.1 },
                { left: 52.9, top: 52.0, delay: 2.4, duration: 2.3 },
                { left: 14.5, top: 9.2, delay: 1.8, duration: 2.3 },
                { left: 80.1, top: 90.0, delay: 1.9, duration: 3.0 },
                { left: 45.0, top: 69.2, delay: 2.1, duration: 3.1 },
                { left: 16.7, top: 91.2, delay: 0.2, duration: 3.3 },
                { left: 41.7, top: 67.0, delay: 1.6, duration: 2.2 },
                { left: 42.5, top: 38.7, delay: 0.1, duration: 2.9 },
                { left: 57.1, top: 78.5, delay: 2.7, duration: 2.9 },
                { left: 20.2, top: 60.6, delay: 2.4, duration: 3.6 },
                { left: 13.2, top: 41.8, delay: 0.2, duration: 3.8 },
                { left: 9.9, top: 46.3, delay: 1.7, duration: 3.6 },
                { left: 87.3, top: 37.5, delay: 2.9, duration: 2.0 },
                { left: 92.9, top: 47.9, delay: 0.1, duration: 3.7 },
                { left: 72.7, top: 65.7, delay: 1.0, duration: 3.1 },
                { left: 10.2, top: 37.4, delay: 1.9, duration: 2.8 },
                { left: 30.2, top: 75.0, delay: 0.1, duration: 3.1 },
                { left: 98.7, top: 91.4, delay: 0.7, duration: 3.4 },
                { left: 9.9, top: 70.8, delay: 2.9, duration: 2.8 },
                { left: 32.4, top: 48.5, delay: 1.4, duration: 2.9 },
                { left: 17.9, top: 77.2, delay: 1.9, duration: 3.5 },
                { left: 74.4, top: 23.4, delay: 1.0, duration: 2.3 },
                { left: 64.3, top: 46.5, delay: 0.9, duration: 2.3 },
                { left: 23.4, top: 18.8, delay: 1.9, duration: 2.1 },
                { left: 39.4, top: 3.4, delay: 0.9, duration: 3.1 },
                { left: 56.1, top: 79.2, delay: 0.1, duration: 2.4 },
                { left: 92.5, top: 51.7, delay: 0.4, duration: 2.4 },
                { left: 34.3, top: 35.2, delay: 0.9, duration: 3.0 },
                { left: 20.7, top: 64.3, delay: 0.6, duration: 2.7 },
                { left: 97.8, top: 12.9, delay: 1.5, duration: 2.6 },
                { left: 77.4, top: 78.4, delay: 2.3, duration: 3.3 },
                { left: 35.5, top: 27.4, delay: 2.9, duration: 3.2 },
                { left: 4.2, top: 61.8, delay: 1.4, duration: 3.6 },
                { left: 55.7, top: 14.4, delay: 2.8, duration: 3.9 },
                { left: 98.0, top: 67.1, delay: 2.7, duration: 3.5 },
                { left: 44.0, top: 96.2, delay: 1.8, duration: 2.3 },
                { left: 40.4, top: 7.1, delay: 0.6, duration: 3.2 },
                { left: 38.7, top: 82.3, delay: 1.8, duration: 2.3 },
                { left: 40.6, top: 37.5, delay: 2.9, duration: 2.7 },
                { left: 64.2, top: 90.9, delay: 2.0, duration: 3.7 },
                { left: 45.2, top: 52.5, delay: 1.4, duration: 2.2 },
                { left: 46.6, top: 75.6, delay: 0.8, duration: 3.0 },
                { left: 93.1, top: 90.2, delay: 2.8, duration: 2.5 },
                { left: 17.6, top: 91.8, delay: 2.9, duration: 2.3 },
                { left: 35.7, top: 88.3, delay: 0.8, duration: 3.7 },
              ].map((particle, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
            
            {/* Vision & Mission Section */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                Vision & <span className="text-[#ffd701]">Mission</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] rounded-full mx-auto mb-16"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Vision Icon */}
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <svg className="w-full h-full text-white group-hover:text-[#ffd701] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 italic group-hover:text-[#ffd701] transition-colors duration-300" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Our Vision
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed italic max-w-md mx-auto" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  To elevate cue sports in Malaysia and beyond, creating world-class venues, tournaments, 
                  and training programs for all players, from beginners to professionals.
                </p>
                
                <div className="w-16 h-0.5 bg-[#ffd701] mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Mission Icon */}
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <svg className="w-full h-full text-white group-hover:text-[#ffd701] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 italic group-hover:text-[#ffd701] transition-colors duration-300" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Our Mission
                </h3>
                
                <div className="text-gray-300 text-lg leading-relaxed italic max-w-md mx-auto space-y-3" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  <p>• Deliver professional-grade facilities and cutting-edge equipment</p>
                  <p>• Host tournaments and coaching programs for all skill levels</p>
                  <p>• Build a vibrant, inclusive billiards community</p>
                  <p>• Drive innovation and regional expansion with quality focus</p>
                </div>
                
                <div className="w-16 h-0.5 bg-[#ffd701] mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>

            {/* Core Values Section */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                Core <span className="text-[#ffd701]">Values</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] rounded-full mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 relative">
                      {/* Icon based on value type */}
                      {index === 0 && (
                        <svg className="w-full h-full text-white group-hover:text-[#ffd701] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-full h-full text-white group-hover:text-[#ffd701] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-full h-full text-white group-hover:text-[#ffd701] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-full h-full text-white group-hover:text-[#ffd701] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-2xl font-black text-white mb-4 lg:mb-6 italic group-hover:text-[#ffd701] transition-colors duration-300" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed italic max-w-xs mx-auto" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    {value.description}
                  </p>
                  
                  {/* Bottom Line */}
                  <div className="w-12 lg:w-16 h-0.5 bg-[#ffd701] mx-auto mt-4 lg:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Corporate Milestones Section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#ffd701] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#ccaa4c] rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffd701] rounded-full blur-3xl opacity-5"></div>
          </div>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-1 bg-gradient-to-b from-[#ffd701] via-[#ccaa4c] to-[#ffd701] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] p-1 rounded-2xl mb-8">
                <div className="bg-black px-8 py-3 rounded-2xl">
                  <span className="text-[#ffd701] font-bold italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    🏆 Our Journey Through Time
                  </span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                Corporate <span className="text-[#ffd701] relative">
                  Milestones
                  <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] rounded-full opacity-70"></div>
                </span>
              </h2>
              
              <p className="text-white/70 text-xl max-w-3xl mx-auto italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                From our first outlet to international expansion, witness our remarkable growth story
              </p>
            </motion.div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  className={`flex items-stretch lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:text-left text-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Mobile: Timeline Node Above Card */}
                  <div className="lg:hidden mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ffd701] to-[#ccaa4c] rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <span className="text-[#ffd701] font-black text-base italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full lg:flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} mb-8 lg:mb-0`}>
                    {/* Desktop: Text Card, Mobile: Photo Background Card */}
                    <div className="rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden h-80 flex flex-col">
                      
                      {/* Mobile: Background Image */}
                      <div className="absolute inset-0 z-0 lg:hidden">
                        <img
                          src={milestone.image}
                          alt={milestone.event.includes('outlet') ? milestone.event.split(' outlet')[0] + ' Outlet' : 'O\'O+ Billiards'}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                      </div>
                      
                      {/* Desktop: Solid Background */}
                      <div className="absolute inset-0 z-0 hidden lg:block bg-white/5 backdrop-blur-sm"></div>
                      
                      {/* Card Content */}
                      <div className="p-8 relative z-10 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Date Badge */}
                          <div className="inline-block bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] p-1 rounded-full mb-6">
                            <div className="bg-black px-6 py-2 rounded-full">
                              <span className="text-[#ffd701] font-bold text-lg italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                                {milestone.date}
                              </span>
                            </div>
                          </div>
                          
                          {/* Event Description */}
                          <h3 className="text-2xl font-bold text-white mb-4 italic lg:drop-shadow-none drop-shadow-lg" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            {milestone.event.split('–')[0]}
                          </h3>
                          
                          {milestone.event.includes('–') && (
                            <p className="text-white/90 lg:text-white/80 text-lg italic leading-relaxed lg:drop-shadow-none drop-shadow-md" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                              {milestone.event.split('–')[1]}
                            </p>
                          )}
                        </div>
                        
                        {/* Outlet Label at bottom - Mobile only */}
                        <div className="mt-auto lg:hidden">
                          <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                            <p className="text-[#ffd701] font-bold text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                              {milestone.event.includes('outlet') ? 
                                milestone.event.split(' outlet')[0].replace('First outlet @ ', '').replace(' opens', '') + ' Outlet' : 
                                milestone.event.includes('Vietnam') ? 'Vietnam Expansion' :
                                milestone.event.includes('HQ') ? 'Group Headquarters' : 
                                'O\'O+ Billiards'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop: Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 hidden lg:block">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ffd701] to-[#ccaa4c] rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 md:group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-[#ffd701] font-black text-lg italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Connecting Line to Timeline */}
                    <div className={`absolute top-10 w-8 h-1 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] ${index % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
                  </div>
                  
                  {/* Outlet Photo for Empty Space */}
                  <div className="flex-1 hidden lg:block">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={`${index % 2 === 0 ? 'ml-16' : 'mr-16'} relative`}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                        <img
                          src={milestone.image}
                          alt={milestone.event.includes('outlet') ? milestone.event.split(' outlet')[0] + ' Outlet' : 'O\'O+ Billiards'}
                          className="w-full h-64 object-cover transition-transform duration-500 md:group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Photo Label - Always visible */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <p className="text-white font-bold text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                              {milestone.event.includes('outlet') ? 
                                milestone.event.split(' outlet')[0].replace('First outlet @ ', '').replace(' opens', '') + ' Outlet' : 
                                milestone.event.includes('Vietnam') ? 'Vietnam Expansion' :
                                milestone.event.includes('HQ') ? 'Group Headquarters' : 
                                'O\'O+ Billiards'
                              }
                            </p>
                          </div>
                        </div>
                        
                        {/* Decorative Corner */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-[#ffd701] rounded-full flex items-center justify-center opacity-80">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#ffd701] to-[#ccaa4c] p-1 rounded-full">
                <div className="bg-black px-8 py-4 rounded-full flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#ffd701]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-white font-bold italic text-lg" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    The Journey Continues...
                  </span>
                  <svg className="w-6 h-6 text-[#ffd701]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Partnerships Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-8 italic"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Exclusive <span className="text-[#ffd701]">Partnerships</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-300 leading-relaxed italic mb-8 max-w-4xl mx-auto"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              O&apos;O+ Billiards Group is the sole official distributor for DUYA, APLUS and EARL billiards 
              tables and cues in Malaysia, delivering world-class tournament equipment, after-sales support, 
              and customization options for venues nationwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/product">
                <button className="bg-[#ffd701] hover:bg-[#e6c200] text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto italic shadow-lg hover:shadow-xl" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Explore Our Products
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        </div>
      </div>
    </div>
  );
}
