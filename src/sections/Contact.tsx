import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MessageSquare, CheckCircle } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate high-quality API response lag
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset status back to idle after a few seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Let's Collaborate
        </h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-lg">
          I am currently open to new frontend developer, React engineer, or full-time UI positions. Drop a line below.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Direct Channels */}
        <motion.div
          className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Card 1: Main Info */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-zinc-800/80 hover:border-zinc-700/60 glass-hover glow-card relative flex-1 text-left flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1.5 font-mono">Direct Communication</span>
              <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                Chat Directly
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-6">
                Prefer standard email correspondence or direct LinkedIn messaging? Reach out through my verified channels.
              </p>
            </div>

            {/* Social Anchors List */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:akshaysharma58194@gmail.com"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-850 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-zinc-300 hover:text-white transition-all group"
              >
                <span className="w-8 h-8 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Email Address</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono">akshaysharma58194@gmail.com</span>
                </div>
              </a>

              <a
                href="www.linkedin.com/in/akshay-sharma-b30720235"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-850 hover:border-indigo-500/30 hover:bg-indigo-500/5 text-zinc-300 hover:text-white transition-all group"
              >
                <span className="w-8 h-8 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all shrink-0">
                  <LinkedinIcon className="w-4 h-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">LinkedIn Profile</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono">LinkedIn</span>
                </div>
              </a>

              <a
                href="tel:+919516576797"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-850 hover:border-blue-500/30 hover:bg-blue-500/5 text-zinc-300 hover:text-white transition-all group"
              >
                <span className="w-8 h-8 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Phone &amp; Location</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono">+91 95165 76797 • Indore, India</span>
                </div>
              </a>

              <a
                href="https://github.com/aksharma-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-850 hover:border-zinc-700 hover:bg-zinc-800/20 text-zinc-300 hover:text-white transition-all group"
              >
                <span className="w-8 h-8 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-200 group-hover:border-zinc-700 transition-all shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">GitHub Profile</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono">github.com/akshaysharma</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          className="col-span-12 lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-zinc-800/80 hover:border-zinc-700/60 glow-card relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Animate presence overlay for simulated success */}
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                className="absolute inset-0 z-20 rounded-3xl bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center select-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                >
                  <CheckCircle className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-zinc-500 text-sm max-w-sm">
                  Thank you for reaching out. Akshay Sharma will review your proposal and get back to you shortly.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left h-full justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. sarah.jenkins@company.com"
                  className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project requirements or hiring pipeline details..."
                  className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-all resize-none"
                />
              </div>
            </div>

            {/* Glowing CTA Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 disabled:opacity-50 transition-colors shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
            >
              {status === 'idle' ? (
                <>
                  Send Proposal
                  <Send className="w-4 h-4 text-zinc-900 shrink-0" />
                </>
              ) : (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Proposal...
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
