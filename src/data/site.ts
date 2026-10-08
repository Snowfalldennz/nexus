// All practice details and copy live here so they can be updated in one place.
// Source: Nexus brochure 2026 + business card (Clients/NEXUS on Google Drive).

export const practice = {
  name: 'Nexus Health and Wellness',
  shortName: 'Nexus Health & Wellness',
  tagline: 'Family Medicine & Wound Care',
  address: {
    street: '3002 N Arizona Ave, Ste 13',
    city: 'Chandler',
    state: 'AZ',
    zip: '85225',
  },
  phone: { display: '602-858-5182', href: 'tel:+16028585182' },
  cell: { display: '602-520-2266', href: 'tel:+16025202266' },
  fax: { display: '602-858-5187', href: 'fax:+16028585187' },
  email: 'customers@nexus-healthandwellness.com',
  website: 'www.nexus-healthandwellness.com',
} as const

// Partnering insurances, as given by the client (2026-10-08). More are pending application.
export const insurances = ['Medicare', 'Aetna', 'TRICARE', 'Arizona Medicaid'] as const

export const fullAddress = `${practice.address.street}, ${practice.address.city}, ${practice.address.state} ${practice.address.zip}`

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

export type ServiceId =
  | 'house-calls'
  | 'chronic-care'
  | 'transitional-care'
  | 'wound-care'
  | 'home-health-orders'
  | 'medication-management'

export interface Service {
  id: ServiceId
  title: string
  summary: string
  details: string[]
}

export const services: Service[] = [
  {
    id: 'house-calls',
    title: 'Mobile Primary Care (House Calls)',
    summary:
      'Primary care visits in your home, assisted living community or group home — no travel, no waiting room.',
    details: [
      'Routine check-ups and sick visits',
      'Physical exams and health assessments',
      'Lab orders and follow-up on results',
      'Coordination with specialists and your care team',
    ],
  },
  {
    id: 'chronic-care',
    title: 'Chronic Disease Management',
    summary:
      'Ongoing, consistent care for long-term conditions, with regular follow-up so problems are caught early.',
    details: [
      'Diabetes, high blood pressure, heart and lung conditions',
      'Personalized care plans',
      'Regular monitoring and follow-up visits',
      'Chronic Care Management (CCM) for eligible patients',
    ],
  },
  {
    id: 'transitional-care',
    title: 'Post-Discharge Care (TCM)',
    summary:
      'Transitional care after a hospital or facility stay, to help patients recover safely at home and avoid readmission.',
    details: [
      'Timely follow-up visit after discharge',
      'Medication review against discharge instructions',
      'Coordination with hospitals, home health and family',
    ],
  },
  {
    id: 'wound-care',
    title: 'Advanced Wound Care & Grafts',
    summary:
      'Assessment and treatment of chronic and hard-to-heal wounds, at home or in the clinic.',
    details: [
      'Advanced wound management',
      'Debridement and dressing orders',
      'Skin substitute (graft) wound treatment',
      'Collagen wound treatment',
      'UltraMIST wound treatment',
    ],
  },
  {
    id: 'home-health-orders',
    title: 'Home Health Orders (24–48 hrs)',
    summary:
      'Home health orders reviewed and signed within 24–48 hours, so care starts without delay.',
    details: [
      'Face-to-Face (F2F) encounters',
      'Home health certification and recertification',
      'Plan of Care (POC) oversight',
    ],
  },
  {
    id: 'medication-management',
    title: 'Medication Management',
    summary:
      'Reviewing and reconciling medications so they work safely together.',
    details: [
      'Medication reconciliation',
      'Prescription management and refills',
      'Reducing duplicate or interacting medicines',
    ],
  },
]

export const whoWeServe = [
  {
    title: 'Homebound Patients',
    text: 'For patients who find it difficult or unsafe to travel to a clinic.',
  },
  {
    title: 'Assisted Living & Group Homes',
    text: 'Regular on-site visits for residents, working alongside facility staff.',
  },
  {
    title: 'Post-Hospital Patients',
    text: 'Follow-up care at home after a hospital or rehab stay.',
  },
] as const

export const whyChooseUs = [
  { title: 'Fast order turnaround', text: 'Orders signed within 24–48 hours.' },
  { title: 'Provider-led care team', text: 'Care led by a board-certified family nurse practitioner.' },
  { title: 'We come to you', text: 'House calls and clinic visits — whichever suits you.' },
] as const

export const homeHealthServices = [
  'Face-to-Face (F2F) Encounters',
  'Home Health Certification & Recertification',
  'Plan of Care Oversight (POC)',
  'Orders Signed Within 24–48 Hours',
  'Post-Discharge Visits (TCM)',
  'Chronic Care Management',
] as const

export const woundCareSupport = [
  'Advanced Wound Management',
  'Debridement & Dressing Orders',
  'Skin Substitute Wound Treatment',
  'Collagen Wound Treatment',
  'UltraMIST Wound Treatment',
] as const

export const whyPartner = [
  'Reliable & timely documentation',
  'Strong communication',
  'Provider-led care team',
  'Medicare-compliant services',
  'Competent and passionate providers',
] as const
