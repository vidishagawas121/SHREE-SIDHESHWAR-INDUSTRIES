// Company profile, services, contact and industrial data
// All centralized here so images and details can be easily updated or replaced with client photos.

export const companyData = {
  name: "SHREE SIDHESHWAR INDUSTRIES",
  tagline: "Precision Engineering & Hydraulic Cylinder Solutions",
  subtitle: "All Types of CNC Work, Honing, Hard Chrome Plating & Machining Facility. Manufacturing & Refurbishment of Hydraulic Cylinders.",
  gst: "27BNPPB4565G1ZT",
  
  address: {
    line1: "Gat No. 169, Rupinagar East",
    line2: "Talwade Haveli",
    city: "Pune",
    pincode: "412114",
    state: "Maharashtra",
    country: "India",
    fullAddress: "Gat No. 169, Rupinagar East, Talwade Haveli, Pune - 412114, Maharashtra, India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gat+No.+169,+Rupinagar+East,+Talwade+Haveli,+Pune+-+412114"
  },

  contacts: [
    {
      name: "Mr. Sachin Ajjanalkar",
      role: "Key Contact & Management",
      primaryPhone: "9763010396",
      isPrimaryWhatsapp: true
    },
    {
      name: "Mr. Ramesh Bolade",
      role: "Key Contact & Operations",
      phones: ["9763520994", "8308821687"],
      isPrimaryWhatsapp: false
    }
  ],

  primaryWhatsappNumber: "919763010396",
  primaryCallNumber: "+919763010396",
  email: "shreesidheshwariindustries01@gmail.com",

  // Curated high-resolution industrial photography (Verified 200 HTTP active direct URLs)
  images: {
    hero: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80", // Heavy precision manufacturing / CNC lathe
    hydraulicFeature: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80", // Precision industrial machinery & hydraulic actuation
    about: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80", // High precision machining facility shop floor
    services: {
      cnc: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", // CNC metal turning / cutting
      honing: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80", // Precision cylindrical bore finish
      plating: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80", // High precision chrome & metal finish
      machining: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", // Industrial heavy milling & machining
      hydraulicMfg: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80", // Heavy hydraulic cylinder assembly & manufacturing
      hydraulicRefurb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" // Cylinder repair, rod grinding & inspection
    },
    industries: {
      steel: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", // Steel & heavy metallurgy plant
      cement: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80", // Heavy cement & industrial processing facility
      press: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80", // Heavy hydraulic press & forging machinery
      ports: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" // Port cargo cranes & maritime hydraulic handling
    }
  },

  quickHighlights: [
    {
      num: "01",
      title: "CNC Machining",
      desc: "High accuracy precision turning, milling, and custom component fabrication."
    },
    {
      num: "02",
      title: "Honing",
      desc: "Micro-inch bore finishing ensuring dimensional tolerances and mirror surfaces."
    },
    {
      num: "03",
      title: "Hard Chrome Plating",
      desc: "Corrosion and abrasion-resistant protective surface treatment for extended life."
    },
    {
      num: "04",
      title: "Hydraulic Cylinder Solutions",
      desc: "End-to-end design, manufacturing, and industrial-grade refurbishment."
    }
  ],

  services: [
    {
      id: "cnc-work",
      title: "CNC Work",
      description: "Precision CNC machining solutions for industrial components and engineering requirements.",
      category: "Machining & Turning",
      icon: "Cpu"
    },
    {
      id: "honing",
      title: "Honing",
      description: "Precision honing services for achieving accurate internal surface finish and dimensional requirements.",
      category: "Finishing & Tolerances",
      icon: "Target"
    },
    {
      id: "hard-chrome-plating",
      title: "Hard Chrome Plating",
      description: "Hard chrome plating solutions designed for improved surface durability and wear resistance.",
      category: "Surface Engineering",
      icon: "ShieldCheck"
    },
    {
      id: "machining-facility",
      title: "Machining Facility",
      description: "Machining support for industrial components and engineering applications.",
      category: "Heavy Fabrication",
      icon: "Wrench"
    },
    {
      id: "hydraulic-cylinder-manufacturing",
      title: "Hydraulic Cylinder Manufacturing",
      description: "Manufacturing of hydraulic cylinders for demanding industrial applications.",
      category: "Hydraulics & Actuation",
      icon: "Cog"
    },
    {
      id: "hydraulic-cylinder-refurbishment",
      title: "Hydraulic Cylinder Refurbishment",
      description: "Refurbishment and restoration of hydraulic cylinders to help extend operational life.",
      category: "Overhaul & Maintenance",
      icon: "RefreshCw"
    }
  ],

  industries: [
    {
      id: "steel-plants",
      title: "Steel Plants",
      description: "Robust hydraulic cylinders and heavy-duty machined components engineered to withstand continuous high-temperature and extreme-load environments.",
      tag: "Heavy Metallurgy"
    },
    {
      id: "cement-plants",
      title: "Cement Plants",
      description: "Abrasion-resistant hard-chrome plated shafts and specialized hydraulic actuation suited for abrasive, high-dust industrial operations.",
      tag: "Process Machinery"
    },
    {
      id: "press-machinery",
      title: "Press Machinery",
      description: "High-tonnage hydraulic cylinders, precision-honed barrels, and tight-tolerance seals built for repetitive high-pressure hydraulic presses.",
      tag: "Forging & Stamping"
    },
    {
      id: "ports",
      title: "Ports & Material Handling",
      description: "Corrosion-resistant hydraulic systems and components engineered for dockside cargo handlers, marine cranes, and port equipment.",
      tag: "Marine & Logistics"
    }
  ],

  whyChooseUs: [
    {
      title: "Precision-focused machining",
      description: "Strict adherence to micron-level tolerances and engineering drawing specifications."
    },
    {
      title: "Hydraulic cylinder expertise",
      description: "Specialized engineering knowledge across heavy-duty industrial hydraulic systems."
    },
    {
      title: "Manufacturing & refurbishment capability",
      description: "Comprehensive in-house facilities to both produce new assemblies and restore worn units."
    },
    {
      title: "Industrial application focused",
      description: "Tailored to demanding sectors like steel mills, heavy cement plants, and press equipment."
    },
    {
      title: "Multiple machining solutions",
      description: "Unified facility for CNC turning, precision honing, hard chrome plating, and general machining."
    },
    {
      title: "Service for demanding industrial environments",
      description: "Built tough to withstand vibration, high pressures, thermal stress, and abrasive wear."
    }
  ]
};

// Helper to generate the standardized WhatsApp enquiry URL
export function generateWhatsAppUrl(data = {}) {
  const {
    name = "",
    company = "",
    phone = "",
    requirement = "",
    serviceName = ""
  } = data;

  let text = `Hello Shree Sidheshwar Industries,\n\nI would like to make an enquiry.`;

  if (serviceName) {
    text += `\nService Interested: ${serviceName}`;
  }

  if (name) {
    text += `\n\nName: ${name}`;
  }
  if (company) {
    text += `\nCompany: ${company}`;
  }
  if (phone) {
    text += `\nPhone: ${phone}`;
  }

  if (requirement) {
    text += `\n\nRequirement:\n${requirement}`;
  }

  text += `\n\nPlease contact me regarding this requirement.\n\nThank you.`;

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${companyData.primaryWhatsappNumber}?text=${encoded}`;
}
