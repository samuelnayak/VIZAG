export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  durationLabel: string;
  badge?: string;
  description: string;
  inclusions: string[];
  ctaText: string;
  isFlagship?: boolean;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'hospital-visit',
    title: 'Hospital Visit Assistance',
    price: 499,
    durationLabel: '2 hours',
    description: 'Hospital registration, department navigation, queue assistance and basic non-medical support.',
    inclusions: [
      'Registration desk guidance',
      'OPD department queue navigation',
      'Billing counter & token assistance',
      'Basic non-clinical walking support',
      'Report collection assistance where allowed',
    ],
    ctaText: 'Book Hospital Visit',
  },
  {
    id: 'odia-language-support',
    title: 'Odia Language Support',
    price: 299,
    durationLabel: 'per hour',
    badge: 'Multilingual Focus',
    description: 'Odia ↔ Telugu ↔ English communication assistance during hospital visits.',
    inclusions: [
      'Odia-fluent local companion',
      'Hospital counter communication in Telugu/English',
      'Directions & lab counter clarification',
      'Patient comfort in mother tongue (ଓଡ଼ିଆ)',
      'Non-clinical administrative navigation',
    ],
    ctaText: 'Get Language Support',
  },
  {
    id: 'patient-companion',
    title: 'Patient Companion',
    price: 899,
    durationLabel: '4 hours',
    badge: 'Popular for Seniors',
    description: 'A trusted companion to stay with the patient and assist throughout the hospital visit.',
    inclusions: [
      'Dedicated companion for 4 continuous hours',
      'Queue waiting & token monitoring',
      'Wheelchair navigation assistance if needed',
      'Diagnostic lab and pharmacy counter support',
      'Family phone & WhatsApp check-ins',
    ],
    ctaText: 'Book Companion',
  },
  {
    id: 'odisha-vizag-flagship',
    title: 'Odisha → Vizag Patient Support',
    price: 1499,
    durationLabel: '6 hours',
    badge: 'Our Flagship Service',
    isFlagship: true,
    description: 'Our complete flagship service designed specifically for patients travelling from Odisha to Vizag.',
    inclusions: [
      'Doctor appointment coordination assistance',
      'Odia language support throughout',
      'Hospital & lab navigation in Vizag',
      'Dedicated patient companion (6 hrs)',
      'Real-time WhatsApp updates to family back home',
      'Post-visit follow-up coordination',
      'Optional railway station pickup coordination',
    ],
    ctaText: 'Book Patient Support',
  },
  {
    id: 'night-hospital-support',
    title: 'Night Hospital Support',
    price: 1499,
    durationLabel: '8 hours',
    badge: 'Overnight Care',
    description: 'Non-medical companionship and assistance during hospital visits or permitted hospital stays.',
    inclusions: [
      'Overnight non-clinical companion presence',
      'Night-time cafeteria & pharmacy runs for attendants',
      'Nurse call bell assistance on behalf of patient',
      'Morning discharge/doctor round preparation support',
      'Hourly check-ins with remote family',
    ],
    ctaText: 'Request Night Support',
  },
  {
    id: 'appointment-assist',
    title: 'Appointment Assist',
    price: 199,
    durationLabel: 'Up to 30 mins',
    description: 'Pre-visit coordination to check doctor availability, hospital timings, and registration requirements.',
    inclusions: [
      'Hospital department timing confirmation',
      'Doctor OPD schedule verification',
      'Document checklist guidance before you travel',
      'Direct contact coordination where hospital permits',
    ],
    ctaText: 'Book Appointment Assist',
  },
];
