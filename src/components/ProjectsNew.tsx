import React from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';
import { Github, ExternalLink, Users, Brain, Palette, Code2, Database, Cloud } from 'lucide-react';
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
    threshold: 0.1,
    triggerOnce: true,
  });

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

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={containerVariants}>
                <Card3D className="h-full">
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
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-electric-blue transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-cyan transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </Glassmorphism>
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
