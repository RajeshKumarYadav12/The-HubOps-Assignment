'use client';

import { ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const events = [
  {
    id: '01',
    title: 'WEDDINGS',
    description: 'Create magical memories in our elegant event spaces.',
    bgColor: 'bg-[#C4C4C4]', // Light gray
  },
  {
    id: '02',
    title: 'CORPORATE',
    description: 'Host successful business events in luxury.',
    bgColor: 'bg-sage', // Sage green
  },
  {
    id: '03',
    title: 'CELEBRATIONS',
    description: 'Celebrate special moments in style.',
    bgColor: 'bg-[#6B7A72]', // Dark sage
  },
  {
    id: '04',
    title: 'PRIVATE EVENTS',
    description: 'Exclusive settings for your special occasions.',
    bgColor: 'bg-[#A0AEA8]', // Medium sage
  },
];

export default function Events() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.event-card')?.clientWidth || 300;
      const gap = 16;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
      
      setCurrentIndex((prev) => (prev < events.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="events" className="py-12 md:py-16 lg:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          {/* Left side - Small text */}
          <div className="lg:text-left">
            <p className="text-xs md:text-sm text-sage uppercase tracking-widest border-l-2 border-sage pl-3 md:pl-4">
              UNFORGETTABLE EVENTS AT LUXORT
            </p>
          </div>
          
          {/* Right side - Main content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4 md:mb-6 leading-tight">
              Celebrate Life's Finest Moments<br className="hidden sm:block" />
              in Style and Elegance
            </h2>
            <p className="text-sage text-sm md:text-base lg:text-lg max-w-xl">
              At Luxort, we create extraordinary settings for unforgettable events. Whether you're planning an intimate gathering or a grand celebration.
            </p>
          </div>
        </div>

        {/* Events Carousel */}
        <div className="relative">
          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth mb-0 pb-4"
          >
            {events.map((event) => (
              <div key={event.id} className="event-card flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px]">
                {/* Image Box with Different Colors */}
                <div className={`${event.bgColor} h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden hover:opacity-90 transition-opacity`}></div>
              </div>
            ))}
          </div>
          
          {/* Info Box - Hidden on mobile */}
          <div className="hidden md:block bg-white p-4 md:p-6 rounded-b-lg max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-3 md:gap-4 flex-1">
                <span className="text-sage text-sm font-medium">{events[currentIndex].id}</span>
                <h3 className="text-lg md:text-xl font-serif text-primary">{events[currentIndex].title}</h3>
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
      </div>
    </section>
  );
}
