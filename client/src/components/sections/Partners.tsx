import React from 'react';

// SVG-based partner logos to avoid using image files
const PartnerLogo = ({ name }: { name: string }) => (
  <div className="h-8 flex items-center justify-center text-gray-500">
    <svg 
      width="160" 
      height="40" 
      viewBox="0 0 160 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="max-h-8 w-auto"
    >
      <rect width="160" height="40" rx="4" fill="#F1F5F9" />
      <text 
        x="80" 
        y="24" 
        fontFamily="Arial" 
        fontSize="12" 
        fill="#64748B" 
        textAnchor="middle"
      >
        {name}
      </text>
    </svg>
  </div>
);

const partners = [
  'Adobe', 'Microsoft', 'Shopify', 
  'Atlassian', 'Slack', 'Dropbox'
];

const Partners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary">Trusted by professionals worldwide</h2>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6">
            {partners.map((partner, index) => (
              <div key={index} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <PartnerLogo name={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
