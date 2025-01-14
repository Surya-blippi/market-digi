import { useState, useEffect, useRef } from 'react';

export default function ReelShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Split reels into two rows
  const reelsRow1 = reels.slice(0, 5);
  const reelsRow2 = reels.slice(5);

  const ReelCard = ({ reel }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };

    return (
      <div 
        className="flex-shrink-0 mx-4 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-48 aspect-[9/16] overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105">
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={reel.video} type="video/mp4" />
          </video>
          
          {/* Hover Effect - Simple Glow */}
          <div className="absolute inset-0 ring-2 ring-primary-orange/0 group-hover:ring-primary-orange/50 transition-all duration-300 rounded-lg"></div>
          
          {/* Subtle Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      </div>
    );
  };

  return (
    <section id="reel-showcase" className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-medium text-sm uppercase tracking-wider">Featured Work</span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Our Creative Reels
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mt-4"></div>
        </div>

        {/* First Row - Left to Right */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden py-4">
            <div className="animate-scroll-right flex">
              {[...reelsRow1, ...reelsRow1].map((reel, index) => (
                <ReelCard key={index} reel={reel} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden py-4">
            <div className="animate-scroll-left flex">
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