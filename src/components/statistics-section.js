"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import { Users, Award, MapPin, Trophy } from "lucide-react";

export default function StatisticsSection() {
  const [counters, setCounters] = useState({
    outlets: 0,
    tournaments: 0,
    founded: 0,
    expansion: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);

  const finalValues = {
    outlets: 6,
    tournaments: 10,
    founded: 2017,
    expansion: 2025
  };

  const statsData = [
    {
      key: 'outlets',
      value: finalValues.outlets,
      label: 'Outlets across Malaysia',
      icon: MapPin
    },
    {
      key: 'tournaments',
      value: finalValues.tournaments,
      label: 'Tournaments hosted annually',
      icon: Trophy,
      suffix: '+'
    },
    {
      key: 'founded',
      value: finalValues.founded,
      label: 'Founded in Kuala Lumpur',
      icon: Award
    },
    {
      key: 'expansion',
      value: finalValues.expansion,
      label: 'Vietnam expansion',
      icon: Users
    }
  ];

  // Counter animation function
  const startCountAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    
    const duration = 2500; // 2.5 seconds for smoother animation
    const steps = 80; // More steps for ultra smooth animation
    const stepTime = duration / steps;

    const intervals = {};

    statsData.forEach((stat, index) => {
      // Add delay for each stat
      setTimeout(() => {
        const increment = stat.value / steps;
        let currentValue = 0;
        let step = 0;

        intervals[stat.key] = setInterval(() => {
          step++;
          
          // Use easing function for more natural animation
          const progress = step / steps;
          const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
          currentValue = Math.floor(stat.value * easedProgress);
          
          setCounters(prev => ({
            ...prev,
            [stat.key]: currentValue
          }));

          if (step >= steps) {
            setCounters(prev => ({
              ...prev,
              [stat.key]: stat.value // Ensure final value is exact
            }));
            clearInterval(intervals[stat.key]);
          }
        }, stepTime);
      }, index * 200); // Stagger start times
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  };

  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <React.Fragment key={stat.key}>
              {index > 0 && (
                <div className="hidden lg:block">
                  {/* Billiards Ball Image as Divider */}
                  <img 
                    src="/home/billiard-ball.png" 
                    alt="Billiard Ball"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              )}
            <motion.div
              key={stat.key}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* Number */}
              <motion.div
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2 italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                onViewportEnter={() => {
                  // Start counting animation when number comes into view
                  if (index === 0) startCountAnimation();
                }}
                animate={{
                  scale: counters[stat.key] > 0 ? [1, 1.05, 1] : 1
                }}
              >
                {counters[stat.key].toLocaleString()}{stat.suffix || ''}
              </motion.div>

              {/* Dot Separator */}
              <motion.div
                className="w-2 h-2 bg-[#ffd701] rounded-full mx-auto mb-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              />

              {/* Label */}
              <motion.p
                className="text-gray-300 font-medium text-sm sm:text-base italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
