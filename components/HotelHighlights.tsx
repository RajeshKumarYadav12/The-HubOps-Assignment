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
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-sage uppercase tracking-widest mb-2">HOTEL HIGHLIGHTS</p>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Experience the Extraordinary
          </h2>
          <p className="text-sage max-w-2xl mx-auto">
            Experience elegance and comfort in our Luxury Rooms & Suites, where modern amenities and timeless design create the perfect retreat.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all rounded ${
                activeTab === tab.id
                  ? 'bg-white text-primary'
                  : 'bg-transparent text-gray-600 hover:bg-white hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-sage h-96 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
