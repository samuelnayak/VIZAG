export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Booking & Services' | 'Language & Travel' | 'Safety';
}

export const FAQS_LIST: FaqItem[] = [
  {
    id: 'medical-treatment',
    question: 'Do you provide medical treatment?',
    answer: 'No. Vizag Medical Sathi provides strictly non-clinical patient assistance and healthcare navigation. Medical diagnosis, prescriptions, nursing, and treatment are provided exclusively by qualified healthcare professionals and hospitals. We help you navigate, communicate, and stay comfortable.',
    category: 'General',
  },
  {
    id: 'book-for-parents',
    question: 'Can I book for my parents?',
    answer: 'Yes, absolutely! In fact, more than 60% of our bookings are made by sons and daughters working in Bengaluru, Hyderabad, Delhi, Chennai, or abroad who want trusted, compassionate local assistance for their elderly parents visiting Vizag hospitals.',
    category: 'Booking & Services',
  },
  {
    id: 'odisha-pre-booking',
    question: 'Can someone from Odisha book before travelling to Vizag?',
    answer: 'Yes! We encourage patients from Bhubaneswar, Cuttack, Berhampur, Balasore, Rourkela, Jeypore, Koraput, and other Odisha cities to book 24 to 48 hours before board their train or bus. This ensures your companion is scheduled and briefed before you arrive.',
    category: 'Language & Travel',
  },
  {
    id: 'odia-speaking-companions',
    question: 'Do you provide Odia-speaking companions?',
    answer: 'Yes. We match patients with companions based on language availability. Many of our local companions in Vizag are fluent in Odia, Telugu, and English, making communication seamless and comforting.',
    category: 'Language & Travel',
  },
  {
    id: 'book-doctor-appointment',
    question: "Can you book the doctor's appointment?",
    answer: "We assist with appointment coordination where the hospital's booking system and policies allow it. We help verify doctor consulting days, OPD token systems, and patient registration guidelines.",
    category: 'Booking & Services',
  },
  {
    id: 'railway-station-pickup',
    question: 'Can the companion come to the railway station?',
    answer: 'Yes, station meet-and-assist is available as an optional coordination add-on. Your companion can receive the patient at Visakhapatnam Railway Station (VSKP) or the RTC Complex bus stand and accompany them to the hospital.',
    category: 'Language & Travel',
  },
  {
    id: 'family-updates',
    question: 'Can my family receive updates?',
    answer: 'Yes! With the patient\'s consent, your designated companion sends milestone updates via WhatsApp (e.g., arrival at hospital, token issued, entering doctor consultation room, diagnostic sample given, prescription received, departing hospital).',
    category: 'General',
  },
  {
    id: 'emergency-medical-services',
    question: 'Do you provide emergency medical services?',
    answer: 'No. For immediate medical emergencies or life-threatening situations, please call 108 (National Emergency Ambulance Service) or the hospital’s dedicated 24x7 emergency department directly. Vizag Medical Sathi is a planned patient navigation service.',
    category: 'Safety',
  },
];
