// src/components/LogoCarousel.js
import { useState, useEffect } from 'react';

export default function LogoCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('logo-carousel');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logos = [
    { id: 1, src: "/images/logos/logo1.png", alt: "Company 1" },
    { id: 2, src: "/images/logos/logo2.png", alt: "Company 2" },
    { id: 3, src: "/images/logos/logo3.png", alt: "Company 3" },
    { id: 4, src: "/images/logos/logo4.png", alt: "Company 4" },
    { id: 5, src: "/images/logos/logo5.png", alt: "Company 5" },
    { id: 6, src: "/images/logos/logo6.png", alt: "Company 6" },
  ];

  return (
    <section id="logo-carousel" className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-medium text-sm uppercase tracking-wider">Our Partners</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Trusted by Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mt-4"></div>
        </div>

        <div className="relative px-4 py-8">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 via-white/80 to-transparent z-10"></div>

          {/* Logo scroll container */}
          <div className="logo-carousel-container overflow-hidden">
            <div className={`flex ${isMobile ? 'animate-scroll-mobile' : 'animate-scroll-desktop'}`}>
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 w-[150px] md:w-[200px] mx-4 md:mx-8 px-4 md:px-6 py-4"
                >
                  <div className="relative bg-white rounded-xl shadow-sm p-4 md:p-6">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 md:h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-600 text-sm">
            Join our network of <span className="font-semibold text-primary-orange">500+</span> satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}

// Add to globals.css
/*
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-desktop {
  animation: scroll 30s linear infinite;
}

.animate-scroll-mobile {
  animation: scroll 15s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-scroll-desktop,
  .animate-scroll-mobile {
    animation: none;
  }
}
*/