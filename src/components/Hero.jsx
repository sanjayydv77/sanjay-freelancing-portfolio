import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profileImg from '../assets/sanjay.jpg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text-content">
          <motion.span 
            className="section-topper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Custom Designs, Custom Coded
          </motion.span>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Small Business Web Designer
          </motion.h1>
          <motion.p 
            className="section-text hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            No page builders or WordPress. We offer 100% hand-coded websites with superior results starting at $99/mo as well as Google Ads and SEO services.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contact" className="nav-btn hero-btn">Get Started</a>
            <a href="#about" className="btn-transparent">About Us</a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="image-glow"></div>
          <img src={profileImg} alt="Sanjay Yadav" className="hero-profile-img" />
        </motion.div>
      </div>

      {/* SVG Wave */}
      <svg className="hero-wave" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 500" xmlns="http://www.w3.org/2000/svg">
        <path d="M251.463 378.438C126.937 315.555 47.343 253.833 0 209.721V501h1920V0c-356.51 157.88-717.07 312.544-986.268 407.584-269.195 95.039-457.636 84.299-682.269-29.146Z" fill="currentColor"/>
      </svg>

      {/* Universe Animations (Only visible in Dark Mode) */}
      <div className="dark-mode-animations">
        <div className="universe universe1">
          <span className="shooting-star"></span>
          <span className="shooting-star shooting-star2"></span>
          <span className="star star1"></span>
          <span class="star star2"></span>
          <span class="star star3"></span>
          <span class="star star4"></span>
          <span class="star star5"></span>
          <span class="star star6"></span>
        </div>
        <div className="universe universe2">
          <span className="star star7"></span>
          <span class="star star8"></span>
          <span class="star star9"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
