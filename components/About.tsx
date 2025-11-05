'use client';

import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Label */}
        <div className="mb-12">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">ABOUT LUXORT</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
          {/* Left Side - Empty space at top, Quote at bottom (40%) */}
          <div className="flex flex-col justify-end min-h-[600px]">
            {/* Quote Section at bottom */}
            <div className="bg-cream p-8 rounded-lg space-y-6">
              <p className="text-primary text-lg leading-relaxed italic">
                "Luxort is where elegance meets comfort, creating unforgettable moments with every stay. Welcome to your perfect escape."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sage-light"></div>
                <div>
                  <p className="font-semibold text-primary">Roberto Feliye</p>
                  <p className="text-sm text-gray-500">Founder of Luxort</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Title, Description, Images and Navigation (60%) */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary leading-tight">
              Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in Luxury Hospitality
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              At Luxort, we redefine the meaning of luxury hospitality, our hotel offers a seamless blend of classic sophistication and modern comfort, providing guests with an unparalleled experience.
            </p>

            {/* Images Carousel with Fixed Info Box */}
            <div className="relative">
              <div ref={carouselRef} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
                <div className="flex-shrink-0 w-[500px] bg-gray-300 h-64 rounded-lg"></div>
                <div className="flex-shrink-0 w-[500px] bg-sage h-64 rounded-lg"></div>
                <div className="flex-shrink-0 w-[500px] bg-gray-400 h-64 rounded-lg"></div>
              </div>

              {/* Fixed Info Box Below First Card */}
              <div className="bg-white p-6 rounded-b-lg w-[500px] mt-0 border-t-0">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-sage text-sm font-medium">01</span>
                    <h3 className="text-xl font-serif text-primary">COMFY AREA</h3>
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

            {/* Progress Dots */}
            <div className="flex items-center justify-start gap-2">
              <div className="w-8 h-1 bg-primary rounded"></div>
              <div className="w-8 h-1 bg-gray-300 rounded"></div>
              <div className="w-8 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
