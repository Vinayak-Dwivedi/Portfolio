import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  speed?: number;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className = '',
  intensity = 'medium',
  speed = 8,
}) => {
  const gradients = {
    low: 'from-electric-blue/10 via-plasma-purple/10 to-neon-cyan/10',
    medium: 'from-electric-blue/20 via-plasma-purple/20 to-neon-cyan/20',
    high: 'from-electric-blue/30 via-plasma-purple/30 to-neon-cyan/30',
  };

  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${gradients[intensity]} ${className}`}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    />
  );
};

export default AnimatedGradient;
