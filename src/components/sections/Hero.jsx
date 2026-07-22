import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import LiquidEther from '../effects/LiquidEther';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Hero = () => {
  const { personalInfo } = portfolioData;

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* LiquidEther strictly isolated to Hero */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen dark:mix-blend-lighten">
        <LiquidEther
          mouseForce={40}
          cursorSize={150}
          isViscous={true}
          viscous={15}
          colors={["#0f172a", "#1e293b", "#06b6d4"]}
          autoDemo
          autoSpeed={0.8}
          autoIntensity={5.0}
          isBounce={true}
          resolution={0.5}
        />
      </div>

      {/* Smooth bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:opacity-20 hidden md:block z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:opacity-20 hidden md:block z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl flex flex-col items-center"
          >
            {/* Greeting & Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 select-none"
            >
              Hello, I am{" "}
              <span className="block sm:inline bg-gradient-to-r from-white via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-3xl font-bold text-slate-300 tracking-wide mb-8"
            >
              {personalInfo.title.split('|')[0].trim()} <span className="text-primary px-2">•</span> {personalInfo.title.split('|')[1]?.trim()}
            </motion.h2>

            {/* Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <a 
                href="#projects" 
                className="btn-primary group flex items-center justify-center gap-2"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="btn-outline flex items-center justify-center gap-2"
              >
                Download Resume
                <Download className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 w-full flex flex-col items-center gap-4"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect with me
              </p>
              <div className="flex gap-6">
                <a 
                  href={personalInfo.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a 
                  href={personalInfo.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-110 transform"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a 
                  href="#contact"
                  className="text-slate-400 hover:text-red-500 transition-colors hover:scale-110 transform"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
