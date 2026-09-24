import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  PhoneCall, 
  Languages, 
  User, 
  Phone, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { buildWhatsAppUrl, QUICK_WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { VIZAG_HOSPITALS } from '../data/hospitals';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t, language } = useLanguage();

  // Typeable Hero Form State
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    hospital: 'Apollo Health City',
    date: new Date().toISOString().split('T')[0],
    preferredLang: 'Odia',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone) {
      return;
    }

    const greeting = language === 'or'
      ? 'ନମସ୍କାର ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ, ମୁଁ ହସ୍ପିଟାଲ୍ ସହାୟତା ବୁକ୍ କରିବାକୁ ଚାହୁଁଛି:'
      : 'Hello Vizag Medical Sathi, I would like to book hospital assistance:';

    const message = `${greeting}
• Patient: ${formData.patientName}
• Phone: ${formData.phone}
• Hospital: ${formData.hospital}
• Date: ${formData.date}
• Language Needed: ${formData.preferredLang}`;

    setSubmitted(true);
    // Directly open WhatsApp with user's typed details
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      patientName: '',
      phone: '',
      hospital: 'Apollo Health City',
      date: new Date().toISOString().split('T')[0],
      preferredLang: 'Odia',
    });
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Multilingual Highlight Bar */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/90 border border-teal-200 text-teal-900 text-xs font-semibold">
              <Languages className="w-3.5 h-3.5 text-teal-700" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              {t.hero.headline} <br />
              <span className="text-teal-700 underline decoration-teal-300 decoration-2">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Clean Trust Points */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                {t.hero.trustPoint1}
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <Users className="w-4 h-4 text-emerald-600" />
                {t.hero.trustPoint2}
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <MessageCircle className="w-4 h-4 text-teal-600" />
                {t.hero.trustPoint3}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>{t.hero.bookBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={buildWhatsAppUrl(QUICK_WHATSAPP_MESSAGES.odisha)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.whatsappBtn}</span>
              </a>
            </div>

            {/* Helpline helper */}
            <div className="pt-1 flex items-center gap-1.5 text-xs text-slate-500">
              <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.hero.helplineText}</span>
              <a href="tel:8114913690" className="font-bold text-slate-800 hover:text-teal-700 underline">
                8114913690
              </a>
            </div>

          </div>

          {/* Right Column: Typeable Quick Booking Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all">
              
              {/* Form Card Header */}
              <div className="bg-gradient-to-r from-teal-800 to-teal-900 text-white p-4 sm:p-5">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                      {language === 'or' ? 'ଭାଇଜାଗରେ ସାଥୀ ଉପଲବ୍ଧ' : 'Sathi Available in Vizag'}
                    </span>
                  </div>
                  <span className="text-[11px] bg-teal-950/70 border border-teal-700/60 px-2 py-0.5 rounded-full text-teal-200 font-semibold">
                    15 Min Response
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  {language === 'or' ? 'ତୁରନ୍ତ ହସ୍ପିଟାଲ୍ ସହାୟତା ବୁକ୍ କରନ୍ତୁ' : 'Quick Hospital Assistance Booking'}
                </h3>
                <p className="text-xs text-teal-100/90 mt-0.5">
                  {language === 'or' ? 'ତଳେ ବିବରଣୀ ଲେଖନ୍ତୁ ଓ ସିଧାସଳଖ ହ୍ୱାଟ୍ସଆପରେ ସାଥୀ ପାଆନ୍ତୁ' : 'Fill details below to book your verified local companion'}
                </p>
              </div>

              {/* Form Body */}
              <div className="p-4 sm:p-6">
                {submitted ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-extrabold text-slate-900">
                        {language === 'or' ? 'ଅନୁରୋଧ ପ୍ରସ୍ତୁତ ହୋଇଛି!' : 'Request Ready!'}
                      </h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        {language === 'or' 
                          ? `ରୋଗୀ: ${formData.patientName} (${formData.hospital})। ସାଥୀ ନିଯୁକ୍ତି ପାଇଁ ହ୍ୱାଟ୍ସଆପରେ ଯୋଗାଯୋଗ କରନ୍ତୁ।` 
                          : `Patient: ${formData.patientName} at ${formData.hospital}. Proceed on WhatsApp to confirm your Sathi.`}
                      </p>
                    </div>

                    <div className="pt-2 space-y-2">
                      <a
                        href={buildWhatsAppUrl(
                          `Hello Vizag Medical Sathi, I want to book assistance for ${formData.patientName} at ${formData.hospital} on ${formData.date}. Phone: ${formData.phone}, Language: ${formData.preferredLang}`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                        <span>{language === 'or' ? 'ହ୍ୱାଟ୍ସଆପରେ କଥା ହୁଅନ୍ତୁ (8114913690)' : 'Chat on WhatsApp (8114913690)'}</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto cursor-pointer"
                      >
                        {language === 'or' ? 'ଅନ୍ୟ ବୁକିଂ କରନ୍ତୁ' : 'Book for another visit / Edit details'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                    
                    {/* Patient Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'or' ? 'ରୋଗୀଙ୍କ ନାମ *' : 'Patient / Attendant Name *'}
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          required
                          value={formData.patientName}
                          onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                          placeholder={language === 'or' ? 'ଉଦାହରଣ: ରମେଶ କୁମାର ପଣ୍ଡା' : 'e.g. Ramesh Kumar Panda'}
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'or' ? 'ହ୍ୱାଟ୍ସଆପ୍ ଫୋନ୍ ନମ୍ବର *' : 'WhatsApp Phone Number *'}
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={language === 'or' ? 'ଉଦାହରଣ: 81149 13690' : 'e.g. 81149 13690'}
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Hospital & Date row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {language === 'or' ? 'ଭାଇଜାଗ୍ ହସ୍ପିଟାଲ୍ *' : 'Vizag Hospital *'}
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
                          <select
                            value={formData.hospital}
                            onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                            className="w-full pl-8 pr-2 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium"
                          >
                            {VIZAG_HOSPITALS.map((h) => (
                              <option key={h.id} value={h.name}>
                                {h.name}
                              </option>
                            ))}
                            <option value="Other Clinic">Other Clinic / Scan Center</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {language === 'or' ? 'ଗସ୍ତ ତାରିଖ *' : 'Visit Date *'}
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full pl-8 pr-2 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferred Language */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {language === 'or' ? 'ପସନ୍ଦର ଭାଷା (ସାଥୀ ପାଇଁ) *' : 'Companion Language *'}
                      </label>
                      <div className="relative">
                        <Languages className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                        <select
                          value={formData.preferredLang}
                          onChange={(e) => setFormData({ ...formData, preferredLang: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium"
                        >
                          <option value="Odia">Odia (ଓଡ଼ିଆ)</option>
                          <option value="Telugu">Telugu (తెలుగు)</option>
                          <option value="English">English</option>
                          <option value="Hindi">Hindi</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-2 py-3 px-4 text-xs sm:text-sm font-extrabold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-300" />
                      <span>{language === 'or' ? 'ସାଥୀ ବୁକ୍ କରନ୍ତୁ (8114913690)' : 'Book Sathi Now (8114913690)'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Trust Footnote */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-teal-800 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                        {language === 'or' ? 'ଅଗ୍ରିମ ଦେୟ ଆବଶ୍ୟକ ନାହିଁ' : 'Zero advance needed'}
                      </span>
                      <span className="text-slate-400">
                        {language === 'or' ? 'ଅଣ-ଚିକିତ୍ସକ ସହାୟତା' : 'Non-clinical navigation'}
                      </span>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
