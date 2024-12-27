// src/components/About.js
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0,
    clients: 0
  });

  const stats = [
    { 
      title: "Projects Completed",
      value: 500,
      symbol: "+",
      key: "projects",
      icon: (
        <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Client Satisfaction",
      value: 98,
      symbol: "%",
      key: "satisfaction",
      icon: (
        <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Years Experience",
      value: 10,
      symbol: "+",
      key: "experience",
      icon: (
        <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Active Clients",
      value: 250,
      symbol: "+",
      key: "clients",
      icon: (
        <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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

  useEffect(() => {
    if (isVisible) {
      stats.forEach(({ key, value }) => {
        let startValue = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        const startTime = Date.now();

        const updateValue = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;

          if (elapsed < duration) {
            startValue = Math.min(startValue + increment, value);
            setAnimatedStats(prev => ({
              ...prev,
              [key]: Math.floor(startValue)
            }));
            requestAnimationFrame(updateValue);
          } else {
            setAnimatedStats(prev => ({
              ...prev,
              [key]: value
            }));
          }
        };

        requestAnimationFrame(updateValue);
      });
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-orange/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-yellow/5 rounded-full translate-x-16 translate-y-16"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image Section */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-yellow opacity-20 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/about-marketing.jpg"
                alt="Digital Marketing Team"
                className="relative rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={`mt-10 lg:mt-0 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <span className="text-primary-orange font-semibold text-lg uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-primary-yellow">
              We Drive Digital Growth
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Markbiz Digital, we're passionate about helping businesses thrive in the digital age. 
              Our team of experts combines creativity with data-driven strategies to deliver exceptional results.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.key}
                  className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {stat.icon}
                    <div className="ml-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-orange to-primary-yellow bg-clip-text text-transparent">
                        {animatedStats[stat.key]}{stat.symbol}
                      </h3>
                      <p className="text-gray-600 font-medium">{stat.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}