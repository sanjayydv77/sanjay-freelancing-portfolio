import React from 'react';
import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "TechSolutions India",
    content: "Sanjay completely transformed our outdated website into a modern, lightning-fast application. His MERN stack expertise is phenomenal. We saw a 40% increase in load speed and customer retention within a month.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    company: "Sharma Boutique",
    content: "Working with Sanjay was a breeze. He listened to my requirements for my e-commerce store and delivered exactly what I wanted. The site is beautiful, responsive, and easy for me to manage.",
    rating: 5
  },
  {
    name: "Amit Patel",
    company: "Patel Logistics",
    content: "I needed a complex dashboard for tracking shipments. Sanjay built a custom React frontend with a highly secure backend. His understanding of database architecture saved us months of headaches. Highly recommended!",
    rating: 5
  },
  {
    name: "Sneha Desai",
    company: "Desai Dental Clinic",
    content: "Our clinic needed a web presence desperately. Sanjay built us a gorgeous, fast-loading site that ranks well on Google. We've been getting significantly more online appointment bookings since the launch.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    company: "Singh & Co. Consulting",
    content: "Sanjay is a highly professional developer. He delivered the project ahead of schedule and the code quality was top-notch. It's rare to find a freelancer with such a strong grasp of both frontend design and backend logic.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    company: "Startup Hub",
    content: "We hired Sanjay for a complete overhaul of our platform. His attention to detail, specifically with React UI components and API integrations, is unmatched. He is communicative and extremely reliable.",
    rating: 5
  }
];

function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <span className="section-topper">Testimonials</span>
          <h2 className="section-title">What Our Clients <span className="highlight">Say</span></h2>
          <p className="section-text" style={{ margin: '0 auto 3rem auto', textAlign: 'center' }}>
            Don't just take our word for it. Read what our satisfied clients have to say about the web development services we provide.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card glass">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" color="var(--primary)" />
                ))}
              </div>
              <p className="review-content">"{review.content}"</p>
              <div className="review-author">
                <h4>{review.name}</h4>
                <span>{review.company}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a href="#contact" className="btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
