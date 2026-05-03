import React from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';
import { Github, ExternalLink, Users, Brain, Palette, Code2, Smartphone, Star, Layers, Music2 } from 'lucide-react';
import Card3D from './ui/Card3D';
import Glassmorphism from './ui/Glassmorphism';
import ScrollReveal from './ui/ScrollReveal';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
  category: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.05,
    triggerOnce: true,
  });

  const heroProject = {
    id: 0,
    title: "KI Job Portal — Full-Stack Client Project",
    description:
      "End-to-end job portal ecosystem built for a real client — connecting skilled workers (Karigars) with employers across India. Delivered a complete product suite: mobile app for workers & employers, AI-powered matching, admin dashboard, marketing landing page, and a scalable backend — all shipped to production.",
    highlights: [
      "Flutter mobile app (Worker + Employer flows)",
      "AI-powered job matching & recommendations",
      "Admin panel with analytics & user management",
      "Marketing landing page",
      "Node.js + Firebase backend",
      "Real-time notifications & subscriptions",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "AI/ML", "React", "Riverpod", "Razorpay"],
    githubUrl: "https://github.com/Vinayak-Dwivedi/Portfolio",
    category: "Client Project · Full-Stack · Mobile · AI",
  };

  const crankProject = {
    id: -1,
    title: "Crank Music Production",
    description:
      "A premium, fully responsive web application designed for high-end music production and artist collaboration. Features a sleek, modern aesthetic with glassmorphism, advanced animations, and a focus on premium user experience.",
    highlights: [
      "Premium, high-end UI/UX design",
      "Fully responsive across all devices",
      "Smooth performance & animations",
      "Artist & Producer collaboration tools",
      "Integrated music player components",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/Vinayak-Dwivedi/crank-website",
    liveUrl: "https://kaleidoscopic-douhua-cfc14b.netlify.app/",
    category: "Music · Premium UI · Frontend",
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Real-Time Collaborative Whiteboard",
      description:
        "A full-stack web application enabling simultaneous multi-user collaboration on a shared digital canvas with real-time synchronization.",
      tech: ["React", "TypeScript", "Node.js", "Express", "Socket.IO"],
      githubUrl: "https://github.com/Vinayak-Dwivedi/collaborative-whiteboard",
      liveUrl: "https://vinay-whiteboard.netlify.app/",
      icon: <Users size={24} />,
      category: "Full-Stack",
      featured: true,
    },
    {
      id: 2,
      title: "AI Reddit Persona Generator",
      description:
        "A Python tool that generates detailed user personas by analyzing Reddit activity using Large Language Models with source citations.",
      tech: ["Python", "LLM", "PRAW", "Tkinter", "Together.ai"],
      githubUrl: "https://github.com/Vinayak-Dwivedi/reddit-persona-generator",
      icon: <Brain size={24} />,
      category: "AI/ML",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and TypeScript featuring smooth animations and glassmorphism UI.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Vinayak-Dwivedi/Portfolio",
      liveUrl: "https://vinayak-portfolio.netlify.app/",
      icon: <Palette size={24} />,
      category: "Frontend",
      featured: false,
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "A complete e-commerce solution with product management, shopping cart, and payment integration using modern web technologies.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/Vinayak-Dwivedi/ecommerce",
      icon: <Code2 size={24} />,
      category: "Full-Stack",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-24 px-6 lg:px-12 bg-cyber-dark">
      <ScrollReveal direction="up" delay={0.2}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/10 text-electric-blue text-sm font-mono">
                Featured Projects
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mt-6 mb-4"
            >
              What I've Built
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              A collection of projects showcasing my skills in full-stack development,
              AI/ML, and modern web technologies.
            </motion.p>
          </div>

          {/* ── Hero: KI Job Portal ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div
              className="relative rounded-2xl overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(13,18,37,0.95) 0%, rgba(20,27,45,0.95) 100%)',
                border: '1px solid rgba(168,85,247,0.35)',
                boxShadow: '0 0 60px rgba(168,85,247,0.1), 0 0 120px rgba(79,158,255,0.06)',
              }}
            >
              {/* Animated gradient top bar */}
              <div
                className="h-1 w-full"
                style={{ background: 'linear-gradient(90deg, #A855F7, #4F9EFF, #00D9FF, #A855F7)', backgroundSize: '200%' }}
              />

              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-plasma-purple/5 via-electric-blue/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <a href={heroProject.githubUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="p-8 lg:p-10">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide"
                      style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.4)', color: '#c084fc' }}
                    >
                      <Star size={11} fill="#c084fc" /> Client Project
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(79,158,255,0.12)', border: '1px solid rgba(79,158,255,0.3)', color: '#93c5fd' }}
                    >
                      Full-Stack
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(0,217,255,0.1)', border: '1px solid rgba(0,217,255,0.3)', color: '#67e8f9' }}
                    >
                      Mobile · AI · Admin
                    </span>
                  </div>

                  <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 lg:items-start">
                    <div>
                      {/* Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="p-2.5 rounded-xl"
                          style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
                        >
                          <Smartphone size={22} style={{ color: '#c084fc' }} />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#f1f5f9' }}>
                          KI Job Portal
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 max-w-2xl">
                        {heroProject.description}
                      </p>

                      {/* What was delivered */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6b7280' }}>What I Delivered</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {heroProject.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #A855F7, #00D9FF)' }} />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {heroProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#d1d5db' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <div
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                          style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.35)', color: '#c084fc' }}
                        >
                          <Github size={16} /> View Repo
                        </div>
                      </div>
                    </div>

                    {/* Side stat panel */}
                    <div
                      className="hidden lg:flex flex-col gap-3 mt-0"
                      style={{ minWidth: '160px' }}
                    >
                      {[
                        { label: 'Deliverables', value: '5+' },
                        { label: 'Tech Used', value: '8+' },
                        { label: 'Type', value: 'Client' },
                        { label: 'Platform', value: 'Mobile' },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl text-center"
                          style={{ background: 'rgba(13,18,37,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                          <div className="text-2xl font-bold" style={{ color: '#c084fc' }}>{stat.value}</div>
                          <div className="text-xs mt-1" style={{ color: '#6b7280' }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── Hero 2: Crank Music Production ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div
              className="relative rounded-2xl overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(13,18,37,0.95) 0%, rgba(20,27,45,0.95) 100%)',
                border: '1px solid rgba(0,217,255,0.35)',
                boxShadow: '0 0 60px rgba(0,217,255,0.1), 0 0 120px rgba(168,85,247,0.06)',
              }}
            >
              <div
                className="h-1 w-full"
                style={{ background: 'linear-gradient(90deg, #00D9FF, #4F9EFF, #A855F7, #00D9FF)', backgroundSize: '200%' }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-electric-blue/5 to-plasma-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <a href={crankProject.githubUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide"
                      style={{ background: 'rgba(0,217,255,0.15)', border: '1px solid rgba(0,217,255,0.4)', color: '#67e8f9' }}
                    >
                      <Music2 size={11} fill="#67e8f9" /> Music App
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc' }}
                    >
                      Premium UI
                    </span>
                  </div>

                  <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 lg:items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="p-2.5 rounded-xl"
                          style={{ background: 'rgba(0,217,255,0.15)', border: '1px solid rgba(0,217,255,0.3)' }}
                        >
                          <Music2 size={22} style={{ color: '#67e8f9' }} />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#f1f5f9' }}>
                          Crank Music Production
                        </h3>
                      </div>

                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 max-w-2xl">
                        {crankProject.description}
                      </p>

                      <div className="mb-6">
                        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6b7280' }}>Key Features</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {crankProject.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #00D9FF, #A855F7)' }} />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {crankProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#d1d5db' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <div
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                          style={{ background: 'rgba(0,217,255,0.15)', border: '1px solid rgba(0,217,255,0.35)', color: '#67e8f9' }}
                        >
                          <Github size={16} /> View Repo
                        </div>
                        {crankProject.liveUrl && (
                          <div
                            onClick={(e) => { e.preventDefault(); window.open(crankProject.liveUrl, '_blank'); }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-white/10"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f1f5f9' }}
                          >
                            <ExternalLink size={16} /> Live Demo
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
            </div>
          </motion.div>

          {/* ── Other Projects Grid ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={containerVariants}>
                <Card3D className="h-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                    <Glassmorphism
                      className="h-full p-6 relative overflow-hidden group"
                      glow={project.featured}
                      intensity="medium"
                    >
                      {/* Animated Gradient Border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-plasma-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                            {project.icon}
                          </div>
                          {project.featured && (
                            <span className="px-3 py-1 rounded-full bg-electric-blue/20 text-electric-blue text-xs font-semibold">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          <div
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-electric-blue transition-colors"
                          >
                            <Github size={16} />
                            Code
                          </div>
                          {project.liveUrl && (
                            <div
                              onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                              className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-cyan transition-colors"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </div>
                          )}
                        </div>
                      </div>
                    </Glassmorphism>
                  </a>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Vinayak-Dwivedi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-electric-blue/30 rounded-full text-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
