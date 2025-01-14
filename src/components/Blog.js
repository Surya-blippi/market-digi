import { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('blog');
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
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-orange/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-yellow/5 rounded-full translate-x-16 translate-y-16"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary-orange font-semibold text-lg uppercase tracking-wider">Our Blog</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-primary-yellow">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in digital marketing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mt-6"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((blog, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Link href={`/blog/${blog.id}`}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer p-8 border border-gray-100 hover:border-primary-orange/20">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary-orange px-3 py-1 bg-primary-orange/10 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                  </div>

                  {/* Title and Excerpt */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-orange transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="inline-flex items-center text-primary-orange font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read Article
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-orange/5 to-primary-yellow/5 rounded-bl-full -z-10 transition-all duration-300 group-hover:scale-150"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}