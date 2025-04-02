import React from 'react';
import { 
  AccessibilityIcon, 
  LayersIcon, 
  CodeIcon, 
  UsersIcon, 
  WandIcon, 
  MobileIcon 
} from '@/components/ui/icons';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, bgColor, iconColor }) => (
  <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
    <div className={`h-10 w-10 rounded-lg ${bgColor} flex items-center justify-center ${iconColor} mb-4`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{description}</p>
  </div>
);

const features: FeatureProps[] = [
  {
    icon: <AccessibilityIcon />,
    title: "Accessibility First",
    description: "Built-in tools to ensure your designs are accessible to everyone, with WCAG compliance checking.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: <LayersIcon />,
    title: "Smart Components",
    description: "Create dynamic, reusable components that adapt to different contexts and screen sizes.",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: <CodeIcon />,
    title: "Code Export",
    description: "Export clean, production-ready code in multiple frameworks including React, Vue, and Angular.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  },
  {
    icon: <UsersIcon />,
    title: "Real-time Collaboration",
    description: "Work together seamlessly with your team in real-time with smart conflict resolution.",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    icon: <WandIcon />,
    title: "AI Design Assistance",
    description: "Get intelligent suggestions for layouts, colors, and components based on your design context.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    icon: <MobileIcon />,
    title: "Responsive Design",
    description: "Create designs that work perfectly across all device sizes with intuitive responsive controls.",
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Design without limitations</h2>
          <p className="mt-4 text-xl text-slate-600">FigPro's powerful features empower every designer to create stunning, accessible designs effortlessly.</p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
