import React from 'react';
import { Shield, Phone, Mail, MapPin, ChevronRight, FileText } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Company', href: '#about' },
    { name: 'Machine Facilities', href: '#facilities' },
    { name: 'Products & Output', href: '#products' },
    { name: 'Quality Inspection', href: '#quality' },
    { name: 'Industries Served', href: '#industries' },
    { name: 'Contact & Bank Details', href: '#contact' }
  ];

  const servicesLinks = [
    { name: 'CNC Turning Facility', href: '#facilities' },
    { name: 'VMC Machine Facility', href: '#facilities' },
    { name: 'Lathe Machine Facility', href: '#facilities' },
    { name: 'Horizontal Honing', href: '#facilities' },
    { name: 'Grinding & Chrome Plating', href: '#facilities' },
    { name: 'Hydraulic Cylinder Testing', href: '#facilities' }
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          
          {/* Col 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-logo-box">
                <Shield size={24} className="text-gold" />
              </div>
              <div className="footer-brand-text">
                <span className="brand-title">SHREE SIDHESHWAR</span>
                <span className="brand-sub">INDUSTRIES</span>
              </div>
            </div>

            <p className="footer-tagline">
              "{companyData.tagline}"
            </p>

            <p className="footer-mission">
              "{companyData.motto}"
            </p>

            <div className="footer-reg-chips">
              <div className="footer-gst-chip">
                <FileText size={15} className="text-gold" />
                <span>GSTIN: {companyData.gst}</span>
              </div>
              <div className="footer-gst-chip">
                <FileText size={15} className="text-gold" />
                <span>PAN: {companyData.pan}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    <ChevronRight size={14} className="link-arrow" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Facilities */}
          <div className="footer-col">
            <h4 className="footer-col-title">In-House Facilities</h4>
            <ul className="footer-links-list">
              {servicesLinks.map((svc) => (
                <li key={svc.name}>
                  <a href={svc.href} className="footer-link">
                    <ChevronRight size={14} className="link-arrow" />
                    <span>{svc.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Facility Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Facility Location</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon text-gold" />
              <p>
                Plot No. 122, Esteem Engineer's, <br />
                Sector No. 10, PCNTDA, Bhosari, <br />
                Tal.-Haveli, Pune - 411026
              </p>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon text-gold" />
              <div>
                <a href={`tel:${companyData.primaryCallNumber}`} className="footer-phone-link">
                  +91 97630 10396 (Sachin A.)
                </a>
                <br />
                <a href="tel:9763520994" className="footer-phone-link">
                  +91 97635 20994 (Ramesh B.)
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon text-gold" />
              <a href={`mailto:${companyData.email}`} className="footer-mail-link">
                {companyData.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Shree Sidheshwar Industries. All Rights Reserved.
          </p>
          <div className="footer-bottom-notes">
            <span>Bhosari, Pune • Hydraulic Cylinders & Precision Machining Facilities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
