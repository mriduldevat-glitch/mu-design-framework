import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Tech Executive, Bangalore",
    content: "Invested ₹80L in 2019, property now worth ₹1.4Cr. The rental income covers my EMI and generates additional cash flow. Best financial decision I've made.",
    rating: 5,
    returns: "+75% in 5 years"
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, Mumbai",
    content: "Masters Union's team guided me through every step. My Mumbai property has appreciated 60% in 4 years while generating ₹45,000 monthly rental income.",
    rating: 5,
    returns: "+60% in 4 years"
  },
  {
    name: "Amit Patel",
    role: "Entrepreneur, Delhi",
    content: "Built a portfolio of 3 properties across tier-1 cities. The diversification strategy and expert advice from Masters Union has been invaluable.",
    rating: 5,
    returns: "3 properties portfolio"
  },
];

export const Testimonials = () => {
  return (
    <section className="mu-section bg-white">
      <div className="mu-container">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-[130%]">
            Success Stories From
            <span className="gradient-text"> Real Investors</span>
          </h2>
          <p className="text-xl text-grey leading-[160%]">
            Real people, real returns. See how our investors have built substantial wealth through strategic real estate investments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary rounded-xl p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-grey leading-[160%] mb-6">
                "{testimonial.content}"
              </p>

              {/* Returns Badge */}
              <div className="inline-block bg-yellow/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {testimonial.returns}
              </div>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <div className="font-bold text-primary mb-1">{testimonial.name}</div>
                <div className="text-sm text-grey">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-grey">Happy Investors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-grey">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">₹500Cr+</div>
            <div className="text-grey">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15%</div>
            <div className="text-grey">Avg. Returns</div>
          </div>
        </div>
      </div>
    </section>
  );
};
