"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, X, Filter } from "lucide-react";

export default function ProductSidebar({ onFilterChange, isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    "DUYA",
    "APLUS"
  ];

  const sortOptions = [
    { value: "name", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "price-low", label: "Price (Low to High)" },
    { value: "price-high", label: "Price (High to Low)" }
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // 当筛选条件改变时，通知父组件
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        searchTerm: searchTerm.toLowerCase(),
        selectedCategories,
        sortBy
      });
    }
  }, [searchTerm, selectedCategories, sortBy]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 bg-gray-900 px-6 py-16 min-h-screen border-r border-gray-700">
      {/* Cart Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
          <h3 className="font-bold text-white uppercase tracking-wide">CART</h3>
        </div>
        <p className="text-gray-400 text-sm">No products in the cart.</p>
      </motion.div>

      {/* Search Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd701] focus:border-transparent placeholder-gray-400"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
      </motion.div>

        {/* Sort By */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
            <h3 className="font-bold text-white uppercase tracking-wide">SORT BY</h3>
          </div>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd701] focus:border-transparent text-sm"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Product Categories */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
          <h3 className="font-bold text-white uppercase tracking-wide">PRODUCT CATEGORIES</h3>
        </div>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
                <label className="flex items-center gap-2 cursor-pointer hover:text-[#ffd701] transition-colors">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                    className="text-[#ffd701] focus:ring-[#ffd701] border-gray-300 rounded"
                />
                <span className="text-gray-300 text-sm">{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </motion.div>
      </div>

      {/* Mobile Modal */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
            onClick={onClose}
          ></div>
          
          {/* Modal Content */}
          <motion.div 
            className="fixed left-0 top-0 bottom-0 w-80 bg-gray-900 overflow-y-auto"
            style={{
              boxShadow: '4px 0 20px rgba(0, 0, 0, 0.1), 8px 0 40px rgba(0, 0, 0, 0.05)'
            }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#ffd701]" />
                <h2 className="font-bold text-white uppercase tracking-wide">Filters</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="px-6 py-6 mt-16">
              {/* Search Section */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd701] focus:border-transparent text-base placeholder-gray-400"
                  />
                  <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-500" />
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
                  <h3 className="font-bold text-white uppercase tracking-wide">SORT BY</h3>
                </div>
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd701] focus:border-transparent text-base"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Categories */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-[#ffd701] rounded-full"></div>
                  <h3 className="font-bold text-white uppercase tracking-wide">PRODUCT CATEGORIES</h3>
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer hover:text-[#ffd701] transition-colors p-2 hover:bg-gray-800 rounded-lg">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="w-4 h-4 text-[#ffd701] focus:ring-[#ffd701] border-gray-300 rounded"
                      />
                      <span className="text-gray-300 text-base">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
    </div>
      )}
    </>
  );
}
