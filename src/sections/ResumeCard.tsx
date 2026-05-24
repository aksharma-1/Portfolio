import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Award, Download, CheckCircle } from 'lucide-react';

export const ResumeCard: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
          <FileText className="w-3.5 h-3.5" />
          <span>Curriculum Vitae</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Education &amp; Credentials
        </h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-lg">
          My academic foundation in India, core front-end certifications, and direct downloads for my technical resume.
        </p>
      </div>

      {/* Resume Grid split */}
      <div className="grid grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Resume Download Card */}
        <motion.div
          className="col-span-12 lg:col-span-5 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-zinc-800/80 hover:border-zinc-700/60 glass-hover glow-card relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1.5 font-mono">Resume download</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              Get ATS-Friendly PDF
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-6">
              My structured resume contains complete company indexes, project methodologies, operational metrics, and Indian contact coordinates. Optimized for recruitment parsing engines.
            </p>

            {/* Resume Bullet Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                <span> ATS-Optimized Clean Design</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Verified Metrics &amp; Tech Stack Pills</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Full Technical Core Breakdown</span>
              </div>
            </div>
          </div>

          {/* Real Download Trigger Button */}
          <a
            href="/Akshay_Sharma_Resume.pdf"
            download
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
          >
            <Download className="w-4 h-4 text-zinc-900 shrink-0" />
            Download Resume (PDF)
          </a>
        </motion.div>

        {/* Right Side: Education and Certifications */}
        <motion.div
          className="col-span-12 lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Card 1: Education Block */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-zinc-800/80 hover:border-zinc-700/60 glass-hover glow-card relative text-left">
            <div className="flex items-center gap-2.5 mb-6 text-indigo-400">
              <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Education</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Integrated Master of Computer Application
            </h3>
            <div className="flex justify-between items-center text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              <span>IPS Academy Indore • CGPA: 8.11</span>
              <span className="font-mono text-zinc-500">2019 – 2024</span>
            </div>
            
            <p className="text-zinc-500 text-xs sm:text-sm mt-4 leading-relaxed border-t border-zinc-900 pt-4">
              Completed an intensive, 5-year integrated curriculum focusing on advanced software engineering paradigms, client-side frameworks, database management systems, and application design. Recognized for academic performance, graduating among the top 5% of the batch.
            </p>
          </div>

          {/* Card 2: Certifications Block */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-zinc-800/80 hover:border-zinc-700/60 glass-hover glow-card relative text-left">
            <div className="flex items-center gap-2.5 mb-6 text-purple-400">
              <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Award className="w-4.5 h-4.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Professional Credentials</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between border-b border-zinc-900 pb-3.5">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-zinc-200">
                    JavaScript Certification
                  </h4>
                  <span className="text-zinc-500 text-xs">Scaler • Covered ES6+, async/await, DOM manipulations</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold shrink-0 self-start mt-0.5 font-mono">Dec 2023</span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-zinc-200">
                    MongoDB Database Design
                  </h4>
                  <span className="text-zinc-500 text-xs">Great Learning • Basic to intermediate query & schema design</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold shrink-0 self-start mt-0.5 font-mono">Dec 2022</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ResumeCard;
