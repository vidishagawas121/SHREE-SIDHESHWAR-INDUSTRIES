import React, { useState } from 'react';
import { Cog, MessageSquare, ArrowRight, CheckCircle, Eye, ShieldCheck } from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function Products() {
  const [activeTab, setActiveTab] = useState('cylinders');

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cog size={14} className="text-gold" />
            <span>Manufacturing Output</span>
          </div>
          <h2 className="section-title">Our Products & Output Gallery</h2>
          <p className="section-subtitle">
            Engineered and manufactured at Shree Sidheshwar Industries. Explore our hydraulic cylinder range and precision machined mechanical components built for heavy industrial operations.
          </p>

          {/* Toggle Tabs */}
          <div className="products-tab-nav">
            <button
              className={`product-tab-btn ${activeTab === 'cylinders' ? 'active' : ''}`}
              onClick={() => setActiveTab('cylinders')}
            >
              <ShieldCheck size={16} />
              <span>Hydraulic Cylinders ({companyData.products.length})</span>
            </button>
            <button
              className={`product-tab-btn ${activeTab === 'components' ? 'active' : ''}`}
              onClick={() => setActiveTab('components')}
            >
              <Cog size={16} />
              <span>Machine Output Components ({companyData.machineOutputGallery.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Hydraulic Cylinders Grid */}
        {activeTab === 'cylinders' && (
          <div className="products-grid">
            {companyData.products.map((prod) => {
              const waUrl = generateWhatsAppUrl({
                serviceName: prod.title,
                requirement: `Hello, I am interested in getting a quote for ${prod.title}.`
              });

              return (
                <div key={prod.id} className="product-card">
                  <div className="product-img-wrapper">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="product-img"
                      loading="lazy"
                    />
                    <span className="product-category-tag">{prod.category}</span>
                  </div>

                  <div className="product-card-body">
                    <h3 className="product-title">{prod.title}</h3>
                    <p className="product-desc">{prod.desc}</p>

                    <div className="product-card-footer">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-product-enquire"
                      >
                        <MessageSquare size={16} />
                        <span>Request Drawing / Quote</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Real Machine Output & Component Batches */}
        {activeTab === 'components' && (
          <div className="output-gallery-grid">
            {companyData.machineOutputGallery.map((item, idx) => {
              const waUrl = generateWhatsAppUrl({
                serviceName: item.title,
                requirement: `Hello, I want to inquire about custom machining for parts similar to ${item.title}.`
              });

              return (
                <div key={idx} className="output-gallery-card">
                  <div className="output-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="output-img"
                      loading="lazy"
                    />
                    <div className="output-badge">{item.category}</div>
                  </div>
                  <div className="output-card-body">
                    <h3 className="output-title">{item.title}</h3>
                    <p className="output-desc">{item.desc}</p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-product-enquire"
                    >
                      <MessageSquare size={16} />
                      <span>Enquire Component Machining</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner with Client Motto */}
        <div className="products-motto-banner">
          <div className="motto-banner-content">
            <div className="motto-kicker">OUR COMMITMENT</div>
            <h3 className="motto-banner-quote">
              “{companyData.motto}”
            </h3>
            <p className="motto-banner-sub">
              Every cylinder manufactured or refurbished at our Bhosari facility undergoes 100% dual-side pressure testing and stroke auditing before dispatch.
            </p>
          </div>
          <div className="motto-banner-cta">
            <a
              href={`https://wa.me/${companyData.primaryWhatsappNumber}?text=${encodeURIComponent("Hello Shree Sidheshwar Industries, I have an urgent cylinder / machining requirement.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={18} />
              <span>Discuss Requirement with Engineer</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
