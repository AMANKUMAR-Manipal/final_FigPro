import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Ready to transform your design workflow?</h2>
          <p className="mt-4 text-xl text-slate-300">Join thousands of designers who are creating better, more accessible designs with FigPro.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white bg-slate-800 hover:bg-slate-700">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">No credit card required. 14-day free trial.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
