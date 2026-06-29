import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Business Website with Admin Panel',
      description: 'A full-stack business website with a Node.js and Express.js backend. Includes a functional Admin Panel and complete server-side routing with a PostgreSQL database.',
      image: '/cartoon_business.png',
      tags: ['Node.js', 'Express.js', 'PostgreSQL', 'Next.js'],
      liveUrl: 'https://intern-porject.vercel.app/',
      githubUrl: '',
      isLive: true
    },
    {
      title: 'Study Planner App',
      description: 'A cross-platform study planner app to manage subjects and daily schedules, featuring study session tracking and reminder notifications.',
      image: '/cartoon_planner.png',
      tags: ['Flutter', 'Dart', 'SQLite', 'Firebase'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      title: 'Cement Product Catalogue App',
      description: 'A mobile app to display cement product listings with in-app PDF and brochure viewing, enabling smooth PDF rendering for business clients.',
      image: '/cartoon_cement.png',
      tags: ['Flutter', 'Dart', 'PDF Viewer'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      title: 'Weather App',
      description: 'A real-time weather application with live data fetching using the OpenWeather API, featuring dynamic Lottie animations that adapt to the weather.',
      image: '/cartoon_weather.png',
      tags: ['Android Studio', 'Java/Kotlin', 'REST API'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      title: 'WhatsApp Clone',
      description: 'A real-time one-to-one chat application with message timestamps, profile setup, and real-time data sync using Firebase.',
      image: '/cartoon_chat.png',
      tags: ['Flutter', 'Firebase', 'REST APIs'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      title: 'Note App',
      description: 'A notes application with full CRUD operations backed by a local SQLite database, including search functionality and category filters.',
      image: '/cartoon_notes.png',
      tags: ['Flutter', 'Dart', 'SQLite'],
      liveUrl: '',
      githubUrl: ''
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                
                {project.isLive && (
                  <div className="live-badge">
                    <span className="live-dot"></span>
                    LIVE
                  </div>
                )}

                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={24} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link" aria-label="Source Code" target="_blank" rel="noopener noreferrer">
                        <Code size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extended Content: Mini Projects & Open Source */}
        <div className="mini-projects-section" style={{ marginTop: '6rem', paddingTop: '6rem', borderTop: '1px solid var(--glass-border)' }}>
          <motion.div 
            className="about-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '3rem', textAlign: 'center' }}
          >
            <h2 className="section-title text-gradient">Other Notable Work</h2>
            <p className="about-subtitle" style={{ color: 'var(--text-secondary)' }}>Smaller experiments and utility tools I've built along the way.</p>
          </motion.div>

          <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { title: 'Terminal Portfolio', desc: 'A retro-style portfolio built entirely with HTML/CSS and vanilla JavaScript mimicking a hacker terminal.', tags: ['HTML', 'JS'] },
              { title: 'URL Shortener API', desc: 'A fast and scalable URL shortening service built with Express and Redis caching.', tags: ['Node.js', 'Redis'] },
              { title: 'Markdown Blog', desc: 'A minimal static site generator that parses Markdown files into beautiful blog posts.', tags: ['Next.js', 'MDX'] }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="project-card glass-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ padding: '2rem' }}
              >
                <h3 className="project-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p className="project-desc" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>{item.desc}</p>
                <div className="project-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="project-tag" style={{ padding: '0.2rem 0.8rem', fontSize: '0.8rem' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
