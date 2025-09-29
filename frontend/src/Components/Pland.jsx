import { motion } from 'framer-motion';
import { Zap, Users, Clock, ArrowRight } from 'lucide-react';

// Framer Motion Variants for Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};


const Newlanding = () => {
  const highlightColor = 'text-red-600'; // Orange-Red highlight
  const bgColor = 'bg-stone-50'; // Light beige background

  return (
    <div className={`min-h-screen flex items-center justify-center ${bgColor} font-['Inter',_sans-serif] p-4`}>
      <div className="max-w-7xl mx-auto py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* === Left Panel: Hero Content === */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Statistic Badge */}
          <motion.div variants={itemVariants} className="text-sm font-semibold text-gray-800">
            <span className="inline-block mr-2 text-red-600">★</span> 250 Startups successfully boosted
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
              Build Right 
              <br />
              <motion.span 
                className={`${highlightColor}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Everytime
              </motion.span>
            </h1>
          </motion.div>

          {/* Features List */}
          <motion.div 
            className="flex flex-wrap gap-x-6 gap-y-4 text-gray-700 font-medium"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              {/* Note: Icons now imported directly from 'lucide-react' */}
              <Zap className={`w-5 h-5 ${highlightColor}`} />
              <span>Instant SEO boost</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <Users className={`w-5 h-5 ${highlightColor}`} />
              <span>Increase your audience</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <Clock className={`w-5 h-5 ${highlightColor}`} />
              <span>Save time</span>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <button className="flex items-center space-x-2 bg-gray-900 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-2xl hover:bg-gray-700 transition duration-300">
              <span>Get listed on 100+ directories</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* === Right Panel: Image Placeholder === */}
        {/* This new panel is now a large, centered box perfect for an image/screenshot */}
        <motion.div
          className="h-96 w-full flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Placeholder box for the product image/screenshot */}
          <div className="w-full h-full bg-gray-200 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border border-gray-300">
            <span className="text-xl text-gray-500 font-semibold p-4 text-center">
              Your Product Screenshot Here
            </span>
            {/* Replace the span above with an actual <img> tag when you have the image source */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newlanding;
