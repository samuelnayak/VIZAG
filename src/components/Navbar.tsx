import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight,
  Globe
} from 'lucide-react';
import { buildWhatsAppUrl, QUICK_WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.forFamilies, href: '#for-families' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.forCompanions, href: '#for-companions' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Minimal Strip: Focus on Non-clinical notice + Quick Phone */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-teal-400 font-medium truncate">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{t.nav.nonClinicalBadge} · Vizag</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="tel:8114913690" 
              className="flex items-center gap-1 text-slate-200 hover:text-teal-300 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span>{t.nav.callUs}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-white transition-all ${isScrolled ? 'shadow-md border-b border-slate-200/80 py-2.5' : 'border-b border-slate-100 py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-xs shrink-0">
              <HeartHandshake className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-slate-900 leading-tight">
                {language === 'or' ? 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ' : 'Vizag Medical Sathi'}
              </span>
              <span className="hidden sm:block text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-tight">
                {language === 'or' ? '“ଆମେ ସବୁବେଳେ ଆପଣଙ୍କ ସାଥୀରେ”' : '“When you can\'t be there, we\'re there.”'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-teal-700 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Controls: Language Switcher + Booking CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Segmented Control */}
            <div className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-xl border border-slate-200 shrink-0" title="Switch Language / ଭାଷା ବଦଳାନ୍ତୁ">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-label="Switch to English"
              >
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('or')}
                className={`px-2 sm:px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer font-serif ${
                  language === 'or'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                aria-label="Switch to Odia (ଓଡ଼ିଆ)"
              >
                ଓଡ଼ିଆ
              </button>
            </div>

            {/* Desktop CTAs */}
            <a
              href={buildWhatsAppUrl(QUICK_WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs transition-all cursor-pointer shrink-0"
            >
              <span>{t.nav.bookAssistance}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
            {/* Mobile Language Switcher Highlight */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-teal-600" />
                <span>{language === 'or' ? 'ଭାଷା ବାଛନ୍ତୁ:' : 'Select Language:'}</span>
              </span>
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-md ${
                    language === 'en' ? 'bg-teal-700 text-white' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('or')}
                  className={`px-3 py-1 text-xs font-bold rounded-md ${
                    language === 'or' ? 'bg-teal-700 text-white' : 'text-slate-600'
                  }`}
                >
                  ଓଡ଼ିଆ
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs flex items-center justify-center gap-2"
              >
                <span>{t.nav.bookAssistance}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={buildWhatsAppUrl(QUICK_WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp (8114913690)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
