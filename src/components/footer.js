"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Outlets", href: "/outlets" },
      { name: "Products", href: "/product" },
      { name: "FAQ", href: "/faq" }
    ],
    services: [
      { name: "DUYA Tables", href: "/product" },
      { name: "APLUS Tables", href: "/product" },
      { name: "Professional Coaching", href: "/" },
      { name: "Tournament Venues", href: "/" }
    ],
    outlets: [
      { name: "One Shamelin Mall", href: "/outlets" },
      { name: "Seremban Outlet", href: "/outlets" },
      { name: "Viva Home Outlet", href: "/outlets" },
      { name: "Scott Garden Outlet", href: "/outlets" },
      { name: "USJ Outlet", href: "/outlets" }
    ]
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "#", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-2.508 0-4.54-2.033-4.54-4.54s2.032-4.54 4.54-4.54c2.508 0 4.54 2.032 4.54 4.54s-2.032 4.54-4.54 4.54z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "#", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      href: "#", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-10 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-white/20"></div>
        <div className="absolute top-32 right-4 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 rounded-full border border-white/15"></div>
        <div className="absolute bottom-20 left-4 sm:left-32 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/10"></div>
        <div className="absolute bottom-32 right-4 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 rounded-full border border-white/20"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Logo and Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="OOBilliards Logo"
                  width={280}
                  height={116}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-white/70 font-kanit text-sm leading-relaxed mb-6 italic">
                Malaysia's leading billiards entertainment and sports group, offering world-class venues, professional coaching programs, and premium cue sports equipment under one brand.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm font-kanit">
                <div className="flex items-center text-white/80">
                  <svg className="w-4 h-4 mr-3 text-[#ffd701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Malaysia • 6 Outlets Nationwide
                </div>
                <div className="flex items-center text-white/80">
                  <svg className="w-4 h-4 mr-3 text-[#ffd701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +6011-35041123
                </div>
                <div className="flex items-center text-white/80">
                  <svg className="w-4 h-4 mr-3 text-[#ffd701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  WhatsApp: +60113504112
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-kanit font-semibold mb-6 text-[#ffd701] italic">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-[#ffd701] transition-colors duration-300 font-kanit text-sm italic"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products & Services */}
            <div>
              <h3 className="text-lg font-kanit font-semibold mb-6 text-[#ffd701] italic">Products & Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-[#ffd701] transition-colors duration-300 font-kanit text-sm italic"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Outlets */}
            <div>
              <h3 className="text-lg font-kanit font-semibold mb-6 text-[#ffd701] italic">Our Outlets</h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.outlets.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-[#ffd701] transition-colors duration-300 font-kanit text-sm italic"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media Links */}
              <div>
                <h4 className="text-sm font-kanit font-medium mb-4 text-white italic">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-[#ffd701] rounded-full flex items-center justify-center text-white/70 hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <div className="text-white/60 text-sm font-kanit italic">
                © {currentYear} O&apos;O+ Billiards Group. All rights reserved. | Malaysia&apos;s Leading Billiards Empire
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
