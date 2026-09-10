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
                  <h4>Founded 2024</h4>
                  <p>Bhosari, Pune</p>
                </div>
              </div>
            </div>

            <div className="about-geo-note">
              <MapPin size={16} className="text-gold" />
              <span>Plot No. 122, PCNTDA, Sector 10, Bhosari, Pune</span>
            </div>

            {/* Client Presentation Motto Quote Card */}
            <div className="about-motto-card">
              <div className="motto-icon-quote">“</div>
              <p className="motto-text">
                {companyData.motto}”
              </p>
              <span className="motto-signature">— Shree Sidheshwar Industries</span>
            </div>
          </div>

          {/* Right Column: Copy based strictly on client info */}
          <div className="about-content">
            <div className="section-tag">About Company</div>
            <h2 className="section-title">Beyond the Manufacturing</h2>
            
            <p className="about-lead">
              Founded in 2024, <strong>Shree Sidheshwar Industries</strong> brings great experience in Hydraulic cylinders, engineering manufacturing, and specialized machining facilities based in Bhosari, Pune.
            </p>

            <p className="about-text">
              We serve Steel Plants, Cement Plants & OEM Spare Parts with our comprehensive in-house facility. Equipped with an excellent machining setup, we ensure every component meets the highest quality standards with 100% inspection using high accuracy checking instruments checked strictly as per engineering drawings.
            </p>

            {/* Core Capability Pillars */}
            <div className="about-pillars">
              <div className="pillar-item">
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>In-House Facility:</strong>
                  <span>CNC turning, VMC milling, heavy-bed lathe, horizontal honing, cylindrical grinding & plating.</span>
                </div>
              </div>

              <div className="pillar-item">
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>100% Component Inspection:</strong>
                  <span>Rigorous verification with Micrometers, Vernier Calipers, Bore Gauges, Depth Micrometers & TPG Gauges.</span>
                </div>
              </div>

              <div className="pillar-item">
                <CheckCircle size={18} className="text-gold flex-shrink-0" />
                <div>
                  <strong>Heavy Industry Focus:</strong>
                  <span>Custom engineering solutions tailored for Steel Plants, Cement Plants, Press Machinery & OEM Spares.</span>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#facilities" className="btn btn-primary">
                Explore Machine Facilities
              </a>
              <a href="#products" className="btn btn-dark">
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
