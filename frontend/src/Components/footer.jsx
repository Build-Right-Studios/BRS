import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  // Variants for footer section entrance
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  // Variants for individual link/icon animations
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.1, color: "#e6a17a", transition: { duration: 0.2 } }, // Orange hover
    tap: { scale: 0.95 },
  };

  // Variants for the copyright text animation
  const copyrightVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
  };

  // Define textInViewVariants within the Footer component
  const textInViewVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-[#583d2b] text-[#eee3cb] py-12 px-6 md:px-16 border-t border-[#e6a17a]/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Company Info */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
          <motion.a
            href="#"
            className="flex items-center space-x-2 mb-4 text-[#eee3cb] text-3xl font-extrabold tracking-tight group"
            whileHover={{ scale: 1.02, color: "#e6a17a" }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://placehold.co/40x40/e6a17a/583d2b?text=BRS" // Smaller logo for footer
              alt="Build Right Studios Logo"
              className="h-8 w-8 rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/E0E0E0/333333?text=Error"; }}
            />
            <span className="text-[#eee3cb]">Build Right Studios</span>
          </motion.a>
          <motion.p
            className="text-[#eee3cb]/80 text-sm max-w-sm"
            variants={itemVariants}
          >
            Your vision, expertly crafted. Delivering creative digital solutions with precision and passion.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[#e6a17a]">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link) => (
              <motion.li key={link} variants={itemVariants}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[#e6a17a]">Connect With Us</h3>
          <div className="flex space-x-4">
            {/* Updated Social Media Icons (using inline SVGs for common platforms) */}
            <motion.a
              href="#"
              className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
              aria-label="Facebook"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </motion.a>
            <motion.a
              href="#"
              className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
              aria-label="Twitter"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5 4 8 4-1.5-2.6-2-5.5.4-9C14.7 3 16.4 3.7 18 5s2.5 2.5 3 4c.7-1.3 1.4-2.6 1.4-2.6z"/></svg>
            </motion.a>
            <motion.a
              href="#"
              className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
              aria-label="LinkedIn"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/></svg>
            </motion.a>
             <motion.a
              href="#"
              className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
              aria-label="Instagram"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Call to Action in Footer */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#e6a17a]/30 text-center">
        <motion.h3
          className="text-2xl font-bold mb-4 text-[#e6a17a]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textInViewVariants}
        >
          Ready to Start Your Project?
        </motion.h3>
        <motion.p
          className="text-[#eee3cb]/80 mb-6 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textInViewVariants}
          transition={{ delay: 0.2 }}
        >
          We're excited to help you build something amazing. Reach out to us today!
        </motion.p>
        <motion.button
            className="relative overflow-hidden bg-[#e6a17a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e6a17a] focus:ring-opacity-75 group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(230, 161, 122, 0.3)" }} // Orange shadow
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            <span className="relative z-10">Get a Free Consultation</span>
            {/* Gradient overlay for hover effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#d98c63] to-[#e6a17a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            ></motion.span>
          </motion.button>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-10 pt-6 border-t border-[#e6a17a]/30 text-sm text-[#eee3cb]/60 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={copyrightVariants} // Using a specific variant for copyright
      >
        <p>&copy; {new Date().getFullYear()} Build Right Studios. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
