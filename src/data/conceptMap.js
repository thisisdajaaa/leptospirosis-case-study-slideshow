// Concept Map Data Structure for Leptospirosis Case Study
// Hierarchical tree layout with proper alignment

export const nodeTypes = {
  PATIENT: 'patient',
  HISTORY: 'history',
  PATHOGEN: 'pathogen',
  MECHANISM: 'mechanism',
  SYMPTOM: 'symptom',
  TREATMENT: 'treatment',
  LAB: 'lab',
  ORGAN: 'organ',
  OUTCOME: 'outcome',
  CONDITION: 'condition',
  PLAIN: 'plain',  // nodes without colors/borders
};

export const nodeColors = {
  [nodeTypes.PATIENT]: 'bg-blue-500',
  [nodeTypes.HISTORY]: 'bg-amber-700',
  [nodeTypes.PATHOGEN]: 'bg-pink-500',
  [nodeTypes.MECHANISM]: 'bg-red-500',
  [nodeTypes.SYMPTOM]: 'bg-green-500',
  [nodeTypes.TREATMENT]: 'bg-white border-2 border-gray-400 text-gray-900',
  [nodeTypes.LAB]: 'bg-orange-400 text-gray-900',
  [nodeTypes.ORGAN]: 'bg-red-600',
  [nodeTypes.OUTCOME]: 'bg-gray-400 text-gray-900',
  [nodeTypes.CONDITION]: 'bg-pink-600',
};

