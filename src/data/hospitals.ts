export interface Hospital {
  id: string;
  name: string;
  area: string;
  landmark: string;
  specialties: string[];
  distanceFromStation: string;
  popularForOdishaPatients: boolean;
}

export const VIZAG_HOSPITALS: Hospital[] = [
  {
    id: 'apollo-health-city',
    name: 'Apollo Health City',
    area: 'Health City, Arilova',
    landmark: 'Near BRTS Road',
    specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopaedics', 'Nephrology'],
    distanceFromStation: '11 km (approx 25 mins)',
    popularForOdishaPatients: true,
  },
  {
    id: 'care-hospitals',
    name: 'CARE Hospitals',
    area: 'Ram Nagar',
    landmark: 'Near Waltair Main Road',
    specialties: ['Cardiac Sciences', 'Critical Care', 'Gastroenterology', 'General Medicine'],
    distanceFromStation: '2.5 km (approx 10 mins)',
    popularForOdishaPatients: true,
  },
  {
    id: 'sevenhills-hospital',
    name: 'SevenHills Hospital',
    area: 'Waltair Uplands',
    landmark: 'Rockdale Layout',
    specialties: ['General Medicine', 'General Surgery', 'Urology', 'ENT', 'Gynaecology'],
    distanceFromStation: '3 km (approx 12 mins)',
    popularForOdishaPatients: true,
  },
  {
    id: 'mg-cancer-hospital',
    name: 'Mahatma Gandhi Cancer Hospital & Research Institute',
    area: 'MVP Colony',
    landmark: 'Sector 6, MVP',
    specialties: ['Surgical Oncology', 'Medical Oncology', 'Radiation Oncology', 'Hematology'],
    distanceFromStation: '7.5 km (approx 18 mins)',
    popularForOdishaPatients: true,
  },
  {
    id: 'pinnacle-hospital',
    name: 'Pinnacle Hospital',
    area: 'Health City, Chinagadila / Arilova',
    landmark: 'Health City Zone',
    specialties: ['Trauma & Orthopaedics', 'Spine Care', 'Neurosurgery', 'Pulmonology'],
    distanceFromStation: '11.5 km (approx 25 mins)',
    popularForOdishaPatients: true,
  },
  {
    id: 'kgh-vizag',
    name: 'King George Hospital (KGH)',
    area: 'Maharanipeta',
    landmark: 'Collectorate Road',
    specialties: ['Government Tertiary Care', 'Multi-specialty Super Speciality Units'],
    distanceFromStation: '3.8 km (approx 15 mins)',
    popularForOdishaPatients: true,
  },
  {
    id: 'medicover-hospitals',
    name: 'Medicover Hospitals',
    area: 'MVP Colony / Health City',
    landmark: 'Near Venkojipalem',
    specialties: ['Cardiology', 'Emergency Care', 'Organ Transplant', 'Internal Medicine'],
    distanceFromStation: '8 km (approx 20 mins)',
    popularForOdishaPatients: true,
  },
  {
    id: 'omni-rk-hospital',
    name: 'OMNI RK Super Speciality Hospital',
    area: 'Waltair Main Road',
    landmark: 'Opposite Lions Club',
    specialties: ['Orthopaedics', 'Pediatrics', 'Laparoscopy', 'Nephrology'],
    distanceFromStation: '2.8 km (approx 10 mins)',
    popularForOdishaPatients: false,
  },
  {
    id: 'kims-icon-hospital',
    name: 'KIMS ICON Hospital',
    area: 'Sheela Nagar',
    landmark: 'Near Airport Road',
    specialties: ['Cardiac Care', 'Gastroenterology', 'Renal Sciences', 'Pulmonology'],
    distanceFromStation: '9 km (approx 22 mins)',
    popularForOdishaPatients: false,
  },
  {
    id: 'other-vizag-clinic',
    name: 'Other Clinic / Doctor Chamber in Vizag',
    area: 'Across Visakhapatnam',
    landmark: 'Custom Location',
    specialties: ['Private Consultations', 'Diagnostic Centers', 'Imaging Labs'],
    distanceFromStation: 'Varies',
    popularForOdishaPatients: false,
  },
];
