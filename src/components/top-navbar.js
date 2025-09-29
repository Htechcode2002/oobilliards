"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 text-white text-sm absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left side - Tagline */}
          <div className="hidden md:flex items-center">
            <span className="text-white/90 font-medium font-kanit">
              Feel The Joy, One Ball At A Time!
            </span>
          </div>

          {/* Right side - Contact Info */}
          <div className="flex items-center space-x-6">
            {/* Phone */}
            <div className="hidden sm:flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              <span>+1 (555) 123-4567</span>
            </div>

            {/* Email */}
            <div className="hidden lg:flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@oobilliards.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">New York, NY</span>
              <span className="sm:hidden">NY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
