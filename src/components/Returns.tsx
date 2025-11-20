import { MUButton } from './MUButton';
import { Download } from 'lucide-react';

const performanceData = [
  { year: '2019', value: 100, label: '₹1Cr' },
  { year: '2020', value: 112, label: '₹1.12Cr' },
  { year: '2021', value: 128, label: '₹1.28Cr' },
  { year: '2022', value: 145, label: '₹1.45Cr' },
  { year: '2023', value: 165, label: '₹1.65Cr' },
  { year: '2024', value: 188, label: '₹1.88Cr' },
];

const compareData = [
  { asset: 'Real Estate', returns: '12-15%', stability: 'High', liquidity: 'Medium' },
  { asset: 'Fixed Deposits', returns: '5-7%', stability: 'High', liquidity: 'High' },
  { asset: 'Stock Market', returns: '10-12%', stability: 'Medium', liquidity: 'High' },
  { asset: 'Gold', returns: '8-10%', stability: 'Medium', liquidity: 'High' },
];

export const Returns = () => {
  const maxValue = Math.max(...performanceData.map(d => d.value));

  return (
    <section className="mu-section bg-primary">
      <div className="mu-container">
        {/* Performance Chart */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[130%]">
              Real Estate Delivers
              <span className="gradient-text"> Consistent Returns</span>
            </h2>
            <p className="text-xl text-white/80 leading-[160%]">
              Track record of steady appreciation: ₹1 Crore investment growing to ₹1.88 Crore in just 5 years
            </p>
          </div>

          {/* Simple Bar Chart */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
            <div className="flex items-end justify-between gap-4 h-80">
              {performanceData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center justify-end gap-3">
                  <div className="text-white font-semibold text-sm md:text-base">
                    {data.label}
                  </div>
                  <div 
                    className="w-full bg-gradient-to-t from-yellow via-accent to-yellow/60 rounded-t-lg transition-all duration-1000 hover:opacity-90"
                    style={{ 
                      height: `${(data.value / maxValue) * 100}%`,
                      minHeight: '40px'
                    }}
                  />
                  <div className="text-white/70 font-medium text-xs md:text-sm">
                    {data.year}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 text-white/60 text-sm">
              Historical data shows consistent 12-15% annual appreciation
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            How Real Estate Compares
          </h3>
          
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-6 text-primary font-bold">Asset Class</th>
                    <th className="text-left p-6 text-primary font-bold">Annual Returns</th>
                    <th className="text-left p-6 text-primary font-bold">Stability</th>
                    <th className="text-left p-6 text-primary font-bold">Liquidity</th>
                  </tr>
                </thead>
                <tbody>
                  {compareData.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-t border-border ${index === 0 ? 'bg-yellow/10' : ''}`}
                    >
                      <td className="p-6 font-semibold text-primary">{item.asset}</td>
                      <td className="p-6 text-grey">{item.returns}</td>
                      <td className="p-6 text-grey">{item.stability}</td>
                      <td className="p-6 text-grey">{item.liquidity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <MUButton 
              variant="white"
              icon={<Download className="w-5 h-5" />}
            >
              Download Full Performance Report
            </MUButton>
          </div>
        </div>
      </div>
    </section>
  );
};
