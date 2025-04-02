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
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leftFeatures.map((feature, index) => (
              <ScrollAnimation key={index} variant="fadeInUp" delay={0.1 * (index)}>
                <ShowcaseFeature {...feature} />
              </ScrollAnimation>
            ))}
            
            {rightFeatures.map((feature, index) => (
              <ScrollAnimation key={index + leftFeatures.length} variant="fadeInUp" delay={0.1 * (index + leftFeatures.length)}>
                <ShowcaseFeature {...feature} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
