/**
 * MEDIKART - Medical Equipment & Supplies Catalogue Data
 * Fictional B2B Catalogue (~45 realistic demo products across 10 categories)
 */

const DEFAULT_CATEGORIES = [
  { id: "critical-care", name: "Critical Care & ICU", icon: "activity", count: 7 },
  { id: "cardiology", name: "Cardiology & Diagnostics", icon: "heart", count: 6 },
  { id: "furniture", name: "Hospital Furniture", icon: "layout", count: 5 },
  { id: "surgical", name: "Surgical Instruments & OT", icon: "scissors", count: 5 },
  { id: "radiology", name: "Imaging & Radiology", icon: "aperture", count: 4 },
  { id: "infection-control", name: "Infection Control & Hygiene", icon: "shield", count: 4 },
  { id: "mother-child", name: "Mother & Child Care", icon: "smile", count: 4 },
  { id: "ortho-rehab", name: "Orthopedic & Rehabilitation", icon: "user-check", count: 4 },
  { id: "consumables", name: "Consumables & PPE", icon: "package", count: 4 },
  { id: "laboratory", name: "Laboratory Equipment", icon: "filter", count: 4 }
];

const DEFAULT_BRANDS = [
  { id: "pulmocare", name: "PulmoCare Systems", country: "Germany", verified: true },
  { id: "cardiosync", name: "CardioSync India", country: "India", verified: true },
  { id: "aurasurg", name: "AuraSurg Technologies", country: "Japan", verified: true },
  { id: "neovital", name: "NeoVital Medical", country: "USA", verified: true },
  { id: "omnibed", name: "OmniBed Hospitalics", country: "India", verified: true },
  { id: "orthopro", name: "OrthoPro Dynamics", country: "Germany", verified: true },
  { id: "sterilsafe", name: "SterilSafe Labs", country: "India", verified: true },
  { id: "bioscan", name: "BioScan Diagnostics", country: "South Korea", verified: true },
  { id: "medlinex", name: "Medlinex Global", country: "UK", verified: true },
  { id: "apexlab", name: "ApexLab Instruments", country: "India", verified: true }
];

