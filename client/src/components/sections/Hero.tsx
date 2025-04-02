import React from 'react';
import { Button } from '@/components/ui/button';
import { UserAvatars, PlayIcon } from '@/components/ui/icons';

const mockScreenshot = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='none'%3E%3Crect width='800' height='450' fill='%23F1F5F9'/%3E%3Crect x='50' y='50' width='700' height='350' rx='8' fill='%23E2E8F0'/%3E%3Crect x='80' y='80' width='640' height='290' rx='4' fill='%23F8FAFC'/%3E%3Crect x='120' y='100' width='200' height='20' rx='2' fill='%23CBD5E1'/%3E%3Crect x='120' y='140' width='560' height='1' fill='%23CBD5E1'/%3E%3Crect x='120' y='160' width='180' height='180' rx='4' fill='%23CBD5E1'/%3E%3Crect x='320' y='160' width='180' height='80' rx='4' fill='%23CBD5E1'/%3E%3Crect x='320' y='260' width='180' height='80' rx='4' fill='%23CBD5E1'/%3E%3Crect x='520' y='160' width='160' height='180' rx='4' fill='%23CBD5E1'/%3E%3C/svg%3E`;

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
                src={mockScreenshot} 
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
