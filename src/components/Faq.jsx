import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Faq.css';

const faqData = {
  "PRICING & PAYMENTS": [
    {
      question: "DO YOU REQUIRE A DEPOSIT?",
      answer: "We typically require a 50% deposit upfront to begin the design and development phase, with the remaining 50% due upon site launch."
    },
    {
      question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
      answer: "We accept all major credit cards, bank transfers, and standard online payment platforms like PayPal and Stripe."
    },
    {
      question: "IS THERE A MONTHLY MAINTENANCE FEE?",
      answer: "Yes, our monthly packages cover premium hosting, SSL certificates, unlimited minor edits, and 24/7 technical support."
    }
  ],
  "PLANS": [
    {
      question: "WHAT IS INCLUDED IN THE STANDARD PLAN?",
      answer: "The standard plan includes a custom-designed, 5-page hand-coded website, responsive mobile design, basic on-page SEO setup, and secure hosting."
    },
    {
      question: "CAN I UPGRADE MY PLAN LATER?",
      answer: "Absolutely! As your business grows, we can scale your website by adding more pages, advanced integrations, or e-commerce capabilities."
    },
    {
      question: "DO YOU OFFER E-COMMERCE PLANS?",
      answer: "Yes, we build robust e-commerce solutions using modern tech stacks that integrate seamlessly with your preferred payment gateways."
    }
  ],
  "SEO": [
    {
      question: "WHAT IS ON-PAGE SEO?",
      answer: "On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic in search engines. This includes optimizing title tags, meta descriptions, and site speed."
    },
    {
      question: "HOW LONG DOES IT TAKE TO SEE SEO RESULTS?",
      answer: "SEO is a long-term strategy. It typically takes 3 to 6 months to start seeing significant movement in Google search rankings."
    },
    {
      question: "DO YOU GUARANTEE FIRST PAGE RANKINGS?",
      answer: "No reputable agency can guarantee first-page rankings due to the dynamic nature of Google's algorithms, but we use proven, white-hat strategies that consistently yield strong results."
    }
  ],
  "WEBSITES": [
    {
      question: "HOW LONG DOES THE PROCESS TAKE FROM START TO FINISH?",
      answer: "A standard small business website typically takes 2 to 4 weeks depending on how quickly we receive the content, images, and feedback from you."
    },
    {
      question: "DO I KEEP MY SITE IF I CANCEL THE SUBSCRIPTION?",
      answer: "Yes, you own your website. If you choose to leave, we will package up all your HTML, CSS, and JS files and send them to you."
    },
    {
      question: "DO WE OWN OUR DOMAIN?",
      answer: "Absolutely. You will always retain 100% ownership of your domain name. We can help you register it, or you can point your existing domain to our servers."
    },
    {
      question: "DO YOU USE WORDPRESS OR ANY BUILDERS?",
      answer: "No, we do not use WordPress or any page builders. Every line of code is written by hand to ensure zero bloat, lightning-fast load times, and maximum security."
    },
    {
      question: "WHY CUSTOM CODE OVER WORDPRESS? WHAT ARE THE ADVANTAGES?",
      answer: "Custom code is vastly superior in performance and security. Without plugins and bloated themes, our sites score perfect 100s on Google PageSpeed, which heavily boosts your SEO ranking."
    },
    {
      question: "WHAT HAPPENS TO MY SITE IF SOMETHING HAPPENS TO YOU? ARE THERE FAIL SAFES?",
      answer: "Because we write raw HTML/CSS/JS, any competent web developer can easily pick up where we left off. You are never locked into a proprietary CMS or convoluted page builder."
    }
  ]
};

function Faq() {
  const [activeTab, setActiveTab] = useState("WEBSITES");
  const [activeIndex, setActiveIndex] = useState(null);

  const tabs = Object.keys(faqData);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setActiveIndex(null); // Reset open accordion when switching tabs
  };

  return (
    <section id="faq" className="faq-section">
      {/* Background Glowing Circles */}
      <div className="faq-circle circle-1"></div>
      <div className="faq-circle circle-2"></div>
      
      <div className="container faq-container">
        
        {/* Tabs */}
        <div className="faq-tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`faq-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabSwitch(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="faq-accordion">
          {faqData[activeTab].map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <button className="faq-question">
                {faq.question}
                <ChevronDown className="faq-icon" size={20} />
              </button>
              <div 
                className="faq-answer-wrapper" 
                style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
