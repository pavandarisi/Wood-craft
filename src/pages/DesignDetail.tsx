import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Ruler, Package, Clock, Check } from 'lucide-react';
import { designs } from '../data/designs';

const DesignDetail = () => {
  const { id } = useParams();
  const design = designs.find(d => d.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!design) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Design not found</h2>
          <Link
            to="/portfolio"
            className="text-amber-700 hover:text-amber-800 flex items-center"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={design.images[selectedImage]}
                  alt={`${design.title} - Main View`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="grid grid-cols-3 gap-4">
              {design.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-amber-700' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${design.title} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-black ${
                    selectedImage === index ? 'bg-opacity-0' : 'bg-opacity-20'
                  } transition-opacity`} />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{design.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{design.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Package className="h-5 w-5 text-amber-700" />
                  <span>{design.details.materials.join(', ')}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Ruler className="h-5 w-5 text-amber-700" />
                  <span>{design.details.dimensions}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Clock className="h-5 w-5 text-amber-700" />
                  <span>{design.details.leadTime}</span>
                </div>
                {design.details.customizable && (
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Check className="h-5 w-5 text-amber-700" />
                    <span>Customizable</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold text-gray-900">{design.details.price}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 hover:bg-amber-800 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>

                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-amber-900 mb-4">Finish Details</h3>
                  <p className="text-amber-800">{design.details.finishType}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignDetail;