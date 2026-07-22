import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Building } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import GlowCard from '../ui/GlowCard';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInLeft } from '../../utils/animationVariants';

const Experience = () => {
  const { experience } = portfolioData;



  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading title="Work" highlight="Experience" />

        {/* Experience Timeline */}
        <motion.div 
          variants={staggerContainer(0.3, "-100px")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent"
        >
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              variants={fadeInLeft(0.6)}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                <Briefcase className="w-4 h-4" />
              </div>
              
              {/* Experience Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex">
                <GlowCard className="hover:-translate-y-1">
                  <div className="p-6 flex flex-col h-full w-full">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 gap-2">
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">{exp.position}</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent whitespace-nowrap self-start xl:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>
                
                <h4 className="text-primary font-medium text-lg mb-5 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  {exp.company}
                </h4>
                
                <ul className="space-y-3">
                  {exp.description.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                  </ul>
                  </div>
                </GlowCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Experience;
