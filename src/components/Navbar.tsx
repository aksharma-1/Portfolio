import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Performance', href: '#performance' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle dark navbar blur backgrounds on small scroll increments
      setIsScrolled(window.scrollY > 20);

      // Simple, performant viewport boundaries check for navbar highlighters
      const sections = navItems.map(item => item.href.slice(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to match navbar heights
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // Balanced offset spacing below nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 flex justify-center pointer-events-none">
      <motion.nav
        className={`w-full max-w-5xl flex items-center justify-between transition-all duration-300 rounded-full px-6 py-2.5 pointer-events-auto ${
          isScrolled
            ? 'bg-zinc-950/70 border border-zinc-800/50 backdrop-blur-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border border-transparent'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        {/* Modern Logo Icon & Text */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="flex items-center gap-2 group.cursor-pointer hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-xs tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            AS
          </span>
          <span className="font-semibold text-zinc-100 tracking-tight text-sm md:text-base hidden sm:inline-block">
            Akshay Sharma
          </span>
        </a>

        {/* Sliding Bubble Nav links for Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors cursor-pointer ${
                activeSection === item.href.slice(1)
                  ? 'text-zinc-100'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-zinc-800/50 border border-zinc-700/20 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </div>

        {/* Right floating CTA - Recruiter trigger */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/5 border border-zinc-800 hover:border-indigo-500/40 text-zinc-100 hover:bg-indigo-500/10 hover:text-indigo-200 text-xs font-semibold transition-all shadow-inner"
          >
            Hire Architect
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </motion.nav>

      {/* Screen-fill mobile menu with animated entry */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[70px] z-40 bg-zinc-950/98 backdrop-blur-2xl md:hidden border-t border-zinc-900/50 p-6 flex flex-col justify-between pointer-events-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-xl font-bold tracking-tight py-2 border-b border-zinc-900/80 flex items-center justify-between ${
                    activeSection === item.href.slice(1)
                      ? 'text-indigo-400 border-indigo-500/10'
                      : 'text-zinc-400'
                  }`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" />
                  )}
                </motion.a>
              ))}
            </div>
            <div className="pb-8">
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-indigo-500/15"
              >
                Let's Build Something Great
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
