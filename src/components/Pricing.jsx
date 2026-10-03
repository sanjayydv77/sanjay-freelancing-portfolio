import React from 'react';
import './Pricing.css';
import { Check } from 'lucide-react';

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <span className="section-topper">Pricing</span>
          <h2 className="section-title">Affordable & Transparent Rates</h2>
          <p className="section-text">
            No hidden fees or surprise charges. We offer competitive rates tailored to your project's specific requirements, ensuring you get maximum value for your investment.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Tier 1 */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Portfolio & Small Business</h3>
              <div className="price-range">₹3,000 - ₹8,000</div>
              <p className="price-desc">Perfect for freelancers, personal portfolios, and small local businesses.</p>
            </div>
            <ul className="pricing-features">
              <li><Check size={18} className="check-icon" /> Custom Design (No Templates)</li>
              <li><Check size={18} className="check-icon" /> Mobile Responsive</li>
              <li><Check size={18} className="check-icon" /> Up to 5 Pages</li>
              <li><Check size={18} className="check-icon" /> Basic On-Page SEO</li>
              <li><Check size={18} className="check-icon" /> Contact Form Integration</li>
            </ul>
            <a href="#contact" className="btn-primary pricing-btn">Get Started</a>
          </div>

          {/* Tier 2 */}
          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-card-header">
              <h3>Complex Websites & E-Commerce</h3>
              <div className="price-range">₹10,000 - ₹20,000+</div>
              <p className="price-desc">Ideal for growing businesses, custom web apps, and online stores.</p>
            </div>
            <ul className="pricing-features">
              <li><Check size={18} className="check-icon" /> Advanced Custom Design</li>
              <li><Check size={18} className="check-icon" /> Custom Database Architecture</li>
              <li><Check size={18} className="check-icon" /> E-commerce / Payment Gateway</li>
              <li><Check size={18} className="check-icon" /> User Authentication</li>
              <li><Check size={18} className="check-icon" /> Admin Dashboard</li>
            </ul>
            <a href="#contact" className="btn-primary pricing-btn">Get a Quote</a>
          </div>
        </div>

        <div className="pricing-disclaimer">
          <p>* Please note: Hosting, domain registration, and any third-party application fees are in addition to these development fees, and are chosen based on client preference and requirements.</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
