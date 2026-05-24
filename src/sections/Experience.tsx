import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, TrendingUp } from 'lucide-react';

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  metrics: string;
}

const experiences: ExperienceData[] = [
  {
    company: 'Infinity Genesis Techso Pvt. Ltd. (Indore, India)',
    role: 'Frontend Developer',
    duration: 'July 2025 – Present',
    achievements: [
      'Built React + TypeScript UI modules for workshop management, fleet operations, and maintenance workflows; created reusable components and patterns to accelerate feature delivery.',
      'Designed responsive dashboards with HeroUI and Tailwind CSS to visualize vehicle profitability, contract KPIs, and maintenance alerts for operational teams.',
      'Integrated real-time telematics, maintenance, and finance APIs to deliver up-to-date data and reduce manual reconciliation.',
      'Implemented performance optimizations (memoization, lazy loading, and selective rendering) that improved page responsiveness for large data pages.',
      'Connected in-house microservices to the React + TypeScript frontend, improving modularity, scalability, and system maintainability.',
      'Collaborated closely with backend, data, and product teams in Agile sprints to deliver features and troubleshoot production issues.'
    ],
    technologies: ['React.js', 'TypeScript', 'HeroUI', 'Tailwind CSS', 'Microservices', 'REST APIs'],
    metrics: '+30% Feature Acceleration'
  },
  {
    company: 'Envideo Technology Pvt. Ltd. (Bhopal, India)',
    role: 'Frontend Developer',
    duration: 'Feb 2024 – May 2025',
    achievements: [
      'Developed reusable component libraries using Bootstrap and MaterialUI, accelerating development speed by 30% and ensuring consistent UI across projects.',
      'Championed a design system focused on inclusive design principles, leading to a 20% rise in positive user feedback regarding accessibility.',
      'Demonstrated strong problem-solving skills, quickly identifying and resolving critical production issues, reducing downtime by 30% and improving application stability.',
      'Resolved performance bottlenecks in the frontend code base, resulting in a 40% decrease in page load times and improved website rankings on search engines.',
      'Participated in code reviews and provided valuable feedback, leading to a 30% reduction in bugs and enhanced code quality.'
    ],
    technologies: ['React.js', 'Redux', 'Bootstrap', 'Material UI', 'Performance Optimization'],
    metrics: '-40% Page Load Latency'
  },
  {
    company: 'Cyber Instant Pvt. Ltd. (Indore, India)',
    role: 'Frontend Developer',
    duration: 'Dec 2023 – Jan 2024',
    achievements: [
      'Collaborated with cross-functional teams to implement reusable components, resulting in a 30% improvement in overall code maintainability.',
      'Ensured mobile responsiveness and accessibility using modern CSS frameworks, increasing user engagement by 25%.',
      'Participated in code reviews, bug fixing, and performance optimization, enhancing application speed by 40% and improving user experience metrics.',
      'Followed Agile development practices, contributing to a 15% increase in project delivery efficiency.'
    ],
    technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Agile Sprints', 'Responsive CSS'],
    metrics: '+30% Maintainability'
  },
  {
    company: 'Techlene Software Solutions Pvt. Ltd. (Indore, India)',
    role: 'Frontend Intern',
    duration: 'Jul 2023 – Oct 2023',
    achievements: [
      'Acquired front-end website development skills by collaborating on a team project, building a responsive website using HTML, CSS, and JavaScript, enhancing user experience and achieving compatibility across 98% of browsers.',
      'Enhanced accessibility features, resulting in a 20% increase in user satisfaction and full compliance with accessibility standards.',
      'Designed and planned a reusable React component library, reducing development time for subsequent projects by an average of 30%.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Accessibility Standards'],
    metrics: '98% Browser Compatibility'
  }
];

export const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Employment History
        </h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-lg">
          Chronological progress driving UI features, building dashboard views, and accelerating performance benchmarks.
        </p>
      </div>

      {/* Vertical Timeline Track */}
      <motion.div
        className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            className="relative"
            variants={cardVariants}
          >
            {/* Chronological Milestone Point */}
            <span className="absolute -left-[45px] md:-left-[53px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 text-indigo-400 timeline-pulse z-20">
              <Award className="w-3.5 h-3.5" />
            </span>

            {/* Glowing vertical connector highlight */}
            <div className="absolute -left-[37px] md:-left-[45px] top-9 w-[1px] h-full bg-gradient-to-b from-indigo-500/20 to-transparent z-10" />

            {/* Experience Card */}
            <div className="glass rounded-3xl p-6 sm:p-8 hover:border-zinc-700/60 glass-hover glow-card relative">
              
              {/* Card Title Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-zinc-300 font-semibold text-sm sm:text-base">
                    {exp.company}
                  </span>
                </div>
                
                {/* Date Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold self-start md:self-center">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Achievements Checklist */}
              <ul className="space-y-2 mb-6">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="text-zinc-400 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack and Impact Metrics Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-zinc-900">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-900/60 border border-zinc-800/80 text-zinc-500 text-[10px] sm:text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold select-none self-end sm:self-auto shrink-0 shadow-inner">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{exp.metrics}</span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
