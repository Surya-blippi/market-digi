// src/components/Testimonials.js
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Markbiz Digital transformed our online presence. Our engagement has increased by 200% since working with them.",
      image: "/images/testimonial1.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The ROI we've seen from their digital marketing campaigns has been exceptional. Highly recommended!",
      image: "/images/testimonial2.jpg",
      rating: 5
    },
    {
      name: "Emily Brown",
      role: "Founder, EcoLife",
      content: "Their team's creativity and attention to detail have helped us stand out in a crowded market.",
      image: "/images/testimonial3.jpg",
      rating: 5
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-primary-yellow"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="text-primary-orange font-semibold text-lg">TESTIMONIALS</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto"></div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 200}ms`,
                opacity: 0,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-orange/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-orange text-white p-1 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 6.59V1h-4.59l-3-3-3 3H3v5.59l-3 3 3 3V18h4.59l3 3 3-3H18v-4.59l3-3-3-3zM15 15h-3.59l-3 3-3-3H3v-3.59l-3-3 3-3V3h3.59l3-3 3 3H15v3.59l3 3-3 3V15z"/>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-orange transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute -top-6 -left-2 w-12 h-12 text-primary-orange/10 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-600 italic relative z-10">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-orange/20"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-6 bg-primary-orange' 
                    : 'bg-gray-300 hover:bg-primary-orange/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}