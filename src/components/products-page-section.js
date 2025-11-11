"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import ProductSidebar from "@/components/product-sidebar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductsPageSection() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategories: [],
    sortBy: "name" // default sorting by name
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const products = useMemo(() => [
    {
      id: 1,
      name: "DUYA II Table (RED)",
      brand: "DUYA",
      priceValue: 15000, // for sorting purposes
      image: "/products/duya/red/duya2.jpg",
      images: ["/products/duya/red/duya2.jpg"], // Multiple images for swiper
      category: "Tables",
      description: "Luminous \"Sports car-grade shell with high magnetism\", applying automotive injection molding process",
      specifications: {
        outerDimensions: "2820mm × 1550mm",
        innerDimensions: "2540mm × 1260mm",
        cushion: "DUYA Julong Magnesium-aluminum alloy one-piece steel cushion",
        slate: "Natural slate at 4.5cm",
        rubber: "DRAGON RIDGE one-piece rubber edge",
        stand: "The sportscar looks metal chassis",
        pocket: "SAINT CICADA Easy-to-replace alloy pocket",
        rail: "Bamboo rail",
        light: "Base luminous LED",
        lightCover: "Acrylic insert board",
        ballReturn: "Duya Customized Ball-return",
        design: "Sports car-grade shell with high magnetism"
      },
      highlights: [
        "Sports car-grade shell with high magnetism design",
        "Natural slate at 4.5cm thickness",
        "DUYA Julong Magnesium-aluminum alloy one-piece steel cushion",
        "Base luminous LED lighting",
        "SAINT CICADA Easy-to-replace alloy pocket"
      ]
    },
    {
      id: 2,
      name: "DUYA Lambo Gold",
      brand: "DUYA",
      priceValue: 18000, // for sorting purposes
      image: "/products/duya/lambogold/duyalambogold.jpg",
      images: ["/products/duya/lambogold/duyalambogold.jpg"], // Multiple images for swiper
      category: "Tables",
      description: "Drawing inspiration from Lamborghini's fluidic surface design, the all-alloy chassis is made from aerospace-grade aluminum.",
      specifications: {
        outerDimensions: "2820mm × 1550mm",
        innerDimensions: "2540mm × 1260mm",
        cushion: "\"Julong Pro\" alloy one-piece steel cushion, Aerospace-grade aluminum material",
        slate: "Natural slate at 5.0 cm",
        rubber: "DRAGON RIDGE II one-piece rubber edge",
        stand: "Drawing inspiration from Lamborghini's fluidic surface design, the all-alloy chassis is made from aerospace-grade aluminum",
        pocket: "SAINT CICADA alloy pocket",
        rail: "Carbon fiber cover",
        lightCover: "Acrylic insert board",
        ballReturn: "Lambo Gold Customized Ball-return",
        light: "Base luminous LED",
        design: "Luminous \"Sports car-grade shell with high magnetism\", applying automotive injection molding process"
      },
      highlights: [
        "Lamborghini-inspired fluidic surface design with aerospace-grade aluminum chassis",
        "Natural slate at 5.0 cm thickness",
        "\"Julong Pro\" alloy one-piece steel cushion with aerospace-grade aluminum",
        "Carbon fiber cover rail",
        "Base luminous LED lighting with acrylic insert board"
      ]
    },
    {
      id: 3,
      name: "APLUS Apollo",
      brand: "APLUS",
      priceValue: 12000, // for sorting purposes
      image: "/products/aplus/Apollo/IMG_6135.PNG",
      images: [
        "/products/aplus/Apollo/IMG_6135.PNG",
        "/products/aplus/Apollo/IMG_6133.PNG",
        "/products/aplus/Apollo/IMG_6134.PNG",
        "/products/aplus/Apollo/IMG_6132.PNG"
      ], // Multiple images for swiper
      category: "Tables",
      description: "One of the newest premium products of Aplus Billiards, featuring unique design, exceptional durability and integrated modern technologies. Meets international tournament standards with ISO 9001:2015 certification.",
      specifications: {
        overallDimensions: "290 x 164 x 81 cm",
        playingSurface: "254 x 127 cm",
        centerPockets: "11.5 cm",
        cornerPockets: "10.5-11 cm",
        color: "Black",
        frame: "Solid metal frame combined with wood, engineered for stability and vibration reduction",
        slate: "Natural dark green slate, premium grade, 1 inch thick (3 pieces) with 99.99% flatness to international tournament standards",
        cushions: "Premier K55 Taiwan rubber provides accurate responses and superior durability",
        cloth: "Dragon Gold felt maintains flatness and provides smooth playing experience",
        rails: "Reinforced rubber wood rails with high-pressure lamination and Laminate surface coating",
        corners: "Premium ADC aluminum alloy corners with nickel plating, cast as single pieces",
        warranty: "2-year coverage for frame, slate surface, and rubber cushions"
      },
      highlights: [
        "ISO 9001:2015 certified - International tournament approved",
        "Natural dark green slate with 99.99% flatness accuracy",
        "Premier K55 Taiwan rubber cushions for accurate responses",
        "Dragon Gold felt for smooth playing experience",
        "Solid metal and wood frame for stability and vibration reduction",
        "2-year warranty coverage"
      ]
    },
    {
      id: 4,
      name: "APLUS Special Eco",
      brand: "APLUS",
      priceValue: 14000, // for sorting purposes
      image: "/products/aplus/Eco/IMG_6130.PNG",
      images: [
        "/products/aplus/Eco/IMG_6130.PNG",
        "/products/aplus/Eco/IMG_6129.PNG",
        "/products/aplus/Eco/IMG_6131.PNG",
        "/products/aplus/Eco/IMG_6136.PNG"
      ], // Multiple images for swiper
      category: "Tables",
      description: "A sturdy and durable table with millimeter precision, featuring metal framework combined with wood. Designed to meet international competition standards with ISO 9001:2015 certification.",
      specifications: {
        overallDimensions: "292 x 164 x 81 cm",
        playingSurface: "254 x 127 cm",
        centerPockets: "11.5 cm",
        cornerPockets: "10.5-11 cm",
        color: "Gray",
        frame: "Metal framework combined with wood offering sturdy and durable design with millimeter precision",
        legs: "Heavy-duty steel frame with reinforced joints for stability and long-term durability",
        slate: "High-quality dark green natural slate with flatness up to 99.9%, meeting international competition standards",
        cushions: "Premier K55 Taiwan rubber ensures smooth and accurate ball movement",
        rails: "Rubber wood with high-pressure laminate coating and nickel-plated aluminum trim for durability and aesthetics",
        warranty: "2-year coverage on rubber cushions, frame, and slate surface"
      },
      highlights: [
        "ISO 9001:2015 certified - International competition standards",
        "Natural slate with 99.9% flatness accuracy",
        "Premier K55 Taiwan rubber for smooth ball movement",
        "Heavy-duty steel frame with reinforced joints",
        "Precision point system for accurate play",
        "2-year warranty coverage"
      ]
    }
  ], []);

  const handleGetQuotation = (product) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${product.name}. Could you please provide me with a quotation and more details?`);
    window.open(`https://wa.me/60102949688?text=${message}`, '_blank');
  };

  const handleWishlist = (product) => {
    console.log('Add to wishlist:', product);
    // Add wishlist functionality here
  };

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  // 筛选和排序产品
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // 搜索筛选
      const matchesSearch = !filters.searchTerm || 
        product.name.toLowerCase().includes(filters.searchTerm) ||
        product.description.toLowerCase().includes(filters.searchTerm) ||
        product.brand.toLowerCase().includes(filters.searchTerm);

      // 分类筛选
      const matchesCategory = filters.selectedCategories.length === 0 ||
        filters.selectedCategories.includes(product.brand);

      return matchesSearch && matchesCategory;
    });

    // 排序逻辑
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-low":
          return a.priceValue - b.priceValue;
        case "price-high":
          return b.priceValue - a.priceValue;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, filters]);

  return (
    <div className="min-h-screen relative">
      {/* Full Page Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/products/banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      ></div>

      {/* Header Section - Transparent with overlay */}
      <section className="py-25 sm:py-35 text-white relative z-10">
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
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
              Our <span className="text-[#ffd701]">Products</span>
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
              <span className="mx-2 text-[#ffd701]">{'//'}</span>
              <span className="text-[#ffd701]">Products</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="flex">
          <ProductSidebar 
            onFilterChange={handleFilterChange}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
            {/* Exclusive Agent Banner */}
            <motion.div 
              className="mb-8 bg-gradient-to-r from-[#ffd701]/20 via-[#ffd701]/10 to-[#ffd701]/20 border-l-4 border-[#ffd701] p-4 sm:p-6 rounded-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#ffd701]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#ffd701] font-bold text-lg mb-1 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    Exclusive Agent in Malaysia
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    We are the <span className="text-white font-semibold">exclusive agent</span> for <span className="text-white font-semibold">DUYA</span> and <span className="text-white font-semibold">APLUS</span> brands in Malaysia.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Filter Button and Products Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-300">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-[#ffd701] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#e6c200] transition-colors duration-200"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 w-full max-w-full">
            {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-gray-800 overflow-hidden border border-gray-700 transition-all duration-300 group relative cursor-pointer hover:shadow-lg rounded-lg p-3 sm:p-4 w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleProductClick(product)}
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
                <div className="relative h-48 sm:h-64 bg-white overflow-hidden rounded-lg">
                  {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-300"
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-xs font-medium text-center">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg max-w-[90%]">
                      <span className="text-gray-900 font-semibold text-xs sm:text-sm italic whitespace-nowrap" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                        View details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Name */}
                <div className="pt-3 text-center">
                  <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#ffd701] transition-colors duration-300 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Popup */}
      {isPopupOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClosePopup}
          ></div>
          
          {/* Modal Content */}
          <motion.div 
            className="relative bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-700/80 hover:bg-gray-700 rounded-full shadow-lg transition-all duration-200"
            >
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col gap-0">
              {/* Product Image Swiper */}
              <div className="relative h-64 sm:h-80 lg:h-96 bg-white">
                {selectedProduct.images && selectedProduct.images.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full w-full rounded-t-2xl"
                    style={{
                      '--swiper-navigation-color': '#ffd701',
                      '--swiper-pagination-color': '#ffd701',
                    }}
                  >
                    {selectedProduct.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={img}
                            alt={`${selectedProduct.name} - Image ${index + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-t-2xl">
                    <div className="text-center px-4">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm font-medium text-center">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Brand Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-[#ffd701] text-black px-3 py-1 rounded-full font-bold text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    {selectedProduct.brand}
                  </div>
                </div>
                
              </div>

              {/* Product Details */}
              <div className="p-6 lg:p-8 rounded-b-2xl bg-gray-900">
                {/* Product Name */}
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-4" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  {selectedProduct.name}
                </h2>


                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  {selectedProduct.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-3 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#ffd701] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-3 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    Specifications
                  </h3>
                  <div className="bg-gray-700 rounded-lg p-4 space-y-3">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 text-sm border-b border-gray-600 last:border-b-0 pb-3 last:pb-0">
                        <span className="text-gray-400 capitalize italic font-semibold min-w-fit sm:min-w-[180px] flex-shrink-0" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-white font-medium italic break-words sm:text-right flex-1" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
            {/* Sticky WhatsApp Button */}
            <div className="sticky bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-600 p-4">
              <button
                onClick={() => handleGetQuotation(selectedProduct)}
                className="w-full bg-[#ffd701] hover:bg-[#e6c200] text-black py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 italic shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
              >
                <span>Get Quotation via WhatsApp</span>
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
