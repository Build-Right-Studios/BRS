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
            className="flex items-center space-x-2 mb-4 text-white text-3xl font-extrabold tracking-tight group"
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
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link, index) => (
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
            {/* Replace with actual social media icons/links */}
            <motion.a
              href="#"
              className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
              aria-label="Facebook"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.5 0-2 2-2h2V2.14c-.326-.053-1.607-.14-3.045-.14C10.51 2 8 3.56 8 8.05V12H5v4h3v6h4v-6h3l1-4h-4v-2.5z"/></svg>
            </motion.a>
            <motion.a
              href="#"
              className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
              aria-label="Twitter"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.6.56-2.46.66.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.11 1C7.71 9.32 4.07 7.31 1.6 4.23c-.37.64-.58 1.39-.58 2.19 0 1.49.76 2.81 1.91 3.59-.7-.02-1.35-.21-1.92-.53v.05c0 2.08 1.48 3.81 3.44 4.2-.36.1-.74.15-1.13.15-.28 0-.55-.03-.8-.08.55 1.7 2.14 2.94 4.03 2.97-1.47 1.15-3.33 1.84-5.36 1.84-.35 0-.7-.02-1.04-.06C2.9 20.3 5.3 21 7.82 21c8.1 0 12.55-6.7 12.55-12.55 0-.2-.01-.4-.02-.6.86-.62 1.6-1.39 2.18-2.27z"/></svg>
            </motion.a>
            <motion.a
              href="#"
              className="text-[#eee3cb]/80 hover:text-[#e6a17a] transition-colors duration-200"
              aria-label="LinkedIn"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5V8h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.27h-3V13.5c0-.73-.02-1.33-.03-1.85-.01-.52-.02-.95-.02-1.27 0-.67.07-1.32.42-1.78.34-.46.82-.7 1.4-.7.98 0 1.71.67 1.71 2.02V19h3v-6.5c0-3.59-2.34-4.88-4.52-4.88-1.57 0-2.39.87-2.78 1.43V8h-.03s-.01.01-.01.01H8v11h3z"/></svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-10 pt-6 border-t border-[#e6a17a]/30 text-sm text-[#eee3cb]/60 text-center"
        variants={itemVariants}
      >
        <p>&copy; {new Date().getFullYear()} Build Right Studios. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
