import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  // Variants for section entrance animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 }, // More pronounced initial state
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }, // Longer duration
  };

  // Variants for individual item animations (e.g., feature cards, project cards, testimonials)
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 30 }, // More pronounced initial state
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }, // Longer duration
  };

  // Variants for text within sections (e.g., headings, paragraphs)
  const textInViewVariants = {
    hidden: { opacity: 0, y: 40 }, // More pronounced initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }, // Longer duration
  };

  return (
    // Main container with beige background and brown text
    <div className="min-h-screen w-full font-sans bg-[#eee3cb] text-[#583d2b] overflow-hidden relative">

      {/* Animated Background Elements (More Prominent Gradients/Blobs) */}
      <motion.div
        className="absolute top-[-15%] left-[-15%] w-[500px] h-[500px] bg-gradient-to-br from-[#e6a17a] to-[#583d2b] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"
        animate={{ x: [0, 200, 0], y: [0, 100, 0], rotate: [0, 360, 0], scale: [1, 1.2, 1] }} // Added scale animation
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-tl from-[#583d2b] to-[#e6a17a] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"
        animate={{ x: [0, -200, 0], y: [0, -100, 0], rotate: [0, -360, 0], scale: [1, 1.1, 1] }} // Added scale animation
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute top-[15%] left-[25%] w-[450px] h-[450px] bg-gradient-to-tr from-[#e6a17a]/70 to-[#583d2b]/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"
        animate={{ x: [0, 100, 0], y: [0, -200, 0], rotate: [0, 360, 0], scale: [1, 1.3, 1] }} // Added scale animation
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left max-w-xl flex-1 md:mr-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#583d2b]">
            We Build <span className="text-[#e6a17a] drop-shadow-lg">Right</span><br /> for Your Digital Vision
          </h1>
          <p className="text-lg sm:text-xl text-[#583d2b]/80 mb-8">
            Creative solutions, impactful designs, and pixel-perfect development tailored to boost your digital presence and achieve your goals.
          </p>
          <motion.button
            className="relative overflow-hidden bg-[#e6a17a] text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e6a17a] focus:ring-opacity-75 group"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(230, 161, 122, 0.5)" }} // Stronger shadow
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let’s Work Together</span>
            {/* Gradient overlay for hover effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#d98c63] to-[#e6a17a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            ></motion.span>
          </motion.button>
        </motion.div>

        {/* Right Image/Illustration - Now a real-time live graphic of a planet with a revolving ring */}
        <motion.div
          className="mb-10 md:mb-0 flex-1 flex justify-center items-center p-4"
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03, rotate: 2, boxShadow: "0 20px 40px rgba(90, 61, 43, 0.3)" }}
        >
          <motion.svg
            className="w-full max-w-lg h-auto mx-auto drop-shadow-2xl"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Planet */}
            <motion.circle
              cx="300" cy="200" r="100"
              fill="url(#planetGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />

            {/* Ring - will animate to revolve around the planet */}
            <motion.ellipse
              cx="300" cy="200" rx="180" ry="60"
              fill="none"
              stroke="#e6a17a"
              strokeWidth="10"
              initial={{ rotate: 0, scaleY: 0.5, opacity: 0 }}
              animate={{
                rotate: 360, // Full revolution
                scaleY: [0.5, 0.6, 0.5, 0.4, 0.5], // Simulate perspective change
                opacity: [0, 1, 1, 0.5, 1] // Fade out slightly when behind
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scaleY: { duration: 7.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                opacity: { duration: 7.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
              }}
              style={{ transformOrigin: 'center center' }} // Ensure rotation is around its center
            />

            {/* Subtle stars/dots around the planet */}
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 600}
                cy={Math.random() * 400}
                r={Math.random() * 1 + 0.5}
                fill="#583d2b"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5, repeatType: "reverse" }}
              />
            ))}

            {/* Gradients definitions */}
            <defs>
              <radialGradient id="planetGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                <stop offset="0%" stopColor="#e6a17a" />
                <stop offset="100%" stopColor="#583d2b" />
              </radialGradient>
            </defs>
          </motion.svg>
        </motion.div>
      </section>

      {/* About Us / Why Choose Us Section */}
      <section className="relative z-10 bg-[#eee3cb]/80 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-[#583d2b]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textInViewVariants}
          >
            Why Choose <span className="text-[#e6a17a] drop-shadow-md">Build Right Studios</span>?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-[#583d2b]/80 mb-12 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textInViewVariants}
            transition={{ delay: 0.2 }}
          >
            As a dedicated freelance company, we pride ourselves on a streamlined process, a talented workforce, and an unwavering commitment to delivering exceptional results, every time.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-[#eee3cb] p-8 rounded-xl shadow-xl border border-[#583d2b]/30 flex flex-col items-center text-center group"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.07, boxShadow: "0 18px 35px rgba(90, 61, 43, 0.2)" }} // Stronger scale and shadow
            >
              <motion.svg className="w-12 h-12 text-[#e6a17a] mb-4 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></motion.svg>
              <h3 className="text-xl font-semibold mb-2 text-[#583d2b]">Timely Delivery</h3>
              <p className="text-[#583d2b]/80">We commit to deadlines and ensure your project is completed and submitted on time, every time.</p>
            </motion.div>
            <motion.div
              className="bg-[#eee3cb] p-8 rounded-xl shadow-xl border border-[#583d2b]/30 flex flex-col items-center text-center group"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.07, boxShadow: "0 18px 35px rgba(90, 61, 43, 0.2)" }}
            >
              <motion.svg className="w-12 h-12 text-[#e6a17a] mb-4 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></motion.svg>
              <h3 className="text-xl font-semibold mb-2 text-[#583d2b]">Expert Workforce</h3>
              <p className="text-[#583d2b]/80">Our team comprises skilled professionals dedicated to bringing your ideas to life with precision.</p>
            </motion.div>
            <motion.div
              className="bg-[#eee3cb] p-8 rounded-xl shadow-xl border border-[#583d2b]/30 flex flex-col items-center text-center group"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.07, boxShadow: "0 18px 35px rgba(90, 61, 43, 0.2)" }}
            >
              <motion.svg className="w-12 h-12 text-[#e6a17a] mb-4 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.84L18.15 19H5.85L12 5.84zM11 10h2v5h-2zm0 6h2v2h-2z"/></motion.svg>
              <h3 className="text-xl font-semibold mb-2 text-[#583d2b]">Seamless Process</h3>
              <p className="text-[#583d2b]/80">From concept to completion, we ensure a smooth and transparent project journey for you.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 bg-[#eee3cb] py-16 px-6 md:px-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#583d2b]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textInViewVariants}
        >
          Our Core <span className="text-[#e6a17a] drop-shadow-md">Services</span>
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.18 }} // Slightly increased stagger
        >
          {[
            {
              title: "Website Development",
              desc: "Crafting modern, responsive, and high-performance websites tailored to your business needs.",
              icon: (
                <svg className="w-10 h-10 text-[#e6a17a] mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 14h16V6H4v12zm2-7h3v2H6v-2zm5 0h3v2h-3v-2zm5 0h3v2h-3v-2z"/>
                </svg>
              )
            },
            {
              title: "Software Development",
              desc: "Building robust, scalable, and custom software solutions to streamline your operations.",
              icon: (
                <svg className="w-10 h-10 text-[#e6a17a] mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6h-2v2h2V6zm-4 0h-2v2h2V6zm-4 0H6v2h2V6zm8 4h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0H6v2h2v-2zM16 14h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0H6v2h2v-2zM18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h12v16z"/>
                </svg>
              )
            },
            {
              title: "UI/UX Design",
              desc: "Creating intuitive, engaging, and aesthetically pleasing user interfaces and experiences.",
              icon: (
                <svg className="w-10 h-10 text-[#e6a17a] mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11.55C9.64 9.35 6.48 8 3 8v13c3.48 0 6.64 1.35 9 3.55 2.36-2.2 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              )
            },
            {
              title: "SaaS Solutions",
              desc: "Developing powerful Software-as-a-Service platforms designed for scalability and efficiency.",
              icon: (
                <svg className="w-10 h-10 text-[#e6a17a] mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
              )
            },
            {
              title: "After-Service Support",
              desc: "Providing comprehensive post-launch support and maintenance to ensure long-term success.",
              icon: (
                <svg className="w-10 h-10 text-[#e6a17a] mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#eee3cb]/90 p-8 rounded-xl shadow-xl border border-[#583d2b]/30 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(90, 61, 43, 0.2)" }} // More pronounced lift and shadow
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }} // Slightly increased stagger
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-3 text-[#583d2b]">{item.title}</h3>
              <p className="text-[#583d2b]/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Work / Portfolio Section */}
      <section className="relative z-10 bg-[#eee3cb]/80 py-20 px-6 md:px-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#583d2b]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textInViewVariants}
        >
          Our Recent <span className="text-[#e6a17a] drop-shadow-md">Work</span>
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.18 }} // Slightly increased stagger
        >
          {[
            {
              title: "E-commerce Platform",
              desc: "A robust online store with seamless user experience.",
              image: "https://placehold.co/400x300/e6a17a/583d2b?text=Project+1"
            },
            {
              title: "Healthcare Dashboard",
              desc: "Intuitive dashboard for medical data visualization.",
              image: "https://placehold.co/400x300/e6a17a/583d2b?text=Project+2"
            },
            {
              title: "Fintech Mobile App",
              desc: "Secure and user-friendly mobile application for financial management.",
              image: "https://placehold.co/400x300/e6a17a/583d2b?text=Project+3"
            },
            {
              title: "SaaS CRM Solution",
              desc: "Customizable CRM to manage client relationships effectively.",
              image: "https://placehold.co/400x300/e6a17a/583d2b?text=Project+4"
            },
            {
              title: "Educational Portal",
              desc: "Interactive learning platform for students and educators.",
              image: "https://placehold.co/400x300/e6a17a/583d2b?text=Project+5"
            },
            {
              title: "Company Portfolio Site",
              desc: "Sleek and modern website showcasing company's services.",
              image: "https://placehold.co/400x300/e6a17a/583d2b?text=Project+6"
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#eee3cb]/90 rounded-xl shadow-xl border border-[#583d2b]/30 overflow-hidden hover:shadow-2xl transition duration-300 transform group"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }} // Slightly increased stagger
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(90, 61, 43, 0.2)" }} // More pronounced lift and shadow
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#583d2b]">{project.title}</h3>
                <p className="text-[#583d2b]/80 text-sm">{project.desc}</p>
                <motion.button
                  className="mt-4 text-[#e6a17a] hover:text-[#d98c63] font-medium transition-colors duration-200"
                  whileHover={{ x: 8 }} // More pronounced slide right on hover
                >
                  View Project &rarr;
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 bg-[#eee3cb] py-20 px-6 md:px-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#583d2b]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textInViewVariants}
        >
          What Our <span className="text-[#e6a17a] drop-shadow-md">Clients Say</span>
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.25 }} // Increased stagger
        >
          {[
            {
              quote: "Build Right Studios transformed our online presence. Their attention to detail and timely delivery exceeded all expectations!",
              author: "Jane Doe",
              company: "Tech Innovators Inc."
            },
            {
              quote: "The software solution they developed streamlined our operations perfectly. Fantastic after-service support too!",
              author: "John Smith",
              company: "Global Logistics Co."
            },
            {
              quote: "Their UI/UX design truly made our app stand out. User engagement has skyrocketed since launch.",
              author: "Emily White",
              company: "Creative Apps Ltd."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#eee3cb]/90 p-8 rounded-xl shadow-xl border border-[#583d2b]/30 flex flex-col items-center text-center group"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }} // Increased stagger
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(90, 61, 43, 0.15)" }} // Subtle lift and shadow
            >
              <p className="text-lg italic text-[#583d2b]/80 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-[#583d2b]">- {testimonial.author}</p>
              <p className="text-sm text-[#583d2b]/60">{testimonial.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action / Contact Section */}
      <section className="relative z-10 bg-[#eee3cb]/80 py-20 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-[#583d2b]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textInViewVariants}
        >
          Ready to Build <span className="text-[#e6a17a] drop-shadow-md">Something Amazing</span>?
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-[#583d2b]/80 mb-10 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textInViewVariants}
          transition={{ delay: 0.2 }}
        >
          Let's discuss your project and turn your vision into a digital reality. Get in touch with our expert team today!
        </motion.p>
        <motion.button
            className="relative overflow-hidden bg-[#e6a17a] text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e6a17a] focus:ring-opacity-75 group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(230, 161, 122, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            <span className="relative z-10">Contact Us Now</span>
            {/* Gradient overlay for hover effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#d98c63] to-[#e6a17a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            ></motion.span>
          </motion.button>
      </section>
    </div>
  );
}
