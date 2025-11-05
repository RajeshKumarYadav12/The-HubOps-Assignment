import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A3A2A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/assets/images/Logo.png" 
                alt="Luxort Logo" 
                width={120} 
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sage-light max-w-md">
              Luxort combines timeless elegance with modern luxury, offering unparalleled comfort and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sage-light hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-sage-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#events" className="text-sage-light hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-sage-light hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-sage-light hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="text-sage-light hover:text-white transition-colors">
                <span className="sr-only">X (Twitter)</span>
                X
              </a>
              <a href="#" className="text-sage-light hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-sage-light hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sage-light text-sm">© 2025 Luxort. All Right Reserved</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-sage-light hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-sage-light hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
