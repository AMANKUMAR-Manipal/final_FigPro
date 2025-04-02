import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqItems: FAQItemProps[] = [
  {
    question: "What makes FigPro different from other design tools?",
    answer: "FigPro was built from the ground up with accessibility in mind. Our tool integrates accessibility checks throughout the design process, offers AI-powered suggestions, and provides seamless collaboration features that other tools lack. Additionally, our code export supports more frameworks and produces cleaner, more production-ready code."
  },
  {
    question: "Can I import existing designs from other tools?",
    answer: "Yes! FigPro supports importing designs from all major design tools including Figma, Sketch, and Adobe XD. Our smart conversion process preserves as much of your original design as possible while optimizing it for our accessibility-focused workflow."
  },
  {
    question: "How does the code export work?",
    answer: "Our code export feature converts your designs into clean, production-ready code. You can export to React, Vue, Angular, HTML/CSS, and more. The exported code follows best practices for accessibility and responsive design. For developers, we also provide detailed documentation and component props that make implementation straightforward."
  },
  {
    question: "Do you offer educational discounts?",
    answer: "Yes, we offer a 50% discount for students and educators. We also provide free licenses to educational institutions for classroom use. Please contact our education team with valid school credentials to apply for these discounts."
  },
  {
    question: "Can I try before I buy?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. Just sign up and start designing immediately."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Frequently asked questions</h2>
          <p className="mt-4 text-xl text-slate-600">Everything you need to know about FigPro</p>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-slate-100 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-lg font-medium text-slate-900 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
