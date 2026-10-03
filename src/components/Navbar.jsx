import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import './Navbar.css';

function Navbar({ isDarkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          Sanjay.dev
        </a>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={toggleMenu}>Home</a>
          
          <div className="dropdown">
            <button className="dropdown-toggle">
              About Us <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <a href="#about" onClick={toggleMenu}>About Us</a>
              <a href="#faq" onClick={toggleMenu}>FAQ</a>
              <a href="#reviews" onClick={toggleMenu}>Reviews</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-toggle">
              Services <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <a href="#services" onClick={toggleMenu}>Web Design</a>
              <a href="#seo" onClick={toggleMenu}>SEO Services</a>
              <a href="#ppc" onClick={toggleMenu}>Google PPC Ads</a>
            </div>
          </div>

          <a href="#projects" onClick={toggleMenu}>Portfolio</a>
          <a href="#pricing" onClick={toggleMenu}>Pricing</a>
          
          <a href="#contact" className="nav-btn" onClick={toggleMenu}>Get Started</a>
          
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="mobile-actions">
          <button className="theme-toggle-btn mobile-theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
