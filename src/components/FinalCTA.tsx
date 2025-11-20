import { MUButton } from './MUButton';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="mu-section bg-primary relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-yellow via-accent to-transparent" />
      </div>

      <div className="mu-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6 leading-[110%]">
            Ready To Build Your
            <span className="gradient-text block mt-2">Real Estate Empire?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-[140%]">
            Join thousands of smart investors who are building generational wealth 
            through strategic real estate investments. Your journey to financial 
            freedom starts today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <MUButton 
              variant="white"
              className="px-8 py-4 text-lg"
              icon={<ArrowRight className="w-6 h-6" />}
            >
              Schedule a Consultation
            </MUButton>
            <MUButton 
              variant="white-outline"
              className="px-8 py-4 text-lg"
            >
              Download Investment Guide
            </MUButton>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <Phone className="w-8 h-8 text-yellow mb-3 mx-auto" />
              <div className="text-white/70 text-sm mb-2">Call Us</div>
              <div className="text-white text-xl font-medium">+91 98765 43210</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <Mail className="w-8 h-8 text-yellow mb-3 mx-auto" />
              <div className="text-white/70 text-sm mb-2">Email Us</div>
              <div className="text-white text-xl font-medium">realestate@mastersunion.org</div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-16 pt-16 border-t border-white/20">
            <p className="text-white/70 text-lg leading-[160%]">
              Trusted by 1000+ investors • ₹500Cr+ AUM • 4.9/5 Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
