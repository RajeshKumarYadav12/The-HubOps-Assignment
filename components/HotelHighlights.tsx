'use client';

import { useState } from 'react';

const tabs = [
  { id: 'swimming', label: 'SWIMMING POOL' },
  { id: 'dining', label: 'FINE DINING RESTAURANTS' },
  { id: 'rooms', label: 'LUXURY ROOMS & SUITES' },
  { id: 'spa', label: 'SPA & WELLNESS' },
];

export default function HotelHighlights() {
  const [activeTab, setActiveTab] = useState('swimming');

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm text-sage uppercase tracking-widest mb-2">HOTEL HIGHLIGHTS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
            Experience the Extraordinary
          </h2>
          <p className="text-sage text-sm md:text-base max-w-2xl mx-auto px-4">
            Experience elegance and comfort in our Luxury Rooms & Suites, where modern amenities and timeless design create the perfect retreat.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm uppercase tracking-wider transition-all rounded ${
                activeTab === tab.id
                  ? 'bg-white text-primary shadow-md'
                  : 'bg-transparent text-gray-600 hover:bg-white hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-sage h-64 sm:h-80 md:h-96 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
