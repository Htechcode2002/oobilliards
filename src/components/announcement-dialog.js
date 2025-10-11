"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogPortal,
} from "@/components/ui/dialog";
import { X, Megaphone, Sparkles, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AnnouncementDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 检查本次浏览会话是否已经显示过
    const hasShownInSession = sessionStorage.getItem("announcementShown");
    
    if (!hasShownInSession) {
      // 延迟1秒后显示对话框，让页面先加载
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    // 标记本次浏览会话已显示，关闭浏览器后会自动清除
    sessionStorage.setItem("announcementShown", "true");
  };

  // 最新消息内容（可以根据需要修改）
  const announcement = {
    title: "🎉 Grand Opening!",
    subtitle: "OO+ Billiards @ Ho Chi Minh",
    description: "Our first international outlet! Experience premium billiards in the heart of Ho Chi Minh City, Vietnam.",
    image: "/outlets/vietnam/vietnam.jpg",
    highlights: [
      { icon: MapPin, text: "34 Đ. Lê Văn Quới, Bình Tân, Hồ Chí Minh" },
      { icon: Calendar, text: "Opening October 2025" },
      { icon: Sparkles, text: "25 Snooker + 13 Chinese 8 Ball + 3 Pool Tables" },
    ],
    ctaText: "View More outlets",
    ctaLink: "/outlets"
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        {/* Custom dark overlay without using DialogOverlay */}
        <div className="fixed inset-0 z-50 bg-black/50" onClick={handleClose} />
        
        {/* Dialog Content without default overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-8 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-[85%] sm:max-w-md md:max-w-lg p-0 overflow-hidden border-2 border-[#ffd701]/30 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            {/* Hidden DialogTitle for accessibility */}
            <DialogHeader className="sr-only">
              <DialogTitle>{announcement.title} - {announcement.subtitle}</DialogTitle>
              <DialogDescription>{announcement.description}</DialogDescription>
            </DialogHeader>

            {/* Close Button - Inside Card */}
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 z-50 rounded-full bg-black/50 p-1.5 sm:p-2 backdrop-blur-sm transition-all hover:bg-black/70 hover:rotate-90 duration-300"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>

            {/* Content */}
            <div>
          {/* Header Image Section */}
          <div className="relative h-52 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
            <Image
              src={announcement.image}
              alt={announcement.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-gradient-to-r from-[#ffd701] to-[#ffed4e] text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shadow-xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Megaphone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">New Opening</span>
              <span className="sm:hidden">New</span>
            </motion.div>

            {/* Title Overlay */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <motion.h2
                className="text-lg sm:text-2xl md:text-3xl font-black text-white mb-1 italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {announcement.title}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-[#ffd701] font-bold italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {announcement.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 md:p-6">
            {/* Description */}
            <motion.p
              className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 leading-relaxed"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {announcement.description}
            </motion.p>

            {/* Highlights */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
              {announcement.highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#ffd701]/10 to-transparent border-l-2 sm:border-l-3 border-[#ffd701] pl-2 sm:pl-3 py-1.5 sm:py-2 rounded-r-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#ffd701] flex-shrink-0" />
                    <span className="text-gray-200 text-xs sm:text-sm font-medium" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      {highlight.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href={announcement.ctaLink} onClick={handleClose}>
                <button className="w-full bg-gradient-to-r from-[#ffd701] to-[#ffed4e] text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:from-[#ffed4e] hover:to-[#ffd701] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl italic flex items-center justify-center gap-2 group" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  <span>{announcement.ctaText}</span>
                  <motion.svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </button>
              </Link>
            </motion.div>

            {/* Footer Note */}
            <motion.p
              className="text-center text-gray-500 text-[10px] sm:text-xs mt-3 sm:mt-4"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              This message will not appear again during this browsing session
            </motion.p>
          </div>
        </div>
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  );
}

