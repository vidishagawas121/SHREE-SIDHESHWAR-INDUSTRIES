import React from 'react';
import { MessageSquare, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero() {
  const whatsappHeroUrl = `https://wa.me/${companyData.primaryWhatsappNumber}?text=${encodeURIComponent(
    "Hello Shree Sidheshwar Industries,\n\nI visited your website and would like to discuss an engineering requirement.\n\nPlease connect with me."
  )}`;

  return (
    <section id="home" className="hero-section">
      {/* Background Image with Dark Industrial Gradient Overlay */}
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${companyData.images.hero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <ShieldCheck size={16} className="text-gold" />
            <span>Industrial Manufacturing & Refurbishment • Pune</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Precision Engineering. <br />
            <span className="text-gradient-gold">Reliable Hydraulic Solutions.</span>
          </h1>

          {/* Supporting text */}
          <p className="hero-description">
            Specialized in CNC Work, Honing, Hard Chrome Plating, Machining and Manufacturing & Refurbishment of Hydraulic Cylinders.
          </p>

          {/* Key tags / bullet indicators */}
          <div className="hero-features-strip">
            <div className="feature-pill">
              <CheckCircle2 size={16} className="text-gold" />
              <span>Heavy Industry Grade</span>
            </div>
            <div className="feature-pill">
              <CheckCircle2 size={16} className="text-gold" />
              <span>Micron Tolerance Honing</span>
            </div>
            <div className="feature-pill">
              <CheckCircle2 size={16} className="text-gold" />
              <span>Hard Chrome Protection</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn-primary"
            >
              <MessageSquare size={20} />
              <span>Send Enquiry on WhatsApp</span>
            </a>

            <a href="#services" className="btn btn-secondary hero-btn-secondary">
              <span>Explore Our Services</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Hero Specs summary box (Right side desktop visual) */}
        <div className="hero-sidebar-card">
          <div className="card-glass-header">
            <span className="accent-bar"></span>
            <h3>Specialized Facility Capabilities</h3>
          </div>
          <ul className="hero-capabilities-list">
            <li>
              <strong>CNC Machining & Turning:</strong> High precision component engineering
            </li>
            <li>
              <strong>Internal Bore Honing:</strong> Accurate dimensional mirror finishing
            </li>
            <li>
              <strong>Hard Chrome Plating:</strong> Wear resistance & corrosion prevention
            </li>
            <li>
              <strong>Hydraulic Cylinders:</strong> Complete new build & turnkey refurbishment
            </li>
          </ul>
          <div className="hero-card-footer">
            <span className="location-pill">Bhosari, Pune</span>
            <span className="quick-call">Direct: +91 97630 10396</span>
          </div>
        </div>
      </div>
    </section>
  );
}
