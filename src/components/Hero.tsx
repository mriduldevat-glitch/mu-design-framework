import { MUButton } from './MUButton';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-real-estate.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-24 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/60" />
      </div>

      {/* Content */}
      <div className="mu-container relative z-10 py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="mb-4 md:mb-6">
            <span className="text-yellow text-xs md:text-sm font-semibold tracking-wider uppercase">
              Masters Union Real Estate
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[110%]">
            Build Wealth Through
            <span className="gradient-text block mt-1 md:mt-2">
              Smart Real Estate
            </span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl leading-[140%]">
            Invest in premium properties across India's fastest-growing cities.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
            <MUButton 
              variant="white"
              icon={<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
              className="w-full sm:w-auto text-sm md:text-base py-3 md:py-3.5"
            >
              Explore Properties
            </MUButton>
            <MUButton 
              variant="white-outline"
              className="w-full sm:w-auto text-sm md:text-base py-3 md:py-3.5"
            >
              Download Brochure
            </MUButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-16 border-t border-white/20">
            <div>
              <div className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">₹500Cr+</div>
              <div className="text-white/70 text-xs md:text-base">Assets Under Management</div>
            </div>
            <div>
              <div className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">15%</div>
              <div className="text-white/70 text-xs md:text-base">Average Annual Returns</div>
            </div>
            <div>
              <div className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">1000+</div>
              <div className="text-white/70 text-xs md:text-base">Satisfied Investors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
