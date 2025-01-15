import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [currentSection, setCurrentSection] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const post = blogPosts.find(post => post.id === id);

  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / totalHeight) * 100;
      
      // Update reading progress
      setReadingProgress(progress);

      // Handle header visibility
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // Handle section tracking
      const sections = document.querySelectorAll('section[data-section]');
      const scrollPosition = currentScrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, lastScrollY]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="space-y-4 text-center">
          <div className="w-16 h-16 border-4 border-primary-orange border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  // Process content to remove duplicates and structure properly
  const processContent = (rawContent) => {
    // Split into paragraphs and remove duplicates
    const paragraphs = rawContent.split('\n\n');
    const uniqueParagraphs = [...new Set(paragraphs)];
    
    // Structure the content
    const sections = [];
    let currentSection = { title: '', content: [] };
    
    uniqueParagraphs.forEach(paragraph => {
      const trimmedPara = paragraph.trim();
      
      // Skip table of contents
      if (trimmedPara.startsWith('Table of Contents')) {
        return;
      }
      
      // Check if it's a heading (no period at end and relatively short)
      if (!trimmedPara.endsWith('.') && trimmedPara.length < 100) {
        // If we have content in the current section, save it
        if (currentSection.content.length > 0) {
          sections.push({ ...currentSection });
        }
        // Start a new section
        currentSection = { title: trimmedPara, content: [] };
      } else {
        // Add to current section's content
        currentSection.content.push(trimmedPara);
      }
    });
    
    // Add the last section if it has content
    if (currentSection.content.length > 0) {
      sections.push(currentSection);
    }

    // If no explicit sections were found, create a default one
    if (sections.length === 0) {
      sections.push({
        title: '',
        content: uniqueParagraphs.filter(p => !p.startsWith('Table of Contents'))
      });
    }
    
    return sections;
  };

  const contentSections = processContent(post.content);

  // Filter out related posts excluding current post
  const relatedPosts = blogPosts
    .filter(relatedPost => relatedPost.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>{post.title} - Markbiz Digital</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      {/* Back to Home Button */}
      <Link 
        href="/"
        className="fixed top-8 left-8 z-50 bg-white/80 backdrop-blur-sm shadow-lg px-6 py-3 rounded-full 
                 flex items-center space-x-2 text-gray-800 hover:text-primary-orange transition-all duration-300
                 hover:shadow-xl hover:bg-white group"
      >
        <svg 
          className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-medium">Back to Home</span>
      </Link>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-orange to-primary-yellow transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative">
          {/* Featured Image with Overlay */}
          <div className="relative h-[70vh] min-h-[600px]">
            <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.target.src = '/images/placeholder-image.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <span className="bg-primary-orange/20 text-white px-4 py-1 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                  <span className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-8">
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm text-white/80 mb-4">Scroll to read</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            {/* Table of Contents */}
            {contentSections.length > 1 && (
              <div className="bg-gray-50 rounded-2xl p-6 mb-12">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <div className="space-y-2">
                  {contentSections.map((section, index) => (
                    section.title && (
                      <div 
                        key={index}
                        className={`transition-colors duration-200 ${
                          currentSection === index ? 'text-primary-orange' : 'text-gray-600'
                        }`}
                      >
                        <a 
                          href={`#section-${index}`}
                          className="hover:text-primary-orange"
                        >
                          {section.title}
                        </a>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg prose-orange mx-auto">
              <div className="space-y-12">
                {contentSections.map((section, index) => (
                  <section 
                    key={index}
                    id={`section-${index}`}
                    data-section
                    className={`scroll-mt-24 transition-opacity duration-500 ${
                      currentSection === index ? 'opacity-100' : 'opacity-80'
                    }`}
                  >
                    {section.title && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        {section.title}
                      </h2>
                    )}
                    {section.content.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex} 
                        className="text-gray-600 leading-relaxed text-lg mb-6"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">More Articles You Might Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={index}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Related Post Image */}
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = '/images/placeholder-image.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <span className="text-sm font-medium text-primary-orange">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 mt-2 group-hover:text-primary-orange transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mt-3 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                        <span className="text-primary-orange group-hover:translate-x-2 transition-transform duration-300">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}