import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeFeatures, setActiveFeatures] = useState({});
  const [hoveredFeature, setHoveredFeature] = useState(null);

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFeature = (serviceIndex, featureIndex) => {
    const key = `${serviceIndex}-${featureIndex}`;
    setActiveFeatures(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const services = [
    {
      title: "Website Development",
      subtitle: "Create Your Perfect Digital Presence",
      description: "Website development services are a vital aspect of creating an online presence for your business. Our services involve the design, development, and maintenance of a website, including all the necessary functionality and features to make it a useful and user-friendly tool for your audience.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        {
          title: "Website Design and Layout",
          description: "Creating a visually appealing and responsive design that is easy to navigate and optimized for search engines.",
          icon: "🎨"
        },
        {
          title: "Content Creation",
          description: "Writing and editing the content for the website, including text, images, and videos, to communicate the message and value of the brand.",
          icon: "✍️"
        },
        {
          title: "E-commerce Integration",
          description: "Adding features like shopping carts, payment gateways, and inventory management for businesses that wish to sell products and services online.",
          icon: "🛒"
        },
        {
          title: "Web Application Development",
          description: "Creating dynamic, interactive web applications that can be used for various purposes like customer relationship management, data analysis, and more.",
          icon: "⚙️"
        },
        {
          title: "Search Engine Optimization (SEO)",
          description: "Optimizing the website for search engines so that it can be easily found by potential customers.",
          icon: "🔍"
        },
        {
          title: "Website Maintenance",
          description: "Regularly updating the website with new content, security patches, and other necessary updates to keep it running smoothly.",
          icon: "🔧"
        }
      ],
      conclusion: "Website development services require a team of experts with skills in website design, development, and optimization. Our team will work closely with you to understand your goals, your target audience and the purpose of your website to create a website that meets all your needs and exceed your expectations."
    },
    {
      title: "Branding Services",
      subtitle: "Build Your Unique Brand Identity",
      description: "Our Branding services are a crucial aspect of creating a strong and recognizable brand identity for your business. Our branding services involve development and implementation of a comprehensive branding strategy that includes various elements such as a brand name, logo, color scheme, messaging, and overall visual identity.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      features: [
        {
          title: "Brand Research",
          description: "Researching your target audience, competitors and industry trends to understand the market and the opportunities.",
          icon: "📊"
        },
        {
          title: "Brand Strategy",
          description: "Developing a strategic plan that defines your brand's positioning, messaging and tone of voice to effectively communicate the value proposition.",
          icon: "🎯"
        },
        {
          title: "Brand Identity Design",
          description: "Creating a visual representation of your brand, such as a logo, typography, color palette and imagery that reflects your brand's personality and values.",
          icon: "✨"
        },
        {
          title: "Brand Guidelines",
          description: "Developing a set of guidelines that outlines how your brand should be used across different touch points such as website, social media, packaging, and advertising.",
          icon: "📋"
        },
        {
          title: "Brand Activation",
          description: "Implementation of your brand across different touch points and creating experiences that connect with the target audience and bring your brand to life.",
          icon: "🚀"
        },
        {
          title: "Brand Monitoring and Management",
          description: "Monitoring and managing your brand's reputation and consistency across different platforms.",
          icon: "📈"
        }
      ],
      conclusion: "Branding services are an essential part of any business's growth and success, creating a strong and recognizable brand can help differentiate a business from its competitors and build trust and loyalty with the customers. We will work closely with you to understand your vision, goals, target audience and competitors to create a unique and effective brand that stands out in the market."
    },
    {
      title: "PR & Influencer Management",
      subtitle: "Build Your Brand's Presence & Reputation",
      description: "Public relations (PR) and influencer management are closely related practices that involve managing the public image and reputation of a brand or organization. PR is the practice of building and maintaining relationships between a company and its various stakeholders, such as customers, media, and the general public. This includes activities like press releases, media relations, and crisis management.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: [
        {
          title: "Media Relations",
          description: "Building and maintaining relationships with media outlets, creating press releases, and managing media communications to enhance brand visibility.",
          icon: "📰"
        },
        {
          title: "Crisis Management",
          description: "Developing and implementing strategies to handle and mitigate potential reputation risks and crisis situations effectively.",
          icon: "🛡️"
        },
        {
          title: "Influencer Outreach",
          description: "Identifying and partnering with relevant influencers who align with your brand values and can authentically connect with your target audience.",
          icon: "🤝"
        },
        {
          title: "Campaign Management",
          description: "Planning, executing, and monitoring influencer marketing campaigns to ensure maximum impact and ROI.",
          icon: "📈"
        },
        {
          title: "Content Strategy",
          description: "Developing content strategies that align with both PR objectives and influencer partnerships for consistent brand messaging.",
          icon: "📝"
        },
        {
          title: "Performance Analytics",
          description: "Monitoring and measuring the impact of PR and influencer campaigns to refine strategies and maximize return on investment.",
          icon: "📊"
        }
      ],
      conclusion: "Both PR and influencer management are important aspects of a comprehensive marketing strategy and can be used to increase brand awareness, drive sales, and establish a positive reputation. Successful PR and influencer management requires a deep understanding of the target audience, as well as the ability to identify and collaborate with the right influencers and media outlets to reach them."
    },
    {
      title: "Digital Marketing & Social Media",
      subtitle: "Amplify Your Online Presence",
      description: "Digital marketing and social media management are essential components for business growth in today's digital age. Our comprehensive digital marketing strategies combine data-driven insights with creative expertise to enhance your brand's online visibility, engage your target audience, and drive measurable results across all digital channels.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        {
          title: "Social Media Strategy",
          description: "Creating comprehensive social media strategies tailored to your brand voice, target audience, and business objectives across multiple platforms.",
          icon: "📱"
        },
        {
          title: "Content Creation & Management",
          description: "Developing engaging, platform-specific content including graphics, videos, and copy that resonates with your audience and drives engagement.",
          icon: "✍️"
        },
        {
          title: "Paid Advertising",
          description: "Managing targeted advertising campaigns across Google Ads, Facebook, Instagram, LinkedIn, and other platforms to maximize ROI.",
          icon: "💰"
        },
        {
          title: "Analytics & Reporting",
          description: "Providing detailed insights and regular reports on campaign performance, audience engagement, and ROI metrics.",
          icon: "📊"
        },
        {
          title: "Community Management",
          description: "Active engagement with your social media community, including responding to comments, messages, and building meaningful relationships with followers.",
          icon: "💬"
        },
        {
          title: "SEO & Content Marketing",
          description: "Implementing search engine optimization strategies and creating valuable content to improve organic visibility and drive targeted traffic.",
          icon: "🎯"
        }
      ],
      conclusion: "Effective digital marketing and social media management are crucial for establishing a strong online presence and connecting with your target audience. Our team combines strategic thinking with creative execution to deliver measurable results that help your business grow in the digital landscape."
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1)_0%,transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-orange to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-semibold text-lg uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-white">
            What We <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-primary-yellow">Offer</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap justify-start sm:justify-center mb-16 gap-4 pb-4 sm:pb-0 hide-scrollbar">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`flex-none sm:flex-initial px-6 sm:px-8 py-3 transition-all duration-300 rounded-lg whitespace-nowrap ${
                activeService === index
                  ? 'bg-primary-orange/10 text-primary-orange'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base sm:text-lg font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="space-y-16">
          {services.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className={`transition-all duration-500 transform ${
                activeService === serviceIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10 hidden'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                {/* Service Header */}
                <div className="p-6 sm:p-8 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110 text-primary-orange">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h3>
                      <p className="text-lg sm:text-xl mt-2 text-gray-300">{service.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-8 border-t border-white/10">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {service.features && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className={`group transition-all duration-300 ${
                              hoveredFeature === `${serviceIndex}-${featureIndex}`
                                ? 'scale-102 sm:scale-105'
                                : ''
                            }`}
                            onMouseEnter={() => setHoveredFeature(`${serviceIndex}-${featureIndex}`)}
                            onMouseLeave={() => setHoveredFeature(null)}
                          >
                            <div 
                              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:bg-white/10"
                              onClick={() => toggleFeature(serviceIndex, featureIndex)}
                            >
                              <div className="flex items-start space-x-4">
                                <span className="text-2xl transform transition-transform duration-300 group-hover:scale-125">
                                  {feature.icon}
                                </span>
                                <div className="flex-1">
                                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 flex items-center justify-between">
                                    {feature.title}
                                    <svg
                                      className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 ${
                                        activeFeatures[`${serviceIndex}-${featureIndex}`] ? 'rotate-180' : ''
                                      }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </h4>
                                  <div className={`overflow-hidden transition-all duration-300 ${
                                    activeFeatures[`${serviceIndex}-${featureIndex}`]
                                      ? 'max-h-96 opacity-100'
                                      : 'max-h-0 opacity-0'
                                  }`}>
                                    <p className="text-gray-300 leading-relaxed">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {service.conclusion && (
                        <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl">
                          <p className="text-gray-300 leading-relaxed italic">
                            "{service.conclusion}"
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom styles for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}