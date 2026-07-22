import React from 'react';
import BorderGlow from './BorderGlow';

const GlowCard = ({ children, className = '', containerClassName = '', innerClassName = '' }) => {
  return (
    <div className={`flex w-full h-full ${containerClassName}`}>
      <BorderGlow
        className={`w-full h-full group bg-slate-900/60 border border-slate-800 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 ${className}`}
        backgroundColor="transparent"
        borderRadius={16}
        glowColor="200 80 60"
        fillOpacity={0}
      >
        <div className={`flex flex-col h-full w-full ${innerClassName}`}>
          {children}
        </div>
      </BorderGlow>
    </div>
  );
};

export default GlowCard;