const DEFAULT_PRODUCTS = [
  // 1. Critical Care & ICU
  {
    id: "prod-101",
    sku: "MK-CC-101",
    name: "Apex 12.1\" Multi-Parameter ICU Patient Monitor (ECG, SpO2, NIBP, Respiration, Temp)",
    brand: "PulmoCare Systems",
    category: "critical-care",
    subcategory: "Patient Monitors",
    price: 48500,
    mrp: 68000,
    stock: 24,
    rating: 4.8,
    reviewsCount: 38,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80"
    ],
    description: "High-acuity 12.1-inch color TFT touchscreen monitor engineered for intensive care and post-operative wards. Includes standard 5-lead ECG, Masimo rainbow SpO2, dual-channel temperature, SunTech non-invasive blood pressure, and ST-segment arrhythmia detection. Features 120-hour trend data review and HL7 network capability.",
    specs: {
      "Display": "12.1-inch high-resolution color TFT screen",
      "Parameters": "ECG, SpO2, NIBP, RESP, 2-TEMP, PR (Optional EtCO2, 2-IBP)",
      "Battery Backup": "Rechargeable Lithium-ion, up to 4 hours continuous run",
      "Network Protocol": "HL7 compatible, Ethernet RJ45, central nursing station sync",
      "Certifications": "CE (EU MDR), ISO 13485, CDSCO Approved",
      "Warranty": "2 Years comprehensive manufacturer warranty"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 5 },
      { minQty: 10, discountPct: 10 },
      { minQty: 25, discountPct: 15 }
    ]
  },
  {
    id: "prod-102",
    sku: "MK-CC-102",
    name: "Volumetric Infusion Pump with Anti-Bolus & Micro Flow Control",
    brand: "PulmoCare Systems",
    category: "critical-care",
    subcategory: "Infusion Pumps",
    price: 19800,
    mrp: 27500,
    stock: 45,
    rating: 4.7,
    reviewsCount: 22,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Microprocessor-controlled volumetric infusion pump suitable for enteral and parenteral intravenous drug delivery. Delivers steady flow rates from 0.1 mL/h to 1200 mL/h. Equipped with dual ultrasonic air bubble detection and downstream occlusion sensors.",
    specs: {
      "Flow Rate Range": "0.1 to 1200.0 mL/hr in 0.1 mL steps",
      "Infusion Accuracy": "±3% with standard IV sets",
      "Safety Sensors": "Ultrasonic air-in-line, anti-free-flow clamp, occlusion sensor",
      "Battery Life": "Over 6 hours at 25 mL/hr",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 4 },
      { minQty: 15, discountPct: 8 },
      { minQty: 30, discountPct: 14 }
    ]
  },
  {
    id: "prod-103",
    sku: "MK-CC-103",
    name: "Dual-Syringe Automatic Micro-Infusion Pump (10mL - 60mL)",
    brand: "PulmoCare Systems",
    category: "critical-care",
    subcategory: "Infusion Pumps",
    price: 24500,
    mrp: 32000,
    stock: 18,
    rating: 4.9,
    reviewsCount: 16,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "High-precision micro syringe pump for NICU, PICU, and anesthesia induction. Auto-recognizes syringe sizes from 10ml to 60ml of all major brands. KVO (Keep Vein Open) rate automatically triggered upon infusion completion.",
    specs: {
      "Applicable Syringes": "10ml, 20ml, 30ml, 50ml, 60ml standard syringes",
      "Accuracy": "±2% mechanical precision",
      "Alarms": "Occlusion, near empty, complete, battery low, dislodged",
      "Power Supply": "AC 100-240V 50/60Hz, internal NiMH battery",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 4, discountPct: 6 },
      { minQty: 10, discountPct: 12 }
    ]
  },
  {
    id: "prod-104",
    sku: "MK-CC-104",
    name: "Heavy-Duty Hospital Electric Suction Machine (40 L/min, Dual 2.5L Jars)",
    brand: "Medlinex Global",
    category: "critical-care",
    subcategory: "Suction Machines",
    price: 16200,
    mrp: 22000,
    stock: 30,
    rating: 4.6,
    reviewsCount: 19,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Oil-free lubrication piston vacuum pump for operating theatres, surgical drainage, and ICU airway clearing. Built with heavy-duty castors for effortless mobile positioning and dual shatter-proof 2.5-liter autoclavable polycarbonate bottles with overflow float valves.",
    specs: {
      "Max Vacuum": ">= 0.09 MPa (680 mmHg)",
      "Pumping Speed": ">= 40 Liters / min",
      "Jars": "2 x 2500 mL polycarbonate autoclavable jars",
      "Noise Level": "<= 60 dB(A)",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 6 },
      { minQty: 20, discountPct: 12 }
    ]
  },
  {
    id: "prod-105",
    sku: "MK-CC-105",
    name: "Medical Grade 10-Liter Dual-Flow Oxygen Concentrator (95% Purity)",
    brand: "PulmoCare Systems",
    category: "critical-care",
    subcategory: "Respiratory Care",
    price: 49999,
    mrp: 75000,
    stock: 15,
    rating: 4.9,
    reviewsCount: 44,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Continuous duty 10L medical oxygen generator with dual flowmeters allowing simultaneous treatment of two patients. Utilizes imported French CECA molecular sieves ensuring consistent 93% ± 3% purity even at max continuous 10 LPM output.",
    specs: {
      "Flow Range": "1 to 10 Liters/min (dual split outlet)",
      "Oxygen Purity": "93% ± 3% across all output rates",
      "Outlet Pressure": "0.04 - 0.07 MPa",
      "Compressor": "German copper-core oil-less compressor",
      "Warranty": "2 Years / 10,000 Hours"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 5 },
      { minQty: 10, discountPct: 12 }
    ]
  },
  {
    id: "prod-106",
    sku: "MK-CC-106",
    name: "Biphasic Defibrillator Monitor with AED & External Pacing",
    brand: "CardioSync India",
    category: "critical-care",
    subcategory: "Defibrillators",
    price: 185000,
    mrp: 240000,
    stock: 8,
    rating: 4.9,
    reviewsCount: 12,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Advanced biphasic truncated exponential waveform defibrillator designed for emergency departments and mobile resuscitation carts. Integrated with 7-inch color display for 3-lead ECG monitoring, automated voice-prompted AED mode, synchronized cardioversion, and non-invasive transcutaneous pacing.",
    specs: {
      "Energy Range": "Manual: 1 to 360 Joules; AED: 150-200 Joules biphasic",
      "Charging Time": "< 5 seconds to 200J with full battery",
      "Pacing": "Demand and Fixed mode, 40 to 180 ppm",
      "Recorder": "Built-in 50mm thermal strip printer",
      "Warranty": "3 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 4 },
      { minQty: 5, discountPct: 8 }
    ]
  },
  {
    id: "prod-107",
    sku: "MK-CC-107",
    name: "ICU Heated Humidifier for Invasive & Non-Invasive Ventilation",
    brand: "PulmoCare Systems",
    category: "critical-care",
    subcategory: "Ventilator Accessories",
    price: 28900,
    mrp: 38000,
    stock: 20,
    rating: 4.7,
    reviewsCount: 14,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Microprocessor temperature control respiratory humidifier with dual heated-wire circuitry. Prevents condensation rainout in adult, pediatric, and neonatal ventilator breathing circuits.",
    specs: {
      "Temperature Range": "31°C to 40°C adjustable",
      "Modes": "Invasive & Non-invasive preset algorithms",
      "Certifications": "ISO 8185, CE",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 6 }
    ]
  },

  // 2. Cardiology & Diagnostics
  {
    id: "prod-201",
    sku: "MK-CD-201",
    name: "CardioSync 12-Channel ECG Machine with Glasgow Interpretation Algorithm",
    brand: "CardioSync India",
    category: "cardiology",
    subcategory: "ECG Machines",
    price: 54000,
    mrp: 72000,
    stock: 28,
    rating: 4.9,
    reviewsCount: 52,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Full clinical 12-lead simultaneous acquisition electrocardiograph featuring a high-resolution 10-inch tilting color touch display. Incorporates the internationally benchmarked University of Glasgow ECG diagnostic interpretation algorithm. Thermal A4 print capability and direct USB PDF export.",
    specs: {
      "Display": "10-inch HD color touchscreen",
      "Recording Channels": "12 Leads simultaneous preview & print",
      "Storage": "Up to 1,000 ECG files in internal memory, SD/USB expansion",
      "Printer": "210mm roll/Z-fold thermal paper & external USB A4 laser print support",
      "Warranty": "3 Years"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 5 },
      { minQty: 8, discountPct: 10 }
    ]
  },
  {
    id: "prod-202",
    sku: "MK-CD-202",
    name: "Digital Electronic Stethoscope with 40x Sound Amplification & Bluetooth",
    brand: "CardioSync India",
    category: "cardiology",
    subcategory: "Stethoscopes",
    price: 18900,
    mrp: 26000,
    stock: 50,
    rating: 4.8,
    reviewsCount: 65,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Cutting-edge acoustic amplification stethoscope with up to 40x ambient sound dampening. Transmits heart and lung sounds in real-time to Android/iOS or telemedicine workstations via encrypted Bluetooth BLE.",
    specs: {
      "Amplification": "Up to 40x (at peak frequency vs acoustic stethoscope)",
      "Acoustic Modes": "Bell mode, Diaphragm mode, Extended range",
      "Connectivity": "Bluetooth 5.0 wireless sync to MediKart App",
      "Battery": "Rechargeable via USB-C, 60 hours continuous active listening",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 7 },
      { minQty: 20, discountPct: 15 }
    ]
  },
  {
    id: "prod-203",
    sku: "MK-CD-203",
    name: "CardioSync 24-Hour Ambulatory Holter ECG Monitor System with Analysis Software",
    brand: "CardioSync India",
    category: "cardiology",
    subcategory: "Holter Systems",
    price: 82000,
    mrp: 110000,
    stock: 12,
    rating: 4.7,
    reviewsCount: 18,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-compact lightweight 12-channel digital Holter recorder weighing under 50g. Delivers continuous 24 to 72 hours ECG recording on a single AAA battery. Includes full Windows software suite for rapid AI arrhythmia analysis, atrial fibrillation detection, and HRV graphing.",
    specs: {
      "Channels": "12-lead standard cable",
      "Sample Rate": "10,000 Hz high fidelity",
      "Recording Time": "24h, 48h, or 72h continuous",
      "Software": "Unlimited installation perpetual clinic license included",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 5, discountPct: 10 }
    ]
  },
  {
    id: "prod-204",
    sku: "MK-CD-204",
    name: "Hospital Clinical Fingertip Pulse Oximeter with Perfusion Index (OLED)",
    brand: "BioScan Diagnostics",
    category: "cardiology",
    subcategory: "Pulse Oximeters",
    price: 1450,
    mrp: 2400,
    stock: 120,
    rating: 4.8,
    reviewsCount: 140,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Clinical grade multi-directional dual-color OLED fingertip oximeter. Displays SpO2, pulse rate, plethysmograph waveform, and Perfusion Index (PI) reliably down to 0.2% low perfusion.",
    specs: {
      "SpO2 Range": "70% - 100% ± 2%",
      "Pulse Rate": "30 - 250 bpm ± 1 bpm",
      "Perfusion Index": "0.2% - 20%",
      "Auto Power Off": "8 seconds idle",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 10 },
      { minQty: 50, discountPct: 20 },
      { minQty: 100, discountPct: 30 }
    ]
  },
  {
    id: "prod-205",
    sku: "MK-CD-205",
    name: "Automated Clinical Blood Pressure Monitor with AFib Screening",
    brand: "BioScan Diagnostics",
    category: "cardiology",
    subcategory: "BP Monitors",
    price: 6800,
    mrp: 9500,
    stock: 60,
    rating: 4.6,
    reviewsCount: 31,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Designed for physician consulting tables. Incorporates automatic triple-measurement average mode and AFib irregular heartbeat detection algorithm validated to ESH and BHS clinical protocols.",
    specs: {
      "Accuracy": "Pressure ±3 mmHg, Pulse ±5%",
      "Cuff Range": "Dual cuffs included (22-32 cm & 32-42 cm)",
      "Memory": "2 users x 100 readings with date/time stamp",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 20, discountPct: 15 }
    ]
  },
  {
    id: "prod-206",
    sku: "MK-CD-206",
    name: "Treadmill Stress Test TMT ECG System with Wireless Acquisition Module",
    brand: "CardioSync India",
    category: "cardiology",
    subcategory: "TMT Systems",
    price: 345000,
    mrp: 420000,
    stock: 5,
    rating: 4.9,
    reviewsCount: 9,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Comprehensive cardiovascular stress testing treadmill workstation with heavy-duty AC motor (3.0 HP continuous) and wireless Bluetooth transmitter eliminating cable movement artifact during patient exercise.",
    specs: {
      "Motor Capacity": "3.0 HP AC vector drive, speed 0.8 to 18 km/h",
      "Elevation": "0% to 22% programmable gradient",
      "Protocols": "Standard Bruce, Modified Bruce, Balke, Ellestad, Custom",
      "Warranty": "3 Years on electronic module, 5 Years on treadmill motor"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 6 }
    ]
  },

  // 3. Hospital Furniture
  {
    id: "prod-301",
    sku: "MK-HF-301",
    name: "OmniBed 5-Function Fully Electric ICU Bed with CPR & Trendelenburg",
    brand: "OmniBed Hospitalics",
    category: "furniture",
    subcategory: "ICU Beds",
    price: 115000,
    mrp: 155000,
    stock: 14,
    rating: 4.9,
    reviewsCount: 29,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium hospital intensive care unit motorized bed with Linak (Denmark) linear actuators. Controlled via attendant nurse control panel and patient side rail touchpads. Features rapid one-touch manual CPR lever, Trendelenburg / Reverse Trendelenburg angles, and integrated weight scale.",
    specs: {
      "Actuators": "4 Linak IPX4 waterproof electric motors with backup battery",
      "Dimensions": "2200 mm L x 1020 mm W x 480-780 mm H",
      "Load Capacity": "Safe working load 250 kg",
      "Side Rails": "Tuck-away split ABS polymer rails with angle indicators",
      "Castors": "Central braking 150mm Tente German wheels",
      "Warranty": "3 Years comprehensive warranty"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 15, discountPct: 14 },
      { minQty: 30, discountPct: 20 }
    ]
  },
  {
    id: "prod-302",
    sku: "MK-HF-302",
    name: "Semi-Fowler Deluxe Ward Hospital Bed with ABS Panels & Collapsible Rails",
    brand: "OmniBed Hospitalics",
    category: "furniture",
    subcategory: "Ward Beds",
    price: 24500,
    mrp: 34000,
    stock: 40,
    rating: 4.7,
    reviewsCount: 35,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sturdy single-crank manual bed for general ward patient accommodation. High quality epoxy powder-coated mild steel frame with removable ABS head and foot boards and fold-down aluminum safety side rails.",
    specs: {
      "Backrest Adjustment": "0° to 75° smooth mechanical screw mechanism",
      "Mattress Platform": "Perforated CRCA sheet top with ventilation slots",
      "Accessories": "Telescopic stainless steel IV pole with 4 hooks included",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 10 },
      { minQty: 25, discountPct: 18 }
    ]
  },
  {
    id: "prod-303",
    sku: "MK-HF-303",
    name: "Hydraulic Multi-Position OPD Examination Couch with Paper Roll Holder",
    brand: "OmniBed Hospitalics",
    category: "furniture",
    subcategory: "Examination Couches",
    price: 36000,
    mrp: 48000,
    stock: 22,
    rating: 4.8,
    reviewsCount: 17,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ergonomic doctor clinic examination table equipped with foot-pedal hydraulic height elevation. Seamless antimicrobial medical leatherette upholstery resistant to disinfectants and blood stains.",
    specs: {
      "Height Range": "550 mm to 900 mm via hydraulic pump",
      "Upholstery": "High-density 60mm foam with flame-retardant PU vinyl",
      "Back Section": "Gas spring supported adjustment up to 70°",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 6 },
      { minQty: 10, discountPct: 12 }
    ]
  },
  {
    id: "prod-304",
    sku: "MK-HF-304",
    name: "Stainless Steel SS-304 Hydraulic Mayo Instrument Trolley for OT",
    brand: "OmniBed Hospitalics",
    category: "furniture",
    subcategory: "OT Trolleys",
    price: 12800,
    mrp: 17500,
    stock: 35,
    rating: 4.6,
    reviewsCount: 20,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium surgical instrument tray table with removable deep-drawn SS 304 tray. Smooth hydraulic foot pedal height adjustment with anti-static swivel castors.",
    specs: {
      "Material": "Complete surgical grade SS 304 satin finish",
      "Tray Size": "560 mm x 400 mm x 30 mm deep",
      "Height Range": "850 mm to 1250 mm",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 15, discountPct: 15 }
    ]
  },
  {
    id: "prod-305",
    sku: "MK-HF-305",
    name: "Overbed Cardiac Food Table with Pneumatic Gas-Spring Lift",
    brand: "OmniBed Hospitalics",
    category: "furniture",
    subcategory: "Overbed Tables",
    price: 6400,
    mrp: 8900,
    stock: 50,
    rating: 4.7,
    reviewsCount: 28,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Fingertip height adjustable patient eating and utility table. Thermoformed molded ABS top with spill-containment rim and recessed cup holder.",
    specs: {
      "Top Dimensions": "850 mm x 400 mm",
      "Elevation": "720 mm to 1020 mm with counterbalanced gas cylinder",
      "Castors": "50mm twin-wheel hooded castors",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 12 },
      { minQty: 30, discountPct: 20 }
    ]
  },

  // 4. Surgical Instruments & OT
  {
    id: "prod-401",
    sku: "MK-SG-401",
    name: "AuraSurg High-Intensity Ceiling Mounted LED Surgical OT Light (Dual Dome)",
    brand: "AuraSurg Technologies",
    category: "surgical",
    subcategory: "Surgical Lights",
    price: 195000,
    mrp: 260000,
    stock: 7,
    rating: 4.9,
    reviewsCount: 15,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Shadowless dual-arm surgical lighting solution providing up to 160,000 Lux on main dome and 120,000 Lux on satellite dome. High CRI 96 with 4 selectable color temperatures (3800K - 5000K) to optimize tissue differentiation during deep cavity procedures.",
    specs: {
      "Illuminance": "160,000 Lux (Dome 1) + 120,000 Lux (Dome 2)",
      "Color Rendering (CRI)": "Ra >= 96, R9 >= 92",
      "LED Lifespan": "> 60,000 Hours German Osram LEDs",
      "Focus Field": "180 - 300 mm motorized spot adjustment",
      "Sterile Handle": "Autoclavable central focusing handle included",
      "Warranty": "3 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 4, discountPct: 10 }
    ]
  },
  {
    id: "prod-402",
    sku: "MK-SG-402",
    name: "Microprocessor 400W Electrosurgical Cautery Unit with Vessel Sealing",
    brand: "AuraSurg Technologies",
    category: "surgical",
    subcategory: "Electrosurgery",
    price: 138000,
    mrp: 185000,
    stock: 11,
    rating: 4.8,
    reviewsCount: 19,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Fully digital monopolar and bipolar electrosurgical generator featuring integrated tissue impedance monitoring. Provides precise Pure Cut, Blend, Fulgurate, Spray Coag, and intelligent bipolar vessel sealing up to 7mm vessels.",
    specs: {
      "Monopolar Cut": "400W pure cut, 250W blend",
      "Monopolar Coag": "120W fulguration, 120W spray",
      "Bipolar Modes": "Micro 70W, Standard 120W, Vessel Seal 150W",
      "Safety Monitoring": "REM (Return Electrode Monitoring) split-patient plate circuit",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 5, discountPct: 12 }
    ]
  },
  {
    id: "prod-403",
    sku: "MK-SG-403",
    name: "Class B Front-Loading 23-Liter Vacuum Autoclave Sterilizer (B-Cycle)",
    brand: "SterilSafe Labs",
    category: "surgical",
    subcategory: "Autoclaves",
    price: 88000,
    mrp: 120000,
    stock: 16,
    rating: 4.9,
    reviewsCount: 27,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "European EN 13060 Class B compliant pre- and post-vacuum table-top steam sterilizer. Ideal for solid, hollow, and porous wrapped surgical or dental instruments. Built-in thermal micro-printer for sterilization cycle documentation.",
    specs: {
      "Chamber Capacity": "23 Liters, SS 304 seamless drawn (245mm dia x 450mm deep)",
      "Vacuum System": "Triple fractionated pre-vacuum pulse pump",
      "Cycles": "134°C Wrapped (B-cycle), 121°C Porous, Bowie & Dick / Helix test",
      "Dry System": "Active vacuum pulsed drying",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 6 },
      { minQty: 8, discountPct: 12 }
    ]
  },
  {
    id: "prod-404",
    sku: "MK-SG-404",
    name: "General Laparoscopic Instrument Set (32 Pcs German Grade Stainless Steel)",
    brand: "AuraSurg Technologies",
    category: "surgical",
    subcategory: "Laparoscopy Sets",
    price: 76000,
    mrp: 98000,
    stock: 20,
    rating: 4.7,
    reviewsCount: 14,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Complete 32-piece minimally invasive laparoscopy kit containing 5mm & 10mm Maryland graspers, Johan fenestrated forceps, Metzenbaum curved scissors, needle holders, suction-irrigation cannula, and trocars.",
    specs: {
      "Steel Grade": "AISI 420 Martensitic German Stainless Steel",
      "Insulation": "High-durability PEEK shaft insulation rated to 4kV",
      "Sterilization": "100% Autoclavable at 134°C",
      "Warranty": "2 Years against rust and pitting"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 6 },
      { minQty: 5, discountPct: 12 }
    ]
  },
  {
    id: "prod-405",
    sku: "MK-SG-405",
    name: "Portable LED Cold Light Source (100W, 5700K Daylight) for Endoscopy",
    brand: "AuraSurg Technologies",
    category: "surgical",
    subcategory: "Endoscopy Lights",
    price: 32000,
    mrp: 44000,
    stock: 25,
    rating: 4.8,
    reviewsCount: 11,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Compact 100W medical LED illuminator for arthroscopy, laparoscopy, and ENT endoscopy. Four-standard optical turret connector compatible with Storz, Wolf, Olympus, and ACMI light guide cables.",
    specs: {
      "Light Engine": "100W Medical COB LED, > 50,000 hrs lifespan",
      "Color Temperature": "5700 Kelvin pure daylight",
      "Luminous Flux": "3,000 Lumens output at end of fiber optic cable",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 5 }
    ]
  },

  // 5. Imaging & Radiology
  {
    id: "prod-501",
    sku: "MK-XR-501",
    name: "BioScan Wireless Handheld Color Doppler Ultrasound Scanner (Convex & Cardiac)",
    brand: "BioScan Diagnostics",
    category: "radiology",
    subcategory: "Ultrasound",
    price: 198000,
    mrp: 265000,
    stock: 9,
    rating: 4.9,
    reviewsCount: 26,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Pocket-sized all-in-one dual-head convex and phased array cardiac color Doppler probe. Connects wirelessly via direct Wi-Fi to Apple iPad, iPhone, and Android tablets. Delivers exceptional imaging for abdominal, obstetric, lung, and bedside emergency cardiac evaluations.",
    specs: {
      "Frequency": "Convex: 3.5 / 5.0 MHz; Phased Array: 2.5 / 5.0 MHz",
      "Scan Modes": "B, B/M, Color Doppler, Power Doppler, Pulsed Wave (PW)",
      "Battery": "Built-in 2800mAh, wireless inductive charging pad included",
      "Software": "No subscription fees; DICOM 3.0 export and cloud PACS sync",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 4, discountPct: 9 }
    ]
  },
  {
    id: "prod-502",
    sku: "MK-XR-502",
    name: "Mobile 100mA High-Frequency X-Ray Machine with Articulated Counterpoise Arm",
    brand: "BioScan Diagnostics",
    category: "radiology",
    subcategory: "X-Ray Systems",
    price: 295000,
    mrp: 380000,
    stock: 5,
    rating: 4.8,
    reviewsCount: 8,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hospital ward bedside high-frequency mobile radiography unit with AERB compliance. Spring-balanced articulated arm allows effortless single-operator alignment for orthopedic, chest, and trauma X-rays.",
    specs: {
      "Generator": "4.0 kW, 100 kHz high-frequency inverter",
      "Output Ratings": "40 to 100 kV in 1 kV steps; 0.1 to 100 mAs",
      "Tube": "Stationary anode tube with 1.5mm focal spot",
      "Compliance": "AERB Approved, BARC Certified",
      "Warranty": "2 Years comprehensive"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 4 }
    ]
  },
  {
    id: "prod-503",
    sku: "MK-XR-503",
    name: "Ultra-Light Lead Radiation Protective Apron (0.50mm Pb Equiv with Thyroid Collar)",
    brand: "BioScan Diagnostics",
    category: "radiology",
    subcategory: "Radiation Protection",
    price: 11500,
    mrp: 16000,
    stock: 45,
    rating: 4.7,
    reviewsCount: 30,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Lightweight multi-polymer lead composite apron offering 0.50mm Pb equivalency protection. Weight reduced by 25% compared to conventional lead rubber sheets, minimizing back fatigue in cath labs and OT fluoroscopy.",
    specs: {
      "Protection Level": "0.50 mm Pb equiv at 100 kVp",
      "Accessories": "Magnetic buckle thyroid guard included",
      "Outer Shell": "Water-resistant, antimicrobial ripstop nylon",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 20, discountPct: 15 }
    ]
  },
  {
    id: "prod-504",
    sku: "MK-XR-504",
    name: "Slim LED Double-Bank X-Ray Film Illuminator Viewer with Film Sensors",
    brand: "BioScan Diagnostics",
    category: "radiology",
    subcategory: "X-Ray Viewers",
    price: 8400,
    mrp: 12000,
    stock: 30,
    rating: 4.8,
    reviewsCount: 22,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-thin (25mm depth) double bank LED medical viewbox. Automatically illuminates when film is clipped in. Continuous step-less dimmer from 300 to 5,000 cd/m2.",
    specs: {
      "Viewing Area": "720 mm x 420 mm (Double standard 14x17 inch films)",
      "Luminance": "Up to 5,000 cd/m2 uniform cold LED lighting",
      "Thickness": "25 mm wall-mount profile",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 10 }
    ]
  },

  // 6. Infection Control & Hygiene
  {
    id: "prod-601",
    sku: "MK-IC-601",
    name: "Mobile 360° Hospital Room UV-C Disinfection Tower with Radar Safety Cut-off",
    brand: "SterilSafe Labs",
    category: "infection-control",
    subcategory: "UV-C Towers",
    price: 68000,
    mrp: 95000,
    stock: 15,
    rating: 4.9,
    reviewsCount: 21,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Commercial hospital UV-C sterilization column with 8 Philips 254nm germicidal lamps delivering 99.99% viral and bacterial eradication in OT rooms and patient isolation wards within 15 minutes. Features 360-degree microwave radar motion detection to automatically shutdown lamps if human presence is detected.",
    specs: {
      "Lamp Configuration": "8 x 36W Philips TUV germicidal tubes",
      "Irradiance": "> 380 uW/cm2 at 1 meter distance",
      "Safety Sensors": "Triple radar motion sensors with instant cut-off",
      "Timer": "Digital wireless remote with 15/30/60 minute cycle selection",
      "Warranty": "2 Years (lamps covered 1 year)"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 8 },
      { minQty: 10, discountPct: 15 }
    ]
  },
  {
    id: "prod-602",
    sku: "MK-IC-602",
    name: "Hospital Electric Aerosol Cold Fogger ULV Disinfection Machine (5L)",
    brand: "SterilSafe Labs",
    category: "infection-control",
    subcategory: "Foggers",
    price: 11200,
    mrp: 15500,
    stock: 35,
    rating: 4.7,
    reviewsCount: 38,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-low volume (ULV) cold fogger utilizing 1200W motor producing micro-droplets (5-50 microns) for deep aerial sanitization of wards, clinics, ambulances, and ICU cubicles.",
    specs: {
      "Tank Capacity": "5 Liters corrosion-resistant PE",
      "Particle Size": "5 to 50 microns adjustable",
      "Spray Distance": "6 to 8 meters spray throw",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 20, discountPct: 18 }
    ]
  },
  {
    id: "prod-603",
    sku: "MK-IC-603",
    name: "Touchless Sensor Hand Sanitizer Dispenser Stand with Temperature Scanner",
    brand: "SterilSafe Labs",
    category: "infection-control",
    subcategory: "Sanitizer Stations",
    price: 4900,
    mrp: 7200,
    stock: 80,
    rating: 4.6,
    reviewsCount: 45,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Heavy-duty steel floor kiosk dispenser featuring automatic infrared wrist temperature measurement and 1000ml gel/liquid spray dispenser. Ideal for hospital reception entrances.",
    specs: {
      "Capacity": "1000 mL refillable bottle",
      "Thermometer": "Non-contact infrared with audio alarm (>37.3°C)",
      "Power": "4x AA batteries or USB Type-C plug-in",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 10 },
      { minQty: 30, discountPct: 20 }
    ]
  },
  {
    id: "prod-604",
    sku: "MK-IC-604",
    name: "Stainless Steel SS-304 Biohazard Waste Pedal Bin (4-Color Set, 30L Each)",
    brand: "SterilSafe Labs",
    category: "infection-control",
    subcategory: "Waste Management",
    price: 8900,
    mrp: 12500,
    stock: 50,
    rating: 4.8,
    reviewsCount: 29,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Color-coded biomedical waste pedal bins (Yellow, Red, Blue, Black) conforming to Biomedical Waste Management Rules 2016. Soft-closing lids with heavy-duty foot pedal mechanism.",
    specs: {
      "Capacity": "30 Liters per bin (4 bins in complete set)",
      "Material": "SS 304 outer shell with removable heavy-duty plastic inner bucket",
      "Pedal": "Foot-operated hands-free dampener lid",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 15, discountPct: 15 }
    ]
  },

  // 7. Mother & Child Care
  {
    id: "prod-701",
    sku: "MK-MC-701",
    name: "NeoVital Microprocessor Infant Radiant Warmer with Skin Servo Control",
    brand: "NeoVital Medical",
    category: "mother-child",
    subcategory: "Radiant Warmers",
    price: 68500,
    mrp: 92000,
    stock: 12,
    rating: 4.9,
    reviewsCount: 23,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Advanced neonatal resuscitation and thermal support infant warmer. Uses ceramic infrared heating emitter with multi-point temperature sensors. Features APGAR score timer, motorized tilt bassinet, and comprehensive safety audio-visual alarms.",
    specs: {
      "Heater Unit": "Ceramic infrared swivel heater with LED observation lamp",
      "Control Modes": "Servo Skin mode, Manual mode, Pre-warm mode",
      "Bed Tilting": "Continuous ±15° motorized tilt",
      "Safety Alarms": "Skin temp high/low (±1°C), probe failure, power fail, system fail",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 5, discountPct: 10 }
    ]
  },
  {
    id: "prod-702",
    sku: "MK-MC-702",
    name: "LED Neonatal Phototherapy Unit (Overhead Double Surface System)",
    brand: "NeoVital Medical",
    category: "mother-child",
    subcategory: "Phototherapy",
    price: 34000,
    mrp: 46000,
    stock: 18,
    rating: 4.8,
    reviewsCount: 16,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    ],
    description: "High-intensity narrow-band blue LED phototherapy device for neonatal jaundice treatment. Peak emission between 450 - 470 nm minimizing bilirubin without harmful UV or excess heat emission.",
    specs: {
      "Wavelength": "450 - 470 nm Blue LEDs (zero infrared/UV hazard)",
      "Intensity": "> 40 uW/cm2/nm irradiance on patient surface",
      "Timer": "Cumulative lamp hour meter and treatment duration timer",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 6 },
      { minQty: 8, discountPct: 12 }
    ]
  },
  {
    id: "prod-703",
    sku: "MK-MC-703",
    name: "Pocket Fetal Doppler with 2.5MHz Waterproof Probe & Color LCD Curve",
    brand: "NeoVital Medical",
    category: "mother-child",
    subcategory: "Fetal Dopplers",
    price: 3800,
    mrp: 5500,
    stock: 70,
    rating: 4.8,
    reviewsCount: 50,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Handheld obstetric diagnostic fetal heart rate detector. Features high-sensitivity 2.5 MHz ultrasound probe and built-in loudspeaker with crystal clear audio output.",
    specs: {
      "Probe Frequency": "2.5 MHz waterproof ultrasound transducer",
      "FHR Range": "50 - 240 bpm ± 2 bpm",
      "Screen": "TFT color screen showing heart rate numeric & waveform",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 10 },
      { minQty: 25, discountPct: 18 }
    ]
  },
  {
    id: "prod-704",
    sku: "MK-MC-704",
    name: "Digital Electronic Pediatric & Baby Weighing Scale with Tare Function",
    brand: "NeoVital Medical",
    category: "mother-child",
    subcategory: "Baby Scales",
    price: 4200,
    mrp: 6000,
    stock: 40,
    rating: 4.7,
    reviewsCount: 24,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Curved ergonomic infant weighing tray scale with dynamic hold feature for active kicking babies. Accurate to 5 grams with easy tare function for blankets.",
    specs: {
      "Capacity": "20 kg max, 5 g graduation",
      "Tray": "Contoured ABS platform (55 cm x 30 cm)",
      "Display": "Backlit LCD screen",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 15, discountPct: 15 }
    ]
  },

  // 8. Orthopedic & Rehabilitation
  {
    id: "prod-801",
    sku: "MK-OR-801",
    name: "Motorized Foldable Electric Wheelchair with Smart 360° Joystick Controller",
    brand: "OrthoPro Dynamics",
    category: "ortho-rehab",
    subcategory: "Electric Wheelchairs",
    price: 52000,
    mrp: 74000,
    stock: 14,
    rating: 4.9,
    reviewsCount: 31,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Lightweight aircraft-grade aluminum alloy powered wheelchair. Folds in 3 seconds to fit car boots. Equipped with dual 250W silent brushless motors and electromagnetic braking system.",
    specs: {
      "Motors": "2 x 250W German-spec brushless hub motors",
      "Battery": "24V 12Ah Quick-release Lithium battery (up to 20 km range)",
      "Speed": "0 to 6 km/h variable 5-speed dial",
      "Weight Capacity": "120 kg maximum load",
      "Warranty": "2 Years on frame and controller, 1 Year on battery"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 5, discountPct: 12 }
    ]
  },
  {
    id: "prod-802",
    sku: "MK-OR-802",
    name: "Heavy-Duty Hospital Patient Transfer Stretcher Trolley with Height Adjustment",
    brand: "OrthoPro Dynamics",
    category: "ortho-rehab",
    subcategory: "Stretchers",
    price: 38500,
    mrp: 52000,
    stock: 18,
    rating: 4.8,
    reviewsCount: 19,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Emergency casualty transport stretcher trolley with hydraulic foot-crank height control, collapsible side rails, IV pole, and oxygen cylinder cage.",
    specs: {
      "Platform": "X-Ray translucent backrest section",
      "Wheels": "Central brake 150mm castors with direction locking wheel",
      "Weight Capacity": "200 kg safe payload",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 6 },
      { minQty: 10, discountPct: 15 }
    ]
  },
  {
    id: "prod-803",
    sku: "MK-OR-803",
    name: "Standard Folding Commode Wheelchair with Removable Pot & Cushioned Seat",
    brand: "OrthoPro Dynamics",
    category: "ortho-rehab",
    subcategory: "Manual Wheelchairs",
    price: 6800,
    mrp: 9500,
    stock: 55,
    rating: 4.6,
    reviewsCount: 42,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Chrome plated steel multi-purpose wheelchair with drop-in commode pail. Solid rubber puncture-free rear wheels and cushioned water-resistant leatherette seat.",
    specs: {
      "Frame": "Chrome plated heavy gauge tubular steel",
      "Seat Width": "46 cm standard hospital size",
      "Weight Capacity": "100 kg",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 10 },
      { minQty: 20, discountPct: 20 }
    ]
  },
  {
    id: "prod-804",
    sku: "MK-OR-804",
    name: "Aluminum Reciprocal Lightweight Folding Walker with Front Wheels",
    brand: "OrthoPro Dynamics",
    category: "ortho-rehab",
    subcategory: "Walkers",
    price: 1950,
    mrp: 2900,
    stock: 90,
    rating: 4.7,
    reviewsCount: 58,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Dual function rigid and reciprocal folding walking frame with one-button push mechanism and soft foam handgrips. 8-level height adjustment.",
    specs: {
      "Material": "Anodized aluminum alloy tubing",
      "Height Range": "78 cm to 96 cm adjustable",
      "Weight": "Under 2.6 kg ultra-lightweight",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 12 },
      { minQty: 50, discountPct: 25 }
    ]
  },

  // 9. Consumables & PPE
  {
    id: "prod-901",
    sku: "MK-CS-901",
    name: "Medical Examination Powder-Free Nitrile Gloves (Case of 10 Boxes - 1000 Pcs)",
    brand: "Medlinex Global",
    category: "consumables",
    subcategory: "Gloves",
    price: 3600,
    mrp: 5200,
    stock: 200,
    rating: 4.8,
    reviewsCount: 88,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium hospital grade blue nitrile exam gloves. 100% latex-free and powder-free preventing allergic reactions. Micro-textured fingertips ensure superior grip when handling instruments and wet glassware.",
    specs: {
      "Material": "100% Synthetic Nitrile Polymer",
      "Standards": "ASTM D6319, EN 455 Parts 1, 2, 3, AQL 1.5",
      "Packaging": "10 dispenser boxes of 100 pcs each (Total 1000 pcs/case)",
      "Thickness": "4.0 mil fingertip thickness"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 6 },
      { minQty: 20, discountPct: 14 },
      { minQty: 50, discountPct: 22 }
    ]
  },
  {
    id: "prod-902",
    sku: "MK-CS-902",
    name: "Sterile Disposable IV Cannula with Port & Wings (Box of 100 Pcs - Gauge 20G/22G)",
    brand: "Medlinex Global",
    category: "consumables",
    subcategory: "Infusion Consumables",
    price: 1850,
    mrp: 2800,
    stock: 150,
    rating: 4.8,
    reviewsCount: 47,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "FEP radiopaque catheter with triple facet beveled Japanese back-cut needle for smooth and painless venipuncture. Color coded injection port valve for intermittent medication.",
    specs: {
      "Sterilization": "Ethylene Oxide (EO) gas sterilized individual blister packaging",
      "Shelf Life": "5 Years from manufacture",
      "Quantity": "Box of 100 sterile pieces"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 8 },
      { minQty: 20, discountPct: 18 }
    ]
  },
  {
    id: "prod-903",
    sku: "MK-CS-903",
    name: "Hospital N95 Particulate Respirator Masks (SITRA Certified, Box of 50 Pcs)",
    brand: "Medlinex Global",
    category: "consumables",
    subcategory: "Face Masks",
    price: 1250,
    mrp: 2000,
    stock: 250,
    rating: 4.9,
    reviewsCount: 95,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "5-layer ultrasonically bonded meltblown filtration N95 surgical respirators. Tested to >= 95% particulate filtration efficiency against solid and liquid aerosols.",
    specs: {
      "Filtration": ">= 95% PFE @ 0.3 micron",
      "Design": "Flat-fold shape with padded aluminum noseclip and headband loops",
      "Certifications": "SITRA, CE, ISO 9001",
      "Quantity": "Box of 50 individually packed masks"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 10 },
      { minQty: 50, discountPct: 22 }
    ]
  },
  {
    id: "prod-904",
    sku: "MK-CS-904",
    name: "Sterile Disposable General OT Surgical Drape Kit with Fluid Pouch",
    brand: "Medlinex Global",
    category: "consumables",
    subcategory: "Surgical Drapes",
    price: 850,
    mrp: 1300,
    stock: 120,
    rating: 4.7,
    reviewsCount: 33,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Impervious SMS non-woven surgical drape with adhesive fenestration and integrated fluid collection pouch with suction port. Total barrier against blood and pathogen strike-through.",
    specs: {
      "Fabric": "Medical grade SMS 60 GSM repellent fabric",
      "Kit Inclusions": "1 Fenestrated main drape, 2 Utility drapes, 1 Mayo stand cover",
      "Packaging": "Double wrapped sterile blister pouch"
    },
    bulkSlabs: [
      { minQty: 10, discountPct: 12 },
      { minQty: 50, discountPct: 24 }
    ]
  },

  // 10. Laboratory Equipment
  {
    id: "prod-1001",
    sku: "MK-LB-101",
    name: "Clinical High-Speed Benchtop Centrifuge Machine (16000 RPM, Brushless Motor)",
    brand: "ApexLab Instruments",
    category: "laboratory",
    subcategory: "Centrifuges",
    price: 38000,
    mrp: 52000,
    stock: 16,
    rating: 4.9,
    reviewsCount: 20,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Brushless maintenance-free clinical micro-centrifuge with microprocessor speed and RCF control. Includes angle rotor for 12 x 1.5/2.0ml tubes and blood tube adapters.",
    specs: {
      "Max Speed": "16,000 RPM (Max RCF: 18,200 x g)",
      "Timer": "1 to 99 minutes with pulse quick-spin mode",
      "Safety": "Electronic lid interlock, imbalance sensor, over-speed detection",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 6, discountPct: 12 }
    ]
  },
  {
    id: "prod-1002",
    sku: "MK-LB-102",
    name: "Infinity Plan Achromatic Binocular Clinical Laboratory Microscope with LED",
    brand: "ApexLab Instruments",
    category: "laboratory",
    subcategory: "Microscopes",
    price: 27500,
    mrp: 38000,
    stock: 25,
    rating: 4.8,
    reviewsCount: 34,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Clinical diagnostic binocular microscope with Kohler illumination and 4 plan-achromatic objectives (4x, 10x, 40x, 100x Oil). Coaxial coarse and fine focusing.",
    specs: {
      "Optical System": "Infinity corrected color-corrected optical system",
      "Eyepieces": "WF 10x/20mm wide-field eyepieces with diopter adjustments",
      "Objectives": "Infinity Plan 4X, 10X, 40X (spring), 100X (spring, oil)",
      "Illumination": "3W variable intensity cool LED with Kohler condenser",
      "Warranty": "3 Years"
    },
    bulkSlabs: [
      { minQty: 3, discountPct: 6 },
      { minQty: 10, discountPct: 14 }
    ]
  },
  {
    id: "prod-1003",
    sku: "MK-LB-103",
    name: "Semi-Automated Clinical Chemistry Analyzer with Built-in Thermal Incubator",
    brand: "ApexLab Instruments",
    category: "laboratory",
    subcategory: "Chemistry Analyzers",
    price: 115000,
    mrp: 150000,
    stock: 8,
    rating: 4.9,
    reviewsCount: 15,
    isSpecial: true,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Compact biochemistry spectrophotometer for blood glucose, liver function, renal panel, and lipid profiling. Features 7-inch color touch display and 32ul flow cell.",
    specs: {
      "Wavelengths": "7 Standard interference filters: 340, 405, 492, 510, 546, 578, 630 nm",
      "Photometric Range": "0.0000 to 3.0000 Absorbance",
      "Incubator": "Built-in 10-position Peltier incubator at 37°C ± 0.1°C",
      "Printer": "Internal thermal printer + external USB printer support",
      "Warranty": "2 Years"
    },
    bulkSlabs: [
      { minQty: 2, discountPct: 5 },
      { minQty: 4, discountPct: 10 }
    ]
  },
  {
    id: "prod-1004",
    sku: "MK-LB-104",
    name: "Autoclavable Variable Volume Micropipette Set (4 Pcs: 0.5-10ul, 10-100ul, 100-1000ul)",
    brand: "ApexLab Instruments",
    category: "laboratory",
    subcategory: "Pipettes",
    price: 6200,
    mrp: 9000,
    stock: 45,
    rating: 4.7,
    reviewsCount: 28,
    isSpecial: false,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Fully autoclavable ergonomic liquid handling micropipettes conforming to ISO 8655. Includes pipette carousel stand and calibration tool.",
    specs: {
      "Calibration": "Individual calibration certificate included with each pipette",
      "Autoclavable": "Fully autoclavable at 121°C for 20 minutes without disassembly",
      "Inclusions": "4 Pipettes, linear carousel stand, sample tips",
      "Warranty": "1 Year"
    },
    bulkSlabs: [
      { minQty: 5, discountPct: 10 },
      { minQty: 20, discountPct: 20 }
    ]
  }
];

