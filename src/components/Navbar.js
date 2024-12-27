// src/components/Navbar.js
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['services', 'about', 'movie-showcase', 'contact']; // Changed 'projects' to 'movie-showcase'
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navItems mapping for Projects
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#movie-showcase' }, // Updated href
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 shadow-lg backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="group flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-yellow opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="/images/logo.png" 
                alt="Markbiz Digital"
                className="h-full w-full object-contain relative z-10"
              />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${
              isScrolled 
                ? 'text-primary-orange' 
                : 'text-white'
            } group-hover:transform group-hover:translate-x-1`}>
              Markbiz Digital
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary-orange' 
                    : 'text-white/90 hover:text-white'
                } ${activeSection === item.href.substring(1) ? 'text-primary-orange' : ''}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-orange transform -translate-x-1/2 transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? 'w-1/2' : 'group-hover:w-1/2'
                }`}></span>
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-4 px-6 py-2 rounded-full font-medium transform transition-all duration-300 
                hover:scale-105 hover:shadow-lg relative group overflow-hidden ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary-orange to-primary-yellow text-white'
                  : 'bg-white text-primary-orange hover:text-white'
                }`}
            >
              <span className="relative z-10">Get Started</span>
              <div className={`absolute inset-0 transform transition-transform duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-primary-yellow to-primary-orange'
                  : 'bg-primary-orange'
              } ${isScrolled ? 'translate-x-full group-hover:translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg transition-colors duration-300 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`block w-5 h-0.5 rounded-full transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 rounded-full transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 rounded-full transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="mx-4 my-2 bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5 backdrop-blur-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group block px-6 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <span className="w-0 h-0.5 bg-primary-orange mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  {item.name}
                </div>
              </a>
            ))}
            <div className="p-4 bg-gray-50">
              <a
                href="#contact"
                className="block w-full py-3 px-6 text-center rounded-full bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}