import React from "react";
import { motion } from "framer-motion";
import { useInView as useInViewHook } from "react-intersection-observer";
import {
  Cloud,
  Brain,
  Terminal,
  Server,
  Palette,
  Smartphone,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Palette size={24} />,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      color: "var(--accent)",
    },
    {
      title: "Backend & Databases",
      icon: <Server size={24} />,
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Java Spring Boot",
        "REST APIs",
      ],
      color: "var(--accent2)",
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={24} />,
      skills: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "NLP",
        "OpenAI API",
        "LLM Integration",
      ],
      color: "var(--accent3)",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Cloud Architecture"],
      color: "#f59e0b",
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: [
        "React Native",
        "Responsive Design",
        "PWA",
        "Mobile UX",
        "Cross-Platform",
      ],
      color: "#8b5cf6",
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal size={24} />,
      skills: ["VS Code", "Git", "Webpack", "Vite", "Figma", "Agile/Scrum"],
      color: "#06b6d4",
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "100px 48px",
        position: "relative",
        background: "var(--surface)",
        borderRadius: "28px",
        margin: "0 48px",
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(79,158,255,0.04) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-header"
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
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
            Technical Expertise
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="section-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px,4vw,48px)",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              color: "var(--text)",
            }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="section-sub"
            style={{
              color: "var(--muted)",
              fontSize: "16px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A comprehensive toolkit spanning frontend, backend, AI/ML, and cloud
            technologies
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="skill-category"
              style={{
                background: "rgba(13,18,37,0.5)",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid var(--border)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                y: -4,
                borderColor: category.color,
                boxShadow: `0 0 24px ${category.color}20`,
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}80)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.05em",
                      color: category.color,
                      background: `${category.color}15`,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      border: `1px solid ${category.color}30`,
                      transition: "all 0.2s ease",
                    }}
                    whileHover={{
                      background: `${category.color}25`,
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            marginTop: "64px",
            paddingTop: "48px",
            borderTop: "1px solid var(--border)",
          }}
        >
          {[
            {
              number: "2+",
              label: "Years Experience",
              desc: "Building production applications",
            },
            {
              number: "10+",
              label: "Projects Completed",
              desc: "From concept to deployment",
            },
            {
              number: "15+",
              label: "Technologies",
              desc: "Full-stack expertise",
            },
            { number: "∞", label: "Learning", desc: "Always growing" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "48px",
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            margin: 0 24px;
            padding: 48px 24px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .skill-category {
            padding: 20px;
          }

          .section-header {
            margin-bottom: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
