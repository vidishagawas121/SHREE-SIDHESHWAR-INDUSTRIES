import React from 'react';
import { MessageSquare, Wrench, Shield, Check, ArrowRight } from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function HydraulicFeature() {
  const whatsappUrl = generateWhatsAppUrl({
    serviceName: "Hydraulic Cylinders (Manufacturing / Refurbishment)",
    requirement: "Hello, I would like to discuss our hydraulic cylinder manufacturing / refurbishment requirements."
  });

  return (
    <section className="hydraulic-feature-section">
      <div className="container">
        <div className="hydraulic-feature-box">
          <div className="hydraulic-feature-grid">
            
            {/* Left Content */}
            <div className="hydraulic-feature-info">
              <div className="feature-kicker">
                <Shield size={16} className="text-gold" />
                <span>Specialized Domain</span>
              </div>
              <h2 className="feature-main-title">
                Hydraulic Cylinder <br />
                <span className="text-gradient-gold">Manufacturing & Refurbishment</span>
              </h2>

              <p className="feature-main-p">
                We provide precision manufacturing and rigorous refurbishment solutions for heavy-duty hydraulic cylinders engineered for severe operating pressures and abrasive industrial environments.
              </p>

              <div className="feature-spec-columns">
                <div className="feature-spec-block">
                  <div className="spec-title">
                    <Wrench size={18} className="text-gold" />
                    <span>New Cylinder Manufacturing</span>
                  </div>
                  <p>Custom bore, stroke, and mounting designs built to specifications for presses, mills, and heavy material handling.</p>
                </div>

                <div className="feature-spec-block">
                  <div className="spec-title">
                    <Wrench size={18} className="text-gold" />
                    <span>Complete Refurbishment</span>
                  </div>
                  <p>Barrel re-honing, piston rod hard-chroming, precision resealing, and comprehensive testing to restore life and prevent downtime.</p>
                </div>
              </div>

              <div className="feature-bullets-grid">
                <div className="f-bullet">
                  <Check size={16} className="text-gold" />
                  <span>Precision Barrel Honing</span>
                </div>
                <div className="f-bullet">
                  <Check size={16} className="text-gold" />
                  <span>Hard Chrome Plated Rods</span>
                </div>
                <div className="f-bullet">
                  <Check size={16} className="text-gold" />
                  <span>Severe Pressure Resistance</span>
                </div>
                <div className="f-bullet">
                  <Check size={16} className="text-gold" />
                  <span>Turnkey Dimensional Restoration</span>
                </div>
              </div>

              <div className="feature-cta-group">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={19} />
                  <span>Discuss Your Requirement</span>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Speak with Engineer</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Image Visual */}
            <div className="hydraulic-feature-visual">
              <div className="visual-frame">
                <div className="visual-image-wrapper">
                  <img
                    src={companyData.images.hydraulicFeature}
                    alt="Industrial Heavy Hydraulic Cylinder Engineering and Machining"
                    className="hydraulic-img"
                    loading="lazy"
                  />
                  <div className="visual-tag-pill">
                    <span className="visual-tag-dot"></span>
                    <span>Actual Batch Production</span>
                  </div>
                </div>
                <div className="visual-badge">
                  <span className="badge-title">Refurbish & Extend</span>
                  <span className="badge-sub">High-efficiency restoration for heavy plant cylinders</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