// Hierarchical layout - nodes positioned relative to their parents
// Y spacing: 150px between levels for better visibility
// X spacing: varies based on number of children with generous gaps
export const nodes = [
  // Screenshot-friendly: fits ~1800x1500 so text stays readable at fit-zoom
  // Top section: patient info (y: 0-400)
  { id: 'comorbidities', text: 'NON DIABETIC\nNON ASTHMATIC\nHCVD CD: AFIB IN RVR', type: nodeTypes.TREATMENT, x: 1150, y: 0 },
  { id: 'patient', text: 'RT 46/M', type: nodeTypes.PATIENT, x: 800, y: 20 },
  { id: 'exposure', text: 'HX OF WADING IN FLOOD', type: nodeTypes.HISTORY, x: 800, y: 130 },
  { id: 'leptospira', text: 'LEPTOSPIRA SPECIES', type: nodeTypes.PATHOGEN, x: 800, y: 240 },
  { id: 'entry', text: 'CUTS/ABRADED SKIN/\nMUCOUS MEMBRANES', type: nodeTypes.MECHANISM, x: 800, y: 350 },
  { id: 'openToeWound', text: 'open toe wound', type: nodeTypes.SYMPTOM, x: 1150, y: 360 },
  // Branch level (y: 470)
  { id: 'hematogenous', text: 'HEMATOGENOUS\nDISSEMINATION', type: nodeTypes.MECHANISM, x: 200, y: 490 },
  { id: 'endothelial', text: 'ENDOTHELIAL INJURY', type: nodeTypes.MECHANISM, x: 1400, y: 490 },
  // Hematogenous symptoms (y: 610)
  { id: 'fever', text: 'FEVER', type: nodeTypes.SYMPTOM, x: -100, y: 620 },
  { id: 'vomiting', text: 'VOMITING', type: nodeTypes.SYMPTOM, x: 80, y: 620 },
  { id: 'lbm', text: 'LBM', type: nodeTypes.SYMPTOM, x: 250, y: 620 },
  { id: 'abdominalPain', text: 'ABDOMINAL\nPAIN', type: nodeTypes.SYMPTOM, x: 430, y: 620 },
  // Treatments for symptoms (y: 730)
  { id: 'metoclopramide', text: 'METOCLOPRAMIDE\n10MG IVTT Q8H PRN', type: nodeTypes.TREATMENT, x: 30, y: 740 },
  { id: 'baciflora', text: 'BACIFLORA\n1AMP PO TID', type: nodeTypes.TREATMENT, x: 300, y: 740 },
  // Endothelial branch (y: 610-810)
  { id: 'septicShock', text: 'SEPTIC SHOCK', type: nodeTypes.SYMPTOM, x: 1370, y: 620 },
  { id: 'pnss', text: '1000 ml PNSS', type: nodeTypes.TREATMENT, x: 1180, y: 650 },
  { id: 'bpLow', text: 'BP 70/40', type: nodeTypes.PATIENT, x: 1370, y: 740 },
  { id: 'norepinephrine', text: 'NE 20 cc/hr\n(AD 0.85)', type: nodeTypes.TREATMENT, x: 1160, y: 760 },
  { id: 'bpNormal', text: 'BP 130/80', type: nodeTypes.PATIENT, x: 1370, y: 860 },
  // Severe lepto (y: 930)
  { id: 'severeLeptospirosis', text: 'SEVERE LEPTOSPIROSIS', type: nodeTypes.CONDITION, x: 800, y: 930 },
  { id: 'ceftriaxone', text: 'CEFTRIAXONE\n2G IV Q24H', type: nodeTypes.TREATMENT, x: 1150, y: 940 },
  // Organ effects (y: 1040)
  { id: 'organEffects', text: 'ORGAN SYSTEM EFFECTS', type: nodeTypes.LAB, x: 800, y: 1050 },
  // Three organs (y: 1160)
  { id: 'liver', text: 'LIVER', type: nodeTypes.ORGAN, x: 150, y: 1170 },
  { id: 'kidneys', text: 'KIDNEYS', type: nodeTypes.ORGAN, x: 800, y: 1170 },
  { id: 'lungs', text: 'LUNGS', type: nodeTypes.ORGAN, x: 1400, y: 1170 },
  // Liver details (y: 1280-1500)
  { id: 'coagulopathy', text: 'COAGULOPATHY', type: nodeTypes.SYMPTOM, x: -50, y: 1290 },
  { id: 'hyperbilirubinemia', text: 'HYPERBILI-\nRUBINEMIA', type: nodeTypes.SYMPTOM, x: 300, y: 1290 },
  { id: 'pt', text: 'PT 23.3', type: nodeTypes.LAB, x: -130, y: 1400 },
  { id: 'aptt', text: 'APTT 43.3', type: nodeTypes.LAB, x: -130, y: 1500 },
  { id: 'jaundice', text: 'JAUNDICE', type: nodeTypes.LAB, x: 200, y: 1400 },
  { id: 'ictericSclerae', text: 'ICTERIC\nSCLERAE', type: nodeTypes.LAB, x: 200, y: 1500 },
  { id: 'db', text: 'DB 2.73', type: nodeTypes.LAB, x: 400, y: 1400 },
  { id: 'tb', text: 'TB 3.73', type: nodeTypes.LAB, x: 400, y: 1500 },
  { id: 'ib', text: 'IB 1.38', type: nodeTypes.LAB, x: 400, y: 1600 },
  // Kidney details (y: 1280-1500)
  { id: 'aki', text: 'AKI', type: nodeTypes.CONDITION, x: 680, y: 1290 },
  { id: 'hypokalemia', text: 'HYPOKALEMIA', type: nodeTypes.CONDITION, x: 950, y: 1290 },
  { id: 'crea', text: 'Crea 3.33', type: nodeTypes.LAB, x: 640, y: 1400 },
  { id: 'fluidHydration', text: 'FLUID HYDRATION\nSTRICT I&O', type: nodeTypes.TREATMENT, x: 580, y: 1520 },
  { id: 'nahco3', text: 'NaHCO3 tab', type: nodeTypes.TREATMENT, x: 870, y: 1520 },
  { id: 'k', text: 'K 2.70', type: nodeTypes.LAB, x: 1060, y: 1400 },
  { id: 'kcl', text: 'KCL DRIP', type: nodeTypes.TREATMENT, x: 1040, y: 1520 },
  // Lungs details
  { id: 'respiratoryAlkalosis', text: 'RESPIRATORY\nALKALOSIS', type: nodeTypes.CONDITION, x: 1450, y: 1290 },
]

