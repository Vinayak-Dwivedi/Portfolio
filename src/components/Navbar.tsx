import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Vinayak-Dwivedi', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vinayakdwivedi2023@gmail.com', label: 'Email' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        backdropFilter: 'blur(20px)',
        background: isScrolled ? 'rgba(5,8,16,0.9)' : 'rgba(5,8,16,0.7)',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.3s'
      }}
    >
      {/* Logo */}
      <motion.a
        href="#home"
        className="logo"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '16px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text)',
          textDecoration: 'none'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Vinayak_<span style={{ color: 'var(--accent)' }}>Void</span>
      </motion.a>

      {/* Desktop Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          gap: '36px',
          margin: 0,
          padding: 0
        }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.a
                href={item.href}
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  position: 'relative'
                }}
                whileHover={{ color: 'var(--text)' }}
                onHoverStart={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.setProperty('--accent', 'var(--accent)');
                }}
              >
                {item.name}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: 0,
                    height: '1px',
                    background: 'var(--accent)',
                    transition: 'width 0.3s'
                  }}
                  className="nav-underline"
                />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              style={{
                color: 'var(--muted)',
                transition: 'color 0.2s'
              }}
              whileHover={{ color: 'var(--accent)', scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            padding: '20px 48px',
            display: 'none'
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => (
              <li key={item.name} style={{ marginBottom: '16px' }}>
                <a
                  href={item.href}
                  style={{
                    fontSize: '16px',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '8px 0'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .navbar {
            padding: 16px 24px;
          }
          
          .navbar ul {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          .mobile-menu {
            display: block !important;
          }
        }
        
        .nav-underline:hover {
          width: 100%;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
