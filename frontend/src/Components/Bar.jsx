import React from 'react';

const MarqueeBar = () => {
  return (
    <>
      {/* Custom CSS for the marquee animation */}
      <style>
        {`
          /* Marquee-like scrolling animation for the footer items */
          /* Scrolls half the width of the duplicated content for seamless loop */
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          /* Tailwind animation utility class for marquee */
          .animate-marquee { animation: marquee 25s linear infinite; }
        `}
      </style>

      {/* Footer Navigation Bar with Marquee Effect */}
      <footer className="mt-16 relative z-10 w-full max-w-7xl">
        {/* Outer container for the marquee, defining its visible area */}
        <div className="relative w-full overflow-hidden h-12 bg-gray-800 rounded-lg shadow-inner flex items-center">
          {/* Inner container for the scrolling content. It's duplicated multiple times to ensure seamless loop. */}
          {/* The total width of this container will be 200% of the single set of content. */}
          <div className="flex flex-nowrap animate-marquee whitespace-nowrap w-[200%]">
            {/* Duplicated content for smooth continuous scrolling */}
            {[...Array(2)].map((_, copyIndex) => (
              <nav key={copyIndex} className="flex flex-row flex-shrink-0 justify-around w-1/2 text-gray-400 text-lg font-medium">
                {/* Mapping through navigation items to create links */}
                {['Website Design', 'Dashboard', 'NFT ART', 'Development', 'Strategy', 'Motion Design'].map((item, index) => (
                  <div key={index} className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200 px-4">
                    {/* Orange plus icon with a subtle rotate on hover */}
                    <span className="text-orange-500 mr-2 transform group-hover:rotate-45 transition-transform duration-200">+</span>
                    <span>{item}</span>
                  </div>
                ))}
              </nav>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default MarqueeBar;
