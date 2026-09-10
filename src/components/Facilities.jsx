import React from 'react';
import { Settings, Shield, CheckCircle2, MessageSquare, ArrowRight, Gauge, Wrench, Layers } from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function Facilities() {
  return (
    <section id="facilities" className="facilities-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Settings size={14} className="text-gold" />
            <span>In-House Infrastructure</span>
          </div>
          <h2 className="section-title">Our In-House Machine Facilities</h2>
          <p className="section-subtitle">
            Comprehensive in-house manufacturing, turning, milling, honing, cylindrical grinding, and pressure testing facilities engineered to handle tight tolerances and demanding industrial specifications.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {companyData.facilities.map((fac, idx) => {
            const waUrl = generateWhatsAppUrl({
              serviceName: fac.title,
              requirement: `Hello, I would like to enquire about your ${fac.title} capacity for our components.`
            });

            return (
              <div key={fac.id} className="facility-card">
                {/* Visual Header */}
                <div className="facility-image-wrapper">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="facility-main-img"
                    loading="lazy"
                  />
                  {fac.secondaryImage && (
                    <div className="facility-secondary-badge" title="Inspection & Verification in Process">
                      <img src={fac.secondaryImage} alt="Inspection detail" />
                      <span className="secondary-label">Inspection</span>
                    </div>
                  )}
                  <div className="facility-num-badge">0{idx + 1}</div>
                </div>

                {/* Facility Details */}
                <div className="facility-card-body">
                  <div className="facility-tagline">{fac.tagline}</div>
                  <h3 className="facility-card-title">{fac.title}</h3>
                  <p className="facility-card-desc">{fac.description}</p>

                  {/* Technical Parameters Matrix */}
                  <div className="facility-specs-table">
                    <div className="specs-table-header">
                      <Gauge size={14} className="text-gold" />
                      <span>Technical Working Range</span>
                    </div>
                    <div className="specs-items-grid">
                      {fac.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="spec-metric-item">
                          <span className="spec-metric-label">{sp.label}</span>
                          <strong className="spec-metric-val">{sp.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enquiry Footer */}
                  <div className="facility-card-footer">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="facility-enquire-btn"
                    >
                      <MessageSquare size={16} />
                      <span>Enquire Capacity</span>
                      <ArrowRight size={14} className="arrow-hover" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
