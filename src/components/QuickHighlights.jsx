import React from 'react';
import { Cpu, Target, ShieldCheck, Cog } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function QuickHighlights() {
  const iconMap = {
    "01": Cpu,
    "02": Target,
    "03": ShieldCheck,
    "04": Cog
  };

  return (
    <section className="quick-highlights-section">
      <div className="container">
        <div className="highlights-grid">
          {companyData.quickHighlights.map((item) => {
            const IconComponent = iconMap[item.num] || Cog;
            return (
              <div key={item.num} className="highlight-card">
                <div className="highlight-top">
                  <span className="highlight-number">{item.num}</span>
                  <div className="highlight-icon-box">
                    <IconComponent size={24} className="highlight-icon" />
                  </div>
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
                <div className="highlight-border-glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
