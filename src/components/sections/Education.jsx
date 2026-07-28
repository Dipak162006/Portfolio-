import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Medal, CheckCircle2, Image, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import GlowCard from '../ui/GlowCard';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeInUp, fadeInLeft } from '../../utils/animationVariants';

const Education = () => {
  const { education, certifications } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);



  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading title="Education &" highlight="Achievements" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education (takes up 5 columns on large screens) */}
          <motion.div 
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Academic Background
              </h3>
              
              <div className="flex w-full">
                <GlowCard className="hover:shadow-lg hover:shadow-primary/10">
                  <div className="p-8 flex flex-col relative w-full h-full justify-between">
                    <span className="bg-slate-800/80 text-slate-300 border border-slate-700 px-3 py-1 rounded-full text-xs font-mono self-start mb-5">
                      {education.duration}
                    </span>
                    
                    <h4 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 leading-tight">
                      {education.degree}
                    </h4>
                    
                    <h5 className="text-lg text-primary font-semibold mb-4">
                      {education.branch}
                    </h5>
                    
                    <p className="text-slate-400 mb-8 font-medium">
                      {education.college}
                    </p>
                    
                    <div className="pt-6 border-t border-slate-700 flex items-center justify-between mt-auto">
                      <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Current CGPA</span>
                      <span className="text-2xl font-bold text-accent">{education.cgpa}</span>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Certifications & Competitions (takes up 7 columns on large screens) */}
          <motion.div 
            variants={staggerContainer(0.15, "-100px")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
              <Award className="w-7 h-7 text-accent" />
              Certifications & Hackathons
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certifications.map((cert) => {
                const CardContent = (
                  <div className="p-6 flex flex-col h-full w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 group-hover:scale-110 transition-transform">
                        {cert.highlight ? <Medal className="w-6 h-6" /> : <CheckCircle2 className="w-5 h-5" />}
                      </div>
                      <span className="bg-slate-800/80 text-slate-300 border border-slate-700 px-3 py-1 rounded-full text-xs font-mono">
                        {cert.year}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-bold text-slate-100 text-lg mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-slate-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.imageUrl && (
                      <button 
                        onClick={() => setSelectedImage(cert.imageUrl)}
                        className="mt-5 flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-cyan-400 hover:bg-slate-700 hover:border-cyan-500/60 hover:text-cyan-300 transition-all duration-300 text-sm font-medium group/btn"
                      >
                        <Image className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        View Certificate
                      </button>
                    )}
                  </div>
                );

                return (
                  <motion.div 
                    key={cert.id} 
                    variants={fadeInUp(0.4)}
                    className="flex h-full"
                  >
                    <GlowCard className="hover:-translate-y-1">
                      {CardContent}
                    </GlowCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center rounded-2xl overflow-hidden bg-slate-900 shadow-2xl shadow-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/50 hover:bg-slate-950/80 text-white rounded-full transition-colors z-10 backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Certificate" 
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
