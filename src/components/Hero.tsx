import { MUButton } from './MUButton';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-real-estate.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
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
      <div className="mu-container relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="text-yellow text-sm font-semibold tracking-wider uppercase">
              Masters Union Real Estate
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[110%]">
            Build Wealth Through
            <span className="gradient-text block mt-2">
              Smart Real Estate
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-[140%]">
            Invest in premium properties across India's fastest-growing cities. 
            Create generational wealth through strategic real estate investments.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <MUButton 
              variant="white"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Properties
            </MUButton>
            <MUButton 
              variant="white-outline"
            >
              Download Brochure
            </MUButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-white mb-2">₹500Cr+</div>
              <div className="text-white/70">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15%</div>
              <div className="text-white/70">Average Annual Returns</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/70">Satisfied Investors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
