import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${companyData.primaryWhatsappNumber}?text=${encodeURIComponent(
    "Hello Shree Sidheshwar Industries,\n\nI would like to make an enquiry regarding your machining and hydraulic services."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contact on WhatsApp"
      title="Contact Shree Sidheshwar Industries on WhatsApp"
    >
      <MessageSquare size={26} />
    </a>
  );
}
