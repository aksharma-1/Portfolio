import React from 'react';
import { Mail, Heart } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12 px-6 md:px-12 mt-20 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Signature */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="font-bold text-zinc-100 tracking-tight text-lg hover:text-white transition-colors cursor-pointer"
          >
            Akshay Sharma
          </a>
          <p className="text-zinc-500 text-xs text-center md:text-left">
            Modern Frontend Developer • UI Performance Enthusiast
          </p>
        </div>

        {/* Dynamic Tagline with Animated Beat */}
        <div className="text-zinc-500 text-xs flex items-center gap-1">
          <span>Engineered with</span>
          <Heart className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500 animate-pulse" />
          <span>using React, TS &amp; Tailwind CSS</span>
        </div>

        {/* Social Icons with Specific Hover Rings */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aksharma-1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 flex items-center justify-center transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="www.linkedin.com/in/akshay-sharma-b30720235"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 text-zinc-400 hover:text-indigo-400 flex items-center justify-center transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:akshaysharma58194@gmail.com"
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-105"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
        <p>© {currentYear} Akshay Sharma. All rights reserved.</p>
        <p className="tracking-wide">DESIGNED FOR RECRUITERS &amp; PRODUCT-FOCUSED ENGINEERING LEADERS</p>
      </div>
    </footer>
  );
};

export default Footer;
