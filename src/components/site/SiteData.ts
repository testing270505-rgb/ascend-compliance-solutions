export type Service = {
  slug: string;
  code: string;
  name: string;
  title: string;
  short: string;
  bullets: string[];
  overview: string[];
  pillars: { title: string; body: string }[];
  coverage?: string[];
  benefits?: { feature: string; impact: string }[];
};

export const services: Service[] = [
  {
    slug: "bis-crs",
    code: "01",
    name: "BIS CRS",
    title: "Bureau of Indian Standards — Compulsory Registration",
    short:
      "Test-report-based registration for electronics and IT products under BIS CRS — including LEDs, batteries, UPS and solar inverters.",
    bullets: [
      "Product testing coordination with BIS-recognized labs",
      "End-to-end registration & R-Number lifecycle",
      "Technical dossier & IS standard alignment",
    ],
    overview: [
      "The Compulsory Registration Scheme (CRS) is a mandatory safety framework regulated by the Bureau of Indian Standards (BIS) for electronic and IT products.",
      "Unlike traditional schemes involving factory audits, CRS is test-report-based — compliance is determined by rigorous laboratory evaluation of product samples against specific Indian Standards (IS).",
      "Vision Consultancy specialises in navigating this regulatory landscape for complex categories, including LED / Luminous products, Batteries, UPS, and Solar Inverters.",
    ],
    pillars: [
      {
        title: "Product Testing Coordination",
        body: "We bridge the gap between manufacturers and BIS-recognised laboratories, facilitating sample testing so every product meets the exact technical safety parameters required for its category.",
      },
      {
        title: "End-to-End Registration Support",
        body: "We manage the entire lifecycle of the BIS application — from initial filing to obtaining the R-Number (Registration Number) and handling subsequent renewals.",
      },
      {
        title: "Technical Documentation & Dossier Management",
        body: "We draft and organise all necessary technical dossiers, ensuring 100% alignment with relevant Indian Standards (IS) to prevent delays or rejections.",
      },
    ],
    coverage: [
      "LED & Luminous products",
      "Batteries (Li-ion & sealed)",
      "UPS systems",
      "Solar Inverters",
      "IT & consumer electronics",
    ],
  },
  {
    slug: "bee",
    code: "02",
    name: "BEE",
    title: "BEE Star Rating & Energy Labelling",
    short:
      "Mandatory and voluntary Standards & Labelling certification under the Bureau of Energy Efficiency.",
    bullets: [
      "Star-rating registration for ACs, fans, lighting, TVs",
      "S&L scheme filings for industrial appliances",
      "Renewals, amendments and label artwork",
    ],
    overview: [
      "Established on March 1, 2002 under the Energy Conservation Act, 2001, the Bureau of Energy Efficiency (BEE) operates under the Ministry of Power to reduce the energy intensity of the Indian economy.",
      "The Standards & Labelling (S&L) Certification Scheme is BEE's flagship initiative — designed to minimise electricity consumption in household and commercial appliances. More stars equal higher efficiency and lower bills.",
      "Compliance is mandatory for manufacturers, importers and traders before regulated products can be sold in the Indian market.",
    ],
    pillars: [
      {
        title: "Mandatory Categories",
        body: "Refrigerators (frost-free & direct cool), ACs (fixed & inverter), LED lamps & tubes, color TVs, monitors, ceiling & table fans, distribution transformers, induction motors and electric water heaters.",
      },
      {
        title: "Voluntary Categories",
        body: "Domestic gas stoves, microwave ovens, computers, office automation, washing machines, solar water heaters, diesel generators and air compressors.",
      },
      {
        title: "Lifecycle Management",
        body: "Star-rating registration, renewals, label artwork approval and amendments — handled end-to-end so your launch calendar never slips.",
      },
    ],
    benefits: [
      {
        feature: "Consumer Trust",
        impact: "Recognisable branding that builds confidence in product quality.",
      },
      {
        feature: "Cost Savings",
        impact: "Direct reduction in monthly utility expenses for households.",
      },
      {
        feature: "Eco-Friendly",
        impact: "Significant contribution to India's carbon reduction goals.",
      },
    ],
  },
  {
    slug: "wpc",
    code: "03",
    name: "WPC / ETA",
    title: "WPC & ETA Approval for Wireless Products",
    short:
      "Equipment Type Approval for Bluetooth, Wi-Fi, Zigbee, RFID and other RF-enabled products entering India.",
    bullets: [
      "Accredited RF testing & report preparation",
      "ETA + WPC licence filing with DoT",
      "Frequency-band advisory for product teams",
    ],
    overview: [
      "Products incorporating radio or wireless functionality that are manufactured, imported or sold in India must obtain Equipment Type Approval (ETA) from the Wireless Planning and Coordination (WPC) Wing under the Ministry of Communications.",
      "This applies to devices using Bluetooth, Wi-Fi (Wireless LAN), Zigbee, RFID and similar technologies. The framework is governed by the Department of Telecommunications (DoT).",
      "Pure-receiver devices like GPS-only modules are generally exempt from ETA approval.",
    ],
    pillars: [
      {
        title: "Accredited RF Testing",
        body: "We coordinate testing through recognised, accredited laboratories and prepare compliant RF test reports that pass WPC review on first submission.",
      },
      {
        title: "ETA + WPC Licence Filing",
        body: "Complete documentation, submission and follow-up with WPC and DoT for both ETA approval and the WPC licence — including de-licensed band approvals.",
      },
      {
        title: "Frequency-Band Advisory",
        body: "Pre-design advisory so your product team picks bands and modules that are import-friendly, avoiding costly redesigns at the certification stage.",
      },
    ],
    coverage: [
      "Bluetooth smartwatches & earbuds",
      "Wi-Fi enabled appliances",
      "RFID tags & readers",
      "Wireless medical devices",
      "Laptops, mobiles, wireless mice & keyboards",
      "Remote keyless entry, embedded RF modules",
    ],
  },
  {
    slug: "emi-emc",
    code: "04",
    name: "EMI / EMC",
    title: "EMI / EMC Testing & Compliance",
    short:
      "Electromagnetic interference and compatibility testing to ensure your product co-exists safely with other electronics in the field.",
    bullets: [
      "Radiated & conducted emissions testing",
      "Immunity (ESD, surge, EFT, RF) evaluations",
      "Pre-compliance debugging & design fixes",
    ],
    overview: [
      "EMI/EMC testing verifies that electronic products neither emit excessive electromagnetic interference nor fail in the presence of interference from other equipment.",
      "It is a prerequisite for BIS CRS, TEC MTCTE, WPC and most international approvals — making it the single highest-leverage test in your compliance plan.",
      "We coordinate testing at NABL-accredited EMC labs and provide pre-compliance debugging so the formal test passes the first time.",
    ],
    pillars: [
      {
        title: "Emissions Testing",
        body: "Radiated and conducted emissions testing to CISPR / IS / IEC standards across the relevant frequency range for your product class.",
      },
      {
        title: "Immunity Testing",
        body: "ESD, surge, EFT/burst, radiated RF immunity, conducted RF immunity and power-quality immunity — the full IEC 61000-4 suite as applicable.",
      },
      {
        title: "Pre-Compliance & Design Fixes",
        body: "On-site debugging support, layout / shielding / filtering recommendations and root-cause analysis when a product fails — so retests are quick and cheap.",
      },
    ],
  },
  {
    slug: "nabl-testing",
    code: "05",
    name: "NABL Testing",
    title: "NABL-Accredited Testing — Electrical, Drone, Battery",
    short:
      "Globally accepted accredited testing for safety, performance, environmental and tender compliance.",
    bullets: [
      "Electrical safety, performance & reliability",
      "Drone (UAV), battery & environmental testing",
      "Pre-compliance & documentation support",
    ],
    overview: [
      "NABL (National Accreditation Board for Testing and Calibration Laboratories) accreditation guarantees that test reports are accepted globally and by Indian regulators alike.",
      "NABL reports are essential for BIS, CRS and most government tender qualifications — and they prove product safety, durability and performance to your customers.",
      "We coordinate end-to-end NABL testing for electrical & electronic products, drones (UAVs) and batteries.",
    ],
    pillars: [
      {
        title: "Electrical & Electronic",
        body: "Electrical safety, EMI/EMC, performance, reliability and environmental (temperature, humidity, vibration) testing with full documentation.",
      },
      {
        title: "Drone (UAV) Testing",
        body: "EMI/EMC for interference-free flight, RF & WPC-ETA readiness, environmental and durability testing, battery integration and DGCA documentation.",
      },
      {
        title: "Battery Testing",
        body: "Safety (overcharge, short circuit, thermal abuse), lifecycle and performance testing, UN 38.3 transportation readiness and BIS compliance support.",
      },
    ],
  },
  {
    slug: "trademark-iso",
    code: "06",
    name: "Trademark & ISO",
    title: "Trademark Registration & ISO Certification",
    short:
      "Protect your brand and prove process maturity with end-to-end trademark filings and ISO management system certification.",
    bullets: [
      "Trademark search, filing & objection response",
      "ISO 9001 / 14001 / 27001 / 45001 certification",
      "Documentation, internal audit & gap analysis",
    ],
    overview: [
      "ISO certification ensures that your business adheres to globally recognised management standards — enhancing operational efficiency, regulatory compliance and global reputation.",
      "Trademark registration provides exclusive legal rights to use and protect your brand under the Controller General of Patents, Designs and Trade Marks.",
      "We deliver both as a single, coordinated programme — from gap analysis and documentation through audit to certification, and from trademark search through registration.",
    ],
    pillars: [
      {
        title: "ISO Certification",
        body: "Gap analysis, documentation, implementation support and audit coordination across ISO 9001 (Quality), 14001 (Environment), 27001 (Information Security), 45001 (OH&S) and 22000 (Food Safety).",
      },
      {
        title: "Trademark Registration",
        body: "Availability search, application filing, objection handling and end-to-end registration support — so your brand is legally yours, exclusively.",
      },
      {
        title: "Ongoing Compliance",
        body: "Internal audit programmes, surveillance audit prep and renewal management so certifications stay live and trademarks stay enforceable.",
      },
    ],
  },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of experience" },
  { value: 850, suffix: "+", label: "Clients across 14 countries" },
  { value: 98, suffix: "%", label: "First-pass success rate" },
  { value: 6, suffix: "", label: "Core regulatory verticals" },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    body: "We map your product to the exact Indian Standards and approval routes — no guesswork, no fluff.",
  },
  {
    step: "02",
    title: "Documentation",
    body: "Technical dossiers, BOMs, test plans and IS-aligned paperwork prepared to clear the Bureau on first review.",
  },
  {
    step: "03",
    title: "Application",
    body: "Filing, lab coordination, follow-ups with BIS / WPC / BEE / TEC and on-time delivery of your registration number.",
  },
  {
    step: "04",
    title: "License Approved",
    body: "From approval to post-certification support, we ensure your business stays compliant and ready to scale.",
  },
];