// Sample Verified Customer Reviews
const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    productId: "prod-101",
    author: "Dr. Alok Verma",
    hospital: "Apex Super Specialty Hospital, Bengaluru",
    rating: 5,
    date: "2026-09-14",
    comment: "Installed 6 units in our new surgical ICU wing. The waveform accuracy and NIBP cycle reliability matches monitors twice the price. Excellent GST invoice documentation.",
    helpfulCount: 14
  },
  {
    id: "rev-2",
    productId: "prod-101",
    author: "Dr. Neha Sharma",
    hospital: "City Care Clinic & Trauma Centre",
    rating: 5,
    date: "2026-08-28",
    comment: "High resolution touchscreen is very responsive even when wearing surgical gloves. Sound alarms are clearly audible across the ward.",
    helpfulCount: 9
  },
  {
    id: "rev-3",
    productId: "prod-201",
    author: "Dr. R. K. Mukherjee",
    hospital: "Heart & Vascular Research Institute",
    rating: 5,
    date: "2026-09-02",
    comment: "The Glasgow interpretation algorithm is remarkably accurate for identifying subtle ischemia. Direct USB PDF export saved our technicians hours of filing.",
    helpfulCount: 18
  },
  {
    id: "rev-4",
    productId: "prod-301",
    author: "Sister Mary",
    hospital: "St. Jude Nursing Home, Kochi",
    rating: 5,
    date: "2026-09-18",
    comment: "The motorized controls are ultra smooth and silent. Patients can adjust their own backrest angle safely without calling attendants.",
    helpfulCount: 11
  }
];

