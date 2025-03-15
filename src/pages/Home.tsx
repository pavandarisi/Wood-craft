import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, PenTool as Tool, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const images = [
  "https://img.freepik.com/free-photo/minimalist-black-interior-with-black-sofa_1268-31786.jpg",
  "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg",
  "https://www.pixelstalk.net/wp-content/uploads/images1/Download-free-Floor-Photos.jpg"
  
];


const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="Woodworking"
              className={`absolute w-full h-full object-cover brightness-75 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Crafting Excellence in Wood
          </motion.h1>
          <p className="text-xl text-gray-200 mb-8">
            Bespoke furniture and woodwork designs that blend artistry with functionality
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition"
          >
            View Our Work <ChevronRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mb-12">Committed to excellence in every piece we create</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Premium Quality', description: 'Only the finest materials and craftsmanship' },
              { icon: Clock, title: 'Timely Delivery', description: 'Projects completed on schedule' },
              { icon: Tool, title: 'Custom Design', description: 'Tailored to your specific needs' },
              { icon: Users, title: 'Expert Team', description: 'Skilled artisans with years of experience' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <feature.icon className="h-14 w-14 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Discover our range of woodworking expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ChevronRight className="h-4 w-4 text-amber-700 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/portfolio?category=${service.id}`}
                    className="mt-6 inline-flex items-center text-amber-700 hover:text-amber-800"
                  >
                    View Projects
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


       {/* CTA Section */}
       <section className="py-20 bg-amber-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8">Let's create something beautiful together.</p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-3 text-lg font-medium border-2 border-black rounded-md hover:bg-black hover:text-white transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
