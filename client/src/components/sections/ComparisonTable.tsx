import React from 'react';
import { Logo, CheckIcon, XIcon } from '@/components/ui/icons';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface ComparisonFeature {
  feature: string;
  figpro: string | React.ReactNode;
  competitorA: string | React.ReactNode;
  competitorB: string | React.ReactNode;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    feature: "Accessibility Toolkit",
    figpro: <div className="flex justify-center"><span className="text-green-500"><CheckIcon /></span></div>,
    competitorA: <div className="flex justify-center"><span className="text-red-500"><XIcon /></span></div>,
    competitorB: <span className="text-slate-400">Limited</span>
  },
  {
    feature: "AI-Powered Design",
    figpro: <div className="flex justify-center"><span className="text-green-500"><CheckIcon /></span></div>,
    competitorA: <span className="text-slate-400">Limited</span>,
    competitorB: <span className="text-slate-400">Basic</span>
  },
  {
    feature: "Real-time Collaboration",
    figpro: <div className="flex justify-center"><span className="text-green-500"><CheckIcon /></span></div>,
    competitorA: <div className="flex justify-center"><span className="text-green-500"><CheckIcon /></span></div>,
    competitorB: <div className="flex justify-center"><span className="text-red-500"><XIcon /></span></div>
  },
  {
    feature: "Code Export",
    figpro: <span className="text-green-500">All Frameworks</span>,
    competitorA: <span className="text-slate-400">Limited</span>,
    competitorB: <span className="text-slate-400">Basic</span>
  },
  {
    feature: "Responsive Design Tools",
    figpro: <span className="text-green-500">Advanced</span>,
    competitorA: <span className="text-slate-400">Basic</span>,
    competitorB: <span className="text-slate-400">Basic</span>
  },
  {
    feature: "Component Library",
    figpro: <span className="text-green-500">10,000+</span>,
    competitorA: <span className="text-slate-400">5,000+</span>,
    competitorB: <span className="text-slate-400">2,000+</span>
  }
];

const ComparisonTable = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">How FigPro compares</h2>
            <p className="mt-4 text-xl text-slate-600">See why designers are switching to FigPro for their design needs</p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation variant="fadeInUp" delay={0.2}>
          <div className="mt-16 overflow-hidden shadow-lg rounded-xl bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="py-6 pl-6 pr-3 text-left text-sm font-semibold text-slate-900">Features</th>
                    <th scope="col" className="px-3 py-6 text-center text-sm font-semibold text-primary">
                      <div className="flex flex-col items-center">
                        <div className="mb-2 bg-white shadow-md rounded-lg p-1">
                          <Logo className="h-8 w-8" />
                        </div>
                        <span className="font-bold">FigPro</span>
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-6 text-center text-sm font-semibold text-slate-900">Competitor A</th>
                    <th scope="col" className="px-3 py-6 text-center text-sm font-semibold text-slate-900">Competitor B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-4 pl-6 pr-3 text-sm font-medium text-slate-900">{item.feature}</td>
                      <td className="px-3 py-4 text-center text-sm text-slate-500 bg-primary/5">{item.figpro}</td>
                      <td className="px-3 py-4 text-center text-sm text-slate-500">{item.competitorA}</td>
                      <td className="px-3 py-4 text-center text-sm text-slate-500">{item.competitorB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ComparisonTable;