// Default Promotional Coupons
const DEFAULT_COUPONS = [
  { code: "MED10", discountPct: 10, minOrder: 5000, description: "10% Off on orders above ₹5,000", active: true },
  { code: "BULK15", discountPct: 15, minOrder: 50000, description: "15% B2B Institutional Discount on orders above ₹50,000", active: true },
  { code: "FIRST5", discountPct: 5, minOrder: 1000, description: "5% Welcome Discount on your first medical purchase", active: true }
];

// Default Hero Banners
const DEFAULT_BANNERS = [
  {
    id: "banner-1",
    badge: "GST INVOICE • B2B PRICING • FAST DISPATCH",
    title: "Equip Your Hospital With <span>World-Class Tech</span>",
    description: "Browse 45+ verified ICU monitors, surgical lasers, OT tables, and imaging solutions with transparent dealer prices and bulk slab discounts.",
    btnPrimaryText: "Explore ICU Equipment",
    btnPrimaryLink: "category.html?cat=critical-care",
    btnSecondaryText: "Request Bulk Quote",
    btnSecondaryLink: "bulk-quote.html",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "banner-2",
    badge: "CARDIOLOGY SPOTLIGHT • UP TO 30% OFF",
    title: "Precision <span>12-Lead Diagnostic ECG</span> Machines",
    description: "Certified clinical cardiac workstations, Holter monitors, and amplified digital stethoscopes with instant GST credit eligibility.",
    btnPrimaryText: "View Cardiology Deals",
    btnPrimaryLink: "category.html?cat=cardiology",
    btnSecondaryText: "Download Catalogue",
    btnSecondaryLink: "deals.html",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "banner-3",
    badge: "WARD EXPANSION • VOLUME SLABS",
    title: "Electric <span>Hospital Beds & OT Furniture</span>",
    description: "Equip general wards and critical care units with Linak motorized beds, hydraulic examination couches, and surgical instrument trolleys.",
    btnPrimaryText: "Browse Furniture",
    btnPrimaryLink: "category.html?cat=furniture",
    btnSecondaryText: "Talk to Specialist",
    btnSecondaryLink: "bulk-quote.html",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  }
];
