import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ShieldAlert,
  X
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [modalPolicy, setModalPolicy] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {language === 'or' ? 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ' : 'Vizag Medical Sathi'}
              </span>
            </div>

            <p className="text-sm font-serif italic text-teal-300">
              {t.footer.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              {t.footer.quickNav}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#home" className="hover:text-teal-400 transition-colors">{t.nav.home}</a>
              <a href="#services" className="hover:text-teal-400 transition-colors">{t.nav.services}</a>
              <a href="#how-it-works" className="hover:text-teal-400 transition-colors">{t.nav.howItWorks}</a>
              <a href="#for-families" className="hover:text-teal-400 transition-colors">{t.nav.forFamilies}</a>
              <a href="#pricing" className="hover:text-teal-400 transition-colors">{t.nav.pricing}</a>
              <a href="#faq" className="hover:text-teal-400 transition-colors">{t.nav.faq}</a>
              <button
                onClick={() => setModalPolicy('privacy')}
                className="hover:text-teal-400 transition-colors text-left cursor-pointer"
              >
                Privacy
              </button>
              <button
                onClick={() => setModalPolicy('terms')}
                className="hover:text-teal-400 transition-colors text-left cursor-pointer"
              >
                Terms
              </button>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-2.5 text-xs text-slate-400">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              {t.footer.contact}
            </h4>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:8114913690" className="hover:text-white">
                  8114913690
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={buildWhatsAppUrl(language === 'or' ? 'ନମସ୍କାର ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ, ମୋତେ ଭାଇଜାଗରେ ସହାୟତା ଦରକାର।' : 'Hello Vizag Medical Sathi, I need assistance in Vizag.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300"
                >
                  WhatsApp Assistance
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Prominent Legal Disclaimer Strip */}
      <div className="border-t border-slate-800 bg-black/40 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p>{t.footer.disclaimer}</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-900 py-3 px-4 text-center text-[10px] text-slate-500">
        © {new Date().getFullYear()} Vizag Medical Sathi. All rights reserved.
      </div>

      {/* Policy Modal */}
      {modalPolicy && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-2xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setModalPolicy(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {modalPolicy === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Vizag Medical Sathi respects patient confidentiality. We only collect details necessary for companion scheduling and WhatsApp status updates. We are strictly a non-clinical patient accompaniment and navigation service.
            </p>

            <div className="mt-5 text-right">
              <button
                onClick={() => setModalPolicy(null)}
                className="px-4 py-1.5 text-xs font-bold bg-teal-700 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
