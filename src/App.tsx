import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';

// Components
import GlowBg from './components/GlowBg';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Performance from './sections/Performance';
import ResumeCard from './sections/ResumeCard';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('INITIALIZING BOOT SEQUENCES...');
  const [loadingProgress, setLoadingProgress] = useState(0);

  // High-fidelity SaaS boot-loader simulation
  useEffect(() => {
    const textSequences = [
      { text: 'INITIALIZING COMPILER CONFIGS...', limit: 25 },
      { text: 'PARSING CORE TYPESCRIPT SCHEMAS...', limit: 55 },
      { text: 'MOUNTING MODULAR INTERACTION WRAPPERS...', limit: 80 },
      { text: 'INJECTING PRESETS & BENCHMARKS...', limit: 100 },
    ];

    let currentTextIdx = 0;
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const next = prev + 1;
        
        // Update compilation statuses based on percentage markers
        if (currentTextIdx < textSequences.length && next >= textSequences[currentTextIdx].limit) {
          setLoadingText(textSequences[currentTextIdx].text);
          currentTextIdx++;
        }

        if (next >= 100) {
          clearInterval(progressInterval);
          // Wait 300ms at 100% for smooth user perception
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return next;
      });
    }, 20); // Quick 2-second boot

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Boot Loading Screen */
          <motion.div
            key="loader"
            className="fixed inset-0 bg-zinc-950 z-[99999] flex flex-col items-center justify-center p-6 select-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="flex flex-col items-center gap-4 max-w-sm w-full">
              {/* Spinning core diagnostic icon */}
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 relative">
                <Cpu className="w-6 h-6 animate-pulse" />
                <span className="absolute inset-0 rounded-2xl border border-indigo-500/20 animate-ping" style={{ animationDuration: '2s' }} />
              </div>

              {/* Progress and Code status display */}
              <div className="text-center w-full mt-4">
                <span className="text-[10px] font-bold font-mono tracking-widest text-indigo-400">
                  AKSHAY SHARMA PORTFOLIO
                </span>
                
                {/* Dynamically typed terminal commands */}
                <div className="flex items-center justify-center gap-2 mt-1.5 h-6 text-[10px] sm:text-xs font-mono text-zinc-500 font-medium">
                  <Terminal className="w-3.5 h-3.5 shrink-0" />
                  <span>{loadingText}</span>
                </div>
              </div>

              {/* Progress bar track */}
              <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mt-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>

              {/* Percent Counter */}
              <span className="text-xs font-mono font-bold text-zinc-400 mt-1">
                {loadingProgress}%
              </span>
            </div>
          </motion.div>
        ) : (
          /* Main Application Shell */
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative min-h-screen bg-zinc-950 text-zinc-400 selection:bg-indigo-500/25 selection:text-indigo-200"
          >
            {/* Top fixed scrolling scale bar */}
            <ScrollProgress />

            {/* Trailing Custom spring dot cursor */}
            <CustomCursor />

            {/* Reactive background mouse follow glows */}
            <GlowBg />

            {/* Header / Pill Navigation */}
            <Navbar />

            {/* Structural layouts and Sections */}
            <main className="relative z-10 w-full max-w-5xl mx-auto overflow-hidden">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Performance />
              <ResumeCard />
              <Contact />
            </main>

            {/* Footer and signature details */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
