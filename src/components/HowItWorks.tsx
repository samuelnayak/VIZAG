import React from 'react';
import { 
  ClipboardList, 
  Hospital, 
  UserCheck, 
  HelpingHand, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const steps = [
    {
      step: '1',
      title: t.howItWorks.s1Title,
      desc: t.howItWorks.s1Desc,
      icon: ClipboardList,
    },
    {
      step: '2',
      title: t.howItWorks.s2Title,
      desc: t.howItWorks.s2Desc,
      icon: Hospital,
    },
    {
      step: '3',
      title: t.howItWorks.s3Title,
      desc: t.howItWorks.s3Desc,
      icon: UserCheck,
    },
    {
      step: '4',
      title: t.howItWorks.s4Title,
      desc: t.howItWorks.s4Desc,
      icon: HelpingHand,
    },
    {
      step: '5',
      title: t.howItWorks.s5Title,
      desc: t.howItWorks.s5Desc,
      icon: Smartphone,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            {t.howItWorks.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorks.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.howItWorks.subheading}
          </p>
        </div>

        {/* 5-Step Clean Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <span>{t.howItWorks.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
