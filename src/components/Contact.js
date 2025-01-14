import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    industryType: '',
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        industryType: '',
        message: ''
      });
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

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
            Markbiz LeadUp
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mt-3 mb-6 text-white">
            Generate & Convert <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-primary-yellow">Quality Leads</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Transform your business growth with our data-driven lead generation strategies
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16 space-x-8">
          {['Plans', 'Get Started'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveSection(index === 0 ? 'about' : 'form')}
              className={`group relative px-8 py-3 transition-all duration-300 ${
                (index === 0 ? 'about' : 'form') === activeSection
                  ? 'text-primary-orange'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10 text-lg font-medium">{tab}</span>
              <div className={`absolute inset-0 rounded-lg bg-white/5 transform transition-all duration-300 ${
                (index === 0 ? 'about' : 'form') === activeSection
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}></div>
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Subscription Plans */}
          <div className={`transition-all duration-500 transform ${
            activeSection === 'about'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 hidden'
          }`}>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Basic</h3>
                  <div className="text-primary-orange text-4xl font-bold mb-2">$499<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">Perfect for Small Businesses</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Up to 50 Qualified Leads/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Basic Lead Scoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Email Marketing Integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Monthly Performance Report
                  </li>
                </ul>
                <div className="text-center">
                  <button onClick={() => setActiveSection('form')} className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Elite Plan */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-orange/20 text-primary-orange text-sm py-1 px-3 rounded-full">Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Elite</h3>
                  <div className="text-primary-orange text-4xl font-bold mb-2">$999<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For Growing Companies</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Up to 150 Qualified Leads/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Advanced Lead Scoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    CRM Integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Weekly Performance Reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Lead Nurturing Campaigns
                  </li>
                </ul>
                <div className="text-center">
                  <button onClick={() => setActiveSection('form')} className="px-6 py-3 bg-primary-orange text-white rounded-lg hover:bg-primary-orange/90 transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Gold Plan */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Gold</h3>
                  <div className="text-primary-orange text-4xl font-bold mb-2">$1999<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">Enterprise Solutions</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Unlimited Qualified Leads
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    AI-Powered Lead Scoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Full Stack Integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Real-time Analytics Dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-primary-orange mr-2">✓</span>
                    Custom Solutions
                  </li>
                </ul>
                <div className="text-center">
                  <button onClick={() => setActiveSection('form')} className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-500 transform ${
            activeSection === 'form'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 hidden'
          }`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-orange transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-orange transition-all duration-300"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-orange transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-orange transition-all duration-300"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industryType" className="block text-sm font-medium text-gray-300 mb-2">
                    Industry Type
                  </label>
                  <input
                    type="text"
                    name="industryType"
                    id="industryType"
                    value={formData.industryType}
                    onChange={handleChange}
                    className="w-full bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-orange transition-all duration-300"
                    placeholder="Your industry type"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/10 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-orange transition-all duration-300"
                    placeholder="Tell us about your requirements and goals"
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-orange rounded-lg text-primary-orange hover:bg-primary-orange hover:text-white transition-all duration-300 transform hover:scale-105 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Start Growing</span>
                        <svg
                          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {submitStatus && (
                <div className={`mt-6 p-4 rounded-lg text-center backdrop-blur-sm ${
                  submitStatus === 'success'
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-red-500/10 text-red-400'
                }`}>
                  {submitStatus === 'success'
                    ? "Thank you! We'll contact you shortly to discuss your requirements."
                    : 'There was an error submitting your request. Please try again.'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

                    