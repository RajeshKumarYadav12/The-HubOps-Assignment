'use client';

import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = 500; // Fixed card width
      const gap = 24; // gap-6 = 24px
      carouselRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative bg-cream pt-44 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Content - Single Row with 60-40 split */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12 pt-8">
          {/* Left Side - Title (60%) */}
          <div className="w-full lg:w-[60%]">
            <h1 className="text-6xl md:text-7xl lg:text-[100px] font-serif text-primary leading-[1.1]">
              WELCOME TO
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-[100px] font-serif text-primary leading-[1.1]">
              LUXORT
            </h1>
          </div>

          {/* Right Side - Description and Buttons (40%) */}
          <div className="w-full lg:w-[40%] space-y-6 pt-0 lg:pt-4">
            <p className="text-gray-600 text-base leading-relaxed">
              Discover a world where luxury and comfort blend seamlessly, 
              offering unforgettable experiences in a setting of elegance and 
              tranquility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-3.5 rounded hover:bg-primary-light transition-colors font-medium uppercase text-sm tracking-wider">
                BOOK YOUR STAY
              </button>
              <button className="bg-white text-primary px-8 py-3.5 rounded hover:bg-primary hover:text-white transition-colors font-medium uppercase text-sm tracking-wider border border-gray-200">
                EXPLORE OUR SUITES
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-16 relative">
          <div ref={carouselRef} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
            {/* First card - Dark sage */}
            <div className="flex-shrink-0 w-[500px] bg-sage-dark h-64 rounded-lg"></div>
            
            {/* Second card - Light gray */}
            <div className="flex-shrink-0 w-[500px] bg-gray-300 h-64 rounded-lg"></div>
            
            {/* Third card - Medium sage */}
            <div className="flex-shrink-0 w-[500px] bg-sage h-64 rounded-lg"></div>
            
            {/* Fourth card - Dark sage */}
            <div className="flex-shrink-0 w-[500px] bg-sage-dark h-64 rounded-lg"></div>
          </div>

          {/* Fixed Info Box Below Second Card - Aligned with middle card */}
          <div className="bg-white p-6 rounded-b-lg w-[500px] mt-0 ml-[524px]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <span className="text-sage text-sm font-medium">01</span>
                <h3 className="text-xl font-serif text-primary">GREEN AREA</h3>
              </div>
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 text-sage hover:text-primary transition-colors text-sm flex-shrink-0"
              >
                <span className="uppercase tracking-wider">NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
