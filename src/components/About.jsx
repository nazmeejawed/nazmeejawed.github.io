import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Server, MonitorSmartphone, Target, Globe2, Lightbulb, PenTool, Rocket, Wrench } from 'lucide-react';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <MonitorSmartphone size={20} />,
      skills: ['Android Studio', 'Flutter', 'Kotlin', 'Java', 'Dart', 'Firebase', 'Lottie Animations']
    },
    {
      title: 'Backend & Database',
      icon: <Server size={20} />,
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'SQLite']
    },
    {
      title: 'Web Technologies',
      icon: <Code2 size={20} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Next.js']
    }
  ];

  return (
    <section id="about" className="section about-page">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gradient">Behind the Code</h2>
          <p className="about-subtitle">Get to know the developer building your next digital experience.</p>
        </motion.div>
        
        <div className="about-grid">
          {/* Left Column: Summary & Education */}
          <div className="about-column">
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-header">
                <Briefcase className="card-icon text-gradient" />
                <h3>Summary</h3>
              </div>
              <div className="card-body">
                <p>
                  I am a results-oriented software developer with a strong foundation in <strong>Android and Flutter</strong> app development, alongside comprehensive experience in full-stack web engineering. 
                  My core focus is on designing, developing, and deploying scalable, high-performance applications that deliver exceptional user experiences across mobile and web platforms.
                </p>
                <p>
                  With advanced proficiency in building robust backends using <strong>Node.js, Express.js, and PostgreSQL</strong>, I architect secure RESTful APIs that seamlessly integrate with responsive frontends. I adhere strictly to clean code practices, implementing <strong>OOP principles</strong> and <strong>MVVM architecture</strong> to ensure long-term maintainability and performance optimization.
                </p>
                <p>
                  Beyond writing code, I actively engage in the entire software development lifecycle—from gathering requirements and defining system architecture to production deployment. I thrive in dynamic environments where I can leverage my analytical problem-solving skills to tackle complex technical challenges, while continuously adapting to modern industry standards and emerging technologies.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-header">
                <GraduationCap className="card-icon text-gradient" />
                <h3>Education Timeline</h3>
              </div>
              <div className="card-body">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Bachelor of Computer Applications</h4>
                      <span className="timeline-date">Aug 2023 – June 2026</span>
                      <p style={{ marginBottom: '0.5rem' }}>Noida International University</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Focusing on advanced software engineering, data structures, and full-stack development methodologies.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Senior Secondary (10+2)</h4>
                      <span className="timeline-date">May 2021 – May 2023</span>
                      <p style={{ marginBottom: '0.5rem' }}>Central Board of Secondary Education (CBSE)</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Graduated with a strong academic foundation in Mathematics and Computer Science principles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills, Strengths, Languages */}
          <div className="about-column">
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-header">
                <Code2 className="card-icon text-gradient" />
                <h3>Technical Arsenal</h3>
              </div>
              <div className="card-body">
                <div className="skill-categories">
                  {skillCategories.map((category, idx) => (
                    <div key={idx} className="skill-category">
                      <h4 className="category-title">
                        <span className="category-icon">{category.icon}</span>
                        {category.title}
                      </h4>
                      <div className="skill-badges">
                        {category.skills.map(skill => (
                          <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Extra programming languages */}
                  <div className="skill-category">
                    <h4 className="category-title">
                      <span className="category-icon"><Code2 size={20} /></span>
                      Other Languages
                    </h4>
                    <div className="skill-badges">
                      <span className="skill-badge">Python</span>
                      <span className="skill-badge">C</span>
                      <span className="skill-badge">C++</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="about-row">
              <motion.div 
                className="about-card glass-panel flex-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="card-header">
                  <Target className="card-icon text-gradient" />
                  <h3>Core Competencies</h3>
                </div>
                <div className="card-body">
                  <ul className="custom-list">
                    <li><strong>Analytical Problem Solving</strong>: Approaching complex technical challenges with structured solutions.</li>
                    <li><strong>Effective Communication</strong>: Bridging the gap between technical constraints and business requirements.</li>
                    <li><strong>Continuous Learning</strong>: Rapidly adapting to emerging technologies and industry best practices.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                className="about-card glass-panel flex-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="card-header">
                  <Rocket className="card-icon text-gradient" />
                  <h3>Current Focus</h3>
                </div>
                <div className="card-body">
                  <ul className="custom-list">
                    <li><strong>DSA in Dart</strong>: Daily algorithmic practice and problem-solving.</li>
                    <li><strong>System Design</strong>: Exploring clean architecture and scalable systems.</li>
                    <li><strong>Advanced Backend</strong>: Building robust APIs with Node.js & PostgreSQL.</li>
                    <li><strong>Building in Public</strong>: Sharing progress and insights with the developer community.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Extended Content: Development Process */}
        <div className="process-section">
          <motion.div 
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-gradient">My Development Process</h2>
            <p className="about-subtitle">How I bring ideas to life from start to finish.</p>
          </motion.div>

          <div className="process-grid">
            <motion.div 
              className="process-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="process-icon-wrapper"><Lightbulb size={28} className="text-gradient" /></div>
              <h4>1. Discovery</h4>
              <p>Understanding requirements, analyzing user needs, and planning the architecture.</p>
            </motion.div>

            <motion.div 
              className="process-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="process-icon-wrapper"><PenTool size={28} className="text-gradient" /></div>
              <h4>2. Design</h4>
              <p>Creating intuitive UI/UX designs, wireframes, and setting up the database schema.</p>
            </motion.div>

            <motion.div 
              className="process-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="process-icon-wrapper"><Code2 size={28} className="text-gradient" /></div>
              <h4>3. Development</h4>
              <p>Writing clean, maintainable, and robust code using modern frameworks and standard practices.</p>
            </motion.div>

            <motion.div 
              className="process-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="process-icon-wrapper"><Rocket size={28} className="text-gradient" /></div>
              <h4>4. Deployment</h4>
              <p>Testing rigorously, deploying to production servers or app stores, and monitoring performance.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
