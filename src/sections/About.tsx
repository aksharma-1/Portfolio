import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="about" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Headline */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Professional Summary</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Who I Am &amp; What I Stand For
        </h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-lg">
          An engineering mindset focused on crafting smooth interfaces, solid component architectures, and blazing-fast user experiences.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-12 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Card 1: Core Summary (large) */}
        <motion.div
          className="col-span-12 lg:col-span-8 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px] glow-card glass-hover relative"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Introduction</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Frontend engineer dedicated to building sleek, responsive products that bridge engineering rigor and elegant design.
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
              Based in India, I specialize in the React and TypeScript ecosystem, building production-grade web applications. I focus on bridging complex backend APIs and data models into highly polished, intuitive, and performant dashboard flows. I advocate for cleaner code, tighter modular designs, and lightning-fast customer paint times.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-zinc-800/40 text-xs text-zinc-500 font-medium">
            <span>2+ Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>React + TypeScript Specialist</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>India</span>
          </div>
        </motion.div>

        {/* Card 2: Experience Metric (small) */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px] glass-hover glow-card border border-indigo-500/20"
          variants={itemVariants}
        >
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Zap className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              2+ Years
            </span>
            <h4 className="text-sm sm:text-base font-bold text-zinc-200">
              Active Experience
            </h4>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Delivered clean interfaces and fully-featured dashboards for early-to-mid stage startups.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Performance Focus */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] glass-hover glow-card"
          variants={itemVariants}
        >
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Zap className="w-5 h-5" />
          </div>
          <div className="mt-4">
            <h4 className="text-base sm:text-lg font-bold text-zinc-100 mb-1">Performance Tuning</h4>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Obsessed with Lighthouse metrics. Experienced in memoization, code-splitting, lazy-loading, and bundle size reduction.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Component Architecture */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] glass-hover glow-card"
          variants={itemVariants}
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Layers className="w-5 h-5" />
          </div>
          <div className="mt-4">
            <h4 className="text-base sm:text-lg font-bold text-zinc-100 mb-1">Modular Component Systems</h4>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Built shared component libraries from scratch with atomic architectures, typed props, and full accessibility compliance.
            </p>
          </div>
        </motion.div>

        {/* Card 5: Real-time & Dashboards */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] glass-hover glow-card"
          variants={itemVariants}
        >
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div className="mt-4">
            <h4 className="text-base sm:text-lg font-bold text-zinc-100 mb-1">Real-Time SaaS Dashboards</h4>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Integrating real-time streams, queue mechanisms, web-sockets, HLS stream buffers, and state sync across large dashboards.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
