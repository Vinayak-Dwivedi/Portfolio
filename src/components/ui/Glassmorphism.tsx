import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphismProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  glow?: boolean;
  border?: boolean;
}

const Glassmorphism: React.FC<GlassmorphismProps> = ({
  children,
  className = '',
  intensity = 'medium',
  glow = false,
  border = true,
}) => {
  const blurIntensity = {
    low: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    high: 'backdrop-blur-xl',
  };

  const bgIntensity = {
    low: 'bg-cyber-surface/40',
    medium: 'bg-cyber-surface/60',
    high: 'bg-cyber-surface/80',
  };

  return (
    <motion.div
      className={`
        ${blurIntensity[intensity]}
        ${bgIntensity[intensity]}
        ${border ? 'border border-white/10' : ''}
        ${glow ? 'shadow-[0_0_40px_rgba(79,158,255,0.2)]' : 'shadow-xl'}
        rounded-2xl
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={glow ? { boxShadow: '0 0 60px rgba(79,158,255,0.4)' } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Glassmorphism;
