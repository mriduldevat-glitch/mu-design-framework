import { Hero } from '@/components/Hero';
import { WhyRealEstate } from '@/components/WhyRealEstate';
import { Returns } from '@/components/Returns';
import { Locations } from '@/components/Locations';
import { WealthCreation } from '@/components/WealthCreation';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyRealEstate />
      <Returns />
      <Locations />
      <WealthCreation />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Index;
