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
    { id: 7, src: "/images/logos/logo7.png", alt: "Company 7" },
    { id: 8, src: "/images/logos/logo8.png", alt: "Company 8" },
    { id: 9, src: "/images/logos/logo9.png", alt: "Company 9" },
    { id: 10, src: "/images/logos/logo10.png", alt: "Company 10" },
    { id: 11, src: "/images/logos/logo11.png", alt: "Company 11" },
    { id: 12, src: "/images/logos/logo12.png", alt: "Company 12" },
    { id: 13, src: "/images/logos/logo13.png", alt: "Company 13" },
    { id: 14, src: "/images/logos/logo14.png", alt: "Company 14" },
  ];

  return (
    <section id="logo-carousel" className="py-16 overflow-hidden bg-white">
      <div className="max-w-[100vw] px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-medium text-sm uppercase tracking-wider">Our Clients</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Trusted by Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mt-4"></div>
        </div>

        <div className="relative w-full">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Logo scroll container */}
          <div className="overflow-hidden logo-carousel-container w-full">
            <div className="flex logo-scroll whitespace-nowrap" style={{ width: 'max-content' }}>
              {/* First set of logos */}
              {logos.map((logo) => (
                <div
                  key={`${logo.id}-1`}
                  className="inline-flex items-center justify-center px-8"
                  style={{ width: '240px' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-32 sm:h-40 w-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplicated set of logos for seamless scrolling */}
              {logos.map((logo) => (
                <div
                  key={`${logo.id}-2`}
                  className="inline-flex items-center justify-center px-8"
                  style={{ width: '240px' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-32 sm:h-40 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-600 text-sm">
            Join our network of <span className="font-semibold text-primary-orange">50+</span> satisfied clients
          </p>
        </div>
      </div>

      <style jsx>{`
        .logo-scroll {
          animation: scroll 30s linear infinite;
          display: inline-flex;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-240px * 14)); /* Width of one set of logos */
          }
        }
        
        @media (max-width: 768px) {
          .logo-scroll {
            animation: scroll 15s linear infinite;
          }
        }

        .logo-carousel-container:hover .logo-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}