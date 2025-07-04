import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ComingSoon() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const offsetX = mousePosition.x * 0.02;
  const offsetY = mousePosition.y * 0.02;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#0d0d1f] text-white"
    >
      {/* 🪐 Particle Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles 
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "#0d0d1f" },
            fpsLimit: 60,
            particles: {
              number: { value: 100, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: { value: 2, random: true },
              move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                outModes: { default: "out" },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: { repulse: { distance: 80, duration: 0.4 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* 🌐 Navbar */}
      <header className="absolute top-0 left-0 w-full px-8 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-15 h-15 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
            <img className="w-13 h-13 rounded-full" src=".\src\assets\images\logo.png" alt="Logo" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-wide">
              Build Right Studios
              <br />
              <span className="text-sm text-gray-400 -mt-1">&lt;Build Right Every Time /&gt;</span>
            </h1>
          </div>
        </div>
      </header>

      {/* 🌑 Coming Soon Content */}
      <div className="flex items-center justify-center h-full z-10 relative">
        <motion.div
          className="text-center space-y-10"
          initial="initial"
          animate="animate"
        >
          {/* Glowing Circle */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[28rem] h-52 bg-pink-500 rounded-b-full blur-3xl z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1, transition: { duration: 1.2 } }}
              style={{
                transform: `translate(${offsetX * 2}px, ${offsetY * 2}px)`,
              }}
            />
            <motion.div
              className="w-96 h-96 bg-[#0d0d1f] rounded-full relative z-10 border border-[#1e1e2f] flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 1.2 } }}
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
              }}
            >
              <motion.h1
                className="text-xl lg:text-4xl tracking-[0.4em] text-white font-light z-20 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 1 } }}
                whileHover={{ scale: 1.02 }}
              >
                C O M I N G   S O O N
              </motion.h1>
            </motion.div>
          </div>

          {/* 📧 Email Notify */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Get notified when it’s ready
            </p>
            <div className="flex items-center justify-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-[#1e1e2f] text-white placeholder-gray-500 rounded-full focus:outline-none w-64"
              />
              <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition">
                Notify Me
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
