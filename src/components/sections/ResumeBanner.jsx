import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const ResumeBanner = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="resume" className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50 mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Add High-Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Full-Stack & AI Skills</span> to Your Team?
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            I am actively seeking internship opportunities and entry-level positions where I can leverage my expertise in MERN, PHP, Flask, and AI integrations to build scalable solutions.
          </p>
          
          <a 
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1 active:scale-95"
          >
            Download Official Resume (PDF)
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeBanner;
