import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Ruler, FileText, Check } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Quality() {
  const { qualityAssurance } = companyData;

  return (
    <section id="quality" className="quality-section">
      <div className="container">
        <div className="quality-grid">
          {/* Left Column: Visual with inspection instruments */}
          <div className="quality-visual-wrap">
            <div className="quality-image-card">
              <img
                src={qualityAssurance.image}
                alt="Quality Checking Instruments at Shree Sidheshwar Industries"
                className="quality-img"
                loading="lazy"
              />
              <div className="quality-badge-float">
                <ShieldCheck size={28} className="text-gold" />
                <div>
                  <h4>100% Inspected</h4>
                  <p>Checked strictly as per drawing</p>
                </div>
              </div>
            </div>

            {/* Quality Metrics Box */}
            <div className="quality-standards-box">
              <div className="q-standard-item">
                <span className="q-val">0.15 - 0.30 Ra</span>
                <span className="q-lbl">Honing & Grinding Surface Finish</span>
              </div>
              <div className="q-standard-item">
                <span className="q-val">H8 / H9</span>
                <span className="q-lbl">Internal Bore Cylinder Tolerance</span>
              </div>
              <div className="q-standard-item">
                <span className="q-val">58 - 60 HRC</span>
                <span className="q-lbl">Hard Chrome Plated Rod Hardness</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed copy & checking instruments */}
          <div className="quality-content-wrap">
            <div className="section-tag">
              <Award size={14} className="text-gold" />
              <span>Metrology & Quality Control</span>
            </div>
            <h2 className="section-title">100% Component Inspection & Drawing Compliance</h2>
            <p className="quality-lead">
              At Shree Sidheshwar Industries, every machined component and hydraulic cylinder is checked with high-accuracy calibration instruments strictly as per the client's engineering drawing.
            </p>

            {/* Instruments Grid */}
            <div className="quality-instruments-grid">
              {qualityAssurance.instruments.map((inst, idx) => (
                <div key={idx} className="instrument-card">
                  <div className="inst-icon-wrap">
                    <Ruler size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="inst-title">{inst.name}</h4>
                    <p className="inst-desc">{inst.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Checklist */}
            <div className="quality-checklist">
              {qualityAssurance.features.map((feat, idx) => (
                <div key={idx} className="q-check-item">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
