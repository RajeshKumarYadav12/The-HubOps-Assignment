'use client';

import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('div')?.offsetWidth || 300;
      const gap = 16; // gap-4
      carouselRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative bg-cream pt-32 md:pt-40 lg:pt-44 pb-8 md:pb-12 lg:pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Content - Single Row with 60-40 split */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-start mb-8 md:mb-12 pt-4 md:pt-8">
          {/* Left Side - Title (60%) */}
          <div className="w-full lg:w-[60%]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-serif text-primary leading-[1.1]">
              WELCOME TO
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-serif text-primary leading-[1.1]">
              LUXORT
            </h1>
          </div>

          {/* Right Side - Description and Buttons (40%) */}
          <div className="w-full lg:w-[40%] space-y-4 md:space-y-6 pt-0 lg:pt-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Discover a world where luxury and comfort blend seamlessly, 
              offering unforgettable experiences in a setting of elegance and 
              tranquility.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-3.5 rounded hover:bg-opacity-90 transition-all font-medium uppercase text-xs md:text-sm tracking-wider">
                BOOK YOUR STAY
              </button>
              <button className="bg-white text-primary px-6 md:px-8 py-3 md:py-3.5 rounded hover:bg-primary hover:text-white transition-all font-medium uppercase text-xs md:text-sm tracking-wider border border-gray-200">
                EXPLORE OUR SUITES
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-8 md:mt-12 lg:mt-16 relative">
          <div ref={carouselRef} className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4">
            {/* Cards - Responsive widths */}
            <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] bg-sage-dark h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg"></div>
            <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] bg-gray-300 h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg"></div>
            <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] bg-sage h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg"></div>
            <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] bg-sage-dark h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg"></div>
          </div>

          {/* Fixed Info Box Below Cards - Hidden on mobile, shown from md */}
          <div className="hidden md:block bg-white p-4 md:p-6 rounded-b-lg w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] mt-0 md:ml-[calc(280px+1rem)] lg:ml-[524px]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-3 md:gap-4 flex-1">
                <span className="text-sage text-sm font-medium">01</span>
                <h3 className="text-lg md:text-xl font-serif text-primary">GREEN AREA</h3>
              </div>
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 text-sage hover:text-primary transition-colors text-xs md:text-sm flex-shrink-0"
              >
                <span className="uppercase tracking-wider">NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Centered at bottom */}
          <div className="md:hidden flex justify-center mt-6">
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 bg-white text-sage hover:text-primary transition-colors px-6 py-3 rounded-lg shadow-md"
            >
              <span className="uppercase tracking-wider text-sm font-medium">NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
