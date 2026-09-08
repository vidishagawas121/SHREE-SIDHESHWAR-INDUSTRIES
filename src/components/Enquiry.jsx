import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    requirement: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.requirement.trim()) {
      errs.requirement = 'Please describe your requirement or component details';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error on edit
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Generate WhatsApp direct URL with formatted enquiry details
    const waUrl = generateWhatsAppUrl({
      name: formData.name.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      requirement: formData.requirement.trim()
    });

    setSubmitted(true);

    // Reliable cross-device navigation (works on Vercel, iOS Safari, Android Chrome, and Desktop)
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = waUrl;
    } else {
      const newTab = window.open(waUrl, '_blank');
      if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        window.location.href = waUrl;
      }
    }
  };

  return (
    <section id="enquiry" className="enquiry-section">
      <div className="container">
        <div className="enquiry-card-wrapper">
          <div className="enquiry-inner-grid">
            
            {/* Left Column: Context & Guidelines */}
            <div className="enquiry-info-pane">
              <div className="section-tag">Quick Enquiry</div>
              <h2 className="enquiry-title">Have an Industrial Requirement?</h2>
              <p className="enquiry-subtitle">
                Tell us what you need and connect with our technical team directly on WhatsApp for prompt drawings review and quotes.
              </p>

              <div className="enquiry-highlights">
                <div className="e-highlight-item">
                  <span className="e-badge">WhatsApp Direct</span>
                  <p>Your details format directly into a WhatsApp draft to Mr. Sachin Ajjanalkar (+91 97630 10396).</p>
                </div>

                <div className="e-highlight-item">
                  <span className="e-badge">Fast Response</span>
                  <p>Share drawings, component specs, cylinder dimensions, or quantities directly in chat.</p>
                </div>

                <div className="e-highlight-item">
                  <span className="e-badge">Facility</span>
                  <p>Gat No. 169, Rupinagar East, Talwade Haveli, Pune - 412114.</p>
                </div>
              </div>

              <div className="enquiry-privacy-note">
                <CheckCircle size={15} className="text-gold" />
                <span>No spam. Directly connects to our production workshop team.</span>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp Generator Form */}
            <div className="enquiry-form-pane">
              <div className="form-box">
                <div className="form-header">
                  <h3>Submit Specification / Requirement</h3>
                  <p>Instant redirection to WhatsApp chat with formatted details</p>
                </div>

                {submitted && (
                  <div className="form-success-banner">
                    <CheckCircle size={18} />
                    <span>WhatsApp launched! If the window did not open, click the button below again.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className={`form-input ${errors.name ? 'has-error' : ''}`}
                    />
                    {errors.name && (
                      <span className="form-error">
                        <AlertCircle size={13} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Heavy Machinery Pvt Ltd"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9822012345"
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    />
                    {errors.phone && (
                      <span className="form-error">
                        <AlertCircle size={13} /> {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirement" className="form-label">
                      Requirement / Component Details <span className="req">*</span>
                    </label>
                    <textarea
                      id="requirement"
                      name="requirement"
                      rows="4"
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="Describe the CNC machining, honing, hard chrome plating, or hydraulic cylinder manufacturing/refurbishment requirements..."
                      className={`form-textarea ${errors.requirement ? 'has-error' : ''}`}
                    ></textarea>
                    {errors.requirement && (
                      <span className="form-error">
                        <AlertCircle size={13} /> {errors.requirement}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-whatsapp submit-enquiry-btn"
                  >
                    <MessageSquare size={19} />
                    <span>Send Enquiry on WhatsApp</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
