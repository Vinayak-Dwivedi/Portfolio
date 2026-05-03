import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  disabled = false,
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 overflow-hidden';

  const variants = {
    primary: `
      bg-electric-blue text-cyber-dark
      hover:shadow-[0_0_40px_rgba(79,158,255,0.5)]
      hover:-translate-y-1
      active:translate-y-0
    `,
    secondary: `
      bg-transparent border-2 border-electric-blue text-electric-blue
      hover:bg-electric-blue/10
      hover:shadow-[0_0_30px_rgba(79,158,255,0.3)]
      hover:-translate-y-1
      active:translate-y-0
    `,
    ghost: `
      bg-transparent border border-white/20 text-white
      hover:bg-white/5
      hover:border-white/30
      hover:-translate-y-1
      active:translate-y-0
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const ButtonContent = () => (
    <>
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={false}
        whileHover={{ opacity: 0.3 }}
      />
      
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-shine"
        initial={false}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </>
  );

  const buttonClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default AnimatedButton;
