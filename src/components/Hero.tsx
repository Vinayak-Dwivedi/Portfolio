import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  ExternalLink,
  Code,
  Database,
  Cloud,
} from "lucide-react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number;
    let particles: Particle[] = [];
    let mouse = { x: -999, y: -999 };

    class Particle {
      x: number = 0;
      y: number = 0;
      ox: number = 0;
      oy: number = 0;
      vx: number = 0;
      vy: number = 0;
      r: number = 0;
      a: number = 0;
      hue: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.ox = this.x;
        this.oy = this.y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 1.5 + 0.3;
        this.a = Math.random() * 0.6 + 0.1;
        this.hue = Math.random() < 0.3 ? 220 : Math.random() < 0.5 ? 260 : 160;
      }

      update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x += (dx / dist) * force * 2;
          this.y += (dy / dist) * force * 2;
        }

        this.x += (this.ox - this.x) * 0.04 + this.vx;
        this.y += (this.oy - this.y) * 0.04 + this.vy;
        this.ox += this.vx;
        this.oy += this.vy;

        if (this.ox < 0) this.ox = W;
        if (this.ox > W) this.ox = 0;
        if (this.oy < 0) this.oy = H;
        if (this.oy > H) this.oy = 0;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${this.hue},80%,70%,${this.a})`;
        ctx!.fill();
      }
    }

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 200; i++) particles.push(new Particle());
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const a = (1 - d / 90) * 0.12;
            ctx.strokeStyle = `rgba(79,158,255,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      const g = ctx.createRadialGradient(
        W * 0.7,
        H * 0.3,
        0,
        W * 0.7,
        H * 0.3,
        W * 0.7,
      );
      g.addColorStop(0, "rgba(79,158,255,0.04)");
      g.addColorStop(0.5, "rgba(167,139,250,0.02)");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();
      requestAnimationFrame(loop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = orbCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 880;
    canvas.height = 880;
    const W = canvas.width;
    const H = canvas.height;
    let t = 0;

    const noise = (x: number, y: number, z: number) => {
      const a = Math.sin(x * 1.7 + z) * Math.cos(y * 1.3 + z * 0.7);
      const b = Math.sin(y * 2.1 + z * 0.5) * Math.cos(x * 0.9 + z);
      return (a + b) * 0.5;
    };

    const drawOrb = () => {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2;
      const cy = H / 2;
      const R = 300;
      const RINGS = 48;
      const PTS = 120;

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.4);
      glow.addColorStop(0, "rgba(79,158,255,0.08)");
      glow.addColorStop(0.6, "rgba(167,139,250,0.04)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.4, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i <= RINGS; i++) {
        const lat = (i / RINGS) * Math.PI;
        const sliceR = Math.sin(lat) * R;
        const sliceY = -Math.cos(lat) * R;

        ctx.beginPath();
        for (let j = 0; j <= PTS; j++) {
          const lon = (j / PTS) * Math.PI * 2;
          const n =
            noise(
              Math.sin(lat) * Math.cos(lon) * 2,
              Math.sin(lat) * Math.sin(lon) * 2,
              t * 0.6,
            ) * 18;
          const r = sliceR + n;
          const y2 = sliceY + noise(lon, lat, t * 0.4) * 12;
          const px = cx + r * Math.cos(lon);
          const py = cy + y2 + r * Math.sin(lon) * 0.15;
          j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        const depth = (Math.cos(lat) + 1) * 0.5;
        const hue = 200 + depth * 60;
        const lum = 40 + depth * 40;
        const alpha = 0.08 + depth * 0.18;
        ctx.strokeStyle = `hsla(${hue},80%,${lum}%,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      for (let j = 0; j < 24; j++) {
        const lon = (j / 24) * Math.PI * 2;
        ctx.beginPath();
        for (let i = 0; i <= RINGS; i++) {
          const lat = (i / RINGS) * Math.PI;
          const sliceR = Math.sin(lat) * R;
          const sliceY = -Math.cos(lat) * R;
          const n =
            noise(
              Math.sin(lat) * Math.cos(lon) * 2,
              Math.sin(lat) * Math.sin(lon) * 2,
              t * 0.6,
            ) * 18;
          const r = sliceR + n;
          const y2 = sliceY + noise(lon, lat, t * 0.4) * 12;
          const px = cx + r * Math.cos(lon);
          const py = cy + y2 + r * Math.sin(lon) * 0.15;
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        const alpha = 0.06 + Math.abs(Math.cos(lon)) * 0.08;
        ctx.strokeStyle = `rgba(79,158,255,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      const shimmer = ctx.createRadialGradient(
        cx - R * 0.2,
        cy - R * 0.2,
        0,
        cx,
        cy,
        R,
      );
      shimmer.addColorStop(0, "rgba(255,255,255,0.05)");
      shimmer.addColorStop(0.5, "rgba(79,158,255,0.03)");
      shimmer.addColorStop(1, "transparent");
      ctx.fillStyle = shimmer;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      t += 0.012;
      requestAnimationFrame(drawOrb);
    };

    drawOrb();
  }, []);

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

  return (
    <section
      id="home"
      className="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "120px 48px 80px",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-left"
        style={{ position: "relative", zIndex: 2 }}
      >
        <motion.div
          variants={itemVariants}
          className="hero-tag"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "1px",
              background: "var(--accent)",
            }}
          />
          Software Developer & AI Enthusiast
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(52px, 6vw, 88px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#fff" }}>Building</span>
          <br />
          <span style={{ color: "var(--accent)" }}>Intelligent</span>{" "}
          <span style={{ color: "#fff" }}>Systems.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="hero-sub"
          style={{
            fontSize: "16px",
            lineHeight: 1.7,
            color: "var(--muted)",
            maxWidth: "380px",
            marginBottom: "48px",
          }}
        >
          Full-stack developer passionate about creating intelligent software
          solutions that bridge the gap between human creativity and machine
          intelligence.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-actions"
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            style={{
              background: "var(--accent)",
              color: "#050810",
              padding: "14px 32px",
              borderRadius: "100px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 0 32px rgba(79,158,255,0.3)",
            }}
            whileHover={{
              y: -2,
              boxShadow: "0 0 48px rgba(79,158,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="https://github.com/Vinayak-Dwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{
              background: "transparent",
              color: "var(--text)",
              padding: "14px 32px",
              borderRadius: "100px",
              fontWeight: 500,
              fontSize: "14px",
              border: "1px solid var(--border)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            whileHover={{
              borderColor: "rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="hero-right" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <canvas
            ref={orbCanvasRef}
            style={{
              width: "440px",
              height: "440px",
              borderRadius: "24px",
            }}
          />
          <motion.img
            src="/publicmedia/profile_pic.jpeg"
            alt="Profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              position: "absolute",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid var(--accent)",
              boxShadow: "0 0 40px rgba(79,158,255,0.4)",
            }}
          />
        </div>

        <motion.div
          className="hero-badge badge-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            position: "absolute",
            background: "rgba(13,18,37,0.9)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "12px 18px",
            backdropFilter: "blur(20px)",
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            bottom: "80px",
            left: "-20px",
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "var(--accent)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            2+
          </div>
          <div style={{ color: "var(--muted)", marginTop: "2px" }}>
            Years Experience
          </div>
        </motion.div>

        <motion.div
          className="hero-badge badge-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            position: "absolute",
            background: "rgba(13,18,37,0.9)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "12px 18px",
            backdropFilter: "blur(20px)",
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            top: "80px",
            right: "-20px",
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "var(--accent)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            10+
          </div>
          <div style={{ color: "var(--muted)", marginTop: "2px" }}>
            Projects Built
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "48px",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: "'Space Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "var(--muted)",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "var(--muted)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "var(--accent)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 100px 24px 60px;
          }
          .hero-right {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
