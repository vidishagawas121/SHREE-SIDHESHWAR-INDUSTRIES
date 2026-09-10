import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData, generateWhatsAppUrl } from '../data/companyData';

export default function WhatsAppButton() {
  const whatsappUrl = generateWhatsAppUrl({
    requirement: "Hello Shree Sidheshwar Industries, I would like to make an enquiry regarding your machining and hydraulic services."
  });

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
