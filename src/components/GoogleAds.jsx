import React from 'react';
import './Seo.css'; // Reusing the same CSS for consistency

function GoogleAds() {
  return (
    <section id="ppc" className="content-section alt-bg">
      <div className="container">
        <div className="content-wrapper">
          <div className="content-header">
            <span className="section-topper">Google PPC Ads</span>
            <h2 className="section-title">Instant Leads With Targeted Ads</h2>
          </div>
          
          <div className="content-body">
            <p className="lead-text">
              SEO is a long-term investment, but sometimes you need traffic and leads right now. We build and manage highly optimized Google Pay-Per-Click campaigns that generate actual ROI, not just empty clicks.
            </p>
            
            <div className="content-grid">
              <div className="content-block">
                <h3>High-Intent Keyword Targeting</h3>
                <p>
                  We don't waste your budget on broad terms that don't convert. We meticulously research and target high-intent keywords that people search when they are ready to buy your product or hire you for your service.
                </p>
              </div>
              
              <div className="content-block">
                <h3>High-Converting Landing Pages</h3>
                <p>
                  Sending paid traffic to a generic homepage is a recipe for wasted spend. We design and develop custom, lightning-fast landing pages tailored specifically to your ad copy to maximize your conversion rates.
                </p>
              </div>
              
              <div className="content-block">
                <h3>A/B Testing & Optimization</h3>
                <p>
                  We constantly monitor your campaigns, split-testing ad copy, adjusting bids, and pruning negative keywords. This continuous optimization ensures your cost-per-lead decreases over time while volume increases.
                </p>
              </div>
            </div>
            
            <div className="cta-wrapper">
              <a href="#contact" className="btn-primary">Get More Leads</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleAds;
