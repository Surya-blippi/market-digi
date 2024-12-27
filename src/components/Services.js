// src/components/Services.js
import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive results and ROI through data-driven approaches",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      stats: "200% Growth",
      gradient: "from-primary-orange to-primary-yellow",
    },
    {
      title: "Social Media",
      description: "Engaging content that builds your brand presence and connects with your audience",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      stats: "50K+ Reach",
      gradient: "from-primary-yellow to-primary-orange",
    },
    {
      title: "SEO Optimization",
      description: "Improve your visibility in search results with proven optimization techniques",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      stats: "Top 3 Ranking",
      gradient: "from-primary-orange to-primary-yellow",
    },
    {
      title: "Content Creation",
      description: "Compelling content that tells your story and engages your target audience",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      stats: "1M+ Views",
      gradient: "from-primary-yellow to-primary-orange",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-orange to-primary-yellow"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-semibold text-lg uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-primary-yellow">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to elevate your business
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`relative p-8 h-full transform group-hover:scale-[0.98] transition-all duration-300`}>
                  {/* Service Icon */}
                  <div className={`text-primary-orange mb-6 transform group-hover:scale-110 transition-all duration-300`}>
                    {service.icon}
                  </div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-orange to-primary-yellow text-white text-sm font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                    {service.stats}
                  </div>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-orange font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}