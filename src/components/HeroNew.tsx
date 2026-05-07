import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Cloud } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import Glassmorphism from './ui/Glassmorphism';
import ScrollReveal from './ui/ScrollReveal';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79, 158, 255, 0.5)';
        ctx.fill();

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(79, 158, 255, ${0.2 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark">
      {/* Neural Network Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Orb */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="space-y-8">
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/10"
              >
                <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                <span className="text-electric-blue text-sm font-mono">Software Developer & AI Enthusiast</span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <AnimatedText text="Building" className="text-white" delay={0.5} type="reveal" />
                <br />
                <AnimatedText text="Intelligent" className="text-electric-blue" delay={0.8} type="reveal" />
                <br />
                <AnimatedText text="Systems." className="text-white" delay={1.1} type="reveal" />
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="text-gray-400 text-lg max-w-md leading-relaxed"
              >
                Full-stack developer passionate about creating intelligent software
                solutions that bridge the gap between human creativity and machine
                intelligence.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-electric-blue text-cyber-dark rounded-full font-semibold hover:shadow-[0_0_40px_rgba(79,158,255,0.5)] transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="https://github.com/Vinayak-Dwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right Content - Profile & Stats */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="relative">
              {/* Profile Image with Orbital Rings */}
              <motion.div
                style={{ y: y2 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-electric-blue/30 rounded-full animate-spin-slow" />
                
                {/* Middle Ring */}
                <div className="absolute inset-8 border-2 border-neon-cyan/30 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
                
                {/* Inner Ring */}
                <div className="absolute inset-16 border-2 border-plasma-purple/30 rounded-full animate-float" />
                
                {/* Profile Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-electric-blue/50 shadow-[0_0_40px_rgba(79,158,255,0.4)]">
                  <img
                    src="/media/profile_pic.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Stats */}
              <Glassmorphism className="absolute -left-4 top-1/4 px-4 py-3 animate-float" intensity="high">
                <div className="text-2xl font-bold text-electric-blue">2+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </Glassmorphism>

              <Glassmorphism className="absolute -right-4 bottom-1/4 px-4 py-3 animate-float" style={{ animationDelay: '2s' }} intensity="high">
                <div className="text-2xl font-bold text-neon-cyan">15+</div>
                <div className="text-xs text-gray-400">Projects Built</div>
              </Glassmorphism>

              {/* Tech Icons */}
              <motion.div
                className="absolute top-0 right-0 flex gap-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                {[Code2, Database, Cloud].map((Icon, i) => (
                  <Glassmorphism key={i} className="p-2" intensity="medium">
                    <Icon size={20} className="text-electric-blue" />
                  </Glassmorphism>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-electric-blue to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
