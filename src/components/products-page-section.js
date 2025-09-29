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
              <span className="mx-2 text-[#ffd701]">//</span>
              <span className="text-[#ffd701]">Products</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 bg-white">
        <div className="flex">
          <ProductSidebar 
            onFilterChange={handleFilterChange}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
            {/* Mobile Filter Button and Products Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
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
                      onClick={() => handleGetQuotation(product)}
                      className="bg-[#ffd701] text-black py-2 px-6 rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-200 flex items-center justify-center gap-2"
                      style={{ fontFamily: 'Kanit, system-ui, sans-serif' }}
                    >
                      <span className="text-sm">Get Quotation</span>
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
