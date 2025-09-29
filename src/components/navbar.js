"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Outlets", href: "/outlets" },
    { name: "Products", href: "/product" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="bg-transparent absolute top-4 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-between justify-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 md:flex-shrink-0">
              <Link href="/" className="flex items-center md:justify-start justify-center">
                <Image
                  src="/logo.png"
                  alt="OOBilliards Logo"
                  width={280}
                  height={116}
                  className="h-40 w-auto object-contain mt-4 md:-ml-4 ml-0"
                  priority
                />
              </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 px-3 py-2 rounded-md text-sm transition-all duration-300 font-kanit relative group italic"
                >
                  <span className="relative z-10 group-hover:text-[#ffd701] transition-colors duration-300">
                    {item.name}
                  </span>
                  {/* Underline */}
                  <span className="absolute bottom-1 left-3 right-3 bg-[#ffd701] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left will-change-transform" style={{height: '1px', transform: 'translateZ(0)'}}></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/outlets">
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-kanit font-semibold">
                Book a Table
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-sm border-t border-white/20"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 block px-3 py-2 rounded-md text-base font-kanit relative group italic"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeInOut" 
                  }}
                >
                  <span className="relative z-10 group-hover:text-[#ffd701] transition-colors duration-300">
                    {item.name}
                  </span>
                  {/* Underline */}
                  <span className="absolute bottom-1 left-3 right-3 bg-[#ffd701] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left will-change-transform" style={{height: '1px', transform: 'translateZ(0)'}}></span>
                </motion.a>
              ))}
              <motion.a 
                href="/outlets"
                        className="w-full mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-kanit font-semibold block text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.3, 
                  delay: navItems.length * 0.1,
                  ease: "easeInOut" 
                }}
              >
                Book a Table
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
