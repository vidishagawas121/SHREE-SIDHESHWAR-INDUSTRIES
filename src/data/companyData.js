// Company profile, services, machine facilities, products, quality inspection, and contact data
// Fully aligned with official company presentation & technical brochure

export const companyData = {
  name: "SHREE SIDHESHWAR INDUSTRIES",
  tagline: "Beyond the manufacturing",
  motto: "We are not only building strong cylinders but also building strong relations",
  founded: "2024",
  subtitle: "Specialized in Hydraulic Cylinders, CNC Turning, VMC Machining, Lathe Turning, Horizontal Honing, Cylindrical Grinding & Hard Chrome Plating.",
  gst: "27BNPPB4565G1ZT",
  pan: "BNPPB4565G",
  
  // Official Facility Location
  address: {
    line1: "Plot No. 122, Esteem Engineer's, Sector No. 10",
    line2: "PCNTDA, Bhosari, Tal.-Haveli",
    city: "Pune",
    pincode: "411026",
    state: "Maharashtra",
    country: "India",
    fullAddress: "Plot No. 122, Esteem Engineer's, Sector No. 10, PCNTDA, Bhosari, Tal.-Haveli, Pune - 411026, Maharashtra, India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+No.+122,+Esteem+Engineers,+Sector+No.+10,+PCNTDA,+Bhosari,+Pune+-+411026"
  },

  // Key Technical & Operational Contacts
  contacts: [
    {
      name: "Mr. Sachin Ajanalkar",
      role: "Management & Operations",
      primaryPhone: "9763010396",
      isPrimaryWhatsapp: true
    },
    {
      name: "Mr. Ramesh Bolade",
      role: "Operations & Production",
      primaryPhone: "9763520994",
      phones: ["9763520994"],
      isPrimaryWhatsapp: false
    }
  ],

  primaryWhatsappNumber: "919763010396",
  primaryCallNumber: "+919763010396",
  email: "shreesidheshwarindustries01@gmail.com",

  // Official Bank Details for B2B Procurements & Purchase Orders (Brochure Page 15)
  bankDetails: {
    bankName: "CANARA BANK",
    branch: "WAGHOLI (PUNE)",
    accountNo: "120028592028",
    ifscCode: "CNRB0000181",
    micrCode: "411015013"
  },

  // High-Resolution Authentic Workshop & Industrial Imagery
  images: {
    hero: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
    logoBadge: "/images/client/client-logo-badge.jpg",
    mottoBadge: "/images/client/client-motto-badge.jpg",
    hydraulicFeature: "/images/client/product-hydraulic-cylinder-industrial-batch.jpg",
    about: "/images/workshop-machined-components.jpg",
    services: {
      cnc: "/images/client/facility-cnc-turning.jpg",
      vmc: "/images/client/facility-vmc-machine.jpg",
      lathe: "/images/client/facility-lathe-machine.jpg",
      honing: "/images/client/facility-horizontal-honing.jpg",
      plating: "/images/client/facility-cylindrical-grinding.jpg",
      machining: "/images/workshop-machined-components.jpg",
      hydraulicMfg: "/images/client/product-hydraulic-cylinder-clevis.jpg",
      hydraulicRefurb: "/images/client/facility-hydraulic-testing-pack.jpg"
    },
    industries: {
      steel: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      cement: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80",
      oem: "/images/workshop-machined-components.jpg",
      press: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
      ports: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    }
  },

  // In-House Machine Facilities with Technical Parameters (Brochure Pages 3, 4, 5, 8, 9, 10)
  facilities: [
    {
      id: "cnc-turning",
      title: "CNC Turning Facility",
      tagline: "High-precision computer numerical control turning",
      image: "/images/client/facility-cnc-turning.jpg",
      specs: [
        { label: "Min Turning Dia", value: "10 mm" },
        { label: "Max Turning Dia", value: "500 mm" },
        { label: "Turning Length", value: "1000 mm" }
      ],
      description: "Equipped with modern CNC turning centers delivering rigid machining, close tolerances, and repetitive precision for industrial shafts, bushings, and pins."
    },
    {
      id: "vmc-facility",
      title: "VMC Machine Facility",
      tagline: "Vertical Machining Center with large working envelope",
      image: "/images/client/facility-vmc-machine.jpg",
      specs: [
        { label: "X Axis Travel", value: "800 mm" },
        { label: "Y Axis Travel", value: "1000 mm" },
        { label: "Z Axis Travel", value: "600 mm" }
      ],
      description: "Rigid vertical machining center capable of large circular flanges, complex hydraulic manifold blocks, precision hole circles, and heavy plate machining."
    },
    {
      id: "lathe-facility",
      title: "Lathe Machine Facility",
      tagline: "Heavy-duty conventional turning & boring",
      image: "/images/client/facility-lathe-machine.jpg",
      specs: [
        { label: "Min Turning Dia", value: "20 mm" },
        { label: "Max Turning Dia", value: "500 mm" },
        { label: "Turning Length", value: "2500 mm" },
        { label: "Steady Rest", value: "Provision Included" }
      ],
      description: "Long-bed heavy lathe facility with steady rest support specifically engineered for long hydraulic cylinder tubes, tie rods, and large drive shafts."
    },
    {
      id: "honing-facility",
      title: "Horizontal Honing Machine",
      tagline: "Mirror internal bore finishing & tight cylindrical tolerances",
      image: "/images/client/facility-horizontal-honing.jpg",
      secondaryImage: "/images/client/quality-bore-gauge-check.jpg",
      specs: [
        { label: "Surface Finish", value: "0.15 to 0.30 Ra" },
        { label: "ID Tolerance", value: "H8, H9" },
        { label: "Inspection", value: "Checked via Bore Gauge" }
      ],
      description: "High-precision horizontal tube honing ensuring micro-inch bore smoothness, low friction, and long seal life for hydraulic cylinder barrels."
    },
    {
      id: "grinding-plating",
      title: "Cylindrical Grinding & Hard Chrome Plating",
      tagline: "GPG process with wear & corrosion-resistant plating",
      image: "/images/client/facility-cylindrical-grinding.jpg",
      secondaryImage: "/images/client/quality-plating-thickness-check.jpg",
      specs: [
        { label: "OD Surface Finish", value: "0.15 to 0.30 Ra" },
        { label: "Plating Thickness", value: "Min 0.30 µ (+15 %)" },
        { label: "Surface Hardness", value: "58 to 60 HRC" },
        { label: "Inspection", value: "Checked via Micrometer" }
      ],
      description: "Precision external cylindrical grinding combined with controlled electroplating to deliver ultra-hard, scratch-resistant piston rods that withstand aggressive industrial wear."
    },
    {
      id: "cylinder-testing",
      title: "Hydraulic Cylinder Dual Testing",
      tagline: "Rigorous dual-side pressure testing & stroke verification",
      image: "/images/client/facility-hydraulic-testing-pack.jpg",
      specs: [
        { label: "Dual Pressure Test", value: "Rod End & Piston Side" },
        { label: "Dimensional Verification", value: "Close Length & Open Length (Stroke)" },
        { label: "Leakage Audit", value: "100% Zero-Drop Test" }
      ],
      description: "Every new build and refurbished hydraulic cylinder undergoes full-stroke pressure testing under simulated operating pressures to verify seal integrity and exact stroke lengths."
    }
  ],

  // Quality Assurance & Inspection Instruments (Brochure Pages 2 & 7)
  qualityAssurance: {
    title: "100% Quality Inspection",
    subtitle: "Every component is checked strictly as per engineering drawings",
    image: "/images/client/quality-inspection-instruments.jpg",
    instruments: [
      { name: "Outside Micrometers", desc: "High precision OD measurement across small & large diameters" },
      { name: "Vernier Calipers", desc: "Multi-point dimensional and step verification" },
      { name: "Bore Gauges", desc: "Dial bore measurement verifying H8/H9 internal barrel tolerances" },
      { name: "Depth Micrometers", desc: "Precise counterbore and recess depth confirmation" },
      { name: "TPG Gauges (Thread Pitch & Plug)", desc: "100% thread engagement & pitch compliance verification" }
    ],
    features: [
      "100% components inspected before delivery",
      "Strict compliance with customer CAD/engineering drawings",
      "Surface roughness tester maintained between 0.15 to 0.30 Ra",
      "Hard chrome plating hardness calibrated to 58 - 60 HRC"
    ]
  },

  // Manufactured Products Catalog (Brochure Pages 11, 12, 13)
  products: [
    {
      id: "tierod-cylinders",
      title: "Tie-Rod Hydraulic Cylinders",
      image: "/images/client/product-hydraulic-cylinder-tierod.jpg",
      category: "Hydraulic Actuators",
      desc: "Compact, robust tie-rod hydraulic cylinders engineered for agricultural machinery, machine tools, and industrial automation."
    },
    {
      id: "heavy-duty-cylinders",
      title: "Heavy-Duty Clevis Mounted Cylinders",
      image: "/images/client/product-hydraulic-cylinder-heavy.jpg",
      category: "Heavy Metallurgy & Mills",
      desc: "Heavy-gauge steel barrel cylinders with forged clevis ends built for continuous high-shock loading in steel and cement mills."
    },
    {
      id: "flange-mount-cylinders",
      title: "Flange-Mounted Hydraulic Cylinders",
      image: "/images/client/product-hydraulic-cylinder-flange.jpg",
      category: "Press & Forming Machinery",
      desc: "Front and intermediate flange-mounted cylinders offering rigid alignment for hydraulic presses, stamping dies, and clamping stations."
    },
    {
      id: "industrial-batch-cylinders",
      title: "Large Clevis-Eye Industrial Cylinders",
      image: "/images/client/product-hydraulic-cylinder-industrial-batch.jpg",
      category: "Steel & Material Handling",
      desc: "Heavy industrial cylinders engineered with spherical plain bearing clevis eyes for dockside cranes, ladle handlers, and mining equipment."
    },
    {
      id: "long-stroke-cylinders",
      title: "Long-Stroke Trunnion Cylinders",
      image: "/images/client/product-hydraulic-cylinder-clevis.jpg",
      category: "Heavy Material Handling",
      desc: "Extended stroke hydraulic cylinders with hard-chromed induction-hardened piston rods and heavy-duty trunnion mountings."
    },
    {
      id: "twin-press-cylinders",
      title: "Twin High-Tonnage Press Jacks / Cylinders",
      image: "/images/client/product-hydraulic-cylinder-twin-press.jpg",
      category: "High-Pressure Hydraulic Presses",
      desc: "Synchronized twin hydraulic cylinder assemblies designed for high-tonnage forging, stamping, and heavy structural pressing."
    }
  ],

  // Real Machine Output / Machined Components Gallery (Brochure Page 6 + Workshop Photo)
  machineOutputGallery: [
    {
      title: "Precision Turned Flanges & Blocks",
      image: "/images/workshop-machined-components.jpg",
      category: "Shop Floor Batch Output",
      desc: "Flanges with PCD bolt holes, tapped mounting blocks, sleeves, and brackets ready for assembly."
    },
    {
      title: "Threaded Shafts & Spherical Heads",
      image: "/images/client/machine-output-parts-1.jpg",
      category: "Cylinder Sub-Assemblies",
      desc: "Precision threaded piston rods, spherical end caps, guide bushings, and yellow-passivated flange blocks."
    },
    {
      title: "Stepped Pins, Bushings & Sleeves",
      image: "/images/client/machine-output-parts-2.jpg",
      category: "CNC Machining Output",
      desc: "Tight-tolerance stepped shafts, cylindrical collars, hardened pins, and precision-turned mechanical components."
    }
  ],

  quickHighlights: [
    {
      num: "01",
      title: "CNC & VMC Facilities",
      desc: "Turning up to 500mm dia x 1000mm length, VMC travels up to 800 x 1000 x 600mm."
    },
    {
      num: "02",
      title: "Precision Honing",
      desc: "Horizontal honing maintaining 0.15 to 0.30 Ra surface finish and H8/H9 tolerances."
    },
    {
      num: "03",
      title: "GPG Grinding & Plating",
      desc: "Cylindrical grinding and hard chrome plating maintaining 58 to 60 HRC hardness."
    },
    {
      num: "04",
      title: "Dual Pressure Testing",
      desc: "100% rod end and piston side pressure testing with full stroke and close length checks."
    }
  ],

  services: [
    {
      id: "cnc-work",
      title: "CNC Turning Facility",
      description: "Precision CNC turning from 10mm to 500mm diameter with up to 1000mm turning length.",
      category: "Machining & Turning",
      icon: "Cpu",
      isClientPhoto: true,
      authenticTag: "Dia 10 - 500mm | Length 1000mm"
    },
    {
      id: "vmc-facility",
      title: "VMC Machine Facility",
      description: "Vertical Machining Center with large traveling distance: X 800mm, Y 1000mm, Z 600mm.",
      category: "Vertical Machining",
      icon: "Layers",
      isClientPhoto: true,
      authenticTag: "Travel 800 x 1000 x 600mm"
    },
    {
      id: "lathe-facility",
      title: "Lathe Machine Facility",
      description: "Heavy-duty turning up to 500mm diameter and 2500mm length with steady rest provision.",
      category: "Heavy Turning",
      icon: "Wrench",
      isClientPhoto: true,
      authenticTag: "Length up to 2500mm"
    },
    {
      id: "honing",
      title: "Horizontal Honing Machine",
      description: "Tube bore finishing maintaining 0.15 to 0.30 Ra surface finish and H8/H9 tolerance.",
      category: "Finishing & Tolerances",
      icon: "Target",
      isClientPhoto: true,
      authenticTag: "Ra 0.15-0.30 | H8/H9"
    },
    {
      id: "hard-chrome-plating",
      title: "Grinding & Hard Chrome Plating",
      description: "Cylindrical grinding (GPG process) and chrome plating achieving 58 to 60 HRC hardness.",
      category: "Surface Engineering",
      icon: "ShieldCheck",
      isClientPhoto: true,
      authenticTag: "58 - 60 HRC Hardness"
    },
    {
      id: "hydraulic-cylinder-manufacturing",
      title: "Hydraulic Cylinder Solutions",
      description: "Complete manufacturing, refurbishment, and dual-side pressure testing of industrial cylinders.",
      category: "Hydraulics & Actuation",
      icon: "Cog",
      isClientPhoto: true,
      authenticTag: "Dual Pressure Tested"
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
      id: "oem-spare-parts",
      title: "OEM Spare Parts",
      description: "Precision CNC/VMC machined replacement components, bushings, guide plates, and shafts manufactured strictly as per drawing.",
      tag: "OEM In-House Facility"
    },
    {
      id: "press-machinery",
      title: "Press Machinery",
      description: "High-tonnage hydraulic cylinders, precision-honed barrels, and tight-tolerance seals built for repetitive high-pressure hydraulic presses.",
      tag: "Forging & Stamping"
    }
  ],

  whyChooseUs: [
    {
      title: "In-House Manufacturing Facility",
      description: "Founded in 2024 with a comprehensive machining and cylinder facility located in Bhosari, Pune."
    },
    {
      title: "100% Component Inspection",
      description: "Every item is verified strictly as per drawings using micrometers, verniers, bore gauges, and TPG gauges."
    },
    {
      title: "Tight Technical Tolerances",
      description: "Honing finishes of 0.15 to 0.30 Ra with H8/H9 tolerance and hard-chrome hardness of 58 to 60 HRC."
    },
    {
      title: "Dual-Side Pressure Testing",
      description: "Both rod end and piston sides are pressure tested alongside open and closed stroke length auditing."
    },
    {
      title: "Large Envelope Capacity",
      description: "Lathe turning lengths up to 2500mm and VMC travels up to 800 x 1000 x 600mm."
    },
    {
      title: "Building Strong Relations",
      description: "'We are not only building strong cylinders but also building strong relations' with every client."
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

  let text = `Hello Shree Sidheshwar Industries,\n\nI would like to make an enquiry regarding:`;

  if (serviceName) {
    text += `\nService / Facility: ${serviceName}`;
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
    text += `\n\nRequirement Details:\n${requirement}`;
  }

  text += `\n\nPlease contact me with quotation / technical discussion.\n\nThank you.`;

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${companyData.primaryWhatsappNumber}?text=${encoded}`;
}
