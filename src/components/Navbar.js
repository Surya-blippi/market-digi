// src/components/Navbar.js
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <img 
                src="/images/logo.png" 
                alt="Markbiz Digital"
                className="h-full w-full object-contain"
              />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-primary-orange' : 'text-white'
            }`}>
              Markbiz Digital
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {['Services', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary-orange hover:bg-gray-100' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 
                ${isScrolled
                  ? 'bg-gradient-to-r from-primary-orange to-primary-yellow text-white hover:shadow-lg hover:scale-105'
                  : 'bg-white text-primary-orange hover:bg-primary-yellow hover:text-white hover:shadow-lg'
                }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-0 w-full h-0.5 transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`absolute left-0 top-2.5 w-full h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 bottom-0 w-full h-0.5 transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="mx-4 my-2 bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
            {['Services', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary-orange transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="p-4 bg-gray-50">
              <a
                href="#contact"
                className="block w-full py-3 px-6 text-center rounded-full bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-medium hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}