export const cases = [
  {
    client: "European LED manufacturer",
    problem:
      "Three product families blocked at customs without BIS R-Numbers; launch slipping by quarters.",
    action:
      "Parallel sample testing across two BIS-recognized labs, dossier rebuild and expedited filing strategy.",
    result: "All three R-Numbers issued in 38 days. Shipments resumed the following week.",
  },
  {
    client: "IoT smart-lock startup",
    problem:
      "Bluetooth + Wi-Fi module needed simultaneous WPC ETA and BIS CRS to launch on a marketplace.",
    action:
      "Combined RF + safety test plan, single dossier track, coordinated WPC + BIS submissions.",
    result: "Both approvals in under 60 days, marketplace listing live before festive season.",
  },
  {
    client: "Industrial battery brand",
    problem: "Government tender required NABL test reports across 9 parameters within 3 weeks.",
    action: "Pre-compliance testing, NABL lab slotting and tender-grade documentation pack.",
    result: "Tender qualified with zero clarifications; ₹14 Cr order awarded.",
  },
];

export const posts = [
  {
    slug: "how-to-get-bis-certification-in-india",
    title: "How to get BIS certification in India",
    excerpt:
      "A practical 2025 walkthrough of the CRS process — from picking the right Indian Standard to getting your R-Number issued.",
    read: "8 min",
    category: "BIS",
  },
  {
    slug: "iso-certification-cost",
    title: "ISO certification cost in India — what you actually pay",
    excerpt:
      "Real numbers behind ISO 9001, 14001, 27001 and 45001 — registrar fees, audit days, and the hidden documentation cost.",
    read: "6 min",
    category: "ISO",
  },
  {
    slug: "fssai-registration-process",
    title: "FSSAI registration process: Basic, State and Central explained",
    excerpt:
      "Which licence does your food business actually need? Eligibility, documents and timelines for every tier.",
    read: "7 min",
    category: "FSSAI",
  },
];

export const team = [
  { name: "R. Malhotra", role: "Founder & Principal Consultant" },
  { name: "A. Subramaniam", role: "Head of BIS & BEE Practice" },
  { name: "S. Khan", role: "Lead — Wireless & Telecom (WPC/TEC)" },
  { name: "P. Iyer", role: "ISO & Quality Systems Director" },
];
