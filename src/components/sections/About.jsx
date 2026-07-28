import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Cpu, Database, Award, Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { personalInfo } = portfolioData;

  const stats = [
    {
      id: 1,
      title: "Real-World Systems",
      desc: "4+ Full-Stack Apps Built",
      icon: <Database className="w-6 h-6 text-primary" />
    },
    {
      id: 2,
      title: "AI/ML Integration",
      desc: "TensorFlow & Groq APIs",
      icon: <Cpu className="w-6 h-6 text-accent" />
    },
    {
      id: 3,
      title: "Full-Stack Architecture",
      desc: "MERN, PHP & Flask",
      icon: <UserCheck className="w-6 h-6 text-primary" />
    },
    {
      id: 4,
      title: "Experience",
      desc: "3+ Internships",
      icon: <Briefcase className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 bg-white dark:bg-slate-900/50 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200">
              Transforming Ideas into Intelligent Web Apps
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              As an advanced B.Tech IT student, I specialize in architecting full-stack solutions using <strong className="text-slate-800 dark:text-slate-200 font-medium">MERN, PHP, and Flask</strong>. My core expertise lies in bridging the gap between robust web development and artificial intelligence.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              I am deeply passionate about integrating machine learning models like <strong className="text-slate-800 dark:text-slate-200 font-medium">MediaPipe, TensorFlow, and Groq API</strong> into scalable applications to solve real-world problems. Whether it's an AI-powered sign language translator or a smart government assistant, I focus on performance, user experience, and modern system design.
            </p>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className="glass-card bg-slate-50 dark:bg-slate-800/40 p-6 flex flex-col items-start gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-slate-200 dark:border-slate-700/50"
              >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold text-lg">{stat.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-snug">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default About;
