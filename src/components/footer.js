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
      { name: "The Scott Garden Outlet", href: "/outlets" },
      { name: "USJ Outlet", href: "/outlets" }
    ]
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/share/1FeA1XNBiy/?mibextid=wwXIfr", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/oo_snooker?igsh=MWlncWk2MDczbXkzaA%3D%3D&utm_source=qr", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      )
    },
    { 
      name: "TikTok", 
      href: "https://www.tiktok.com/@oosnooker?_r=1&_d=eh0f7la31e648l&sec_uid=MS4wLjABAAAAmo9UKIlOWObeu5BtLiX_gKtG0mpWv_R7xmPHkS15jHi8dPJ2ziXcgo4LkkUsMAWE&share_author_id=6597732250212433921&sharer_language=zh&source=h5_t&u_code=e2cfe5h3gi50em&item_author_type=2&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=24EEBD75-0FFF-4279-838F-E54B8A6E86DA&user_id=7112419096864162821&sec_user_id=MS4wLjABAAAAh0LnLKq10TFNC7kXdlgzMgU63uPRqXpUWjMs1NJ05Cu56Yvcs7-Abw6bEObxmTn9&social_share_type=5&ug_btm=b6880,b5836&utm_campaign=client_share&share_app_id=1180", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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
              <div className="mb-6 flex items-center gap-3 flex-nowrap overflow-x-auto sm:overflow-visible sm:flex-wrap max-w-none sm:max-w-[260px]">
                {/* Main Logo */}
                <Image
                  src="/logo.png"
                  alt="OOBilliards Logo"
                  width={140}
                  height={58}
                  className="h-16 w-auto object-contain flex-shrink-0"
                />
                
                {/* Additional Small Logos */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                  <Image
                    src="/logo/1.png"
                    alt="Logo 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-12 h-12 sm:w-15 sm:h-15 flex-shrink-0">
                  <Image
                    src="/logo/2.png"
                    alt="Logo 2"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                  <Image
                    src="/logo/3.png"
                    alt="Logo 3"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image
                    src="/logo/4.png"
                    alt="Logo 4"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <p className="text-white/70 font-kanit text-sm leading-relaxed mb-6 italic">
                Malaysia&apos;s leading billiards entertainment and sports group, offering world-class venues, professional coaching programs, and premium cue sports equipment under one brand.
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
                <a 
                  href="/outlets" 
                  className="flex items-center text-white/80 hover:text-[#ffd701] transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-3 text-[#ffd701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </a>
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
                      target="_blank"
                      rel="noopener noreferrer"
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
            <div className="text-center space-y-2">
              <div className="text-white/60 text-sm font-kanit italic">
                © {currentYear} ZX SOLUTIONS (M) SDN BHD 202201042960 (1488657-K). All rights reserved. | Malaysia&apos;s Leading Billiards Empire
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
