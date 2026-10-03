import React from 'react';
import './About.css';
import profileImg from '../assets/sanjay.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-banner" style={{ backgroundImage: `url(${profileImg})` }}>
        <div className="banner-overlay"></div>
      </div>
      <div className="container">
        <span className="section-topper">About The Developer</span>
        <h2 className="section-title">Who is <span className="highlight">Sanjay Yadav</span>?</h2>
        
        <div className="about-content">
          <div className="about-left-column">
            <div className="about-photo-card glass">
              <img src={profileImg} alt="Sanjay Yadav" className="about-profile-img" />
            </div>
            
            <div className="about-stats">
              <div className="stat-box glass">
                <span className="stat-number">DSA & OOP</span>
                <span className="stat-label">Core Knowledge</span>
              </div>
              <div className="stat-box glass">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Tech Stack</span>
              </div>
              <div className="stat-box glass">
                <span className="stat-number">100%</span>
                <span className="stat-label">Commitment</span>
              </div>
            </div>
          </div>
          
          <div className="about-text glass">
            <p>
              I am a Full Stack Web Developer passionate about building innovative, real-world solutions. With a strong foundation in designing responsive UIs, developing robust RESTful APIs, and managing scalable databases, I help businesses establish a powerful online presence.
            </p>
            <p>
              Currently pursuing my B.Tech in Computer Science & Engineering at Acropolis Institute of Technology and Research (AITR), I combine academic rigor with practical experience. My approach is user-centric, focusing on impactful products, performance optimization, and clean architecture.
            </p>
            
            <div className="certifications">
              <h3>Certifications & Credentials</h3>
              <ul>
                <li>Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate</li>
                <li>Cybersecurity Analyst Job Simulation - TATA (Forage)</li>
                <li>Full Stack React Course Completion - Infosys Springboard</li>
              </ul>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn-primary">Get Started Today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
