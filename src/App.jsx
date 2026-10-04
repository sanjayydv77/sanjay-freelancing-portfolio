import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Projects from './components/Projects';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Seo from './components/Seo';
import GoogleAds from './components/GoogleAds';
import Pricing from './components/Pricing';

function App() {
  // Default to dark mode based on user preference
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="app-container">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Services />
        <Seo />
        <GoogleAds />
        <Pricing />
        <About />
        <Reviews />
        <Projects />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
