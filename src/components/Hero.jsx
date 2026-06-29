import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Download, ArrowRight, Layout, Smartphone, Database } from 'lucide-react';
import './Hero.css';

const GithubIcon = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const services = [
    {
      title: 'Mobile App Development',
      icon: <Smartphone size={32} />,
      desc: 'Building performant, cross-platform mobile applications using Flutter and native Android (Kotlin) that deliver seamless user experiences.'
    },
    {
      title: 'Full-Stack Web Dev',
      icon: <Layout size={32} />,
      desc: 'Creating responsive, dynamic, and accessible web applications using modern frameworks like React, Next.js, and Node.js.'
    },
    {
      title: 'Backend & APIs',
      icon: <Database size={32} />,
      desc: 'Designing robust database architectures (PostgreSQL) and secure, scalable RESTful APIs to power your digital products.'
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <section id="home" className="section hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="greeting-wrapper" variants={itemVariants}>
              <span className="greeting-badge">Available for Work</span>
              <span className="greeting text-gradient">Hello, World! I am Nazmee Jawed</span>
            </motion.div>
            
            <motion.h1 className="hero-title" variants={itemVariants}>
              Android & Flutter <br />
              <span className="text-secondary">Developer.</span>
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              I am an enthusiastic and goal-driven software developer with hands-on experience in <strong>Android and Flutter</strong> app development. 
              My passion lies in building seamless cross-platform mobile applications and scalable full-stack web solutions. 
              With proficiency in RESTful API integration, Node.js, and PostgreSQL, I am adept at writing clean, maintainable code using strict <strong>OOP principles</strong> and <strong>MVVM architecture</strong>. I am currently seeking an opportunity to contribute to real-world software solutions and continue my growth as a developer.
            </motion.p>

            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Mobile Apps<br/>Developed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years of<br/>Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Tech Stack<br/>Mastered</span>
              </div>
            </motion.div>

            <motion.div className="hero-cta" variants={itemVariants}>
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV <Download size={18} />
              </motion.a>
              <div className="hero-social-links">
                <a href="https://github.com/nazmeejawed" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="GitHub">
                  <GithubIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/in/nazmee-jawed/" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="image-wrapper glass-panel"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src="/profile.jpg" 
                alt="Nazmee Jawed" 
                className="profile-img"
              />
              <motion.div 
                className="floating-badge badge-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                style={{ transform: "translateZ(80px)" }}
              >📱 Flutter & Dart</motion.div>
              <motion.div 
                className="floating-badge badge-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0, type: 'spring', stiffness: 100 }}
                style={{ transform: "translateZ(40px)" }}
              >🤖 Android (Kotlin)</motion.div>
              <motion.div 
                className="floating-badge badge-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
                style={{ transform: "translateZ(60px)" }}
              >🌐 Full-Stack Web</motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Extended Content: What I Do */}
      <section className="section services-section">
        <div className="container">
          <motion.div 
            className="services-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-gradient">What I Do</h2>
            <p className="services-subtitle">Delivering end-to-end digital solutions from concept to deployment.</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="service-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon text-gradient">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
