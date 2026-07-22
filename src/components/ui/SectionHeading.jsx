import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animationVariants';

const SectionHeading = ({ title, highlight }) => {
  return (
    <motion.div
      variants={fadeInUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
    </motion.div>
  );
};

export default SectionHeading;
