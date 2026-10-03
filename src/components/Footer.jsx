import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <svg className="footer-swoosh" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 254" xmlns="http://www.w3.org/2000/svg">
        <path d="M1668.54 58.137c124.52 31.881 204.12 63.173 251.46 85.537V-4H0v254C356.508 169.957 717.072 91.544 986.268 43.36 1255.46-4.822 1443.9.623 1668.54 58.138Z" fill="#030811"/>
      </svg>
      
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <a href="#" className="footer-logo">
            Sanjay.dev 
          </a>
          <p className="footer-text">
            We believe small businesses deserve better. Just because you're small, doesn't mean your site needs to be. Let us make you something amazing.
          </p>
          <a href="#contact" className="btn-primary billboard-btn mt-4">GET STARTED TODAY</a>
        </div>
        
        <div className="footer-col quick-links-col">
          <h3>QUICK LINKS</h3>
          <div className="links-grid">
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#services">Web Design</a></li>
              <li><a href="#ppc">Google PPC Ads</a></li>
            </ul>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#seo">SEO</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-col contact-col">
          <h3>CONTACT INFORMATION</h3>
          <ul className="footer-contact">
            <li>
              <Clock size={16} />
              <span>24/7</span>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+917869962336">+91-7869962336</a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:sanjuydv5357@gmail.com">sanjuydv5357@gmail.com</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>India</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; Copyright {new Date().getFullYear()} Sanjay.dev</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms Of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
