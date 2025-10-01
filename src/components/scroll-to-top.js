"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 滚动到顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 z-50 flex flex-col items-center justify-center group"
          aria-label="回到顶部"
        >
          {/* CSS台球图标 */}
          <div className="relative w-5 h-5 mb-1 transform group-hover:-translate-y-0.5 transition-all duration-200">
            <div 
              className="w-5 h-5 rounded-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ffed4e 0%, #ffd701 40%, #e6c200 70%, #b8860b 100%)',
                boxShadow: `
                  0 3px 6px rgba(0, 0, 0, 0.4),
                  inset -3px -3px 6px rgba(0, 0, 0, 0.3),
                  inset 3px 3px 6px rgba(255, 255, 255, 0.4),
                  inset 0 0 0 1px rgba(255, 255, 255, 0.2)
                `,
              }}
            >
              {/* 主要高光 */}
              <div 
                className="absolute rounded-full"
                style={{
                  top: '15%',
                  left: '20%',
                  width: '35%',
                  height: '35%',
                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                  transform: 'rotate(-20deg)',
                }}
              ></div>
              
              {/* 次要高光 */}
              <div 
                className="absolute rounded-full"
                style={{
                  top: '25%',
                  right: '25%',
                  width: '20%',
                  height: '20%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
                }}
              ></div>
              
              {/* 白色圆圈背景 */}
              <div 
                className="absolute rounded-full bg-white"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '50%',
                  height: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* 数字9 */}
                <div 
                  className="text-black font-black"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '6px',
                    textShadow: '0 0.5px 1px rgba(0, 0, 0, 0.3)',
                    lineHeight: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  9
                </div>
              </div>
              
              {/* 底部阴影增强立体感 */}
              <div 
                className="absolute bottom-0 left-0 right-0 rounded-b-full"
                style={{
                  height: '30%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, transparent 100%)',
                }}
              ></div>
            </div>
          </div>
          
          {/* GO TOP 文字 */}
          <span 
            className="text-[#b8860b] text-[8px] tracking-wide italic transform group-hover:text-[#d4af37] transition-colors duration-200"
            style={{ 
              fontFamily: 'Kanit, system-ui, sans-serif',
            }}
          >
            GO TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
