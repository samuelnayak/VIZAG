import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  Upload, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CompanionRegisterSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    city: 'Visakhapatnam',
    languages: ['Odia', 'Telugu'],
    fileName: '',
  });

  const perks = [
    {
      icon: Clock,
      title: language === 'or' ? 'ସୁବିଧାଜନକ ସମୟ' : 'Flexible Hours',
      desc: language === 'or' ? 'ନିଜ ଉପଲବ୍ଧତା ଅନୁଯାୟୀ କାର୍ଯ୍ୟ ବାଛନ୍ତୁ।' : 'Accept assistance requests matching your schedule.',
    },
    {
      icon: DollarSign,
      title: language === 'or' ? 'ସ୍ୱଚ୍ଛ ଦୈନିକ ପାଉଣା' : 'Transparent Payouts',
      desc: language === 'or' ? 'ପ୍ରତ୍ୟେକ ଗସ୍ତ ପାଇଁ ନ୍ୟାୟୋଚିତ ଓ ନିର୍ଭରଯୋଗ୍ୟ ଆୟ।' : 'Fair hourly payments sent directly to your account.',
    },
    {
      icon: ShieldCheck,
      title: language === 'or' ? 'ସ୍ଥାନୀୟ ସମ୍ମାନଜନକ କାର୍ଯ୍ୟ' : 'Local Vizag Jobs',
      desc: language === 'or' ? 'ଭାଇଜାଗ୍ ହସ୍ପିଟାଲରେ ରୋଗୀଙ୍କୁ ସହାନୁଭୂତିର ସହ ସାହାଯ୍ୟ।' : 'Dignified companion support in major Vizag hospitals.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="for-companions" className="py-12 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold">
            <HeartHandshake className="w-3.5 h-3.5 text-teal-300" />
            <span>{t.companion.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.companion.heading}
          </h2>

          <p className="text-lg sm:text-xl font-bold text-teal-400">
            {t.companion.subheading}
          </p>

          <p className="text-xs sm:text-sm text-slate-300">
            {t.companion.desc}
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsOpenForm(!isOpenForm)}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all cursor-pointer"
            >
              <span>{isOpenForm ? t.companion.hideBtn : t.companion.joinBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Clean Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-slate-800/80 rounded-xl p-4.5 border border-slate-700">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Minimal Companion Form */}
        {isOpenForm && (
          <div className="max-w-xl mx-auto bg-slate-800 rounded-2xl p-5 sm:p-7 border border-teal-500/60 shadow-lg">
            {submitted ? (
              <div className="text-center py-6 space-y-2">
                <FileCheck className="w-10 h-10 text-teal-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">
                  {language === 'or' ? 'ଅନୁରୋଧ ଗ୍ରହଣ କରାଯାଇଛି!' : 'Application Submitted!'}
                </h3>
                <p className="text-xs text-slate-300">
                  {language === 'or'
                    ? 'ଆମ ଭାଇଜାଗ୍ କୋର୍ଡିନେଟର ଆପଣଙ୍କ ଫୋନ୍ ନମ୍ବରରେ ଯୋଗାଯୋଗ କରିବେ।'
                    : 'Our coordinator will call you for a brief onboarding call.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="text-sm font-bold text-white border-b border-slate-700 pb-2">
                  {language === 'or' ? 'ସାଥୀ ପଞ୍ଜୀକରଣ ଫର୍ମ' : 'Companion Quick Registration'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1">
                      {language === 'or' ? 'ପୂରା ନାମ *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Subhashree M."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">
                      {language === 'or' ? 'ଫୋନ୍ ନମ୍ବର *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">
                    {language === 'or' ? 'ପରିଚୟ ପତ୍ର ଅପଲୋଡ୍ (ଆଧାର କାର୍ଡ୍)' : 'ID Document Upload (Aadhaar / Voter ID)'}
                  </label>
                  <label className="flex items-center justify-center gap-2 p-3 border border-dashed border-slate-600 rounded-lg bg-slate-900/80 cursor-pointer text-slate-300 hover:border-teal-400">
                    <Upload className="w-4 h-4 text-teal-400" />
                    <span className="truncate">{formData.fileName || (language === 'or' ? 'ଆଧାର କାର୍ଡ୍ ସିଲେକ୍ଟ କରନ୍ତୁ' : 'Select ID File')}</span>
                    <input
                      type="file"
                      accept=".pdf,image/*"
                      onChange={(e) => e.target.files?.[0] && setFormData({ ...formData, fileName: e.target.files[0].name })}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="text-[10px] text-slate-400">
                  {language === 'or'
                    ? 'ସୂଚନା: ପରିଚୟ ଯାଞ୍ଚ ଓ ଭାଷା ଦକ୍ଷତା ଆଧାରରେ ସାଥୀ ଚୟନ କରାଯାଏ।'
                    : 'Notice: Acceptance is subject to identity verification and local requirements in Vizag.'}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-lg transition-colors cursor-pointer"
                >
                  {language === 'or' ? 'ଆବେଦନ ଜମା କରନ୍ତୁ' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
