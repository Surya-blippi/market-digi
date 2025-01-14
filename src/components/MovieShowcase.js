import { useState, useEffect, useRef } from 'react';

export default function ReelShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setAutoplayEnabled(!prefersReducedMotion);

    const handleScroll = () => {
      const element = document.getElementById('reel-showcase');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const reels = [
    { video: "/videos/reels/reel-1.mp4" },
    { video: "/videos/reels/reel-2.mp4" },
    { video: "/videos/reels/reel-3.mp4" },
    { video: "/videos/reels/reel-4.mp4" },
    { video: "/videos/reels/reel-5.mp4" },
    { video: "/videos/reels/reel-6.mp4" },
    { video: "/videos/reels/reel-7.mp4" },
    { video: "/videos/reels/reel-8.mp4" },
    { video: "/videos/reels/reel-9.mp4" }
  ];

  const reelsRow1 = reels.slice(0, 5);
  const reelsRow2 = reels.slice(5);

  const ReelCard = ({ reel }) => {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);

    const handleVideoLoad = () => {
      setIsLoaded(true);
    };

    const handleInteraction = (e) => {
      e.preventDefault();
      if (!videoRef.current) return;

      if (!isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setShowPlayButton(false);
            })
            .catch(error => {
              console.log('Playback failed:', error);
              setShowPlayButton(true);
            });
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
        setShowPlayButton(true);
      }
    };

    return (
      <div 
        className="flex-shrink-0 mx-2 sm:mx-4 group"
        onClick={isMobile ? handleInteraction : undefined}
        onTouchStart={isMobile ? handleInteraction : undefined}
        onMouseEnter={!isMobile ? handleInteraction : undefined}
        onMouseLeave={!isMobile ? handleInteraction : undefined}
      >
        <div className="relative w-28 sm:w-32 md:w-48 aspect-[9/16] overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105">
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
          )}
          
          {/* Video */}
          <video
            ref={videoRef}
            className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            loop
            muted
            playsInline
            preload={isMobile ? "metadata" : "auto"}
            onLoadedData={handleVideoLoad}
            poster={`${reel.video.split('.')[0]}.jpg`}
          >
            <source src={reel.video} type="video/mp4" />
          </video>
          
          {/* Mobile Play Button */}
          {isMobile && showPlayButton && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-orange/80">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          
          {/* Hover Effect */}
          <div className="absolute inset-0 ring-1 ring-primary-orange/0 group-hover:ring-primary-orange/50 transition-all duration-300 rounded-lg"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      </div>
    );
  };

  return (
    <section id="reel-showcase" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-medium text-sm uppercase tracking-wider">Featured Work</span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Our Creative Reels
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mt-4"></div>
        </div>

        {/* First Row */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden py-4">
            <div className={`flex ${autoplayEnabled ? 'animate-scroll-right' : ''}`}>
              {[...reelsRow1, ...reelsRow1].map((reel, index) => (
                <ReelCard key={index} reel={reel} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden py-4">
            <div className={`flex ${autoplayEnabled ? 'animate-scroll-left' : ''}`}>
              {[...reelsRow2, ...reelsRow2].map((reel, index) => (
                <ReelCard key={index} reel={reel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}