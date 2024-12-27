// src/components/Footer.js
export default function Footer() {
    const socialLinks = [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        ),
      },
    ];
  
    return (
      <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="col-span-1 lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-orange to-primary-yellow rounded-lg"></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-yellow bg-clip-text text-transparent">
                  Markbiz Digital
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming businesses through innovative digital marketing solutions. 
                Your success is our priority.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow"></span>
              </h3>
              <ul className="space-y-3">
                {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-orange mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow"></span>
              </h3>
              <ul className="space-y-3">
                {['Digital Marketing', 'Social Media', 'SEO', 'Content Creation'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-white flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-orange mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Markbiz Digital. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }