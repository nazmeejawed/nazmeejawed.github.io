import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Mobile App Development', budget: '< $500', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', service: 'Mobile App Development', budget: '< $500', message: '' }); // reset form
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        setStatus({ loading: false, success: false, error: result.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ loading: false, success: false, error: 'Failed to connect to the server. Is the backend running?' });
    }
  };
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an email. 👋
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <span>nazmeejawed930@gmail.com</span>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <span>+91 8510043738</span>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <span>Delhi, 110044</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              
              {status.success && (
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status.error && (
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {status.error}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="john@example.com" required />
              </div>
              <div className="form-group-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
                  <label className="form-label">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="form-input" required style={{ appearance: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)' }}>
                    <option value="Mobile App Development" style={{ color: '#000' }}>Mobile App Development</option>
                    <option value="Full-Stack Web Development" style={{ color: '#000' }}>Full-Stack Web Development</option>
                    <option value="Other" style={{ color: '#000' }}>Other</option>
                  </select>
                </div>
                <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
                  <label className="form-label">Budget Range</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="form-input" required style={{ appearance: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)' }}>
                    <option value="< $500" style={{ color: '#000' }}>&lt; $500</option>
                    <option value="$500 - $1,000" style={{ color: '#000' }}>$500 - $1,000</option>
                    <option value="$1,000 - $3,000" style={{ color: '#000' }}>$1,000 - $3,000</option>
                    <option value="$3,000+" style={{ color: '#000' }}>$3,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-textarea" placeholder="How can I help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full" disabled={status.loading}>
                {status.loading ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Extended Content: FAQ Section */}


      </div>
    </section>
  );
};

export default Contact;
