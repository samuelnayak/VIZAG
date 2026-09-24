import React from 'react';
import { 
  Languages, 
  CheckCircle2, 
  ShieldAlert, 
  Volume2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSupportSection: React.FC = () => {
  const { t, language } = useLanguage();

  const languageCards = [
    {
      native: 'ଓଡ଼ିଆ',
      langName: 'Odia',
      role: language === 'or' ? 'ରୋଗୀ ଓ ପରିବାରର ଭାଷା' : 'Patient & Family Language',
      desc: language === 'or' ? 'ମାତୃଭାଷାରେ ହସ୍ପିଟାଲ୍ କାର୍ଯ୍ୟ ବୁଝିବା ଓ କଥାବାର୍ତ୍ତା କରିବା।' : 'Comforting patients from Odisha in their mother tongue.',
      examples: [
        { phrase: '“Hospital ku kemiti jibi?”', meaning: language === 'or' ? 'ହସ୍ପିଟାଲକୁ କିପରି ଯିବି?' : 'How do I reach the hospital?' },
        { phrase: '“Doctor ketebele basibe?”', meaning: language === 'or' ? 'ଡାକ୍ତର କେତେବେଳେ ବସିବେ?' : 'What time does the doctor start?' },
      ],
      border: 'border-amber-200 bg-amber-50/40',
    },
    {
      native: 'తెలుగు',
      langName: 'Telugu',
      role: language === 'or' ? 'ସ୍ଥାନୀୟ ହସ୍ପିଟାଲ୍ କାଉଣ୍ଟର ଭାଷା' : 'Local Hospital Staff & Desk Language',
      desc: language === 'or' ? 'ରେଜିଷ୍ଟ୍ରେସନ୍, ବିଲିଂ ଓ ଔଷଧ କାଉଣ୍ଟରରେ କଥାବାର୍ତ୍ତା।' : 'Communicating with registration, billing, and lab desks in AP.',
      examples: [
        { phrase: '“Registration ekkada?”', meaning: language === 'or' ? 'ରେଜିଷ୍ଟ୍ରେସନ୍ କାଉଣ୍ଟର କେଉଁଠାରେ?' : 'Where is the registration desk?' },
        { phrase: '“Report ekkada collect cheyyali?”', meaning: language === 'or' ? 'ରିପୋର୍ଟ କେଉଁଠାରୁ ମିଳିବ?' : 'Where do I collect the scan report?' },
      ],
      border: 'border-teal-200 bg-teal-50/40',
    },
    {
      native: 'English',
      langName: 'English',
      role: language === 'or' ? 'ହସ୍ପିଟାଲ୍ ଫାଇଲ୍ ଓ ସାଇନବୋର୍ଡ୍' : 'Hospital Slips & Signboards',
      desc: language === 'or' ? 'ବିଭାଗୀୟ ସାଇନବୋର୍ଡ୍ ଓ ପ୍ରେସକ୍ରିପସନ୍ ନିର୍ଦ୍ଦେଶ।' : 'Clarifying department signs, tokens, and billing slips.',
      examples: [
        { phrase: '“Diagnostic Block B / Ultrasound”', meaning: language === 'or' ? 'ଅଲଟ୍ରାସାଉଣ୍ଡ ଓ ସ୍କାନ୍ ରୁମ୍' : 'Locating radiology and scan rooms' },
        { phrase: '“OPD Token Billing Window”', meaning: language === 'or' ? 'ଓପିଡି ଟୋକନ୍ କାଉଣ୍ଟର' : 'Fee payments & registration desk' },
      ],
      border: 'border-sky-200 bg-sky-50/40',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
            <Languages className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.languages.kicker}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.languages.heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            {t.languages.subheading}
          </p>
        </div>

        {/* 3 Clean Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {languageCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 sm:p-6 border ${card.border} shadow-2xs flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {card.native}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                    {card.langName}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {card.role}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {card.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Volume2 className="w-3 h-3" /> Examples:
                  </span>
                  {card.examples.map((ex, eIdx) => (
                    <div key={eIdx} className="bg-white p-2 rounded-lg border border-slate-200 text-xs">
                      <span className="font-bold text-slate-800 block">{ex.phrase}</span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">→ {ex.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-teal-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Navigated smoothly with your Sathi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet disclaimer */}
        <div className="mt-8 bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600 max-w-3xl mx-auto">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>{t.languages.disclaimer}</p>
        </div>

      </div>
    </section>
  );
};
