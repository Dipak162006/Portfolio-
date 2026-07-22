import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import GlowCard from '../ui/GlowCard';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../../utils/animationVariants';

const Skills = () => {
  const { skills } = portfolioData;



  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading title="Technical" highlight="Skills" />

        {/* Skills Grid */}
        <motion.div 
          variants={staggerContainer(0.15, "-100px")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category) => (
            <motion.div 
              key={category.category} 
              variants={fadeInUp(0.5)}
              className="flex h-full"
            >
              <GlowCard className="hover:-translate-y-2">
                <div className="p-8 flex flex-col h-full">
                  {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 text-primary dark:bg-primary/20 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {category.category}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:scale-105 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300 cursor-default"
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

export default Skills;
