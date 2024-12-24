// src/components/About.js
export default function About() {
    return (
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative">
              <img
                src="/images/about-marketing.jpg"
                alt="Digital Marketing Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We Drive Digital Growth
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Markbiz Digital, we're passionate about helping businesses thrive in the digital age. Our team of experts combines creativity with data-driven strategies to deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">500+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">98%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">10+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">250+</h3>
                  <p className="text-gray-600">Active Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
 