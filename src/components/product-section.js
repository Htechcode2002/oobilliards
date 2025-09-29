"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductSection() {
  const products = [
    {
      id: 1,
      name: "Training Bag",
      price: "$13.49",
      originalPrice: null,
      rating: 5,
      image: "/home/product.jpg",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ..."
    },
    {
      id: 2,
      name: "Tennis Racket",
      price: "$17.99",
      originalPrice: null,
      rating: 4,
      image: "/home/product.jpg",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ..."
    },
    {
      id: 3,
      name: "Artificial Court Grass",
      price: "$9.99",
      originalPrice: "$13.99",
      rating: 4,
      image: "/home/product.jpg",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ..."
    },
    {
      id: 4,
      name: "Modern Trainer Sneakers",
      price: "$125.00",
      originalPrice: null,
      rating: 5,
      image: "/home/product.jpg",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ..."
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Overlapping Text Effect */}
        <div className="text-center mb-16 relative">
          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span 
              className="text-[6rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none select-none tracking-normal"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px #bdc3c7',
                textStroke: '1.5px #bdc3c7',
                fontFamily: 'Kanit, system-ui, sans-serif',
                letterSpacing: '0.05em',
                filter: 'blur(0.5px)',
                fontStyle: 'italic',
              }}
            >
              STORE
            </span>
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
                  className="text-[#9ACD32] text-sm font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                >
                  Online Store
                </span>
              </div>
              <h2 
                className="text-4xl sm:text-5xl font-black text-gray-900 italic"
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
            <motion.div
              key={product.id}
              className="bg-white overflow-hidden border border-gray-200 transition-all duration-300 group relative p-2 sm:p-4"
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
              <div className="relative h-48 sm:h-64 bg-gray-100 overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback background when image fails to load */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 hidden items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-gray-500 text-sm font-semibold text-center px-4">
                    {product.name}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-6 text-center">
                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-xl font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>

                {/* Buy Now Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#ffd701] text-black py-2 px-6 rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-200 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                  >
                    <span className="text-sm">Buy Now</span>
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
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
