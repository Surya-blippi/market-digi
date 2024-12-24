// src/components/LogoCarousel.js
export default function LogoCarousel() {
    // Add more logos as needed
    const logos = [
      { id: 1, src: "/images/logos/logo1.png", alt: "Company 1" },
      { id: 2, src: "/images/logos/logo2.png", alt: "Company 2" },
      { id: 3, src: "/images/logos/logo3.png", alt: "Company 3" },
      { id: 4, src: "/images/logos/logo4.png", alt: "Company 4" },
      { id: 5, src: "/images/logos/logo5.png", alt: "Company 5" },
      { id: 6, src: "/images/logos/logo6.png", alt: "Company 6" },
    ];
  
    return (
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-600 mb-8">
            Trusted by Industry Leaders
          </h2>
          
          <div className="relative">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Logo scroll container */}
            <div className="logo-carousel-container overflow-hidden">
              <div className="flex logo-carousel-track">
                {/* First set of logos */}
                {logos.map((logo) => (
                  <div
                    key={logo.id}
                    className="flex-shrink-0 w-[200px] mx-8 flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set of logos for seamless loop */}
                {logos.map((logo) => (
                  <div
                    key={`${logo.id}-duplicate`}
                    className="flex-shrink-0 w-[200px] mx-8 flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Add this to your globals.css
  /*
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .logo-carousel-track {
    animation: scroll 30s linear infinite;
  }
  
  .logo-carousel-track:hover {
    animation-play-state: paused;
  }
  
  .logo-carousel-container {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 20%,
      black 80%,
      transparent
    );
  }
  */