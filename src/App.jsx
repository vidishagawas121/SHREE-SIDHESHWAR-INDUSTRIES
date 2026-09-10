import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import About from './components/About';
import Facilities from './components/Facilities';
import Products from './components/Products';
import Quality from './components/Quality';
import HydraulicFeature from './components/HydraulicFeature';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Enquiry from './components/Enquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="app-root">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* 4 Numerical Quick Highlights */}
        <QuickHighlights />

        {/* About Company */}
        <About />

        {/* In-House Machine Facilities with Technical Parameters */}
        <Facilities />

        {/* Products Catalog & Machine Output Gallery */}
        <Products />

        {/* 100% Quality Inspection & Metrology */}
        <Quality />

        {/* Hydraulic Cylinder Feature Highlight */}
        <HydraulicFeature />

        {/* Industries Served */}
        <Industries />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Interactive WhatsApp Enquiry */}
        <Enquiry />

        {/* Direct Contact Details, Registration & Bank Info */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}