// Connections/Edges between nodes - defines the tree structure
// Note: comorbidities has no connections, terminal nodes have no outgoing connections
export const connections = [
  // Level 1-2: Patient to exposure (comorbidities has NO connection)
  { from: 'patient', to: 'exposure' },
  
  // Level 2-3: Exposure to pathogen
  { from: 'exposure', to: 'leptospira' },
  
  // Level 3-4: Pathogen to entry
  { from: 'leptospira', to: 'entry' },
  
  
  // Level 4-5: Entry to three mechanisms (horizontal branching)
  { from: 'entry', to: 'hematogenous' },
  { from: 'entry', to: 'endothelial' },
  
  // Level 5-6a: Hematogenous to symptoms (vertical alignment)
  { from: 'hematogenous', to: 'fever' },
  { from: 'hematogenous', to: 'vomiting' },
  { from: 'hematogenous', to: 'lbm' },
  { from: 'hematogenous', to: 'abdominalPain' },
  // Note: fever and abdominalPain have no outgoing connections (terminal)
  
  // Level 6a-7a: Symptoms to treatments (vertical alignment)
  { from: 'vomiting', to: 'metoclopramide' },
  { from: 'lbm', to: 'baciflora' },
  // Note: metoclopramide and baciflora have no outgoing connections (terminal)
  
  // Level 5-6b: Endothelial to septic shock (vertical alignment)
  { from: 'endothelial', to: 'septicShock' },
  
  // Level 6b-7b: Septic shock to BP low (vertical alignment)
  { from: 'septicShock', to: 'bpLow' },
  
  // Level 7b-8b: BP low to BP normal (main flow)
  { from: 'bpLow', to: 'bpNormal' },
  // Note: pnss and norepinephrine are positioned at the side but NOT connected to the main flow
  
  // Level 8a: Only three main mechanisms connect to severe leptospirosis
  { from: 'hematogenous', to: 'severeLeptospirosis' },
  { from: 'endothelial', to: 'severeLeptospirosis' },
  
  // Level 8a-9: Severe leptospirosis to organ effects
  // Note: ceftriaxone has NO connection from severeLeptospirosis (positioned nearby but not connected)
  { from: 'severeLeptospirosis', to: 'organEffects' },
  
  // Level 9-10: Organ effects to three organs (horizontal branching)
  { from: 'organEffects', to: 'liver' },
  { from: 'organEffects', to: 'kidneys' },
  { from: 'organEffects', to: 'lungs' },
  { from: 'lungs', to: 'respiratoryAlkalosis' },
  // Level 10-11a: Liver to effects (vertical alignment)
  { from: 'liver', to: 'coagulopathy' },
  { from: 'liver', to: 'hyperbilirubinemia' },
  
  // Level 11a-12a: Coagulopathy details (vertical alignment)
  // Note: aptt has no outgoing connections (terminal)
  
  // Level 11a-12b: Hyperbilirubinemia details (vertical alignment)
  // Note: tb, db, ib have no outgoing connections (terminal)
  
  // Level 10-11b: Kidneys to effects (vertical alignment)
  { from: 'kidneys', to: 'aki' },
  { from: 'kidneys', to: 'hypokalemia' },
  
  // Level 11b-12c: AKI details (vertical alignment)
  { from: 'aki', to: 'fluidHydration' },
  { from: 'aki', to: 'nahco3' },
  // Note: nahco3 has no outgoing connections (terminal)
  
  // Level 11b-12d: Hypokalemia details (vertical alignment)
  { from: 'hypokalemia', to: 'kcl' },
  // Note: kcl has no outgoing connections (terminal)
  
  // Level 10-11c: Lungs to effects (vertical alignment)
  // Note: respiratoryAlkalosis has no outgoing connections (terminal)
];

