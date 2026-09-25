export type Language = 'en' | 'or';

export interface TranslationDictionary {
  nav: {
    home: string;
    howItWorks: string;
    services: string;
    forFamilies: string;
    pricing: string;
    forCompanions: string;
    aboutUs: string;
    faq: string;
    bookAssistance: string;
    nonClinicalBadge: string;
    vizagNav: string;
    callUs: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    trustPoint1: string;
    trustPoint2: string;
    trustPoint3: string;
    bookBtn: string;
    whatsappBtn: string;
    helplineText: string;
    liveCardTitle: string;
    liveCardSub: string;
    cardPatientLabel: string;
    cardCompanionLabel: string;
    cardHospitalLabel: string;
    cardStageLabel: string;
    cardBookBtn: string;
  };
  problem: {
    kicker: string;
    heading: string;
    subheading: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    ctaBannerTitle: string;
    ctaBannerSub: string;
    ctaBannerBtn: string;
  };
  usp: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subheading: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    roleTitle: string;
  };
  odisha: {
    badge: string;
    heading: string;
    subheading: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
    s5Title: string;
    s5Desc: string;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
    ctaWa: string;
  };
  services: {
    kicker: string;
    heading: string;
    subheading: string;
    bookNow: string;
    customTitle: string;
    customDesc: string;
    customBtn: string;
  };
  howItWorks: {
    kicker: string;
    heading: string;
    subheading: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
    s5Title: string;
    s5Desc: string;
    ctaBtn: string;
  };
  family: {
    badge: string;
    heading: string;
    subheading: string;
    servedCities: string;
    trackerTitle: string;
    trackerSub: string;
    patientLabel: string;
    locationLabel: string;
    hospitalLabel: string;
    companionLabel: string;
    waReceived: string;
    ctaBtn: string;
  };
  languages: {
    kicker: string;
    heading: string;
    subheading: string;
    disclaimer: string;
  };
  trust: {
    kicker: string;
    heading: string;
    subheading: string;
    verifiedTitle: string;
    verifiedDesc: string;
    langTitle: string;
    langDesc: string;
    priceTitle: string;
    priceDesc: string;
    updateTitle: string;
    updateDesc: string;
    nonClinicalTitle: string;
    nonClinicalDesc: string;
    safetyTitle: string;
    safetyDesc: string;
    doTitle: string;
    dontTitle: string;
  };
  pricing: {
    kicker: string;
    heading: string;
    subheading: string;
    extraHourNote: string;
    thirdPartyNote: string;
    estimatorTitle: string;
    estimatorSub: string;
    planSelectLabel: string;
    extraHoursLabel: string;
    stationPickupLabel: string;
    estimatedFee: string;
    bookWithEstimate: string;
  };
  companion: {
    badge: string;
    heading: string;
    subheading: string;
    desc: string;
    joinBtn: string;
    hideBtn: string;
  };
  about: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    missionKicker: string;
    missionText: string;
  };
  faq: {
    kicker: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    contactText: string;
    askWa: string;
  };
  booking: {
    kicker: string;
    heading: string;
    subheading: string;
    patientName: string;
    phone: string;
    bookingFor: string;
    location: string;
    hospital: string;
    date: string;
    service: string;
    hours: string;
    lang: string;
    emergencyContact: string;
    additionalReqs: string;
    notice: string;
    submitBtn: string;
    successTitle: string;
    successSub: string;
    waContinueBtn: string;
  };
  footer: {
    tagline: string;
    desc: string;
    quickNav: string;
    contact: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How It Works',
      services: 'Services',
      forFamilies: 'For Families',
      pricing: 'Pricing',
      forCompanions: 'Become Companion',
      aboutUs: 'About Us',
      faq: 'FAQ',
      bookAssistance: 'Book Assistance',
      nonClinicalBadge: 'Non-Clinical Patient Support',
      vizagNav: 'Visakhapatnam Hospital Navigation',
      callUs: '+91 7327005671',
    },
    hero: {
      badge: 'Language Support: Odia (ଓଡ଼ିଆ) • Telugu (తెలుగు) • English',
      headline: 'Healthcare help in Vizag,',
      headlineHighlight: 'in a language you understand.',
      subheadline: 'Vizag Medical Sathi helps patients travelling to Visakhapatnam with hospital appointments, language support, hospital navigation and trusted patient companions.',
      trustPoint1: 'Non-clinical assistance',
      trustPoint2: 'Verified companions',
      trustPoint3: 'Live family updates',
      bookBtn: 'Book Assistance',
      whatsappBtn: 'Talk to Us on WhatsApp',
      helplineText: 'Need quick phone help? Call our Vizag coordinator at',
      liveCardTitle: 'Hospital Companion on Duty',
      liveCardSub: 'Assisting outstation families step-by-step through Vizag hospitals',
      cardPatientLabel: 'Patient / Family',
      cardCompanionLabel: 'Assigned Sathi',
      cardHospitalLabel: 'Hospital in Vizag',
      cardStageLabel: 'Current Stage',
      cardBookBtn: 'Book Companion for this Hospital',
    },
    problem: {
      kicker: 'Everyday Hospital Challenges',
      heading: 'Coming to a hospital in a new city can be difficult.',
      subheading: 'Unfamiliar hospital campuses, language barriers, and long billing queues make hospital visits stressful. We make your trip simple and dignified.',
      card1Title: "Don't speak Telugu?",
      card1Desc: 'We help patients communicate with hospital desks, registration, and pharmacies in Telugu and English.',
      card2Title: "Don't know where to go?",
      card2Desc: 'We help navigate hospital registration, OPD blocks, scan centers, and queues smoothly.',
      card3Title: 'Coming from Odisha?',
      card3Desc: 'Get dedicated support from someone who understands Odia and can guide you in Vizag.',
      card4Title: "Family can't come with you?",
      card4Desc: 'Book a trusted local companion and receive real-time milestone updates on WhatsApp.',
      ctaBannerTitle: 'Planning a hospital trip to Vizag?',
      ctaBannerSub: 'We match you with a verified companion fluent in your language before you arrive.',
      ctaBannerBtn: 'Book Assistance Now',
    },
    usp: {
      badge: 'Hospital Journey Support',
      heading: 'Your family may travel to Vizag alone.',
      headingHighlight: "They don't have to navigate it alone.",
      subheading: 'Vizag Medical Sathi connects patients and families with local patient companions who provide non-medical support throughout the hospital visit.',
      step1: 'Odisha Departure',
      step2: 'Vizag Arrival',
      step3: 'Hospital Reception',
      step4: 'Consultation & Scans',
      step5: 'Family WhatsApp Updates',
      roleTitle: "Companion's Role",
    },
    odisha: {
      badge: 'Flagship Service for Odisha Travellers',
      heading: "Coming from Odisha for treatment in Vizag? We've got you.",
      subheading: 'From train arrival at Vizag Junction to hospital OPD departments, our Odia-speaking companions stay by your side.',
      s1Title: 'Before you travel',
      s1Desc: 'We help coordinate appointments and check doctor consulting days.',
      s2Title: 'When you arrive',
      s2Desc: 'Optional meet & greet at Vizag Railway Station and cab coordination.',
      s3Title: 'At the hospital',
      s3Desc: 'Assistance with OPD tokens, wheelchair mobility, queues, and floor navigation.',
      s4Title: 'During the visit',
      s4Desc: 'Family members receive timestamped WhatsApp updates at each step.',
      s5Title: 'After the visit',
      s5Desc: 'Coordination for test report collection and safe return transit.',
      ctaTitle: 'Plan Your Vizag Hospital Visit',
      ctaSub: 'Comprehensive 6-hour patient companion package with Odia language assistance.',
      ctaBtn: 'Plan My Vizag Hospital Visit',
      ctaWa: 'Chat with Odisha Coordinator',
    },
    services: {
      kicker: 'Transparent Rates',
      heading: 'Choose the help you need',
      subheading: 'Clear hourly and visit packages with verified local companions in Visakhapatnam.',
      bookNow: 'Book This Service',
      customTitle: 'Need something different?',
      customDesc: 'Multi-day hospital stays, multiple doctor consultations, or special assistance.',
      customBtn: 'Contact Vizag Medical Sathi',
    },
    howItWorks: {
      kicker: 'Simple 5 Steps',
      heading: 'How Vizag Medical Sathi Works',
      subheading: 'Booking trusted hospital guidance takes under 2 minutes.',
      s1Title: 'Tell us what you need',
      s1Desc: 'Choose your service or reach out on WhatsApp.',
      s2Title: 'Share hospital details',
      s2Desc: 'Tell us the hospital, date, and patient requirements.',
      s3Title: 'We assign your companion',
      s3Desc: 'We match a companion based on language and hospital location.',
      s4Title: 'Get assistance',
      s4Desc: 'Your companion assists with queues, counters, and navigation.',
      s5Title: 'Stay connected',
      s5Desc: 'Family receives live milestone updates on WhatsApp.',
      ctaBtn: 'Book Assistance in 2 Minutes',
    },
    family: {
      badge: 'For Families in Other Cities',
      heading: "You don't need to be in Vizag to take care of your family.",
      subheading: 'Working in Bengaluru, Hyderabad, Chennai, Mumbai, or abroad? Book Vizag Medical Sathi for your parents in Vizag and stay informed all day.',
      servedCities: 'Serving families living in:',
      trackerTitle: 'Live Patient Assistance Tracker',
      trackerSub: 'Simulated real-time WhatsApp updates sent to outstation family',
      patientLabel: 'Patient:',
      locationLabel: 'Location:',
      hospitalLabel: 'Hospital:',
      companionLabel: 'Companion:',
      waReceived: 'Family WhatsApp Update Received:',
      ctaBtn: 'Book for a Family Member',
    },
    languages: {
      kicker: 'Multilingual Support',
      heading: 'Odia. Telugu. English. One support system.',
      subheading: 'Helping patients navigate local hospital desks with zero communication hesitation.',
      disclaimer: 'Notice: Companions provide administrative and navigation communication support. Medical diagnosis and clinical treatment are communicated directly by qualified physicians.',
    },
    trust: {
      kicker: 'Honest & Accountable',
      heading: "Trust matters when you're helping someone's family.",
      subheading: 'Clear standards and honest boundaries on every hospital visit.',
      verifiedTitle: 'Verified Companions',
      verifiedDesc: 'Identity and background verified local Visakhapatnam companions.',
      langTitle: 'Language Matching',
      langDesc: 'Companions matched for fluency in Odia, Telugu, English, or Hindi.',
      priceTitle: 'Transparent Pricing',
      priceDesc: 'Clear upfront fees with no hidden agent commissions.',
      updateTitle: 'Family Updates',
      updateDesc: 'Timely milestone WhatsApp messages for remote family members.',
      nonClinicalTitle: 'Non-Clinical Support',
      nonClinicalDesc: 'Clear ethical boundary: navigation and care support, never clinical procedures.',
      safetyTitle: 'Dedicated Helpline',
      safetyDesc: 'Direct coordinator contact for scheduling and assistance questions.',
      doTitle: 'What Companions DO:',
      dontTitle: 'What Companions DO NOT do:',
    },
    pricing: {
      kicker: 'Honest Pricing',
      heading: 'Transparent Pricing Plans',
      subheading: 'Select the assistance level that matches your hospital visit requirements.',
      extraHourNote: 'Extra hours: ₹249–₹299/hr (subject to companion availability).',
      thirdPartyNote: 'Transport, parking, tolls, hospital registration fees, and medicines charged separately.',
      estimatorTitle: 'Interactive Visit Cost Estimator',
      estimatorSub: 'Get an instant upfront estimate for your planned visit',
      planSelectLabel: '1. Select Plan',
      extraHoursLabel: '2. Extra Hours Needed?',
      stationPickupLabel: '3. Station Meet & Greet?',
      estimatedFee: 'Estimated Service Fee',
      bookWithEstimate: 'Book with This Estimate',
    },
    companion: {
      badge: 'Join Our Community',
      heading: 'Want to become a Vizag Medical Sathi Companion?',
      subheading: 'Help patients. Earn money. Make a difference.',
      desc: 'Join our network of trusted companions helping outstation patients navigate hospitals in Visakhapatnam.',
      joinBtn: 'Join as a Companion',
      hideBtn: 'Hide Registration Form',
    },
    about: {
      badge: 'Our Story',
      heading: 'Why Vizag Medical Sathi exists',
      p1: 'Many patients travel to Visakhapatnam from neighbouring states like Odisha for medical treatment. For patients who do not speak Telugu or are unfamiliar with Vizag, the experience can be stressful and confusing.',
      p2: 'Vizag Medical Sathi exists to make that journey easier by combining compassionate human assistance, multilingual support, and simple technology.',
      missionKicker: 'Our Mission',
      missionText: '“Make healthcare journeys easier, safer and less stressful for patients and their families.”',
    },
    faq: {
      kicker: 'Common Questions',
      heading: 'Frequently Asked Questions',
      subheading: 'Everything you need to know about our hospital navigation service.',
      searchPlaceholder: 'Search questions (e.g., Odisha, parents, Odia, pickup...)',
      contactText: 'Have a specific question not covered here?',
      askWa: 'Ask on WhatsApp',
    },
    booking: {
      kicker: 'Quick Request',
      heading: 'Book Medical Assistance',
      subheading: 'Fill out your hospital details below. We will confirm companion availability promptly.',
      patientName: 'Patient Name *',
      phone: 'Phone Number (WhatsApp) *',
      bookingFor: 'Who are you booking for?',
      location: 'Patient Origin City / Town',
      hospital: 'Hospital / Clinic in Vizag *',
      date: 'Appointment Date *',
      service: 'Required Service *',
      hours: 'Expected Hours',
      lang: 'Preferred Companion Language *',
      emergencyContact: 'Emergency Contact Number *',
      additionalReqs: 'Additional Requirements (Optional)',
      notice: 'Non-Clinical Notice: Vizag Medical Sathi provides hospital navigation and queue assistance. We do not provide clinical medical care or nursing.',
      submitBtn: 'Request Assistance',
      successTitle: "Thank you! We've received your request.",
      successSub: 'Our team will contact you shortly to confirm your companion and details.',
      waContinueBtn: 'Continue on WhatsApp',
    },
    footer: {
      tagline: '“When you can\'t be there, we\'re there.”',
      desc: 'Non-clinical patient assistance and multilingual hospital navigation in Visakhapatnam.',
      quickNav: 'Quick Links',
      contact: 'Local Vizag Contact',
      disclaimer: 'Legal Notice: Vizag Medical Sathi provides non-clinical assistance and healthcare navigation services. We do not diagnose, prescribe, treat, or replace doctors, nurses, ambulances, or emergency services.',
    },
  },
  or: {
    nav: {
      home: 'ମୂଳପୃଷ୍ଠା',
      howItWorks: 'କିପରି କାମ କରେ',
      services: 'ସେବା ସମୂହ',
      forFamilies: 'ପରିବାର ପାଇଁ',
      pricing: 'ମୂଲ୍ୟ ତାଲିକା',
      forCompanions: 'ସାଥୀ ହୁଅନ୍ତୁ',
      aboutUs: 'ଆମ ବିଷୟରେ',
      faq: 'ପ୍ରଶ୍ନୋତ୍ତର',
      bookAssistance: 'ସାହାଯ୍ୟ ବୁକ୍ କରନ୍ତୁ',
      nonClinicalBadge: 'ଅଣ-ଚିକିତ୍ସକ ରୋଗୀ ସହାୟତା',
      vizagNav: 'ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍ ସହାୟତା',
      callUs: '+91 7327005671',
    },
    hero: {
      badge: 'ଭାଷା ସହାୟତା: ଓଡ଼ିଆ • ତେଲୁଗୁ • ଇଂରାଜୀ',
      headline: 'ଭାଇଜାଗରେ ସ୍ୱାସ୍ଥ୍ୟସେବା ସହାୟତା,',
      headlineHighlight: 'ଆପଣ ବୁଝିପାରୁଥିବା ଭାଷାରେ।',
      subheadline: 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ବିଶାଖାପାଟଣା (ଭାଇଜାଗ୍) ଆସୁଥିବା ରୋଗୀମାନଙ୍କୁ ହସ୍ପିଟାଲ୍ ଆପଏଣ୍ଟମେଣ୍ଟ, ଓଡ଼ିଆ ଭାଷା ସହାୟତା, ହସ୍ପିଟାଲ୍ ନାଭିଗେସନ୍ ଏବଂ ବିଶ୍ୱସ୍ତ ସାଥୀ ଯୋଗାଇଦିଏ।',
      trustPoint1: 'ଅଣ-ଚିକିତ୍ସକ ସହାୟତା',
      trustPoint2: 'ଯାଞ୍ଚ ହୋଇଥିବା ସାଥୀ',
      trustPoint3: 'ପରିବାର ପାଇଁ ହ୍ୱାଟ୍ସଆପ୍ ଅପଡେଟ୍',
      bookBtn: 'ସାହାଯ୍ୟ ବୁକ୍ କରନ୍ତୁ',
      whatsappBtn: 'ହ୍ୱାଟ୍ସଆପରେ କଥା ହୁଅନ୍ତୁ',
      helplineText: 'ଫୋନରେ ସହାୟତା ପାଇଁ ଆମ ଭାଇଜାଗ୍ କୋର୍ଡିନେଟରଙ୍କୁ କଲ୍ କରନ୍ତୁ:',
      liveCardTitle: 'ହସ୍ପିଟାଲ୍ ସାଥୀ ଉପସ୍ଥିତ',
      liveCardSub: 'ଓଡ଼ିଶାରୁ ଆସିଥିବା ପରିବାରଙ୍କୁ ଭାଇଜାଗ୍ ହସ୍ପିଟାଲରେ ପାଦେ ପାଦେ ସହାୟତା',
      cardPatientLabel: 'ରୋଗୀ / ପରିବାର',
      cardCompanionLabel: 'ନିୟୋଜିତ ସାଥୀ',
      cardHospitalLabel: 'ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍',
      cardStageLabel: 'ବର୍ତ୍ତମାନର ସ୍ଥିତି',
      cardBookBtn: 'ଏହି ହସ୍ପିଟାଲ୍ ପାଇଁ ସାଥୀ ବୁକ୍ କରନ୍ତୁ',
    },
    problem: {
      kicker: 'ରୋଗୀଙ୍କ ସମସ୍ୟାର ସମାଧାନ',
      heading: 'ଏକ ନୂଆ ସହରର ହସ୍ପିଟାଲକୁ ଯିବା କଷ୍ଟକର ହୋଇପାରେ।',
      subheading: 'ଅପରିଚିତ ହସ୍ପିଟାଲ୍ କ୍ୟାମ୍ପସ୍, ଭାଷା ଅସୁବିଧା ଏବଂ ଲମ୍ବା ଲାଇନ୍ ଯୋଗୁଁ ଚିନ୍ତା ବଢ଼ିଯାଏ। ଆମେ ଆପଣଙ୍କ ଯାତ୍ରାକୁ ସରଳ ଏବଂ ସମ୍ମାନଜନକ କରୁ।',
      card1Title: 'ତେଲୁଗୁ ଜାଣିନାହାନ୍ତି କି?',
      card1Desc: 'ଆମେ ତେଲୁଗୁ ଏବଂ ଇଂରାଜୀରେ ହସ୍ପିଟାଲ୍ କାଉଣ୍ଟର, ରେଜିଷ୍ଟ୍ରେସନ୍ ଓ ଔଷଧ ଦୋକାନରେ କଥାବାର୍ତ୍ତା କରିବାରେ ସାହାଯ୍ୟ କରୁ।',
      card2Title: 'କେଉଁଠାକୁ ଯିବେ ଜାଣିନାହାନ୍ତି କି?',
      card2Desc: 'ହସ୍ପିଟାଲ୍ ରେଜିଷ୍ଟ୍ରେସନ୍, ବିଭିନ୍ନ ବିଭାଗ, ଟେଷ୍ଟ ରୁମ୍ ଏବଂ ଧାଡ଼ିରେ ସଠିକ୍ ଭାବେ ପହଞ୍ଚିବାରେ ସାହାଯ୍ୟ କରୁ।',
      card3Title: 'ଓଡ଼ିଶାରୁ ଆସୁଛନ୍ତି କି?',
      card3Desc: 'ଓଡ଼ିଆ ବୁଝୁଥିବା ଜଣେ ସ୍ଥାନୀୟ ସାଥୀଙ୍କଠାରୁ ଭାଇଜାଗରେ ସମ୍ପୂର୍ଣ୍ଣ ସହଯୋଗ ପାଆନ୍ତୁ।',
      card4Title: 'ପରିବାର ସାଙ୍ଗରେ ଆସିପାରୁନାହାନ୍ତି?',
      card4Desc: 'ଏକ ବିଶ୍ୱସ୍ତ ସ୍ଥାନୀୟ ସାଥୀ ବୁକ୍ କରନ୍ତୁ ଏବଂ ହସ୍ପିଟାଲ୍ ସମୟରେ ହ୍ୱାଟ୍ସଆପରେ ସିଧାସଳଖ ଅପଡେଟ୍ ପାଆନ୍ତୁ।',
      ctaBannerTitle: 'ଭାଇଜାଗ୍ ଚିକିତ୍ସା ପାଇଁ ଯାତ୍ରା ଯୋଜନା କରୁଛନ୍ତି କି?',
      ctaBannerSub: 'ଆପଣ ପହଞ୍ଚିବା ପୂର୍ବରୁ ଆମେ ଆପଣଙ୍କ ପାଇଁ ଓଡ଼ିଆ କହୁଥିବା ସାଥୀ ନିର୍ଦ୍ଧାରଣ କରୁ।',
      ctaBannerBtn: 'ଏବେ ସହାୟତା ବୁକ୍ କରନ୍ତୁ',
    },
    usp: {
      badge: 'ସମ୍ପୂର୍ଣ୍ଣ ଯାତ୍ରା ସହାୟତା',
      heading: 'ଆପଣଙ୍କ ପରିବାର ଏକାକୀ ଭାଇଜାଗ୍ ଯାଇପାରନ୍ତି,',
      headingHighlight: 'କିନ୍ତୁ ସେମାନଙ୍କୁ ଏକାକୀ ବୁଲିବାକୁ ପଡ଼ିବ ନାହିଁ।',
      subheading: 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ରୋଗୀ ଓ ପରିବାରକୁ ସ୍ଥାନୀୟ ସାଥୀଙ୍କ ସହିତ ଯୋଡ଼ିଥାଏ, ଯିଏ ହସ୍ପିଟାଲ୍ ଗସ୍ତ ସମୟରେ ଅଣ-ଚିକିତ୍ସକ ସହାୟତା ପ୍ରଦାନ କରନ୍ତି।',
      step1: 'ଓଡ଼ିଶାରୁ ପ୍ରସ୍ଥାନ',
      step2: 'ଭାଇଜାଗ୍ ଆଗମନ',
      step3: 'ହସ୍ପିଟାଲ୍ ପ୍ରବେଶ',
      step4: 'ଡାକ୍ତର ଓ ପରୀକ୍ଷା',
      step5: 'ପରିବାରକୁ ହ୍ୱାଟ୍ସଆପ୍ ସୂଚନା',
      roleTitle: 'ଆପଣଙ୍କ ସାଥୀଙ୍କ ଦାୟିତ୍ୱ',
    },
    odisha: {
      badge: 'ଓଡ଼ିଶା ରୋଗୀଙ୍କ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ସେବା',
      heading: 'ଚିକିତ୍ସା ପାଇଁ ଓଡ଼ିଶାରୁ ଭାଇଜାଗ୍ ଆସୁଛନ୍ତି କି? ଆମେ ଆପଣଙ୍କ ସାଥୀରେ ଅଛୁ।',
      subheading: 'ଭାଇଜାଗ୍ ରେଳ ଷ୍ଟେସନରେ ପହଞ୍ଚିବାଠାରୁ ହସ୍ପିଟାଲ୍ ବିଭାଗ ପର୍ଯ୍ୟନ୍ତ ଆମର ଓଡ଼ିଆ ଭାଷାଭାଷୀ ସାଥୀ ଆପଣଙ୍କ ପାଖରେ ରହିବେ।',
      s1Title: 'ଯାତ୍ରା ପୂର୍ବରୁ',
      s1Desc: 'ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଦିନ ଯାଞ୍ଚ ଏବଂ ହସ୍ପିଟାଲ୍ ସୂଚନା ସଂଗ୍ରହରେ ସାହାଯ୍ୟ କରୁ।',
      s2Title: 'ଆପଣ ପହଞ୍ଚିବା ପରେ',
      s2Desc: 'ଭାଇଜାଗ୍ ଷ୍ଟେସନରେ ସ୍ୱାଗତ ଏବଂ ହସ୍ପିଟାଲ୍ ଯିବା ପାଇଁ ସୁବିଧା ସଂଯୋଜନା।',
      s3Title: 'ହସ୍ପିଟାଲରେ',
      s3Desc: 'ରେଜିଷ୍ଟ୍ରେସନ୍, ଟୋକନ୍ ଲାଇନ୍, ହୁଇଲଚେୟାର୍ ଓ ବିଭିନ୍ନ ବିଭାଗ ନାଭିଗେସନ୍।',
      s4Title: 'ଗସ୍ତ ସମୟରେ',
      s4Desc: 'ଘରେ ଥିବା ପରିବାର ଲୋକଙ୍କୁ ହ୍ୱାଟ୍ସଆପରେ ପ୍ରତ୍ୟେକ ପଦକ୍ଷେପର ତଥ୍ୟ।',
      s5Title: 'ଗସ୍ତ ପରେ',
      s5Desc: 'ରିପୋର୍ଟ ସଂଗ୍ରହ ସୂଚନା ଏବଂ ଷ୍ଟେସନ୍/ହୋଟେଲ୍ ଫେରିବାରେ ସହାୟତା।',
      ctaTitle: 'ଆପଣଙ୍କ ଭାଇଜାଗ୍ ଗସ୍ତ ଯୋଜନା କରନ୍ତୁ',
      ctaSub: 'ଓଡ଼ିଆ ଭାଷା ସହାୟତା ସହିତ ସମ୍ପୂର୍ଣ୍ଣ ୬-ଘଣ୍ଟାର ସାଥୀ ପ୍ୟାକେଜ୍ (₹୧,୪୯୯)।',
      ctaBtn: 'ମୋର ଭାଇଜାଗ୍ ଯାତ୍ରା ଯୋଜନା କରନ୍ତୁ',
      ctaWa: 'ଓଡ଼ିଶା କୋର୍ଡିନେଟରଙ୍କ ସହ କଥା ହୁଅନ୍ତୁ',
    },
    services: {
      kicker: 'ସ୍ପଷ୍ଟ ମୂଲ୍ୟ ତାଲିକା',
      heading: 'ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ସେବା ବାଛନ୍ତୁ',
      subheading: 'ବିଶାଖାପାଟଣାର ଯାଞ୍ଚ ହୋଇଥିବା ବିଶ୍ୱସ୍ତ ସାଥୀଙ୍କ ଦ୍ୱାରା ନିର୍ଭରଯୋଗ୍ୟ ସେବା।',
      bookNow: 'ଏହି ସେବା ବୁକ୍ କରନ୍ତୁ',
      customTitle: 'କିଛି ଅଲଗା ସେବା ଆବଶ୍ୟକ କି?',
      customDesc: 'ଏକାଧିକ ଦିନର ହସ୍ପିଟାଲ୍ ରହଣି କିମ୍ବା ଏକାଧିକ ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ପ୍ୟାକେଜ୍।',
      customBtn: 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ',
    },
    howItWorks: {
      kicker: 'ସହଜ ୫ଟି ପଦକ୍ଷେପ',
      heading: 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ କିପରି କାମ କରେ',
      subheading: 'ମାତ୍ର ୨ ମିନିଟରେ ହସ୍ପିଟାଲ୍ ସହାୟତା ବୁକ୍ କରନ୍ତୁ।',
      s1Title: 'ଆବଶ୍ୟକତା ଜଣାନ୍ତୁ',
      s1Desc: 'ୱେବସାଇଟ୍ କିମ୍ବା ହ୍ୱାଟ୍ସଆପରେ ସେବା ବାଛନ୍ତୁ।',
      s2Title: 'ହସ୍ପିଟାଲ୍ ତଥ୍ୟ ଦିଅନ୍ତୁ',
      s2Desc: 'ହସ୍ପିଟାଲ୍ ନାମ, ତାରିଖ ଓ ରୋଗୀଙ୍କ ବିବରଣୀ ସେୟାର୍ କରନ୍ତୁ।',
      s3Title: 'ଆମେ ସାଥୀ ନିଯୁକ୍ତ କରୁ',
      s3Desc: 'ଭାଷା ଓ ହସ୍ପିଟାଲ୍ ଅନୁସାରେ ଉପଯୁକ୍ତ ସାଥୀ ସ୍ଥିର କରାଯାଏ।',
      s4Title: 'ସହାୟତା ପାଆନ୍ତୁ',
      s4Desc: 'ହସ୍ପିଟାଲରେ ରେଜିଷ୍ଟ୍ରେସନ୍, ଲାଇନ୍ ଓ ଟେଷ୍ଟ ବିଭାଗରେ ସାହାଯ୍ୟ ପାଆନ୍ତୁ।',
      s5Title: 'ସବୁବେଳେ ସଂଯୁକ୍ତ ରୁହନ୍ତୁ',
      s5Desc: 'ପରିବାର ବର୍ଗ ହ୍ୱାଟ୍ସଆପରେ ସମସ୍ତ ଅପଡେଟ୍ ପାଆନ୍ତି।',
      ctaBtn: '୨ ମିନିଟରେ ସହାୟତା ବୁକ୍ କରନ୍ତୁ',
    },
    family: {
      badge: 'ଅନ୍ୟ ସହରରେ ରହୁଥିବା ସନ୍ତାନମାନଙ୍କ ପାଇଁ',
      heading: 'ପରିବାରର ଯତ୍ନ ନେବା ପାଇଁ ଆପଣଙ୍କୁ ଭାଇଜାଗରେ ରହିବା ଜରୁରୀ ନୁହେଁ।',
      subheading: 'ବେଙ୍ଗାଲୁରୁ, ହାଇଦ୍ରାବାଦ, ଚେନ୍ନାଇ, ଦିଲ୍ଲୀ କିମ୍ବା ବିଦେଶରେ କାମ କରୁଛନ୍ତି? ଭାଇଜାଗରେ ବାପା-ମାଆଙ୍କ ପାଇଁ ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ବୁକ୍ କରନ୍ତୁ ଏବଂ ସାରା ଦିନ ନିଶ୍ଚିନ୍ତ ରୁହନ୍ତୁ।',
      servedCities: 'ନିମ୍ନ ସହରରେ ରହୁଥିବା ପରିବାରଙ୍କୁ ସେବା:',
      trackerTitle: 'ଲାଇଭ୍ ରୋଗୀ ସହାୟତା ଟ୍ରାକର୍',
      trackerSub: 'ବାହାରେ ଥିବା ପରିବାରକୁ ହ୍ୱାଟ୍ସଆପ୍ ମାଧ୍ୟମରେ ମିଳୁଥିବା ସୂଚନାର ଉଦାହରଣ',
      patientLabel: 'ରୋଗୀ:',
      locationLabel: 'ସ୍ଥାନ:',
      hospitalLabel: 'ହସ୍ପିଟାଲ୍:',
      companionLabel: 'ସାଥୀ:',
      waReceived: 'ପରିବାରକୁ ହ୍ୱାଟ୍ସଆପ୍ ବାର୍ତ୍ତା ପ୍ରାପ୍ତ:',
      ctaBtn: 'ପରିବାର ସଦସ୍ୟଙ୍କ ପାଇଁ ବୁକ୍ କରନ୍ତୁ',
    },
    languages: {
      kicker: 'ବହୁଭାଷୀ ସହାୟତା',
      heading: 'ଓଡ଼ିଆ • ତେଲୁଗୁ • ଇଂରାଜୀ। ଗୋଟିଏ ସହାୟତା ବ୍ୟବସ୍ଥା।',
      subheading: 'ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍ କାଉଣ୍ଟରରେ ବିନା କୌଣସି ଭାଷା ଦ୍ୱନ୍ଦ୍ୱରେ ସହଜରେ କାର୍ଯ୍ୟ ସମ୍ପାଦନ କରନ୍ତୁ।',
      disclaimer: 'ସୂଚନା: ଆମ ସାଥୀମାନେ ହସ୍ପିଟାଲ୍ ପ୍ରଶାସନିକ ଏବଂ ନାଭିଗେସନ୍ କଥାବାର୍ତ୍ତାରେ ସାହାଯ୍ୟ କରନ୍ତି। ଚିକିତ୍ସା ଓ ରୋଗ ନିର୍ଣ୍ଣୟ କେବଳ ଯୋଗ୍ୟ ଡାକ୍ତରଙ୍କ ଦ୍ୱାରା ପ୍ରଦାନ କରାଯାଏ।',
    },
    trust: {
      kicker: 'ବିଶ୍ୱାସ ଓ ସ୍ୱଚ୍ଛତା',
      heading: 'ଯେତେବେଳେ କଥା ପରିବାରର, ବିଶ୍ୱାସ ହିଁ ସବୁଠୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।',
      subheading: 'ପ୍ରତ୍ୟେକ ହସ୍ପିଟାଲ୍ ଗସ୍ତରେ ସ୍ୱଚ୍ଛ ନିୟମ ଓ ସ୍ପଷ୍ଟ ସୀମା।',
      verifiedTitle: 'ଯାଞ୍ଚ ହୋଇଥିବା ସାଥୀ',
      verifiedDesc: 'ସରକାରୀ ପରିଚୟପତ୍ର ଦ୍ୱାରା ଯାଞ୍ଚ ହୋଇଥିବା ସ୍ଥାନୀୟ ଭାଇଜାଗ୍ ନିବାସୀ।',
      langTitle: 'ଭାଷା ମିଳନ',
      langDesc: 'ଓଡ଼ିଆ, ତେଲୁଗୁ ଏବଂ ଇଂରାଜୀ ଭାଷାରେ ଦକ୍ଷ ଥିବା ସାଥୀ ଯୋଗାଣ।',
      priceTitle: 'ସ୍ପଷ୍ଟ ମୂଲ୍ୟ',
      priceDesc: 'କୌଣସି ଲୁକ୍କାୟିତ ଦେୟ ନାହିଁ, ବୁକିଂ ପୂର୍ବରୁ ସ୍ପଷ୍ଟ ଫିସ୍।',
      updateTitle: 'ପରିବାର ଅପଡେଟ୍',
      updateDesc: 'ହସ୍ପିଟାଲ୍ କାର୍ଯ୍ୟର ପ୍ରତିଟି ପର୍ଯ୍ୟାୟରେ ହ୍ୱାଟ୍ସଆପ୍ ସନ୍ଦେଶ।',
      nonClinicalTitle: 'ଅଣ-ଚିକିତ୍ସକ ସହାୟତା',
      nonClinicalDesc: 'ଆମେ କେବଳ ଲାଇନ୍, ଭାଷା ଓ ଚଲାବୁଲା ସାହାଯ୍ୟ କରୁ—ଚିକିତ୍ସା କରୁନାହୁଁ।',
      safetyTitle: 'ସମର୍ପିତ ହେଲ୍ପଲାଇନ୍',
      safetyDesc: 'ଯେକୌଣସି ସମୟରେ କୋର୍ଡିନେଟରଙ୍କ ସହିତ ସିଧାସଳଖ କଲ୍ ସୁବିଧା।',
      doTitle: 'ସାଥୀମାନେ ଯାହା କରନ୍ତି:',
      dontTitle: 'ସାଥୀମାନେ ଯାହା କରନ୍ତି ନାହିଁ:',
    },
    pricing: {
      kicker: 'ସରଳ ମୂଲ୍ୟ',
      heading: 'ସ୍ୱଚ୍ଛ ସେବା ମୂଲ୍ୟ ତାଲିକା',
      subheading: 'ହସ୍ପିଟାଲ୍ ଗସ୍ତ ପାଇଁ ଉପଯୁକ୍ତ ସମୟ ଏବଂ ପ୍ୟାକେଜ୍ ଚୟନ କରନ୍ତୁ।',
      extraHourNote: 'ଅତିରିକ୍ତ ଘଣ୍ଟା: ₹୨୪୯–₹୨୯୯/ଘଣ୍ଟା (ସାଥୀ ଉପଲବ୍ଧତା ଉପରେ ନିର୍ଭରଶୀଳ)।',
      thirdPartyNote: 'ଯାତାୟାତ ଭଡ଼ା, ପାର୍କିଂ, ହସ୍ପିଟାଲ୍ ଫିସ୍ ଏବଂ ଔଷଧ ଖର୍ଚ୍ଚ ଗ୍ରାହକଙ୍କ ଦ୍ୱାରା ଦିଆଯିବ।',
      estimatorTitle: 'ଅନୁମାନିତ ଖର୍ଚ୍ଚ କାଲକୁଲେଟର୍',
      estimatorSub: 'ଆପଣଙ୍କ ହସ୍ପିଟାଲ୍ ଗସ୍ତର ତୁରନ୍ତ ହିସାବ କରନ୍ତୁ',
      planSelectLabel: '୧. ମୂଳ ପ୍ଲାନ୍ ବାଛନ୍ତୁ',
      extraHoursLabel: '୨. ଅତିରିକ୍ତ ଘଣ୍ଟା ଆବଶ୍ୟକ କି?',
      stationPickupLabel: '୩. ରେଳ ଷ୍ଟେସନ୍ ସ୍ୱାଗତ ଆବଶ୍ୟକ କି?',
      estimatedFee: 'ଅନୁମାନିତ ସେବା ଶୁଳ୍କ',
      bookWithEstimate: 'ଏହି ହିସାବରେ ବୁକ୍ କରନ୍ତୁ',
    },
    companion: {
      badge: 'ଆମ ସହିତ ଯୋଡ଼ି ହୁଅନ୍ତୁ',
      heading: 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ସହିତ କାମ କରିବାକୁ ଚାହାଁନ୍ତି କି?',
      subheading: 'ରୋଗୀଙ୍କୁ ସାହାଯ୍ୟ କରନ୍ତୁ। ରୋଜଗାର କରନ୍ତୁ। ସମାଜରେ ପରିବର୍ତ୍ତନ ଆଣନ୍ତୁ।',
      desc: 'ଭାଇଜାଗ୍ ଆସୁଥିବା ବାହାର ରୋଗୀମାନଙ୍କୁ ସହାନୁଭୂତିର ସହ ସାହାଯ୍ୟ କରିବା ପାଇଁ ଆମ ନେଟୱାର୍କରେ ଯୋଗ ଦିଅନ୍ତୁ।',
      joinBtn: 'ସାଥୀ ଭାବେ ଯୋଗ ଦିଅନ୍ତୁ',
      hideBtn: 'ଫର୍ମ ବନ୍ଦ କରନ୍ତୁ',
    },
    about: {
      badge: 'ଆମ କାହାଣୀ',
      heading: 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ କାହିଁକି ଆରମ୍ଭ ହେଲା',
      p1: 'ପ୍ରତିଦିନ ଓଡ଼ିଶାର ବହୁ ପରିବାର ଉନ୍ନତ ଚିକିତ୍ସା ପାଇଁ ବିଶାଖାପାଟଣା (ଭାଇଜାଗ୍) ଯାତ୍ରା କରନ୍ତି। କିନ୍ତୁ ତେଲୁଗୁ ଭାଷା ନ ଜାଣିବା ଏବଂ ଅପରିଚିତ ପରିବେଶ ହେତୁ ସେମାନେ ହଇରାଣ ହୁଅନ୍ତି।',
      p2: 'ଏହି ଯାତ୍ରାକୁ ସହଜ, ସୁରକ୍ଷିତ ଏବଂ ଚିନ୍ତାମୁକ୍ତ କରିବା ଉଦ୍ଦେଶ୍ୟରେ ସ୍ଥାନୀୟ ମାନବୀୟ ସହାୟତା ଓ ଓଡ଼ିଆ ଭାଷା ସମର୍ଥନ ସହିତ ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ଆରମ୍ଭ ହୋଇଛି।',
      missionKicker: 'ଆମର ଲକ୍ଷ୍ୟ',
      missionText: '“ରୋଗୀ ଏବଂ ତାଙ୍କ ପରିବାର ପାଇଁ ହସ୍ପିଟାଲ୍ ଯାତ୍ରାକୁ ସରଳ, ସୁରକ୍ଷିତ ଏବଂ ଚାପମୁକ୍ତ କରିବା।”',
    },
    faq: {
      kicker: 'ସାଧାରଣ ପ୍ରଶ୍ନୋତ୍ତର',
      heading: 'ବାରମ୍ବାର ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନ',
      subheading: 'ଆମ ସେବା ସମ୍ବନ୍ଧରେ ଆପଣଙ୍କ ସମସ୍ତ ପ୍ରଶ୍ନର ସ୍ପଷ୍ଟ ଉତ୍ତର।',
      searchPlaceholder: 'ପ୍ରଶ୍ନ ଖୋଜନ୍ତୁ (ଯଥା: ଓଡ଼ିଶା, ବାପା-ମାଆ, ଭାଷା, ଷ୍ଟେସନ୍...)',
      contactText: 'ଅନ୍ୟ କିଛି ପ୍ରଶ୍ନ ପଚାରିବାକୁ ଚାହାଁନ୍ତି କି?',
      askWa: 'ହ୍ୱାଟ୍ସଆପରେ ପଚାରନ୍ତୁ',
    },
    booking: {
      kicker: 'ସହଜ ଅନୁରୋଧ',
      heading: 'ହସ୍ପିଟାଲ୍ ସହାୟତା ବୁକ୍ କରନ୍ତୁ',
      subheading: 'ତଳେ ଆପଣଙ୍କ ହସ୍ପିଟାଲ୍ ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ। ଆମେ ଶୀଘ୍ର ସାଥୀ ନିର୍ଦ୍ଧାରଣ କରି ଜଣାଇବୁ।',
      patientName: 'ରୋଗୀଙ୍କ ନାମ *',
      phone: 'ଫୋନ୍ ନମ୍ବର (ହ୍ୱାଟ୍ସଆପ୍) *',
      bookingFor: 'କାହା ପାଇଁ ବୁକ୍ କରୁଛନ୍ତି?',
      location: 'ରୋଗୀଙ୍କ ସହର / ସ୍ଥାନ (ଓଡ଼ିଶା)',
      hospital: 'ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍ ନାମ *',
      date: 'ଆପଏଣ୍ଟମେଣ୍ଟ ତାରିଖ *',
      service: 'ଆବଶ୍ୟକ ସେବା *',
      hours: 'ଆବଶ୍ୟକ ଘଣ୍ଟା',
      lang: 'ପସନ୍ଦର ଭାଷା (ସାଥୀ ପାଇଁ) *',
      emergencyContact: 'ଜରୁରୀକାଳୀନ ପରିବାର ଫୋନ୍ ନମ୍ବର *',
      additionalReqs: 'ଅନ୍ୟାନ୍ୟ ଆବଶ୍ୟକତା (ଇଚ୍ଛାଧୀନ)',
      notice: 'ଅଣ-ଚିକିତ୍ସକ ସୂଚନା: ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ କେବଳ ହସ୍ପିଟାଲ୍ ନାଭିଗେସନ୍, ଲାଇନ୍ ଏବଂ ଭାଷା ସହାୟତା ଯୋଗାଏ। ଆମେ ଚିକିତ୍ସା କରୁନାହୁଁ।',
      submitBtn: 'ସହାୟତା ଅନୁରୋଧ କରନ୍ତୁ',
      successTitle: 'ଧନ୍ୟବାଦ! ଆପଣଙ୍କ ଅନୁରୋଧ ଗ୍ରହଣ କରାଯାଇଛି।',
      successSub: 'ଆମ ଟିମ୍ ଖୁବ୍ ଶୀଘ୍ର ଆପଣଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରି ସାଥୀ ନିର୍ଦ୍ଦିଷ୍ଟ କରିବେ।',
      waContinueBtn: 'ହ୍ୱାଟ୍ସଆପରେ ଯୋଗାଯୋଗ ଜାରି ରଖନ୍ତୁ',
    },
    footer: {
      tagline: '“ଯେତେବେଳେ ଆପଣ ଉପସ୍ଥିତ ରହିପାରିବେ ନାହିଁ, ଆମେ ସେଠାରେ ଉପସ୍ଥିତ।”',
      desc: 'ବିଶାଖାପାଟଣାରେ ଅଣ-ଚିକିତ୍ସକ ରୋଗୀ ସହାୟତା ଏବଂ ବହୁଭାଷୀ ହସ୍ପିଟାଲ୍ ନାଭିଗେସନ୍।',
      quickNav: 'ଦ୍ରୁତ ଲିଙ୍କ୍',
      contact: 'ଭାଇଜାଗ୍ ଯୋଗାଯୋଗ',
      disclaimer: 'ଆଇନଗତ ସୂଚନା: ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ଅଣ-ଚିକିତ୍ସକ ସହାୟତା ପ୍ରଦାନ କରେ। ଆମେ କୌଣସି ଡାକ୍ତର, ନର୍ସ କିମ୍ବା ଆମ୍ବୁଲାନ୍ସ ସେବାର ବିକଳ୍ପ ନୋହୁଁ।',
    },
  },
};
