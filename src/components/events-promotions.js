"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function EventsPromotions() {
  const tournamentEvents = [
    {
      id: 1,
      date: "28 Feb 2023",
      players: "Serena Larsson – Olivia Schneider",
      time: "08:00",
      court: "Court 01",
      image: "/home/events/duya.jpg",
      title: "Championship Finals",
      description: "High-stakes tournament featuring top players"
    },
    {
      id: 2,
      date: "21 Mar 2023", 
      players: "Andreas Medvedev – Antony Fonsteur",
      time: "06:00",
      court: "Court 01",
      image: "/home/events/hiring.jpg",
      title: "Professional Series",
      description: "Elite competition with international players"
    },
    {
      id: 3,
      date: "28 Feb 2023",
      players: "Serena Larsson – Olivia Schneider",
      time: "08:00",
      court: "Court 01",
      image: "/home/events/duya.jpg",
      title: "Championship Finals",
      description: "High-stakes tournament featuring top players"
    }
  ];


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd701' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Section Header */}
      <motion.div 
        className="text-center mb-12 px-4 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
                fontStyle: 'italic',
              }}
            >
              EVENTS
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
              EVENTS
            </motion.span>
          </div>
        </div>
        
        {/* Main Title */}
        <h2 
          className="relative text-4xl lg:text-6xl font-black text-white leading-tight italic mb-4 z-10"
          style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
        >
          <span className="text-[#ffd701]">EVENTS</span> & NEWS
        </h2>
        <div className="w-24 h-1 bg-[#ffd701] mx-auto rounded-full"></div>
      </motion.div>

      {/* Swiper Carousel - Enhanced Design */}
      <div className="relative max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="h-[600px] md:h-[650px] lg:h-[700px]"
        >
          {tournamentEvents.map((event, index) => (
            <SwiperSlide key={event.id}>
              <motion.div
                className="relative w-full h-full group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card Container with Enhanced Styling */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffd701] via-yellow-400 to-[#ffd701] p-0.5 rounded-2xl">
                    <div className="w-full h-full bg-black rounded-xl">
                      {/* Image Container */}
                      <div 
                        className="w-full h-full bg-contain bg-center bg-no-repeat relative"
                        style={{
                          backgroundImage: `url('${event.image}')`,
                        }}
                      >
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        
                        {/* Shine Effect - Static */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
                      </div>
                    </div>
                  </div>


                  {/* Bottom Glow Effect - Static */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#ffd701]/10 to-transparent"></div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gradient-to-r from-[#ffd701] to-yellow-400 text-black rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-[#ffd701] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-gradient-to-r from-[#ffd701] to-yellow-400 text-black rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-[#ffd701] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Enhanced Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-8 gap-3"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#ffd701]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#ffd701]/5 rounded-full blur-2xl"></div>
    </section>
  );
}
