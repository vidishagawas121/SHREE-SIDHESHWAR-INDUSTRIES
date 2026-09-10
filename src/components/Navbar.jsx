import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Phone, Shield } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top micro bar with contact and location details */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span>Beyond the manufacturing • Precision Facilities • Bhosari, Pune</span>
          </div>
          <div className="top-bar-right">
            <a href={`tel:${companyData.primaryCallNumber}`} className="top-contact-link">
              <Phone size={13} className="text-gold" />
              <span>+91 97630 10396</span>
            </a>
            <span className="top-divider">|</span>
            <span className="gst-tag">GST: {companyData.gst}</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="main-nav">
        <div className="container nav-container">
          <a href="#home" className="brand-logo" onClick={() => setIsOpen(false)}>
            <div className="brand-icon-box">
              <Shield size={24} className="brand-icon" />
            </div>
            <div className="brand-text">
              <span className="brand-title">SHREE SIDHESHWAR</span>
              <span className="brand-sub">INDUSTRIES</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="desktop-nav-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="nav-actions">
            <a
              href={`https://wa.me/${companyData.primaryWhatsappNumber}?text=${encodeURIComponent("Hello Shree Sidheshwar Industries, I would like to inquire about your engineering services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp nav-whatsapp-btn"
              title="Quick WhatsApp Enquiry"
            >
              <MessageSquare size={17} />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="container mobile-menu-inner">
            <ul className="mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-cta-wrapper">
              <a
                href={`https://wa.me/${companyData.primaryWhatsappNumber}?text=${encodeURIComponent("Hello Shree Sidheshwar Industries, I would like to inquire about your engineering services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mobile-wa-btn"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare size={18} />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={`tel:${companyData.primaryCallNumber}`}
                className="btn btn-dark mobile-call-btn"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                <span>Call +91 97630 10396</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
