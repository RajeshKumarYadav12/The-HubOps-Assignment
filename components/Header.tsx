'use client';

import { useState } from 'react';
import { Menu, X, Phone, Globe, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Main Navigation Bar - White Background */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors uppercase text-xs tracking-widest font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors uppercase text-xs tracking-widest font-medium">
                About
              </a>
              <a href="#events" className="text-gray-700 hover:text-primary transition-colors uppercase text-xs tracking-widest font-medium">
                Events
              </a>
            </nav>

            {/* Center - Logo */}
            <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/assets/images/Navbar Logo.png" 
                alt="Luxort Logo" 
                width="120" 
                height="40"
                className="object-contain h-8 md:h-10 w-auto"
              />
            </div>

            {/* Right Side - Language, Phone, Login */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-6">
              <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">EN</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div className="h-4 w-px bg-gray-300"></div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-xs font-medium">+123 7654 8970</span>
              </div>
              
              <button className="flex items-center gap-2 text-gray-800 hover:text-primary transition-colors uppercase text-xs tracking-widest font-semibold">
                Login
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-800 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors uppercase text-sm tracking-widest font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors uppercase text-sm tracking-widest font-medium">
                About
              </a>
              <a href="#events" className="text-gray-700 hover:text-primary transition-colors uppercase text-sm tracking-widest font-medium">
                Events
              </a>
              <div className="flex items-center gap-2 text-gray-700 mt-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">EN</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+123 7654 8970</span>
              </div>
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded hover:bg-opacity-90 transition-all text-sm font-semibold uppercase tracking-widest w-full">
                Login
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </nav>
          )}
        </div>
      </div>

      {/* Promotional Banner - Below Navbar */}
      <div className="bg-primary text-white text-xs py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-8 flex items-center gap-2">
            <span>✦</span>
            <span>5% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW</span>
          </span>
          <span className="mx-8 flex items-center gap-2">
            <span>✦</span>
            <span>EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW</span>
          </span>
          <span className="mx-8 flex items-center gap-2">
            <span>✦</span>
            <span>EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW</span>
          </span>
          {/* Duplicate for seamless loop */}
          <span className="mx-8 flex items-center gap-2">
            <span>✦</span>
            <span>5% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW</span>
          </span>
          <span className="mx-8 flex items-center gap-2">
            <span>✦</span>
            <span>EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW</span>
          </span>
          <span className="mx-8 flex items-center gap-2">
            <span>✦</span>
            <span>EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW</span>
          </span>
        </div>
      </div>
    </header>
  );
}
