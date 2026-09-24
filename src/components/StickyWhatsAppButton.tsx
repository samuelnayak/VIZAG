import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, QUICK_WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export const StickyWhatsAppButton: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <a
        href={buildWhatsAppUrl(QUICK_WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer group"
        aria-label="Chat on WhatsApp with 8114913690"
        title="WhatsApp: 8114913690"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
        <span className="text-xs sm:text-sm font-bold tracking-tight">
          {language === 'or' ? 'ହ୍ୱାଟ୍ସଆପ୍ (8114913690)' : 'WhatsApp (8114913690)'}
        </span>
      </a>
    </div>
  );
};
