import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hammer, Home, Grid, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-amber-700" />
            <span className="text-xl font-bold text-amber-700">WoodCraft</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home size={18} />} text="Home" />
            <NavLink to="/portfolio" icon={<Grid size={18} />} text="Portfolio" />
            <NavLink to="/contact" icon={<Phone size={18} />} text="Contact" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-600 hover:text-amber-700 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;