export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "Markbiz Digital transformed our online presence. Our engagement has increased by 200% since working with them.",
        image: "/images/testimonial1.jpg"
      },
      {
        name: "Michael Chen",
        role: "Marketing Director, GrowthCo",
        content: "The ROI we've seen from their digital marketing campaigns has been exceptional. Highly recommended!",
        image: "/images/testimonial2.jpg"
      },
      {
        name: "Emily Brown",
        role: "Founder, EcoLife",
        content: "Their team's creativity and attention to detail have helped us stand out in a crowded market.",
        image: "/images/testimonial3.jpg"
      }
    ]
  
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  