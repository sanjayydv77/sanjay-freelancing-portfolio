import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("access_key", "9041a103-6406-4e8f-8fd0-62eb029702a2");
    formData.append("subject", "New Contact Form Submission from Portfolio");
    
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
    } catch (err) {
      // User explicitly requested no errors to be shown to the user filling the form
      console.error("Form submission error:", err);
    }
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    e.target.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="section-topper">Get In Touch</span>
        <h2 className="section-title">Ready to start your next <span className="highlight">Project</span>?</h2>
        
        <div className="contact-grid">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <p className="contact-desc">
              Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" />
                <span>sanjuydv5357@gmail.com</span>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <span>+91-7869962336</span>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <span>Indore, India</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/sanjayydv77" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/sanjuydv7" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={24} />
              </a>
              <a href="https://wa.me/917869962336" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className="success-message" style={{textAlign: 'center', padding: '3rem 0', color: '#fff'}}>
                <h3 style={{color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem'}}>Message Sent!</h3>
                <p>Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
