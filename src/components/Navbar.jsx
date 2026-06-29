import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: 'rgba(0, 212, 255, 0.15)', padding: '6px', borderRadius: '8px', display: 'flex' }}>
            <Code color="#00D4FF" size={24} strokeWidth={2.5} />
          </div>
          <span className="text-gradient" style={{ fontWeight: '800', fontSize: '1.4rem' }}>Nazmee.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        className={`mobile-nav glass-panel ${mobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
      >
        <div className="mobile-nav-content">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-socials">
            <a href="#" className="social-icon"><Code size={20} /></a>
            <a href="#" className="social-icon"><User size={20} /></a>
            <a href="#" className="social-icon"><Mail size={20} /></a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
