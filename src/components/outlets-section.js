"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Gamepad2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OutletsSection() {

  const outlets = [
    {
      id: 1,
      name: "OO Snooker @ One Shamelin Mall",
      location: "Kuala Lumpur",
      description: "The very first O'O+ Billiard's outlet, opened in November 2017, equipped with professional snooker tables, ideal for both casual players and competitive tournaments.",
      openDate: "November 2017",
      image: "/outlets/shamelin.JPG",
      tables: [
        "3 Rasson Snooker Tables",
        "15 Earl Snooker Tables", 
        "7 Wiraka Snooker Tables"
      ],
      hours: {
        weekdays: "Mon–Thu: 10:00 AM – 6:00 AM",
        weekends: "Fri–Sun & Public Holidays: 24 Hours"
      },
      contact: {
        phone: "+6011-35041123",
        whatsapp: "60113504112"
      },
      isOpen: true
    },
    {
      id: 2,
      name: "OO Snooker @ Seremban",
      location: "Negeri Sembilan",
      description: "Opened in September 2022, the first outlet outside Kuala Lumpur, bringing professional billiards facilities to Negeri Sembilan.",
      openDate: "September 2022",
      image: "/outlets/seremban.jpg",
      tables: [
        "2 Rasson Snooker Tables",
        "9 Earl Snooker Tables"
      ],
      hours: {
        daily: "Open Daily: 11:00 AM – 5:00 AM"
      },
      contact: {
        phone: "+6011-16683556",
        whatsapp: "60111668355"
      },
      isOpen: true
    },
    {
      id: 3,
      name: "OO Snooker @ Viva Home",
      location: "Kuala Lumpur",
      description: "Opened in March 2023, located in the heart of Kuala Lumpur, offering multiple game formats for both casual and competitive players.",
      openDate: "March 2023",
      image: "/outlets/vivahome.jpg",
      tables: [
        "2 Rasson Snooker Tables",
        "11 Earl Snooker Tables",
        "5 Earl Chinese 8 Ball Tables",
        "1 Pool Table"
      ],
      hours: {
        daily: "Open Daily: 12:00 PM – 8:00 AM"
      },
      contact: {
        phone: "+6011-11102935",
        whatsapp: "60111110293"
      },
      isOpen: true
    },
    {
      id: 4,
      name: "OO+ Billiards @ Scott Garden Mall",
      location: "Kuala Lumpur",
      description: "Opened in July 2024, one of the biggest billiards halls in Kuala Lumpur with a variety of game formats and professional facilities.",
      openDate: "July 2024",
      image: "/outlets/scottgarden.jpg",
      tables: [
        "10 Rasson Snooker Tables",
        "13 Earl Snooker Tables",
        "9 Joy Chinese 8 Ball Tables",
        "4 Earl Chinese 8 Ball Tables",
        "4 Rasson American Pool Tables"
      ],
      hours: {
        daily: "Open Daily: 11:00 AM – 6:00 AM"
      },
      contact: {
        phone: "+6013-8938896",
        whatsapp: "60138938896"
      },
      isOpen: true
    },
    {
      id: 5,
      name: "OO+ Billiards @ USJ",
      location: "91 Sports Arena, Subang Jaya",
      description: "Opened in January 2025, the largest outlet in Subang Jaya, located above Giant USJ1 within 91 Sports Arena. Offers coaching programs, tournaments, and multiple table types.",
      openDate: "January 2025",
      image: "/outlets/usj.jpg",
      tables: [
        "14 Aplus American Pool Tables",
        "8 Duya Chinese 8 Ball Tables",
        "13 Earl Chinese 8 Ball Tables",
        "1 Rasson Snooker Table"
      ],
      hours: {
        daily: "Open Daily: 11:00 AM – 4:00 AM"
      },
      contact: {
        phone: "+6013-8078896",
        whatsapp: "60138078896"
      },
      isOpen: true
    },
    {
      id: 6,
      name: "OO+ Billiards @ Ho Chi Minh",
      location: "Vietnam",
      description: "Opening in October 2025, our first international outlet in Vietnam, bringing O'O+ Billiards' signature facilities and experiences to Ho Chi Minh City.",
      openDate: "October 2025",
      image: "/outlets/outlets.jpg",
      tables: [
        "To be confirmed after official launch"
      ],
      hours: {
        daily: "To be confirmed"
      },
      contact: {
        phone: "To be confirmed",
        whatsapp: ""
      },
      isOpen: false,
      comingSoon: true
    }
  ];

  const handleWhatsAppClick = (whatsappNumber, outletName) => {
    if (whatsappNumber) {
      const message = encodeURIComponent(`Hi! I would like to book a table at ${outletName}. Please let me know the availability.`);
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  const handleMapClick = (outletName) => {
    const searchQuery = encodeURIComponent(outletName);
    window.open(`https://www.google.com/maps/search/?api=1&query=${searchQuery}`, '_blank');
  };

  const handleWazeClick = (outletName) => {
    const searchQuery = encodeURIComponent(outletName);
    window.open(`https://waze.com/ul?q=${searchQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen relative">
      {/* Full Page Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/outlets/outlets.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
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
              Visit Our <span className="text-[#ffd701]">Outlets</span>
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
              <span className="text-[#ffd701]">Outlets</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outlets List */}
      <section className="relative z-10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {outlets.map((outlet, index) => (
              <motion.div
                key={outlet.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Image */}
                  <div className="lg:w-1/2 h-64 lg:h-auto relative bg-gray-200">
                    {outlet.comingSoon ? (
                      /* Coming Soon Display */
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="mb-6">
                            <div className="w-20 h-20 mx-auto mb-4 bg-[#ffd701] rounded-full flex items-center justify-center">
                              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            Coming Soon
                          </h3>
                          <p className="text-[#ffd701] font-semibold text-lg mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            October 2025
                          </p>
                          <p className="text-gray-300 text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                            Our first international outlet
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Regular Image Display */
                      <>
                        <Image
                          src={outlet.image}
                          alt={outlet.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback background when image fails to load */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 hidden items-center justify-center"
                          style={{ display: 'none' }}
                        >
                          <span className="text-white text-lg font-semibold text-center px-4">
                            {outlet.name}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right Side - Information */}
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    {/* Coming Soon Badge */}
                    {outlet.comingSoon && (
                      <div className="mb-4">
                        <span className="bg-[#ffd701] text-black px-3 py-1 rounded text-xs font-bold">
                          COMING SOON
                        </span>
                      </div>
                    )}

                    {/* Title and Location */}
                    <div className="mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {outlet.name} | {outlet.location}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {outlet.description}
                      </p>
                    </div>

                    {/* Contact and Hours Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {/* Contact */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4 text-[#ffd701]" />
                          <span className="text-white font-semibold text-sm">Contact</span>
                        </div>
                        <div className="text-gray-300 text-sm">
                          {outlet.contact.phone}
                        </div>
                      </div>

                      {/* Hours */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-[#ffd701]" />
                          <span className="text-white font-semibold text-sm">Hours</span>
                        </div>
                        <div className="text-gray-300 text-sm">
                          {outlet.hours.weekdays && (
                            <div>{outlet.hours.weekdays}</div>
                          )}
                          {outlet.hours.weekends && (
                            <div>{outlet.hours.weekends}</div>
                          )}
                          {outlet.hours.daily && (
                            <div>{outlet.hours.daily}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Tables Info */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Gamepad2 className="w-4 h-4 text-[#ffd701]" />
                        <span className="text-white font-semibold text-sm">Available Tables</span>
                      </div>
                      <div className="text-gray-300 text-sm">
                        {outlet.tables.map((table, idx) => (
                          <div key={idx}>• {table}</div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {outlet.contact.whatsapp && (
                        <button
                          onClick={() => handleWhatsAppClick(outlet.contact.whatsapp, outlet.name)}
                          className="flex-1 bg-[#25d366] text-white py-3 px-4 rounded-md hover:bg-[#20bc59] transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-medium text-sm">WhatsApp</span>
                        </button>
                      )}
                      
                      <button 
                        onClick={() => handleMapClick(outlet.name)}
                        className="flex-1 bg-[#ffd701] text-black py-3 px-4 rounded-md hover:bg-[#e6c200] transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium text-sm">
                          {outlet.isOpen ? 'Get Directions' : 'Coming Soon'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
