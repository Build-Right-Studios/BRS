import React from 'react';

// The MarqueeBar component handles the continuous horizontal scrolling effect
const MarqueeBar = () => {
  return (
    <>
      {/* Custom CSS for the marquee animation. This block is necessary 
          because Tailwind doesn't provide the keyframes for this specific effect. */}
      <style>
        {`
          /* Keyframes for the scrolling animation. It translates the content
             by 50% of its total width (which is 200% of the viewport width) 
             to create a seamless, infinite loop. */
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          /* Applies the keyframes to the scrolling container */
          .animate-marquee { 
            animation: marquee 25s linear infinite; 
          }
        `}
      </style>

      {/* Footer Navigation Bar with Marquee Effect - FULL WIDTH, NO MARGINS */}
      <footer className="relative z-10 w-full">
        {/* Outer container: Sets the height, background, and hides overflow */}
        <div className="relative w-full overflow-hidden h-12 bg-gray-900 shadow-2xl flex items-center">
          
          {/* Inner container: Applies the animation and ensures content stays in a single row */}
          {/* w-[200%] is critical because the content is duplicated twice (total of 2 sets) */}
          <div className="flex flex-nowrap animate-marquee whitespace-nowrap w-[200%]">
            
            {/* Duplicated content for smooth continuous scrolling */}
            {[...Array(2)].map((_, copyIndex) => (
              // Each copy takes 50% of the w-[200%] container width, making it 100% of the viewport
              <nav key={copyIndex} className="flex flex-row flex-shrink-0 justify-around min-w-[50%] text-gray-400 text-lg font-medium">
                {['Website Design', 'Dashboard', 'NFT ART', 'Development', 'Strategy', 'Motion Design'].map((item, index) => (
                  <div key={index} className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200 px-8">
                    {/* Highlighted plus icon */}
                    <span className="text-red-600 mr-2 transform group-hover:rotate-45 transition-transform duration-200">+</span>
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
