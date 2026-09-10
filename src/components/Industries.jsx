import React from 'react';
import { Layers, Activity, Gauge, Anchor, ArrowUpRight, Cog } from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function Industries() {
  const iconMap = {
    "steel-plants": Layers,
    "cement-plants": Activity,
    "oem-spare-parts": Cog,
    "press-machinery": Gauge,
    "ports": Anchor
  };

  const imageMap = {
    "steel-plants": companyData.images.industries.steel,
    "cement-plants": companyData.images.industries.cement,
    "oem-spare-parts": companyData.images.industries.oem,
    "press-machinery": companyData.images.industries.press,
    "ports": companyData.images.industries.ports
  };

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Target Sectors</div>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Engineered to endure severe mechanical stress, extreme thermal cycles, and high operating pressures across vital core sectors.
          </p>
        </div>

        <div className="industries-grid">
          {companyData.industries.map((item) => {
            const IconComponent = iconMap[item.id] || Layers;
            const bgImage = imageMap[item.id] || companyData.images.industries.oem || companyData.images.industries.steel;
            const industryWaUrl = generateWhatsAppUrl({
              requirement: `Enquiry regarding machining and hydraulic cylinder solutions for the ${item.title} industry.`
            });

            return (
              <div key={item.id} className="industry-card">
                <div 
                  className="industry-bg-media"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  <div className="industry-overlay"></div>
                </div>

                <div className="industry-content">
                  <div className="industry-top-meta">
                    <span className="industry-tag">{item.tag}</span>
                    <div className="industry-icon-pill">
                      <IconComponent size={22} className="industry-icon" />
                    </div>
                  </div>

                  <h3 className="industry-title">{item.title}</h3>
                  <p className="industry-desc">{item.description}</p>

                  <a
                    href={industryWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="industry-cta-link"
                  >
                    <span>Enquire for {item.title}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
