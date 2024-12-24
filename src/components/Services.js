// src/components/Services.js
import { useEffect, useRef } from 'react'

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive results and ROI",
      icon: "📈",
      gradient: "from-primary-orange to-primary-yellow"
    },
    {
      title: "Social Media Management",
      description: "Engaging content that builds your brand presence",
      icon: "🌐",
      gradient: "from-primary-yellow to-primary-orange"
    },
    {
      title: "SEO Optimization",
      description: "Improve your visibility in search results",
      icon: "🎯",
      gradient: "from-primary-orange to-primary-yellow"
    },
    {
      title: "Content Creation",
      description: "Compelling content that tells your story",
      icon: "✍️",
      gradient: "from-primary-yellow to-primary-orange"
    }
  ]

  return (
    <section id="services" className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive marketing solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-6">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}