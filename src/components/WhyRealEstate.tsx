import { TrendingUp, Shield, Building2, Percent } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Consistent Appreciation",
    description: "Real estate historically appreciates 8-12% annually, outpacing inflation and providing steady wealth growth over time."
  },
  {
    icon: Shield,
    title: "Tangible Asset Security",
    description: "Unlike stocks or bonds, real estate is a physical asset you can see, touch, and control, providing unmatched security."
  },
  {
    icon: Building2,
    title: "Rental Income Stream",
    description: "Generate passive monthly income through rentals while your property continues to appreciate in value."
  },
  {
    icon: Percent,
    title: "Tax Benefits",
    description: "Enjoy significant tax deductions on home loans, depreciation, and property-related expenses."
  }
];

export const WhyRealEstate = () => {
  return (
    <section className="mu-section bg-white">
      <div className="mu-container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-[130%]">
            Why Real Estate Is Your Path To
            <span className="gradient-text"> Financial Freedom</span>
          </h2>
          <p className="text-xl text-grey leading-[160%]">
            Real estate isn't just an investment—it's a proven wealth-building strategy 
            that has created more millionaires than any other asset class.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-grey leading-[160%]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