// Sequential flow for slideshow progression
// Each step reveals nodes and their connections
export const flowSequence = [
  // Step 1: Patient Introduction
  { nodes: ['patient'], connections: [] },
  { nodes: ['comorbidities'], connections: [] }, // comorbidities shown right after patient
  { nodes: ['exposure'], connections: [['patient', 'exposure']] },
  
  // Step 2: Infection Entry
  { nodes: ['leptospira'], connections: [['exposure', 'leptospira']] },
  { nodes: ['entry'], connections: [['leptospira', 'entry']] },
  { nodes: ['openToeWound'], connections: [['entry', 'openToeWound']] },
  
  // Step 3: Pathogenesis Branching
  { nodes: ['hematogenous'], connections: [['entry', 'hematogenous']] },
  { nodes: ['endothelial'], connections: [['entry', 'endothelial']] },
  
  // Step 4: Hematogenous Symptoms
  { nodes: ['fever', 'vomiting', 'lbm', 'abdominalPain'], connections: [
    ['hematogenous', 'fever'],
    ['hematogenous', 'vomiting'],
    ['hematogenous', 'lbm'],
    ['hematogenous', 'abdominalPain'],
  ]},
  
  // Step 5: Endothelial Injury - Septic Shock
  { nodes: ['septicShock'], connections: [['endothelial', 'septicShock']] },
  
  // Step 6: BP Low
  { nodes: ['bpLow'], connections: [['septicShock', 'bpLow']] },
  
  // Step 8: Severe Leptospirosis - only three mechanisms connect
  { nodes: ['severeLeptospirosis'], connections: [
    ['hematogenous', 'severeLeptospirosis'],
    ['endothelial', 'severeLeptospirosis'],
  ]},
  
  // Step 9: Organ System Effects
  { nodes: ['organEffects'], connections: [['severeLeptospirosis', 'organEffects']] },
  { nodes: ['liver', 'kidneys', 'lungs'], connections: [
    ['organEffects', 'liver'],
    ['organEffects', 'kidneys'],
    ['organEffects', 'lungs'],
  ]},
  
  // Step 10: Liver Effects
  { nodes: ['coagulopathy', 'hyperbilirubinemia'], connections: [
    ['liver', 'coagulopathy'],
    ['liver', 'hyperbilirubinemia'],
  ]},
  { nodes: ['pt', 'aptt'], connections: [
    ['coagulopathy', 'pt'],
    ['pt', 'aptt'],
  ]},
  { nodes: ['jaundice', 'ictericSclerae', 'tb', 'db', 'ib'], connections: [
    ['hyperbilirubinemia', 'jaundice'],
    ['jaundice', 'ictericSclerae'],
    ['jaundice', 'tb'],
    ['ictericSclerae', 'db'],
    ['ictericSclerae', 'ib'],
  ]},
  
  // Step 11: Kidney Effects
  { nodes: ['aki', 'hypokalemia'], connections: [
    ['kidneys', 'aki'],
    ['kidneys', 'hypokalemia'],
  ]},
  { nodes: ['crea'], connections: [['aki', 'crea']] },
  { nodes: ['k'], connections: [['hypokalemia', 'k']] },

  { nodes: ['respiratoryAlkalosis'], connections: [['lungs', 'respiratoryAlkalosis']] },
  
  // Step 13-20: Treatment Nodes shown one by one
  { nodes: ['metoclopramide'], connections: [['vomiting', 'metoclopramide']] },
  { nodes: ['baciflora'], connections: [['lbm', 'baciflora']] },
  { nodes: ['pnss'], connections: [] }, // pnss has no connections - positioned at side
  { nodes: ['norepinephrine'], connections: [] }, // norepinephrine has no connections - positioned at side
  { nodes: ['bpNormal'], connections: [
    ['bpLow', 'bpNormal'],
  ]}, // BP Normal shown after PNSS and NE
  { nodes: ['ceftriaxone'], connections: [] }, // ceftriaxone has no connections
  { nodes: ['fluidHydration'], connections: [['crea', 'fluidHydration']] },
  { nodes: ['nahco3'], connections: [
    ['fluidHydration', 'nahco3'],
    ['hypokalemia', 'nahco3'],
  ]},
  { nodes: ['kcl'], connections: [['k', 'kcl']] },
];
