"use client";

import { motion } from "framer-motion";

export default function EventsPromotions() {
  const tournamentEvents = [
    {
      date: "28 Feb 2023",
      players: "Serena Larsson – Olivia Schneider",
      time: "08:00",
      court: "Court 01"
    },
    {
      date: "21 Mar 2023", 
      players: "Andreas Medvedev – Antony Fonsteur",
      time: "06:00",
      court: "Court 01"
    },
    {
      date: "21 Apr 2023",
      players: "Marcus Crown – German Stiller", 
      time: "03:00",
      court: "Court 01"
    },
    {
      date: "15 May 2023",
      players: "Elena Rodriguez – David Chen",
      time: "07:30",
      court: "Court 02"
    },
    {
      date: "10 Jun 2023",
      players: "Michael Johnson – Sarah Kim",
      time: "05:00",
      court: "Court 01"
    }
  ];


  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side - Tournament (Background Image) */}
        <motion.div 
          className="lg:w-1/2 w-full p-6 lg:p-8 flex flex-col justify-start items-center relative overflow-hidden min-h-[500px] lg:min-h-[600px] bg-center bg-no-repeat pt-16 lg:pt-20"
          style={{
            backgroundImage: `url('/home/events-bg-2.png')`,
            backgroundColor: '#ccaa4c',
            backgroundSize: '60%'
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="relative max-w-md text-center" style={{ zIndex: 10 }}>
            <motion.h2 
              className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight italic mb-2 lg:-mb-3"
               style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              BILLIARDS
            </motion.h2>
            <motion.h3 
              className="text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-8 leading-tight italic"
              style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              TOURNAMENT
            </motion.h3>

            {/* Tournament Events List */}
            <motion.div 
              className="space-y-10 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {tournamentEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Date Badge */}
                  <div className="inline-block mb-3">
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      {event.date}
                    </span>
                  </div>
                  
                  {/* Players */}
                  <h4 className="text-black font-bold text-2xl mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    {event.players}
                  </h4>
                  
                  {/* Time and Court */}
                  <p className="text-black/70 text-base font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    {event.time} | {event.court}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>


        {/* Right Side - Coaching Image */}
        <motion.div 
          className="lg:w-1/2 w-full relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative h-full">
            <img
              src="/home/tournament.jpg"
              alt="Professional Tournament Player"
              className="w-full h-full object-cover"
            />
            {/* Optional overlay for text if needed */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Optional content over image */}
            <div className="absolute bottom-12 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-[#ffd701] text-black px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Tournament Ready
                </span>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  Professional Competition
                </h3>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
