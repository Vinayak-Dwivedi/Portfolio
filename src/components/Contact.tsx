import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewHook } from "react-intersection-observer";
import { Mail, Send, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

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

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Vinayak-Dwivedi",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vinayak-dwivedi-4b280b247/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:vinayakdwivedi2023@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
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
              Get In Touch
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
              Let's Create Something Amazing
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "16px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>

          {/* Contact Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "rgba(13,18,37,0.5)",
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "var(--text)",
                    marginBottom: "32px",
                  }}
                >
                  Send a Message
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--muted)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        color: "var(--text)",
                        fontSize: "14px",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--muted)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        color: "var(--text)",
                        fontSize: "14px",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--muted)",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        color: "var(--text)",
                        fontSize: "14px",
                        resize: "vertical",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: "var(--accent)",
                      color: "#050810",
                      padding: "14px 32px",
                      borderRadius: "100px",
                      fontWeight: 600,
                      fontSize: "14px",
                      border: "none",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.2s",
                    }}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid #050810",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <MessageSquare size={16} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        color: "var(--accent3)",
                        fontSize: "14px",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Thank you for your message! I'll get back to you soon.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              {/* Quick Contact */}
              <div
                style={{
                  background: "rgba(13,18,37,0.5)",
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(10px)",
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
                  Quick Contact
                </h3>

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
                </div>

                <div
                  style={{
                    marginTop: "32px",
                    paddingTop: "24px",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      marginBottom: "20px",
                    }}
                  >
                    Feel free to reach out for collaborations, project
                    discussions, or just to say hello!
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "8px",
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--muted)",
                          textDecoration: "none",
                        }}
                        whileHover={{
                          background: "var(--accent)",
                          color: "#050810",
                          y: -2,
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div
                style={{
                  background: "rgba(79,158,255,0.05)",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(79,158,255,0.2)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "var(--accent)",
                    marginBottom: "12px",
                  }}
                >
                  Response Time
                </h4>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "14px",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  I typically respond within 24-48 hours. For urgent matters,
                  please mention it in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          section {
            margin: 0 24px;
            padding: 48px 24px;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
