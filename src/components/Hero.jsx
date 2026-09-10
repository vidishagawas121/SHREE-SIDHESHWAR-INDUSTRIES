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
            <span>Beyond the manufacturing • Pune</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Precision Engineering. <br />
            <span className="text-gradient-gold">Reliable Hydraulic Solutions.</span>
          </h1>

          {/* Supporting text */}
          <p className="hero-description">
            Serving Steel Plants, Cement Plants & OEM Spare Parts with our in-house machining and hydraulic cylinder manufacturing facility.
          </p>

          {/* Key tags / bullet indicators */}
          <div className="hero-features-strip">
            <div className="feature-pill">
              <CheckCircle2 size={16} className="text-gold" />
              <span>In-House Facility</span>
            </div>
            <div className="feature-pill">
              <CheckCircle2 size={16} className="text-gold" />
              <span>100% Quality Inspection</span>
            </div>
            <div className="feature-pill">
              <CheckCircle2 size={16} className="text-gold" />
              <span>Dual Pressure Tested</span>
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

            <a href="#facilities" className="btn btn-secondary hero-btn-secondary">
              <span>View Machine Facilities</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Hero Specs summary box (Right side desktop visual) */}
        <div className="hero-sidebar-card">
          <div className="card-glass-header">
            <span className="accent-bar"></span>
            <h3>In-House Machine Facilities</h3>
          </div>
          <ul className="hero-capabilities-list">
            <li>
              <strong>CNC Turning Facility:</strong> Dia 10-500mm | Length 1000mm
            </li>
            <li>
              <strong>VMC Machine Facility:</strong> Travel X 800 | Y 1000 | Z 600mm
            </li>
            <li>
              <strong>Lathe Turning:</strong> Dia 20-500mm | Length 2500mm (Steady Rest)
            </li>
            <li>
              <strong>Horizontal Honing:</strong> 0.15 - 0.30 Ra finish | H8 / H9 tolerance
            </li>
            <li>
              <strong>Grinding & Plating:</strong> 58 - 60 HRC hardness | Min 0.30µ
            </li>
            <li>
              <strong>Cylinder Testing:</strong> Dual rod & piston end pressure testing
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
