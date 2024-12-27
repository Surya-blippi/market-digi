// src/components/Contact.js
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Phone",
      content: "+1 (555) 123-4567",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      content: "contact@markbiz.com",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Location",
      content: "123 Business St, Suite 100\nSan Francisco, CA 94107",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-orange/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-yellow/5 rounded-full translate-x-32 translate-y-32"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-semibold text-lg uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-primary-yellow">
            Let's Talk About Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level?
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center py-3 px-8 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary-orange to-primary-yellow hover:from-primary-yellow hover:to-primary-orange transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      ) : null}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>

                {/* Status Messages */}
                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-lg text-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus === 'success' 
                      ? 'Message sent successfully!' 
                      : 'Failed to send message. Please try again.'}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="grid gap-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-primary-orange to-primary-yellow p-3 rounded-lg text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                        <p className="mt-1 text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mt-6">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="text-gray-400 hover:text-primary-orange transform hover:scale-110 transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        {/* Add social media SVG paths here */}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}