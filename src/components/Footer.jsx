import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

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

const Footer = () => {
  return (
    <footer className="professional-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo text-gradient">Nazmee.dev</h3>
            <p className="footer-tagline">Building seamless cross-platform experiences and scalable web solutions.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/nazmeejawed" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nazmee-jawed/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:nazmeejawed930@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nazmee Jawed. All rights reserved.</p>
          <p className="footer-made-with">Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
