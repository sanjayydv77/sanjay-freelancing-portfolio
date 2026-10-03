import React from 'react';
import { Layout, Search, MousePointerClick } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Web Design & Development',
    description: 'We build custom, hand-coded websites from scratch without relying on slow page builders like WordPress. This ensures your site loads lightning fast, scores 100/100 on Google PageSpeed, and provides a vastly superior user experience.',
    icon: <Layout size={32} />
  },
  {
    title: 'Search Engine Optimization',
    description: 'A beautiful website is useless if no one can find it. We implement comprehensive on-page and off-page SEO strategies to help your business rank higher in Google search results and the local Map Pack to drive organic leads.',
    icon: <Search size={32} />
  },
  {
    title: 'Google PPC Ads',
    description: 'Need traffic and leads right now? We build and manage highly targeted Google Ads campaigns. By targeting high-intent keywords, we ensure your ad spend generates actual phone calls and form submissions, not just empty clicks.',
    icon: <MousePointerClick size={32} />
  }
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="section-topper">What We Do</span>
          <h2 className="section-title">Never Worry About Your <span className="highlight">Website</span> Again</h2>
          <p className="section-text">
            As a solo agency, I handle every aspect of your project personally. From the first line of code to final deployment, your web application is built with zero bloat, high performance, and scalability in mind.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>Get Started Today</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
