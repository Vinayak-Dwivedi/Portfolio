import React from "react";
import { motion } from "framer-motion";
import { useInView as useInViewHook } from "react-intersection-observer";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Award,
  Target,
  Brain,
  Cloud,
} from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const timelineItems = [
    {
      year: "2022",
      title: "Started Development Journey",
      description: "Began exploring full-stack development with MERN stack",
      icon: <Calendar size={16} />,
    },
    {
      year: "2023",
      title: "AI/ML Integration",
      description: "Dived into machine learning and AI-powered applications",
      icon: <Brain size={16} />,
    },
    {
      year: "2024",
      title: "Cloud Architecture",
      description: "Focused on scalable cloud solutions and DevOps practices",
      icon: <Cloud size={16} />,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "100px 48px",
        position: "relative",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="section-header"
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "16px",
            }}
          >
            About Me
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px,4vw,48px)",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              color: "var(--text)",
            }}
          >
            Passionate Software Developer
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "16px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Building intelligent systems that bridge the gap between human
            creativity and machine intelligence
          </p>
        </motion.div>

        {/* About Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Left Column - Personal Info */}
          <motion.div
            variants={itemVariants}
            style={{
              background: "var(--surface)",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <User size={28} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  Vinayak Dwivedi
                </h3>
                <p
                  style={{
                    color: "var(--accent)",
                    fontSize: "14px",
                    margin: "4px 0 0 0",
                  }}
                >
                  Software Developer
                </p>
              </div>
            </div>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              I am a Software Developer with a passion for building intelligent
              systems and scalable cloud infrastructure. My expertise spans the
              entire development lifecycle, from architecting robust back-end
              services to creating intuitive front-end experiences. I am driven
              by the challenge of solving complex problems and am actively
              developing my skills at the intersection of software engineering,
              artificial intelligence, and cloud computing.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Mail size={18} style={{ color: "var(--accent)" }} />
                <span style={{ color: "var(--text)", fontSize: "14px" }}>
                  vinayakdwivedi2023@gmail.com
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <MapPin size={18} style={{ color: "var(--accent)" }} />
                <span style={{ color: "var(--text)", fontSize: "14px" }}>
                  Available for remote work
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Target size={18} style={{ color: "var(--accent)" }} />
                <span style={{ color: "var(--text)", fontSize: "14px" }}>
                  Open to collaborations
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline & Interests */}
          <motion.div variants={itemVariants}>
            {/* Timeline */}
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid var(--border)",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--text)",
                  marginBottom: "24px",
                }}
              >
                Journey & Milestones
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      gap: "16px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "rgba(79,158,255,0.1)",
                        border: "1px solid var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent)",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "12px",
                          color: "var(--accent)",
                          marginBottom: "4px",
                        }}
                      >
                        {item.year}
                      </div>
                      <h4
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 600,
                          fontSize: "16px",
                          color: "var(--text)",
                          marginBottom: "4px",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          color: "var(--muted)",
                          fontSize: "13px",
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--text)",
                  marginBottom: "24px",
                }}
              >
                Research Interests
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  "Cloud Architecture and fundamentals of Distributed Systems",
                  "Artificial Intelligence and Machine Learning applications",
                  "Blockchain and Web3 technologies",
                  "Scalable system design and microservices",
                ].map((interest, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px",
                      background: "rgba(79,158,255,0.05)",
                      borderRadius: "8px",
                      border: "1px solid rgba(79,158,255,0.1)",
                    }}
                  >
                    <Award size={16} style={{ color: "var(--accent)" }} />
                    <span style={{ color: "var(--text)", fontSize: "14px" }}>
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 72px 24px;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
