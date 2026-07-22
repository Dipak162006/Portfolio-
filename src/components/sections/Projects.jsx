import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import GlowCard from '../ui/GlowCard';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../../utils/animationVariants';

// Custom Github icon since brand icons were removed from lucide-react core
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Projects = () => {
  const { projects } = portfolioData;



  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading title="Featured" highlight="Projects" />

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer(0.2, "-100px")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={fadeInUp(0.6)}
              className="flex h-full"
            >
              <GlowCard className="hover:-translate-y-2">
                <div className="p-8 flex flex-col h-full">
                  {/* Top Header: Icons */}
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-primary/10 text-primary dark:bg-primary/20 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-transform flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label={`Github repo for ${project.title}`}
                  >
                    <GithubIcon className="w-6 h-6" />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;
