import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { designs } from '../data/designs';
import { services } from '../data/services';

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [filteredDesigns, setFilteredDesigns] = useState(designs);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFilter);

  useEffect(() => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
      setFilteredDesigns(designs.filter(design => design.category === categoryFilter));
    } else {
      setFilteredDesigns(designs);
      setSelectedCategory(null);
    }
  }, [categoryFilter]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setFilteredDesigns(category ? designs.filter(design => design.category === category) : designs);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600">
            Discover our collection of handcrafted wooden masterpieces
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-6 py-2 rounded-full transition-colors ${
              !selectedCategory
                ? 'bg-amber-700 text-white'
                : 'bg-white text-gray-600 hover:bg-amber-50'
            }`}
          >
            All
          </button>
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => handleCategoryChange(service.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === service.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-amber-50'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Link to={`/design/${design.id}`} className="block group">
                <div className="relative overflow-hidden">
                  <img
                    src={design.images[0]}
                    alt={design.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{design.title}</h3>
                  <p className="text-gray-600 mb-4">{design.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-700 font-medium">{design.details.price}</span>
                    <span className="text-gray-500 text-sm">{design.details.leadTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;