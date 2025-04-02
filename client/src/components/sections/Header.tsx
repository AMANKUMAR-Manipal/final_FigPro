import React, { useState, useEffect } from 'react';
import { Logo, BarsIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200",
      isScrolled && "shadow-sm"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold text-slate-900">FigPro</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">Pricing</a>
            <a href="#showcase" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">Showcase</a>
            <a href="#faq" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:inline-flex text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Sign In
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <BarsIcon />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100">Features</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100">Pricing</a>
            <a href="#showcase" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100">Showcase</a>
            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100">FAQ</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100">Sign In</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
