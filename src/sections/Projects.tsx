import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Play, Bell, CheckCircle2 } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  gradient: string; // Tailwind gradient classes
  mockup: React.ReactNode;
}

export const Projects: React.FC = () => {
  // Mock states to make the HTML/CSS widgets interactive
  const [medicoStatus, setMedicoStatus] = useState<Record<string, string>>({
    'Dr. Akshay Sharma': 'Available',
    'Dr. Sarah Kapur': 'On Call',
    'Dr. Rohan Dev': 'Offline',
  });

  const [receiptVehicle, setReceiptVehicle] = useState('MH-12-AS-2026');
  const [receiptState, setReceiptState] = useState('Idle'); // Idle, Generating, Success
  const [isStreaming] = useState(true);

  const toggleDoctorStatus = (doc: string) => {
    const statuses = ['Available', 'On Call', 'Offline'];
    const currentIdx = statuses.indexOf(medicoStatus[doc]);
    const nextStatus = statuses[(currentIdx + 1) % statuses.length];
    setMedicoStatus({ ...medicoStatus, [doc]: nextStatus });
  };

  const handleGenerateReceipt = () => {
    setReceiptState('Generating');
    setTimeout(() => {
      setReceiptState('Success');
      setTimeout(() => setReceiptState('Idle'), 3000);
    }, 1500);
  };

  const projectsList: Project[] = [
    {
      id: 'medico',
      title: 'Medico – Hospitalization Admin Dashboard',
      description: 'A robust clinic administrative panel managing doctor pipelines and appointments with sub-second dashboard refreshes.',
      tech: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      features: [
        'Real-time doctor roster with custom active toggles',
        'Intuitive patient reservation queue system',
        'Sleek status analytics charts & responsive metrics'
      ],
      githubUrl: 'https://github.com',
      demoUrl: 'https://github.com',
      gradient: 'from-blue-600/10 via-indigo-600/5 to-transparent',
      mockup: (
        <div className="w-full h-full bg-zinc-950/80 rounded-2xl border border-zinc-800/80 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
          {/* Mockup Header bar */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">Medico Dashboard</span>
            <span className="w-4 h-4 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-[8px]">v1</span>
          </div>

          {/* Roster list */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1 px-1">
              <span>Doctor</span>
              <span>Availability</span>
            </div>
            {Object.entries(medicoStatus).map(([name, status]) => (
              <div
                key={name}
                onClick={() => toggleDoctorStatus(name)}
                className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-zinc-900/50 border border-zinc-850 hover:border-zinc-800 transition-colors cursor-pointer"
              >
                <span className="text-xs text-zinc-300 font-medium">{name}</span>
                <span className="flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    status === 'Available' ? 'bg-emerald-500 timeline-pulse' : status === 'On Call' ? 'bg-amber-500' : 'bg-red-500'
                  }`} />
                  <span className="text-[9px] text-zinc-500 font-bold uppercase">{status}</span>
                </span>
              </div>
            ))}
          </div>

          <p className="text-[9px] text-zinc-600 mt-4 text-center">
            💡 Click on doctor rows to dynamically toggle state variables.
          </p>
        </div>
      )
    },
    {
      id: 'toll',
      title: 'Cross-Platform Toll Management System',
      description: 'High-speed administrative desktop and mobile terminal processing payment receipts and exporting audit sheets.',
      tech: ['React.js', 'Electron.js', 'React Native', 'Redux', 'Node.js'],
      features: [
        'Secure terminal binding using Electron containers',
        'On-the-fly digital receipt layouts & caching',
        'Fast local export triggers for Excel and PDF reports'
      ],
      githubUrl: 'https://github.com',
      demoUrl: 'https://github.com',
      gradient: 'from-purple-600/10 via-purple-600/5 to-transparent',
      mockup: (
        <div className="w-full h-full bg-zinc-950/80 rounded-2xl border border-zinc-800/80 p-4 flex flex-col justify-between text-left select-none relative">
          {/* Mockup Header bar */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">Toll Terminal v2.4</span>
            <span className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[8px] font-bold">Electron</span>
          </div>

          {/* Receipt Form Container */}
          <div className="flex flex-col gap-2 bg-zinc-900/40 border border-zinc-850 p-2.5 rounded-xl">
            <span className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest">Active Receipt Gate #4</span>
            
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-500">Vehicle:</span>
                <input
                  type="text"
                  value={receiptVehicle}
                  onChange={(e) => setReceiptVehicle(e.target.value.toUpperCase())}
                  className="bg-zinc-950 border border-zinc-800 text-zinc-200 text-[10px] px-2 py-0.5 rounded text-right w-28 focus:outline-none focus:border-purple-500/50 uppercase font-mono"
                />
              </div>
              <div className="flex justify-between items-center text-[11px] mt-1">
                <span className="text-zinc-500">Fare Amount:</span>
                <span className="text-zinc-300 font-mono font-bold">₹120.00</span>
              </div>
            </div>

            <button
              onClick={handleGenerateReceipt}
              disabled={receiptState === 'Generating'}
              className="mt-3 w-full py-1.5 rounded bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer disabled:opacity-50"
            >
              {receiptState === 'Idle' && 'Generate Receipt'}
              {receiptState === 'Generating' && 'Generating...'}
              {receiptState === 'Success' && '✓ SUCCESS (Paid)'}
            </button>
          </div>
          <div className="flex gap-2 justify-between mt-3 text-[9px] text-zinc-500">
            <span>Gate status: 🟢 CONNECTED</span>
            <span>Local Sync: ACTIVE</span>
          </div>
        </div>
      )
    },
    {
      id: 'vms',
      title: 'Video Management System (VMS) Console',
      description: 'Enterprise live camera stream integrator supporting buffer listeners, container deployment, and alert loops.',
      tech: ['React.js', 'Redux', 'RabbitMQ', 'Docker', 'HLS.js'],
      features: [
        'Responsive multi-camera grids optimized with HLS playback',
        'Simultaneous Docker container deployment',
        'Direct automated Telegram alert sync via queue listeners'
      ],
      githubUrl: 'https://github.com',
      demoUrl: 'https://github.com',
      gradient: 'from-emerald-600/10 via-emerald-600/5 to-transparent',
      mockup: (
        <div className="w-full h-full bg-zinc-950/80 rounded-2xl border border-zinc-800/80 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
          {/* Mockup Header bar */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">VMS Monitor Room</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 timeline-pulse" />
              <span className="text-[8px] text-emerald-400 font-bold uppercase">LIVE FEED</span>
            </span>
          </div>

          {/* Video stream mockup box */}
          <div className="relative aspect-video rounded-xl bg-zinc-900 overflow-hidden border border-zinc-850 flex items-center justify-center">
            {isStreaming ? (
              <div className="absolute inset-0 flex flex-col justify-between p-2">
                <span className="px-1.5 py-0.5 rounded bg-black/60 border border-zinc-800 text-[8px] text-zinc-300 font-mono self-start uppercase">
                  CAM_NORTH_02
                </span>
                
                {/* Simulated scanlines/loading */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/4 w-full animate-pulse-slow pointer-events-none" />

                {/* HLS Stream seekbar preview */}
                <div className="w-full bg-black/40 backdrop-blur-sm p-1 rounded border border-zinc-800/30 flex items-center gap-2 self-end mt-auto">
                  <Play className="w-2.5 h-2.5 text-zinc-300 shrink-0" />
                  <div className="w-full h-1 rounded-full bg-zinc-700 overflow-hidden">
                    <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                  </div>
                  <span className="text-[7px] text-zinc-400 font-mono shrink-0">HLS BUFFER</span>
                </div>
              </div>
            ) : (
              <span className="text-[10px] text-zinc-600 uppercase font-bold">Stream Offline</span>
            )}
          </div>

          {/* Telegram notification push overlay */}
          <div className="mt-2.5 bg-indigo-500/10 border border-indigo-500/20 p-2 rounded-lg flex items-center gap-2 text-indigo-300">
            <Bell className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] text-indigo-400 font-bold uppercase tracking-wider">Telegram Alert Triggered</span>
              <span className="text-[9px] text-zinc-400 leading-none">Motion Alert: Gate A (1s ago)</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <Code className="w-3.5 h-3.5" />
          <span>SaaS Showcases</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Featured Engineering Projects
        </h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-lg">
          Explore interactive layouts representing high-performance platforms, stream queues, and custom desktop terminals.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-12">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            className={`glass rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center border border-zinc-800/80 hover:border-zinc-700/60 glass-hover glow-card relative overflow-hidden ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Background Accent Gradients */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none opacity-30`} />

            {/* Project Details */}
            <div className="w-full lg:w-1/2 flex flex-col text-left z-10">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1.5">Project 0{index + 1}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Bullet Features Checklist */}
              <div className="flex flex-col gap-2 mb-6">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack pills */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-zinc-400 text-[10px] sm:text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 text-xs transition-colors cursor-pointer"
                >
                  Launch Application
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Live Interactive HTML Mockup Wrapper */}
            <div className="w-full lg:w-1/2 aspect-[4/3] max-w-[400px] flex items-center justify-center p-3 rounded-2xl bg-zinc-900/20 border border-zinc-850/60 backdrop-blur-sm z-10">
              {project.mockup}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
