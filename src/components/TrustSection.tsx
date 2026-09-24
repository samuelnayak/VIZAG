import React from 'react';
import { 
  ShieldCheck, 
  Languages, 
  Receipt, 
  MessageSquare, 
  AlertCircle, 
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustSection: React.FC = () => {
  const { t, language } = useLanguage();

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: t.trust.verifiedTitle,
      desc: t.trust.verifiedDesc,
    },
    {
      icon: Languages,
      title: t.trust.langTitle,
      desc: t.trust.langDesc,
    },
    {
      icon: Receipt,
      title: t.trust.priceTitle,
      desc: t.trust.priceDesc,
    },
    {
      icon: MessageSquare,
      title: t.trust.updateTitle,
      desc: t.trust.updateDesc,
    },
    {
      icon: AlertCircle,
      title: t.trust.nonClinicalTitle,
      desc: t.trust.nonClinicalDesc,
    },
    {
      icon: Headphones,
      title: t.trust.safetyTitle,
      desc: t.trust.safetyDesc,
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>{t.trust.kicker}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.trust.heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            {t.trust.subheading}
          </p>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'or' ? 'ଭାଇଜାଗ୍ ମେଡିକାଲ୍ ସାଥୀ ମାନକ' : 'Vizag Medical Sathi Standard'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Companions DO vs DO NOT do */}
        <div className="mt-8 sm:mt-10 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 max-w-3xl mx-auto shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100 space-y-1.5">
              <span className="font-bold text-emerald-900 block pb-1 border-b border-emerald-200">
                ✓ {t.trust.doTitle}
              </span>
              <ul className="space-y-1 text-slate-700 text-xs">
                <li>• {language === 'or' ? 'ହସ୍ପିଟାଲ୍ ବିଭାଗ ଓ କାଉଣ୍ଟର ମାର୍ଗଦର୍ଶନ' : 'Guide through hospital departments & desks'}</li>
                <li>• {language === 'or' ? 'ଓପିଡି ଟୋକନ୍ ଓ ବିଲିଂ ଲାଇନରେ ସାହାଯ୍ୟ' : 'OPD token queues and billing assistance'}</li>
                <li>• {language === 'or' ? 'ଓଡ଼ିଆ, ତେଲୁଗୁ ଓ ଇଂରାଜୀ ଭାଷା କଥାବାର୍ତ୍ତା' : 'Odia, Telugu & English translation support'}</li>
                <li>• {language === 'or' ? 'ହୁଇଲଚେୟାର୍ ଓ ଚଲାବୁଲା ସହାୟତା' : 'Wheelchair mobility & walking guidance'}</li>
                <li>• {language === 'or' ? 'ପରିବାରକୁ ହ୍ୱାଟ୍ସଆପରେ ଲାଇଭ୍ ତଥ୍ୟ' : 'Live WhatsApp updates to remote family'}</li>
              </ul>
            </div>

            <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100 space-y-1.5">
              <span className="font-bold text-rose-900 block pb-1 border-b border-rose-200">
                ✕ {t.trust.dontTitle}
              </span>
              <ul className="space-y-1 text-slate-700 text-xs">
                <li>• {language === 'or' ? 'ଡାକ୍ତରୀ ଚିକିତ୍ସା ବା ରୋଗ ନିର୍ଣ୍ଣୟ' : 'Medical diagnosis or clinical advice'}</li>
                <li>• {language === 'or' ? 'ଇଞ୍ଜେକ୍ସନ୍, ଔଷଧ ଦେବା ବା ସାଲାଇନ୍' : 'Injections, nursing, or medication administration'}</li>
                <li>• {language === 'or' ? 'ଡାକ୍ତର ବା ନର୍ସଙ୍କ ବିକଳ୍ପ ହେବା' : 'Replace qualified physicians or nurses'}</li>
                <li>• {language === 'or' ? 'ଜରୁରୀକାଳୀନ ଆମ୍ବୁଲାନ୍ସ ପରିଚାଳନା' : 'Emergency ambulance or critical life-support'}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
