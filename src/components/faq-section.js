"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqData = {
    general: [
      {
        id: "q1",
        question: "What are O'O+ Billiards Group's opening hours?",
        answer: "Our outlets have different operating hours, and some are even open 24 hours on certain days. Please check each outlet's page for the most accurate and updated timings."
      },
      {
        id: "q2",
        question: "Do all outlets have the same games available?",
        answer: "Most outlets offer snooker, Chinese 8 ball, and American pool tables, but the number and types may vary. Please check the Outlets page for details."
      },
      {
        id: "q3",
        question: "Is parking available at the outlets?",
        answer: "Yes, most outlets have parking facilities nearby or within the mall premises."
      },
      {
        id: "q4",
        question: "Are food and drinks allowed in the outlets?",
        answer: "Yes, light snacks and drinks are allowed in designated areas. Please follow each outlet's guidelines for safety and cleanliness."
      },
      {
        id: "q5",
        question: "Do the outlets sell food, snacks, or beverages?",
        answer: "Yes, some outlets offer light snacks, beverages, and even main meals. Availability may vary by outlet, so please check with the respective outlet for details."
      },
      {
        id: "q6",
        question: "Do you host corporate or private events?",
        answer: "Yes, we can accommodate group bookings, private parties, tournaments, or venue rentals for events. Please contact the specific outlet via WhatsApp to discuss your requirements."
      },
      {
        id: "q7",
        question: "Do you collaborate with schools, universities, or companies for events?",
        answer: "Yes, we welcome collaboration with educational institutions and companies for tournaments, training sessions, or private events. Please contact us to discuss your requirements."
      },
      {
        id: "q8",
        question: "How can I stay updated on upcoming tournaments or events?",
        answer: "You can check the Events & Promotions page on our website or follow our official social media channels for the latest updates."
      }
    ],
    booking: [
      {
        id: "q9",
        question: "How can I book a table?",
        answer: "We generally do not recommend advance booking for regular tables. Instead, you can WhatsApp the outlet 30 minutes before arrival to check for available tables. During peak hours, advance booking may be accepted based on availability."
      },
      {
        id: "q10",
        question: "Do I need to pay a deposit for booking?",
        answer: "No deposit is required for regular table bookings. For private events or large group bookings, a deposit may be requested."
      },
      {
        id: "q11",
        question: "How far in advance should I contact for table availability?",
        answer: "We recommend WhatsApp inquiries at least 30 minutes before arrival, especially on weekends, public holidays, or peak hours."
      },
      {
        id: "q12",
        question: "Can I cancel or reschedule my booking?",
        answer: "Yes, simply contact the outlet via WhatsApp as early as possible to make changes."
      },
      {
        id: "q13",
        question: "How much does it cost to play?",
        answer: "Prices vary depending on the outlet, time, and type of table. Please refer to the Outlets page for pricing details or contact the outlet directly via WhatsApp."
      }
    ],
    products: [
      {
        id: "q14",
        question: "Do you sell snooker and billiards cues, tables, and accessories?",
        answer: "Yes, we sell a range of professional snooker and billiards tables, cues, and accessories."
      },
      {
        id: "q15",
        question: "How can I purchase a product?",
        answer: "Click the Buy Now button on the Products page or contact the sales team via WhatsApp for details."
      },
      {
        id: "q16",
        question: "Do you provide delivery and installation for tables?",
        answer: "Delivery and installation services may be provided depending on location and conditions. Please contact us to discuss arrangements."
      },
      {
        id: "q17",
        question: "Do you provide cues for first-time players or those without their own equipment?",
        answer: "Yes, cues are available at all outlets for customers to use."
      },
      {
        id: "q18",
        question: "Do you have cue lockers for regular players?",
        answer: "Yes, we provide cue locker services at all our outlets. For any related inquiries, please contact the respective outlet directly."
      },
      {
        id: "q19",
        question: "Do you offer cue repair or other snooker-related services?",
        answer: "Yes, basic cue tip replacement, maintenance, and other snooker/pool-related services are available. Please check with the outlet for details."
      },
      {
        id: "q20",
        question: "Can I rent the venue for tournaments or private events?",
        answer: "Yes, you can rent the venue for competitions, private parties, or corporate events. Please contact the respective outlet for pricing and availability."
      }
    ],
    coaching: [
      {
        id: "q21",
        question: "What types of coaching do you offer?",
        answer: "We offer both 1-to-1 coaching and group coaching for snooker, Chinese 8 ball, Chinese 9 ball, and American pool."
      },
      {
        id: "q22",
        question: "Who are the coaches?",
        answer: "Our coaches are experienced players with professional guidance and tournament backgrounds."
      },
      {
        id: "q23",
        question: "How can I register for coaching classes?",
        answer: "Contact the outlet's coaching WhatsApp number listed on our website for schedules and fees."
      }
    ]
  };

  const categories = [
    { key: "general", title: "General", color: "bg-blue-500" },
    { key: "booking", title: "Booking", color: "bg-green-500" },
    { key: "products", title: "Products & Services", color: "bg-purple-500" },
    { key: "coaching", title: "Coaching", color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Full Page Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/products/header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      ></div>

      {/* Hero Section - Transparent with overlay */}
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
              Frequently Asked <span className="text-[#ffd701]">Questions</span>
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
              <span className="mx-2 text-[#ffd701]">//</span>
              <span className="text-[#ffd701]">FAQ</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="relative z-10 bg-white">
        <div className=" px-5 md:px-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Left Column - Introduction (40%) */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Every day help for <span className="text-[#ffd701]">our customers</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  At O'O+ Billiards Group, we're committed to providing exceptional service and support to all our customers. 
                  Whether you're looking for information about our outlets, products, coaching programs, or booking procedures, 
                  we're here to help make your billiards experience as smooth as possible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {[
                  "Professional Coaching Services",
                  "Multiple Outlet Locations", 
                  "Quality Equipment & Products",
                  "Flexible Booking Options"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#ffd701] rounded-full"></div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  If you need <span className="text-[#ffd701]">more help</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Can't find the answer you're looking for? Our customer support team is always ready to assist you with any questions or concerns.
                </p>
                <button className="bg-[#ffd701] hover:bg-[#e6c200] text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                  <span>Contact Support</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Right Column - FAQ Questions by Sections (60%) */}
            <div className="lg:col-span-3 space-y-8">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  {/* Section Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-1 h-6 ${category.color} rounded-full`}></div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Section Questions */}
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqData[category.key].map((faq, index) => (
                      <AccordionItem 
                        key={faq.id} 
                        value={faq.id}
                        className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold text-gray-900 group">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-[#ffd701] rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-black group-data-[state=open]:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <span className="text-sm md:text-base">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 pt-2">
                          <div className="text-gray-600 leading-relaxed ml-12">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
