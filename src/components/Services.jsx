import React from 'react';
import { 
  Cpu, 
  Target, 
  ShieldCheck, 
  Wrench, 
  Cog, 
  RefreshCw, 
  MessageSquare,
  ArrowRight 
} from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function Services() {
  const iconMap = {
    Cpu: Cpu,
    Target: Target,
    ShieldCheck: ShieldCheck,
    Wrench: Wrench,
    Cog: Cog,
    RefreshCw: RefreshCw
  };

  const imageMap = {
    "cnc-work": companyData.images.services.cnc,
    "honing": companyData.images.services.honing,
    "hard-chrome-plating": companyData.images.services.plating,
    "machining-facility": companyData.images.services.machining,
    "hydraulic-cylinder-manufacturing": companyData.images.services.hydraulicMfg,
    "hydraulic-cylinder-refurbishment": companyData.images.services.hydraulicRefurb
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Capabilities & Facilities</div>
          <h2 className="section-title">Our Engineering Services</h2>
          <p className="section-subtitle">
            Comprehensive machining, finishing, and hydraulic cylinder solutions precision-engineered for heavy industrial environments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {companyData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Cog;
            const cardImageUrl = imageMap[service.id];
            const waUrl = generateWhatsAppUrl({
              serviceName: service.title,
              requirement: `I want to enquire about ${service.title} services for our company.`
            });

            return (
              <div key={service.id} className="service-card">
                {/* Service Card Image Preview */}
                <div className="service-card-image-wrap">
                  <img 
                    src={cardImageUrl} 
                    alt={service.title}
                    className="service-card-image"
                    loading="lazy"
                  />
                  <div className="service-category-badge">{service.category}</div>
                  <div className="service-number-watermark">0{index + 1}</div>
                </div>

                {/* Service Card Content */}
                <div className="service-card-body">
                  <div className="service-icon-wrap">
                    <IconComponent size={24} className="service-icon" />
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-card-footer">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-enquire-btn"
                    >
                      <MessageSquare size={16} />
                      <span>Enquire Now</span>
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
