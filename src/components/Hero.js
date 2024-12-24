// src/components/Hero.js
export default function Hero() {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster="/images/poster-image.jpg"
          >
            <source src="/video/marketing-bg.mp4" type="video/mp4" />
          </video>
          {/* Enhanced Gradient Overlay - slightly darker for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/90 to-primary-yellow/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div> {/* Additional overlay for text contrast */}
        </div>
  
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4"> {/* Grouped text content */}
              <h1 className="animate-slide-down text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                Transform Your 
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                  Digital Presence
                </span>
              </h1>
              
              <p className="animate-fade-in text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Elevate your brand with cutting-edge digital marketing strategies
              </p>
            </div>
  
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up pt-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-primary-orange rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  Get Started →
                </span>
              </a>
              <a
                href="#services"
                className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
              >
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  Our Services
                </span>
              </a>
            </div>
          </div>
  
          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <span className="block text-white/80 text-sm mb-2">Scroll to explore</span>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }