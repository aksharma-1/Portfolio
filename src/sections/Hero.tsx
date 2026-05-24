import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Send, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';

const titles = [
  'Frontend Developer',
  'React Engineer',
  'UI Performance Enthusiast',
  'TypeScript Developer',
];

export const Hero: React.FC = () => {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center px-6 pt-24 md:pt-32 overflow-hidden z-10"
    >
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      {/* Main Core Layout Container */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative">
        
        {/* Top Floating Glow Announcement */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md mb-6 sm:mb-8 text-xs font-medium text-zinc-300 shadow-inner"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400/20 animate-pulse" />
          <span>Available for Frontend Roles</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 timeline-pulse" />
        </motion.div>

        {/* Developer Name Headline */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 select-none bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Akshay Sharma
        </motion.h1>

        {/* Carousel / Vertical Rotating Title Wrapper */}
        <div className="h-[48px] sm:h-[64px] overflow-hidden relative flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIdx}
              className="absolute text-xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent text-center select-none"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {titles[titleIdx]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Compelling Short Intro */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Frontend developer focused on building scalable, responsive, and high-performance web applications with modern UI technologies.
        </motion.p>

        {/* High-Fidelity Call-To-Action (CTA) Area */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Primary glowing action button */}
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary Glass resume trigger */}
          <button
            onClick={() => handleScrollTo('resume')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 backdrop-blur-md text-zinc-200 hover:text-white transition-all cursor-pointer shadow-inner"
          >
            Download Resume
            <Download className="w-4 h-4 text-zinc-400" />
          </button>

          {/* Tertiary standard action text link */}
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 text-zinc-400 hover:text-zinc-200 text-sm font-semibold relative group cursor-pointer"
          >
            Contact Me
            <Send className="w-3.5 h-3.5" />
            <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
          </button>
        </motion.div>
      </div>

      {/* FLOATING TECH BADGES (Inspired by Raycast) */}
      
      {/* 1. React Floater - Top Left */}
      <motion.div
        className="absolute top-[18%] left-[6%] xl:left-[12%] hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-2 h-2 rounded-full bg-indigo-400 timeline-pulse" />
        <span className="text-xs font-semibold text-zinc-200">React.js</span>
      </motion.div>

      {/* 2. TypeScript Floater - Middle Right */}
      <motion.div
        className="absolute top-[32%] right-[4%] xl:right-[10%] hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm select-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Cpu className="w-4 h-4 text-indigo-400" />
        <span className="text-xs font-semibold text-zinc-200">TypeScript</span>
      </motion.div>

      {/* 3. Tailwind CSS Floater - Bottom Left */}
      <motion.div
        className="absolute bottom-[20%] left-[8%] xl:left-[15%] hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm select-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Layers className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-semibold text-zinc-200">Tailwind CSS</span>
      </motion.div>

      {/* 4. Redux Floater - Bottom Right */}
      <motion.div
        className="absolute bottom-[25%] right-[8%] xl:right-[15%] hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm select-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <Terminal className="w-4 h-4 text-purple-400" />
        <span className="text-xs font-semibold text-zinc-200">Redux Toolkit</span>
      </motion.div>
    </section>
  );
};

export default Hero;
