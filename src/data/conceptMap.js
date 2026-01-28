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
  // Node positions updated with user-provided coordinates
  { id: 'comorbidities', text: 'HCVD CD: AFIB IN RVR NON DIABETIC NON ASTHMATIC', type: nodeTypes.TREATMENT, x: 700, y: 50 },
  { id: 'patient', text: 'RT 46/M', type: nodeTypes.PATIENT, x: 500, y: 150 },
  { id: 'exposure', text: 'HX OF WADING IN FLOOD', type: nodeTypes.HISTORY, x: 477, y: 309 },
  { id: 'leptospira', text: 'LEPTOSPIRA SPECIES', type: nodeTypes.PATHOGEN, x: 500, y: 450 },
  { id: 'entry', text: 'CUTS/ABRADED SKIN/MUCOUS MEMBRANES', type: nodeTypes.MECHANISM, x: 500, y: 600 },
  { id: 'hematogenous', text: 'HEMATOGENOUS DISSEMINATION', type: nodeTypes.MECHANISM, x: -400, y: 750 },
  { id: 'endothelial', text: 'ENDOTHELIAL INJURY', type: nodeTypes.MECHANISM, x: 520, y: 758 },
  { id: 'immune', text: 'IMMUNE MEDIATED INJURY', type: nodeTypes.MECHANISM, x: 1399, y: 750 },
  { id: 'fever', text: 'FEVER', type: nodeTypes.SYMPTOM, x: -661, y: 903 },
  { id: 'vomiting', text: 'VOMITING', type: nodeTypes.SYMPTOM, x: -449, y: 903 },
  { id: 'lbm', text: 'LBM', type: nodeTypes.SYMPTOM, x: -172, y: 903 },
  { id: 'abdominalPain', text: 'ABDOMINAL PAIN', type: nodeTypes.SYMPTOM, x: 2, y: 906 },
  { id: 'metoclopramide', text: 'METOCLOPRAMIDE 10MG IVTT Q8H PRN', type: nodeTypes.TREATMENT, x: -630, y: 1056 },
  { id: 'baciflora', text: 'BACIFLORA 1AMP PO TID', type: nodeTypes.TREATMENT, x: -130, y: 1070 },
  { id: 'septicShock', text: 'SEPTIC SHOCK', type: nodeTypes.SYMPTOM, x: 541, y: 860 },
  { id: 'bpLow', text: 'BP 70/40', type: nodeTypes.PATIENT, x: 672, y: 1032 },
  { id: 'pnss', text: '1000 ml PNSS', type: nodeTypes.TREATMENT, x: 390, y: 1040 },
  { id: 'norepinephrine', text: 'NE 20 cc/hr (AD 0.85)', type: nodeTypes.TREATMENT, x: 382, y: 1143 },
  { id: 'bpNormal', text: 'BP 130/80', type: nodeTypes.PATIENT, x: 725, y: 1219 },
  { id: 'severeLeptospirosis', text: 'SEVERE LEPTOSPIROSIS', type: nodeTypes.CONDITION, x: 515, y: 1748 },
  { id: 'ceftriaxone', text: 'CEFTRIAXONE 1G IV Q24H', type: nodeTypes.TREATMENT, x: 844, y: 1760 },
  { id: 'organEffects', text: 'ORGAN SYSTEM EFFECTS', type: nodeTypes.LAB, x: 479, y: 1956 },
  { id: 'liver', text: 'LIVER', type: nodeTypes.ORGAN, x: -230, y: 2108 },
  { id: 'kidneys', text: 'KIDNEYS', type: nodeTypes.ORGAN, x: 516, y: 2113 },
  { id: 'lungs', text: 'LUNGS', type: nodeTypes.ORGAN, x: 1444.6, y: 2108 },
  { id: 'coagulopathy', text: 'COAGULOPATHY', type: nodeTypes.SYMPTOM, x: -568, y: 2278 },
  { id: 'hyperbilirubinemia', text: 'HYPERBILIRUBINEMIA', type: nodeTypes.SYMPTOM, x: -166, y: 2275 },
  { id: 'pt', text: 'PT 23.3', type: nodeTypes.LAB, x: -564, y: 2362 },
  { id: 'aptt', text: 'APTT 43.3', type: nodeTypes.LAB, x: -564, y: 2454 },
  { id: 'jaundice', text: 'JAUNDICE', type: nodeTypes.LAB, x: -275, y: 2362 },
  { id: 'ictericSclerae', text: 'ICTERIC SCLERAE', type: nodeTypes.LAB, x: -81, y: 2363 },
  { id: 'tb', text: 'TB 3.73', type: nodeTypes.LAB, x: -272, y: 2448 },
  { id: 'db', text: 'DB 2.73', type: nodeTypes.LAB, x: -67, y: 2449 },
  { id: 'ib', text: 'IB 1.38', type: nodeTypes.LAB, x: -165, y: 2542 },
  { id: 'aki', text: 'AKI', type: nodeTypes.CONDITION, x: 377, y: 2437 },
  { id: 'hypokalemia', text: 'HYPOKALEMIA', type: nodeTypes.CONDITION, x: 664, y: 2435 },
  { id: 'crea', text: 'Crea 3.33', type: nodeTypes.LAB, x: 215, y: 2517 },
  { id: 'fluidHydration', text: 'FLUID HYDRATION STRICT I AND O MONITORING', type: nodeTypes.TREATMENT, x: 212, y: 2700 },
  { id: 'nahco3', text: 'NaHCO3 tab', type: nodeTypes.TREATMENT, x: 506, y: 2704 },
  { id: 'k', text: 'K 2.70', type: nodeTypes.LAB, x: 873, y: 2520 },
  { id: 'kcl', text: 'KCL DRIP', type: nodeTypes.TREATMENT, x: 777, y: 2667 },
  { id: 'respiratoryAlkalosis', text: 'RESPIRATORY ALKALOSIS', type: nodeTypes.CONDITION, x: 1286, y: 2296 },
];

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
  { from: 'entry', to: 'immune' },
  // Note: immune has no outgoing connections (terminal)
  
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
  { from: 'immune', to: 'severeLeptospirosis' },
  
  // Level 8a-9: Severe leptospirosis to organ effects
  // Note: ceftriaxone has NO connection from severeLeptospirosis (positioned nearby but not connected)
  { from: 'severeLeptospirosis', to: 'organEffects' },
  
  // Level 9-10: Organ effects to three organs (horizontal branching)
  { from: 'organEffects', to: 'liver' },
  { from: 'organEffects', to: 'kidneys' },
  { from: 'organEffects', to: 'lungs' },
  
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
  { from: 'lungs', to: 'respiratoryAlkalosis' },
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
  
  // Step 3: Pathogenesis Branching
  { nodes: ['hematogenous'], connections: [['entry', 'hematogenous']] },
  { nodes: ['endothelial'], connections: [['entry', 'endothelial']] },
  { nodes: ['immune'], connections: [['entry', 'immune']] },
  
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
  
  // Step 7: BP Normal
  { nodes: ['bpNormal'], connections: [
    ['bpLow', 'bpNormal'],
  ]},
  
  // Step 8: Severe Leptospirosis - only three mechanisms connect
  { nodes: ['severeLeptospirosis'], connections: [
    ['hematogenous', 'severeLeptospirosis'],
    ['endothelial', 'severeLeptospirosis'],
    ['immune', 'severeLeptospirosis'],
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
  
  // Step 12: Lung Effects
  { nodes: ['respiratoryAlkalosis'], connections: [['lungs', 'respiratoryAlkalosis']] },
  
  // Step 13: All Treatment Nodes (except comorbidities and bpLow which were shown earlier)
  { nodes: ['metoclopramide', 'baciflora', 'pnss', 'norepinephrine', 'ceftriaxone', 'fluidHydration', 'nahco3', 'kcl'], connections: [
    ['vomiting', 'metoclopramide'],
    ['lbm', 'baciflora'],
    ['crea', 'fluidHydration'],
    ['fluidHydration', 'nahco3'],
    ['hypokalemia', 'nahco3'],
    ['k', 'kcl'],
  ]},
];
