import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/images/about-marketing.jpg"
                alt="Digital Marketing Team"
                className="w-full h-full object-cover rounded-2xl shadow-lg transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-12 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Section Title */}
            <div>
              <span className="text-primary-orange font-semibold text-lg uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-primary-yellow">
                Digital Excellence
              </h2>
            </div>

            {/* Text Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                At MarkBiz, we live and breathe digital. With our team of experts, who go above and beyond to deliver, we make sure we establish your Digital footprint and form meaningful connections with your customers.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                MarkBiz's creation is a result of industry experts from Google, Amazon, and Facebook coming together for our passion for growth & digital marketing. With our direct experience with social media platforms and our data-driven strategies, we get you results.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our multicultural team comes with a zest to create something different, dare to explore the digital space, and take ownership of the brands we represent. Whether it's website development, lead generation, search engine optimization (SEO), Google Ads, Social media marketing, email marketing, mobile apps development, content creation, creative design, branding, photography, or videography – we are here to serve you with unmatched passion and expertise.
              </p>

              <p className="text-gray-600 leading-relaxed italic">
                So if you are looking for a dedicated team who will help take your digital marketing to the next level, we would love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}