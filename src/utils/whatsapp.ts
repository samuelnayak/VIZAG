const WHATSAPP_PHONE_NUMBER = '918114913690';

export const buildWhatsAppUrl = (message?: string): string => {
  if (!message) {
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`;
};

export const QUICK_WHATSAPP_MESSAGES = {
  general: 'Hello Vizag Medical Sathi, I need help with a hospital visit in Vizag.',
  odisha: 'Hello Vizag Medical Sathi, I am travelling from Odisha to Vizag and need help with hospital treatment.',
  elderlyParents: 'Hello Vizag Medical Sathi, I live outside Vizag and need companion assistance for my elderly parents.',
  language: 'Hello Vizag Medical Sathi, I need an Odia-speaking companion for a hospital visit in Vizag.',
};
