import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Gauge, ShieldCheck, Zap, CheckCircle } from 'lucide-react';

// Highly optimized, native-based animated count component to maximize 60fps performance
const AnimatedCount: React.FC<{ value: number; duration?: number; suffix?: string; prefix?: string }> = ({ 
  value, 
  duration = 1200, 
  suffix = '',
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing function for a nice modern deceleration curve (ease-out-expo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    if (elementRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(step);
          observer.disconnect();
        }
      }, { threshold: 0.1 });
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};

export const Performance: React.FC = () => {
  return (
    <section id="performance" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <Gauge className="w-3.5 h-3.5" />
          <span>Core Engineering Standards</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Diagnostics &amp; Performance Metrics
        </h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-lg">
          I build products with high standards. These verified benchmarks reflect the quality of my real-world product integrations.
        </p>
      </div>

      {/* Metrics Dashboard Layout */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Metric 1: Web Vitals Gauge (large) */}
        <motion.div
          className="col-span-12 lg:col-span-7 glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-8 border border-zinc-800/80 glass-hover glow-card relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col text-left max-w-sm">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1.5">Lighthouse Target</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
              Near-Perfect Performance
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4">
              I structure React layouts using memoized hooks, dynamic chunking, and lazy loading, producing fast Time-to-Interactive paint cycles.
            </p>
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-900">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Optimized DOM Node Depth</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Zero blocking assets during hydration</span>
              </div>
            </div>
          </div>

          {/* SVG Dials / Circular metric indicator */}
          <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
            {/* Background trace circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="64"
                className="stroke-zinc-900 fill-transparent"
                strokeWidth="10"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="64"
                className="stroke-indigo-500 fill-transparent"
                strokeWidth="10"
                strokeDasharray="402"
                initial={{ strokeDashoffset: 402 }}
                whileInView={{ strokeDashoffset: 402 - (402 * 99) / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-extrabold text-white tracking-tighter">
                <AnimatedCount value={99} />
              </span>
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">PERFORMANCE</span>
            </div>
          </div>
        </motion.div>

        {/* Metric 2: Speed Optimization (small) */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-5 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] border border-zinc-800/80 glass-hover glow-card relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Payload optimization</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">VERIFIED</span>
          </div>

          <div className="flex flex-col text-left mt-6">
            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter mb-1.5">
              <AnimatedCount value={40} suffix="%" />
            </span>
            <h4 className="text-sm sm:text-base font-bold text-zinc-200 mb-1">
              Page Load Time Reduction
            </h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Achieved by compressing image assets, implementing tree-shaking rules, and localizing CSS utilities.
            </p>
          </div>
        </motion.div>

        {/* Metric 3: Reusable components */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] border border-zinc-800/80 glass-hover glow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Zap className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left mt-6">
            <span className="text-3xl font-extrabold text-white tracking-tighter mb-1">
              <AnimatedCount value={50} suffix="+" />
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-200">
              Shared Core Library Components
            </h4>
            <p className="text-zinc-500 text-xs leading-relaxed mt-1">
              Written from scratch under strict atomic guidelines for 100% modular reusability.
            </p>
          </div>
        </motion.div>

        {/* Metric 4: Crash Rate */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] border border-zinc-800/80 glass-hover glow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left mt-6">
            <span className="text-3xl font-extrabold text-white tracking-tighter mb-1">
              <AnimatedCount value={0} />
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-200">
              High-Severity Production Bugs
            </h4>
            <p className="text-zinc-500 text-xs leading-relaxed mt-1">
              Maintained via rigorous type safety checks, local boundary errors, and sandbox routing.
            </p>
          </div>
        </motion.div>

        {/* Metric 5: Real-time API Sync */}
        <motion.div
          className="col-span-12 sm:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] border border-zinc-800/80 glass-hover glow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left mt-6">
            <span className="text-3xl font-extrabold text-white tracking-tighter mb-1">
              <AnimatedCount value={120} suffix="ms" />
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-200">
              Average API Stream Latency
            </h4>
            <p className="text-zinc-500 text-xs leading-relaxed mt-1">
              Optimized via socket queue listeners and localized state hydration structures.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Performance;
