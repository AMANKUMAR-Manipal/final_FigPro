import React from 'react';
import { 
  PaletteIcon, 
  ComponentIcon, 
  ControlsIcon, 
  MessageIcon, 
  DeviceMobileIcon, 
  ExportIcon 
} from '@/components/ui/icons';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface ShowcaseFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const ShowcaseFeature: React.FC<ShowcaseFeatureProps> = ({ icon, title, description, bgColor, iconColor }) => (
  <div>
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className={`h-10 w-10 rounded-lg ${bgColor} flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-slate-600">{description}</p>
      </div>
    </div>
  </div>
);

// Mock interface screenshots with SVG placeholders
const InterfaceScreenshot1 = () => (
  <svg 
    viewBox="0 0 500 300" 
    className="w-full h-auto" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="500" height="300" rx="8" fill="#F1F5F9" />
    <rect x="20" y="20" width="460" height="260" rx="4" fill="#E2E8F0" />
    <rect x="40" y="40" width="120" height="220" rx="4" fill="#CBD5E1" />
    <rect x="180" y="40" width="300" height="40" rx="4" fill="#94A3B8" />
    <rect x="180" y="100" width="300" height="160" rx="4" fill="#CBD5E1" />
    <circle cx="50" cy="30" r="6" fill="#EF4444" />
    <circle cx="70" cy="30" r="6" fill="#F59E0B" />
    <circle cx="90" cy="30" r="6" fill="#10B981" />
  </svg>
);

const InterfaceScreenshot2 = () => (
  <svg 
    viewBox="0 0 500 300" 
    className="w-full h-auto" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="500" height="300" rx="8" fill="#F1F5F9" />
    <rect x="20" y="20" width="460" height="260" rx="4" fill="#E2E8F0" />
    <rect x="40" y="40" width="420" height="40" rx="4" fill="#94A3B8" />
    <rect x="40" y="100" width="200" height="160" rx="4" fill="#CBD5E1" />
    <rect x="260" y="100" width="200" height="160" rx="4" fill="#94A3B8" />
    <circle cx="50" cy="30" r="6" fill="#EF4444" />
    <circle cx="70" cy="30" r="6" fill="#F59E0B" />
    <circle cx="90" cy="30" r="6" fill="#10B981" />
  </svg>
);

const leftFeatures: ShowcaseFeatureProps[] = [
  {
    icon: <PaletteIcon />,
    title: "Intelligent Color System",
    description: "Create accessible color palettes that meet WCAG standards with smart color suggestions based on brand guidelines.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: <ComponentIcon />,
    title: "Component Library",
    description: "Access thousands of pre-built, customizable components that follow best practices for accessibility and usability.",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: <ControlsIcon />,
    title: "Advanced Controls",
    description: "Fine-tune every aspect of your design with precision controls that give you complete creative freedom.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  }
];

const rightFeatures: ShowcaseFeatureProps[] = [
  {
    icon: <MessageIcon />,
    title: "Real-time Feedback",
    description: "Get instant feedback on your designs from team members and stakeholders with contextual commenting.",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    icon: <DeviceMobileIcon />,
    title: "Responsive Preview",
    description: "Test your designs across multiple device sizes with a single click to ensure perfect responsive behavior.",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    icon: <ExportIcon />,
    title: "Export Options",
    description: "Export designs as code, images, or documents with format options that suit your workflow needs.",
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600"
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Powerful interface, intuitive design</h2>
            <p className="mt-4 text-xl text-slate-600">FigPro's thoughtfully crafted interface makes complex design tasks simple</p>
          </div>
        </ScrollAnimation>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation variant="fadeInLeft" delay={0.2}>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <InterfaceScreenshot1 />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium text-slate-900">Smart Components Panel</div>
                  <div className="text-xs text-slate-500">Drag & drop interface with AI-powered suggestions</div>
                </div>
              </div>
            </ScrollAnimation>
            
            <div className="flex flex-col justify-center space-y-8">
              {leftFeatures.map((feature, index) => (
                <ScrollAnimation key={index} variant="fadeInRight" delay={0.1 * (index + 1)}>
                  <ShowcaseFeature {...feature} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
              {rightFeatures.map((feature, index) => (
                <ScrollAnimation key={index} variant="fadeInLeft" delay={0.1 * (index + 1)}>
                  <ShowcaseFeature {...feature} />
                </ScrollAnimation>
              ))}
            </div>
            
            <ScrollAnimation variant="fadeInRight" delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <InterfaceScreenshot2 />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-sm font-medium text-slate-900">Accessibility Toolkit</div>
                  <div className="text-xs text-slate-500">Real-time accessibility checks and suggestions</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
