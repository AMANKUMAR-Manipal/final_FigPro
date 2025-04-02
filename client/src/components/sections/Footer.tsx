import React from 'react';
import { Logo, TwitterIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from '@/components/ui/icons';

interface FooterLinkSectionProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">{title}</h3>
    <ul className="mt-4 space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-slate-400 hover:text-white">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const productLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Changelog", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "API", href: "#" },
];

const resourceLinks = [
  { name: "Documentation", href: "#" },
  { name: "Tutorials", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Community", href: "#" },
  { name: "Support", href: "#" },
];

const companyLinks = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Contact", href: "#" },
];

const legalLinks = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Cookies", href: "#" },
  { name: "Licenses", href: "#" },
  { name: "Settings", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold text-white">FigPro</span>
            </a>
            <p className="mt-4 text-slate-400">The accessible design tool built for professional designers and teams.</p>
            <div className="mt-6">
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
          
          <FooterLinkSection title="Product" links={productLinks} />
          <FooterLinkSection title="Resources" links={resourceLinks} />
          <FooterLinkSection title="Company" links={companyLinks} />
          <FooterLinkSection title="Legal" links={legalLinks} />
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© {new Date().getFullYear()} FigPro. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white">Privacy</a>
                <a href="#" className="text-slate-400 hover:text-white">Terms</a>
                <a href="#" className="text-slate-400 hover:text-white">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
