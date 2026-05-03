import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CustomCursor from "./components/CustomCursor";
import Hero from "./components/HeroNew";
import Projects from "./components/ProjectsNew";
import Navbar from "./components/Navbar";
import Skills from "./components/SkillsNew";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/ui/SmoothScroll";
import Chatbot from "./components/Chatbot/Chatbot";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="loading-content"
        >
          <h1>Vinayak_Void</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="app">
        <CustomCursor />
        <div className="noise" />
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </SmoothScroll>
  );
};

export default App;
