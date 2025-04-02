import React from 'react';

// SVG-based partner logos with enhanced styling
const PartnerLogo = ({ name }: { name: string }) => (
  <div className="h-12 flex items-center justify-center group">
    <svg 
      width="160" 
      height="50" 
      viewBox="0 0 160 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="max-h-12 w-auto transition-all duration-300 group-hover:scale-105"
    >
      <rect width="160" height="50" rx="6" fill="#F1F5F9" className="group-hover:fill-slate-200 transition-colors duration-300" />
      <text 
        x="80" 
        y="30" 
        fontFamily="Arial" 
        fontSize="14" 
        fontWeight="bold"
        fill="#475569" 
        textAnchor="middle"
        className="group-hover:fill-slate-800"
      >
        {name}
      </text>
    </svg>
  </div>
);

// Trust metrics to add credibility
const TrustMetric = ({ number, label }: { number: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl font-bold text-primary">{number}</span>
    <span className="text-sm text-slate-600 mt-1">{label}</span>
  </div>
);

const partners = [
  'Adobe', 'Microsoft', 'Shopify', 
  'Atlassian', 'Slack', 'Dropbox'
];

const trustMetrics = [
  { number: '100K+', label: 'Active Designers' },
  { number: '150+', label: 'Countries' },
  { number: '4.9/5', label: 'Average Rating' }
];

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            TRUSTED GLOBALLY
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            The design platform powering the world's best teams
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Join thousands of professionals and top companies already using FigPro in their daily workflow
          </p>
        </div>
        
        <div className="mt-10 flex justify-center gap-8 md:gap-16">
          {trustMetrics.map((metric, index) => (
            <TrustMetric key={index} number={metric.number} label={metric.label} />
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-6 items-center border-t border-b border-slate-200 py-10">
          {partners.map((partner, index) => (
            <div key={index} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <PartnerLogo name={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
