import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';
import { Cloud, Brain, Terminal, Server, Palette, Smartphone, Code2, Database } from 'lucide-react';
import Glassmorphism from './ui/Glassmorphism';
import ScrollReveal from './ui/ScrollReveal';

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

  const [activeCategory, setActiveCategory] = useState(0);

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
        "Framer Motion"
      ],
      color: "text-electric-blue",
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
        "GraphQL"
      ],
      color: "text-plasma-purple",
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
        "PyTorch"
      ],
      color: "text-neon-cyan",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Cloud Architecture", "Netlify"],
      color: "text-matrix-green",
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: [
        "React Native",
        "Responsive Design",
        "PWA",
        "Mobile UX",
        "iOS",
        "Android"
      ],
      color: "text-hot-pink",
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
    <section id="skills" ref={ref} className="py-24 px-6 lg:px-12 bg-cyber-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent" />
      
      <ScrollReveal direction="up" delay={0.2}>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/10 text-electric-blue text-sm font-mono">
                Technical Skills
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mt-6 mb-4"
            >
              My Arsenal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              A comprehensive toolkit of technologies and frameworks I use to bring
              ideas to life.
            </motion.p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === index
                    ? 'bg-electric-blue text-cyber-dark shadow-[0_0_30px_rgba(79,158,255,0.4)]'
                    : 'bg-cyber-surface/50 text-gray-400 border border-white/10 hover:border-electric-blue/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Glassmorphism className="p-8" intensity="medium" glow>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 ${skillCategories[activeCategory].color}`}>
                    {skillCategories[activeCategory].icon}
                  </div>
                  <h3 className="text-2xl font-bold">{skillCategories[activeCategory].title}</h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-3"
                >
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={containerVariants}
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-electric-blue/50 hover:bg-electric-blue/10 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className={`text-sm font-medium ${skillCategories[activeCategory].color}`}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </Glassmorphism>
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Completed", value: "15+" },
              { label: "Technologies", value: "30+" },
              { label: "Happy Clients", value: "10+" },
            ].map((stat, index) => (
              <Glassmorphism key={index} className="p-6 text-center" intensity="low">
                <div className="text-3xl font-bold text-electric-blue mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Glassmorphism>
            ))}
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
