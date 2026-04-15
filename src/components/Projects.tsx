import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewHook } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  Code,
  Users,
  Brain,
  Palette,
} from "lucide-react";

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
      title: "AI-Driven Blogging Platform",
      description:
        "An intelligent content creation platform leveraging AI for personalized blog post generation and content optimization.",
      tech: ["MERN", "OpenAI", "NLP", "Cloud Architecture"],
      githubUrl: "#",
      icon: <Code size={24} />,
      category: "AI/ML",
      featured: false,
    },
    {
      id: 4,
      title: "Cloud Infrastructure Dashboard",
      description:
        "A comprehensive monitoring and management solution for distributed cloud systems with real-time analytics.",
      tech: ["AWS", "Docker", "React", "Node.js", "MongoDB"],
      githubUrl: "#",
      icon: <Palette size={24} />,
      category: "Cloud/DevOps",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        variants={itemVariants}
        className={`project-card ${project.featured ? "featured" : ""}`}
        style={{
          background: "var(--surface)",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid var(--border)",
          height: project.featured ? "auto" : "280px",
          gridRow: project.featured ? "span 2" : "auto",
          cursor: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          y: -6,
          borderColor: "rgba(79,158,255,0.2)",
          transition: { duration: 0.3 },
        }}
      >
        <div
          style={{
            padding: "32px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Icon and Category */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              {project.icon}
            </div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
                background: "rgba(79,158,255,0.1)",
                padding: "4px 12px",
                borderRadius: "100px",
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: project.featured ? "24px" : "20px",
                marginBottom: "12px",
                color: "var(--text)",
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              {project.tech
                .slice(0, project.featured ? 5 : 3)
                .map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "10px",
                      color: "var(--accent2)",
                      background: "rgba(167,139,250,0.1)",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      border: "1px solid rgba(167,139,250,0.2)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              {!project.featured && project.tech.length > 3 && (
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                    padding: "4px 8px",
                  }}
                >
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "auto",
            }}
          >
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(79,158,255,0.1)",
                color: "var(--accent)",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 500,
                border: "1px solid rgba(79,158,255,0.2)",
              }}
              whileHover={{
                background: "rgba(79,158,255,0.2)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={14} />
              Code
            </motion.a>

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 500,
                  border: "1px solid var(--border)",
                }}
                whileHover={{
                  background: "rgba(255,255,255,0.05)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover Effect Overlay */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(79,158,255,0.05), rgba(167,139,250,0.05))",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "100px 48px",
        position: "relative",
      }}
    >
      {/* Section Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "56px",
        }}
      >
        <div>
          <motion.div
            variants={itemVariants}
            className="section-label"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "16px",
            }}
          >
            Featured Projects
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="section-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px,4vw,48px)",
              letterSpacing: "-0.02em",
              marginBottom: "8px",
              color: "var(--text)",
            }}
          >
            Building innovative solutions.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="section-sub"
            style={{
              color: "var(--muted)",
              fontSize: "15px",
            }}
          >
            From AI-powered tools to collaborative platforms
          </motion.p>
        </div>

        <motion.a
          variants={itemVariants}
          href="https://github.com/Vinayak-Dwivedi"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all"
          style={{
            fontSize: "13px",
            color: "var(--muted)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "color 0.2s",
            whiteSpace: "nowrap",
          }}
          whileHover={{ color: "var(--accent)" }}
        >
          View All Projects
          <ExternalLink size={16} style={{ transition: "transform 0.2s" }} />
        </motion.a>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "24px",
          gridAutoRows: "minmax(280px, auto)",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      {/* Glow Divider */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.3,
          marginTop: "80px",
        }}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 72px 24px;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .project-card.featured {
            gridrow: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
