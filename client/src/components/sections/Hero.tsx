import React from 'react';
import { Button } from '@/components/ui/button';
import { UserAvatars, PlayIcon } from '@/components/ui/icons';
import heroImage from '@/assets/images/hero-image.svg';
import figproInterface from '@/assets/images/figpro-interface.png';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              <span className="block mb-2">The Accessible</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ec4899]">Design Tool</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              FigPro streamlines your design workflow with powerful accessibility features, intuitive controls, and seamless collaboration tools built for everyone.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://figpro-eight.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Try for Free
                </Button>
              </a>
              <Button size="lg" variant="outline" className="flex items-center">
                Watch Demo
                <PlayIcon />
              </Button>
            </div>
            <div className="mt-8 text-slate-500 flex justify-center lg:justify-start items-center">
              <UserAvatars />
              <span className="ml-3">Join 10,000+ designers worldwide</span>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200">
              <img 
                src={figproInterface} 
                alt="FigPro Design Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end">
                <div className="p-4 md:p-6 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white/80 text-sm">
                      FigPro Interface - Accessible by design
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
