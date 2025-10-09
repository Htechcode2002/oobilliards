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
              <button className="bg-white/20 hover:bg-[#ffd701] backdrop-blur-sm border border-white/30 hover:border-[#ffd701] text-white hover:text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 font-kanit font-semibold">
                Contact Us
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
            className="md:hidden fixed inset-0 z-50"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="bg-black/90 min-h-screen">
              {/* Mobile Menu Header */}
              <div className="bg-black/95 px-4 py-4 border-b border-white/20">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="OOBilliards Logo"
                      width={280}
                      height={116}
                      className="h-20 w-auto object-contain"
                      priority
                    />
                  </Link>
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              {/* Menu Content */}
              <div className="px-4 py-8">
              
              <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 block px-3 py-4 rounded-md text-lg font-kanit relative group italic hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10 group-hover:text-[#ffd701] transition-colors duration-300">
                    {item.name}
                  </span>
                  {/* Underline */}
                  <span className="absolute bottom-1 left-3 right-3 bg-[#ffd701] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left will-change-transform" style={{height: '1px', transform: 'translateZ(0)'}}></span>
                </a>
              ))}
              <a 
                href="/outlets"
                className="w-full mt-8 bg-white/20 hover:bg-[#ffd701] backdrop-blur-sm border border-white/30 hover:border-[#ffd701] text-white hover:text-black px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 font-kanit font-semibold block text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
              </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
