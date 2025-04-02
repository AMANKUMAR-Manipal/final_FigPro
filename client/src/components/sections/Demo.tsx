import React from 'react';
import { BoltIcon, ChartIcon, ResizeIcon } from '@/components/ui/icons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import figproVideo from '@/assets/videos/figpro-demo.mov';

interface DemoStatProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const DemoStat: React.FC<DemoStatProps> = ({ icon, title, description, bgColor, iconColor }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className={`h-10 w-10 rounded-full ${bgColor} flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  </div>
);

const demoStats: DemoStatProps[] = [
  {
    icon: <BoltIcon />,
    title: "Lightning Fast",
    description: "Create designs in minutes, not hours",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: <ChartIcon />,
    title: "Improved Workflow",
    description: "40% less time spent on revisions",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: <ResizeIcon />,
    title: "Flexible Design",
    description: "Adapt to any project requirements",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  }
];

const Demo = () => {
  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">See FigPro in action</h2>
          <p className="mt-4 text-xl text-slate-600">Watch how FigPro transforms your design workflow</p>
        </div>
        
        <div className="mt-12 max-w-5xl mx-auto">
          <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden shadow-lg">
            <video 
              controls 
              autoPlay 
              muted 
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={figproVideo} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {demoStats.map((stat, index) => (
              <DemoStat key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
