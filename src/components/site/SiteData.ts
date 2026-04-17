export const services = [
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
  },
  {
    slug: "tec-mtcte",
    code: "04",
    name: "TEC / MTCTE",
    title: "TEC Approvals & MTCTE Telecom Certification",
    short:
      "Mandatory testing & certification of telecom equipment under Indian Telegraph Rules, 2017.",
    bullets: [
      "Routers, modems, IoT devices, PABX, Wi-Fi APs",
      "Safety, EMI/EMC, technical & RF testing",
      "10-year certificate validity with simple renewal",
    ],
  },
  {
    slug: "nabl-emi-emc",
    code: "05",
    name: "NABL / EMI EMC",
    title: "NABL-Accredited Testing — Electrical, EMI/EMC, Drone, Battery",
    short:
      "Globally accepted accredited testing for safety, EMI/EMC, performance, environmental and tender compliance.",
    bullets: [
      "Electrical safety & EMI/EMC testing",
      "Drone (UAV), battery & environmental testing",
      "Pre-compliance & documentation support",
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
  },
];

export const industries = [
  { name: "Electronics", note: "BIS CRS, EMI/EMC, WPC, TEC" },
  { name: "Food", note: "FSSAI registration & licensing" },
  { name: "Cosmetics", note: "CDSCO import & manufacturing" },
  { name: "Manufacturing", note: "ISO, BEE, BIS ISI marks" },
  { name: "Startups", note: "Make-in-India market entry" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of experience" },
  { value: 850, suffix: "+", label: "Clients across 14 countries" },
  { value: 98, suffix: "%", label: "First-pass success rate" },
  { value: 6, suffix: "", label: "Core regulatory verticals" },
];

export const process = [
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
    problem:
      "Government tender required NABL test reports across 9 parameters within 3 weeks.",
    action:
      "Pre-compliance testing, NABL lab slotting and tender-grade documentation pack.",
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
