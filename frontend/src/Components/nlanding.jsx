import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full font-sans bg-[#eee3cb] text-[#583d2b]">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            We Build <span className="text-[#e6a17a]">Right</span><br /> for Your Brand
          </h1>
          <p className="text-lg sm:text-xl text-[#583d2b]/80 mb-8">
            Creative solutions, impactful designs, and pixel-perfect development tailored to boost your digital presence.
          </p>
          <button className="bg-[#e6a17a] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#d98c63] transition-all duration-300">
            Let’s Work Together
          </button>
        </motion.div>

        {/* Right Image/Illustration */}
        <motion.div
          className="mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://placehold.co/500x400/e6a17a/ffffff?text=Design+Studio"
            alt="Hero Illustration"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-[#e6a17a]/10 py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Web Design",
              desc: "Modern, responsive websites that communicate your message and drive results."
            },
            {
              title: "Brand Identity",
              desc: "Unique branding solutions that define your company's visual language."
            },
            {
              title: "UI/UX Development",
              desc: "User-focused designs that provide a smooth and intuitive experience."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-[#e6a17a]">{item.title}</h3>
              <p className="text-[#583d2b]/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#583d2b] text-[#eee3cb] py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Build Right Studios. All rights reserved.</p>
      </footer>
    </div>
  );
}
