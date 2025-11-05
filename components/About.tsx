'use client';

import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('div')?.offsetWidth || 300;
      const gap = 16;
      carouselRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-8 md:mb-12">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">ABOUT LUXORT</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[40%_60%] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Quote (40%) */}
          <div className="flex flex-col justify-end lg:min-h-[600px] order-2 lg:order-1">
            {/* Quote Section */}
            <div className="bg-cream p-6 md:p-8 rounded-lg space-y-4 md:space-y-6">
              <p className="text-primary text-base md:text-lg leading-relaxed italic">
                "Luxort is where elegance meets comfort, creating unforgettable moments with every stay. Welcome to your perfect escape."
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage-light flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-primary text-sm md:text-base">Roberto Feliye</p>
                  <p className="text-xs md:text-sm text-gray-500">Founder of Luxort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Title, Description, Images (60%) */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary leading-tight">
              Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in Luxury Hospitality
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              At Luxort, we redefine the meaning of luxury hospitality, our hotel offers a seamless blend of classic sophistication and modern comfort, providing guests with an unparalleled experience.
            </p>

            {/* Images Carousel */}
            <div className="relative">
              <div ref={carouselRef} className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4">
                <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] bg-gray-300 h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg"></div>
                <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] bg-sage h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg"></div>
                <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] bg-gray-400 h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg"></div>
              </div>

              {/* Info Box Below First Card - Hidden on mobile */}
              <div className="hidden md:block bg-white p-4 md:p-6 rounded-b-lg w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] mt-0 border-t-0">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3 md:gap-4 flex-1">
                    <span className="text-sage text-sm font-medium">01</span>
                    <h3 className="text-lg md:text-xl font-serif text-primary">COMFY AREA</h3>
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

              {/* Mobile Navigation */}
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

            {/* Progress Dots */}
            <div className="flex items-center justify-start gap-2">
              <div className="w-6 md:w-8 h-1 bg-primary rounded"></div>
              <div className="w-6 md:w-8 h-1 bg-gray-300 rounded"></div>
              <div className="w-6 md:w-8 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
