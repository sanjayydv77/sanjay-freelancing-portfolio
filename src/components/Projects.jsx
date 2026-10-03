import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'TechSolutions Modernization',
    description: 'Overhauled an outdated monolithic application into a modern MERN stack architecture. Improved load speeds by 40% and significantly boosted customer retention.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  },
  {
    title: 'Sharma Boutique E-Commerce',
    description: 'Designed and developed a fully responsive, custom e-commerce store with an intuitive admin panel for inventory management and seamless Stripe checkout.',
    tech: ['React', 'Node.js', 'Stripe API', 'Tailwind CSS'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  },
  {
    title: 'Patel Logistics Dashboard',
    description: 'Architected a highly secure, complex shipment tracking dashboard. Engineered a robust backend and database architecture to handle real-time logistical data at scale.',
    tech: ['React', 'PostgreSQL', 'Express', 'WebSockets'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  },
  {
    title: 'Desai Dental Web Presence',
    description: 'Built a blazing-fast, highly-optimized clinic website that aggressively ranks on Google via advanced SEO, leading to a massive increase in online appointment bookings.',
    tech: ['Next.js', 'SEO', 'React', 'Framer Motion'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  },
  {
    title: 'Singh & Co. Corporate Site',
    description: 'Developed a highly professional corporate consulting website with complex backend logic for secure client portals and a pixel-perfect, premium frontend design.',
    tech: ['React', 'TypeScript', 'Node.js', 'JWT'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  },
  {
    title: 'Startup Hub Platform Overhaul',
    description: 'Executed a complete platform overhaul featuring highly reusable React UI components and complex third-party API integrations for a rapidly growing tech startup.',
    tech: ['React', 'Redux', 'REST APIs', 'Styled Components'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  },
  {
    title: 'Artisan Coffee Roasters E-Commerce',
    description: 'Built a headless Shopify storefront using Next.js for a specialty coffee brand, featuring subscription boxes and a highly optimized mobile checkout flow.',
    tech: ['Next.js', 'Shopify API', 'Tailwind'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  },
  {
    title: 'Creative Director Portfolio',
    description: 'Created a dynamic personal portfolio and booking system for a freelance creative, featuring a custom masonry image gallery and integrated Web3Forms contact routing.',
    tech: ['React', 'Web3Forms', 'CSS Grid', 'Vite'],
    github: 'https://github.com/sanjayydv77',
    live: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-topper">Portfolio</span>
        <h2 className="section-title">Some Of The Work <span className="highlight">I've Done</span></h2>
        <p className="section-text">
          I build production-ready applications focusing on clean code, responsive design, and exceptional user experiences. Here are a few featured projects from my GitHub.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-icon">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
