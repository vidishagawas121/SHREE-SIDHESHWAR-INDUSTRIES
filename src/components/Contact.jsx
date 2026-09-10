import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Navigation, 
  FileText,
  User, 
  Clock
} from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function Contact() {
  const whatsappUrl = generateWhatsAppUrl({
    requirement: "Hello Shree Sidheshwar Industries, I want to connect regarding your precision engineering, machining, and hydraulic cylinder services."
  });

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Direct Communication</div>
          <h2 className="section-title">Contact Information</h2>
          <p className="section-subtitle">
            Reach out directly to our leadership and facility coordinators for site visits, technical queries, or rapid production dispatch.
          </p>
        </div>

        <div className="contact-grid">
          {/* Main Facility & Company Profile Card */}
          <div className="contact-company-card">
            <div className="contact-card-header">
              <span className="card-kicker">Manufacturing Facility</span>
              <h3 className="company-main-title">{companyData.name}</h3>
              <p className="company-sub-line">{companyData.subtitle}</p>
            </div>

            <div className="contact-details-list">
              {/* Address */}
              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <MapPin size={22} className="text-gold" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Facility Address</span>
                  <p className="detail-value">
                    {companyData.address.line1},<br />
                    {companyData.address.line2},<br />
                    {companyData.address.city} - {companyData.address.pincode},<br />
                    {companyData.address.state}, {companyData.address.country}
                  </p>
                </div>
              </div>

              {/* GST & PAN Row */}
              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <FileText size={22} className="text-gold" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Tax & Registration</span>
                  <p className="detail-value">
                    <strong>GSTIN:</strong> <span className="gst-highlight">{companyData.gst}</span><br />
                    <strong>PAN:</strong> <span className="gst-highlight">{companyData.pan}</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-row">
                <div className="detail-icon-box">
                  <Mail size={22} className="text-gold" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Official Email</span>
                  <a href={`mailto:${companyData.email}`} className="detail-link">
                    {companyData.email}
                  </a>
                </div>
              </div>

              {/* Official Bank Account Details for B2B Procurements */}
              <div className="contact-bank-card">
                <div className="bank-header">
                  <span className="bank-badge">Official Bank Details</span>
                  <span className="bank-note">For B2B RTGS / NEFT / IMPS</span>
                </div>
                <div className="bank-grid">
                  <div className="bank-field">
                    <span className="bank-lbl">Bank Name</span>
                    <strong className="bank-val">{companyData.bankDetails.bankName}</strong>
                  </div>
                  <div className="bank-field">
                    <span className="bank-lbl">Branch</span>
                    <strong className="bank-val">{companyData.bankDetails.branch}</strong>
                  </div>
                  <div className="bank-field">
                    <span className="bank-lbl">Account Number</span>
                    <strong className="bank-val font-mono">{companyData.bankDetails.accountNo}</strong>
                  </div>
                  <div className="bank-field">
                    <span className="bank-lbl">IFSC Code</span>
                    <strong className="bank-val font-mono">{companyData.bankDetails.ifscCode}</strong>
                  </div>
                  <div className="bank-field">
                    <span className="bank-lbl">MICR Code</span>
                    <strong className="bank-val font-mono">{companyData.bankDetails.micrCode}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons Strip */}
            <div className="contact-quick-actions">
              <a
                href={`tel:${companyData.primaryCallNumber}`}
                className="btn btn-dark contact-act-btn"
              >
                <Phone size={17} />
                <span>Call Now</span>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="btn btn-secondary contact-act-btn email-btn"
              >
                <Mail size={17} />
                <span>Email Us</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp contact-act-btn"
              >
                <MessageSquare size={17} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={companyData.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold contact-act-btn"
              >
                <Navigation size={17} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Key Contact Persons Column */}
          <div className="contact-persons-column">
            <h3 className="persons-column-title">Direct Contacts</h3>

            {/* Person 1 */}
            <div className="person-card">
              <div className="person-avatar">
                <User size={22} className="text-gold" />
              </div>
              <div className="person-info">
                <span className="person-badge">Primary Management & Technical</span>
                <h4 className="person-name">{companyData.contacts[0].name}</h4>
                <div className="person-phones">
                  <a href={`tel:${companyData.contacts[0].primaryPhone}`} className="phone-row">
                    <Phone size={15} className="text-gold" />
                    <span>+91 {companyData.contacts[0].primaryPhone}</span>
                  </a>
                </div>
                <a
                  href={`https://api.whatsapp.com/send?phone=91${companyData.contacts[0].primaryPhone}&text=${encodeURIComponent("Hello Mr. Sachin, I am reaching out from your website regarding an engineering requirement.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="person-wa-link"
                >
                  <MessageSquare size={14} />
                  <span>Connect with Mr. Sachin on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Person 2 */}
            <div className="person-card">
              <div className="person-avatar">
                <User size={22} className="text-gold" />
              </div>
              <div className="person-info">
                <span className="person-badge">Key Contact & Operations</span>
                <h4 className="person-name">{companyData.contacts[1].name}</h4>
                <div className="person-phones">
                  {companyData.contacts[1].phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="phone-row">
                      <Phone size={15} className="text-gold" />
                      <span>+91 {phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Location highlight box */}
            <div className="workshop-hours-box">
              <div className="hours-icon">
                <Clock size={20} className="text-gold" />
              </div>
              <div>
                <strong>Facility Operational Hours:</strong>
                <p>Monday – Saturday: 9:00 AM – 7:30 PM</p>
                <p className="hours-sub">Emergency hydraulic refurbishment & maintenance support available upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
