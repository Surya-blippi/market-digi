import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [currentSection, setCurrentSection] = useState(0);

  const post = blogPosts.find(post => post.id === id);

  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Split content into sections
  const contentSections = post.content.split('\n\n');

  return (
    <>
      <Head>
        <title>{post.title} - Markbiz Digital</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Navbar />

      {/* Back Button */}
      <div className="fixed top-24 left-8 z-50">
        <Link 
          href="/#blog"
          className="group flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <svg 
            className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Articles</span>
        </Link>
      </div>

      <main className="min-h-screen bg-gray-50">
        {/* Sticky Side Navigation */}
        <div className="fixed top-0 left-0 w-24 h-screen hidden lg:block">
          <div className="h-full flex flex-col items-center justify-center space-y-4">
            <div className="h-48 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-sm font-medium text-gray-400 rotate-90 origin-center whitespace-nowrap">
              {post.category}
            </div>
            <div className="h-48 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:ml-24">
          {/* Header Section */}
          <div className="relative min-h-screen flex items-center bg-white">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,128,0,0.05)_0%,transparent_50%)]"></div>
            </div>
            
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-primary-orange font-medium uppercase tracking-wider">
                    {post.readTime}
                  </span>
                  <span className="w-4 h-px bg-gray-300"></span>
                  <span className="text-gray-500">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-sm text-gray-400 mb-4">Scroll to read</span>
              <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="prose prose-lg prose-orange mx-auto">
                {/* Article Introduction */}
                <div className="mb-12 text-lg text-gray-600 leading-relaxed">
                  {post.excerpt}
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                  {contentSections.map((section, index) => {
                    // Check if the section appears to be a heading (no period at end)
                    const isHeading = !section.trim().endsWith('.');
                    
                    return (
                      <section 
                        key={index}
                        className="prose prose-lg max-w-none"
                      >
                        {isHeading ? (
                          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            {section}
                          </h2>
                        ) : (
                          <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-wrap text-justify">
                            {section.split('. ').map((sentence, i, arr) => (
                              <span key={i}>
                                {sentence}
                                {i < arr.length - 1 ? '. ' : ''}
                                {i < arr.length - 1 && sentence.length > 100 ? '\n\n' : ''}
                              </span>
                            ))}
                          </p>
                        )}
                      </section>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">More Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(0, 3).map((relatedPost, index) => (
                  <Link 
                    key={index}
                    href={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <article className="space-y-4">
                      <span className="text-sm text-gray-500">{relatedPost.category}</span>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-orange transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}