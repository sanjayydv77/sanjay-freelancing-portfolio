import React from 'react';
import './Seo.css';

function Seo() {
  return (
    <section id="seo" className="content-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="content-header">
            <span className="section-topper">Search Engine Optimization</span>
            <h2 className="section-title">Dominate Google Search Rankings</h2>
          </div>
          
          <div className="content-body">
            <p className="lead-text">
              Search engine optimization is more challenging than ever. We help businesses rank higher in the Google Map Pack and the traditional search engine results page (SERP).
            </p>
            
            <div className="content-grid">
              <div className="content-block">
                <h3>Local & Global Reach</h3>
                <p>
                  Whether you target a local city or a national audience, we build strategies that put your business in front of the right customers. We optimize your Google Business Profile and local directory listings to ensure you capture high-intent "near me" searches.
                </p>
              </div>
              
              <div className="content-block">
                <h3>Technical SEO Foundation</h3>
                <p>
                  Your website needs to be fast, user-friendly, and free from technical errors. Because our sites are custom-coded, they inherently outperform bloated WordPress sites, giving you an instant advantage in search algorithms.
                </p>
              </div>
              
              <div className="content-block">
                <h3>Data-Driven Content Strategy</h3>
                <p>
                  We perform intensive keyword research to determine exactly what your customers are searching for. We then build targeted content clusters that capture organic traffic and convert visitors into paying clients.
                </p>
              </div>
            </div>
            
            <div className="cta-wrapper">
              <a href="#contact" className="btn-primary">Start Ranking Today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seo;
