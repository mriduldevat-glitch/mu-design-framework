import { MapPin, TrendingUp } from 'lucide-react';
import { MUButton } from './MUButton';
import mumbaiImage from '@/assets/location-mumbai.jpg';
import bangaloreImage from '@/assets/location-bangalore.jpg';
import delhiImage from '@/assets/location-delhi.jpg';
import hyderabadImage from '@/assets/location-hyderabad.jpg';

const locations = [
  {
    city: 'Mumbai',
    image: mumbaiImage,
    growth: '18%',
    avgPrice: '₹25,000/sq.ft',
    description: 'Financial capital with premium waterfront properties'
  },
  {
    city: 'Bangalore',
    image: bangaloreImage,
    growth: '15%',
    avgPrice: '₹12,000/sq.ft',
    description: 'Tech hub with consistent demand and appreciation'
  },
  {
    city: 'Delhi NCR',
    image: delhiImage,
    growth: '14%',
    avgPrice: '₹10,000/sq.ft',
    description: 'Capital region with diverse investment opportunities'
  },
  {
    city: 'Hyderabad',
    image: hyderabadImage,
    growth: '16%',
    avgPrice: '₹8,000/sq.ft',
    description: 'Emerging IT corridor with high growth potential'
  },
];

export const Locations = () => {
  return (
    <section className="mu-section bg-white3">
      <div className="mu-container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-primary mb-4 md:mb-6 leading-[130%]">
            Prime Locations Across
            <span className="gradient-text block mt-1 md:mt-2">India's Growth Cities</span>
          </h2>
          <p className="text-xl text-grey leading-[160%]">
            Strategic properties in metro cities driving India's economic growth, 
            carefully selected for maximum appreciation potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                
                {/* Growth Badge */}
                <div className="absolute top-4 right-4 bg-yellow text-primary px-4 py-2 rounded-full font-bold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {location.growth} Growth
                </div>
                
                {/* City Name */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-2xl font-bold">{location.city}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-grey mb-4 leading-[160%]">
                  {location.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-grey mb-1">Average Price</div>
                    <div className="text-xl font-bold text-primary">{location.avgPrice}</div>
                  </div>
                  <MUButton variant="black-outline" className="px-4 py-2 text-sm">
                    View Properties
                  </MUButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
