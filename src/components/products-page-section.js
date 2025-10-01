"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import ProductSidebar from "@/components/product-sidebar";

export default function ProductsPageSection() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategories: [],
    sortBy: "name" // default sorting by name
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "DUYA II Table (RED)",
      brand: "DUYA",
      price: "Get Quotation",
      priceValue: 15000, // for sorting purposes
      originalPrice: null,
      rating: 5.0,
      reviews: 15,
      image: "/home/product.jpg",
      category: "Tables",
      inStock: true,
      isNew: true,
      description: "DUYA II is a high-end competition table featuring a modern, technological design with a fully alloy base and LED under-lighting, engineered for top performance and aesthetic appeal.",
      specifications: {
        dimensions: "Standard tournament size",
        slateThickness: "Approx. 4.5 cm",
        frameMaterial: "Alloy",
        cushionMaterial: "High-resilience rubber",
        pocketType: "Tournament-standard leather",
        accessories: "Cue set, balls, table brush",
        warranty: "Approx. 5 years"
      },
      highlights: [
        "Fully alloy materials with alloy base design",
        "Natural slate top layer; approx. 4.5 cm thickness",
        "High-precision cushions & alloy rails for consistent rebounds",
        "LED under-lighting feature",
        "5 years warranty"
      ]
    },
    {
      id: 2,
      name: "DUYA Lambo Gold",
      brand: "DUYA",
      price: "Get Quotation",
      priceValue: 18000, // for sorting purposes
      originalPrice: null,
      rating: 4.9,
      reviews: 8,
      image: "/home/product.jpg",
      category: "Tables",
      inStock: true,
      isNew: true,
      description: "DUYA Lambo Gold combines top-tier performance with a luxurious gold finish, ideal for premium venues or players seeking both style and substance.",
      specifications: {
        dimensions: "Standard tournament size",
        slateThickness: "To be confirmed",
        frameMaterial: "Alloy & premium wood finish",
        cushionMaterial: "High-resilience rubber",
        pocketType: "Tournament-standard leather",
        accessories: "Cue set, balls, table brush",
        warranty: "To be confirmed"
      },
      highlights: [
        "Stylish gold finish treatment",
        "High-standard construction & long-term durability",
        "Premium alloy and wood materials",
        "Tournament-grade performance",
        "Luxury aesthetic appeal"
      ]
    },
    {
      id: 3,
      name: "APLUS Premier Classic Model (7-ft)",
      brand: "APLUS",
      price: "Get Quotation",
      priceValue: 12000, // for sorting purposes
      originalPrice: null,
      rating: 4.7,
      reviews: 42,
      image: "/home/product.jpg",
      category: "Tables",
      inStock: true,
      isNew: false,
      description: "A classic 7-ft pool table blending traditional design with durability, perfect for pubs, clubs, and homes seeking professional-grade performance in a compact size.",
      specifications: {
        dimensions: "7-ft standard size",
        slateThickness: "3-piece natural slate",
        frameMaterial: "Wood / Plywood",
        cushionMaterial: "Tournament-grade rubber",
        pocketType: "Drop / Leather pockets",
        accessories: "Cue set, balls, table brush",
        warranty: "To be confirmed"
      },
      highlights: [
        "3-piece natural slate top for consistent gameplay",
        "Solid wood or plywood frame with durable rails",
        "Traditional style pockets",
        "Perfect for pubs and clubs",
        "Compact 7-ft size"
      ]
    },
    {
      id: 4,
      name: "Classic APLUS English Pool Table (8-ft)",
      brand: "APLUS",
      price: "Get Quotation",
      priceValue: 14000, // for sorting purposes
      originalPrice: null,
      rating: 4.6,
      reviews: 28,
      image: "/home/product.jpg",
      category: "Tables",
      inStock: true,
      isNew: false,
      description: "This 8-ft English pool / pub-style table is designed for recreational and social use while maintaining professional build quality for reliable performance.",
      specifications: {
        dimensions: "8-ft standard size",
        slateThickness: "Solid 3-piece slate",
        frameMaterial: "Wood / Alloy frame options",
        cushionMaterial: "Tournament-grade rubber",
        pocketType: "Drop / Leather pockets",
        accessories: "Cue set, balls, table brush",
        warranty: "To be confirmed"
      },
      highlights: [
        "Solid 3-piece slate top",
        "Durable frame & rail construction",
        "Timeless pub-style aesthetic",
        "Professional build quality",
        "8-ft standard size"
      ]
    }
  ];

  const handleGetQuotation = (product) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${product.name}. Could you please provide me with a quotation and more details?`);
    window.open(`https://wa.me/60113504112?text=${message}`, '_blank');
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
          backgroundImage: `url('/outlets/outlets.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      ></div>

      {/* Header Section - Transparent with overlay */}
      <section className="py-25 sm:py-35 text-white relative z-10">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

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
      <section className="relative z-10 bg-black">
        <div className="flex">
          <ProductSidebar 
            onFilterChange={handleFilterChange}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
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
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-gray-800 overflow-hidden border border-gray-700 transition-all duration-300 group relative cursor-pointer hover:shadow-lg rounded-lg p-3 sm:p-4"
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
                  {/* Fallback background when image fails to load */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 hidden items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-gray-500 text-sm font-semibold text-center px-4">
                      {product.name}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-gray-900 font-semibold text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                        Click to view details
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="relative h-64 sm:h-80 lg:h-full bg-white">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback background when image fails to load */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 hidden items-center justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                  style={{ display: 'none' }}
                >
                  <span className="text-gray-500 text-lg font-semibold text-center px-4">
                    {selectedProduct.name}
                  </span>
                </div>
                
                {/* Brand Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#ffd701] text-black px-3 py-1 rounded-full font-bold text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                    {selectedProduct.brand}
                  </div>
                </div>
                
                {/* New Badge */}
                {selectedProduct.isNew && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                      NEW
                    </div>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 lg:p-8">
                {/* Product Name */}
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                  {selectedProduct.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(selectedProduct.rating) ? 'text-[#ffd701]' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">({selectedProduct.reviews} reviews)</span>
                </div>

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
                  <div className="bg-gray-700 rounded-lg p-4 space-y-2">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-400 capitalize italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-white font-medium italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="border-t border-gray-600 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white italic" style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}>
                        {selectedProduct.price}
                      </span>
                      {selectedProduct.originalPrice && (
                        <span className="text-lg text-gray-400 line-through ml-2">
                          {selectedProduct.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedProduct.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleGetQuotation(selectedProduct)}
                    className="w-full bg-[#ffd701] hover:bg-[#e6c200] text-black py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 italic shadow-lg hover:shadow-xl"
                    style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                  >
                    <span>Get Quotation via WhatsApp</span>
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
