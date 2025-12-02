"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { MapPin, Award } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function OutletsCarousel() {
  const outlets = [
    {
      id: 1,
      name: "O'O Snooker @ One Shamelin Mall",
      location: "Kuala Lumpur",
      description: "The very first O'O+ Billiard's outlet, opened in November 2017",
      image: "/outlets/shamelin/DXQ06717.jpg",
      link: "/outlets",
      badge: "Original",
      rating: 4.8
    },
    {
      id: 2,
      name: "O'O Snooker @ Seremban",
      location: "Negeri Sembilan",
      description: "First outlet outside Kuala Lumpur, opened in September 2022",
      image: "/outlets/seremban/seremban.jpg",
      link: "/outlets",
      badge: "Regional",
      rating: 4.7
    },
    {
      id: 3,
      name: "O'O Snooker @ Viva Home",
      location: "Kuala Lumpur",
      description: "Located in the heart of Kuala Lumpur, opened in March 2023",
      image: "/outlets/vivahome/vivahome.jpg",
      link: "/outlets",
      badge: "Premium",
      rating: 4.9
    },
    {
      id: 4,
      name: "O'O+ Billiards @ The Scott Garden",
      location: "Kuala Lumpur",
      description: "One of the biggest billiards halls in KL, opened in July 2024",
      image: "/outlets/scottgarden/scottgarden.jpg",
      link: "/outlets",
      badge: "Largest",
      rating: 4.9
    },
    {
      id: 5,
      name: "O'O+ Billiards @ USJ",
      location: "91 Sports Arena, Subang Jaya",
      description: "The largest outlet in Subang Jaya, opened in January 2025",
      image: "/outlets/usj/usj.PNG",
      link: "/outlets",
      badge: "Newest",
      rating: 5.0
    },
    {
      id: 6,
      name: "O'O+ Billiards @ Ho Chi Minh",
      location: "Vietnam",
      description: "Our first international outlet, opening in October 2025",
      image: "/outlets/vietnam/vietnam.jpg",
      link: "/outlets",
      comingSoon: true,
      badge: "International"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffd701]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ffd701]/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #ffd701 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, #ffd701 48%, #ffd701 52%, transparent 52%)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
                OUTLETS
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
                OUTLETS
              </motion.span>
            </div>
          </div>

          {/* Top Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd701]/20 to-transparent border border-[#ffd701]/30 rounded-full px-6 py-2 mb-6 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Award className="w-5 h-5 text-[#ffd701]" />
            <span className="text-[#ffd701] font-semibold text-sm tracking-wider uppercase">Premium Locations</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white italic relative z-10" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
            Our <span className="text-[#ffd701] relative inline-block">
              Outlets
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffd701] to-transparent"></span>
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed relative z-10" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
            Visit any of our <span className="text-[#ffd701] font-semibold">premium billiards venues</span> across Malaysia and beyond
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="outlets-swiper pb-12"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
          >
            {outlets.map((outlet, index) => (
              <SwiperSlide key={outlet.id} className="pb-4">
                <Link href={outlet.link}>
                  <motion.div
                    className="relative group cursor-pointer h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Glow Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffd701]/50 via-transparent to-[#ffd701]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                    {/* Card Container with Border */}
                    <div className="relative h-full rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-[#ffd701]/50 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,215,1,0.3)]">
                      {/* Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={outlet.image}
                          alt={outlet.name}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Multi-layer Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffd701]/0 via-transparent to-[#ffd701]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                        {/* Location Badge */}
                        <motion.div
                          className="mb-3"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow-lg">
                            <MapPin className="w-4 h-4 text-[#ffd701]" />
                            {outlet.location}
                          </span>
                        </motion.div>

                        {/* Title with Shimmer Effect */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#ffd701] transition-colors duration-300 relative" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {outlet.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffd701] to-transparent group-hover:w-full transition-all duration-500"></span>
                        </h3>

                        {/* Description with better styling */}
                        <p className="text-gray-200 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {outlet.description}
                        </p>

                        {/* Divider Line */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ffd701]/50 to-transparent mb-4 group-hover:via-[#ffd701] transition-colors duration-300"></div>

                        {/* View Details Button with Icon Animation */}
                        <motion.div
                          className="flex items-center gap-2 text-[#ffd701] font-semibold text-sm"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="relative">
                            View Details
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffd701] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </span>
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </motion.div>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#ffd701]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#ffd701]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button with Enhanced Design */}
        <motion.div
          className="text-center mt-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/outlets">
            <motion.button
              className="relative bg-gradient-to-r from-[#ffd701] to-[#ffed4e] text-black px-10 py-5 rounded-full font-bold text-lg italic overflow-hidden group shadow-2xl"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Content */}
              <span className="relative flex items-center gap-3">
                <span>View All Outlets</span>
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>

              {/* Glow Effect */}
              <span className="absolute inset-0 rounded-full bg-[#ffd701] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .outlets-swiper {
          padding-left: 20px;
          padding-right: 20px;
        }

        .outlets-swiper .swiper-slide {
          width: 90%;
          max-width: 500px;
        }

        .outlets-swiper .swiper-pagination-bullet {
          background: #ffd701;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }

        .outlets-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }

        .outlets-swiper .swiper-button-next,
        .outlets-swiper .swiper-button-prev {
          color: #ffd701;
          background: rgba(0, 0, 0, 0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .outlets-swiper .swiper-button-next:hover,
        .outlets-swiper .swiper-button-prev:hover {
          background: rgba(255, 215, 1, 0.2);
        }

        .outlets-swiper .swiper-button-next::after,
        .outlets-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 640px) {
          .outlets-swiper .swiper-button-next,
          .outlets-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .outlets-swiper .swiper-button-next::after,
          .outlets-swiper .swiper-button-prev::after {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}

