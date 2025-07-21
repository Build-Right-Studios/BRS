import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navBarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.05, color: "#2DD4BF", transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const hamburgerIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <div className="bg-gray-950 font-sans">
      <motion.nav
        className="w-full bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 space-y-4 md:space-y-0 border-b border-gray-800"
        initial="hidden"
        animate="visible"
        variants={navBarVariants}
      >
        <div className="flex items-center w-full md:w-auto">
          <motion.a
            href="#"
            className="flex items-center space-x-3 text-white text-2xl sm:text-3xl font-extrabold tracking-tight group outline-none border-none"
            style={{ border: "none", outline: "none" }}
            whileHover={{ scale: 1.02, color: "#2DD4BF" }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://placehold.co/50x50/34D399/FFFFFF?text=BRS"
              alt="Build Right Studios Logo"
              className="h-10 sm:h-12 rounded-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/50x50/E0E0E0/333333?text=Error";
              }}
            />
            <span className="hidden sm:inline">Build Right Studios</span>
          </motion.a>

          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md transition-colors duration-200 ml-auto"
            aria-label="Toggle menu"
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={hamburgerIconVariants}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </motion.button>
        </div>

        <motion.div
          className={`w-full md:flex md:flex-grow md:justify-center ${
            isMenuOpen ? 'block' : 'hidden'
          } flex-col items-center space-y-4 md:space-y-0 mt-4 md:mt-0`}
          variants={isMenuOpen ? {
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }
            }
          } : {}}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-lg font-medium text-gray-300">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-400 transition duration-300 ease-in-out py-1 px-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
                variants={menuItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}
          variants={isMenuOpen ? {
            visible: {
              transition: {
                delayChildren: 0.4,
              }
            }
          } : {}}
        >
          <motion.button
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75"
            variants={menuItemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </motion.nav>
    </div>
  );
}
