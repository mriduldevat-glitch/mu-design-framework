import { Wallet, PiggyBank, LineChart, Home } from 'lucide-react';

const strategies = [
  {
    icon: Home,
    title: "Capital Appreciation",
    description: "Property values increase over time, building equity and net worth automatically."
  },
  {
    icon: Wallet,
    title: "Rental Cash Flow",
    description: "Monthly rental income covers mortgage payments and generates positive cash flow."
  },
  {
    icon: PiggyBank,
    title: "Leverage Benefits",
    description: "Use bank financing to control large assets with minimal capital investment."
  },
  {
    icon: LineChart,
    title: "Portfolio Diversification",
    description: "Reduce overall investment risk by spreading assets across different property types."
  },
];

export const WealthCreation = () => {
  return (
    <section className="mu-section bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow/5 to-transparent" />
      
      <div className="mu-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-4 md:mb-6 leading-[130%]">
              Create Generational
              <span className="gradient-text block mt-1 md:mt-2">Wealth Through Real Estate</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-[160%]">
              Real estate is more than just property ownership—it's a comprehensive 
              wealth-building strategy that compounds over time.
            </p>
            
            {/* Wealth Building Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow mb-2">3x</div>
                <div className="text-white/80 text-sm">Property value growth in 10 years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow mb-2">₹50L+</div>
                <div className="text-white/80 text-sm">Average annual rental income</div>
              </div>
            </div>
          </div>

          {/* Right Content - Strategies */}
          <div className="space-y-6">
            {strategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow/30 transition-colors">
                    <strategy.icon className="w-6 h-6 text-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-white/70 leading-[160%]">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-gradient-to-r from-yellow/20 via-yellow/10 to-transparent border border-yellow/20 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-medium text-white mb-4">
              Start Small, Think Big
            </h3>
            <p className="text-xl text-white/80 leading-[160%]">
              You don't need crores to start. Begin with a single property, 
              reinvest rental income, and leverage appreciation to build a 
              substantial real estate portfolio over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
