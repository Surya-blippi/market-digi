// src/components/Hero.js
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Transform Your",
      subtitle: "Digital Presence",
      description: "Elevate your brand with cutting-edge digital marketing strategies"
    },
    {
      title: "Innovate Your",
      subtitle: "Marketing Strategy",
      description: "Data-driven solutions for exceptional business growth"
    },
    {
      title: "Amplify Your",
      subtitle: "Online Impact",
      description: "Reach your target audience with precision and creativity"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
      } else {
        video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      }
    }

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => setIsVideoLoaded(true));
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-black to-primary-yellow animate-gradient-xy"></div>
        )}
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/video/marketing-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        {/* Navigation Dots */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-2 hidden lg:block">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === index 
                  ? 'bg-primary-orange h-8' 
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-start h-full max-w-4xl mx-auto lg:mx-0 lg:ml-24">
          <div className="space-y-8">
            {/* Heading */}
            <h1 className="relative text-left">
              <div className="overflow-hidden">
                <span className={`block text-4xl sm:text-5xl md:text-6xl font-bold text-white/90 transition-transform duration-500 ${
                  isVideoLoaded ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  {slides[activeSlide].title}
                </span>
              </div>
              <div className="overflow-hidden mt-2">
                <span className={`block text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary-orange to-primary-yellow bg-clip-text text-transparent transition-transform duration-500 delay-100 ${
                  isVideoLoaded ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  {slides[activeSlide].subtitle}
                </span>
              </div>
            </h1>

            {/* Description */}
            <p className={`text-xl md:text-2xl text-white/80 max-w-2xl transition-all duration-500 delay-200 ${
              isVideoLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              {slides[activeSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 transition-all duration-500 delay-300 ${
              isVideoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-primary-orange overflow-hidden rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-orange/20"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#services"
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-500 ${
          isVideoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-white/50 hover:text-white/80 transition-colors duration-300 cursor-pointer flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to discover</span>
            <div className="w-6 h-10 border-2 border-current rounded-full p-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full animate-scroll-hint mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add to globals.css
/*
@keyframes scroll-hint {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(20px); }
}

.animate-scroll-hint {
  animation: scroll-hint 2s ease-in-out infinite;
}

@keyframes gradient-xy {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}

.animate-gradient-xy {
  animation: gradient-xy 15s ease infinite;
  background-size: 400% 400%;
}
*/