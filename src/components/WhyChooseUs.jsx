import React from 'react';
import { 
  CheckCircle2, 
  Settings2, 
  Wrench, 
  ShieldCheck, 
  Factory, 
  SlidersHorizontal,
  Flame
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhyChooseUs() {
  const icons = [
    Settings2,
    SlidersHorizontal,
    Wrench,
    Factory,
    ShieldCheck,
    Flame
  ];

  return (
    <section id="why-us" className="why-choose-section">
      <div className="container">
        <div className="why-choose-layout">
          {/* Left Text Block */}
          <div className="why-left-content">
            <div className="section-tag">Engineering Excellence</div>
            <h2 className="section-title">
              Why Choose Shree Sidheshwar Industries?
            </h2>
            <p className="why-lead-desc">
              We specialize strictly in heavy-duty industrial requirements. Every component machined and every cylinder built or refurbished in our Bhosari facility meets rigorous mechanical performance demands.
            </p>

            <div className="why-highlight-box">
              <h4>Direct Engineering Focus</h4>
              <p>
                From raw stock machining to final honed finishes and hard chrome protection, our unified facility ensures strict quality control and dependable turnaround times.
              </p>
            </div>

            <div className="why-location-note">
              <strong>Location Advantage:</strong> Sector No. 10, PCNTDA, Bhosari, Tal.-Haveli, Pune — well-connected to industrial clusters across Maharashtra and western India.
            </div>
          </div>

          {/* Right Grid of Specific Validated Value Propositions */}
          <div className="why-grid">
            {companyData.whyChooseUs.map((point, index) => {
              const IconComp = icons[index % icons.length];
              return (
                <div key={index} className="why-card">
                  <div className="why-icon-badge">
                    <CheckCircle2 size={20} className="text-gold" />
                  </div>
                  <div className="why-card-text">
                    <h4 className="why-card-title">{point.title}</h4>
                    <p className="why-card-desc">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
