import React from 'react';
import { CheckCircle, MapPin, Building, Shield } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual with overlay badge */}
          <div className="about-visual-wrapper">
            <div className="about-image-card">
              <img
                src={companyData.images.about}
                alt="Shree Sidheshwar Industries Workshop & Machining Facility"
                className="about-image"
                loading="lazy"
              />
              <div className="about-image-gradient"></div>
              
              {/* Floating Industrial Focus Badge */}
              <div className="about-floating-badge">
                <Shield size={28} className="text-gold" />
                <div>
                  <h4>Engineering Hub</h4>
                  <p>Talwade Haveli, Pune</p>
                </div>
              </div>
            </div>

            <div className="about-geo-note">
              <MapPin size={16} className="text-gold" />
              <span>Strategically located in Pune's core industrial corridor</span>
            </div>
          </div>

          {/* Right Column: Copy based strictly on client info */}
          <div className="about-content">
            <div className="section-tag">About Company</div>
            <h2 className="section-title">About Shree Sidheshwar Industries</h2>
            
            <p className="about-lead">
              Shree Sidheshwar Industries is an industrial engineering company based in Talwade, Pune, specializing in precision CNC work, honing, hard chrome plating, machining and hydraulic cylinder manufacturing and refurbishment.
            </p>

            <p className="about-text">
              We provide dependable engineering and refurbishment solutions developed for demanding, heavy-load industrial applications. By combining precision machining facilities with deep hydraulic cylinder knowledge, our facility supports critical operational needs across steel plants, cement plants, press machinery, and ports.
            </p>

            {/* Core Capability Pillars */}
            <div className="about-pillars">
              <div className="pillar-item">
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>Precision Manufacturing:</strong>
                  <span>Tight-tolerance CNC turning, component machining, and bore finishing.</span>
                </div>
              </div>

              <div className="pillar-item">
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>End-to-End Hydraulics:</strong>
                  <span>Complete manufacturing alongside comprehensive cylinder repair & restoration.</span>
                </div>
              </div>

              <div className="pillar-item">
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>Surface Protection:</strong>
                  <span>High-grade hard chrome plating for extreme wear and corrosion resistance.</span>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#enquiry" className="btn btn-primary">
                Discuss Your Requirement
              </a>
              <a href="#services" className="btn btn-dark">
                View All Capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
