import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string; // Tailwind class
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    color: 'indigo',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Material UI', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'HeroUI', level: 75 }
    ]
  },
  {
    title: 'State Management',
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    color: 'purple',
    skills: [
      { name: 'Redux Toolkit', level: 90 },
      { name: 'Redux', level: 90 }
    ]
  },
  {
    title: 'Backend & Tooling',
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    color: 'emerald',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'RabbitMQ', level: 70 },
      { name: 'Docker', level: 70 },
      { name: 'Postman', level: 88 }
    ]
  }
];

// Interactive cloud flat list for beautiful floating tags
const cloudTechs = [
  { name: 'React.js', glow: 'shadow-indigo-500/10 border-indigo-500/20 text-indigo-300' },
  { name: 'TypeScript', glow: 'shadow-blue-500/10 border-blue-500/20 text-blue-300' },
  { name: 'JavaScript', glow: 'shadow-yellow-500/10 border-yellow-500/20 text-yellow-300' },
  { name: 'Vue.js', glow: 'shadow-emerald-500/10 border-emerald-500/20 text-emerald-300' },
  { name: 'Tailwind CSS', glow: 'shadow-teal-500/10 border-teal-500/20 text-teal-300' },
  { name: 'Redux Toolkit', glow: 'shadow-purple-500/10 border-purple-500/20 text-purple-300' },
  { name: 'Node.js', glow: 'shadow-green-500/10 border-green-500/20 text-green-300' },
  { name: 'Docker', glow: 'shadow-cyan-500/10 border-cyan-500/20 text-cyan-300' },
  { name: 'RabbitMQ', glow: 'shadow-orange-500/10 border-orange-500/20 text-orange-300' },
  { name: 'MongoDB', glow: 'shadow-emerald-500/10 border-emerald-500/20 text-emerald-300' },
  { name: 'Material UI', glow: 'shadow-blue-500/10 border-blue-500/20 text-blue-300' },
  { name: 'Express.js', glow: 'shadow-zinc-500/10 border-zinc-500/20 text-zinc-300' },
  { name: 'HeroUI', glow: 'shadow-pink-500/10 border-pink-500/20 text-pink-300' }
];

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Technical Skillset &amp; Proficiency
        </h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-lg">
          My primary development toolsets, state management libraries, and container tools scored by deployment capability.
        </p>
      </div>

      {/* Main Categories Grid */}
      <motion.div
        className="grid grid-cols-12 gap-6 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="col-span-12 md:col-span-6 lg:col-span-4 glass rounded-3xl p-6 sm:p-8 hover:border-zinc-800 glass-hover glow-card relative"
            variants={itemVariants}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-900">
              <span className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                {category.icon}
              </span>
              <h3 className="font-bold text-zinc-100 text-base sm:text-lg">
                {category.title}
              </h3>
            </div>

            {/* Proficiency Bars */}
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="text-zinc-300">{skill.name}</span>
                    <span className="text-zinc-500">{skill.level}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        category.color === 'indigo'
                          ? 'from-indigo-500 to-indigo-400'
                          : category.color === 'purple'
                          ? 'from-purple-500 to-purple-400'
                          : 'from-emerald-500 to-emerald-400'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Tech Cloud */}
      <motion.div
        className="glass rounded-3xl p-8 border border-zinc-800/80 hover:border-zinc-800/90 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">Micro-interactions</span>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Interactive Cloud
          </h3>
          <p className="text-zinc-500 text-xs sm:text-sm">
            Quick-glance visual map. Hover over items to highlight technology specific variables.
          </p>
        </div>

        {/* Cloud flex badge list */}
        <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start pt-2">
          {cloudTechs.map((tech, idx) => (
            <motion.span
              key={tech.name}
              className={`px-4 py-2 rounded-xl bg-zinc-900/60 border text-xs sm:text-sm font-semibold select-none cursor-pointer shadow transition-all ${tech.glow}`}
              whileHover={{
                scale: 1.08,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02, duration: 0.3 }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
