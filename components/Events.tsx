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
      const cardWidth = 550; // Fixed card width
      const gap = 24; // gap-6 = 24px
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
      
      // Update current index
      setCurrentIndex((prev) => (prev < events.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="events" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header with Text on Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Small text */}
          <div className="lg:text-left">
            <p className="text-sm text-sage uppercase tracking-widest border-l-2 border-sage pl-4">
              UNFORGETTABLE EVENTS AT LUXORT
            </p>
          </div>
          
          {/* Right side - Main content (50%) */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Celebrate Life's Finest Moments<br />
              in Style and Elegance
            </h2>
            <p className="text-sage text-lg max-w-xl">
              At Luxort, we create extraordinary settings for unforgettable events. Whether you're planning an intimate gathering or a grand celebration.
            </p>
          </div>
        </div>

        {/* Events Carousel - Horizontal Scroll with Fixed Info Box */}
        <div className="relative">
          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth mb-0"
          >
            {events.map((event, index) => (
              <div key={event.id} className="event-card flex-shrink-0 w-[550px]">
                {/* Image Box with Different Colors */}
                <div className={`${event.bgColor} h-72 rounded-lg overflow-hidden hover:opacity-90 transition-opacity`}></div>
              </div>
            ))}
          </div>
          
          {/* Fixed Info Box - Always shows first card info */}
          <div className="bg-white p-6 rounded-b-lg max-w-[550px]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <span className="text-sage text-sm font-medium">{events[currentIndex].id}</span>
                <h3 className="text-xl font-serif text-primary">{events[currentIndex].title}</h3>
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
