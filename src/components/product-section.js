"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductSection() {
  const products = [
    {
      id: 1,
      name: "DUYA II Table (RED)",
      price: "Get Quotation",
      originalPrice: null,
      rating: 5,
      image: "/products/duya2.jpg",
      description: "DUYA II is a high-end competition table featuring a modern, technological design with a fully alloy base and LED under-lighting."
    },
    {
      id: 2,
      name: "DUYA Lambo Gold",
      price: "Get Quotation",
      originalPrice: null,
      rating: 5,
      image: "/products/duyalambogold.jpg",
      description: "DUYA Lambo Gold represents the pinnacle of luxury billiards tables with premium gold finishing and exceptional craftsmanship."
    },
    {
      id: 3,
      name: "APLUS Premier Classic Model (7-ft Traditional Table)",
      price: "Get Quotation",
      originalPrice: null,
      rating: 5,
      image: null,
      description: "APLUS Premier Classic Model features traditional 7-foot design with premium craftsmanship for authentic billiards experience."
    },
    {
      id: 4,
      name: "Classic APLUS \"English Pool / Pub-Style\" Table (8 ft)",
      price: "Get Quotation",
      originalPrice: null,
      rating: 5,
      image: null,
      description: "Classic APLUS English Pool table with authentic pub-style design, perfect for 8-ball and 9-ball games."
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Overlapping Text Effect */}
        <div className="text-center mb-16 relative">
          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              {/* Base White Text */}
              <span 
                className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
                style={{
                  color: 'rgba(255, 255, 255, 0.15)',
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  textStroke: '1.5px rgba(255, 255, 255, 0.3)',
                  fontFamily: 'Kanit, system-ui, sans-serif',
                  letterSpacing: '0.05em',
                  filter: 'blur(0.5px)',
                  fontStyle: 'italic',
                }}
              >
                PRODUCTS
              </span>
              
              {/* Golden Flash Overlay */}
              <motion.span 
                className="absolute inset-0 text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
                style={{
                  fontFamily: 'Kanit, system-ui, sans-serif',
                  letterSpacing: '0.05em',
                  filter: 'blur(0.5px)',
                  fontStyle: 'italic',
                  color: 'rgba(255, 215, 1, 1)',
                  WebkitTextStroke: '1.5px rgba(255, 215, 1, 0.8)',
                  textStroke: '1.5px rgba(255, 215, 1, 0.8)',
                  textShadow: '0 0 20px rgba(255, 215, 1, 0.8)',
                }}
                animate={{
                  opacity: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                }}
              >
                PRODUCTS
              </motion.span>
            </div>
          </div>
          
          {/* Foreground Content */}
          <motion.div 
            className="relative z-10 flex items-center justify-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div >
                <span 
                  className="text-[#ffd701] text-sm font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                >
                  Online Store
                </span>
              </div>
              <h2 
                className="text-4xl sm:text-5xl font-black text-white italic"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              >
                Recent Products
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {products.map((product, index) => (
            <Link key={product.id} href="/product">
              <motion.div
                className="bg-white overflow-hidden border border-gray-200 transition-all duration-300 group relative p-3 sm:p-4 hover:shadow-lg cursor-pointer h-64 sm:h-72 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              {/* Animated Border Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top Border - from left */}
                <div 
                  className="absolute top-0 left-0 h-0.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out z-10"
                  style={{
                    width: '100%',
                    backgroundColor: '#ffd701',
                    willChange: 'transform'
                  }}
                ></div>
                {/* Right Border - from top */}
                <div 
                  className="absolute top-0 right-0 w-0.5 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-600 delay-200 ease-out z-10"
                  style={{
                    height: '100%',
                    backgroundColor: '#ffd701',
                    willChange: 'transform'
                  }}
                ></div>
                {/* Bottom Border - from right */}
                <div 
                  className="absolute bottom-0 right-0 h-0.5 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out z-10"
                  style={{
                    width: '100%',
                    backgroundColor: '#ffd701',
                    willChange: 'transform'
                  }}
                ></div>
                {/* Left Border - from bottom */}
                <div 
                  className="absolute bottom-0 left-0 w-0.5 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-600 delay-200 ease-out z-10"
                  style={{
                    height: '100%',
                    backgroundColor: '#ffd701',
                    willChange: 'transform'
                  }}
                ></div>
              </div>

              {/* Product Image */}
              <div className="relative h-44 sm:h-52 bg-white overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback background when no image or image fails to load */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 ${!product.image ? 'flex' : 'hidden'} items-center justify-center`}
                  style={{ display: !product.image ? 'flex' : 'none' }}
                >
                  <div className="text-center px-4">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-500 text-xs font-medium text-center">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <div className="pt-3 text-center flex-shrink-0">
                <h3 className="text-sm sm:text-base font-bold text-black italic leading-tight" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  {product.name}
                </h3>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/product">
            <button className="bg-[#ffd701] hover:bg-[#e6c200] text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
