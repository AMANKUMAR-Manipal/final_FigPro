import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon, XIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  description, 
  price, 
  period, 
  features, 
  popular = false, 
  buttonText 
}) => (
  <div 
    className={cn(
      "flex flex-col rounded-xl shadow-sm bg-white border overflow-hidden hover:shadow-lg transition-shadow duration-300",
      popular ? "border-2 border-primary -mt-4 md:-mt-8 z-10 relative" : "border-slate-200"
    )}
  >
    {popular && (
      <div className="absolute top-0 inset-x-0">
        <div className="h-1.5 bg-gradient-to-r from-primary to-[#ec4899]"></div>
      </div>
    )}
    <div className={cn(
      "p-6 border-b",
      popular ? "py-8 bg-primary/5 border-primary/10" : "bg-slate-50 border-slate-200"
    )}>
      {popular && (
        <div className="inline-block bg-primary/10 text-primary/80 px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide mb-2">
          Most popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-4">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        <span className="text-slate-600">{period}</span>
      </div>
    </div>
    <div className="flex-1 p-6 flex flex-col">
      <ul className="space-y-4 flex-1">
        {features.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className={cn(
              "flex-shrink-0 h-5 w-5",
              item.included ? "text-primary" : "text-slate-400"
            )}>
              {item.included ? <CheckIcon /> : <XIcon />}
            </div>
            <p className={cn(
              "ml-3 text-sm",
              item.included ? "text-slate-700" : "text-slate-400"
            )}>
              {item.feature}
            </p>
          </li>
        ))}
      </ul>
      <Button 
        className={cn(
          "mt-8 w-full",
          popular 
            ? "bg-primary hover:bg-primary/90" 
            : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
        )}
        variant={popular ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

const starterFeatures: PlanFeature[] = [
  { feature: "1 designer seat", included: true },
  { feature: "Unlimited projects", included: true },
  { feature: "Basic component library", included: true },
  { feature: "Standard export options", included: true },
  { feature: "Team collaboration", included: false },
  { feature: "Advanced AI features", included: false },
];

const proFeatures: PlanFeature[] = [
  { feature: "Up to 5 designer seats", included: true },
  { feature: "Unlimited projects", included: true },
  { feature: "Full component library", included: true },
  { feature: "Advanced export options", included: true },
  { feature: "Team collaboration", included: true },
  { feature: "Basic AI features", included: true },
];

const enterpriseFeatures: PlanFeature[] = [
  { feature: "Unlimited designer seats", included: true },
  { feature: "Unlimited projects", included: true },
  { feature: "Premium component library", included: true },
  { feature: "Custom export options", included: true },
  { feature: "Advanced team collaboration", included: true },
  { feature: "Full AI feature suite", included: true },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-xl text-slate-600">Choose the plan that's right for you and your team</p>
          </div>
        </ScrollAnimation>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <ScrollAnimation variant="fadeInUp" delay={0.1}>
            <PricingPlan
              name="Starter"
              description="Perfect for individual designers"
              price="$12"
              period="/month"
              features={starterFeatures}
              buttonText="Get started"
            />
          </ScrollAnimation>
          
          <ScrollAnimation variant="fadeInUp">
            <PricingPlan
              name="Pro"
              description="For professional designers"
              price="$29"
              period="/month"
              features={proFeatures}
              popular={true}
              buttonText="Get started"
            />
          </ScrollAnimation>
          
          <ScrollAnimation variant="fadeInUp" delay={0.2}>
            <PricingPlan
              name="Enterprise"
              description="For organizations and agencies"
              price="$79"
              period="/month"
              features={enterpriseFeatures}
              buttonText="Contact sales"
            />
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation variant="fadeInUp" delay={0.3}>
          <div className="mt-12 bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Need a custom plan?</h3>
                <p className="mt-2 text-slate-600">Contact our sales team for enterprise pricing and custom solutions.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button className="bg-slate-900 hover:bg-slate-800">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Pricing;
