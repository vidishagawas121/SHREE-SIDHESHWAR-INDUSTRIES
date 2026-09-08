import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import HydraulicFeature from './components/HydraulicFeature';
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

        {/* Engineering Services */}
        <Services />

        {/* Hydraulic Cylinder Feature Highlight */}
        <HydraulicFeature />

        {/* Industries Served */}
        <Industries />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Interactive WhatsApp Enquiry */}
        <Enquiry />

        {/* Direct Contact Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}
