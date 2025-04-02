import React from 'react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

// SVG-based testimonial avatar
const TestimonialAvatar = ({ index }: { index: number }) => {
  const colors = [
    { bg: '#f3f4f6', fill: '#6b7280' },
    { bg: '#fef2f2', fill: '#ef4444' },
    { bg: '#f0fdf4', fill: '#10b981' },
  ];
  
  const { bg, fill } = colors[index % colors.length];
  
  return (
    <svg className="h-10 w-10 rounded-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill={bg} />
      <circle cx="20" cy="16" r="8" fill={fill} />
      <path d="M10,32 C10,26 30,26 30,32" fill={fill} />
    </svg>
  );
};

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarIndex: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, avatarIndex }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
    <div className="flex items-center mb-4">
      <div className="text-amber-400 flex">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
    <blockquote>
      <p className="text-slate-700">{quote}</p>
    </blockquote>
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <TestimonialAvatar index={avatarIndex} />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-slate-900">{name}</p>
        <p className="text-xs text-slate-500">{title}</p>
      </div>
    </div>
  </div>
);

const testimonials: TestimonialProps[] = [
  {
    quote: "FigPro has completely transformed our design process. The accessibility toolkit has helped us create more inclusive designs with much less effort.",
    name: "Sarah Johnson",
    title: "Lead Designer, Acme Inc.",
    avatarIndex: 0
  },
  {
    quote: "The collaboration features are fantastic. My team can work together seamlessly, which has reduced our design time by at least 40%.",
    name: "Michael Chang",
    title: "Design Director, TechSpace",
    avatarIndex: 1
  },
  {
    quote: "As a freelance designer, the code export features save me hours of back-and-forth with developers. Best investment I've made this year.",
    name: "Natalie Moreno",
    title: "Freelance UX Designer",
    avatarIndex: 2
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">What designers are saying</h2>
            <p className="mt-4 text-xl text-slate-600">Hear from professionals who use FigPro every day</p>
          </div>
        </ScrollAnimation>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} variant="fadeInUp" delay={0.1 * (index + 1)}>
              <Testimonial {...testimonial} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
